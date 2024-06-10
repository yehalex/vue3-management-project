<template>
    <div v-for="route in items">
        <RouterLink :to="{name: route.routeName}" active-class="active" :id="route.id" class="
        inline-flex 
        relative 
        items-center 
        py-[10px] 
        px-[10px] 
        w-full 
        text-sm 
        font-medium 
        rounded-md 
        border-gray-200 
        hover:bg-gray-600 
        hover:text-gray-100
        "
        >
            {{ route.routeText }}
        </RouterLink>
    </div>
</template>

<script setup lang="ts">
    import { RouterLink } from 'vue-router';

    defineProps(['items'])
</script>
    
<style scoped>

</style>