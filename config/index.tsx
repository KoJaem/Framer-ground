import { bossadizenith } from "@/public/templates";
import { Template } from "@/types";
import { StaticImageData } from "next/image";
import React from "react";

export const config = {
  isProduction: process.env.NODE_ENV === "production",
};

export const Index: Record<string, any> = {
  "github-button": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/button/github")),
  },
  "delete-button": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/button/delete")),
  },
  "sparkles-button": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/button/sparkles")),
  },
  "checkout-button": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/button/checkout")),
  },
  "second-brain-button": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/button/second-brain")),
  },
  "create-new-button": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/button/create-new")),
  },
  "vercel-navbar": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/navbar/vercel")),
  },
  "vercel-navbar-vertical": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/navbar/vercel-vertical")),
  },
  "liquid-navbar": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/navbar/liquid")),
  },
  "reveal-navbar": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/navbar/reveal")),
  },
  "one-gallery": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/gallery/one")),
  },
  "two-gallery": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/gallery/two")),
  },
  "radial-gallery": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/gallery/radial")),
  },
  "hover-gallery": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/gallery/hover")),
  },
  "booking-cards": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/cards/booking")),
  },
  "notch-cards": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/cards/notch")),
  },
  "notch-two-cards": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/cards/notch-two")),
  },
  "linear-cards": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/cards/linear")),
  },
  "hello-world-cards": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/cards/hello-world")),
  },
  "strike-cards": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/cards/strike")),
  },
  "overview-cards": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/cards/overview")),
  },
  "pill-cards": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/cards/pill")),
  },
  "birthday-cards": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/cards/birthday")),
  },
  "overview-stacked-cards": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/cards/overview-stacked")),
  },
  "experience-cards": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/cards/experience")),
  },
  "piano-cards": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/cards/piano")),
  },
  "frequency-cards": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/cards/frequency")),
  },
  "calendar-cards": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/cards/calendar")),
  },
  "call-cards": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/cards/call")),
  },
  "counter-cards": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/cards/counter")),
  },

  "one-carousel": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/carousel/one")),
  },
  "swipe-carousel": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/carousel/swipe")),
  },
  "perspective-carousel": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/carousel/perspective")),
  },
  "iMessage-inputs": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/inputs/iMessage")),
  },
  "password-strength-inputs": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/inputs/password-strength")),
  },
  "password-strength-zod-inputs": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/inputs/password-strength-zod")),
  },
  "validity-inputs": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/inputs/validity")),
  },
  "google-inputs": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/inputs/google")),
  },
  "verifier-inputs": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/inputs/verifier")),
  },
  "verifier-with-zod-inputs": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/inputs/verifier-with-zod")),
  },
  "hamburger-menu": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/menu/hamburger")),
  },
  "circular-menu": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/menu/circular")),
  },
  "mode-toggle-menu": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/menu/mode-toggle")),
  },
  "marquee-demo": {
    registryDependencies: undefined,
    component: React.lazy(
      () => import("@/fg/without-framer-motion/marquee-demo")
    ),
  },
  "grid-to-flex-layouts": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/layouts/grid-to-flex")),
  },
  "scroll-count-layouts": {
    registryDependencies: undefined,
    component: React.lazy(() => import("@/fg/layouts/scroll-count")),
  },
};

export const Templates: Template[] = [
  {
    category: "portfolio",
    description: "A simple developer portfolio",
    title: "Developer portfolio",
    slug: "bossadi-zenith",
    preview: bossadizenith,
    url: "https://bossadizenith.me",
    label: "new",
    stack: ["React", "Nextjs", "Typescript", "Framer motion", "Eslint"],
  },
];
