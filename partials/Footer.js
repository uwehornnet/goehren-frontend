import Link from "next/link";

const Footer = () => {
    return (
        <footer className="w-full">
            <div className="container mx-auto py-16 border-b border-slate-200">
                <strong className="text-2xl">
                    Kurverwaltung <br /> Ostseebad Göhren
                </strong>

                <div className="grid grid-cols-4 gap-8 mt-8">
                    <div className="col-span-1">
                        <p className="mb-4">
                            Poststraße 9 <br />
                            18586 Ostseebad Göhren
                        </p>
                        <p>
                            Telefon: 038 308 - 667 90 <br />
                            Fax: 038 308 - 667 932 <br />
                            E-Mail: kv(at)goehren-ruegen.de
                        </p>
                    </div>
                    <div className="col-span-1">
                        <strong className="block mb-4">Öffnungszeiten</strong>
                        <p className="flex items-center justify-start">
                            <span className="block w-[100px]">Mo-Fr:</span>
                            <span>09:00 - 17:00 Uhr</span>
                        </p>
                        <p className="flex items-center justify-start">
                            <span className="block w-[100px]">Sa:</span>
                            <span>10:00 - 15:00 Uhr</span>
                        </p>
                        <p className="flex items-center justify-start">
                            <span className="block w-[100px]">So:</span>
                            <span>geschlossen</span>
                        </p>
                    </div>
                    <div className="col-span-1">
                        <strong className="block mb-4">Folgt uns auf</strong>
                    </div>
                    <div className="col-span-1">
                        <strong className="block mb-4">Newsletter</strong>
                        <Link href="">
                            <a className="flex items-center justify-center bg-red-500 text-white py-4 px-6 gap-4 rounded-md">
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
                                        d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                                    />
                                </svg>
                                <span>Newsletter abonnieren</span>
                            </a>
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto py-16 border-b border-slate-200 grid grid-cols-4 gap-8">
                <div className="col-span-2">
                    <strong className="block mb-4">Navigation</strong>
                    <ul className="leading-loose grid grid-cols-2">
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
                <div className="col-span-1">
                    <strong className="block mb-4">
                        Rechtliche Informationen
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
                <div className="col-span-1">
                    <strong className="block mb-4">Kontakt</strong>
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

            <div className="container mx-auto flex items-center justify-between py-4">
                <p>© {new Date().getFullYear()} Ostseebad Göhren</p>
                <div className="flex items-center gap-4">
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
                            d="M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418"
                        />
                    </svg>

                    <select className="bg-white">
                        <option value="de">Deutsch</option>
                        <option value="en">English</option>
                    </select>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
