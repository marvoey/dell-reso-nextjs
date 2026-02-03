import type { GetBlankExperienceByUrlQuery } from "@/src/codegen/graphql/graphql";
import validateResult from "./validateResult";

export interface HeroButton {
  href: string;
  text: string;
  secondaryText?: string;
  variant?: "primary" | "border";
}

export interface HeroProps {
  subtitle?: string;
  mainHeading?: string;
  buttons?: HeroButton[];
  features?: string[];
}

/**
 * Transform GraphQL result into Hero component props
 *
 * Validates the result structure and extracts data from composition nodes
 * to populate Hero component props (subtitle, mainHeading, buttons, features).
 *
 * @param result - The GraphQL query result from GetBlankExperienceByUrl
 * @returns Hero component props object
 * @throws {Error} If the result structure is invalid
 */
export function transformResultToHeroProps(result: GetBlankExperienceByUrlQuery): HeroProps {
  // Validate result structure
  const validation = validateResult(result);

  if (!validation.valid) {
    // Log all validation errors for debugging
    console.error("GraphQL result validation failed:", validation.errors);
    // Throw with primary error message
    throw new Error(`Invalid result structure: ${validation.error}`);
  }

  // Type assertions are safe after validation passes
  const firstItem = result.BlankExperience.items[0]!;
  const nodes = firstItem.composition!.nodes!;

  // Initialize props object
  const heroProps: HeroProps = {};

  // Loop through nodes and process each one
  nodes.forEach((node, index) => {
    if (!node) {
      console.warn(`Node at index ${index} is null or undefined, skipping`);
      return;
    }

    // Process node based on nodeType
    switch (node.nodeType) {
      case "Section":
        processSectionNode(node, heroProps, index);
        break;

      case "row":
        processRowNode(node, heroProps, index);
        break;

      case "col":
        processColNode(node, heroProps, index);
        break;

      case "component":
        processComponentNode(node, heroProps, index);
        break;

      default:
        console.warn(`Unknown nodeType "${node.nodeType}" at index ${index}, skipping`);
        break;
    }
  });

  return heroProps;
}

/**
 * Process Section node type
 * @param node - The composition node
 * @param heroProps - The Hero props object to populate
 * @param index - The node index for logging
 */
function processSectionNode(node: any, heroProps: HeroProps, index: number): void {
  console.log(`Processing Section node at index ${index}:`, {
    displayName: node.displayName,
    typename: node.__typename,
  });

  // @TODO: Extract Section-specific data and populate heroProps
  // Example: heroProps.subtitle = node.sectionTitle;
}

/**
 * Process row node type
 * @param node - The composition node
 * @param heroProps - The Hero props object to populate
 * @param index - The node index for logging
 */
function processRowNode(node: any, heroProps: HeroProps, index: number): void {
  console.log(`Processing row node at index ${index}:`, {
    displayName: node.displayName,
    typename: node.__typename,
  });

  // @TODO: Extract row-specific data and populate heroProps
  // Example: Process child columns or nested content
}

/**
 * Process col node type
 * @param node - The composition node
 * @param heroProps - The Hero props object to populate
 * @param index - The node index for logging
 */
function processColNode(node: any, heroProps: HeroProps, index: number): void {
  console.log(`Processing col node at index ${index}:`, {
    displayName: node.displayName,
    typename: node.__typename,
  });

  // @TODO: Extract col-specific data and populate heroProps
  // Example: Process column content or layout information
}

/**
 * Process component node type
 * @param node - The composition node
 * @param heroProps - The Hero props object to populate
 * @param index - The node index for logging
 */
function processComponentNode(node: any, heroProps: HeroProps, index: number): void {
  console.log(`Processing component node at index ${index}:`, {
    displayName: node.displayName,
    typename: node.__typename,
  });

  // @TODO: Extract component-specific data and populate heroProps
  // Example: Identify component type and extract relevant data
  // if (node.displayName === 'HeroComponent') {
  //   heroProps.mainHeading = node.data?.heading;
  //   heroProps.subtitle = node.data?.subtitle;
  // }
}
