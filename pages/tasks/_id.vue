<template>
<div>
    <NuxtLink to='/' class="inline-flex m-5 py-2 pr-2 hover:bg-gray-50 text-indigo-400">
        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
        </svg>
        <span>Назад</span>
    </NuxtLink>

    <div class="bg-white dark:bg-gray-800 w-full mx-auto p-8 mt-32">
        <p class="text-gray-600 dark:text-white w-full md:w-2/3 m-auto text-center text-lg md:text-3xl">
            <span class="font-bold text-indigo-500">
                “
            </span>
            {{ task.title }}
            <span class="font-bold text-indigo-500">
                ”
            </span>
        </p>
        <div class="flex items-center justify-center mt-8">
            <div class="flex items-center justify-center">
                <span class="font-semibold text-indigo-500 mr-2 text-lg">
                    {{ user.name }}
                </span>
                <span class="text-gray-400 text-xl font-light">
                    /
                </span>
                <span class="text-gray-400 text-md ml-2">
                    User of I-ONE
                </span>
            </div>
        </div>
    </div>
</div>

</template>

<script>
import axios from 'axios'
const taskUrl = 'https://jsonplaceholder.typicode.com/todos'
const userUrl = 'https://jsonplaceholder.typicode.com/users'

export default {
    data() {
        return {
            id: this.$route.params.id,
            task: Object,
            user: Object
        }
    },
    async created() {
        try {
            const res = await axios.get(taskUrl, { params: {id: this.id} })
            this.task = res.data[0]
        } catch(e) {
            this.task = {id: 1, title: 'Error'}
        }

        try {
            const res = await axios.get(userUrl, { params: {id: this.task.userId} })
            this.user = res.data[0]
        } catch(e) {
            this.user = {id: 1, title: 'Error'}
        }
    }
}
</script>