import { graphql } from "@/src/codegen/graphql/gql";

export const GET_BLANK_EXPERIENCE_BY_URL = graphql(`
  query GetBlankExperienceByUrl($url: String = "", $path: String = "") {
    BlankExperience(
      where: {
        _metadata: { url: { base: { eq: $url }, default: { eq: $path } } }
      }
    ) {
      total
      items {
        _metadata {
          displayName
        }
        composition {
          outline: nodes {
            displayName
            nodeType
            ...CompositionStructureNodeFragment
            ...CompositionComponentNode
          }
        }
      }
    }
  }
`);
