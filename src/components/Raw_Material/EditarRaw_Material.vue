<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Raw Material
            </div>
            <div class="card-body">
                <form @submit.prevent = "updateRaw_Material">

                    <div class="row mb-3">

                        <label for="id" class="form-label">Codigo</label>

                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="id" placeholder="Codigo material" disabled
                            v-model="raw_material.id"
                            >
                        </div>
                    </div>

                    <div class="row mb-3">

<label for="name" class="form-label">Nombre Pizza :</label>
<div class="input-group">
    <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
    <<input type="text" class="form-control" id="name" placeholder="Nombre material"
    v-model="raw_material.name"
    >
</div>
</div>

<div class="row mb-3">

<label for="unit" class="form-label">Tamaño :</label>
<div class="input-group">
    <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
    <input type="text" class="form-control" id="unit" placeholder="cantidad de unidades"
    v-model='raw_material.unit'>
</div>
</div>

<div class="row mb-3">
<label for="current_stock" class="form-label">Precio Pizza Size :</label>
<div class="input-group">
    <div class="input-group-text"> <font-awesome-icon icon="bank" /></div>
    <input type="text" class="form-control" id="current_stock" placeholder="stock"
    v-model='raw_material.current_stock'>
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
    name: 'EditarRaw_Material',
    data(){
        return{
            raw_material:{
                id:0,
                name:'',
                uni:0,
                current_stock:0
            },
        }
    },
    methods: {
        cancelar(){
            this.$router.push({name: 'Raw_Materials'})
        },
        async updateRaw_Material(){
            const res = await axios.put(`http://127.0.0.1:8000/api/raw_materials/${this.raw_material.id}`, this.raw_material)
            if (res.status == 200){
                this.$router.push({name: 'Raw_Materials'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'material has been updated',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted(){
        this.raw_material.id = this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/raw_materials/${this.raw_material.id}`)
        .then(response => {
            this.raw_material = response.data.raw_material;
        })
    },
}

</script>