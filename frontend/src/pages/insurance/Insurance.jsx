import React, { useState, useEffect } from "react";
import { FiChevronRight } from "react-icons/fi";
import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import InsuranceCard from "./insuranceCard";
import axios from "axios";

const baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL;

const Insurance = () => {
    const [insuranceData, setInsuranceData] = useState([]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      axios.get(`${baseURL}/insurance-providers`)
        .then((response) => {
          setInsuranceData(response.data);
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
        <h1 className="text-2xl text-neutral-700 font-semibold">
          Our Insurance Partners
        </h1>
        <Link
          to="/insurance-providers"
          className="text-base text-blue-600 hover:text-blue-500 font-normal flex items-center gap-x-2 ease-in-out duration-300"
        >
          View All
          <FiChevronRight className="text-lg" />
        </Link>
      </div>

      {/* Insurance Card */}
      <div className="grid md:grid-cols-5 grid-cols-2 md:gap-12 gap-4">
        {
          loading ? (
            <div className="col-span-full text-center text-gray-500">Loading data...</div>
          ) : (
            insuranceData.map((item) => (
              <InsuranceCard
                key={item.id}
                name={item.name}
                logo_url={item.logo_url}
                overall_rating={item.overall_rating}
                website_url={item.website_url}
                partner={item.partner}
                description={item.description}
              />
            ))
          )
        }
      </div>
    </Layout>
  );
}

export default Insurance;
