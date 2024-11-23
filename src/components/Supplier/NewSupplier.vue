<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Supplier
            </div>
            <div class="card-body">
                <form @submit.prevent = "saveSupplier">

                    <div class="row mb-3">

                        <label for="id" class="form-label">Codigo</label>

                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="id" placeholder=" Ingrese Codigo de Supplier" 
                            v-model="supplier.id"
                            >
                        </div>
                    </div>

                    <div class="row mb-3">

                        <label for="name" class="form-label">Nombre :</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="text" class="form-control" id="name" placeholder="Nombre Supplier"
                            v-model='supplier.name'>
                        </div>
                    </div>

                    <div class="row mb-3">

                        <label for="contact_info" class="form-label">Info Contacto :</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="text" class="form-control" id="contact_info" placeholder="Contacto del Supplier"
                            v-model='supplier.contact_info'>
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

export default{
    name: 'EditarSupplier',
    data(){
        return{
            supplier:{
                id:0,
                name:'',
                contact_info: ''
            },
           
        }
    },
    methods: {
        cancelar(){
            this.$router.push({name: 'Suppliers'})
        },
        async saveSupplier(){
            const res = await axios.put(`http://127.0.0.1:8000/api/suppliers`, this.supplier)
            if (res.status == 200){
                this.$router.push({name: 'Suppliers'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Supplier has been updated',
                    showConfirmButton: false,
                    timer: 2000
                })
            }s
        }
    },
    mounted(){
        axios.post(`http://127.0.0.1:8000/api/suppliers/`)
        .then(response => {
            this.suppliers = response.data.suppliers;
        })
    },
}

</script>