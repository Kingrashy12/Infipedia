import React, { useEffect, useState } from "react";
import { StyledTrend } from "../../../styles/components/post/trend/trend.styled";
import { Button, HeaderOne } from "../../../libs";
import { getTrends } from "../../../hooks/getUserById";
import TrendPostsItem from "./TrendPostsItem";
import { AiOutlineLoading3Quarters } from "react-icons/ai";
import Error from "../Error";
import { useNavigate } from "react-router-dom";

const Trend = () => {
  const navigate = useNavigate();
  const [trendData, setTrend] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  console.log("trends:", trendData);
  useEffect(() => {
    setIsLoading(true);
    const getPostsTrend = async () => {
      try {
        const data = await getTrends();
        setTrend(data);
      } catch (error) {
        setError(true);
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    getPostsTrend();
  }, []);
  return (
    <StyledTrend className="bg-slate-">
      <HeaderOne fontSofia text="Trending" />
      <hr />
      {isLoading ? (
        <div className="flex justify-center items-center w-full mt-5">
          <AiOutlineLoading3Quarters className="text-3xl tryloader" />
        </div>
      ) : error ? (
        <div className="flex justify-center items-center w-full mt-5">
          <Error />
        </div>
      ) : (
        trendData?.map((trend) => <TrendPostsItem trend={trend} />).slice(0, 2)
      )}
      <div className="p-4">
        <Button
          text="Show more"
          secondary
          fullWidth
          onClick={() => navigate("/trending")}
        />
      </div>
    </StyledTrend>
  );
};

export default Trend;
