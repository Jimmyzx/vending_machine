import React from "react";
import { Link } from "react-router-dom";
import "./Home.css"; 

function Home() {
  return (
    <div className="home-container">
      <h2>Welcome to the Vending Machine</h2>
      <ul>
        <li>
          <Link to="/snack">Snack</Link>
        </li>
        <li>
          <Link to="/soda">Soda</Link>
        </li>
        <li>
          <Link to="/candy">Candy</Link>
        </li>
      </ul>
    </div>
  );
}

export default Home;




// function Home() {
//   return (
//     <div className="home-container">
//       <h2>Welcome to the Vending Machine</h2>
//       <Link to="/snack">Snack</Link>
//       <Link to="/soda">Soda</Link>
//       <Link to="/candy">Candy</Link>
//     </div>
//   );
// }

// function Home() {
//     return (
//       <div className="home-container">
//         <h2>Welcome to the Vending Machine</h2>
//         <ul>
//           <li>
//             <a href="/snack">Snack</a>
//           </li>
//           <li>
//             <a href="/soda">Soda</a>
//           </li>
//           <li>
//             <a href="/candy">Candy</a>
//           </li>
//         </ul>
//       </div>
//     );
//   }
  
// export default Home;
