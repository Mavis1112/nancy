<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #F0F0F0;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}

.nav{
  display: flex;
  justify-content:space-around;
  font-size: 20px;
  background: #FFFFFF;
}

.nav a{
  display: flex;
  flex-direction: column;
  align-items: center;
}

.nav span{
  display: block;
}

.nav img{
  height: 60px;
}

.nav img:nth-child(1){
  width:  62px;
}
.nav img:nth-child(2){
  width:  71px;
}
.nav img:nth-child(3){
  width:  56px;
}
.nav img:nth-child(4){
  width:  60px;
}
.nav img:nth-child(5){
  width:  55px;
}

.big-title{
  font-size: 60px;
}
.topic-color-title{
  color: #EB3953;
}
blockquote,body,dd,div,dl,dt,fieldset,form,h1,h2,h3,h4,h5,h6,input,li,ol,p,pre,td,textarea,th,ul{margin:0;padding:0}

</style>
