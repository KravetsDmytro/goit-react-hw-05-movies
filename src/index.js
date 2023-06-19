import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import './index.css';
import { BrowserRouter } from "react-router-dom";


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<BrowserRouter basename="/goit-react-hw-05-movies">
<App />
</BrowserRouter>

  </React.StrictMode>
);


// import { Routes, Route, NavLink } from "react-router-dom";
// import styled from "styled-components";
// import Home from "path/to/pages/Home";
// import About from "path/to/pages/About";
// import Products from "path/to/pages/Products";

// const StyledLink = styled(NavLink)`
//   color: black;

//   &.active {
//     color: orange;
//   }
// `;

// export const App = () => {
//   return (
//     <div>
//       <nav>
//         <StyledLink to="/" end>
//           Home
//         </StyledLink>
//         <StyledLink to="/about">About</StyledLink>
//         <StyledLink to="/products">Products</StyledLink>
//       </nav>

//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//         <Route path="/products" element={<Products />} />
//       </Routes>
//     </div>
//   );
// };
