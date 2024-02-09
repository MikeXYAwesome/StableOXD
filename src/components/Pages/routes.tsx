//import { Routes, Route ,} from "react-router-dom";

//import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//import { createBrowserRouter } from "react-router-dom";
import HomePage from "./homepage";
import Mainpage from "./mainpage";
//import ErrorPage from "./errorpage";
//import OXDcomponets from "./oxdcomponets";
//import OxdDropdown from "../Dropdown";
//import OxdRadio from "../Radio";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function routerOne() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/mainpage" element={<Mainpage />} />
      </Routes>
    </BrowserRouter>
  );
}

// function app() {
//   return (

//     <BrowserRouter>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="users/*" element={<Users />} />
//       </Routes>
//     </BrowserRouter>
//      {/* <BrowserRouter>
// <Router>
// <Switch>
//   <Route path="/" component={HomePage} />
//   <Route path="/mainpage" component={Mainpage} />
// </Switch>
// <Router>
// </BrowserRouter> */}

//   );
// }

// const router = createBrowserRouter([
//   { path: "/", element: <HomePage/>,  errorElement: <ErrorPage /> },
//   { path: "/mainpage", element: <Mainpage /> },
//   // { path: "/oxdcomponets", element: <OXDcomponets /> },
//   {
//     path: "/oxdcomponets",
//     element: <OXDcomponets />,
//     children: [
//       {
//         path: "",
//         element: <OxdRadio />,
//       },
//       {
//         path: "",
//         element: <Mainpage></Mainpage>,
//       },
//       {
//         path: "",
//         element: <OxdDropdown />,
//       },
//     ],
//   },
//   { path: "/Dropdown", element: <OxdDropdown /> },
//   { path: "/Radio", element: <OxdRadio /> },
// ]);
export default routerOne;
