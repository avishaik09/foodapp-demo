{
  /* HMR - hot module replacement (reloading page after changes)
file watcher algorithm -C++ 
building 
minify
clean our code
dev and production build
fast build algorithm
image optimization
caching while development
compatible with older versions of browsers
https on dev
port number 
consistent hashing algorithm
zero config bundler
Tree shaking - removing unwanted code
Transitive dependencies-- package manager takes care of this



babel-plugin-transform-remove-console - remove console

*/
  /*
    Header
        -logo
        -Nav
        -cart
    Body
        -searchbar
        -reastraunt list
            -restaurant cards
                -image name price rating
    Footer
                */
  //chunking
  //code splitting
  //dynamic bundling
  //lazy loading
  //on demand loading
  //dynamic  import
}

import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
// import Title from "./components/Title";
import Header from "./components/Header";
import Body from "./components/Body";
import Footer from "./components/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
// import About from "./components/About";
import Error from "./components/Error";
import Contact from "./components/Contact";
import RestaurantsMenu from "./components/RestaurantsMenu";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UserContext from "./utils/UserContext";

import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";

// const heading=React.createElement("div",{className:"maindiv"},"Main heading");
//funcitonal component - name start with capital letter
//Config driven ui
// const RestrauntCard = ({restaurants}) => {
// const {name,cuisines,avgRating,cloudinaryImageId}=restaurants.info;

const Instamart = lazy(() => import("./components/Instamart"));
const About = lazy(() => import("./components/About"));
//upon on demand loading -> upon render ->suspend loading
const AppLayout = () => {
  const [user, setUser] = useState({
    name: "Abhishek",
    email: "abhishek@gmail.com",
  });
  return (
    <>
      <Provider store={store}>
        <UserContext.Provider
          value={{
            user: user,
            setUser: setUser,
          }}
        >
          <Header />
          <Outlet />
          <Footer />
        </UserContext.Provider>
      </Provider>
    </>
  );
};

const appRoutes = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/about",
        element: (
          <Suspense>
            <About />
          </Suspense>
        ),
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      { path: "/contact", element: <Contact /> },
      {
        path: "/",
        element: (
          <Body
            user={{
              name: "Abhishek",
              email: "abhishek@gmail.com",
            }}
          />
        ),
      },
      { path: "/restaurant/:id", element: <RestaurantsMenu /> },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      { path: "/cart", element: <Cart/> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(<RouterProvider router={appRoutes} />);
