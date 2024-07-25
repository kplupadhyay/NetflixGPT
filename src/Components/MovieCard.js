import React from "react";
import { IMG_URL } from "../utils/constants";

export default function MovieCard({ posterPath }) {
  return (
    <div className="pr-5 w-30 h-100">
      <img alt="Images" src={IMG_URL + posterPath} />
    </div>
  );
}
