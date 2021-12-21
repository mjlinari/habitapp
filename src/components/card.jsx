import axios from "axios";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Card = ({ description, image, id, truncatedDescription }) => {
  const user = useSelector((state) => state.user);

  const handleClick = () => {
    axios.post(`/api/auth/me/favorites/${id}`, { id }).then((res) => res.data);
  };

  return (
    <>
      <div className="card my-2">
        <Link
          className="text-decoration-none"
          data-bs-toggle="modal"
          data-bs-target={`#modal${id}`}
        >
          <img src={image} className="card-img-top" alt="..." />
        </Link>
        <div className="card-body">
          <p className="card-text">{truncatedDescription}</p>
          {user?.id ? (
            <button className="btn btn-outline-success" onClick={handleClick}>
              Add to favorites
            </button>
          ) : (
            <></>
          )}
        </div>
      </div>

      <div
        class="modal fade"
        id={`modal${id}`}
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

export default Card;
