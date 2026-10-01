<script setup lang="ts">
import {ref} from 'vue';
const props = defineProps<{
  x: number,
  y: number,
  sinal: string
}>()
const resultado = ref(0);
const doSignal = () => {
  if (props.sinal == "+"){
  resultado.value = props.x+props.y
}

if (props.sinal == "-"){
  resultado.value = props.x-props.y
}

if (props.sinal == "/"){
  resultado.value = props.x/props.y
}

if (props.sinal == "x"){
  resultado.value = props.x*props.y
}
}
doSignal()
</script>

<template>
  {{ doSignal() }}
  {{x}} {{sinal}} {{y}} = {{resultado}}
</template>

<style scoped>

</style>
