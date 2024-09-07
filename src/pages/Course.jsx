import React from "react";
import Layout from "../components/Layout";

const About = () => {
  return (
    <Layout>
      <div className="bg-white py-8 px-4 sm:px-6 lg:px-8">
        <h1 className="font-bold text-4xl text-blue-950 mb-6 border-b-2 border-gray-300 pb-2">
          หลักสูตรที่เปิดสอน
        </h1>

        
        <div className="space-y-12">
          {/* เริ่มแสดงแต่ละข่าว */}
          <div className="flex flex-col sm:flex-row items-center">
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/457515419_466019079759570_4794481852196949195_n.png?stp=dst-png_s240x240&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeGnkFemvoHxzOFyzc4DEshsQKyRm-QU5ThArJGb5BTlOI8-X1zcw_AsotZ1jomQPXHNFQx4A326GShZBD7vJ8jW&_nc_ohc=NIH56ftdnP0Q7kNvgGNuoxy&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QEDKTaxWOrHrz7UudCCKxheZGC7yMr9E_GVYitU0l8f6Q&oe=6703E49B"
              alt="Basic React Native"
              className="w-full sm:w-1/3 h-auto rounded-lg shadow-lg"
            />
            <div className="mt-4 sm:mt-0 sm:ml-8">
              <h3 className="text-2xl font-bold text-gray-900">
              Basic React Native
              </h3>
              <p className="mt-2 text-gray-600">
              ระยะเวลา(วัน)5
              </p>
              <p className="mt-2 text-gray-600">
              ราคา 7500 บาท
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center">
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/457439713_1056774622906304_3370642406202038301_n.png?stp=dst-png_s240x240&_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeHo7fGAvLKyWJr1Ys6BOMcNUCha2ksxmatQKFraSzGZqxbkOzpcHX3Ke6V7Dd4dhUuqTWQ-oZCtTrd5dToG2eC-&_nc_ohc=bLdatLEdcMoQ7kNvgGNc6_s&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QG5q33JuoWR5gNbGCDItl4DIDfbY04K3a6iQRCUvGwaEw&oe=6703FE9E"
              alt="Power BI Dashboard"
              className="w-full sm:w-1/3 h-auto rounded-lg shadow-lg"
            />
            <div className="mt-4 sm:mt-0 sm:ml-8">
              <h3 className="text-2xl font-bold text-gray-900">
              Power BI Dashboard
              </h3>
              <p className="mt-2 text-gray-600">
              ระยะเวลา(วัน)4
              </p>
              <p className="mt-2 text-gray-600">
              ราคา 5500 บาท
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center">
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/458408963_1228593765151958_3806946804551374025_n.png?stp=dst-png_s240x240&_nc_cat=109&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeFio9cGZ-e_NpdPCy__01bi_q9vgnN8b4z-r2-Cc3xvjGtmR1GF8ef_R7SqCE80vLosZb9oxGtgaKCRUKucCh9X&_nc_ohc=EbXI6amyea4Q7kNvgF1dSV8&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QG6a5eEaUV_KPcHTedUmPQ67AxXGQaTdFtLpzVdSJX25g&oe=6703DCA6"
              alt="UI Design with Figma"
              className="w-full sm:w-1/3 h-auto rounded-lg shadow-lg"
            />
            <div className="mt-4 sm:mt-0 sm:ml-8">
              <h3 className="text-2xl font-bold text-gray-900">
              UI Design with Figma
              </h3>
              <p className="mt-2 text-gray-600">
              ระยะเวลา(วัน)3
              </p>
              <p className="mt-2 text-gray-600">
              ราคา 5000 บาท
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row items-center">
            <img
              src="https://scontent.xx.fbcdn.net/v/t1.15752-9/457404464_3645147969073180_2817047069808753143_n.png?stp=dst-png_s240x240&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEjIqKy7C4iz5FTIyAjYY17inzSTNhlVuqKfNJM2GVW6poprchjm6zjX462ljey8VN9u06pLq4IQ--cURiYJG3Y&_nc_ohc=6oqYrpzSsKQQ7kNvgE6mv6H&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFziB2xB37TMW-5nNzVYZAUrpbUFkbBQu7Rnb7-oNsa2w&oe=6703EBB1https://scontent.xx.fbcdn.net/v/t1.15752-9/457404464_3645147969073180_2817047069808753143_n.png?stp=dst-png_s240x240&_nc_cat=100&ccb=1-7&_nc_sid=0024fc&_nc_eui2=AeEjIqKy7C4iz5FTIyAjYY17inzSTNhlVuqKfNJM2GVW6poprchjm6zjX462ljey8VN9u06pLq4IQ--cURiYJG3Y&_nc_ohc=6oqYrpzSsKQQ7kNvgE6mv6H&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.xx&oh=03_Q7cD1QFziB2xB37TMW-5nNzVYZAUrpbUFkbBQu7Rnb7-oNsa2w&oe=6703EBB1"
              alt="Cross Platform with Flutter"
              className="w-full sm:w-1/3 h-auto rounded-lg shadow-lg"
            />
            <div className="mt-4 sm:mt-0 sm:ml-8">
              <h3 className="text-2xl font-bold text-gray-900">
              Cross Platform with Flutter
              </h3>
              <p className="mt-2 text-gray-600">
              ระยะเวลา(วัน)5
              </p>
              <p className="mt-2 text-gray-600">
              ราคา 6500 บาท
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
