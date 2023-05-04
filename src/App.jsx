import React from "react";
import CarouselComponent from "./CarouselComponent";
import image1 from "./assets/Must Have 4K UHD Landscapes wallpapers June 2021 (TeNeBrA)_01 (84).jpg";
import image2 from "./assets/Must Have 4K UHD Landscapes wallpapers June 2021 (TeNeBrA)_01 (85).jpg";
import image3 from "./assets/Must Have 4K UHD Landscapes wallpapers June 2021 (TeNeBrA)_01 (86).jpg";
import image4 from "./assets/Must Have 4K UHD Landscapes wallpapers June 2021 (TeNeBrA)_01 (87).jpg";
import image5 from "./assets/Must Have 4K UHD Landscapes wallpapers June 2021 (TeNeBrA)_01 (88).jpg";
import image6 from "./assets/Must Have 4K UHD Landscapes wallpapers June 2021 (TeNeBrA)_01 (89).jpg";

function App() {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
  ]


  return (
    <div className="App">

<CarouselComponent images={images}/>
    </div>
  );
}

export default App;
