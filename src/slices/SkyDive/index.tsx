"use client";

import { Bounded } from "@/app/components/Bounded";
import { Content } from "@prismicio/client";
import { SliceComponentProps } from "@prismicio/react";
import Scene from "./Scene";
import { View } from "@react-three/drei";

export type SkyDiveProps = SliceComponentProps<Content.SkyDiveSlice>;

const SkyDive = ({ slice }: SkyDiveProps): JSX.Element => {
  return (
    <Bounded
      data-slice-type={slice.slice_type}
      data-slice-variation={slice.variation}
      className="skydive h-screen"
    >
      <h2 className="sr-only">{slice.primary.sentence}</h2>
      <View className="h-screen w-screen">
        <Scene
          flavor={slice.primary.flavor}
          sentence={slice.primary.sentence}
        />
      </View>
    </Bounded>
  );
};

export default SkyDive;
