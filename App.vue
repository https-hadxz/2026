<script setup lang="ts">
import {ref} from 'vue';
import HelloWorld from './components/HelloWorld.vue'
const x = ref(0);
const y = ref(0);
const sinal = ref("+");


</script>

<template>
    <input type="number" v-model="x">
    <input type="number" v-model="y">
    <button @click="sinal= '+'">+</button>
    <button @click="sinal= '-'">-</button>
    <button @click="sinal= 'x'">x</button>
    <button @click="sinal= '/'">/</button>

    <HelloWorld :x="x" :y="y" :sinal="sinal"/>
</template>

<style scoped>


</style>
