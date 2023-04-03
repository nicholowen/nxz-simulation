import "./App.css";
import React, { useRef } from "react";
import useScrollSnap from "react-use-scroll-snap";
import Section from "./components/Section";
import exp from "./images/exp.jpg";
import tour from "./images/tour.jpg";
import solo from "./images/solo.jpg";
import feedback from "./images/feedback.jpg";
import TitleSection from "./components/TitleSection";

//Solo Adventure Photo by Aleks Dahlberg on Unsplash
//Testimonial Photo by Mohamed Nohassi on Unsplash

function App() {

  const scrollRef = useRef(null);
  useScrollSnap({ ref: scrollRef, duration: 20, delay: 5 });

  return (

    <div className="App" ref={scrollRef}>
      <div className="sectionContainer">
        <TitleSection title="Get Out There NZ" />
      </div>
      <div className="sectionContainer">
        <Section header="The Experience" image={exp}
          text="Here at GOTNZ, we bring you on guided tours and outdoor escapes
                with professionsals who know the country. Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."

        />
      </div>
      <div className="sectionContainer">
        <Section header="Guided Tours" image={tour}
          text="Here at GOTNZ, we bring you on guided tours and outdoor escapes
                with professionsals who know the country.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
      <div className="sectionContainer">
        <Section header="Solo Tours" image={solo}
          text="Here at GOTNZ, we bring you on guided tours and outdoor escapes
                with professionsals who know the country.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
      <div className="sectionContainer">
        <Section header="Feedback" image={feedback}
          text="Here at GOTNZ, we bring you on guided tours and outdoor escapes
                with professionsals who know the country.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, 
                quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
        />
      </div>
    </div>
  );
}

export default App;
