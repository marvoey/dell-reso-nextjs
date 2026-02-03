import { OptiGraphQLClient } from "@optimarvin/opti-graphql-client";

export type ClientType = "optimizely" | "basic";

interface CreateClientOptions {
  type: ClientType;
  baseUrl: string;
  path: string;
  headers?: Record<string, string>;
}

/**
 * Factory function to create GraphQL clients with different authentication methods
 */
export function createGraphQLClient(options: CreateClientOptions): OptiGraphQLClient {
  const { type, baseUrl, path, headers } = options;

  if (type === "optimizely") {
    // Use single-key auth for Optimizely Graph
    return new OptiGraphQLClient({
      baseUrl,
      path,
      headers,
      auth: {
        type: "single-key",
        token: process.env.OPTIMIZELY_GRAPH_SINGLE_KEY!,
      },
    });
  }

  if (type === "basic") {
    // Use Basic auth (e.g., for admin endpoints)
    return new OptiGraphQLClient({
      baseUrl,
      path,
      headers,
      auth: {
        type: "basic",
        password: process.env.OPTIMIZELY_GRAPH_SECRET!,
        username: process.env.OPTIMIZELY_GRAPH_APP_KEY!,
      },
    });
  }

  throw new Error(`Unknown client type: ${type}`);
}

/**
 * Pre-configured Optimizely Graph client
 */
export const optimizelyClient = createGraphQLClient({
  type: "optimizely",
  baseUrl: process.env.OPTIMIZELY_GRAPH_GATEWAY!,
  path: "/content/v2",
});

/**
 * Pre-configured Basic auth client (if needed)
 */
export const basicAuthClient = createGraphQLClient({
  type: "basic",
  baseUrl: process.env.OPTIMIZELY_GRAPH_GATEWAY!,
  path: "/content/v2",
});
