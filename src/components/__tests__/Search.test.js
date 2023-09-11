import '@testing-library/jest-dom'
import { fireEvent, render, waitFor } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";
import { RESTAURANT_DATA } from "../../mocks/data";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(RESTAURANT_DATA);
    },
  });
});

// test("Search result on Home page", () => {
//   const body = render(
//     <StaticRouter>
//       <Provider store={store}>
//         <Body />
//       </Provider>
//     </StaticRouter>
//   );


//  const searchBtn=body.getByTestId("search-btn"); 
//   console.log(searchBtn);
// });


test("Shimmer should load on Home page", () => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
 const shimmer=body.getByTestId("shimmer"); 
 expect(shimmer.children.length).toBe(10);
  console.log(shimmer);
});


test("Restaurant should load on Home page", async() => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(()=> expect(body.getByTestId("search-btn")))
 const resList=body.getByTestId("res-list"); 
 expect(resList.children.length).toBe(9);
  console.log(resList);
});

test("Search for food(string) on Home page", async() => {
  const body = render(
    <StaticRouter>
      <Provider store={store}>
        <Body />
      </Provider>
    </StaticRouter>
  );
  await waitFor(()=> expect(body.getByTestId("search-btn")))
 const input=body.getByTestId("search-input"); 
 fireEvent.change(input,{
  target:{
    value:"kfc",
  }
 });
 const searchBtn=body.getByTestId("search-btn"); 
 fireEvent.click(searchBtn);

 const resList=body.getByTestId("res-list"); 
 expect(resList.children.length).toBe(1);
});
