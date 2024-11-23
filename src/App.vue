<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
    <router-link to="/pizza_sizes">Pizza Size</router-link>
    <router-link to="/suppliers">supplier</router-link>
    <router-link to="/raw_materials">Raw Materials</router-link>
    <router-link to="/about">About</router-link> |
    <router-link to="/employees">Employess</router-link> |
    <router-link to="/pizza_ingredients">Pizza ingredient</router-link> |
    <router-link to="/branches">Branches</router-link> |

  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}
</style>
