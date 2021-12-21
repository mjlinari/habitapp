import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProperties, setProperties } from "../states/properties";
import Card from "./card";

const PropertiesGrid = () => {
  const properties = useSelector((state) => state.properties);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProperties()).then((res) =>
      dispatch(setProperties(res.data))
    );
  }, []);

  return (
    <div class="container-fluid">
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

export default PropertiesGrid;
