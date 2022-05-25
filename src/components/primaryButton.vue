<template>
  <div class="flex flex-col items-center">
    <button
      class="w-full bg-gray-200 px-6 py-4 mx-3 my-2 truncate transition-all rounded"
      :class="{
        'shadow-border': selected,
        [border]: border,
        'rounded-full w-12 h-12': round,
        [background]: background,
      }"
      @click="$emit('selected')"
    >
      <span v-if="!sublabel" v-html="labelFormatted" />
    </button>
    <span v-if="sublabel" v-html="labelFormatted" />
  </div>
</template>
<script>
export default {
  props: ["label", "sublabel", "selected", "round", "background", "border"],
  computed: {
    labelFormatted() {
      return this.label.charAt(0).toUpperCase() + this.label.slice(1);
    },
  },
};
</script>
