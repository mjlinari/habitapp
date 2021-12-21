import axios from "axios";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { setProperties } from "../states/properties";
import FavoriteCard from "./favoriteCard";

const FavoritesPropGrid = () => {
  const properties = useSelector((state) => state.properties);
  const user = useSelector(state=>state.user)
  /* const { id } = useParams(); */
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(`/api/auth//me/favorites`)
      .then((res) => dispatch(setProperties(res.data)));
  }, []);

  return (
    <div class="container-fluid padtop">
      <div class="row">
        <div class="col ">
          <h2>{`${user.name}´s favorites`}</h2>
        </div>
      </div>
      <div class="row">
        {properties.map((property) => {
          return (
            <div class="col-sm-12 col-md-6 col-lg-3">
              <FavoriteCard key={`Fav${property.id}`} {...property} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FavoritesPropGrid;
