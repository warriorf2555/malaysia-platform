import React from "react";

import Hero from "./Hero";
import CarouselHome from "./CarouselHome";
import Showcase from "./Showcase";

function LandingPage() {
  return (
    <React.Fragment>
      {/* <CarouselHome /> */}
      <Hero />
      <Showcase />
    </React.Fragment>
  );
}

export default LandingPage;
