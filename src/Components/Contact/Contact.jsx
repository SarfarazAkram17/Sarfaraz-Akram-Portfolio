import { useState } from "react";
import { FiShare2 } from "react-icons/fi";
import { IoPaperPlaneOutline } from "react-icons/io5";
import emailjs from "emailjs-com";
import { toast } from "react-toastify";

const Contact = () => {
  const [messaging, setMessaging] = useState(false);

  const handleMessage = (e) => {
    e.preventDefault();
    setMessaging(true);

    const form = e.target;

    emailjs
      .sendForm(
        import.meta.env.VITE_emailjs_serviceId,
        import.meta.env.VITE_emailjs_templateId,
        form,
        import.meta.env.VITE_emailjs_publicKey
      )
      .then(() => {
        toast.success(
          <div>
            <strong className="block text-lg mb-1">Message Sent!</strong>
            <span>Thank you for reaching out. I'll get back to you soon.</span>
          </div>
        );
        form.reset();
      })
      .catch(() => {
        toast.error(
          <div>
            <strong className="block text-lg mb-1">Oops...</strong>
            <span>Something went wrong. Please try again later.</span>
          </div>
        );
      })
      .finally(() => {
        setMessaging(false);
      });
  };
  return (
    <div id="contact" className="max-w-5xl mx-auto mt-10 pt-10 px-4 mb-6">
      <div data-aos="fade-up">
        <h1 className="text-4xl text-center md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-b from-purple-500 via-pink-500 to-red-500">
          Contact Me
        </h1>
        <div className="mt-3 mb-14 w-40 h-1 rounded-full mx-auto bg-gradient-to-l from-purple-500 via-pink-500 to-red-500" />
      </div>

      {/* Here: added items-stretch to make children equal height */}
      <div className="flex flex-col lg:flex-row justify-center gap-6 items-stretch mb-20">
        {/* Left Side Contact Info */}
        <div
          data-aos="fade-up-right"
          className="bg-white/5 p-5 rounded-xl w-full lg:w-[43%] h-full"
        >
          <div
            data-aos="fade-right"
            className="p-5 bg-white/10 rounded-xl space-y-4 h-full"
          >
            <div
              data-aos="fade-up"
              className="p-4 hover:bg-white/25 transition duration-700 bg-white/15 flex gap-4 rounded-xl items-center"
            >
              <div>
                <img
                  src="https://i.ibb.co/4ZHCNrF6/gmail-1162901-1280-removebg-preview.png"
                  alt="Email image"
                  className="w-16"
                />
              </div>
              <div>
                <h5 className="font-bold">Email</h5>
                <p className="text-sm">sarfaraz.akram055@gmail.com</p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="p-4 hover:bg-white/25 transition duration-700 bg-white/15 flex gap-4 rounded-xl items-center"
            >
              <img
                src="https://i.ibb.co/rGPnttkx/phone.png"
                alt="Phone image"
                className="w-12"
              />

              <div>
                <h5 className="font-bold">Phone</h5>
                <p className="text-sm">+88 01973254091</p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="p-4 hover:bg-white/25 transition duration-700 bg-white/15 flex gap-4 rounded-xl items-center"
            >
              <img
                src="https://i.ibb.co/20CtXq8s/whatsapp.png"
                alt="Whatsapp image"
                className="w-12"
              />
              <div>
                <h5 className="font-bold">Whatsapp</h5>
                <p className="text-sm">+88 01973254091</p>
              </div>
            </div>

            <div
              data-aos="fade-up"
              className="p-4 hover:bg-white/25 transition duration-700 bg-white/15 flex gap-4 rounded-xl items-center"
            >
              <div>
                <img
                  src="https://i.ibb.co/gZqRQf9N/location.png"
                  alt="Location image"
                  className="w-16"
                />
              </div>
              <div>
                <h5 className="font-bold">Location</h5>
                <p className="text-sm">
                  Saidpur, Nilphamari, Rangpur, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side Contact Form */}
        <div
          data-aos="fade-up-left"
          className="bg-white/5 p-5 rounded-xl w-full lg:w-[55%] h-full"
        >
          <div
            data-aos="fade-left"
            className="p-8 bg-white/10 rounded-xl h-full flex-grow"
          >
            <div data-aos="fade-up">
              <div className="flex justify-between items-center mb-4">
                <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-red-500">
                  Get in Touch
                </h1>
                <FiShare2 className="text-3xl md:text-4xl text-[#DB38AF]" />
              </div>
              <p className="text-xs mb-8 text-white/70">
                Message me if you want to collaborate with me in any web
                application project.
              </p>
            </div>

            <form
              onSubmit={handleMessage}
              className="space-y-4 w-full mx-auto flex-grow flex flex-col justify-between"
            >
              <div>
                <label
                  data-aos="fade-up"
                  className="input rounded-lg w-full bg-white/15"
                >
                  <svg
                    className="h-[1.5em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </g>
                  </svg>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="Your Name"
                  />
                </label>

                <label
                  data-aos="fade-up"
                  className="input rounded-lg w-full bg-white/15 mt-5"
                >
                  <svg
                    className="h-[1.5em] opacity-50"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                  >
                    <g
                      strokeLinejoin="round"
                      strokeLinecap="round"
                      strokeWidth="2.5"
                      fill="none"
                      stroke="currentColor"
                    >
                      <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                    </g>
                  </svg>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="Your Email"
                  />
                </label>

                <textarea
                  data-aos="fade-up"
                  name="message"
                  rows={3}
                  required
                  placeholder="Describe your message"
                  className="textarea rounded-lg w-full bg-white/15 mt-[18px]"
                />
                <input
                  type="text"
                  className="hidden"
                  name="time"
                  value={new Date().toLocaleString()}
                  readOnly
                />
              </div>

              <button
                disabled={messaging}
                type="submit"
                data-aos="fade-up"
                className="btn w-full flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white border-0 shadow-lg bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 hover:scale-105 active:scale-95 transition duration-300"
              >
                {messaging ? (
                  <span className="loading loading-spinner loading-md text-green-400"></span>
                ) : (
                  <>
                    <IoPaperPlaneOutline size={18} /> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>

      <p className="w-full mt-10 text-center text-sm text-white">
        © {new Date().getFullYear()} Sarfaraz Akram. All rights reserved.
      </p>
    </div>
  );
};

export default Contact;
