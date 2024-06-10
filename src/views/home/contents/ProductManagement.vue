<template>
    <div class="container mx-auto px-1 py-8">
        <h2 class="text-2xl font-bold mb-4">Product List</h2>
        <div class="overflow-x-auto">
            <table class="w-full table-fixed divide-y divide-gray-200">
                <thead class="bg-gray-50">
                    <tr>
                        <th scope="col" class="w-1/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ID</th>
                        <th scope="col" class="w-2/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Image</th>
                        <th scope="col" class="w-4/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Product Name</th>
                        <th scope="col" class="w-2/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Price</th>
                        <th scope="col" class="w-3/12 px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                    </tr>
                </thead>
                <tbody class="bg-white divide-y divide-gray-200">
                    <tr v-for="product in displayedProducts" :key="product.id">
                        <td class="px-6 py-4 whitespace-nowrap">{{ product.id }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <img :src="product.image" alt="Product Image" class="h-16 w-16 object-cover">
                        </td>
                        <td class="px-6 py-4 whitespace-normal break-words">{{ product.title }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">{{ product.price }}</td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <button @click="modifyProduct(product.id)" class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Modify</button>
                            <button @click="deleteProduct(product.id)" class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-4">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
        <div class="flex justify-end mt-4">
            <button @click="previousPage" :disabled="currentPage === 1" class="px-3 py-1 mr-2 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-300">Previous</button>
            <button @click="nextPage" :disabled="currentPage === totalPages" class="px-3 py-1 rounded-md bg-gray-200 text-gray-700 hover:bg-gray-300 focus:outline-none focus:bg-gray-300">Next</button>
        </div>
    </div>
</template>

<script setup>
    import { getProducts } from '@/api';
    import { onBeforeMount } from 'vue';
    import { ref, computed } from 'vue';

    const pageSize = 5; // Number of products per page
    const currentPage = ref(1);

    let data = ref([]);
    
    onBeforeMount(async () => {
        const productsList = await getProducts();
        data.value = productsList;
    });

    const displayedProducts = computed(() => {
        const start = (currentPage.value - 1) * pageSize;
        const end = start + pageSize;
        return data.value.slice(start, end);
    });

    const totalPages = computed(() => Math.ceil(data.value.length / pageSize));

    const deleteProduct = (id) => {
        // Implement delete logic here
        alert('not implemented yet')
    };

    const modifyProduct = (id) => {
        // Implement modify logic here
        alert('not implemented yet')
    };

    const previousPage = () => {
        currentPage.value--;
    };

    const nextPage = () => {
        currentPage.value++;
    };
</script>

<style scoped>
    .container {
        max-height: 80vh;
    }
</style>
