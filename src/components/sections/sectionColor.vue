<template>
  <div class="grid grid-cols-2">
    <primary-button
      v-for="color of colors"
      :key="color.color"
      :background="color.background"
      :border="color.border"
      :round="true"
      :sublabel="true"
      :label="color.label"
      :selected="selectedColor.color === color.color"
      @selected="selectedColor = color"
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
      selectedColor: {},
      colors: [
        {
          border: "border border-solid border-black",
          background: "bg-white",
          color: "text-white",
          label: "White",
        },
        {
          border: "",
          background: "bg-red-500",
          color: "text-red-500",
          label: "Red",
        },
        {
          border: "",
          background: "bg-pink-500",
          color: "text-pink-500",
          label: "Pink",
        },
        {
          border: "",
          background: "bg-blue-500",
          color: "text-blue-500",
          label: "Blue",
        },
      ],
    };
  },
  watch: {
    selectedColor() {
      this.$store.dispatch("setColor", this.selectedColor?.color);
    },
  },
};
</script>
