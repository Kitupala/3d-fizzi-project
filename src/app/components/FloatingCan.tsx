"use client";

import { Float } from "@react-three/drei";
import { SodaCan, SodaCanProps } from "@/app/components/SodaCan";
import { forwardRef, ReactNode } from "react";
import { Group } from "three";

type FloatingCanProps = {
  flavor?: SodaCanProps["flavor"];
  floatSpeed?: number;
  floatIntensity?: number;
  floatingRange?: [number, number];
  rotationIntensity?: number;
  children?: ReactNode;
};

const FloatingCan = forwardRef<Group, FloatingCanProps>(
  (
    {
      flavor = "blackCherry",
      floatSpeed = 1.5,
      floatIntensity = 1,
      floatingRange = [-0.1, 0.1],
      rotationIntensity = 1,
      children,
      ...props
    },
    ref,
  ) => {
    return (
      <group ref={ref} {...props}>
        <Float
          speed={floatSpeed} // Animation speed
          rotationIntensity={rotationIntensity} // XYZ rotation intensity
          floatIntensity={floatIntensity} // Up/down float intensity, works like a multiplier with floatingRange
          floatingRange={floatingRange} // Range of y-axis values the object will float within
        >
          {children}
          <SodaCan flavor={flavor} />
        </Float>
      </group>
    );
  },
);

FloatingCan.displayName = "FloatingCan";

export default FloatingCan;
