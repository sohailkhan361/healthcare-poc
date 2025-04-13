import React from "react";
import Layout from "../../components/layout/Layout";

const Banner = () => {
  return (
    <div className="w-full h-full md:aspect-[4/2] aspect-auto relative">
      <img
        src={"https://cdn.pixabay.com/photo/2018/08/22/19/27/nurse-3624461_1280.jpg"}
        alt="banner"
        className="w-full h-full object-cover object-center"
      />
      <div className="w-full h-full absolute top-0 left-0 bg-gradient-to-t from-neutral-900 via-neutral-900/70 to-neutral-900/20">
        <Layout className="w-full h-full md:pt-16 pt-2">
          <div className="w-full h-full justify-start flex items-center flex-col text-center md:space-y-12 space-y-6">
            <div className="space-y-4">
                <h1 className="md:text-6xl text-2xl text-neutral-50 font-bold leading-[1.3] capitalize">
                    Health isn't a luxury — it's a priority. <br className="md:block hidden"/>
                    Don't make delay on your life!
                </h1>
                <p className="md:text-lg text-md text-neutral-400 font-normal">
                  Access preventive, emergency, and expert care — all in one place.
                </p>
            </div>

            <button className="w-fit md:px-16 px-12 md:py-4 py-3 rounded-full text-md text-neutral-700 font-medium bg-neutral-50 border-2 border-neutral-50 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                Book Appointment
            </button>
          </div>
        </Layout>
      </div>
    </div>
  );
};

export default Banner;
