import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Movies from "../pages/Movies";
import Layout from "./layout/Layout";

export const App = () => {
  return (
    <div>




<Routes>
<Route path="/" element={<Layout/>}>
<Route index element={<Home />} />
   <Route path="movies" element={<Movies/>} />
   <Route path="movies/:movieId" element={<div>MovieDetails</div>} />

 </Route>

{/* <Route path="/movies" element={<div>movies</div>}></Route> */}

</Routes>
    </div>
  );
};
