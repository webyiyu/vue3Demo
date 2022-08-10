<template>
  <div>
    <input type="text" v-model="text" @keydown.enter="addItem" />
    <button  v-if="active < all" @click="clear">清理</button>
    <ul v-if="todos.length">
      <li v-for="todo in todos" :key="todo.title">
        <input type="checkbox" v-model="todo.done"/>
        <span :class="{done: todo.done}">{{todo.title}}</span>
      </li>
    </ul>
    <div v-else>暂无数据</div>
    <div>
      <input type="checkbox" v-model="allDone" /> 全选
      <div>
        {{active}} / {{all}}
      </div>
    </div>
  </div>
</template>

<script setup>
import {ref, computed} from 'vue'
import {useTodos} from './todo'
let {text, todos, active, all, allDone, clear, addItem} = useTodos()
</script>
<style scoped>
.done {
  text-decoration: line-through;
}
</style>
