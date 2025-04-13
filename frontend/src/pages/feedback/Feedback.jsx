import React, { useState } from 'react';

const baseURL = import.meta.env.VITE_REACT_APP_API_BASE_URL;

const Feedback = () => {
  const [formData, setFormData] = useState({
    patient_name: '',
    doctor_name: '',
    category: '',
    comments: '',
    rating: '',
  });

  const [resMsg, setResMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${baseURL}/feedback`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          patient_name: formData.patient_name,
          doctor_name: formData.doctor_name,
          category: formData.category,
          comments: formData.comments,
          rating: parseInt(formData.rating),
        }),
      });

      const data = await response.json();

      if (response.ok) {
        alert(`Thank you for your feedback! Feedback ID: ${data.feedback_id}`);
        setResMsg(data.message);
        setFormData({
          patient_name: '',
          doctor_name: '',
          category: '',
          comments: '',
          rating: '',
        });
      } else {
        console.error('Error submitting feedback:', data);
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('Server is not responding. Please try again later.');
    }
  };

  return (
    <div className='w-full flex items-center justify-center my-8'>
      <form
        onSubmit={handleSubmit}
        className="md:w-2/3 w-full space-y-6 bg-neutral-100/40 rounded-xl md:p-8 p-4"
      >
        <h1 className="text-2xl text-neutral-800 font-semibold">
          Share Your Feedback
        </h1>

        <div className="grid md:grid-cols-2 grid-cols-1 gap-7">
          <div className="w-full space-y-1.5">
            <label className="text-base text-neutral-400 font-normal block">
              Full Name
            </label>
            <input
              type="text"
              name="patient_name"
              value={formData.patient_name}
              onChange={handleChange}
              placeholder="e.g. Jon Doe"
              required
              className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none text-base text-neutral-600 font-normal"
            />
          </div>

          <div className="w-full space-y-1.5">
            <label className="text-base text-neutral-400 font-normal block">
              Doctor
            </label>
            <input
              type="text"
              name="doctor_name"
              value={formData.doctor_name}
              onChange={handleChange}
              placeholder="e.g. Dr. John"
              required
              className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none text-base text-neutral-600 font-normal"
            />
          </div>

          <div className="w-full space-y-1.5">
            <label className="text-base text-neutral-400 font-normal block">
              Feedback Category
            </label>
            <select
              name="category"
              value={formData.category}
              onChange={handleChange}
              required
              defaultValue={"other"}
              className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 text-neutral-600"
            >
              <option value="" disabled>Select a category</option>
              <option value="doctor">Doctor</option>
              <option value="service">Service</option>
              <option value="insurance">Insurance Provider</option>
              <option value="staff">Staff</option>
              <option value="telemedicine">Telemedicine</option>
              <option value="website">Website Related</option>
              <option value="customer">Customer Service</option>
              <option value="consultation">Consultation</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div className="md:col-span-2 w-full space-y-1.5">
            <label className="text-base text-neutral-400 font-normal block">
              Comment
            </label>
            <textarea
              name="comments"
              value={formData.comments}
              onChange={handleChange}
              rows="4"
              placeholder="Write your feedback here..."
              required
              className="w-full border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 py-2 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none text-base text-neutral-600 font-normal resize-none"
            ></textarea>
          </div>

          <div className="w-full space-y-1.5">
            <label className="text-base text-neutral-400 font-normal block">
              Rating (1 to 10)
            </label>
            <input
              type="number"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              min="1"
              max="10"
              required
              placeholder="e.g. 8"
              className="w-full h-12 border border-neutral-300/80 bg-neutral-200/50 rounded-lg px-4 placeholder:text-neutral-400 focus:border-blue-500 focus:bg-blue-500/5 focus:outline-none text-base text-neutral-600 font-normal"
            />
          </div>
        </div>

        <button
          type="submit"
          className="md:w-fit w-full px-8 py-3 text-base text-neutral-50 font-medium rounded-xl bg-blue-500 hover:bg-blue-600 ease-in-out duration-300"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default Feedback;

