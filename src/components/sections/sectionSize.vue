<template>
  <div class="grid grid-cols-2 gap-3">
    <primary-button
      v-for="size of sizes"
      :key="size.id"
      :label="size.label"
      :selected="selectedSize.id === size.id"
      @selected="selectedSize = size"
    />
  </div>
</template>
<script>
import PrimaryButton from "@/components/primaryButton";
export default {
  components: { PrimaryButton },
  props: ["section"],
  mounted() {
    this.selectedSize = this.sizes[0];
  },
  data() {
    return {
      selectedSize: {},
      sizes: [
        {
          maxLength: 5,
          width: "10.14cm",
          height: "60cm",
          label: "Mini",
          id: "mini",
        },
        {
          maxLength: 7,
          width: "1.04m",
          height: "1m",
          label: "Small",
          id: "small",
        },
        {
          maxLength: 9,
          width: "1.24m",
          height: "1.2m",
          label: "Medium",
          id: "medium",
        },
        {
          maxLength: 11,
          width: "1.55m",
          height: "1.5m",
          label: "Large",
          id: "large",
        },
      ],
    };
  },
  watch: {
    selectedSize() {
      this.$store.dispatch("setDimensions", {
        width: this.selectedSize.width,
        height: this.selectedSize.height,
        maxLength: this.selectedSize.maxLength,
        id: this.selectedSize.id,
      });
    },
  },
};
</script>
