import styled from "@emotion/styled";

const StyledPlayContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  position: relative;
  margin-top: 40px;
  width: 100%;

  @media screen and (max-width: 700px) {
    margin-top: 30px;
  }
`;

const StyledVideoItem = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  position: relative;
  padding-bottom: 1rem;
  margin-top: 5rem;

  @media screen and (max-width: 700px) {
    margin-top: 2rem;
  }
`;

const StyledVideoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  padding: 5px;
  width: 24rem;
  position: relative;

  @media screen and (max-width: 800px) {
    width: 19rem;
    padding: 2px;
  }
  @media screen and (max-width: 700px) {
    width: 100%;
    padding: 0;
  }
`;

const StyledVideoItemVid = styled.video`
  @media screen and (max-width: 700px) {
    border-radius: 0;
  }
`;

const PlayVideoDetails = styled.div`
  display: flex;
  flex-direction: column;
  text-align: justify;

  @media screen and (max-width: 700px) {
    h2 {
      font-size: 17px;
    }
  }
`;

const PlayHeaderDetails = styled.div`
  display: flex;
  padding: 12px;
  align-items: center;
  gap: 12px;

  @media screen and (max-width: 700px) {
    padding: 0;
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;
  }
`;

const PlayDeatilsContainer = styled.div`
  display: flex;
  position: relative;
  justify-content: space-between;
  @media screen and (max-width: 700px) {
    padding: 10px;
  }
`;

const VideoPlayWrapper = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  height: auto;
  margin-top: 0;

  @media screen and (max-width: 700px) {
    .v {
      height: 400px;
    }
  }
`;

export {
  StyledVideoItem,
  StyledVideoWrapper,
  PlayVideoDetails,
  StyledVideoItemVid,
  PlayHeaderDetails,
  VideoPlayWrapper,
  PlayDeatilsContainer,
  StyledPlayContainer,
};
