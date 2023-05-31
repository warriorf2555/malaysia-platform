import React, { useState, useEffect, useCallback } from "react";
import { Carousel, Embla } from "@mantine/carousel";
import { motion, AnimatePresence } from "framer-motion";

import Advertisement from "src/common/images/Advertisement.jpg";
import SignUp from "src/common/images/SignUp.jpg";

type FirstCarouselSlideProps = {
  page: number;
};

const FirstCarouselSlide: React.FunctionComponent<FirstCarouselSlideProps> = (
  props
) => {
  const { page } = props;

  console.log("page", page);
  return (
    <Carousel.Slide
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {page === 0 ? (
        <AnimatePresence>
          <motion.img
            key={Advertisement.src}
            src={Advertisement.src}
            width={1350}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          />
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.img
            key={Advertisement.src}
            src={Advertisement.src}
            width={1350}
            initial={{ opacity: 0, y: 200 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
          />
        </AnimatePresence>
      )}
    </Carousel.Slide>
  );
};

const SecondCarouselSlide: React.FunctionComponent<FirstCarouselSlideProps> = (
  props
) => {
  const { page } = props;

  return (
    <Carousel.Slide
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {page === 1 ? (
        <AnimatePresence>
          <motion.img
            key={SignUp.src}
            src={SignUp.src}
            height={300}
            width={900}
            initial={{ opacity: 0, y: 200 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          />
        </AnimatePresence>
      ) : (
        <AnimatePresence>
          <motion.img
            key={SignUp.src}
            src={SignUp.src}
            height={300}
            width={900}
            initial={{ opacity: 0, y: 200 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 0.1, type: "spring", stiffness: 200 }}
          />
        </AnimatePresence>
      )}
    </Carousel.Slide>
  );
};

function CarouselHome() {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [page, setPage] = useState(0);

  const handleScroll = useCallback(() => {
    if (!embla) return;

    // Next line
    const currentSlide = embla?.slidesInView();
    const currentPage = currentSlide[0];
    setPage(currentPage || 0);
  }, [embla]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <main className="flex">
      <Carousel
        withIndicators
        sx={{ flex: 1 }}
        slideSize="100%"
        getEmblaApi={setEmbla}
        loop
      >
        <FirstCarouselSlide page={page} />
        <SecondCarouselSlide page={page} />
      </Carousel>
    </main>
  );
}

export default CarouselHome;
