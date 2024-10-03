"use client";
import Link from "next/link";
import { useParams, useRouter } from "next/navigation";
import React, { Suspense, useEffect, useState } from "react";
import { fetchFromAPI } from "../../../utils/fetchFromApi";
import Loading from "../../../app/loading";
import { useTheme } from "next-themes";

import VideoCard from "../../../components/videoCard";
import Navbar from "../../../components/navbar";

const Page = () => {
  const { slug } = useParams();
  const search = decodeURIComponent(slug);
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      setSearchTerm(search);

      router.push(`/search/${searchTerm}`, { scroll: false });
    }
  };

  const [videos, setVideos] = useState([]);

  useEffect(() => {
    setLoading(true);

    setVideos([]);

    fetchFromAPI(`search?query=${slug}`)
      .then((data) => {
        const filteredVideos = data.data.filter(
          (item) => item.type === "video"
        );
        setVideos(filteredVideos);
      })
      .finally(() => setLoading(false));
  }, []);

  return (
    <section className="text-primary">
      <Navbar />
      <div className="wrapper flex flex-col gap-5 min-h-screen mt-32">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 justify-between flex-col md:flex-row gap-5 w-full">
          {videos.map((data, idx) => (
            <li key={idx} className="list-none">
              <VideoCard video={data} />
            </li>
          ))}
        </div>
        {loading && (
          <div className="flex flex-center size-full my-auto">
            <Loading />
          </div>
        )}
      </div>
    </section>
  );
};

export default Page;
