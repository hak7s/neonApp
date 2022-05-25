<template>
  <div class="bg-black min-w-52 h-[40vh] text-white flex flex-col p-3">
    <span class="text-2xl tracking-wide self-end"> {{ price + "€" }}</span>
    <div class="self-center flex items-center h-full">
      <div class="text-[3rem] relative">
        <span
          v-html="text"
          :class="['font-' + font, color]"
          class="transition-all"
        />
        <div
          class="rounded w-px h-full absolute bg-gray-500 -left-8 top-0"
          v-if="text.length > 0"
        >
          <span
            v-html="dimensions.height"
            class="text-xs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black"
          />
        </div>
        <div
          class="rounded w-full h-px absolute bg-gray-500 -bottom-4"
          v-if="text.length > 0"
        >
          <span
            v-html="dimensions.width"
            class="text-xs absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-black"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  computed: {
    dimensions() {
      return this.$store.getters.getDimensions;
    },
    font() {
      return this.$store.getters.getFont;
    },
    color() {
      return this.$store.getters.getColor;
    },
    price() {
      return this.$store.getters.getPrice;
    },
    text() {
      return this.$store.getters.getText.split("\n").join("<br>");
    },
  },
};
</script>
