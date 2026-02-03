import type { GetBlankExperiencesQuery } from "@/src/graphql/graphql";

interface GraphQLDebugProps {
  result: GetBlankExperiencesQuery;
  authType: string;
  queryName?: string;
  baseDomain?: string;
}

export default function GraphQLDebug({
  result,
  authType,
  queryName = "GetBlankExperiences",
  baseDomain = "",
}: GraphQLDebugProps) {
  return (
    <section className="page-section bg-dark text-white">
      <div className="container">
        <h2>GraphQL Debug Output</h2>
        <div className="mb-3">
          <strong>Auth Type:</strong> {authType}
        </div>
        <div className="mb-3">
          <strong>Host:</strong> {baseDomain}
        </div>
        <div className="mb-3">
          <strong>Query:</strong> {queryName}
        </div>
        <div className="mb-3">
          <strong>Items Count:</strong> {result.BlankExperience?.items?.length ?? 0}
        </div>
        <details>
          <summary style={{ cursor: "pointer" }}>
            Click to view full result
          </summary>
          <pre
            style={{
              background: "#1e1e1e",
              padding: "1rem",
              borderRadius: "4px",
              overflow: "auto",
              maxHeight: "400px",
            }}
          >
            {JSON.stringify(result, null, 2)}
          </pre>
        </details>
        {result.BlankExperience?.items && result.BlankExperience.items.length > 0 && (
          <div className="mt-4">
            <h3>URLs:</h3>
            <ul>
              {result.BlankExperience.items.map((item, index) => (
                <li key={index}>
                  {item?._metadata?.url?.default ?? "No URL"}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}
