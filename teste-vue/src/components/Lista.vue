<script setup lang="ts">
defineProps<{
  title: string
}>()

import { ref, computed } from 'vue'

let id = 0

const newTodo = ref('')
const hideCompleted = ref(false)
const todos = ref([
{ id: id++, text: '', done: false},
])
const filteredTodos = computed(() => {
// return filtered todos based on
// `todos.value` & `hideCompleted.value`
if (hideCompleted.value){
return todos.value.filter((t) => !t.done)
}else {
return todos.value
}
})

function addTodo() {
todos.value.push({ id: id++, text: newTodo.value, done: false })
newTodo.value = ''
}

function removeTodo(todo: {
    id: number;
    text: string;
    done: boolean;}) {
todos.value = todos.value.filter((t) => t !== todo)
}
</script>

<template>
    <h1> {{title}}</h1>
<form @submit.prevent="addTodo">
<input v-model="newTodo" required placeholder="new todo">
<button>Add Todo</button>
</form>
<ul>
<li v-for="todo in filteredTodos" :key="todo.id">
<input type="checkbox" v-model="todo.done">
<span :class="{ done: todo.done }">{{ todo.text }}</span>
<button @click="removeTodo(todo)">X</button>
</li>
</ul>
<button @click="hideCompleted = !hideCompleted">
{{ hideCompleted ? 'Show all' : 'Hide completed' }}
</button>
</template>

<style>
.done {
text-decoration: line-through;
}
</style>