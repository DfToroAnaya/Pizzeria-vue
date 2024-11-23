<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Client
            </div>
            <div class="card-body">
                <form @submit.prevent="updateClient">

                    <div class="row mb-3">
                        <label for="id" class="form-label">Codigo</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="id" placeholder="Code" disabled 
                                 v-model="client.id">
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="user" class="form-label">User :</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="building" /></div>
                            <select class="form-select" v-model="client.user_id">
                                <option v-for="user in users" v-bind:value="user.id">{{ user.name }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="address" class="form-label">Address</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="address" placeholder="Address"
                                 v-model="client.address">
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="phone" class="form-label">Phone</label>
                        <div class="input-group">
                            <div class="input-group-text"><font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="phone" placeholder="Phone"
                                 v-model="client.phone">
                        </div>
                    </div>
                    
                    <button class="btn btn-primary" type="submit">Actualizar</button>
                    <button class="btn btn-secondary mx-2" @click="cancelar">Cancelar</button>
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
                user_id: '',
                address: '',
                phone: ''
            },
            users: []
        };
    },

    methods: {
        cancelar() {
            this.$router.push({ name: 'Clients' });
        },

        async updateClient() {
            const res = await axios.put(`http://127.0.0.1:8000/api/clients/${this.client.id}`, this.client);
            if (res.status === 200) {
                this.$router.push({ name: 'Clients' });
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Client has been updated',
                    showConfirmButton: false,
                    timer: 2000
                });
            }
        }
    },

    mounted() {
        this.client.id = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/clients/${this.client.id}`)
            .then(response => {
                this.client = response.data.client;
                this.users = response.data.users;
            });
    }
}
</script>
