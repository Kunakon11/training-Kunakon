import React from "react";
import Layout from "../components/Layout";

const Home = () => {
  return (
    <Layout>
      <div className="flex flex-col items-center justify-center">
 <h1 className="font-bold text-5xl text-black mb-8 text-left">
    หน้าหลัก
  </h1>
        <img src="https://www.sti.chula.ac.th/wp-content/uploads/2019/11/shutterstock_1348370489-1024x683.jpg" alt="Training Center Image" className="mt-8 w-full h-auto"/>

      </div>
    </Layout>
  );
};

export default Home;
