<template>
  <div>
    <h2 class="mb-5 text-2xl tracking-tight font-bold text-gray-500 sm:text-2xl md:text-3xl">Users</h2>
    
    <div class="flex">
        <ul>
            <li v-for="user of users" :key=user.id>{{ user.id }}</li>
        </ul>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
const tasksUrl = 'https://jsonplaceholder.typicode.com/todos'

export default {
    data() {
        return {
            users: []
        }
    },
    async created() {
        try {
            const res = await axios.get(tasksUrl)
            this.tasks = this.groupUsers(res.data)
        } catch(e) {
            this.tasks = [{id: 1, title: 'Error'}]
        }
    },
    groupUsers(data) {
        const result = []
        const keys = {}
        data.forEach(function (e) {
        if (typeof keys[e.id] === 'undefined') {
            result.push([])
            keys[e.id] = result.length - 1
        }
        result[keys[e.id]].push(e)
        })
        console.log(result)
    }
}
</script>