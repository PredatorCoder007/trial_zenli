import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



function Footer() {
  return (
    <>
      <div className="bg-gray-50/70 dark:bg-gray-950/70 h-1/2 w-full flex md:flex-row flex-col justify-around items-start p-20">
        <div className="p-5">
          <ul>
            <p className="text-gray-800 dark:text-gray-200 font-bold text-3xl pb-6">
              <span className="text-blue-600 dark:text-blue-400">z</span>ENLI
            </p>
            <div className="flex gap-6 pb-5">
              <FaInstagram className="text-2xl cursor-pointer hover:text-yellow-600" />
              <FaTwitter className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 dark:text-gray-200 font-bold text-2xl pb-4">Learn More</p>
            <li className="text-gray-500 dark:text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              About zENLI
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Career 
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Privacy Policy
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Terms & Condition
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 dark:text-gray-200 font-bold text-2xl pb-4">Categories</p>
            <li className="text-gray-500 dark:text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Artificial Intelligence
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              MachineLearning
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              DevOps
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              UI/UX
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Big Data
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Development
            </li>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-gray-800 dark:text-gray-200 font-bold text-2xl pb-4">Our Community</p>
            <li className="text-gray-500 dark:text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              zENLI IITians
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              zENLI Pro-coders
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              zENLI Researchers
            </li>
          </ul>
        </div>
        
        <div className="p-5">
          <ul>
            <p className="text-gray-800 dark:text-gray-200 font-bold text-2xl pb-4">Contact Us</p>
            <li className="text-gray-500 dark:text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Contact No.
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Student Support
            </li>
            <li className="text-gray-500 dark:text-gray-400 text-md pb-2 font-semibold hover:text-blue-600 cursor-pointer">
              Email us
            </li>
            
          </ul>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center text-center p-5 bg-gray-50/70 dark:bg-gray-950/70">
        <h1 className="text-gray-800 dark:text-gray-200 font-semibold">
          © 2023-2024 All rights reserved | Built with ❤ by{' '}
          <span className="hover:text-blue-600 font-semibold cursor-pointer">
            zENLI
          </span>
        </h1>
      </div>
    </>
  );
}

export default Footer;
