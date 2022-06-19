import { useEffect, useMemo, useState } from "react";
import axios from './axios';
import requests from "./requests";
import { useRequest } from "./useRequest";

export const Banner = ({title}) => {
  const {movies, error, loading} = useRequest(requests.fetchNetflixoriginaLS);

  const randomMovie = useMemo(() => {
    if (!movies) {
      return null;
    };

    const randomIndexx = Math.floor(Math.random() * movies.length - 1);
    return movies[randomIndexx]
  }, [movies]);

  console.log(randomMovie);

  return (
    <header className='banner'>
      <div className='banner__content'></div>
      {/* {title} */}
      1
    </header>
  )
};
