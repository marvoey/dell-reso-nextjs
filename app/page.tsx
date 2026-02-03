import ParallaxContainer from "@/components/common/ParallaxContainer";
import GraphQLDebug from "@/components/debug/GraphQLDebug";
import type { Metadata } from "next";
import { GET_BLANK_EXPERIENCE_BY_URL } from "@/src/queries/GetBlankExperienceByUrl";
import type { GetBlankExperienceByUrlQuery } from "@/src/codegen/graphql/graphql";
import { optimizelyClient, basicAuthClient } from "@/src/lib/graphql-client";
import { headers } from "next/headers";
import validateResult from "@/src/lib/validateResult";
import Experience from "@/components/pages/Experience";

export const metadata: Metadata = {
  title:
    "Preview Page || Resonance &mdash; One & Multi Page React Nextjs Creative Template",
  description:
    "Resonance &mdash; One & Multi Page React Nextjs Creative Template",
};

export default async function Home() {
  // Get base domain and path
  const headersList = await headers();
  const host = headersList.get("host");
  const protocol = process.env.NODE_ENV === "production" ? "https" : "http";
  const path = "/";

  // Check if localhost and get port-based configuration
  let baseDomain: string;
  let localhostPaths: string[] = [];

  if (host.includes("localhost")) {
    // Extract port number from host (e.g., "localhost:3000" -> "3000")
    const portMatch = host.match(/:(\d+)$/);
    const port = portMatch ? portMatch[1] : "3000";

    // Get the host to use for this port (e.g., LOCALHOST_3000)
    const envKey = `LOCALHOST_${port}`;
    const envValue = process.env[envKey];
    baseDomain = envValue;

    console.log(
      "Localhost detected - Port:",
      port,
      "Base Domain:",
      baseDomain,
      "Paths:",
      localhostPaths,
    );
  } else {
    baseDomain = `${protocol}://${host}`;
  }

  // Choose which client to use
  const useBasicAuth = false;
  const client = useBasicAuth ? basicAuthClient : optimizelyClient;

  // Fetch data with proper typing
  const url = baseDomain;
  const result: GetBlankExperienceByUrlQuery = await client.query(
    GET_BLANK_EXPERIENCE_BY_URL,
    { url, path: "/en/" },
  );

  // Validate the result and throw error if invalid
  const validation = validateResult(result);
  if (!validation.valid) {
    throw new Error(
      `GraphQL result validation failed: ${validation.errors?.join(", ") || validation.error}`,
    );
  }

  return (
    <main id="main">
      {/* Home Section */}
      <ParallaxContainer
        className="home-section bg-gray-light-1 bg-light-alpha-90 parallax-5 parallax-mousemove-scene scrollSpysection"
        style={{
          backgroundImage:
            "url(/assets/images/full-width-images/section-bg-1.jpg)",
        }}
        id="home"
      >
        <Experience result={result}/>
      </ParallaxContainer>
      {/* End Home Section */}
    </main>
  );
}
