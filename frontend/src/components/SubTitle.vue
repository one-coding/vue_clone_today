<template>
  <div class="content-header">
    <div class="content-header-title">{{ title }}</div>
    <div class="content-header-body">
      {{ description }}
    </div>
  </div>
</template>

<script>
export default {
  name: "SubTitle",
  props: { title: String, description: String },
};
</script>

<style>
.content-header {
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 15px;
}
.content-header-title {
  font-size: 22px;
  color: #424242;
}
.content-header-body {
  margin-top: 8px;
  font-size: 13px;
  color: #888;
}
</style>
