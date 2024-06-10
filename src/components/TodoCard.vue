<template>
    <div class="border rounded-lg p-4 shadow-md">
        <input type="checkbox" v-model="todo.completed" class="mr-2" @change="emitChange">
        <h3 :class="{ 'line-through': todo.completed }">{{ todo.todo }}</h3>
    </div>
</template>
  
<script setup>
    const props = defineProps({
        todo: {
            type: Object,
            required: true
        }
    });

    const emit = defineEmits(['changeComplete'])

    function emitChange() {
        emit('changeComplete', props.todo.id)
    }
</script>

<style scoped>
    .line-through {
        text-decoration: line-through;
    }
</style>
  