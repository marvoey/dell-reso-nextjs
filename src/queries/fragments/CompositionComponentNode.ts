import { graphql } from "@codegen/graphql";

export const COMPOSITION_COMPONENT_NODE = graphql(`
  fragment CompositionComponentNode on CompositionComponentNode {
    __typename
    type
    nodeType
    component {
      __typename
      _itemMetadata {
        displayName
        type
      }
      ... on TestimonialCard {
        __typename
        quoteText {
          html
        }
      }
    }
  }
`);
