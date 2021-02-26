<template>
  <div>
    <div class="header">
      <nav class="nav">
        <ul class="nav-list">
          <li class="nav-item"><router-link to="/">Home</router-link></li>
          <li class="nav-item"><router-link to="/about">About</router-link></li>
          <li class="nav-item"><router-link to="/contact">Contact</router-link></li>
        </ul>
      </nav>
      <h1 class="logo">
        <router-link to="/">JIHYEON</router-link>
      </h1>
    </div>
  </div>
</template>
<script>
export default {
}
</script>
<style scoped>
a {
  text-decoration: none;
}
.header {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  align-items: center;
  width: 100%;
  background-color: antiquewhite;
}
.header .logo {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%,-50%);
  margin: 0;
}
.header .logo a{
  font-size: 20px;
  color: #000;
  line-height: 50px;
}
.header .nav{
  color: #fff;
  height: 50px;
}
.header .nav .nav-list {
  color: #000;
}
.header .nav .nav-item {
  display: inline-block;
  margin:0 15px;
}
.header .nav .nav-item a{
  text-decoration: none;
  color: #000;
}
.header .nav .nav-item a.router-link-exact-active{
  font-weight: bold;
}
</style>