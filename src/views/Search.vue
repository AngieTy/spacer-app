/* eslint-disable space-before-function-paren */
<template>
  <div class="wrapper">
    <div class="search">
      <label for="search">Search</label>
      <input
        type="text"
        id="search"
        name="search"
        v-model="searchValue"
        v-on:input="handleInput"
      />
      <ul>
        <li v-for="item in results" v-bind:key="item.data[0].nasa_id">
          <p>{{ item.data[0].description }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
var debounce = require('lodash.debounce');
const API = 'https://images-api.nasa.gov/';
// const axios = require('axios');
export default {
  name: 'Search',
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
  align-items: center;
  width: 100%;
  margin: 0;
  padding: 30px;
  .search {
    display: flex;
    flex-direction: column;
    width: 300px;
  }
  label {
    font-family: 'Montserrat', sans-serif;
  }
  input {
    height: 30px;
    border: 0;
    border-bottom: 1px solid #000;
  }
}
</style>
