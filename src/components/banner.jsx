const Banner = () => {

  return (
    <>
      <div
        id="carouselExampleControls"
        class="carousel slide py-3"
        data-bs-ride="carousel"
        
      >
        <div class="carousel-inner h-100">
          <div class="carousel-item active h-100">
            <img
              src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              class="d-block w-100 h-100"
              alt="..."
            />
          </div>
          <div class="carousel-item h-100">
            <img
              src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              class="d-block w-100 h-100"
              alt="..."
            />
          </div>
          <div class="carousel-item h-100">
            <img
              src="https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
              class="d-block w-100 h-100"
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
      
    </>
  );
};

export default Banner;
