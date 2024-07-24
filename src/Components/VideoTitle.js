import React from "react";

export default function VideoTitle({ title, overview }) {
  return (
    <div className="py-36 mx-8">
      <h1 className="text-6xl text-bold">{title}</h1>
      <p className="w-1/4 text-lg py-6">{overview}</p>
      <div>
        <button className="bg-gray-500 bg-opacity-500  p-3 rounded-lg text-lg text-white">
          ▶️ Play
        </button>
        <button className="bg-gray-500 bg-opacity-500  p-3 rounded-lg text-lg text-white mx-3">
          {" "}
          ℹ️ Info
        </button>
      </div>
    </div>
  );
}
