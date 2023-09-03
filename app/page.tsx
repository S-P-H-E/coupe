

import Download from '@/components/Download';
import { Progress } from 'antd';
import Image from 'next/image';


export default function Home() {
  const goal = 382000;
  const current = 336.88;
  const percentage = ((current / goal) * 100).toFixed(3); // Rounding to 3 decimal places

  const formattedGoal = goal.toLocaleString(); // Format the goal number with commas

  return (
    <div className='flex flex-col gap-5 justify-center items-center h-screen p-5'>
      <div className="relative w-full md:w-[500px] md:h-[200px] flex justify-center items-center m-5 shadow-xl rounded-xl">
        {/* <div className='absolute top-6 bg-gradient-to-t from-black w-full h-full rounded-xl flex justify-center items-end text-white p-5'>
          <h1 className='text-2xl font-medium'>Mclaren 765lt </h1>
        </div> */}
        <Image alt='car' src={'/images/angled.png'} width={500} height={0} className='rounded-xl'/>
      </div>

      <div className="bg-[#292929] text-white w-full md:w-[500px] h-[200px] rounded-xl shadow-xl p-5">
        <div className='flex flex-col justify-center items-center h-full'>
          <h1 className='text-4xl font-medium'>{percentage}%</h1>
          <h1 className='text-sm text-[#9D9D9D]'>${current} ➔ ${formattedGoal}</h1>
        </div>
        <Progress percent={parseFloat(percentage)} strokeColor="white" showInfo={false}/>
      </div>

      <Download />
    </div>
  );
}
