import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import Layout from "../../components/layout/Layout";

import { SiFirebase, SiRedux } from "react-icons/si";
import { SiTailwindcss } from "react-icons/si";
import { SiReact } from "react-icons/si";
import { SiExpress } from "react-icons/si";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";

function About() {
  useEffect(() => {
    Aos.init();
  }, []);
  // const navigate = useNavigate();
  return (
    <Layout>
      <div className="wrapper flex flex-col-reverse md:flex-row md:items-start items-center justify-center  pt-20 ">
        <div className="w-3/4 [&>p]:text-lg [&>p]:lg:text-xl [&>h1]:lg:text-3xl">
          <h1 className="text-3xl mt-6 mb-3 font-extrabold text-cyan-500">
            About Developer
          </h1>
          <p className=" text-grayshade-200 dark:text-lightColor-300">
            Hello there! I'm{" "}
            <span className="font-semibold text-orange-600">
              Arpan Datta
            </span>
            , With a keen eye for detail and a deep passion for crafting seamless digital experiences, I set out to create a unique and user-friendly online shopping platform. My background in <b className="text-orange-600">web development</b> and <b className="text-orange-600">data science</b> allows me to blend creativity with technical expertise, ensuring that every project I work on not only meets but exceeds user expectations. From responsive design to efficient back-end systems, I thrive on building solutions that make a real impact."
          </p>
          <h1 className="text-xl mt-6 mb-3 font-extrabold text-cyan-500">
            Frameworks and Technologies Used
          </h1>
          <p className="text-grayshade-200 dark:text-lightColor-300">
            In the development of this website, I've harnessed the power of frameworks like <b className="text-orange-600"> Redux Toolkit, ReactJS, and Tailwind CSS</b>, along with cutting-edge technologies to create a modern, single-page application (SPA). This combination ensures a fast, responsive, and visually appealing user interface, providing an enhanced browsing experience that aligns with today's web development standards:
          </p>
          <div className="flex text-4xl md:text-[60px] justify-evenly my-8 text-grayshade-50 ">
            <span data-aos="zoom-in">
              <SiReact
                className="hover:text-[#149ECA]  transition-all ease duration-300"
              />
            </span>
            <span data-aos="zoom-in">
              <SiRedux
                className="hover:text-[#f443f4] transition-all ease duration-300"
              />
            </span>
            <span data-aos="zoom-in">
              <SiTailwindcss
                className="hover:text-[#38BDF8] transition-all ease duration-300"
              />
            </span>
          </div>
          <h1 className="text-xl mt-6 mb-3 font-extrabold text-cyan-500">
            Backend Technologies
          </h1>
          <p className="text-grayshade-200 dark:text-lightColor-300">
            While my expertise primarily lies in <b className="text-orange-600">frontend development</b>,I've integrated,<b className="text-orange-600">Firebase on the backend to ensure a robust and efficient server-side infrastructure</b>. This combination allows for smooth communication between the frontend and backend, providing a seamless and responsive user experience. By bridging the gap between design and functionality, I aim to deliver solutions that are both visually appealing and technically sound.
          </p>
          <div className="flex text-4xl md:text-[60px] justify-evenly my-8 text-grayshade-50">
            <span data-aos="zoom-in">
              <SiFirebase
                className="hover:text-[#d6d32f] transition-all ease duration-300"
              />
            </span>
            <span data-aos="zoom-in">
              <SiExpress

                className="hover:text-black transition-all ease duration-300"
              />
            </span>
          </div>
          <h1 className="text-xl mt-6 mb-3 font-extrabold text-cyan-500">
            Let's Connect
          </h1>
          <p className="text-grayshade-200 dark:text-lightColor-300">
            Explore the website, discover the offerings, and if you have any
            questions or suggestions, I'm here to listen. Your journey through
            this online shopping experience is as important to me as it is to you.
            Happy exploring!
          </p>
          <div className="flex text-4xl md:text-[60px] justify-evenly my-8 text-grayshade-50">
            <Link to={""} target="_blank" data-aos="zoom-in">
              <FaLinkedin className="hover:bg-cyan-600  transition-all ease duration-300" />
            </Link>
            <Link to={""} target="_blank" data-aos="zoom-in">
              <FaGithub className="hover:bg-cyan-600 rounded-lg dark:hover:text-white  transition-all ease duration-300" />
            </Link>
          </div>
        </div>
      </div>
    </Layout >
  );
}

export default About;
