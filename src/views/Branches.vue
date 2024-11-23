<template>
    <div class="container">
        <h1 class="text-start">Listado de Branches | 
            <button @click="newBranche()"
                    class="btn btn-success mx-2">
                    <font-awesome-icon icon="plus"/>
            </button>
        </h1>
        
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Code</th>
                    <th scope="col">Name</th>
                    <th scope="col">Address</th>
                    <th scope="col">Actions</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(branche,index) in branches" :key="index">
                    <th scope="row">{{ index+1 }}</th>
                    <td>{{branche.id}}</td>
                    <td>{{branche.name}}</td>
                    <td>{{branche.address}}</td>
                   
                    <td>
                        <button @click="deleteBranche(branche.id)"
                        class="btn btn-danger mx-2">
                        <font-awesome-icon icon="trash"/>
                    </button>
                    <button @click="editBranche(branche.id)"
                    class="btn btn-warning mx-2">
                    <font-awesome-icon icon="pencil" />
                </button>
                    </td>

                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import axios from "axios"
import Swal from 'sweetalert2'

export default{

    name: 'Branche',
    data(){
        return{
            branches:[]
        }
    },
    methods:{
        deleteBranche(codigo){
            Swal.fire({
                title: `Do you want to delete the Branche with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: `Delete`,
            }).then((result) =>{
                if (result.isConfirmed) {
                    
                    axios.delete(`http://127.0.0.1:8000/api/branches/${codigo}`)
                    .then(response =>{
                        if (response.data.success){
                            Swal.fire('Deleted!!', '', 'success')
                            this.branches=response.data.branches
                        }
                    })
                }
            })
        },
        editBranche(id){
            this.$router.push({name: 'EditarBranche', params: {id: `${id}`}})
        },
        newBranche(){
            this.$router.push({name: 'NewBranche'});
        }
    },
    mounted(){
        axios
        .get('http://127.0.0.1:8000/api/branches')
        .then(response => (this.branches=response.data.branches))
    },
}
</script>