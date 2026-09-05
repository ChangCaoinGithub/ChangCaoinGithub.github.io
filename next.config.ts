import type { NextConfig } from "next";

const isGitHubPages = process.env.GITHUB_PAGES === "true";
const [repositoryOwner = "", repositoryName = ""] = (process.env.GITHUB_REPOSITORY ?? "").split("/");
const isUserPage = repositoryName.toLowerCase() === `${repositoryOwner.toLowerCase()}.github.io`;
const basePath = isGitHubPages && !isUserPage ? `/${repositoryName || "changcao.github.io"}` : "";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  basePath,
  assetPrefix: basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
};

export default nextConfig;
