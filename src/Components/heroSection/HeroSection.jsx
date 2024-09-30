import { IconButton } from "@material-tailwind/react";
import { useState, useEffect } from "react";

const HeroSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const images = [
    "https://img.freepik.com/free-vector/flat-11-11-shopping-day-sale-banner-template_23-2149724057.jpg?w=1380&t=st=1727704027~exp=1727704627~hmac=0207cebef5f3be9d37d036ff9a9d9a08d3919c2b874836be9fcbc80ad0d981ff",
    "https://img.freepik.com/free-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150322012.jpg?w=1380&t=st=1727704129~exp=1727704729~hmac=1e1c9784b82c89a82a9aee2f099accecee8dc2887ee2bf1af9ef1af31e64841f",
    "https://img.freepik.com/free-vector/gradient-shopping-discount-horizontal-sale-banner_23-2150322008.jpg?w=1380&t=st=1727704268~exp=1727704868~hmac=f98ce637e2340e7d7971acb230ac1538067860fc8fafab19225594336012e267",
  ];

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const autoPlay = setInterval(() => {
      handleNext();
    }, 3000);

    return () => clearInterval(autoPlay);
  }, []);

  return (
    <div className="carousel mx-auto mt-8 p-4 lg:p-6 xl:p-6 rounded-md relative overflow-hidden max-w-[90%] lg:max-w-[80%] xl:max-w-[70%] bg-gray-100">
      <div className="relative h-64 md:h-80 lg:h-[32rem] xl:h-[40rem] rounded-md overflow-hidden">
        <img
          src={images[activeIndex]}
          alt={`image ${activeIndex + 1}`}
          className="absolute h-full w-full object-cover transition-opacity duration-1000 ease-in-out rounded-sm md:rounded-sm lg:rounded-md"
        />
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handlePrev}
          className="!absolute top-2/4 left-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
            />
          </svg>
        </IconButton>
        <IconButton
          variant="text"
          color="white"
          size="lg"
          onClick={handleNext}
          className="!absolute top-2/4 right-4 -translate-y-2/4"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={2}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
            />
          </svg>
        </IconButton>
      </div>
    </div>
  );
};

export default HeroSection;



