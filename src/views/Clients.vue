<template>
    <div class="container">
        <h1 class="text-start">Listado de Clientes | 
            <button @click="newClient()"
                    class="btn btn-success mx-2">
                    <font-awesome-icon icon="plus" />
            </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Code</th>
                    <th scope="col">User</th>
                    <th scope="col">Address</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(client, index) in clients" :key="index">
                    <th scope="row"> {{ index+1 }}</th>
                    <td>{{ client.name }}</td>
                    <td>{{ client.address }}</td>
                    <td>{{ client.phone }}</td>
                    <th>
                        <button @click="deleteClient(client.id)"
                                class="btn btn-danger mx-2">
                                <font-awesome-icon icon="trash" />
                        </button>
                        <button @click="editClient(client.id)"
                                class="btn btn-warning mx-2">
                                <font-awesome-icon icon="pencil" />
                        </button>
                    </th>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: 'Clients',
    data() {
        return {
            clients: []
        }
    },
    methods: {
        deleteClient(id) {
            Swal.fire({
                title: `Do you want to delete the Client with id ${id}?`,
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/clients/${id}`)
                    .then(response => {
                        if (response.data.success) {
                            Swal.fire('Deleted!', '', 'success')
                            this.clients = this.clients.filter(client => client.id !== id)
                        }
                    })
                }
            })
        },
        editClient(id) {
            this.$router.push({ name: 'EditarClient', params: { id } })
        },
        newClient() {
            this.$router.push({ name: 'NewClient' });
        }
    },
    mounted() {
        axios
            .get('http://127.0.0.1:8000/api/clients')
            .then(response => (this.clients = response.data.clients))
    }
}
</script>
