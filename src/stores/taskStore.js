import { defineStore } from 'pinia';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

export const useTaskStore = defineStore('taskStore', {
    state: () => {
        tasks = [];
    },
    getters: {
        getTasks: (state) => {
            return state.tasks;
        }
    },
    actions: {
        getAll: async function() {
            await axios.get(`${API_URL}/tasks`)
                .then(res => {
                    this.tasks = res.data;
                })
                .catch(err => {
                    throw err
                })
        },
        insert: async function(vm) {
            await axios.post(`${API_URL}/task`, vm)
                .then(res => {
                    debugger;
                })
                .catch(err => {
                    throw err
                })
        },
        update: async function(vm) {
            await axios.put(`${API_URL}/task`, vm)
                .then(res => {
                    debugger;
                })
                .catch(err => {
                    throw err
                })
        },
        delete: async function(vm) {
            await axios.delete(`${API_URL}/task`, vm)
                .then(res => {
                    debugger;
                })
                .catch(err => {
                    throw err
                })
        },
    }
})

