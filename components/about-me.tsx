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
            <Title title="Sobre mi" subtitle="Conóceme"/>

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
                        Desarrollador FullStack con más de 2 años de experiencia en Angular, TypeScript y NestJS, aplicando arquitecturas modulares y consumo de APIs REST/GraphQL. Licenciado en Ingeniería en Ciencias de la Computación por la Universidad San Francisco Xavier de Chuquisaca. He trabajado en empresas como 10Minds y Venkor, desarrollando soluciones web escalables para sectores de biotecnología y servicios económicos. Apasionado por la IA aplicada, desarrollé una app móvil con YOLOv8 para asistir a personas con discapacidad visual. Fuera del ámbito tecnológico, el gimnasio y el levantamiento de pesas son fundamentales para mantener mi equilibrio.
                        </p>
                        <Link
                            href="https://wa.me/59167641208"
                            target="_blank"
                            className={buttonVariants()}
                        >
                            <Phone size={20} className="mr-2" /> Hablamos
                        </Link>
                </div>
            </div>
        </div>
     );
}

export default AboutMe;
