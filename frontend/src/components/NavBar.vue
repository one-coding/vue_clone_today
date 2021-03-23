<template>
  <div>
    <header class="header">
      <div class="head-nav">
        <div id="logo">
          <router-link to="/">프롬 투모로우</router-link>
        </div>
        <div id="login">
          <router-link to="/about">login</router-link>
        </div>
      </div>

      <div id="nav">
        <router-link to="/wedding">식전영상</router-link>
        <router-link to="/thanks">감사영상</router-link>
        <router-link to="/growth">성장영상</router-link>
        <router-link to="/memorial">추모영상</router-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {};
</script>

<style>
a {
  color: #000;
  text-decoration: none;
  outline: none;
}
.header {
  width: 100%;
  padding: 8px 0 0;
  background: #fff;
  border-bottom: 1px solid #efefef;
  color: #333;
  z-index: 99;
}
.head-nav {
  margin: 0 auto;
  padding: 0 15px;
  display: flex;
  justify-content: space-between;
}
#logo {
  font-size: 20px;
  letter-spacing: 0;
  line-height: 36px;
  cursor: pointer;
}

#login {
  border-radius: 4px;
  line-height: 36px;
  display: inline-block;
  font-size: 12px;
}
#login a {
  cursor: pointer;
  color: #7e7e7e;
}

#nav {
  display: flex;
  justify-content: space-evenly;
  padding: 10px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
  margin: 0px 20px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
