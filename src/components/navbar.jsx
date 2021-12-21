import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { setUser } from "../states/user";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [locations, setLocations] = useState([]);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(setUser(JSON.parse(localStorage.getItem("user"))));
    axios.get("/api/categories").then((res) => setCategories(res.data));
    axios.get("/api/locations").then((res) => setLocations(res.data));
  }, []);

  const handleLogout = () => {
    axios.post("/api/auth/logout", {}).then((res) => {
      dispatch(setUser(res.data));
      localStorage.clear();
      history.push("/");
    });
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
        <div className="container-fluid">
          <Link className="text-decoration-none" to="/">
         

            <span className="navbar-brand mb-0 h1 mx-2 ">Habitapp</span>
          </Link>

          {user?.isAdmin ? (
            /* Navbar de Admin */
            <>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <button
                      className="btn btn-outline-light mx-2 mb-1 dropdown-toggle"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categories
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link to="" className="text-decoration-none">
                        <li>
                          <button class="dropdown-item">Add category</button>
                        </li>
                      </Link>
                      <Link to="" className="text-decoration-none">
                        <li>
                          <button class="dropdown-item">Edit category</button>
                        </li>
                      </Link>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <button
                      className="btn btn-outline-light mx-2 mb-1  dropdown-toggle"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Locations
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link to="" className="text-decoration-none">
                        <li>
                          <button class="dropdown-item">Add location</button>
                        </li>
                      </Link>
                      <Link to="" className="text-decoration-none">
                        <li>
                          <button class="dropdown-item">Edit location</button>
                        </li>
                      </Link>
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <button
                      className="btn btn-outline-light mx-2 mb-1  dropdown-toggle"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Properties
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <Link
                        to="/admin/addProperty"
                        className="text-decoration-none"
                      >
                        <li>
                          <button class="dropdown-item">Add property</button>
                        </li>
                      </Link>
                      <Link
                        to="/admin/editProperty"
                        className="text-decoration-none"
                      >
                        <li>
                          <button class="dropdown-item">Edit property</button>
                        </li>
                      </Link>
                    </ul>
                  </li>
                </ul>

                <>
                  <button className="btn btn-light mx-2 mb-1" type="button">
                    Admin
                  </button>

                  <button
                    className="btn btn-outline-light me-2 mb-1"
                    type="submit"
                    onClick={handleLogout}
                  >
                    Logout
                  </button>
                </>

                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-light" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </>
          ) : (
            /* NavBar de User */
            <>
              <button
                className="navbar-toggler"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon"></span>
              </button>
              <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item dropdown">
                    <button
                      className="btn btn-outline-light mx-2 mb-1 dropdown-toggle"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Categories
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      {categories.map((category) => {
                        return (
                          <Link
                            key={category.name}
                            to={`/category/${category.id}`}
                            className="text-decoration-none"
                          >
                            <li>
                              <button class="dropdown-item">
                                {category.name}
                              </button>
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  </li>
                  <li className="nav-item dropdown">
                    <button
                      className="btn btn-outline-light mx-2 mb-1  dropdown-toggle"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Locations
                    </button>
                    <ul
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      {locations.map((location) => {
                        return (
                          <Link
                            key={location.name}
                            to={`/location/${location.id}`}
                            className="text-decoration-none"
                          >
                            <li>
                              <button class="dropdown-item">
                                {location.name}
                              </button>
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  </li>
                </ul>

                {!user?.id ? (
                  <div className="d-flex">
                    <Link to="/login">
                      <button
                        className="btn btn-outline-light mx-2 mb-1"
                        type="submit"
                      >
                        Login
                      </button>
                    </Link>{" "}
                    <Link to="/register">
                      <button
                        className="btn btn-outline-light me-2 mb-1"
                        type="submit"
                      >
                        Sing-up
                      </button>
                    </Link>
                  </div>
                ) : (
                  <>
                    <Link to={`/user/${user.id}`}>
                      <button
                        className="btn btn-outline-light mx-2 mb-1"
                        type="submit"
                      >
                        {user.name}
                      </button>
                    </Link>

                    <button
                      className="btn btn-outline-light me-2 mb-1"
                      type="submit"
                      onClick={handleLogout}
                    >
                      Logout
                    </button>
                  </>
                )}

                <form className="d-flex">
                  <input
                    className="form-control me-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                  />
                  <button className="btn btn-outline-light" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </>
          )}
        </div>
      </nav>
    </>
  );
};

export default Navbar;
