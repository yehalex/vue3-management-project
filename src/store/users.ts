import { defineStore } from 'pinia';
import { reactive } from "vue";


export const useUsersStore = defineStore('users', () => {
    // same as state()
    const userList = reactive([
        {id: 1, username: 'admin', password: 'admin', role: 'admin'},
        {id: 2, username: 'visitor', password: 'visitor', role: 'user'},
    ])

    function getUsers() {
        return this.userList;
    }

    function addUser(newUser) {
        this.userList.push(newUser)
    }

    function deleteUser(id) {
        const index = userList.findIndex(user => user.id === id);
        if (index !== -1) {
            userList.splice(index, 1);
        }
    }

    function changeRole(id) {
        const user = userList.find(user => user.id === id);
        if (user) {
            user.role = user.role === 'admin' ? 'user' : 'admin';
        }
    }
    
    return {userList, getUsers, addUser, deleteUser, changeRole}
})
