import React from "react";
import { useRouteError } from "react-router-dom";

function Error() {
  const err = useRouteError();
  console.log(err);
  return (
    <div>
      <h2>Something went wrong</h2>
      <h2>{err.status + " :  " + err.statusText}</h2>
      {/* <h1>{err.error?.message}</h1> */}
    </div>
  );
}

export default Error;
