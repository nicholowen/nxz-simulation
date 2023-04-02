import "./App.css";
import exp from "./images/experiences.jpg";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Get Out There NZ</h1>

        <div className="text">
          We strive to bring you to the experiences of the outdoors. Escape the
          hustle and bustle and explore the country with us, Get out there New
          Zealand!
        </div>

        <div className="section-container">
          <h3>Experiences</h3>

          <div className="section">
            <img className="image" src={exp} />
            <div className="text-box">
              <div className="text">
                Here at GOTNZ, we bring you on guided tours and outdoor escapes
                with professionsals who know the country. <br />
                <br />
                If you're up for a more solo adventure, we provide trip guides,
                and info packs so you can get out there and experience the
                outdoors safely and in peace.
              </div>
            </div>
          </div>
        </div>

        <div className="section-container">
          <h3>Guided Tours</h3>

          <div className="section">
            <img className="image" src={exp} />
            <div className="text-box">
              <div className="text">
                Our guided tours... etc <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
        </div>

        <div className="section-container">
          <h3>Solo Adventures</h3>

          <div className="section">
            <img className="image" src={exp} />
            <div className="text-box">
              <div className="text">
                Solo adventuring... etc <br/>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </div>
            </div>
          </div>
        </div>
        <a
          className="App-link"
          href=""
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact Us
        </a>
      </header>
    </div>
  );
}

export default App;
