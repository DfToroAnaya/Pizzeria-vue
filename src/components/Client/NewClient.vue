<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">New</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Client
            </div>
            <div class="card-body">
                <form @submit.prevent="saveClient">

                    <div class="row mb-3">
                        <label for="id" class="form-label">Codigo</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="id" placeholder="Code" disabled 
                                v-model='client.id'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="name" class="form-label">User</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <select class="form-select" v-model="name">
                                <option selected value="0">Seleccione un municipio...</option>
                                <option v-for="user in users" v-bind:value="user.name">{{ user.name }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="address" class="form-label">Address</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="address" placeholder="Address" 
                                v-model='client.address'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="phone" class="form-label">Phone</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="phone" placeholder="Phone" 
                                v-model='client.phone'>
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Save</button>
                    <button class="btn btn-secondary mx-2" @click="cancelar">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: 'EditarClient',
    data() {
        return {
            client: {
                id: 0,
                name: '',
                address: '',
                phone: ''
            },
            users: [],

        };
    },
    methods: {
        cancelar() {
            this.$router.push({ name: 'Clients' });
        },

        async saveClient() {
            const res = await axios.post(`http://127.0.0.1:8000/api/clients`, this.client);
            console.log(res);
            if (res.status === 200) {
                this.$router.push({ name: 'Clients' });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Client has been saved',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        }
    },

    mounted() {
        axios.get(`http://127.0.0.1:8000/api/clients`)
            .then(response => {
                this.users = response.data.users;
            });
    }
}
</script>
