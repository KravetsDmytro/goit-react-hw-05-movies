import { NavLink, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Movies from "./pages/Movies";

export const App = () => {
  return (
    <div>
<nav>
<NavLink to='/'>Home</NavLink>
<NavLink to='/movies'>Movies</NavLink>
{/* <NavLink to='/movies'>Movies</NavLink>
<NavLink to='/movies'>Movies</NavLink> */}


</nav>


<Routes>
<Route path="/" element={<Home/>}></Route>
<Route path="/movies" element={<Movies/>}></Route>
<Route path="//movies/:movieId" element={<div>MovieDetails</div>}></Route>
{/* <Route path="/movies" element={<div>movies</div>}></Route> */}

</Routes>
    </div>
  );
};
