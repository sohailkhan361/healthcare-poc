import Layout from "../../components/layout/Layout";
import { Link } from "react-router-dom";
import { FiChevronRight } from "react-icons/fi";
import BlogCard from "./BlogCard";

function Blog() {
  const blogData = [
    {
      id: 1,
      img: "https://cdn.pixabay.com/photo/2018/11/21/08/40/cosmetics-3829074_1280.jpg",
      title: "Understanding the Rise of Preventive Healthcare in 2025",
      desc: "Learn how preventive care is transforming healthcare by catching diseases early, reducing treatment costs, and improving quality of life.",
    },
    {
      id: 2,
      img: "https://cdn.pixabay.com/photo/2021/09/29/12/15/telemedicine-6667341_1280.jpg",
      title: "How Telemedicine Is Bridging Gaps in Rural Healthcare",
      desc: "Explore how virtual consultations are improving access to healthcare for millions — anytime, anywhere.",
    },
    {
      id: 3,
      img: "https://cdn.pixabay.com/photo/2018/05/11/08/57/technology-3389888_1280.jpg",
      title: "The Role of AI in Early Diagnosis and Predictive Care",
      desc: "Discover how artificial intelligence is helping doctors diagnose illnesses faster and more accurately than ever before.",
    },
    {
      id: 4,
      img: "https://cdn.pixabay.com/photo/2020/04/10/23/10/visual-5028082_1280.jpg",
      title: "Essential Health Checkups You Shouldn't Miss in Your 30s",
      desc: "Stay one step ahead with the top preventive tests recommended for adults in their 30s and 40s.",
    },
    {
      id: 5,
      img: "https://cdn.pixabay.com/photo/2022/02/12/08/04/girl-7008608_1280.jpg",
      title: "Building a Stronger Future with Better Child Healthcare",
      desc: "Understand the importance of early childhood vaccinations, nutrition, and screening for lifelong well-being.",
    },
    {
      id: 6,
      img: "https://cdn.pixabay.com/photo/2016/07/28/19/27/mosquitoe-1548947_1280.jpg",
      title: "Rise of Dengue Cases in Urban Areas",
      desc: "Learn how stagnant water, poor waste management, and climate change are fueling the resurgence of dengue. Know the early symptoms and prevention tips.",
    },
    {
      id: 7,
      img: "https://cdn.pixabay.com/photo/2021/05/22/21/32/man-6274651_1280.jpg",
      title: "COVID-19: Lessons Learned and What's Next?",
      desc: "Explore how the pandemic reshaped global healthcare systems and what patients should be aware of in the post-pandemic world.",
    },
    {
      id: 8,
      img: "https://cdn.pixabay.com/photo/2022/05/27/08/13/monkey-pox-7224631_1280.jpg",
      title: "Monkeypox & Other Re-emerging Viruses in 2025",
      desc: "An overview of re-emerging viral threats and what preventive measures healthcare providers are recommending today.",
    },
    {
      id: 9,
      img: "https://cdn.pixabay.com/photo/2020/02/04/16/53/hand-washing-4818792_1280.jpg",
      title: "Hand Hygiene & Sanitation: Still Your Best Defense",
      desc: "Despite advances in medicine, personal hygiene remains the first and most important step in preventing infections and disease transmission.",
    },
    {
      id: 10,
      img: "https://cdn.pixabay.com/photo/2015/03/30/13/22/woman-698964_1280.jpg",
      title: "Seasonal Flu Alert: What You Need to Know This Year",
      desc: "Health authorities report a spike in seasonal influenza cases. Know the symptoms, high-risk groups, and vaccination details.",
    },
  ];
  

  return (
    <Layout className="w-full space-y-6 my-8">
      {/* Top Section */}
      <div className="w-full flex items-center justify-between">
        <h1 className="text-2xl text-neutral-700 font-semibold">News and Blogs</h1>
        <Link
          to="/blogs"
          className="text-base text-blue-600 hover:text-blue-500 font-normal flex items-center gap-x-2 ease-in-out duration-300"
        >
          View All
          <FiChevronRight className="text-lg" />
        </Link>
      </div>

      {/* Services Card */}
      <div className="grid md:grid-cols-3 grid-cols-1 gap-10">
        {blogData.map((item) => (
          <BlogCard key={item.id} {...item} />
        ))}
      </div>
    </Layout>
  );
}

export default Blog;
