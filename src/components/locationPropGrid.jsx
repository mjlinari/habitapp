import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useParams } from "react-router";
import { setProperties } from "../states/properties";
import Card from "./card";

const LocationPropGrid = () => {
  const [location, setLocation] = useState({})
  const properties = useSelector((state) => state.properties);
  const { id } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    axios.get(`/api/locations/${id}`).then(res=> setLocation(res.data))
    axios
      .get(`/api/properties/location/${id}`)
      .then((res) => dispatch(setProperties(res.data)));
  }, [id]);

  return (
    <div class="container-fluid padtop">
      <div class="row">
        <div class="col ">
          <h2 >{`Find your place in ${location.name}`}</h2>
        </div>
      </div>
      <div class="row">
        {properties.map((property) => {
          return (
            <div class="col-sm-12 col-md-6 col-lg-3">
              <Card key={property.id} {...property} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default LocationPropGrid;
