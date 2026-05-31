import type { NextConfig } from "next";

/**
 * Static export for GitHub Pages.
 * In CI for Pages, BASE_PATH=/<repo> so assets resolve under the project subpath.
 */
const basePath = process.env.BASE_PATH ?? "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: { unoptimized: true },
  trailingSlash: true,
};

export default nextConfig;
