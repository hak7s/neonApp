<template>
  <div class="grid grid-cols-2 gap-3">
    <primary-button
      v-for="font of fonts"
      :key="font"
      :label="font"
      :class="'font-' + font"
      :selected="selectedFont === font"
      @selected="selectedFont = font"
    />
  </div>
</template>
<script>
import PrimaryButton from "@/components/primaryButton";
export default {
  components: { PrimaryButton },
  props: ["section"],
  data() {
    return {
      selectedFont: null,
      fonts: [
        "alexandra",
        "amanda",
        "barcelony",
        "Neon",
        "Bayshore",
        "Budhayanti",
        "Gruenewald",
        "Hamillton",
        "Hesterica",
        "Patio",
        "learning",
        "littleDay",
        "Northwell",
        "Photograph",
        "Quinzey",
        "Rocket",
        "Bauhaus",
        "Circular",
        "Comfortaa",
        "courierNew",
        "DolceVita",
        "Kiona",
        "ClubMusic",
        "nixieOne",
        "PaperDaisy",
        "SpaceGalaxy",
        "OutlineAllstar",
        "DoubleCozy",
        "OutlineLoveLoLine",
        "OutlineMarqueeMoon",
        "OutlineMetropolis1920",
        "OutlineNEONGLOW",
      ],
    };
  },
  watch: {
    selectedFont() {
      this.$store.dispatch("setFont", this.selectedFont);
    },
  },
};
</script>
