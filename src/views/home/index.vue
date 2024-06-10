<template>
    <div class="w-screen h-screen flex">
        <div class="w-[400px] h-full bg-gray-200 text-white" v-show="showSideBar">
            <SideBar />
        </div>
        <div class="w-full h-full bg-gray-400">
            <MainContent @toggleSideBar="toggleSideBar"/>
        </div>        
    </div>
</template>

<script setup lang="ts">
    import SideBar from '../../components/SideBar.vue'
    import MainContent from '../../components/MainContent.vue';
    import { ref } from 'vue';

    let showSideBar = ref(true)
    function toggleSideBar(){
        showSideBar.value = !showSideBar.value
    }
</script>

<style scoped>
    
</style>