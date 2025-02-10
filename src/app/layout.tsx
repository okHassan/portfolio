import { Sidebar } from "@/components/Sidebar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { twMerge } from "tailwind-merge";
import { Footer } from "@/components/Footer";
import { Navber } from "@/components/Navber";
import { Toaster } from "react-hot-toast";

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
    title: "Hassan Ahmed - Portfolio",
    description:
        "Hassan is a developer, writer and speaker. He is a digital nomad and travels around the world while working remotely.",
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body
                className={twMerge(
                    inter.className,
                    "flex antialiased h-screen overflow-hidden bg-gray-100"
                )}
            >
                <div className="pl-2 py-2 bg-gray-100 flex-1 overflow-y-auto">
                    <div className="flex-1 bg-white min-h-screen rounded-xl border border-transparent lg:border-neutral-200 overflow-y-auto">
                        <Navber />
                        {children}
                        <Toaster
                            position="top-center"
                            reverseOrder={false}
                        />
                        <Footer />
                    </div>
                </div>
            </body>
        </html>
    );
}
