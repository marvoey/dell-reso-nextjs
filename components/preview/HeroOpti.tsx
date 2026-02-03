import React from "react";
import AnimatedText from "../common/AnimatedText";

interface HeroButton {
  href: string;
  text: string;
  secondaryText?: string;
  variant?: "primary" | "border";
}

interface HeroOptiProps {
  subtitle?: string;
  mainHeading?: string;
  buttons?: HeroButton[];
  features?: string[];
}

const DEFAULT_PROPS: Required<HeroOptiProps> = {
  subtitle: "Resonance — One/Multi Page Multipurpose Nextjs Template",
  mainHeading: "Create your beautiful website with Resonance.",
  buttons: [
    {
      href: "#multi-page",
      text: "Multi Page",
      secondaryText: "Demos",
      variant: "primary",
    },
    {
      href: "#one-page",
      text: "One Page",
      secondaryText: "Demos",
      variant: "primary",
    },
    {
      href: "#intro-sections",
      text: "Intro Sections",
      variant: "border",
    },
  ],
  features: ["10 Design Concepts", "Accessibility", "Light & Dark Versions"],
};

export default function Hero({
  subtitle = DEFAULT_PROPS.subtitle,
  mainHeading = DEFAULT_PROPS.mainHeading,
  buttons = DEFAULT_PROPS.buttons,
  features = DEFAULT_PROPS.features,
}: HeroOptiProps = {}) {
  // Validate and sanitize props
  const validSubtitle = subtitle?.trim() || DEFAULT_PROPS.subtitle;

  const validMainHeading = mainHeading?.trim() || DEFAULT_PROPS.mainHeading;
  
  const validButtons = Array.isArray(buttons) && buttons.length > 0
    ? buttons.filter(btn => btn.href && btn.text)
    : DEFAULT_PROPS.buttons;
  const validFeatures = Array.isArray(features) && features.length > 0
    ? features.filter(f => f?.trim())
    : DEFAULT_PROPS.features;
  return (
    <div className="container min-height-100vh d-flex align-items-center pt-100 pb-100 pt-sm-120 pb-sm-120">
      {/* Home Section Content */}
      <div className="home-content pb-40">
        <div className="row">
          {/* Home Section Text */}
          <div className="col-md-10 offset-md-1">
            <h2
              className="hs-title-11 mb-20 wow fadeInUp"
              data-wow-duration="1.2s"
            >
              {validSubtitle}
            </h2>
            <h1 className="hs-title-12 mb-40 mb-sm-30">
              <span className="wow charsAnimIn" data-splitting="chars">
                <AnimatedText text={validMainHeading.replace(/<[^>]*>/g, '')} />
              </span>
            </h1>
            <div
              className="local-scroll row wow fadeInUp"
              data-wow-delay="0.6s"
              data-wow-duration="1.2s"
            >
              <div className="col-10 offset-1 col-xl-8 offset-xl-2 mb-50 mb-sm-40">
                <div className="row g-2">
                  {validButtons.map((button, index) => (
                    <div
                      key={index}
                      className="col-sm-8 offset-sm-2 col-md-4 offset-md-0"
                    >
                      <a
                        href={button.href}
                        className={`btn btn-mod ${
                          button.variant === "border" ? "btn-border" : ""
                        } btn-medium btn-round btn-full`}
                        data-btn-animate="y"
                      >
                        {button.text}
                        {button.secondaryText && (
                          <>
                            {" "}
                            <span className="d-none d-lg-inline">
                              {button.secondaryText}
                            </span>
                          </>
                        )}
                      </a>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            {/* Feature List */}
            <div
              className="mt-n10 wow fadeInUp"
              data-wow-delay="0.75s"
              data-wow-duration="1.2s"
            >
              {validFeatures.map((feature, index) => (
                <div key={index} className="d-inline-flex mt-10 mx-3">
                  <div className="features-list-icon">
                    <i className="mi-check" />
                  </div>
                  <div className="features-list-text">{feature}</div>
                </div>
              ))}
            </div>
            {/* End Feature List */}
          </div>
          {/* End Home Section Text */}
        </div>
      </div>
      {/* End Home Section Content */}
    </div>
  );
}
