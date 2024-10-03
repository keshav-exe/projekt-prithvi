"use client";
import { Suspense, useEffect, useState } from "react";
import { fetchFromAPI } from "../../utils/fetchFromApi";
import ReactPlayer from "react-player";
import VideoCard from "../../components/videoCard";
import Navbar from "../../components/navbar";
import Loading from "../../app/loading";
import { useParams } from "next/navigation";
import Link from "next/link";

//@ts-ignore
const Page = () => {
  const [videos, setVideos] = useState([]);
  const [videoDetail, setVideoDetail] = useState(null);
  const { id } = useParams();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchFromAPI(`video/info?id=${id}`)
      .then((data) => setVideoDetail(data))
      .finally(() => setLoading(false));
  }, [id]);

  useEffect(() => {
    fetchFromAPI(`related?id=${id}`)
      .then((data) => setVideos(data.data))
      .finally(() => setLoading(false));
  }, [id]);

  return (
    <section className="text-primary">
      <Navbar />
      <div className="wrapper flex flex-col gap-5">
        <div className="flex mt-20">
          <div className="rounded-xl overflow-hidden w-full">
            <ReactPlayer
              className="react-player "
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
          <h2 className="text-primary text-lg md:text-2xl">
            {videoDetail?.title}
          </h2>
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
        <hr />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 w-full">
          <h3 className="text-primary text-lg md:text-2xl">Related Videos</h3>
          <Suspense fallback={<Loading />}>
            {videos.map((data, idx) => (
              <li key={idx} className="list-none">
                <VideoCard video={data} />
              </li>
            ))}
          </Suspense>
        </div>
      </div>
    </section>
  );
};

export default Page;
