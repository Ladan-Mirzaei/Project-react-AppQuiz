import "./ads-page.css"; // Import the CSS file
import car from "../assets/car.mp4"; // Update to import the video file

const AdvertisementPage = ({ setPage }) => {
  return (
    <div className="ads-container">
      <header>
        <h2 className="ads-title">Advertisement Page</h2>
      </header>

      <main>
        <section>
          {/* Replace <img> with <video> */}
          <video
            src={car}
            alt="Advertisement for car"
            controls
            autoPlay
            loop
            style={{ width: "100%", maxHeight: "400px", borderRadius: "20px" }} // Inline styles for quick adjustments
          >
            Your browser does not support the video tag.
          </video>
        </section>

        <section>
          <a href="https://google.com" className="btn">
            Learn More
            <i className="fas fa-info-circle"></i>
          </a>
        </section>
      </main>

      <footer>
        <button className="btn" onClick={() => setPage("result")}>
          Go to Result Page
          <i className="fas fa-arrow-right"></i>
        </button>
      </footer>
    </div>
  );
};

export default AdvertisementPage;
