import axios from "axios";
import { useState } from "react";

const AddPropertyForm = () => {
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [available, setAvailable] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/admin", {
        description,
        price,
        image,
        available,
        location,
        category,
      })
      .then((res) => res.data);
  };

  return (
    <>
      <div className="w-25 m-auto padtop">
        <form onSubmit={handleSubmit}>
          <div class="mb-3">
            <label for="description" class="form-label">
              Description
            </label>
            <textarea
              type="text"
              class="form-control"
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="price" class="form-label">
              Price
            </label>
            <input
              type="text"
              class="form-control"
              id="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="image" class="form-label">
              Image
            </label>
            <input
              type="text"
              class="form-control"
              id="image"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="location" class="form-label">
              Location
            </label>
            <input
              type="text"
              class="form-control"
              id="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
            />
          </div>
          <div class="mb-3">
            <label for="category" class="form-label">
              Category
            </label>
            <input
              type="text"
              class="form-control"
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          <div class="mb-3 form-check">
            <input
              type="checkbox"
              class="form-check-input"
              id="available"
              value={available}
              onChange={(e) => {
                setAvailable(e.target.value);
              }}
            />
            <label class="form-check-label" for="available">
              Available
            </label>
          </div>

          <button type="submit" class="btn btn-outline-dark">
            Submit
          </button>
        </form>
      </div>
    </>
  );
};

export default AddPropertyForm;
