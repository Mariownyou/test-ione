<template>
  <div class="shadow-lg rounded-2xl bg-white dark:bg-gray-700 w-full">
    <p class="font-bold text-md p-4 text-black dark:text-white">
        All Tasks
        <span class="text-sm text-gray-500 dark:text-gray-300 dark:text-white ml-2">
            ({{ tasks.length }})
        </span>
    </p>
    <ul>
        <li
        v-for="task of tasks" 
        :key=task.id 
        :task=task  
        class="">
            <TaskCard :task=task />
        </li>
    </ul>
  </div>
</template>

<script>
import axios from 'axios'
const tasksUrl = 'https://jsonplaceholder.typicode.com/todos'

export default {
    computed: {
        tasks () {
            return this.$store.state.tasks.list
        },
        selected () {
            return this.$store.state.selected.list
        }
    },

    watch: {
        async selected () {
            await this.getTasks()
        }
    },

    async created() {
        await this.getTasks()
    },

    methods: {
        async getTasks() {
            if (this.selected.length > 0) {
                this.$store.commit('tasks/set', [])
                for (const user of this.selected) {
                    await this.getUserTasks(user.id)
                }
            } else {
                await this.getAllTasks()
            }
        },
        async getAllTasks() {
            try {
                const res = await axios.get(tasksUrl)
                this.$store.commit('tasks/set', res.data)
            } catch(e) {
                this.tasks = [{id: 1, title: 'Error'}]
            }
        },
        async getUserTasks(id) {
            try {
                const res = await axios.get(tasksUrl, {params: {userId: id}})
                this.$store.commit('tasks/add', res.data)
            } catch(e) {
                this.tasks = [{id: 1, title: 'Error'}]
            }
        }
    }
}
</script>