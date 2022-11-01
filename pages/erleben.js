import Head from "next/head";
import Link from "next/link";
import Hero from "../components/Hero";
import Grid from "../components/Grid";

const Erleben = () => {
	return (
		<>
			<Head>
				<title>Kurverwaltung Göhren</title>
				<meta name="description" content="Generated by create next app" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<main>
				<Hero />

				<div className="container mx-auto my-16">
					<ul className="flex items-center gap-2 text-sm text-slate-400">
						<li>
							<Link href="/">Startseite</Link>
						</li>
						<li>
							<span>-</span>
						</li>
						<li>
							<Link href="/">Erleben</Link>
						</li>
					</ul>

					<div className="grid grid-cols-1 laptop:grid-cols-2 mt-8">
						<div className="col-span-1">
							<h1 className="text-bigger">Bezaubernde und einzigartige Naturerlebnisse</h1>
						</div>
						<div className="col-span-1">
							<p>
								Die wunderschöne und vielfältige Natur der Insel Rügen ist gleichzeitig auch ihr
								Reichtum. Hier bieten sich Ihnen viele Möglichkeiten, die Natur aktiv oder einfach nur
								genießend zu erleben, sie dabei aber nicht zu zerstören. Ganz im Gegenteil, bei uns
								können Sie die Natur erleben und gleichzeitig aktiv zum Umweltschutz beitragen! Und das
								gilt auch schon für die Kleinsten!{" "}
							</p>
						</div>
					</div>
				</div>

				<Grid />
			</main>
		</>
	);
};

export default Erleben;