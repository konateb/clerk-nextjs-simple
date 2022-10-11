import { NextPage } from "next/types";

const Dashboard: NextPage = () => {
  return (
    <div className="flex h-full flex-col justify-center items-center">
      <h1 className="text-4xl mb-5 font-bold">Sommaire de mon cours</h1>
      <span className="text-7xl">💬</span>
    </div>
  );
};

export default Dashboard;
