<template>
    <div class="container mx-auto px-4 py-8">
        <h2 class="text-2xl font-bold mb-4">User List</h2>
        <div class="overflow-x-auto">
            <table class="w-full table-fixed divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                    <th scope="col" class="w-1/3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Username</th>
                    <th scope="col" class="w-1/3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                    <th scope="col" class="w-1/3 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="user in userList" :key="user.id">
                    <td class="px-6 py-4 whitespace-nowrap">{{ user.username }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">{{ user.role }}</td>
                    <td class="px-6 py-4 whitespace-nowrap">
                        <button @click="modifyUser(user.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Change Role</button>
                        <button @click="deleteUser(user.id)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">Delete</button>
                    </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button @click="addUser" class="bg-green-100 hover:bg-green-400 text-black font-bold py-2 px-4 rounded">add dummy user</button>
    </div>
</template>

<script setup lang="ts">
    import { useUsersStore } from '../../../store/users';
    import { storeToRefs } from 'pinia';

    const usersStore = useUsersStore();
    const { userList } = storeToRefs(usersStore);

    function addUser() {
        usersStore.addUser(
            {id: usersStore.userList.length + 1, username: 'newUser', password: 'newUser', role: 'user'},
        );
    }

    function deleteUser(id) {
        usersStore.deleteUser(id);
    }

    function modifyUser(id) {
        usersStore.changeRole(id);
    }
</script>

<style scoped>

</style>