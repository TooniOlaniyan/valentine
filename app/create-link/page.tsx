"use client";
import React, { useState, useEffect } from "react";

const CreateLinkPage = () => {
  const [valentineLink, setValentineLink] = useState("");

  useEffect(() => {
    const name = localStorage.getItem("name") || "unknown";
    setValentineLink(
      `https://be0my-valentine.vercel.app/?name=${encodeURIComponent(name)}`
    );
  }, []); // Runs only once after mount

  const copyLink = () => {
    if (!valentineLink) return;

    navigator.clipboard
      .writeText(valentineLink)
      .then(() => {
        alert("Link copied to clipboard! Your love is on its way!");
      })
      .catch((err) => {
        console.error("Failed to copy: ", err);
      });
  };

  return (
    <div className="flex flex-col items-start justify-center h-screen">
      <h1 className="text-5xl font-bold text-[#F72C5B] mb-4 leading-tight">
        Send this link to them, <br /> I guarantee they will say YES!! <br />{" "}
        and let the love begin!
      </h1>
      <div className="flex flex-col items-start">
        <p>{valentineLink || "Loading..."}</p>
        <button
          className="mt-4 w-[20rem] bg-[#3B1C32] hover:bg-[#3b1c32]/50 text-white font-bold py-3 px-4 rounded-2xl"
          onClick={copyLink}
          disabled={!valentineLink}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default CreateLinkPage;
