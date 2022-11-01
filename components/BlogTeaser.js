import Link from "next/link";
import Post from "./Post";

const BlogTeaser = () => {
	return (
		<div className="w-full bg-[#F2F6F9] py-16">
			<div className="container mx-auto">
				<div className="flex items-center justify-between mb-16">
					<h2 className="text-medium">
						Unsere Geschichten <br /> und Neuigkeiten
					</h2>

					<Link href="/blog">
						<a className="flex items-center gap-2 group mt-4 font-medium">
							<span>mehr erfahren</span>
							<span>
								<svg
									width="20"
									height="10"
									viewBox="0 0 20 10"
									fill="none"
									xmlns="http://www.w3.org/2000/svg"
									className="block group-hover:translate-x-4"
								>
									<path
										d="M19 5H1M15 1L19 5L15 1ZM19 5L15 9L19 5Z"
										stroke="black"
										strokeWidth="2"
										strokeLinecap="round"
										strokeLinejoin="round"
									/>
								</svg>
							</span>
						</a>
					</Link>
				</div>

				<div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 gap-4">
					<Post />
					<Post />
					<Post />
				</div>
			</div>
		</div>
	);
};
export default BlogTeaser;
