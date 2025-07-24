---
title: Vite
titleTemplate: Next Generation Frontend Tooling
pageClass: landing dark

layout: home
aside: false
editLink: false
markdownStyles: false
---

<script setup>
import Hero from '.vitepress/theme/components/landing/1. hero-section/HeroSection.vue'
import FeatureSection from './.vitepress/theme/components/landing/2. feature-section/FeatureSection.vue'

import GetStartedSection from '.vitepress/theme/components/landing/6. get-started-section/GetStartedSection.vue'
import FeatureInstantServerStart from './.vitepress/theme/components/landing/2. feature-section/FeatureInstantServerStart.vue'
import FeatureHMR from './.vitepress/theme/components/landing/2. feature-section/FeatureHMR.vue'
import FeatureRichFeatures from './.vitepress/theme/components/landing/2. feature-section/FeatureRichFeatures.vue'
import FeatureOptimizedBuild from './.vitepress/theme/components/landing/2. feature-section/FeatureOptimizedBuild.vue'
import FeatureFlexiblePlugins from './.vitepress/theme/components/landing/2. feature-section/FeatureFlexiblePlugins.vue'
</script>

<div class="VPHome">
  <Hero/>
  <FeatureSection title="Redefining Business" description="On Chain : On Time" type="blue">
    <FeatureInstantServerStart />
    <FeatureHMR />
    <FeatureRichFeatures />
    <FeatureOptimizedBuild />
  </FeatureSection>
  <FeatureSection title="R A M I C O I N" type="pink" class="feature-section--flip">
  </FeatureSection>
  <GetStartedSection />
</div>
