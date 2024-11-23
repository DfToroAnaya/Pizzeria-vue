<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar</h1>
        <div class="card">
            <div class="card-header- fw-bold">
                Pizza Ingredients
            </div>
            <div class="card-body">
                <form @submit.prevent="updatePizza_ingredient">
                    <div class="row mb-3">
                        <label for="id" class="form-label">Codigo</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag"/></div>
                            <input type="text" class="form-control" id="id" placeholder="Id" disabled
                            v-model="pizza_ingredient.id"
                            >

                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="name" class="form-label">Pizza :</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="pizza" /> </div>
                            <select class="form-select" v-model="pizza_ingredient.pizza_name">
                                <option v-for="pizza in pizzas" v-bind:value="pizza.name">{{ pizza.name }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="name" class="form-label">Ingredient :</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="user" /> </div>
                            <select class="form-select" v-model="pizza_ingredient.ingredient_id">
                                <option v-for="ingredient in Ingredients" v-bind:value="ingredient.id">{{ ingredient.name }}</option>
                            </select>
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
    name: 'EditarPizza_ingredient',
    data(){
        return{
            pizza_ingredient:{
                id:0,
                
            },
            pizza:[],
            ingredient:[]
        }
    },
    methods:{
        cancelar(){
            this.$router.push({name: 'Pizza_ingredient'})
        },
        async updatePizza_ingredient(){
            const res = await axios.put(`http://127.0.0.1:8000/api/pizza_ingredients/${this.pizza_ingredient.id}`, this.pizza_ingredient)
            if (res.status==200){
                this.$router.push({name: 'Pizza_ingredients'})
                Swal.fire({
                    position: 'top-end',
                    icon:'success',
                    title: 'Employee has been updated',
                    showConfirmButton: false,
                    timer:2000
                })
            }
        }
    },
    mounted(){
        this.pizza_ingredient.id=this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/pizza_ingredients/${this.pizza_ingredient.id}`)
        .then(response =>{
            this.pizza_ingredient=response.data.pizza_ingredient;
            this.pizzas=response.data.pizzas;
            this.ingredients=response.data.ingredients
           
        })
    },
}
</script>