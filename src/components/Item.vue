<template>
  <div :style="style" class="item"></div>
</template>
<script>
export default {
  name: 'Item',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  computed: {
    style() {
      return `background-image: url("${this.photo}")`;
    }
  },

  // dalismy style do computed bo wczensiej gdy byly w data to divy byly puste gdyz zmienne w data byly puste w momencie renderwoania a gdy style sa w computed to dzieki temu zupdejtowano zmienne jesli obiekt data sie zmieni
  data() {
    return {
      photo: this.item.links[0].href,
      title: this.item.data[0].title
    };
  }
};
</script>
<style lang="scss" scoped>
.item {
  width: 40vw;
  height: 250px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 50%;
  @media (min-width: 768px) {
    width: 25vw;
  }
}
</style>
