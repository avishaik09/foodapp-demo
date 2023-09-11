import Header from "../Header";
import { Provider } from "react-redux";
import { render } from "@testing-library/react";
import store from "../../utils/store";
import { StaticRouter } from "react-router-dom/server";

test("logo should load on rendering header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  //check if logo is loaded
  const logo = header.getAllByTestId("logo")[0];
  expect(logo.src).toBe("http://localhost/dummy.png");

//check for online



});

test("check online status should be green on rendering header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );

//check for online
  const onlineStatus=header.getByTestId("online-status");

  expect(onlineStatus.innerHTML).toBe("✅ Online")




});
test("cart should have zero items on rendering header", () => {
  //load header
  const header = render(
    <StaticRouter>
      <Provider store={store}>
        <Header />
      </Provider>
    </StaticRouter>
  );
  
//check for online
  const cart=header.getByTestId("cart");

  expect(cart.innerHTML).toBe("Cart 0")




});

