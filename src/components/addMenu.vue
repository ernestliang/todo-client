<template>
    <div class="modal fade modal-dialog-centered" id="addMenu" data-bs-backdrop="static" tabindex="-1">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">

                </div>
                <div class="modal-body">
                    <form>
                        <div class="m-2">
                            <div class="row">
                                <label class="form-label" for="taskInput">Task Name:</label>
                                <input type="text" class="form-input" v-bind="taskObj.taskName" id="nameInput">
                            </div>
                            <div class="row">
                                <label class="form-label" for="taskInput">Task Name:</label>
                                <input type="text" class="form-input" v-bind="taskObj.taskName" id="nameInput">
                            </div>
                        </div>
                    </form>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" @click="saveTask()">Save</button>
                    <button type="reset" class="btn btn-danger" data-bs-dismiss="modal">Cancel</button>
                </div>

            </div>
            
        </div>
    </div>

</template>
<script setup>

    import {ref, onMounted, defineProps, defineEmits} from 'vue'
    import { useTaskStore } from './../stores/taskStore.js'

    const props = defineProps([]);
    const emit = defineEmits(['save']);

    const taskStore = useTaskStore();
    const taskObj = ref({});
    

    function populateData() {

    }
    function saveTask() {
        try {

            emit('save');
        } catch (err) {
            console.log(`Error encountered when saving task details: ${err}`);
        }
    }

    onMounted(() => {
        populateData();
    })

</script>