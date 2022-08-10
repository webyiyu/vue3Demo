import {ref, computed} from 'vue'

export function useTodos() {
  let text = ref('')
  let todos = ref([{title: '123', done: false}])

  function addItem() {
    todos.value.push({
      title: text.value,
      done: false,
    })
    text.value = ''
  }

  function clear() {
    todos.value = todos.value.filter(item => !item.done)
  }

  let active = computed(()=>{
    return todos.value.filter(item => !item.done).length
  })

  let all = computed(()=> {
    return todos.value.length
  })

  let allDone = computed({
    get: function() {
      return active.value === 0
    },
    set: function(value) {
      todos.value.forEach(todo =>{
        todo.done = value
      })
    }
  })
  return {text, todos, active, all, allDone, clear, addItem}
}