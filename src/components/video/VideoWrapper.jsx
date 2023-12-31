import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Libography, Span, Video, VideoPlayer } from "../../libs";
import { Skeleton } from "@mui/material";
import { StyledVideoWrapper } from "../../styles/components/video/videoitem.styled";
import UImge from "../user/UImge";
import { ViewVideo } from "../../helper/fetch";
import { useSelector } from "react-redux";

const VideoWrapper = ({ video }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const userId = useSelector((state) => state.credentails?._id);
  const videoId = video._id;

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  function goToUser(e) {
    e.stopPropagation();

    navigate(`/${video.username}`);
  }
  async function playVideo(e) {
    e.stopPropagation();
    await ViewVideo(userId, videoId);
    navigate(`/video/${video._id}`);
  }
  return (
    <StyledVideoWrapper>
      {isLoading ? (
        <Skeleton variant="rectangular" width={`100%`} height={`14rem`} />
      ) : (
        <Video
          video={video.video?.url}
          className="h-56 w-full rounded-t-lg bg-black cursor-pointer"
          name={video.desc}
          loadingHeight={"14rem"}
        />
      )}
      <div
        className="flex flex-col p-3 cursor-pointer"
        onClick={isLoading ? null : playVideo}
      >
        <div className="flex gap-2 items-center">
          <UImge user={video} isLoading={isLoading} />
          <div className="flex flex-col gap-0">
            <Libography
              fontSofia
              fontSemiBold
              className="text-base"
              isLoading={isLoading}
              loadingHeight={`25px`}
              loadingWidth={`120px`}
              text={video.name}
            />
            <Span
              onClick={goToUser}
              text={`@ ${video.username}`}
              loadingHeight="20px"
              loadingWidth={`95px`}
              fontSofia
              fontSemiBold
              isLoading={isLoading}
              className="cursor-pointer hover:underline text-neutral-500 text-xs"
            />
          </div>
        </div>
        <Libography
          fontSofia
          fontSemiBold
          isLoading={isLoading}
          loadingHeight={`50px`}
          loadingWidth={`100%`}
          text={video.desc}
          className="p-1 text-base"
        />
      </div>
    </StyledVideoWrapper>
  );
};

export default VideoWrapper;
