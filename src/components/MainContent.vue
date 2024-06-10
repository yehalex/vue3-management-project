<template>
    <div>
        <div class="h-[50px] bg-gray-100 flex justify-between items-center shadow-sm px-[20px] w-full py-[10px] z-10 border-b">
            <div class="cursor-pointer w-[30px]" @click="emit('toggleSideBar')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                </svg>
            </div>
            <div class="relative">
                <button @click="toggleDropdown" class="flex items-center bg-gray-100 focus:outline-none">
                    Settings
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-1">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 9l-7.5 7.5L4.5 9" />
                    </svg>
                </button>
                <div v-show="showDropdown" class="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg">
                    <a @click="signOut" class="block px-4 py-2 text-gray-800 hover:bg-gray-100 cursor-pointer">Sign Out</a>
                </div>
            </div>
        </div>
        <div class="h-[calc(100vh-50px)] bg-white">
            <RouterView></RouterView>
        </div>
    </div>
</template>

<script setup lang="ts" name="MainContent">
    import { ref } from 'vue';
    import { removeToken } from '../utils/auth';
    import { useRouter } from 'vue-router';

    const router = useRouter();
    const emit = defineEmits(['toggleSideBar']);
    const showDropdown = ref(false);

    const toggleDropdown = () => {
        showDropdown.value = !showDropdown.value;
    };

    const signOut = async () => {
        // Implement sign-out logic here
        // no real api calls made
        removeToken();
        await router.push('/login');
    };
</script>

<style scoped>
</style>
