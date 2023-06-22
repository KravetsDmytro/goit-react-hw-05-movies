import axios from 'axios';

const API_KEY= '7caaa8881d91bf30f2f1b78f153c6954';
axios.defaults.baseURL = 'https://api.themoviedb.org/3/'

// список популярних фільмів на головній сторінці
 const  fetchTrendingMovies = async () => {
  const { data } = await axios.get(
    `trending/movie/day?api_key=${API_KEY}&language=uk&page=1`
  );
  return data.results;

};
export default fetchTrendingMovies
