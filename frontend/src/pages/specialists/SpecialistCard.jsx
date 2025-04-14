import { Link } from "react-router-dom";
import PropTypes from "prop-types";

function SpecialistCard({ img, title, totalDoctors }) {
  return (
    <Link
      to="/specialists"
      className="w-full justify-between flex items-center flex-col space-y-6 md:px-5 px-3 md:py-7 py-4 border-neutral-400/10 hover:bg-blue-500/20 border rounded-md ease-in-out duration-300"
    >
      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-neutral-800/10 p-2">
        <img
          src={img}
          alt="Specialist"
          className="w-full h-full object-center object-contain rounded-full"
        />
      </div>
      <div className="space-y-2 ">
        <h1 className="text-md text-center text-neutral-700 font-semibold">{title}</h1>
        <p className="text-sm text-neutral-500 font-normal text-center">
          {totalDoctors} Doctors
        </p>
      </div>
      <button className="w-fit px-6 py-2 text-base text-neutral-50 font-medium rounded-xl bg-blue-500 hover:bg-blue-600 flex items-center justify-center gap-x-2 ease-in-out duration-300">
        Read More
      </button>
    </Link>
  );
}

SpecialistCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  totalDoctors: PropTypes.number.isRequired,
};

export default SpecialistCard;
