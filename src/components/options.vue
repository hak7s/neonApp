<template>
  <div class="h-[60vh] overflow-y-scroll lg:h-screen lg:w-[40vw]">
    <optionSection
      :section="sections[current]"
      :has-next="current < sections.length - 1"
      :has-previous="current > 0"
      @next="current++"
      @previous="current--"
      :progress="current + 1 + '/' + sections.length"
      class="block lg:hidden"
    />
    <optionSection
      v-for="(section, index) in sections"
      :key="index"
      :section="section"
      class="lg:block hidden"
    />
  </div>
</template>
<script>
import OptionSection from "@/components/sections/optionSection";
export default {
  components: { OptionSection },
  computed: {},
  data() {
    return {
      current: 0,
      sections: [
        {
          name: "text",
          header: "Neon Text",
          title: "What would you like your neon to say?",
        },
        {
          name: "font",
          header: "Neon Font",
          title: "Choose a font that suits your style!",
        },
        {
          name: "color",
          header: "Neon Color",
          title: "Pick your colour.",
        },
        {
          name: "size",
          header: "Neon Size",
          title: "Select your size.",
        },
      ],
    };
  },
};
</script>
