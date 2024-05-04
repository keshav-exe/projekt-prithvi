"use client";
import { Suspense, useEffect, useState } from "react";
import { fetchFromAPI } from "../../../utils/fetchFromApi";
import { useParams } from "next/navigation";
import Navbar from "../../../components/navbar";
import Loading from "../../loading";
import VideoCard from "../../../components/videoCard";
import Image from "next/image";

const page = () => {
  const [videos, setVideos] = useState([]);
  const [channelDetail, setChannelDetail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    fetchFromAPI(`channel/home?id=${id}`).then((data) =>
      setChannelDetail(data.meta)
    );
  }, [id]);

  useEffect(() => {
    fetchFromAPI(`channel/videos?id=${id}`).then((data) =>
      setVideos(data.data)
    );
  }, [id]);
  return (
    <section className="text-primary">
      <Navbar />
      <div className="wrapper flex flex-col gap-6">
        <div className="flex flex-col mt-20 md:flex-row sm:mx-auto md:mx-0 gap-5 bg-foreground/15 backdrop-blur-md rounded-xl border-2 border-foreground/20 p-10 shadow-[0_0_64px_-16px_rgba(0,255,0,0.2)]">
          <Image
            src={channelDetail?.avatar[2].url}
            width={180}
            height={180}
            alt="avatar"
            className="rounded-[50%]"
          />
          <div className="flex flex-col gap-3 my-auto">
            <h1 className="text-3xl font-bold">{channelDetail?.title}</h1>
            <h2 className="text-xl">
              {channelDetail?.subscriberCountText} Subscribers
            </h2>
          </div>
        </div>

        <h1 className="text-3xl font-bold">Latest Uploads</h1>
        <div className="flex flex-wrap justify-between flex-col md:flex-row gap-5 w-full">
          {videos.map((data, idx) => (
            <li key={idx} className="list-none">
              <VideoCard video={data} />
            </li>
          ))}
        </div>
      </div>
    </section>
  );
};

export default page;
