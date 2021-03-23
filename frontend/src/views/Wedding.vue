<template>
  <div class="wedding">
    <sub-title
      title="웨딩영상"
      description="두 분의 소중한 추억을 담은 영상으로 더욱 특별하게"
    ></sub-title>
    <div class="video-list">
      <div class="video-item">
        <div v-for="wedding in weddings" :key="wedding.id" class="video-card">
          <img :src="wedding.poster" class="video-img" />
          <div class="video-description">
            <div>{{ wedding.title }}</div>
            <ul>
              <li>가격 : {{ wedding.price }}</li>
              <li>사진장수 : {{ wedding.photo }}</li>
              <li>재생시간 : {{ wedding.time }}</li>
              <li>배경음악 : {{ wedding.bgm }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import SubTitle from "../components/SubTitle.vue";

export default {
  created() {
    this.$http.get("/api/wedding").then(res => {
      this.weddings = res.data;
      console.log(this.weddings);
    });
  },
  data() {
    return {
      weddings: [],
    };
  },
  components: { SubTitle },
};
</script>

<style>
.video-list {
}
.video-item {
  width: 1200px;
  margin: auto;
}
.video-card {
  width: 500px;
  margin: 0 20px;
  display: inline-block;
}
.video-img {
  width: 500px;
}
</style>
