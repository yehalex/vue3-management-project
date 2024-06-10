<template>
    <div class="h-screen flex items-center justify-center bg-gray-100">
        <div class="bg-white max-w-md mx-auto p-8 border border-gray-300 rounded-lg shadow-lg">
            <h2 class="mb-6 text-2xl font-semibold text-center text-gray-700">Sign In</h2>
            <form @submit.prevent="submitForm">
                <div class="mb-4">
                    <label for="username" class="block mb-2 text-gray-600">Username:</label>
                    <input type="text" id="username" v-model="username" @blur="validateUsername" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <span class="text-red-500 text-sm mt-1" v-if="errors.username">{{ errors.username }}</span>
                </div>
                <div class="mb-6">
                    <label for="password" class="block mb-2 text-gray-600">Password:</label>
                    <input type="password" id="password" v-model="password" @blur="validatePassword" class="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400" />
                    <span class="text-red-500 text-sm mt-1" v-if="errors.password">{{ errors.password }}</span>
                </div>
                <button class="w-full bg-blue-500 hover:bg-blue-700 text-white font-semibold py-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400">Submit</button>
            </form>
            <p class="mt-6 text-sm text-center text-gray-500">Does not contain actual API, use 'admin', 'admin' for admin login. 'visitor' for visitor view</p>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import { setToken } from '../../utils/auth';

const router = useRouter();
const username = ref('');
const password = ref('');

const errors = reactive({
    username: '',
    password: '',
});

const validateUsername = () => {
    errors.username = username.value === '' ? 'Username cannot be empty' : '';
};

const validatePassword = () => {
    const passwordLength = password.value.length;
    errors.password = (passwordLength < 5 || passwordLength > 18) 
        ? 'Password must be between 5 to 18 characters long' 
        : '';
};

const validateForm = () => {
    validateUsername();
    validatePassword();
    return !errors.username && !errors.password;
};

const submitForm = async () => {
    if (!validateForm()) {
        console.log('Some fields are invalid');
        return;
    }

    if (username.value === 'admin' && password.value === 'admin') {
        setToken('admin');
        await router.push('/home');
    } else if (username.value === 'visitor' && password.value === 'visitor') {
        setToken('visitor');
        await router.push('/home');
    } else {
        alert('Incorrect username and password combination');
    }
};
</script>

<style scoped>
</style>
