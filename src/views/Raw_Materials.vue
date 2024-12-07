<template>
    <div class="container">
        <h1 class="text-start">Listado Pizzas Size |
            <button @click="newRaw_Material()"
            class="btn btn-success mx-2"><font-awesome-icon icon="plus" />
        </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Code</th>
                <th scope="col">Name</th>
                <th scope="col">Unit</th>
                <th scope="col">Current Stock</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(raw_material,index) in raw_materials" :key="index">
                    <th scope="row">{{index+1}}</th>
                    <td>{{raw_material.id}}</td>
                    <td>{{raw_material.name}}</td>   
                    <td>{{raw_material.unit}}</td>
                    <td>{{raw_material.current_stock}}</td>
                    <td>
                        <button @click="deleteRaw_Material(raw_material.id)"
                        class="btn btn-danger mx-2">
                        <font-awesome-icon icon="trash" />
                    </button>
                    <button @click="editRaw_Material(raw_material.id)"
                    class="btn btn-warning mx-2">
                <font-awesome-icon icon="pencil" /></button>
                    </td>
                </tr>

            </tbody>

        </table>
    </div>
</template>
<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default {
    name: 'Raw_Material',
    data(){
        return{
            raw_materials: []
        }
    },
    methods:{
        deleteRaw_Material(codigo){
            Swal.fire({
                title: `Do you want to delete the raw material with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/raw_materials/${codigo}`)
                    .then(response => {
                        if (response.data.success){
                            Swal.fire('Deleted!!', '', 'success')
                            this.raw_materials = response.data.raw_materials
                        }
                   })
                }
            })
        },
        editRaw_Material(id){
            this.$router.push({name: 'EditarRaw_Material', params: {id: `${id}`}})
        },
        newRaw_Material(){
            this.$router.push({name: 'NewRaw_Material'})
        }
    },
    mounted(){
        axios
        .get('http://127.0.0.1:8000/api/raw_materials/')
        .then(response => (this.raw_materials =  response.data.raw_materials))
    },
}
</script>
