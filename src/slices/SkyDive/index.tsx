import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";

/**
 * Props for `SkyDive`.
 */
export type SkyDiveProps = SliceComponentProps<Content.SkyDiveSlice>;

/**
 * Component for "SkyDive" Slices.
 */
const SkyDive = ({ slice }: SkyDiveProps): JSX.Element => {
  return (
    <section
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
    >
      Placeholder component for sky_dive (variation: {slice.variation}) Slices
    </section>
  );
};

export default SkyDive;
