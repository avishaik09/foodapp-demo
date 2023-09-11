import { render } from "@testing-library/react";
import Body from "../Body";
import { Provider } from "react-redux";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";


global.fetch=jest.fn(()=>{
    Promise.resolve({
        json:Promise.resolve()
    })
});


test("Search result on Home page", () => {
  const body = render(
    <StaticRouter>
    <Provider store={store}>
      <Body />
    </Provider>
    </StaticRouter>
  );
  console.log(body);
});
