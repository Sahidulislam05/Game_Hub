import React from "react";
import Reveal from "../Animation/Reveal";

const Newsletter = () => {
  return (
    <Reveal>
      <div className="flex flex-col justify-center items-center my-10">
        <div className="card lg:card-side bg-base-100 shadow-sm">
          <figure>
            <img
              className="max-w-[500px] p-10"
              src="https://i.ibb.co.com/N21d0mfP/computer-icons-email-newsletter-png-favpng-n-Pn8-BZ3bfrmv-Ww0-Ny-UXJstman-removebg-preview.png"
              alt="Album"
            />
          </figure>
          <div className="card-body">
            <h1 className="text-5xl font-bold text-center py-10">
              Subscribe to our Newsletter
            </h1>
            <div className="join">
              <label className="input validator join-item">
                <svg
                  className="h-[2em] opacity-50"
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
                  placeholder="Enter a valid email address"
                  required
                />
              </label>
              <button className="btn btn-neutral join-item">Subscribe</button>
            </div>
          </div>
        </div>
      </div>
    </Reveal>
  );
};

export default Newsletter;
