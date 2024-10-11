import { Content } from "@prismicio/client";
import { PrismicNextLink, PrismicNextImage } from "@prismicio/next";
import { PrismicRichText, SliceComponentProps } from "@prismicio/react";

export type HeroProps = SliceComponentProps<Content.HeroSlice>;

const Hero = ({ slice }: HeroProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      <PrismicRichText field={slice.primary.heading} />
      <PrismicRichText field={slice.primary.subheading} />
      <PrismicRichText field={slice.primary.body} />

      <PrismicNextLink field={slice.primary.button_link}>
        {slice.primary.button_text}
      </PrismicNextLink>
      <PrismicNextImage field={slice.primary.cans_image} />
      <PrismicRichText field={slice.primary.second_heading} />
      <PrismicRichText field={slice.primary.second_body} />
    </section>
  );
};

export default Hero;
