<template>
  <header class="header">
    <nav class="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link>
      <router-link :to="{ name: 'SecondPage' }">Second Page</router-link>
    </nav>
  </header>
</template>

<style>
.header {
  display: flex;
  align-items: center;
  justify-content: center;
}

.nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  background-color: rgb(243, 243, 246);
  padding: 20px;
  border-radius: 20px;
  width: 500px;
}

a {
  margin: 0;
  padding: 0;
  font-size: 100%;
  vertical-align: baseline;
  background: transparent;
  color: inherit;
  font-family: 'Mulish';
  font-size: 20px;
  text-decoration: none;
}
</style>
