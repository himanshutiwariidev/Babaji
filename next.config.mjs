/** @type {import('next').NextConfig} */
const nextConfig = {
  // Generate static HTML files in the "out" folder
  output: 'export',

  // Add trailing slash to URLs
  trailingSlash: true,

  // Allow images to work with static export
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
