<template>
    <div class="p-2.5 flex items-center rounded-md px-4 duration-300 cursor-pointer bg-gray-700 text-white">
        <MagnifyingGlassIcon class="h-6 w-6 text-blue-500" @click="searchRequest" />
        <input type="text" placeholder="Search here" class="text-[15px] ml-4 w-full bg-transparent focus:outline-none" 
            v-model="searchValue" :key="search" @keyup.enter="searchRequest">       
    </div>
</template>

<script setup>
    import { MagnifyingGlassIcon } from '@heroicons/vue/24/outline'
    import { ref } from 'vue'

    let searchValue = ref()
    function searchRequest(){
        alert(`searching "${searchValue.value}"`)
    }
</script>

<style lang="scss" scoped>

</style>