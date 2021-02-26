import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageNotFound from "./pages/PageNotFound";
import { routesAdmin, routesHome } from "./routes";
import AdminTemplate from "./templates/AdminTemplate";
import HomeTemplate from "./templates/HomeTemplate";

const showMenuHome = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <HomeTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};

const showMenuAdmin = (routes) => {
  if (routes && routes.length > 0) {
    return routes.map((item, index) => {
      return (
        <AdminTemplate
          key={index}
          path={item.path}
          exact={item.exact}
          Component={item.component}
        />
      );
    });
  }
};

function App() {
  return (
    <Router>
      <Switch>
        {showMenuHome(routesHome)}
        {showMenuAdmin(routesAdmin)}

        <Route path="" component={PageNotFound} />
      </Switch>
    </Router>
  );
}

export default App;
