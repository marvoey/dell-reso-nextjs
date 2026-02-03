import { graphql } from "@codegen/graphql";

export const COMPOSITION_STRUCTURE_NODE_FRAGMENT = graphql(`
  fragment CompositionStructureNodeFragment on CompositionStructureNode {
    nodes {
      displayName
      nodeType
      ... on CompositionStructureNode {
        displayName
      }
      ...CompositionComponentNode
    }
  }
`);