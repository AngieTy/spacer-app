<template>
  <div class="wrapper">
    <Claim />
    <SearchInput />
  </div>
</template>

<script>
import axios from 'axios';
import Claim from '../components/Claim';
import SearchInput from '../components/SearchInput.vue';
var debounce = require('lodash.debounce');
const API = 'https://images-api.nasa.gov/';
// const axios = require('axios');
export default {
  name: 'Search',
  components: {
    Claim,
    SearchInput
  },
  // eslint-disable-next-line space-before-function-paren
  data() {
    return {
      searchValue: '',
      results: []
    };
  },
  methods: {
    // debounce przyjmuje 2 argumeny: funkcje ktora chcemy wykonac i czas po jakim ta funkcja ma sie wykonac
    handleInput: debounce(function() {
      axios
        .get(`${API}search?q=${this.searchValue}&media_type=image`)
        .then(response => {
          this.results = response.data.collection.items;
        })
        .catch(error => {
          console.log(error);
        });
    }, 1000)
  }
};
</script>
<style lang="scss" scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  margin: 0;
  padding: 30px;
  background-image: url('../assets/heroimage.jpg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 80% 0%;
}
</style>
