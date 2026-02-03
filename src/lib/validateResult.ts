import { GetBlankExperienceByUrlQuery } from "../codegen/graphql/graphql";

/**
 * Validation result for GraphQL query structure
 */
interface ValidationResult {
  valid: boolean;
  error?: string;
  errors?: string[];
}

/**
 * Validates the GraphQL query result structure
 *
 * Checks that result contains the expected data structure:
 * - result.BlankExperience.items[0].composition.nodes
 *
 * This function returns a validation result rather than throwing errors,
 * following the principle that validation failures are expected scenarios
 * that should be handled gracefully by the caller.
 *
 * Benefits of returning validation results:
 * - Caller controls error handling strategy (throw, log, fallback, etc.)
 * - Can collect and report all validation errors at once
 * - More testable and predictable
 * - Separates validation logic from error handling
 *
 * @param result - The GraphQL query result to validate
 * @returns ValidationResult with valid flag and any error messages
 */
export function validateResult(
  result: GetBlankExperienceByUrlQuery,
): ValidationResult {
  const errors: string[] = [];

  // Collect all validation errors
  if (!result) {
    errors.push("Result is null or undefined");
  } else {
    if (!result.BlankExperience) {
      errors.push("BlankExperience is missing from result");
    } else {
      if (
        !result.BlankExperience.items ||
        !Array.isArray(result.BlankExperience.items)
      ) {
        errors.push("BlankExperience.items is missing or not an array");
      } else if (result.BlankExperience.items.length === 0) {
        errors.push(
          "BlankExperience.items array is empty - expected at least one item",
        );
      } else {
        const firstItem = result.BlankExperience.items[0];
        if (!firstItem) {
          errors.push(
            "First item in BlankExperience.items is null or undefined",
          );
        } else {
          if (!firstItem.composition) {
            errors.push("composition property is missing from the first item");
          } else if (
            !firstItem.composition.outline ||
            !Array.isArray(firstItem.composition.outline)
          ) {
            errors.push("composition.outline is missing or not an array");
          }
        }
      }
    }
  }

  // Return validation result
  if (errors.length === 0) {
    return { valid: true };
  }

  return {
    valid: false,
    error: errors[0], // Primary error for simple error handling
    errors, // All errors for detailed logging/debugging
  };
}

export default validateResult;