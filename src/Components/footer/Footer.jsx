import { Link } from "react-router-dom";
import { FaArrowRight, FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";
import { SiLinkedin } from "react-icons/si";
import { GrInstagram } from "react-icons/gr";
import React from "react";

const Footer = () => {
  return (
    <div>
      {/* footer  */}
      <footer className="text-black dark:text-white body-font bg-white dark:bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mt-20">
          {/* Top area: Blocks */}
          <div className="grid sm:grid-cols-12 gap-8 py-8 md:py-12 border-t border-gray-400">
            {/* 1st block */}
            <div className="sm:col-span-12 lg:col-span-3">

              <div className="text-sm text-grayshade-400 dark:text-lightColor-100">
                <Link
                  to="#"
                  className="text-purple-500  hover:underline transition duration-150 ease-in-out"
                >
                  Terms:
                </Link>{" "}
                ·{" "}
                <Link
                  to="#"
                  className="text-grayshade-400  hover:underline transition duration-150 ease-in-out"
                >
                  Privacy Policy
                </Link>
              </div>
            </div>

            {/* 2nd block */}
            <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
              <h6 className="text-purple-500 font-bold mb-2">Products</h6>
              <ul className="text-sm">
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition duration-150 ease-in-out"
                  >
                    Web Studio
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition duration-150 ease-in-out"
                  >
                    DynamicBox Flex
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition duration-150 ease-in-out"
                  >
                    Programming Forms
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition duration-150 ease-in-out"
                  >
                    Integrations
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition duration-150 ease-in-out"
                  >
                    Command-line
                  </Link>
                </li>
              </ul>
            </div>

            {/* 3rd block */}
            <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
              <h6 className="text-purple-500 font-bold mb-2">Resources</h6>
              <ul className="text-sm">
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition duration-150 ease-in-out"
                  >
                    Documentation
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition duration-150 ease-in-out"
                  >
                    Tutorials & Guides
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition duration-150 ease-in-out"
                  >
                    Blog
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition duration-150 ease-in-out"
                  >
                    Support Center
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition duration-150 ease-in-out"
                  >
                    Partners
                  </Link>
                </li>
              </ul>
            </div>

            {/* 4th block */}
            <div className="sm:col-span-6 md:col-span-3 lg:col-span-2">
              <h6 className="text-purple-500 font-bold mb-2">Company</h6>
              <ul className="text-sm">
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition duration-150 ease-in-out"
                  >
                    Home
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition duration-150 ease-in-out"
                  >
                    About us
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition duration-150 ease-in-out"
                  >
                    Company values
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition duration-150 ease-in-out"
                  >
                    Pricing
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    to="#"
                    className="hover:text-gray-500 transition duration-150 ease-in-out"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* 5th block */}
            <div className="sm:col-span-6 md:col-span-3 lg:col-span-3">
              <h6 className="text-purple-500 font-bold mb-2">Contact</h6>
              <p className="text-sm text-grayshade-400 dark:text-lightColor-100 mb-4">
                Get the latest news and articles to your inbox every month.
              </p>
              <form>
                <div className="flex flex-wrap mb-4">
                  <div className="w-full">
                    <label className="block text-sm sr-only" htmlFor="newsletter">
                      Email
                    </label>
                    <div className="relative flex items-center max-w-xs">
                      <input
                        id="newsletter"
                        type="email"
                        className="form-input w-full border p-4 focus:outline-none text-sm text-black"
                        placeholder="Your email"
                        required
                      />
                      <button
                        type="submit"
                        className="absolute inset-0 left-auto"
                        aria-label="Contact"
                      >
                        <FaArrowRight className="w-4 h-4 fill-current text-black dark:text-black mx-3" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </footer>
      <footer className="text-white body-font bg-black">
        {/* main  */}
        <div className="container px-5 py-5 mx-auto flex items-center sm:flex-row flex-col">
          {/* logo  */}
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-white">
            <span className="text-xl font-bold">E-Cart</span>
          </a>
          {/* para  */}
          <p className="text-sm text-gray-100 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            Made By <span className="text-purple-400 font-bold">Arpan</span> ©
            <Link
              to={'/'}
              className="text-gray-100 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              ecart
            </Link>
          </p>

          {/* media icon  */}
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 mb-2 text-lg justify-center sm:justify-start">
            {/* facebook  */}
            <a className="text-white cursor-pointer">
              <FaFacebookF />
            </a>

            {/* twitter  */}
            <a className="ml-3 text-gray-100 cursor-pointer">
              <FaTwitter />
            </a>

            {/* instagram  */}
            <a className="ml-3 text-gray-100 cursor-pointer">
              <GrInstagram />
            </a>

            {/* linkedIn  */}
            <a className="ml-3 text-gray-100 cursor-pointer">
              <SiLinkedin />
            </a>
          </span>
        </div>
      </footer >
    </div >
  );
}

export default Footer;

