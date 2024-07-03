import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./VideoCarousel.css"; // Custom CSS for additional styling

const videos = [
  "/videos/video1.mp4",
  "/videos/video2.mp4",
  "/videos/video3.mp4",
  "/videos/video4.mp4",
  "/videos/video5.mp4",
];

const VideoCarousel = () => {
  const [currentVideo, setCurrentVideo] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: "0",
    autoplay: false,
    beforeChange: (current, next) => setCurrentVideo(next),
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="video-carousel-container">
      <h2>Here’s what our customers say</h2>
      <Slider {...settings}>
        {videos.map((video, index) => (
          <div
            key={`video-${index}`}
            className={`video-container ${
              index === currentVideo ? "active" : ""
            }`}
          >
            <video
              width="100%"
              height="315"
              controls={index === currentVideo}
              autoPlay={index === currentVideo}
            >
              <source src={video} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideoCarousel;
