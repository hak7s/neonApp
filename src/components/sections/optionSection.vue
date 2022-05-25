<template>
  <div>
    <div
      class="border border-solid border-grey-200 py-5 text-center flex justify-between px-5"
    >
      {{ section.header }}
      <div class="flex items-center">
        <span class="text-sm text-gray-400"> {{ progress }}</span>
        <div
          class="cursor-pointer rounded-full p-2 active:bg-gray-200 flex items-center justify-center transition-all transform rotate-180"
          :class="{ 'opacity-20 cursor-default': !hasPrevious }"
          @click="sendEvent('previous', hasPrevious)"
        >
          <img src="@/assets/arrow.svg" class="w-3 h-3" />
        </div>
        <div
          class="cursor-pointer rounded-full p-2 active:bg-gray-200 flex items-center justify-center transition-all"
          :class="{ 'opacity-20 cursor-default': !hasNext }"
          @click="sendEvent('next', hasNext)"
        >
          <img src="@/assets/arrow.svg" class="w-3 h-3" />
        </div>
      </div>
    </div>
    <div class="bg-gray-100 flex justify-center items-center p-5 flex-col">
      <span class="my-2 mb-4">{{ section.title }}</span>
      <components :is="'section-' + section.name" :section="section" />
    </div>
  </div>
</template>
<script>
import SectionText from "@/components/sections/sectionText";
import SectionFont from "@/components/sections/sectionFont";
import SectionSize from "@/components/sections/sectionSize";
import SectionColor from "@/components/sections/sectionColor";

export default {
  props: ["section", "hasNext", "hasPrevious", "progress"],
  components: {
    SectionText,
    SectionFont,
    SectionColor,
    SectionSize,
  },
  methods: {
    sendEvent(type, condition) {
      if (condition) {
        this.$emit(type);
      }
    },
  },
};
</script>
