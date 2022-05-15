/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        loader: "imgix",
        path: "/"
    },
    reactStrictMode: true,
}

module.exports = nextConfig