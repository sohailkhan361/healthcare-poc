import React from "react";
import Layout from "../../components/layout/Layout";

function Appointment() {
  return (
    <div className="w-full space-y-6 my-4">
      <Layout>
        <div className="w-full flex items-center gap-10 justify-between md:flex-nowrap flex-wrap">
          <div className="md:w-2/3 w-full rounded-xl overflow-hidden relative">
            <img
              src="https://cdn.pixabay.com/photo/2022/02/02/23/26/doctor-6989582_1280.jpg"
              className="w-full md:aspect-[3/4] aspect-[2/3] object-cover object-center"
            />
            <div className="w-full h-full absolute top-0 left-0 p-4 flex items-center justify-center flex-col bg-gradient-to-r from-neutral-900/40 to-neutral-900/40 z-30">
              <div className="w-full h-full bg-blue-300/10 border-blue-200/50 backdrop-blur p-5 rounded-lg md:space-y-10 space-y-6 flex justify-center flex-col">
                <div className="space-y-2">
                  <h1 className="text-2xl text-neutral-100 font-semibold">
                    Working Hours
                  </h1>
                  <p className="text-base text-neutral-100 font-normal">
                    Operational only on following days:
                  </p>
                </div>
                <div className="space-y-5">
                  <p className="text-base text-neutral-100 font-medium flex items-center justify-between">
                    Sunday - Monday <span> 8 AM to 8 PM </span>
                  </p>
                  <div className="w-full h-[0.5px] bg-blue-200/50"></div>
                  <p className="text-base text-neutral-100 font-medium flex items-center justify-between">
                    Tuesday - Wednesday <span> 8 AM to 8 PM </span>
                  </p>
                  <div className="w-full h-[0.5px] bg-blue-200/50"></div>
                  <p className="text-base text-neutral-100 font-medium flex items-center justify-between">
                    Thursday - Friday <span> 8 AM to 8 PM </span>
                  </p>
                  <div className="w-full h-[0.5px] bg-blue-200/50"></div>
                  <p className="text-base text-neutral-100 font-medium flex items-center justify-between">
                    Saturday, Public Holidays <span> Closed </span>
                  </p>
                  <div className="w-full h-[0.5px] bg-blue-200/50"></div>
                  <p className="text-base text-neutral-100 font-medium flex items-center justify-between">
                    Emergency <span> 24/7 Emergency </span>
                  </p>
                  <p className="text-sm text-neutral-200 font-normal">
                    For emergency you have to contact us or book an appointment
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="md:w-2/3 w-full space-y-6 bg-neutral-100/40 rounded-xl md:p-8 p-4">
            <h1 className="text-2xl text-neutral-800 font-semibold">
              Book An Appointment
            </h1>
            
            <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
              {/* Appointment Form */}
              <div className="w-full space-y-1.5">
                <label className="text-base text-neutral-400 font-normal block">
                  Full Name
                </label>
                <input
                  type="name"
                  placeholder="e.g. Jon Doe"
                  className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none text-base text-neutral-600 font-normal"
                />
              </div>
              <div className="w-full space-y-1.5">
                <label className="text-base text-neutral-400 font-normal block">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="e.g. info@example.com"
                  className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none text-base text-neutral-600 font-normal"
                />
              </div>
              <div className="w-full space-y-1.5">
                <label className="text-base text-neutral-400 font-normal block">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. +91-980-789-889"
                  className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none text-base text-neutral-600 font-normal"
                />
              </div>
              <div className="w-full space-y-1.5">
                <label className="text-base text-neutral-400 font-normal block">
                  Choose Subject
                </label>
                <select
                  name="department"
                  id=""
                  className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none text-base text-neutral-600 font-normal"
                >
                  <option value="consultant">Consultation</option>
                  <option value="makeenquery">Enquiry</option>
                  <option value="healthcheckup">Health Checkup</option>
                  <option value="visitdoctor">Visit Doctor</option>
                </select>
              </div>
              <div className="w-full space-y-1.5">
                <label className="text-base text-neutral-400 font-normal block">
                  Select Data
                </label>
                <input
                  type="date"
                  className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none text-base text-neutral-600 font-normal"
                />
              </div>
              <div className="w-full space-y-1.5">
                <label className="text-base text-neutral-400 font-normal block">
                  Select Time
                </label>
                <input
                  type="time"
                  className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none text-base text-neutral-600 font-normal"
                />
              </div>
            </div>

            <button className="md:w-fit w-full px-8 py-3 text-base text-neutral-50 font-medium rounded-xl bg-blue-500 hover:bg-blue-600 ease-in-out duration-300">
              Submit Request
            </button>
          </div>
        </div>
      </Layout>
    </div>
  );
}

export default Appointment;
