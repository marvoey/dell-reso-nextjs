/* eslint-disable */
import * as types from './graphql';



/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\n  query GetBlankExperienceByUrl($url: String = \"\", $path: String = \"\") {\n    BlankExperience(\n      where: {\n        _metadata: { url: { base: { eq: $url }, default: { eq: $path } } }\n      }\n    ) {\n      total\n      items {\n        _metadata {\n          displayName\n        }\n        composition {\n          outline: nodes {\n            displayName\n            nodeType\n            ...CompositionStructureNodeFragment\n            ...CompositionComponentNode\n          }\n        }\n      }\n    }\n  }\n": typeof types.GetBlankExperienceByUrlDocument,
    "\n  fragment CompositionComponentNode on CompositionComponentNode {\n    __typename\n    type\n    nodeType\n    component {\n      __typename\n      _itemMetadata {\n        displayName\n        type\n      }\n      ... on TestimonialCard {\n        __typename\n        quoteText {\n          html\n        }\n      }\n    }\n  }\n": typeof types.CompositionComponentNodeFragmentDoc,
    "\n  fragment CompositionStructureNodeFragment on CompositionStructureNode {\n    nodes {\n      displayName\n      nodeType\n      ... on CompositionStructureNode {\n        displayName\n      }\n      ...CompositionComponentNode\n    }\n  }\n": typeof types.CompositionStructureNodeFragmentFragmentDoc,
};
const documents: Documents = {
    "\n  query GetBlankExperienceByUrl($url: String = \"\", $path: String = \"\") {\n    BlankExperience(\n      where: {\n        _metadata: { url: { base: { eq: $url }, default: { eq: $path } } }\n      }\n    ) {\n      total\n      items {\n        _metadata {\n          displayName\n        }\n        composition {\n          outline: nodes {\n            displayName\n            nodeType\n            ...CompositionStructureNodeFragment\n            ...CompositionComponentNode\n          }\n        }\n      }\n    }\n  }\n": types.GetBlankExperienceByUrlDocument,
    "\n  fragment CompositionComponentNode on CompositionComponentNode {\n    __typename\n    type\n    nodeType\n    component {\n      __typename\n      _itemMetadata {\n        displayName\n        type\n      }\n      ... on TestimonialCard {\n        __typename\n        quoteText {\n          html\n        }\n      }\n    }\n  }\n": types.CompositionComponentNodeFragmentDoc,
    "\n  fragment CompositionStructureNodeFragment on CompositionStructureNode {\n    nodes {\n      displayName\n      nodeType\n      ... on CompositionStructureNode {\n        displayName\n      }\n      ...CompositionComponentNode\n    }\n  }\n": types.CompositionStructureNodeFragmentFragmentDoc,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetBlankExperienceByUrl($url: String = \"\", $path: String = \"\") {\n    BlankExperience(\n      where: {\n        _metadata: { url: { base: { eq: $url }, default: { eq: $path } } }\n      }\n    ) {\n      total\n      items {\n        _metadata {\n          displayName\n        }\n        composition {\n          outline: nodes {\n            displayName\n            nodeType\n            ...CompositionStructureNodeFragment\n            ...CompositionComponentNode\n          }\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').GetBlankExperienceByUrlDocument;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CompositionComponentNode on CompositionComponentNode {\n    __typename\n    type\n    nodeType\n    component {\n      __typename\n      _itemMetadata {\n        displayName\n        type\n      }\n      ... on TestimonialCard {\n        __typename\n        quoteText {\n          html\n        }\n      }\n    }\n  }\n"): typeof import('./graphql').CompositionComponentNodeFragmentDoc;
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  fragment CompositionStructureNodeFragment on CompositionStructureNode {\n    nodes {\n      displayName\n      nodeType\n      ... on CompositionStructureNode {\n        displayName\n      }\n      ...CompositionComponentNode\n    }\n  }\n"): typeof import('./graphql').CompositionStructureNodeFragmentFragmentDoc;


export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}
