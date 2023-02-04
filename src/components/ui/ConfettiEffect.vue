<template>
  <h1 class="office-banner">Thank you for visiting</h1>
</template>

<script>
import confetti from "canvas-confetti";

export default {
  name: "ConfettiEffect",
  data() {
    return {
      colors: ["#8b5642", "#6a696b"],
    };
  },
  methods: {
    frame() {
      confetti({
        particleCount: 2,
        angle: 60,
        spread: 55,
        origin: { x: 0 },
        colors: this.colors,
      });
      confetti({
        particleCount: 2,
        angle: 120,
        spread: 55,
        origin: { x: 1 },
        colors: this.colors,
      });

      if (Date.now() < Date.now() + 15000) {
        requestAnimationFrame(this.frame);
      }
    },
  },
  mounted() {
    this.frame();
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.office-banner {
  background-color: #e2ddd8;
  font-family: "Arial";
  padding: 0.125em;
  font-size: 4em;
  text-align: center;
  white-space: nowrap;
  transform: rotate(-10deg);
  position: fixed;
  top: 40%;
  left: -5%;
  right: -5%;
  z-index: 100;
  margin-top: 0;
}
</style>