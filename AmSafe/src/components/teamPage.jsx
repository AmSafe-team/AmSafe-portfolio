import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const TeamPage = () => {
  return (
    <div className="bg-gra y-100 py-10 w-full">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-center items-center flex-col">
        <h1 className="text-7xl text-red-500 font-bold p-6">Meet Our Team</h1>
        <div className=" flex w-full gap-2">
          <div className="w-1/4 gap-6 hover:-translate-y-2 duration-200">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Damanjeet Singh
              </h3>
              <p className="text-sm text-gray-600 mb-4">Backend Development</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/DSB2004"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-gray-600 hover:text-black text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/damanjeet-singh-8b879b295/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-blue-600 hover:text-blue-800 text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/4 gap-6 hover:-translate-y-2 duration-200">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Anish Hazra
              </h3>
              <p className="text-sm text-gray-600 mb-4">App Development</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/AnishHazra"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-gray-600 hover:text-black text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/anish-hazra-667396176/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-blue-600 hover:text-blue-800 text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/4 gap-6 hover:-translate-y-2 duration-200">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Harsh Mittal
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Research and Web Development
              </p>
              <div className="flex justify-center space-x-4">
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaGithub className="text-gray-600 hover:text-black text-2xl" />
                </a>
                <a href="#" target="_blank" rel="noopener noreferrer">
                  <FaLinkedin className="text-blue-600 hover:text-blue-800 text-2xl" />
                </a>
              </div>
            </div>
          </div>
          <div className="w-1/4 gap-6 hover:-translate-y-2 duration-200">
            <div className="bg-white shadow-lg rounded-lg p-6 text-center">
              <h3 className="text-lg font-semibold text-gray-900">
                Vaibhav Bhardwaj
              </h3>
              <p className="text-sm text-gray-600 mb-4">Web Development</p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://github.com/vaibhavBhardwaj24"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-gray-600 hover:text-black text-2xl" />
                </a>
                <a
                  href="https://www.linkedin.com/in/vaibhav-bhardwaj-519762280/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaLinkedin className="text-blue-600 hover:text-blue-800 text-2xl" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
