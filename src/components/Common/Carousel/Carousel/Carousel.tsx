import { useCallback, useEffect, useRef, useState } from "react";
import { Image } from "@mantine/core";
import Autoplay from "embla-carousel-autoplay";
import { Carousel, Embla } from "@mantine/carousel";

import "@mantine/carousel/styles.css";
import "./Carousel.css";

interface AlertCarouselProps {
  images: string[];
}

export default function AlertCarousel({ images }: AlertCarouselProps) {
  const [embla, setEmbla] = useState<Embla | null>(null);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  const autoplay = useRef(Autoplay({ delay: 5000 }));

  const handleScroll = useCallback(() => {
    if (!embla) return;
    setCurrentSlideIndex(embla.selectedScrollSnap());
  }, [embla, setCurrentSlideIndex]);

  useEffect(() => {
    if (embla) {
      embla.on("scroll", handleScroll);
      handleScroll();
    }
  }, [embla]);

  return (
    <div className="bg-[#141414] p-8">
      <Carousel
        slideSize={{ base: "100%", sm: "60%", md: "30%" }}
        loop
        plugins={[autoplay.current]}
        draggable
        className="w-full mx-auto max-w-[1366px] transition duration-500"
        slideGap="xl"
        getEmblaApi={setEmbla}
      >
        {images.map((image, index) => (
          <Carousel.Slide key={index}>
            <div className="h-full w-full relative">
              <div className="h-full">
                <Image
                  src={image}
                  alt="Imagem do animal"
                  draggable={false}
                  className={`bg-cover w-full h-[500px] transition ease-in-out duration-1000 rounded-lg ${
                    index !== currentSlideIndex
                      ? "brightness-[0.]"
                      : "h-[600px]"
                  }`}
                />
              </div>
            </div>
          </Carousel.Slide>
        ))}
      </Carousel>
    </div>
  );
}
