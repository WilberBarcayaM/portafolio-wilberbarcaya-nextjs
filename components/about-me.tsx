"use client"

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";
import Link from "next/link";

import { dataAboutMe, dataSlider } from "@/data";

import Title from "./shared/title";
import { buttonVariants } from "./ui/button";
import { type CarouselApi, Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "./ui/carousel";
import Image from "next/image";

const AboutMe = () => {
    const [api, setApi] = useState<CarouselApi>();

    useEffect(() => {
        if (!api) return;

        const interval = setInterval(() => {
            api.scrollNext();
        }, 5000);

        return () => clearInterval(interval);
    }, [api]);

    return (
        <div className="p-6 md:px-12 md:py-30 max-w-5xl" id="about-me">
            <Title title="About Me" subtitle="Get to know me"/>

            <div className="grid md:grid-cols-2">
                <div className="py-12 ms:py-0 flex items-center justify-center">
                    {/* CAROUSEL */}
                    <Carousel
                        opts={{
                            align: "start",
                            loop: true,
                        }}
                        orientation="vertical"
                        className="w-full max-w-xs h-fit"
                        setApi={setApi}
                    >
                        <CarouselContent className="mt-1 h-[200px]">
                            {dataSlider.map((data) => (
                                <CarouselItem key={data.id}>
                                    <div className="flex items-center justify-center">
                                        <Image src={data.url} alt="Image" width={250} height={400} className="w-full h-auto rounded-lg" />
                                    </div>
                                </CarouselItem>
                            ))}
                        </CarouselContent>
                        <CarouselPrevious />
                        <CarouselNext />
                    </Carousel>
                </div>
                <div>
                    <div className="grid md:grid-cols-3 mt-7 gap-4">
                        {dataAboutMe.map((data) => (
                            <div key={data.id} className="border border-white-10 rounded-xl p-4 shadow-md shadow-slate-100 dark:bg-slate-800">
                                {data.icon}
                                <p className="my-2">{data.name}</p>
                                <p className="text-gray-400">{data.description}</p>
                            </div>
                        ))}
                    </div>
                        <p className="my-8">
                        FullStack Developer with over 2 years of experience in Angular, TypeScript and NestJS, applying modular architectures and REST/GraphQL API consumption. Computer Science Engineer graduated from Universidad San Francisco Xavier de Chuquisaca. I have worked at companies like 10Minds and Venkor, building scalable web solutions for biotechnology and financial services sectors. Passionate about applied AI, I developed a mobile app using YOLOv8 to assist visually impaired people. Outside of tech, the gym and weightlifting are key to keeping my balance.
                        </p>
                        <Link
                            href="https://wa.me/59167641208"
                            target="_blank"
                            className={buttonVariants()}
                        >
                            <Phone size={20} className="mr-2" /> Let's talk
                        </Link>
                </div>
            </div>
        </div>
     );
}

export default AboutMe;
