import { unwrapResult } from "@reduxjs/toolkit";
import Loading from "components/Loading";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getDetailMovieApiAct } from "redux/slice/movieSlice";
import DetailMovieBottom from "./components/DetailMovieBottom";
import DetailMovieTop from "./components/DetailMovieTop";

DetailMovie.propTypes = {};

function DetailMovie(props) {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(true);

  const dispatch = useDispatch();
  useEffect(() => {
    try {
      const getDetailMovie = async (params) => {
        const result = await dispatch(getDetailMovieApiAct(params));
        unwrapResult(result);
        setIsLoading(false);
      };
      getDetailMovie({ maPhim: id });
    } catch (error) {
      console.log(error);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const detailMovie = useSelector((state) => state.movieReducer.detailMovie);
  const { hinhAnh, tenPhim, ngayKhoiChieu } = detailMovie;

  return (
    <div className="detail-movie">
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <DetailMovieTop
            detailMovieTop={{ hinhAnh, tenPhim, ngayKhoiChieu }}
          />
          <DetailMovieBottom detailMovie={detailMovie} />
        </>
      )}
    </div>
  );
}

export default DetailMovie;
