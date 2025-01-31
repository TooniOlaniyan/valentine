"use client";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion"; // Import motion from framer-motion

export default function Home() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showImage, setShowImage] = useState(false); // Added state to control image visibility

  const handleSubmit = () => {
    if (name) {
      setIsLoading(true);
    } else {
      alert("Oh no! You forgot to whisper their name!");
    }
    setTimeout(() => {
      router.push(`/create-link`);
    } , 3000);
  };

  const handleNameChange = (event: any) => {
    localStorage.setItem("name", event.target.value);

    setName(event.target.value);
    if (event.target.value !== "") {
      setShowImage(true); // Show image when user starts typing
    } else {
      setShowImage(false); // Hide image when input is empty
    }
  };

  return (
    <div className="flex flex-col items-start justify-center h-screen bg-[#efb6c8] relative">
      <h1 className="text-5xl font-bold text-[#F72C5B] mb-4">
        Be My Valentine!!!
      </h1>
      <div className="flex flex-col justify-start">
        <p className="mb-4 text-[#6A1E55] font-semibold">
          Whisper your Valentine's name here:
        </p>
        <input
          type="text"
          value={name}
          onChange={handleNameChange}
          placeholder="Your Sweetheart's Name"
          className="border-[2px] w-[80%] md:w-[30rem] lg:w-[50rem] border-black h-10 px-5 pr-16 rounded-xl bg-transparent text-sm focus:outline-none"
        />
      </div>
      <button
        className="mt-4 bg-[#3B1C32] hover:bg-[#3b1c32]/50 text-white font-bold py-3 px-4 rounded-2xl"
        onClick={handleSubmit}
      >
        {isLoading ? "Spreading Love..." : "Craft Your Valentine's Surprise"}
      </button>
      {showImage && (
        <>
          <motion.img
            src="/peak.png" // Replace with your actual image path
            alt="Valentine's Day Image"
            className="absolute top-0 right-0 m-4"
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 , stiffness: 100 , ease: "easeInOut" }}
          />
          <motion.p 
            className="absolute bottom-20 left-0 m-4 font-bold text-lg text-white"
            initial={{ x: 0 }}
            animate={{ x: "100%", transition: { duration: 2, repeat: Infinity, repeatType: "reverse" } }}
          >
            Pretend like I am not here, I won't tell them.
          </motion.p>
        </>
      )}
    </div>
  );
}
