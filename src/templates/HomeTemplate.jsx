import React from "react";
import { Route } from "react-router-dom";
import Header from "../components/Header";

const HomeLayout = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
    </React.Fragment>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Component {...propsComponent} />
        </HomeLayout>
      )}
    />
  );
}
