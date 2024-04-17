import React, { Suspense } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import markdownToTxt from "markdown-to-txt";
import Loading from "../app/loading";

const VideoCard = ({
  video: {
    type: { video },
    videoId,
    title,
    channelId,
    channelTitle,
    publishedTimeText,
    viewCount,
    thumbnail = [],
  },
}) => (
  <Suspense fallback={<Loading />}>
    <motion.div
      initial={{ scale: 0.9, y: 20, opacity: 0 }}
      animate={{ scale: 1, y: 0, opacity: 1 }}
      transition={{
        delay: 1,
        duration: 1,
        ease: [0.22, 0.5, 0.36, 1],
      }}
      className="flex rounded w-full md:w-[42vw] lg:w-[28vw] xl:w-[28vw] 2xl:w-[22vw] max-h-[50vh] justify-between"
    >
      <div className="flex flex-col gap-1">
        <Link
          href={videoId ? `/${videoId}` : ""}
          className="flex flex-col gap-3"
        >
          <Image
            src={
              thumbnail[2]?.url
                ? thumbnail[2]?.url
                : thumbnail[1]?.url
                ? thumbnail[1]?.url
                : thumbnail[0]?.url
            }
            alt="thumbnail"
            width={1920}
            height={1080}
            className="rounded-xl hover:scale-105 transition-all duration-300 hover:shadow-[0_0_64px_-16px_rgba(0,255,0,0.4)]"
          />
          <h2 className="text-primary text-base font-semibold transition-all duration-300 line-clamp-2">
            {markdownToTxt(title)}
          </h2>
        </Link>
        <Link
          href={`/channel/${channelId}`}
          className="text-primary/80 text-sm hover:text-primary/80 transition-all duration-300"
        >
          {channelTitle}
        </Link>
        <div className="flex gap-2">
          <p className="text-primary/80 text-sm">
            {parseInt(viewCount).toLocaleString()} Views •
          </p>
          <p className="text-primary/80 text-sm">{publishedTimeText}</p>
        </div>
      </div>
    </motion.div>
  </Suspense>
);

export default VideoCard;
