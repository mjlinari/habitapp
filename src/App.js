import { Switch, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import Banner from "./components/banner";
import LoginForm from "./components/loginForm";
import RegisterForm from "./components/registerForm";
import PropertiesGrid from "./components/propertiesGrid";
import CategoryPropGrid from "./components/categoryPropGrid";
import LocationPropGrid from "./components/locationPropGrid";
import FavoritesPropGrid from "./components/favoritesPropGrid";
import AddPropertyForm from "./components/addProperyForm"
import EditProperty from "./components/editProperty";

import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.user);
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          {user?.isAdmin ? (<></>
          ) : (
            <>
              <Banner />
              <PropertiesGrid />
            </>
          )}
        </Route>
        <Route path="/category/:id">
          <CategoryPropGrid />
        </Route>
        <Route path="/location/:id">
          <LocationPropGrid />
        </Route>
        <Route path="/user/:id">
          <FavoritesPropGrid />
        </Route>
        <Route path="/login">
          <LoginForm />
        </Route>
        <Route path="/register">
          <RegisterForm />
        </Route>
        <Route path="/admin/addProperty">
          <AddPropertyForm />
        </Route>
        <Route path="/admin/editProperty">
          <EditProperty/>
        </Route>
      </Switch>
    </>
  );
}

export default App;
