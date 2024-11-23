<template>
    <div class="container">
        <h1 class="text-start">Listado Pizzas Size |
            <button @click="newPizza_Size()"
            class="btn btn-success mx-2"><font-awesome-icon icon="plus" />
        </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Size</th>
                    <th scope="col">Price</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(pizza_size,index) in pizza_sizes" :key="index">
                    <th scope="row">{{index+1}}</th>
                    <td>{{pizza_size.id}}</td>
                    <td>{{pizza_size.name}}</td>   
                    <td>{{pizza_size.size}}</td>
                    <td>{{pizza_size.price}}</td>
                    <td>
                        <button @click="deletePizza_Size(pizza_size.id)"
                        class="btn btn-danger mx-2">
                        <font-awesome-icon icon="trash" />
                    </button>
                    <button @click="editPizza_Size(pizza_size.id)"
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
    name: 'Pizza_Size',
    data(){
        return{
            pizza_sizes: []
        }
    },
    methods:{
        deletePizza_Size(codigo){
            Swal.fire({
                title: `Do you want to delete the Pizza Size with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: 'Delete',
            }).then((result) => {
                if (result.isConfirmed) {
                    axios.delete(`http://127.0.0.1:8000/api/pizza_sizes/${codigo}`)
                    .then(response => {
                        if (response.data.success){
                            Swal.fire('Deleted!!', '', 'success')
                            this.pizza_sizes = response.data.pizza_sizes
                        }
                   })
                }
            })
        },
        editPizza_Size(id){
            this.$router.push({name: 'EditarPizza_Size', params: {id: `${id}`}})
        },
        newPizza_Size(){
            this.$router.push({name: 'NewPizza_Size'})
        }
    },
    mounted(){
        axios
        .get('http://127.0.0.1:8000/api/pizza_sizes/')
        .then(response => (this.pizza_sizes =  response.data.pizza_sizes))
    },
}
</script>
