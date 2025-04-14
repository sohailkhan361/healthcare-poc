import { Link } from "react-router-dom";
import { FaHandshake } from "react-icons/fa6";
import PropTypes from "prop-types";


const InsuranceCard = ({ logo_url, name, overall_rating, website_url, partner, description }) => {
  return (
    <Link
      to="/insurance-partners"
      className="w-full flex items-center justify-between flex-col space-y-6 md:px-5 px-3 md:py-7 py-4 border-neutral-400/10 hover:bg-blue-500/20 border rounded-md ease-in-out duration-300"
    >
      <div className="w-16 h-16 rounded-full flex items-center justify-center bg-neutral-800/10 p-2">
        <img
          src={logo_url}
          alt="Insurance Partner"
          className="w-full h-full object-center object-contain rounded-full"
        />
      </div>
      <div className="space-y-2">
        <h1 className="text-md text-center text-neutral-700 font-semibold">{name}</h1>
        <p className="text-sm text-neutral-500 font-normal text-center line-clamp-3">
          {description}
        </p>
        <p className="text-xs text-neutral-700 font-semibold flex justify-center p-2">{partner && <div className="flex gap-2 items-center border-yellow-500 border-2 p-2">Our Partner <FaHandshake className="text-lg"/></div>}</p>
        <p className="text-xs text-green-500 font-semibold items-center flex justify-center">Rating {overall_rating}</p>
      </div>
      <Link to={website_url} className="w-fit px-2 py-2 text-center text-sm text-neutral-50 font-medium rounded-xl bg-blue-500 hover:bg-blue-600 flex items-center justify-center gap-x-2 ease-in-out duration-300">
        Read More
      </Link>
    </Link>
  );
}

InsuranceCard.propTypes = {
  logo_url: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  overall_rating: PropTypes.number.isRequired,
  website_url: PropTypes.string.isRequired,
  partner: PropTypes.bool,
  description: PropTypes.string.isRequired,
};

export default InsuranceCard;