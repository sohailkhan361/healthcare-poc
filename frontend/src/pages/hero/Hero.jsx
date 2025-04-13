import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation, Autoplay } from 'swiper/modules';
import { FiChevronRight } from "react-icons/fi";
import Layout from '../../components/layout/Layout';
import { Link } from 'react-router-dom';

function Hero() {
    return (
        <div className='w-full h-[calc(100vh-8ch)] flex flex-col'>
            <div className="flex-1">
                <Swiper navigation={true} modules={[Navigation, Autoplay]} className="mySwiper"
                        autoplay={{ delay: 3000, disableOnInteraction: false }}>
                    <SwiperSlide>
                        <div className='w-full relative h-[calc(100vh-8ch)]'>
                            <div className='w-full h-full'>
                                <img src="https://images.pexels.com/photos/40568/medical-appointment-doctor-healthcare-40568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="w-full h-full object-top object-cover" />
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-gradient-to-tr from-neutral-900/60 to-neutral-900/30 z-30">
                                <Layout>
                                    <div className="bg-blue-300/40 border-blue-200/50 border backdrop-blur px-8 py-10 rounded-xl md:w-2/5 w-full space-y-7">
                                        <div className="space-y-4">
                                            <h1 className="md:text-4xl text-3xl text-blue-50 font-bold leading-[1.3]">
                                               Unified healthcare portal for all services at your fingertips
                                            </h1>

                                            <p className="text-base text-neutral-300 font-normal line-clamp-3">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi voluptate velit consectetur? Magnam, sed cum exercitationem eos ex unde facilis doloribus, nesciunt voluptate obcaecati cupiditate ut fuga mollitia sunt?
                                            </p>
                                        </div>

                                        <Link to={"/services"} className="w-fit px-8 py-3 text-base text-neutral-700 font-medium rounded-xl border-2 border-neutral-50 bg-neutral-50 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                                            Our Services 
                                            <FiChevronRight className="text-xl pt-0.5" />
                                        </Link>
                                    </div>
                                </Layout>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full relative h-[calc(100vh-8ch)]'>
                            <div className='w-full h-full'>
                                <img src="https://images.pexels.com/photos/29941469/pexels-photo-29941469/free-photo-of-healthcare-professionals-conducting-an-ultrasound.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="w-full h-full object-top object-cover" />
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-gradient-to-tr from-neutral-900/60 to-neutral-900/30 z-30">
                                <Layout>
                                    <div className="bg-blue-300/40 border-blue-200/50 border backdrop-blur px-8 py-10 rounded-xl md:w-2/5 w-full space-y-7">
                                        <div className="space-y-4">
                                            <h1 className="md:text-4xl text-3xl text-blue-50 font-bold leading-[1.3]">
                                                Over 55 million patients and doctors satisfied with our services
                                            </h1>

                                            <p className="text-base text-neutral-300 font-normal line-clamp-3">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi voluptate velit consectetur? Magnam, sed cum exercitationem eos ex unde facilis doloribus, nesciunt voluptate obcaecati cupiditate ut fuga mollitia sunt?
                                            </p>
                                        </div>

                                        <Link to={"/services"} className="w-fit px-8 py-3 text-base text-neutral-700 font-medium rounded-xl border-2 border-neutral-50 bg-neutral-50 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                                            Our Services 
                                            <FiChevronRight className="text-xl pt-0.5" />
                                        </Link>
                                    </div>
                                </Layout>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className='w-full relative h-[calc(100vh-8ch)]'>
                            <div className='w-full h-full'>
                                <img src="https://images.pexels.com/photos/15277952/pexels-photo-15277952/free-photo-of-man-during-magnetic-resonance-imaging.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" className="w-full h-full object-top object-cover" />
                            </div>
                            <div className="absolute top-0 left-0 w-full h-full flex items-center justify-center flex-col bg-gradient-to-tr from-neutral-900/60 to-neutral-900/30 z-30">
                                <Layout>
                                    <div className="bg-blue-300/40 border-blue-200/50 border backdrop-blur px-8 py-10 rounded-xl md:w-2/5 w-full space-y-7">
                                        <div className="space-y-4">
                                            <h1 className="md:text-4xl text-3xl text-blue-50 font-bold leading-[1.3]">
                                                Meet our Insurance Partners to keep yourself safe, secure and healthy.
                                            </h1>

                                            <p className="text-base text-neutral-300 font-normal line-clamp-3">
                                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam eligendi voluptate velit consectetur? Magnam, sed cum exercitationem eos ex unde facilis doloribus, nesciunt voluptate obcaecati cupiditate ut fuga mollitia sunt?
                                            </p>
                                        </div>

                                        <Link to={"/services"} className="w-fit px-8 py-3 text-base text-neutral-700 font-medium rounded-xl border-2 border-neutral-50 bg-neutral-50 hover:bg-transparent hover:text-neutral-50 hover:border-neutral-50 flex items-center gap-x-2 ease-in-out duration-300">
                                            Our Services 
                                            <FiChevronRight className="text-xl pt-0.5" />
                                        </Link>
                                    </div>
                                </Layout>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>

        </div>
    )
}

export default Hero