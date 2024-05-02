<template>
    <addMenu @save="refreshList()"></addMenu>
    <div class="container">
        
        <header style="" class="p-5">
            <h1 style="text-align: center;">This is my new page!</h1>
        </header>
        <br/><hr/><br/>
        <main class="container">
            <!-- Table Title/Header Row -->
            <div class="row">
                <div class="col-1">
                    <!-- Empty space for task # -->
                    <h3 class="text-align: center;"></h3>
                </div>
                <div class="col-5">
                    <h3 class="text-align: center;">Task Name:</h3>
                </div>
                <div class="col-4">
                    <h3 class="text-align: center;">Deadline:</h3>
                </div>
                <!-- Buttons to Edit or Delete tasks -->
                <div class="col-2">
                    <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addMenu">Add Task</button>>
                    <button type="button" class="btn btn-primary btn-sm" data-bs-toggle="modal" data-bs-target="#addMenu">Add Task</button>
                </div>
            </div>

            <!-- Table Content Rows -->
            <div class="row" v-for="(task, index) in taskArray">
                <div class="col-1">
                    <h2>{{ index }}</h2>
                </div>
                <div class="col-6">
                    <h2>{{ task.name }}</h2>
                </div>
                <div class="col-3">
                    <h2>{{ task.time }}</h2>
                </div>
                <div class="col-2">
                    <h2>{{  }}</h2>
                </div>
            </div>
        </main>
        <footer>

        </footer>
        
    </div>

</template>

<script setup>

    import {ref, onMounted} from 'vue'
    import addMenu from './components/addMenu.vue'
    import { useTaskStore } from './stores/taskStore.js'

    var openMenu = ref(false);
    const taskStore = useTaskStore();
    var taskArray = ref(taskStore.getTasks());
    

    async function refreshList() {
        try {
            // await taskStore.getAll();
        } catch(err) {
            console.log(`Error encountered when refreshing tasks: ${err}`);
        }
        console.log("Refreshed!");
    }
    function addTask() {
        openMenu.value = !openMenu.value;
        console.log(openMenu.value);
    }

    onMounted(() => {
        refreshList();
    })

</script>