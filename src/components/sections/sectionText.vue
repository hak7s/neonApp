<template>
  <textarea
    class="rounded text-center py-5"
    cols="30"
    rows="2"
    v-model="text"
  />
</template>
<script>
export default {
  props: ["section"],
  data() {
    return {
      text: "",
    };
  },
  computed: {
    getDimensions() {
      return this.$store.getters.getDimensions;
    },
  },
  watch: {
    text() {
      this.$store.dispatch("setText", this.text);

      // const lines = this.text.split("\n");
      // let firstLine = lines[0] || "";
      // let secondLine = lines[1] || "";
      // if (
      //   firstLine.length <= this.getDimensions.maxLength &&
      //   secondLine.length <= this.getDimensions.maxLength
      // ) {
      //   this.$store.dispatch("setText", this.text);
      // } else {
      //   if (firstLine.length <= this.getDimensions.maxLength) {
      //     firstLine = firstLine.substring(0, this.getDimensions.maxLength);
      //   }
      //   if (secondLine.length <= this.getDimensions.maxLength) {
      //     secondLine = firstLine.substring(0, this.getDimensions.maxLength);
      //   }
      //   console.log(firstLine, secondLine);
      //   if (secondLine !== "") {
      //     this.text = firstLine + "\n" + secondLine;
      //   }
    },
  },
};
</script>
