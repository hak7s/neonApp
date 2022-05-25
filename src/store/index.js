import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    price: 0,
    text: "",
    font: "",
    color: "",
    dimensions: { id: "small", width: "10.14cm", height: "60cm", maxLength: 5 },
  },
  getters: {
    getDimensions(state) {
      return state.dimensions;
    },
    getFont(state) {
      return state.font;
    },
    getColor(state) {
      return state.color;
    },
    getPrice(state) {
      return state.price;
    },
    getText(state) {
      return state.text;
    },
  },
  mutations: {
    setPrice(state) {
      let priceLetter;
      switch (state.dimensions.id) {
        case "mini":
          priceLetter = 36.4;
          break;
        case "small":
          priceLetter = 39.4;
          break;
        case "medium":
          priceLetter = 48.4;
          break;
        case "large":
          priceLetter = 59.1;
          break;
        default:
          break;
      }

      if (state.text.length >= 2) {
        state.price = state.text.length * priceLetter;
      }

      state.price = state.price.toFixed(2);
    },
    setDimensions(state, dimensions) {
      state.dimensions = dimensions;
    },
    setText(state, text) {
      state.text = text;
    },
    setColor(state, color) {
      state.color = color;
    },
    setFont(state, font) {
      state.font = font;
    },
  },
  actions: {
    setText({ commit }, text) {
      commit("setText", text);
      commit("setPrice");
    },
    setDimensions({ commit }, dimensions) {
      commit("setDimensions", dimensions);
      commit("setPrice");
    },
    setColor({ commit }, color) {
      commit("setColor", color);
    },
    setFont({ commit }, font) {
      commit("setFont", font);
      commit("setPrice");
    },
  },
});
