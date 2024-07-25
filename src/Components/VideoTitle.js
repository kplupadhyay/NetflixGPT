import React from "react";

export default function VideoTitle({ title, overview }) {
  return (
    <div className="w-screen aspect-video pt-36 px-8 absolute text-white bg-gradient-to-b from-black ">
      <h1 className="text-6xl  text-bold">{title}</h1>
      <p className="w-1/4 text-lg py-6">{overview}</p>
      <div>
        <button className="bg-white text-black font-bold p-3 rounded-lg text-lg text-white hover:bg-opacity-80">
          ▶️ Play
        </button>
        <button className="bg-gray-500 bg-opacity-500  p-3 rounded-lg text-lg text-white mx-3">
          {" "}
          Info
        </button>
      </div>
    </div>
  );
}
