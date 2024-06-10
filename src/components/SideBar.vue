<template>
    <div>
        <div class="h-[50px] bg-gray-900 flex justify-start items-center">
            <div class="px-[20px]">
                <h3 class="font-bold text-xl">Dashboard</h3>
            </div>
        </div>
        <div class="h-[calc(100vh-50px)] bg-gray-800 py-[20px]">
            <div class="px-[20px] flex flex-col justify-between space-y-[10px]">
                <div class="h-auto">
                     <NavItem :items />
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts" name="SideBar">
    import NavItem from './NavItem.vue';
    import { getNavData } from '../api';
    import { onMounted, ref } from 'vue';

    let items = ref();
    onMounted(async() => {
        let res = await getNavData();
        items.value = res.res
    })
</script>

<style scoped>

</style>