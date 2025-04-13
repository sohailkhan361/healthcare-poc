import React from "react";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const serviceData = [
    {
      id: 6,
      img: "https://media.istockphoto.com/id/1452316636/photo/paramedics-taking-patient-on-stretcher-from-ambulance-to-hospital.jpg?s=1024x1024&w=is&k=20&c=hiJRZkNtjfQDl4PeQp_wmBfIxzSQ-uEPVHWMNosJ2-Q=",
      title: "Emergency",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      id: 7,
      img: "https://media.istockphoto.com/id/1154816287/photo/paramedic-team-pushing-stretcher.webp?s=1024x1024&w=is&k=20&c=0lMZj1lEcJllb9Ke_E3gfI3c0_pMEBt_kK9egwPTgMw=",
      title: "Ambulance",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2024/07/14/11/52/ai-generated-8894225_640.jpg",
      title: "Diagnostic Labs",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2013/03/09/04/43/medicine-91754_640.jpg",
      title: "Preventive Care",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      id: 4,
      img: "https://cdn.pixabay.com/photo/2023/10/07/03/38/ai-generated-8299432_640.jpg",
      title: "Health Checkup",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      id: 10,
      img: "https://cdn.pixabay.com/photo/2020/06/20/15/30/woman-doctor-5321351_1280.jpg",
      title: "Doctors",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      id: 8,
      img: "https://cdn.pixabay.com/photo/2022/10/14/07/43/telemedicine-7520691_1280.jpg",
      title: "Telemedicine",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      id: 3,
      img: "https://cdn.pixabay.com/photo/2015/07/30/14/36/hypertension-867855_640.jpg",
      title: "Home Treatment",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      id: 9,
      img: "https://cdn.pixabay.com/photo/2019/03/29/16/55/first-aid-4089599_1280.jpg",
      title: "First Aid",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
    {
      id: 5,
      img: "https://cdn.pixabay.com/photo/2017/11/06/15/49/baby-2923997_640.jpg",
      title: "Child Care",
      desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit...",
    },
  ];  

  return (
    <Layout className="w-full space-y-6 my-8">
      {/* Top Section */}
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl text-neutral-700 font-semibold">
          Our Services
        </h1>
        <Link
          to="/services"
          className="text-base text-blue-600 hover:text-blue-500 font-normal flex items-center gap-x-2 ease-in-out duration-300"
        >
          View All
          <FiChevronRight className="text-lg" />
        </Link>
      </div>

      {/* Services Card */}
      <div className="grid md:grid-cols-5 grid-cols-2 md:gap-12 gap-3">
        {serviceData.map((item) => (
          <ServiceCard key={item.id} {...item} />
        ))}
      </div>
    </Layout>
  );
};

export default Services;
