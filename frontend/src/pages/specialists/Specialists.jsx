import { FiChevronRight } from "react-icons/fi";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import SpecialistCard from "./SpecialistCard";

import DentalCare from "../../assets/dental-care.png";
import Cardiology from "../../assets/cardiology.png";
import EyeCare from "../../assets/eye-care.png";
import Gynecology from "../../assets/gynecology.png";
import Neurology from "../../assets/neurology.png";


function Specialists() {
  const specialistData = [
    {
      id: 1,
      img: DentalCare,
      title: "Dental Care",
      totalDoctors: "15+",
    },
    {
      id: 2,
      img: Cardiology,
      title: "Cardiology",
      totalDoctors: "33+",
    },
    {
      id: 3,
      img: EyeCare,
      title: "Eye Care",
      totalDoctors: "18+",
    },
    {
      id: 4,
      img: Gynecology,
      title: "Gynecologists",
      totalDoctors: "25+",
    },
    {
      id: 5,
      img: Neurology,
      title: "Neurology Care",
      totalDoctors: "10+",
    },
  ];

  return (
    <Layout className="w-full space-y-6 my-8">
      {/* Top Section */}
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl text-neutral-700 font-semibold">
          Our Specialists
        </h1>
        <Link
          to="/specialists"
          className="text-base text-blue-600 hover:text-blue-500 font-normal flex items-center gap-x-2 ease-in-out duration-300"
        >
          View All
          <FiChevronRight className="text-lg" />
        </Link>
      </div>

      {/* Specialist Card */}
      <div className="grid md:grid-cols-5 grid-cols-2 md:gap-12 gap-4">
        {specialistData.map((item) => (
          <SpecialistCard
            key={item.id}
            {...item}
          />
        ))}
      </div>
    </Layout>
  );
}

export default Specialists;
