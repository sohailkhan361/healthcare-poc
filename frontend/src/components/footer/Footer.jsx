import React from "react";
import Layout from "../layout/Layout";
import { Link } from "react-router-dom";
import { SiGooglemaps } from "react-icons/si";
import { FaPhone } from "react-icons/fa6";
import { FaEnvelope } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaThreads } from "react-icons/fa6";
import { MdOutlineHealthAndSafety } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="w-full py-7 bg-neutral-200/50">
      <Layout className="w-full space-y-10">
        <div className="grid md:grid-cols-5 grid-cols-2 gap-10">
          <div className="col-span-2 space-y-4">
            {/* Logo Section */}
            <Link
              to="/"
              className="w-fit text-4xl text-blue-600 font-bold mr-16 flex items-center"
            >
              <MdOutlineHealthAndSafety className='text-4xl'/> HealthCare+
            </Link>

            <div className="space-y-6">
              <p className="text-sm text-neutral-600 font-normal">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Repellat aliquid, repellendus iure, asperiores hic at
                exercitationem necessitatibus itaque cupiditate a consequatur
                laboriosam suscipit, fugit totam sit explicabo iste odit
                placeat?
              </p>
              <div className="space-y-3">
                <div className="flex items-center gap-x-3">
                  <SiGooglemaps className="text-base text-neutral-600 font-normal" />
                  123 Street, New York, USA
                </div>
                <div className="flex items-center gap-x-3">
                  <FaPhone className="text-base text-neutral-600 font-normal" />
                  456-000-789
                </div>
                <div className="flex items-center gap-x-3">
                  <FaEnvelope className="text-base text-neutral-600 font-normal" />
                  contact@healthcareplus.com
                </div>
              </div>
            </div>
          </div>

        {/* Company */}
          <div className="col-span-1 space-y-4">
            <h1 className="text-xl text-neutral-700 font-semibold">Company</h1>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-base font-medium hover:text-blue-600 ease-in-out duration-300"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base font-medium hover:text-blue-600 ease-in-out duration-300"
                >
                  Experience
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base font-medium hover:text-blue-600 ease-in-out duration-300"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base font-medium hover:text-blue-600 ease-in-out duration-300"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base font-medium hover:text-blue-600 ease-in-out duration-300"
                >
                  Our Partners
                </Link>
              </li>
            </ul>
          </div>

        {/* Our Services */}
          <div className="col-span-1 space-y-4">
            <h1 className="text-xl text-neutral-700 font-semibold">
              Our Services
            </h1>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/"
                  className="text-base font-medium hover:text-blue-600 ease-in-out duration-300"
                >
                  Emergency
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base font-medium hover:text-blue-600 ease-in-out duration-300"
                >
                  Child Care
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base font-medium hover:text-blue-600 ease-in-out duration-300"
                >
                  Doctors
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base font-medium hover:text-blue-600 ease-in-out duration-300"
                >
                  Insurance
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base font-medium hover:text-blue-600 ease-in-out duration-300"
                >
                  Ambulance
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base font-medium hover:text-blue-600 ease-in-out duration-300"
                >
                  Telemedicine
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base font-medium hover:text-blue-600 ease-in-out duration-300"
                >
                  Diagnosis
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base font-medium hover:text-blue-600 ease-in-out duration-300"
                >
                  Preventive Care
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base font-medium hover:text-blue-600 ease-in-out duration-300"
                >
                  Diagnostic Labs
                </Link>
              </li>
              <li>
                <Link
                  to="/"
                  className="text-base font-medium hover:text-blue-600 ease-in-out duration-300"
                >
                  Home Treatment
                </Link>
              </li>
            </ul>
          </div>

        {/* Connect With US */}
          <div className="md:col-span-1 col-span-2 space-y-4">
            <h1 className="text-xl text-neutral-700 font-semibold">
              Connect With Us
            </h1>
            <div className="grid md:grid-cols-3 grid-cols-5 items-center gap-5 w-full">
              <Link
                to="/healthcareplus.official"
                className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center hover:bg-blue-600/20 ease-in-out duration-300"
              >
                <FaInstagram className="text-blue-600 text-lg" />
              </Link>
              <Link
                to="/healthcareplus.official"
                className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center hover:bg-blue-600/20 ease-in-out duration-300"
              >
                <FaYoutube className="text-blue-600 text-lg" />
              </Link>
              <Link
                to="/healthcareplus.official"
                className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center hover:bg-blue-600/20 ease-in-out duration-300"
              >
                <FaFacebook className="text-blue-600 text-lg" />
              </Link>
              <Link
                to="/healthcareplus.official"
                className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center hover:bg-blue-600/20 ease-in-out duration-300"
              >
                <FaSquareXTwitter className="text-blue-600 text-lg" />
              </Link>
              <Link
                to="/healthcareplus.official"
                className="w-10 h-10 rounded-full bg-blue-600/10 flex items-center justify-center hover:bg-blue-600/20 ease-in-out duration-300"
              >
                <FaThreads className="text-blue-600 text-lg" />
              </Link>
            </div>
          </div>
        </div>

        <div className="w-full h-[1px] bg-neutral-300" />

        {/* Copyrights Section */}
        <div className="w-full flex items-center justify-between flex-wrap gap-2">
            <p className="text-sm text-neutral-600/80 font-normal">
                Copyright &copy; 2025. All Rights Reserved.
            </p>
            <p className="text-sm text-neutral-600/80 font-normal">
                Developed by Sohail
            </p>
        </div>

        <div className="w-full h-[1px] bg-neutral-300" />

        {/* Disclaimer Section */}
        <div className="w-full flex items-center flex-wrap gap-2">
            <p className="text-sm text-neutral-600/80 font-normal">
            Disclaimer: <br/>
            All images displayed in this application are used solely for demonstration purposes as part of a Proof of Concept (POC). 
            Most images are sourced from royalty-free platforms such as Pixabay and are not intended for commercial distribution. 
            The health-related information presented is illustrative and does not substitute professional medical advice. 
            This project is built for showcasing conceptual features only.
            </p>
        </div>

      </Layout>
    </footer>
  );
};

export default Footer;
