import type { CodegenConfig } from "@graphql-codegen/cli";
import { loadEnvConfig } from '@next/env'

loadEnvConfig(process.cwd());

const graphGateway = process.env.OPTIMIZELY_GRAPH_GATEWAY;
const singleKey = process.env.OPTIMIZELY_GRAPH_SINGLE_KEY;

const config: CodegenConfig = {
  schema: `${graphGateway}/content/v2?auth=${singleKey}`,
  documents: ["src/**/*.ts"],
  ignoreNoDocuments: true,
  generates: {
    "./src/graphql/": {
      preset: "client",
      config: {
        documentMode: "string",
      },
    },
    "./schema.graphql": {
      plugins: ["schema-ast"],
      config: {
        includeDirectives: true,
      },
    },
  },
};

export default config;
