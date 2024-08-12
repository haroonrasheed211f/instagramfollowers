import React, { useState } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import options from "../data/options.json";
import { useNavigate } from "react-router-dom";
import { Button } from "../styles/Button";

const BuyFollowers = () => {
  const navigate = useNavigate();
  const [highQualityActive, setHighQualityActive] = useState(false);
  const [activeFollowersActive, setActiveFollowersActive] = useState(false);

  const handleHighQualityClick = () => {
    setHighQualityActive(true);
    setActiveFollowersActive(false);
  };

  const handleActiveFollowersClick = () => {
    setActiveFollowersActive(true);
    setHighQualityActive(false);
  };

  const handleOrderNowClick = () => {
    navigate("/getstarted"); // Make sure your route is set up correctly
  };

  return (
    <div className="container min-h-screen flex items-center justify-center p-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl w-full">
        <div className="space-y-8">
          <div className="text-center">
            <h1 className="text-4xl font-bold">
              Buy Instagram Likes{" "}
              <span className="text-orange-600">with Instant Delivery</span>
            </h1>
            <p className="text-gray-600 mt-4">
              At Twicsy, you can buy Instagram likes quickly, safely, and easily
              with just a few clicks. See our deals below!
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div
              onClick={handleHighQualityClick}
              className={`relative bg-white border ${
                highQualityActive ? "border-red-500" : "border-white-500"
              } h-96 p-8 rounded-lg shadow-md cursor-pointer border-2`}
            >
              <h2 className="text-xl font-bold mb-4 text-red-600">
                High Quality Followers
              </h2>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  High quality followers
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Fast Delivery
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  No password required
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  24/7 support
                </li>
                {/* Other list items */}
              </ul>
              <div className="absolute bottom-4 right-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-6 w-6 text-red-600 rounded-full"
                />
              </div>
            </div>
            <div
              onClick={handleActiveFollowersClick}
              className={`relative bg-white border ${
                activeFollowersActive ? "border-orange-600" : "border-white-500"
              } h-96 p-8 rounded-lg shadow-md cursor-pointer border-2`}
            >
              <h2 className="text-xl font-bold mb-4 text-orange-600">
                Active Followers
              </h2>
              <ul className="list-none space-y-2">
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Real Active followers
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  Guaranteed Delivery
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  30 day refills
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  No password required
                </li>
                <li className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  24/7 support
                </li>
                {/* Other list items */}
              </ul>
              <div className="absolute bottom-4 right-4">
                <input
                  type="checkbox"
                  className="form-checkbox h-6 w-6 text-orange-600 rounded-full"
                />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {options.map((option, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg text-center shadow-md ${
                  option.highlighted
                    ? "bg-orange-600 text-white"
                    : "bg-gray-100"
                }`}
              >
                <div className="text-2xl font-bold">{option.amount}</div>
                <div className="text-lg">{option.discount}% off</div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold">$1.47</div>
            <div className="text-gray-600">You're saving $0.52</div>
          </div>
          <div className="text-center">
            <Button
              className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2 rounded-full shadow-md hover:from-orange-600 hover:to-orange-700 transition"
              onClick={handleOrderNowClick}
            >
              Buy Now
            </Button>
          </div>
        </div>
        <div className="hidden lg:block">
          <Carousel showThumbs={false} autoPlay={true} infiniteLoop={true}>
            <div>
              <img src="../images/insta.png" alt="Slide 1" />
              {/* <p className="legend">Legend 1</p> */}
            </div>
            <div>
              <img src="../images/instalikes.png" alt="Slide 2" />
            </div>
            <div>
              <img src="../images/insta.png" alt="Slide 3" />
            </div>
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default BuyFollowers;
