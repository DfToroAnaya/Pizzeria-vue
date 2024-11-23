<template>
    <div class="container">
        <h1 class="text-start">Listado de Pizza Ingredients |
            <button @click="newPizza_ingredient()"
            class="btn btn-success mx-2">
            <font-awesome-icon icon="plus"/>
        </button>
        </h1>
        <table class="table">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Code</th>
                <th scope="col">Pizza</th>
                <th scope="col">Ingredient</th>
                </tr>

            </thead>
            <tbody>
                <tr v-for="(pizza_ingredient, index) in pizza_ingredients" :key="index">
                    <th scope="row">{{index+1}} </th>
                    <td>{{pizza_ingredient.id}}</td>
                    <td>{{pizza_ingredient.pizza_name}}</td>
                    <td>{{pizza_ingredient.ingredient_name}}</td>
                    <td>
                        <button @click="deletePizza_ingredient(pizza_ingredient.id)"
                        class="btn btn-danger mx-2">
                    <font-awesome-icon icon="trash" />
                </button>
                <button @click="editPizza_ingredient(pizza_ingredient.id)"
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
import axios from 'axios'
import Swal from 'sweetalert2'

export default{
    name: 'Pizza_ingredient',
    data(){
        return{
            pizza_ingredients:[]
        }
    },
    methods:{
        deletePizza_ingredient(codigo){
            Swal.fire({
            title: `Do you wnat to delete the Pizza Ingredient with id ${codigo}?`,
            showCancelButton:true,
            confirmButtonText: 'Delete',
        }).then((result) =>{
            if(result.isConfirmed){
                axios.delete(`http://127.0.0.1:8000/api/pizza_ingredients/${codigo}`)
                .then(response=>{
                    if(response.data.success){
                        Swal.fire('Deleted!!', '', 'success')
                        this.pizza_ingredients=response.data.pizza_ingredients
                    }
                })
            }
        })
    },
    editPizza_ingredient(id){
        this.$router.push({name:'EditarPizza_ingredient', params: {id: `${id}`}})
    },
    newPizza_ingredient(){
        this.$router.push({name: 'NewPizza_ingredient'});
    }
},
mounted(){
        axios 
        .get('http://127.0.0.1:8000/api/pizza_ingredients')
        .then(response =>(this.pizza_ingredients=response.data.pizza_ingredients))
    },
}
</script>