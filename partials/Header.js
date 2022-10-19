import { useRef } from "react";
import gsap from "gsap";

import Image from "next/image";
import Link from "next/link";

const Header = () => {
    const navRef = useRef(null);

    function toggleNav() {
        const nav = navRef.current;
        if (!nav) return;

        const boxes = nav.querySelectorAll(".col-span-1");

        if (nav.clientHeight === 0) {
            gsap.to(nav, {
                maxHeight: nav.scrollHeight + "px",
                duration: 0.4,
                ease: "power4.out",
            });

            Array.from(boxes).forEach((item) => {
                gsap.fromTo(
                    item,
                    {
                        opacity: 0,
                        y: 20,
                    },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.4,
                        delay: 0.2,
                        ease: "power4.out",
                    }
                );
            });
        } else {
            Array.from(boxes).forEach((item) => {
                gsap.fromTo(
                    item,
                    {
                        opacity: 1,
                        y: 0,
                    },
                    {
                        opacity: 0,
                        y: 20,
                        duration: 0.4,
                        ease: "power4.out",
                    }
                );
            });
            gsap.to(nav, {
                maxHeight: "0px",
                duration: 0.4,
                delay: 0.2,
                ease: "power4.out",
            });
        }
    }

    return (
        <header className="w-full sticky top-0 self-start bg-white z-[9999]">
            <div className="mx-auto flex items-center justify-between relative px-8 py-4">
                <ul className="flex items-center justify-start flex-row gap-8">
                    <li>
                        <Link href="/">
                            <a className="py-4 block">Gastgeber</a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className="py-4 block">Service</a>
                        </Link>
                    </li>
                </ul>

                <Link href="/">
                    <a className="absolute left-1/2 -translate-x-1/2 -bottom-full z-[9999]">
                        <Image src="/logo.png" width="160" height="160" />
                    </a>
                </Link>

                <ul className="flex items-center justify-end flex-row gap-8">
                    <li>
                        <Link href="/">
                            <a className="py-4 flex items-center gap-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                                    />
                                </svg>
                                Veranstaltungen
                            </a>
                        </Link>
                    </li>
                    <li>
                        <Link href="/">
                            <a className="py-4 block">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    strokeWidth={2}
                                    stroke="currentColor"
                                    className="w-6 h-6"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                                    />
                                </svg>
                            </a>
                        </Link>
                    </li>
                    <li>
                        <span
                            className="p-4 block cursor-pointer"
                            onClick={toggleNav}
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth={2}
                                stroke="currentColor"
                                className="w-6 h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                                />
                            </svg>
                        </span>
                    </li>
                </ul>
            </div>

            <nav
                ref={navRef}
                className="absolute w-full border-b border-t border-slate-200 max-h-0 overflow-hidden bg-white"
            >
                <div className=" mx-auto grid grid-cols-3">
                    <div className="col-span-2 border-r border-slate-200">
                        <div className="grid grid-cols-2">
                            <div className="col-span-1 p-8">
                                <strong className="block mb-4 text-xl">
                                    Entdecken
                                </strong>
                                <ul className="leading-loose">
                                    <li>
                                        <Link href="/">
                                            <a>Sehenswertes</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Sehenswertes</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Sehenswertes</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Sehenswertes</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-1 p-8">
                                <strong className="block mb-4 text-xl">
                                    Entdecken
                                </strong>
                                <ul className="leading-loose">
                                    <li>
                                        <Link href="/">
                                            <a>Sehenswertes</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Sehenswertes</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Sehenswertes</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Sehenswertes</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-1 p-8">
                                <strong className="block mb-4 text-xl">
                                    Entdecken
                                </strong>
                                <ul className="leading-loose">
                                    <li>
                                        <Link href="/">
                                            <a>Sehenswertes</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Sehenswertes</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Sehenswertes</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Sehenswertes</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-span-1 p-8">
                                <strong className="block mb-4 text-xl">
                                    Entdecken
                                </strong>
                                <ul className="leading-loose">
                                    <li>
                                        <Link href="/">
                                            <a>Sehenswertes</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Sehenswertes</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Sehenswertes</a>
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/">
                                            <a>Sehenswertes</a>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-span-1 grid">
                        <div className="col-span-1 p-8 border-b border-slate-200">
                            <strong className="block text-xl mb-4">
                                Wetter
                            </strong>
                        </div>
                        <div className="col-span-1 p-8">
                            <strong className="block text-xl mb-4">
                                Webcams
                            </strong>
                            <ul className="leading-loose">
                                <li>
                                    <Link href="/">
                                        <a className="flex items-center justify-between max-w-[320px]">
                                            LiveCam Strand und Kurplatz
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                                />
                                            </svg>
                                        </a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/">
                                        <a className="flex items-center justify-between max-w-[320px]">
                                            LiveCam Panoramablick
                                            <svg
                                                xmlns="http://www.w3.org/2000/svg"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                strokeWidth={2}
                                                stroke="currentColor"
                                                className="w-6 h-6"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                                />
                                            </svg>
                                        </a>
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
