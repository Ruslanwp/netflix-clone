import { useRequest } from "./useRequest";
import './Row.scss';

const baseUrl = 'https://image.tmdb.org/t/p/original/';

export const Row = ({title, fetchUrl, isLargeRow}) => {
  const {movies} = useRequest(fetchUrl);

  return (
    <div className="row ">
      <h2>{title}</h2>
      <div className='row__posters'>
        {movies?.map(movie => (
          <img
            key={movie.id}
            className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
            src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
            alt={movie.name}
          />
        ))}
      </div>
    </div>
  )
}
