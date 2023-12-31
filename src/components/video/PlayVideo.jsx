import React from "react";
import { HeaderOne, Video, VideoPlayer } from "../../libs";
import { FlexBetween } from "../../styles/common/Global";
import { VideoPlayWrapper } from "../../styles/components/video/videoitem.styled";
import { Skeleton } from "@mui/material";

const PlayVideo = ({ play, isLoading }) => {
  return (
    <VideoPlayWrapper>
      {isLoading ? (
        <Skeleton variant="rectangular" width={`100%`} height={`30rem`} />
      ) : (
        <VideoPlayer
          src={play?.video?.url}
          className="h-[500px] v w-full bg-black rounded-none"
          name={play?.desc}
          fullPage
          // autoStart
        />
        // <Video
        //   video={play?.video?.url}
        //   className="h-[500px] v w-full bg-black rounded-none"
        //   name={play?.desc}
        //   // autoStart
        // />
      )}

      {/* <FlexBetween className="p-2 max-[700px]:p-1 max-[700px]:flex-col relative w-full"> */}
      <HeaderOne
        isLoading={isLoading}
        loadingHeight={`50px`}
        fontBold
        fontSofia
        text={play?.desc}
        loadingWidth={`98%`}
        className="text-xl max-[700px]:text-sm text-black mt-2"
      />
      {/* </FlexBetween> */}
    </VideoPlayWrapper>
  );
};

export default PlayVideo;
