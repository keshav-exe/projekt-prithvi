"use client";
import Navbar from "../components/navbar";
import VideoCard from "../components/videoCard";
import { fetchFromAPI } from "../utils/fetchFromApi";
import { Suspense, useEffect, useState } from "react";
import { Button } from "../components/ui/button";
import Loading from "./loading";
export default function Home() {
  const [videos, setVideos] = useState([]);
  const [category, setCategory] = useState("home");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchFromAPI(`${category}`)
      .then((data) => {
        const filteredVideos = data.data.filter(
          (item) => item.type === "video"
        );
        setVideos(filteredVideos);
      })
      .finally(() => setLoading(false));
  }, [category]);

  return (
    <section className="text-primary min-h-screen">
      <Navbar />
      <div className="wrapper flex flex-col gap-6">
        <div className="flex justify-between my-auto mt-20">
          <h1 className="text-3xl font-bold capitalize">{category}</h1>
          <div className="flex gap-6">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCategory("home")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 rotate-0 scale-100 transition-all"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setCategory("trending")}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 absolute transition-all "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.362 5.214A8.252 8.252 0 0 1 12 21 8.25 8.25 0 0 1 6.038 7.047 8.287 8.287 0 0 0 9 9.601a8.983 8.983 0 0 1 3.361-6.867 8.21 8.21 0 0 0 3 2.48Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 18a3.75 3.75 0 0 0 .495-7.468 5.99 5.99 0 0 0-1.925 3.547 5.975 5.975 0 0 1-2.133-1.001A3.75 3.75 0 0 0 12 18Z"
                />
              </svg>
            </Button>
          </div>
        </div>
        <hr className="opacity-20" />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-between flex-col md:flex-row gap-5 w-full">
          {videos.map((data, idx) => (
            <li key={idx} className="list-none">
              <VideoCard video={data} />
            </li>
          ))}
        </div>
        {loading && (
          <div className="wrapper flex flex-center justify-center my-auto">
            <Loading />
          </div>
        )}
      </div>
    </section>
  );
}
