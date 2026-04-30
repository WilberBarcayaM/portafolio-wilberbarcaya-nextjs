import Link from "next/link";
import Image from "next/image";

import { Mail, Paperclip } from "lucide-react";

import { buttonVariants } from "./ui/button";

import Container from "./shared/container";

const Introduction = () => {
    return (
        <Container>
            <div className="text-center" id="home">
                <h3 className="text-xl mb-3">Hello, I´m</h3>
                <h2 className="text-4xl font-bold mb-3">Wilber Barcaya 🧑🏻‍💻</h2>
                <h2 className="text-2xl text-gray-400">Desarrollador FullStack</h2>
                <div className="flex items-center">
                    <div className="flex flex-col md:flex-row gap-4 justify-between mt-10 mx-auto">
                        <Link className={buttonVariants()} href="#contact">
                            <Mail className="mr-2" /> Contactate conmigo
                        </Link>

                        <Link
                            className={buttonVariants({ variant: "secondary" })}
                            href="/cv_wilber_barcaya_muruchi.pdf"
                            target="_blank"
                        >
                            <Paperclip className="mr-2" /> Descargar CV
                        </Link>
                    </div>
                </div>
                <div className="flex justify-center mt-6">
                    <Image src="/profile-image.jpg" alt="Profile" width={200} height={200} className="rounded-full" />
                </div>
                    
            </div>
        </Container>
    );
};

export default Introduction;
