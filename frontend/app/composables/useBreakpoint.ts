import { useBreakpoints } from "@vueuse/core";

import { BreakpointMap } from "~/types/breakpoint-map";

const breakpoints = useBreakpoints({
  sm: BreakpointMap.SMALL,
  md: BreakpointMap.MEDIUM,
  lg: BreakpointMap.LARGE,
  xl: BreakpointMap.XL,
  "2xl": BreakpointMap.XXL,
  xxl: BreakpointMap.XXL,
  "3xl": BreakpointMap.XXXL,
  xxxl: BreakpointMap.XXXL,
});

export default function useBreakpoint(
  breakpointName: MaybeRefOrGetter<
    "sm" | "md" | "lg" | "xl" | "2xl" | "xxl" | "3xl" | "xxxl"
  >
): Ref<boolean> {
  // Use Vite/Nuxt SSR detection
  if (import.meta.server) {
    // Default: treat SSR as "desktop"
    return ref(true); // or false for mobile, but be consistent!
  }
  // On client, use VueUse breakpoints
  return breakpoints.greaterOrEqual(breakpointName);
}
