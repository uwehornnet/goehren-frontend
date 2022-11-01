/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	swcMinify: true,
	eslint: {
		dirs: ["pages", "components", "partials"],
	},
};

module.exports = nextConfig
