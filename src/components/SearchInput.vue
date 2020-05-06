<template>
  <div class="searchWrapper">
    <input
      type="text"
      id="search"
      name="search"
      v-model="searchValue"
      v-on:input="handleInput"
    />
  </div>
</template>
<script>
export default {
  name: 'SearchInput'
};
</script>
<style lang="scss" scoped>
.searchWrapper {
  display: flex;
  flex-direction: column;
  width: 250px;
  margin-top: 50px;
}

input {
  height: 30px;
  border: 0;
  border-bottom: 1px solid #000;
  background-color: transparent;
}
</style>
