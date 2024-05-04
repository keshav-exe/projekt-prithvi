"use client";
import { Suspense, useEffect, useState } from "react";
import { fetchFromAPI } from "../../utils/fetchFromApi";
import ReactPlayer from "react-player";
import VideoCard from "../../components/videoCard";
import Navbar from "../../components/navbar";
import Loading from "../loading";
import { useParams } from "next/navigation";
import Link from "next/link";

//@ts-ignore
const Page = () => {
  const [videos, setVideos] = useState([]);
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`video/info?id=${id}`).then((data) => setVideoDetail(data));
  }, [id]);

  useEffect(() => {
    fetchFromAPI(`related?id=${id}`).then((data) => setVideos(data.data));
  }, [id]);

  return (
    <section className="text-primary">
      <Suspense fallback={<Loading />}>
        <Navbar />
        <div className="wrapper flex flex-col gap-5">
          <div className="flex mt-20">
            <div className="rounded-xl overflow-hidden w-screen transition-all duration-300 hover:shadow-[0_0_42px_-16px_rgba(0,255,0,0.4)]">
              <ReactPlayer
                className="react-player drop-shadow-[0_0_6px_rgba(0,0,0,0.35)]"
                url={`https://www.youtube.com/watch?v=${id}`}
                controls
                width="100%"
                height="100%"
                playing={true}
                pip
              />
            </div>
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-primary text-lg md:text-2xl">
              {videoDetail?.title}
            </h1>
            <Link
              href={`/channel/${videoDetail?.channelId}`}
              className="flex gap-2 text-primary/80 text-base md:text-lg"
            >
              {videoDetail?.channelTitle}
            </Link>
            <p className="text-primary/60 text-sm md:text-base">
              {parseInt(videoDetail?.viewCount).toLocaleString()} views
            </p>
          </div>
          <hr className="opacity-20" />

          <div className="flex flex-wrap justify-start flex-col md:flex-row gap-5 w-full">
            {videos.map((data, idx) => (
              <li key={idx} className="list-none">
                <VideoCard video={data} />
              </li>
            ))}
          </div>
        </div>
      </Suspense>
    </section>
  );
};

export default Page;
