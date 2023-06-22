import { useState, useEffect } from "react";
import fetchTrendingMovies from "components/Services.js";
// import Loader from "components/loader/Loader.jsx";
import MovieList from "components/movieList/MovieList.jsx";


const STATUS = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};


export default function Home(){

    const [status, setStatus] = useState(STATUS.IDLE);
    const [movies, setMovies] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
      const fetchTrendingFilm = async () => {
        setStatus(STATUS.PENDING);

        try {
          const data = await fetchTrendingMovies();
          setMovies(data);
          setStatus(STATUS.RESOLVED);
          setError(null);
        } catch (error) {
          setStatus(STATUS.REJECTED);
          setError(error.message);
        }
      };

      fetchTrendingFilm();
    }, []);
return(
  <section>
  <h1>Trending today</h1>
  {status === STATUS.REJECTED && alert("eror")}
  {status === STATUS.PENDING && <div>Loading...</div>}
  {status === STATUS.RESOLVED && <MovieList movies={movies} />}
</section>)

};





// import { useState, useEffect } from "react";
// import { fetchTrendingMovies } from "components/Services";

// const STATUS = {
//   IDLE: 'idle',
//   PENDING: 'pending',
//   RESOLVED: 'resolved',
//   REJECTED: 'rejected',
// };


// export default function Home() {
//   const [status, setStatus] = useState(STATUS.IDLE);
//   const [movies, setMovies] = useState([]);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     const fetchTrendingFilm = async () => {
//       setStatus(STATUS.PENDING);

//       try {
//         const data = await fetchTrendingMovies();
//         setMovies(data);
//         setStatus(STATUS.RESOLVED);
//         setError(null);
//       } catch (error) {
//         setStatus(STATUS.REJECTED);
//         setError(error.message);
//       }
//     };

//     fetchTrendingFilm();
//   }, []);
// return(
// <div>
// домашня сторінка
// <h1>Trending today</h1>
// {/*
// {status === STATUS.REJECTED && <alert>message={error}</alert>  }
//       {status === STATUS.PENDING && <div>ЗАГРУЗКА </div>} */}
// {status === STATUS.RESOLVED && <div> movies={movies} </div>}
// </div>

// )

// }
