import Coupe from "@/components/Coupe";


export default function Home() {
  const goal = 382000;
  const current = 336.88;
  const percentage = ((current / goal) * 100).toFixed(3); // Rounding to 3 decimal places

  const formattedGoal = goal.toLocaleString(); // Format the goal number with commas

  return (
    <Coupe col={[]} />
  );
}
