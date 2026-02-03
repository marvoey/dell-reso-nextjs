import { GetBlankExperienceByUrlQuery } from "@/src/codegen/graphql/graphql";
import Hero from "../preview/HeroOpti";
import { getFragmentData, FragmentType } from "@/src/codegen/graphql";
import { COMPOSITION_COMPONENT_NODE } from "@queries/fragments/CompositionComponentNode";

interface ExperienceProps {
  result: GetBlankExperienceByUrlQuery;
}

export default function Experience({ result }: ExperienceProps) {
  const firstItem = result.BlankExperience.items[0]!;
  const nodes = firstItem.composition!.outline!;

  return (
    <section className="page-section bg-dark text-white">
      <div className="container">
        {nodes.map((node, index) => {
          if (!node) return null;
          // Narrow the type to CompositionComponentNode
          if (node.__typename === "CompositionComponentNode") {
            const data = getFragmentData(COMPOSITION_COMPONENT_NODE, node);

            // Check if the component is a TestimonialCard
            if (data.component?.__typename === "TestimonialCard") {
              return (
                <Hero key={index} mainHeading={data.component.quoteText.html} />
              );
            }

          }
        })}
      </div>
    </section>
  );
}
