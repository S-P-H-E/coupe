"use client"

import { FC, useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from '@/firebase';
import Download from '@/components/Download';
import { Progress } from 'antd';
import Image from 'next/image';

// Define the DashboardProps interface
interface CoupeProps {
    col: Array<any>; // Ensure that courses is always an array
}

// Define the Dashboard functional component
const Coupe: FC<CoupeProps> = ({ col }) => {
    // State to store the fetched courses
    const [data, setData] = useState<Array<any>>(col);

    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const colRef = collection(db, 'coupe');
                const snapshot = await getDocs(colRef);
                const colData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
                setData(colData);
            } catch (error) {
                console.error('Error fetching collection:', error);
                // Handle the error here if needed
            }
        };

        fetchCourses();
    }, []); // Empty dependency array to ensure it only runs once on mount

    console.log(data[0])
    // Assuming you want to access the goal and profit properties of the first object in the col array
    const firstItem = data[0];
    const goal = firstItem?.goal || 0; // Default to 0 if goal is not defined
    const current = firstItem?.profit || 0; // Default to 0 if profit is not defined

    const percentage = ((current / goal) * 100).toFixed(3); // Rounding to 3 decimal places

    const formattedGoal = goal.toLocaleString(); // Format the goal number with commas

    return (
        <div className='flex flex-col gap-5 justify-center items-center h-screen p-5'>
            <div className="relative w-full md:w-[500px] md:h-[200px] flex justify-center items-center m-5 shadow-xl rounded-xl">
                <Image alt='car' src={'/images/angled.png'} width={500} height={0} className='rounded-xl' />
            </div>

            <div className="bg-[#292929] text-white w-full md:w-[500px] h-[200px] rounded-xl shadow-xl p-5">
                <div className='flex flex-col justify-center items-center h-full'>
                    <h1 className='text-4xl font-medium'>{percentage}%</h1>
                    <h1 className='text-sm text-[#9D9D9D]'>${current} ➔ ${formattedGoal}</h1>
                </div>
                <Progress percent={parseFloat(percentage)} strokeColor="white" showInfo={false} />
            </div>

            <Download />
        </div>
    );
};

export default Coupe;
