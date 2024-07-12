import React from "react";
import { FaStar } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { Button } from "../styles/Button";

const GetStarted = () => {
  return (
    <div
      className="container flex items-center justify-center min-h-screen  background: #a8ff78;  /* fallback for old browsers */
background: -webkit-linear-gradient(to right, #78ffd6, #a8ff78);  /* Chrome 10-25, Safari 5.1-6 */
background: linear-gradient(to right, #78ffd6, #a8ff78); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */"
    >
      <div className="customcontainer p-8 bg-white shadow-lg rounded-lg">
        <div className="text-center mb-4 ">
          <span className="inline-block bg-green-100 text-green-600 rounded-full px-3 py-1 text-sm font-semibold">
            358 live users checking out
          </span>
        </div>
        <h2 className="text-6xl font-bold text-center mb-8">Get started</h2>
        <form className="space-y-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Instagram username"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500">
                <i className="fab fa-instagram"></i>
              </span>
            </div>
          </div>
          <div className="relative">
            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <span className="text-gray-500">
                <i className="fas fa-envelope"></i>
              </span>
            </div>
          </div>
          <div className="relative">
            <select className="w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring focus:border-blue-300">
              <option>50 likes</option>
              <option>100 likes</option>
              <option>200 likes</option>
            </select>
            <div className="absolute inset-y-0 right-6 flex items-center pr-3 pointer-events-none">
              <span className="text-gray-500">$1.47</span>
            </div>
          </div>
          <div className="flex items-center">
            <input
              type="checkbox"
              id="promotions"
              className="h-4 w-4 text-blue-600 focus:ring focus:ring-offset-0 focus:ring-blue-200 rounded"
            />
            <label htmlFor="promotions" className="ml-2 text-gray-700">
              Send me special promotions and discounts
            </label>
          </div>
          <Button type="submit" className="w-full ">
            Continue
          </Button>
        </form>
      </div>
      <div className="ml-8 p-8">
        <div className="text-center mb-4">
          <span className="text-2xl text-orange-500 flex justify-center">
            <i className="fas fa-star">
              <FaStar className="icons" />
            </i>
            <i className="fas fa-star">
              <FaStar className="icons" />
            </i>
            <i className="fas fa-star">
              <FaStar className="icons" />
            </i>
            <i className="fas fa-star">
              <FaStar className="icons" />
            </i>
            <i className="fas fa-star">
              <FaStar className="icons" />
            </i>
          </span>
        </div>
        <p className="text-gray-700 text-center mb-4 ">
          “Among the most respected names in the niche of buying Instagram
          followers and likes, Twicsy has a very easy to use and accessible
          platform.”
        </p>
        <p className="text-center font-semibold">— Deccan Herald</p>
        <img
          src="./images/hero.jpg"
          alt="Deccan Herald"
          className="mx-auto mt-4 h-12"
        />
      </div>
    </div>
  );
};

export default GetStarted;
