import React from "react";

const ContactForm = () => {


  return (
    <section className="">
      
      {/* Card */}
      <div className="
        w-full max-w-5xl
        bg-gradient-to-br from-[#1c3b3d] to-[#173133]
        rounded-[32px]
        p-10 md:p-14
        border border-white/10
        shadow-[0_20px_80px_rgba(0,0,0,0.4)]
      ">
        
        {/* Subtitle */}
        <p className="text-gray-300 text-lg mb-10 max-w-2xl">
          Fill out the form below to connect with me. I’ll get back to you soon
          to discuss your project or answer any questions.
        </p>

        {/* Form */}
        <form className="space-y-6">
          
          {/* Row 1 */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input placeholder="First Name" />
            <Input placeholder="Last Name" />
          </div>

          {/* Row 2 */}
          <div className="grid md:grid-cols-2 gap-6">
            <Input placeholder="Email" type="email" />
            <Input placeholder="Phone Number" type="tel" />
          </div>

          {/* Message */}
          <textarea
            rows="6"
            placeholder="Message"
            className="
              w-full
              bg-[#284748]
              border border-white/5
              rounded-2xl
              px-6 py-4
              text-white
              placeholder-gray-400
              outline-none
              transition
              focus:border-lime-300
              focus:shadow-[0_0_20px_rgba(190,242,100,0.25)]
            "
          />

          {/* Button */}
          <button
            className="
              mt-4
              px-10 py-4
              rounded-full
              font-semibold
              text-[#123]
              bg-gradient-to-r
              hover:bg-gradient-to-l
              from-[#64f4c0]
              to-[#d9f95d]
              transition
              duration-300
              shadow-lg
            "
          >
            Submit Message
          </button>

        </form>
      </div>
    </section>
  );
};

const Input = ({ placeholder, type = "text" }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className="
        w-full
        bg-[#284748]
        border border-white/5
        rounded-2xl
        px-6 py-4
        text-white
        placeholder-gray-400
        outline-none
        transition
        focus:border-lime-300
        focus:shadow-[0_0_20px_rgba(190,242,100,0.25)]
      "
    />
  );
};

export default ContactForm;