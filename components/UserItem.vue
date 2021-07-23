<template>
    <button
        :class="['mr-1 mb-1 break-normal px-3 py-1 text-sm rounded-full text-black', selected ? 'bg-indigo-200 hover:bg-indigo-300' : 'bg-gray-100 hover:bg-gray-200' ]"
        @click="click" >
            {{ user.name }}
    </button>
</template>

<script>

export default {
    props: {
        user: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            selected: false
        }
    },
    computed: {
        selectedList() {
            return this.$store.state.selected.list
        }
    },
    mounted() {
        this.selectedList.forEach(element => {
            if (element.id === this.user.id) {
                this.selected = true
            }
        })
    },
    methods: {
        click() {
            if (this.selected) {
                this.selected = false
                this.$store.commit('selected/remove', this.user)
            } else {
                this.selected = true
                this.$store.commit('selected/add', this.user)
            }
        }
    }
}
</script>
