import React from "react";
import Hero from "../hero/Hero";
import About from "../about/About";
import Services from "../services/Services";
import Specialists from "../specialists/Specialists";
import Banner from "../banner/Banner";
import Doctor from "../doctor/Doctor";
import Appointment from "../appointment/Appointment";
import Blog from "../blog/Blog";
import Insurance from "../insurance/insurance";
import Feedback from "../feedback/Feedback";

function Home() {
  return (
    <div className="w-full h-auto space-y-20 pb-12">
      {/* Hero */}
      <Hero />

      {/* About */}
      <About />

      {/* Services */}
      <Services />

      {/* Doctors */}
      <Doctor />

      {/* Specialists */}
      <Specialists />

      {/* Appointments */}
      <Appointment />

      {/* Insurance Providers */}
      <Insurance />

      {/* Blogs */}
      <Blog />

      {/* Banner */}
      <Banner />

      {/* Feedback */}
      <Feedback />
    </div>
  );
}

export default Home;
