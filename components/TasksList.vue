<template>
  <div class="w-100">
    <h2 class="mb-5 text-2xl tracking-tight font-bold text-gray-900 sm:text-2xl md:text-3xl">Tasks</h2>
    
    <div 
    class="grid grid-flow-row grid-cols-2 gap-4" >
        <TaskCard 
        v-for="task of tasks" 
        :key=task.id 
        :task=task />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const tasksUrl = 'https://jsonplaceholder.typicode.com/todos'

export default {
    data() {
        return {
            tasks: []
        }
    },

    async created() {
        try {
            const res = await axios.get(tasksUrl)
            this.tasks = res.data
        } catch(e) {
            this.tasks = [{id: 1, title: 'Error'}]
        }
    }
}
</script>