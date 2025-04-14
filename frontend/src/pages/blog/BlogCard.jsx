import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import PropTypes from "prop-types";

function BlogCard({ img, title, desc }) {
  return (
    <div className="w-full bg-blue-400/5 rounded-xl overflow-hidden">
      <img
        src={img}
        alt="blog"
        className="w-full aspect-video object-cover object-center"
      />
      <div className="p-3 space-y-4">
        <div className="space-y-2">
          <Link to="blogs" className="text-xl font-semibold text-neutral-700">
            {title}
          </Link>
          <p className="text-sm text-neutral-500 font-normal line-clamp-2">
            {desc}
          </p>
        </div>
        <button className="w-fit py-2 text-sm text-blue-700 hover:text-blue-500 font-normal flex items-center gap-x-1.5 ease-in-out duration-300">
          Read More
          <FiChevronRight className="text-base" />
        </button>
      </div>
    </div>
  );
}

BlogCard.propTypes = {
  img: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
};

export default BlogCard;
