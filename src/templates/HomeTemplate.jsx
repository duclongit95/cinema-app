import Footer from "components/Footer";
import Header from "components/Header";
import Loading from "components/Loading";
import React from "react";
import { Suspense } from "react";
import { Route } from "react-router-dom";

const HomeLayout = (props) => {
  return (
    <React.Fragment>
      <Header />
      {props.children}
      <Footer />
    </React.Fragment>
  );
};

export default function HomeTemplate({ Component, ...props }) {
  return (
    <Route
      {...props}
      render={(propsComponent) => (
        <HomeLayout>
          <Suspense fallback={<Loading />}>
            <Component {...propsComponent} />
          </Suspense>
        </HomeLayout>
      )}
    />
  );
}
