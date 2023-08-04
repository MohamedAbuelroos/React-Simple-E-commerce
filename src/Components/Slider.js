import Image1 from"./images/laptop_12.jpg"
import Image2 from"./images/cropped-image-woman-inputting-card-information-key-phone-laptop-while-shopping-online.jpg"
import Image3 from"./images/digital-wardrobe-transparent-screen.jpg"

function Slider() {
  return (
    <>
      <div id="carouselExampleIndicators" className="carousel slide">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={Image1} className="d-block w-100 H-50" alt="First" />
          </div>
          <div className="carousel-item">
            <img src={Image2} className="d-block w-100 H-50" alt="Second" />
          </div>
          <div className="carousel-item">
            <img src={Image3} className="d-block w-100 H-50" alt="Third" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden nx">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
