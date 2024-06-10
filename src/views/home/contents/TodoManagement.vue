<template>
    <div class="container mx-auto px-4 py-8">
        <h2 class="text-2xl font-bold mb-4">Todo List</h2>
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            <TodoCard 
                v-for="todo in todos"  
                :todo="todo" 
                @update:completed="changeComplete"
            />
        </div>
    </div>
</template>

<script setup lang="ts">
    import { getTodos } from '../../../api';  
    import { onBeforeMount } from 'vue';
    import { ref } from 'vue';
    import TodoCard from '../../../components/TodoCard.vue';

    let todos:any = ref([]);
    
    onBeforeMount(async () => {
        const data = await getTodos();
        todos.value = data;
    });

    function changeComplete(id: string) {
        const toChange = todos.value.find(todo => todo.id === id);
        if (toChange) {
            toChange.completed = !toChange.completed;
        }
    }

</script>

<style scoped>
    .container {
        max-width: 80%;
    }
    .grid {
        display: grid;
        gap: 1rem;
    }
</style>