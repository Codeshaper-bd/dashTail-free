"use client";
import * as React from "react";
import Card from "@/components/ui/card-snippet";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  autoPlayCarousel,
  centerAlignmentCarousel,
  defaultCarousel,
  loopCarousel,
  oriantationCarousel,
  righttoleftCarousel,
  sizeCarousel,
} from "./source-code";

import slider1 from "@/public/images/all-img/slider-1.png";
import Image from "next/image";

const CarouselPage = () => {
  return (
    <div className=" space-y-10">
      <Card title="Default" code={defaultCarousel}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Default carousel is showing one slide at a time
        </p>
        <div className="px-10">
          <Carousel className="w-full max-w-3xl	 mx-auto">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem className=" w-full" key={index}>
                  <div className="p-1">
                    <div className="flex aspect-square items-center justify-center   h-[300px]  w-full">
                      <Image
                        className="w-full h-full object-cover rounded-lg"
                        src={slider1}
                        alt="image"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Card>
      <Card title="Size" code={sizeCarousel}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Size carousel is showing different size carousel in one slide at a
          time.
        </p>
        <div className="px-10">
          <Carousel className="w-full max-w-3xl mx-auto">
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="flex aspect-square items-center justify-center  ">
                      <Image
                        className="w-full h-full object-cover rounded-lg"
                        src={slider1}
                        alt="image"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Card>
      <Card title="Orientation" code={oriantationCarousel}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Orientation carousel is showing carousel in vertically slide.
        </p>
        <Carousel
          opts={{
            align: "start",
          }}
          orientation="vertical"
          className="w-full max-w-3xl mx-auto my-14"
        >
          <CarouselContent className="-mt-1 h-[400px]">
            {Array.from({ length: 5 }).map((_, index) => (
              <CarouselItem key={index} className="pt-1 basis-1/2">
                <div className="p-1">
                  <div className="flex items-center justify-center h-[200px]">
                    <Image
                      className="w-full h-full object-cover rounded-lg"
                      src={slider1}
                      alt="image"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </Card>

      <Card title="Loop" code={loopCarousel}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          Orientation carousel is showing carousel in loop .
        </p>
        <div className="px-10">
          <Carousel
            plugins={[
              Autoplay({
                delay: 2000,
              }),
            ]}
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-3xl mx-auto"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="p-1">
                    <div className="flex aspect-square items-center justify-center  ">
                      <Image
                        className="w-full h-full object-cover rounded-lg"
                        src={slider1}
                        alt="image"
                      />
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Card>

      <Card title="Center Alignment" code={centerAlignmentCarousel}>
        <p className="text-sm text-default-400 dark:text-default-600  mb-4">
          The carousel item will align center .
        </p>
        <div className="px-10">
          <Carousel
            opts={{
              align: "center",
              loop: true,
              containScroll: "trimSnaps",
            }}
            className="w-full max-w-3xl mx-auto"
          >
            <CarouselContent>
              {Array.from({ length: 5 }).map((_, index) => (
                <CarouselItem
                  key={index}
                  className="basis-full md:basis-1/2 lg:basis-2/4"
                >
                  <div className="p-1">
                    <div className="flex aspect-square items-center justify-center  max-h-[250px] relative">
                      <Image
                        className="w-full h-full object-cover rounded-lg embla__slide__img embla__parallax__img"
                        src={slider1}
                        alt="image"
                      />
                      <span className="absolute top-2 bg-default-400 w-10 h-10 p-2 left-2 rounded-full text-primary-foreground flex items-center justify-center  ">
                        {index + 1}
                      </span>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </Card>
    </div>
  );
};

export default CarouselPage;
