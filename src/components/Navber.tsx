import React from "react";
import {
    IconArticle,
    IconBrandGithub,
    IconBrandLinkedin,
    IconBrandX,
    IconBriefcase2,
    IconExchange,
    IconHome,
    IconMail,
    IconMessage2,
    IconNewSection,
    IconTerminal2,
} from "@tabler/icons-react";
import Image from "next/image";
import { FloatingDock } from "./ui/floating-dock";

export function Navber() {
    const links = [
        {
            title: "Home",
            icon: (
                <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/",
        },

        {
            title: "About",
            icon: (
                <IconMessage2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/about",
        },
        {
            title: "Projects",
            icon: (
                <IconBriefcase2 className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/projects",
        },
        // {
        //     title: "Aceternity UI",
        //     icon: (
        //         <Image
        //             src="https://assets.aceternity.com/logo-dark.png"
        //             width={20}
        //             height={20}
        //             alt="Aceternity Logo"
        //         />
        //     ),
        //     href: "#",
        // },
        {
            title: "Articles",
            icon: (
                <IconArticle className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/blog",
        },

        {
            title: "Contact",
            icon: (
                <IconMail className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "/contact",
        },
        {
            title: "GitHub",
            icon: (
                <IconBrandGithub className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://github.com/okHassan",
        },
        {
            title: "LinkedIn",
            icon: (
                <IconBrandLinkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />
            ),
            href: "https://www.linkedin.com/in/coderhassan/",
        },
    ];
    return (
        <div className="md:w-full md:flex md:justify-center absolute right-10 bottom-24 md:bottom-10">
            <FloatingDock
                mobileClassName="translate-y-20" // only for demo, remove for production
                items={links}
            />
        </div>
    );
}
