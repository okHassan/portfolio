'use client'
import { Badge } from "@/components/Badge";
import { Container } from "@/components/Container";
import { Heading } from "@/components/Heading";
import { Highlight } from "@/components/Highlight";
import { Paragraph } from "@/components/Paragraph";
import { Products } from "@/components/Products";
import { TechStack } from "@/components/TechStack";
import Image from "next/image";
import Banner from "public/cover.jpg"

export default function Home() {
    return (
        <Container>

            <div className="mb-10">
                <Image
                    src={Banner}
                    alt="John Doe"
                    className="rounded-2xl"
                />
                <div className="">
                    <Image
                        src='/yoo.png'
                        alt="John Doe"
                        className="rounded-full -mt-16 mx-auto"
                        width={200}
                        height={200}
                    />
                </div>
            </div>

            <div className="flex items-center gap-3"> <Heading className="font-black">Hello there! I&apos;m Hassan  </Heading><span className="text-4xl">👋</span></div>
            <Paragraph className="max-w-xl mt-4">
                As a Full Stack Engineer, I have successfully taken multiple products from {" "}
                <Highlight>0 to 1.</Highlight> I lead teams effectively, ensuring an environment where people can do their best work.<br/><br/> Currently, I work mostly with TypeScript, React, Node.js, and Others Technologies. I have over 3 years of experience in working with different clients.
            </Paragraph>
            <div className="mt-5">
            <Badge href="https://docs.google.com/document/d/1bksxoTpKARPIpjYf55QbyNWb0k_ZePIfUIQ0h2bTV1E/edit?usp=sharing" text="Read Resume" />
            </div>
            <Heading
                as="h2"
                className="font-black text-lg md:text-lg lg:text-lg mt-20 mb-4"
            >
                What I&apos;ve been working on
            </Heading>
            <Products />
            <TechStack />
        </Container>
    );
}
