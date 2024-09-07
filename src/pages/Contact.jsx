import React from 'react';
import Layout from '../components/Layout';

const Contact = () => {
  return (
    <Layout>
      <h1 className="font-bold text-5xl">ติดต่อ</h1>
      <hr className="my-4 border-green-500" />
      <p className="mt-8 mb-20 text-gray-700">
      NVC Treining Center
      </p>
      <div className="flex flex-col items-center">
        <span className="text-lg">Addres:90 Tesa Rd., Nakhon Pathom,73000</span>
        <br />
        <span className="text-lg">TEL: 062-876-33xx</span>
        <br />
        <span className="text-lg">Email: Kunakon@gmail.com</span>
      </div>
    </Layout>
  );
}

export default Contact;
