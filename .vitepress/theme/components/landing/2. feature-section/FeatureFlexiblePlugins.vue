<script setup lang="ts">
import { useSlideIn } from '../../../composables/useSlideIn'
import { useCardAnimation } from '../../../composables/useCardAnimation'

/**
 * Slide the card in when the page loads
 */
useSlideIn('#flexible-plugin-system')

/**
 * Start the animation when the card is hovered
 */
const { isCardActive, startAnimation } = useCardAnimation(
  '#flexible-plugin-system',
  undefined,
  {
    once: true,
  },
)
</script>

<template>
  <div class="feature-card" id="flexible-plugin-system" @mouseover.stop.prevent="startAnimation">
    <div class="feature__visualization" :class="{ active: isCardActive }">
      <div class="diagram">
        <!-- Diagram -->

        <svg width="200" height="200" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <circle cx="16" cy="16" r="16" fill="#26A17B" />
          <path fill="#FFF"
            d="M17.922 17.383v-.002c-.11.008-.677.042-1.942.042-1.01 0-1.721-.03-1.971-.042v.003c-3.888-.171-6.79-.848-6.79-1.658 0-.809 2.902-1.486 6.79-1.66v2.644c.254.018.982.061 1.988.061 1.207 0 1.812-.05 1.925-.06v-2.643c3.88.173 6.775.85 6.775 1.658 0 .81-2.895 1.485-6.775 1.657m0-3.59v-2.366h5.414V7.819H8.595v3.608h5.414v2.365c-4.4.202-7.709 1.074-7.709 2.118 0 1.044 3.309 1.915 7.709 2.118v7.582h3.913v-7.584c4.393-.202 7.694-1.073 7.694-2.116 0-1.043-3.301-1.914-7.694-2.117" />
        </svg>



        <!-- Blue Glow -->
        <div class="blue-glow" />

        <!-- Pink Glow -->
        <div class="pink-glow" />
      </div>
    </div>
    <div class="feature__meta">
      <div class="meta__title">Flexible Entry & Exit</div>
      <div class="meta__description">
        Buy and Sell : Anywhere Anytime
      </div>
    </div>
  </div>
</template>

<style scoped>
.feature-card {
  @media (min-width: 768px) {
    transform: translate3d(-60px, 0, 0);
  }

  .feature__meta {
    max-width: 680px;
  }

  /* Extend height on smaller devices, to make room for text */
  @media (max-width: 330px) {
    height: 400px;
  }
}

.feature__visualization {
  .diagram {
    width: fit-content;
    position: absolute;
    left: 50%;
    transform-origin: center 40%;
    transform: translate3d(-50%, 0, 0) scale(0.5);
    margin-top: 0;

    @media (min-width: 480px) {
      transform-origin: center center;
      transform: translate3d(-50%, 0, 0) scale(0.7);
    }

    @media (min-width: 630px) {
      transform: translate3d(-50%, 0, 0) scale(1);
      margin-top: 20px;
    }

    @media (min-width: 768px) {
      transform: translate3d(-50%, 0, 0) scale(0.6);
      margin-top: 0;
    }

    @media (min-width: 1000px) {
      transform: translate3d(-50%, 0, 0) scale(0.8);
      margin-top: 20px;
    }

    @media (min-width: 1200px) {
      transform: translate3d(-50%, 0, 0) scale(1);
    }
  }

  .blue-chip__cube,
  .pink-chip__cube {
    transition:
      transform 0.5s ease-in-out,
      filter 0.05s ease 0.45s;
    will-change: filter, transform;

    @media (min-width: 768px) {
      transform: translate3d(0, -60px, 0);
    }
  }

  .blue-chip__cube {
    filter: grayscale(1) brightness(0.15) drop-shadow(0 0 0rem color-mix(in srgb, #40cffd 0%, transparent));
  }

  .pink-chip__cube {
    filter: grayscale(1) brightness(0.15) drop-shadow(0 0 0rem color-mix(in srgb, #bc33fc 0%, transparent));
  }

  .vite-chip__logo {
    transition: all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.2);
    will-change: filter, transform;
    filter: grayscale(1) brightness(0.4) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.1));
    transform: translate3d(0, 0, 0);
  }

  .vite-chip__v {
    filter: drop-shadow(0 0 0rem color-mix(in srgb, #93bfff 0%, transparent));
    will-change: filter;
    transition-delay: 0.8s;
  }

  .blue-chip__connection {
    clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
    will-change: clip-path;
    filter: drop-shadow(0 0 0.2rem color-mix(in srgb, #40cffd 50%, transparent));
    transition: all 0.6s ease-in-out;
  }

  .pink-chip__connection {
    clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    will-change: clip-path;
    filter: drop-shadow(0 0 0.2rem color-mix(in srgb, #bc33fc 50%, transparent));
    transition: all 0.6s ease-in-out;
  }

  .blue-glow {
    position: absolute;
    top: 50px;
    left: 55px;
    width: 100px;
    height: 100px;
    background: #41ffc9;
    filter: blur(80px);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s ease-out;
    will-change: opacity;
  }

  .pink-glow {
    position: absolute;
    top: 50px;
    right: 55px;
    width: 100px;
    height: 100px;
    background: #bd34fe;
    filter: blur(80px);
    z-index: -1;
    opacity: 0;
    transition: opacity 0.5s ease-out;
    will-change: opacity;
  }

  &.active {

    .blue-chip__cube,
    .pink-chip__cube {
      transform: translate3d(0px, 0, 0);
    }

    .blue-chip__cube {
      filter: grayscale(0) brightness(1) drop-shadow(0 0 0.5rem color-mix(in srgb, #40cffd 100%, transparent));
    }

    .pink-chip__cube {
      filter: grayscale(0) brightness(1) drop-shadow(0 0 0.5rem color-mix(in srgb, #bc33fc 100%, transparent));
    }

    .blue-chip__connection {
      transition-delay: 0.3s;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }

    .pink-chip__connection {
      transition-delay: 0.3s;
      clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 100%);
    }

    .vite-chip__logo {
      filter: grayscale(0) brightness(1) drop-shadow(0px 20px 4px rgba(0, 0, 0, 0.4));
      transform: translate3d(0, -20px, 0);
      transition-delay: 0.8s;
    }

    .vite-chip__v {
      filter: drop-shadow(0 0 0.3rem color-mix(in srgb, #93bfff 20%, transparent));
    }

    .vite-chip__bolt {
      filter: drop-shadow(0 0 0.5rem color-mix(in srgb, yellow 20%, transparent));
    }

    .blue-glow {
      opacity: 0.8;
    }

    .pink-glow {
      opacity: 0.8;
    }

    &:hover {
      .blue-glow {
        opacity: 1;
      }

      .pink-glow {
        opacity: 1;
      }
    }
  }
}
</style>
