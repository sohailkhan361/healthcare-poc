import { useState, useEffect } from "react";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import DoctorCard from "./DoctorCard";
import axios from "axios";

const baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL;

const Doctor = () => {
  const [doctorData, setDoctorData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`${baseURL}/doctors?limit=100`)
      .then((response) => {
        setDoctorData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching doctors:", error);
        setLoading(false);
      });
  }, []);

  return (
    <Layout className="w-full space-y-6 my-8">
      {/* Top Section */}
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl text-neutral-700 font-semibold">Our Doctors</h1>
        <Link
          to="/doctors"
          className="text-base text-blue-600 hover:text-blue-500 font-normal flex items-center gap-x-2 ease-in-out duration-300"
        >
          View All
          <FiChevronRight className="text-lg" />
        </Link>
      </div>

      {/* Doctors Card */}
      <div className="grid md:grid-cols-4 grid-cols-1 gap-12">
      {
          loading ? (
            <div className="col-span-full text-center text-gray-500">Loading data...</div>
          ) : (
            doctorData.map((item) => (
              <DoctorCard
                key={item.id}
                id={item.id}
                name={item.name}
                experience={item.experience}
                img={item.image_url || "https://via.placeholder.com/150"}
              />
            ))
          )
        }
      </div>
    </Layout>
  );
}

export default Doctor;
