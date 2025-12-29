import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4 sm:px-6 lg:px-20">
      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-lg p-8 space-y-8">
        <h1 className="text-4xl font-bold text-center">About K-Five</h1>

        <p className="text-gray-700 text-lg">
          Welcome to <span className="font-semibold text-blue-600">K-Five</span>, your ultimate online shopping destination! We bring together the best in fashion and jewelry for men and women, along with the latest electronics and gadgets — all under one roof for a seamless and exciting shopping experience.
        </p>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">Our Mission</h2>
          <p className="text-gray-700 text-base">
            At K-Five, our mission is to empower your style and tech lifestyle by offering high-quality products across men's clothing, women's clothing, jewelry, and electronics. We're dedicated to providing trendy, reliable, and affordable options that help you express yourself and stay connected in today's fast-paced world.
          </p>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">Why Choose K-Five?</h2>
          <ul className="list-disc pl-6 text-gray-700 space-y-2">
            <li>Curated selection of trendy men's and women's clothing</li>
            <li>Stunning jewelry pieces to complete any look</li>
            <li>Cutting-edge electronics from trusted brands</li>
            <li>Fast, secure shipping and easy tracking</li>
            <li>Exceptional customer support and hassle-free returns</li>
          </ul>
        </div>

        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-blue-600">Our Vision</h2>
          <p className="text-gray-700 text-base">
            We envision K-Five as the go-to platform where fashion meets technology. We're committed to expanding our categories, staying on top of trends, and delivering products that enhance your everyday life — whether it's a perfect outfit, elegant jewelry, or the newest gadget.
          </p>
        </div>

        <div className="text-center mt-10">
          <h3 className="text-xl font-semibold text-blue-600 mb-2">Join the K-Five Family</h3>
          <p className="text-gray-700 mb-4">
            Whether you're updating your wardrobe, searching for the perfect accessory, or upgrading your tech — K-Five has it all for you.
          </p>
          <Link to={'/product'}>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-xl hover:bg-blue-700 transition duration-300">
              Start Shopping
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default About;