import axios from "axios";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { setProperties } from "../states/properties";
import { Link } from "react-router-dom";

const FavoriteCard = ({ description, image, id, truncatedDescription }) => {
  const user = useSelector((state) => state.user);
  const properties = useSelector((state) => state.properties);
  const dispatch = useDispatch();

  const handleClick = () => {
    axios.delete(`/api/auth/me/favorites/${id}`).then(() => {
      dispatch(setProperties(properties.filter((el) => el.id !== id)));
    });
  };
  return (
    <>
      <div className="card my-2">
        <Link
          className="text-decoration-none"
          data-bs-toggle="modal"
          data-bs-target={`#favModal${id}`}
        >
          <img src={image} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <p className="card-text">{truncatedDescription}</p>
          {user.id ? (
            <button className="btn btn-outline-danger" onClick={handleClick}>
              Remove from favorites
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div
        class="modal fade"
        id={`favModal${id}`}
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                {id}
              </h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <img src={image} className="card-img-top" alt="..." />
            <div class="modal-body">
              <p>{description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FavoriteCard;
