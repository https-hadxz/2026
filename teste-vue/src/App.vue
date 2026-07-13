<script setup lang="ts">
import { ref } from 'vue';
import HelloWorld from './components/HelloWorld.vue'
import TheWelcome from './components/TheWelcome.vue'
const id = ref(2);
const textoParaAdicionar = ref("");
const titulos = ref([{id: 1, texto: "CONSEGUI!"}])

let vetor = ref([0])

function adicionarVue(){
titulos.value.push({id: id.value, texto: textoParaAdicionar.value});
id.value++;
textoParaAdicionar.value = "";
}
</script>

<template>
  <header v-for="value in vetor">
    <img alt="Vue logo" class="logo" src="./assets/logo.svg" width="125" height="125" />

    <div class="wrapper">
    <HelloWorld v-for="titulo in titulos" :msg= "titulo.texto" :key="titulo.id" />
    </div>
  </header>

  <main>
    <input v-model="textoParaAdicionar">
   <button @click="adicionarVue">Novo Vue</button>
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
