import { FaPhone } from "react-icons/fa6";
import { IoChatbubbles } from "react-icons/io5";
import PropTypes from "prop-types";

function DoctorCard({ name, img, experience }) {
  return (
    <div className="w-full overflow-hidden rounded-xl cursor-pointer">
      <div className="w-full aspect-square relative">
        <img
          src={img}
          alt="doctor img"
          className="w-full aspect-square object-cover object-top rounded-xl"
        />
        <div className="w-full h-full flex items-end flex-col absolute top-0 right-0 bg-gradient-to-r from-transparent to-neutral-900/50 rounded-xl">
          <div className="p-6 flex items-end flex-col gap-y-5">
            <button className="w-9 h-9 rounded-full bg-neutral-100/30 hover:bg-neutral-100/40 flex items-center justify-center text-xl text-neutral-100 ease-in-out duration-300">
              <FaPhone className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 rounded-full bg-neutral-100/30 hover:bg-neutral-100/40 flex items-center justify-center text-xl text-neutral-100 ease-in-out duration-300">
              <IoChatbubbles className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      <div className="space-y-1 px-2 py-3 text-center">
        <h1 className="text-xl text-neutral-700 font-semibold">
            {name}
        </h1>
        <p className="text-base text-neutral-500 font-normal">
            Experience: {experience}+ years
        </p>
      </div>
    </div>
  );
}

DoctorCard.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  experience: PropTypes.number.isRequired,
};

export default DoctorCard;
