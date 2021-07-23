<template>
    <div class="flex flex-wrap">
        <UserItem v-for="user of users" :key=user.id :user=user />
    </div>
</template>

<script>
import axios from 'axios'
const usersUrl = 'https://jsonplaceholder.typicode.com/users'

export default {
    computed: {
        users () {
            return this.$store.state.users.list
        },
        selected () {
            return this.$store.state.selected.list
        }
    },
    async created() {
        try {
            const res = await axios.get(usersUrl)
            this.$store.commit('users/set', res.data)
        } catch(e) {
            this.users = [{id: 1, title: 'Error'}]
        }
    }
}
</script>