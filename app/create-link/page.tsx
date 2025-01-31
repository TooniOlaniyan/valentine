"use client";
import React, { useState } from "react";
import { useRouter } from "next/navigation";

const CreateLinkPage = () => {
  const valentineLink = `http://localhost:3001?name=${localStorage.getItem(
    "name"
  )}`;

  const copyLink = () => {
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
        Send this link to them, <br /> I guarantee they will say YES!! <br /> and
        let the love begin!
      </h1>
      <div className="flex flex-col items-start">
        <p>{valentineLink}</p>
        <button
          className="mt-4 w-[20rem] bg-[#3B1C32] hover:bg-[#3b1c32]/50 text-white font-bold py-3 px-4 rounded-2xl"
          onClick={copyLink}
        >
          Copy
        </button>
      </div>
    </div>
  );
};

export default CreateLinkPage;
