<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">New</h1>
        <div class="card">
            <div class="card-header- fw-bold">
                Pizza ingredient
            </div>
            <div class="card-body">
                <form @submit.prevent="savePizza_ingredient">
                    <div class="row mb-3">
                        <label for="id" class="form-label">Codigo</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag"/></div>
                            <input type="text" class="form-control" id="id" placeholder="Id " disabled
                            v-model="pizza_ingredient.id"
                            >

                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="name" class="form-label">Pizza :</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="pizza" /> </div>
                            <select class="form-select" v-model="pizza_id">
                                <option selected value="0">Seleccione la pizza</option>
                                <option v-for="pizza in pizzas" v-bind:value="pizza.id">{{ pizza.name }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="name" class="form-label">Ingredient :</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="user" /> </div>
                            <select class="form-select" v-model="ingredient_id">
                                <option selected value="0">Seleccione ingredient</option>
                                <option v-for="ingredient in Ingredients" v-bind:value="ingredient.id">{{ ingredient.name }}</option>
                            </select>
                        </div>
                    </div>


                    <button class="btn btn-primary" type="submit">Save</button>
                    <button class="btn btn-secondary mx-2" @click.prevent="cancel">Cancel</button>
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
    data() {
    return {
        pizza_ingredient: {
            id: 0, // Solo se mantiene en pizza_ingredient
            pizza_id: null,
            ingredient_id: null,
        },
        pizzas: [],
        ingredients: [],
        pizza_id: 0, // Inicializa la pizza_id correctamente
        ingredient_id: 0, // Inicializa ingredient_id correctamente
    }
},

    methods:{
        cancel(){
            this.$router.push({name: 'Pizza_ingredients'})
        },
        async savePizza_ingredient(){
            this.pizza_ingredient.pizza_id=this.pizza_id
            this.pizza_ingredient.ingredient_id=this.ingredient_id
            const res = await axios.post(`http://127.0.0.1:8000/api/pizza_ingredients/`, this.pizza_ingredient)
            console.log(res);
            if (res.status==200){
                this.$router.push({name: 'Pizza_ingredients'})
                Swal.fire({
                    position: 'top-end',
                    icon:'success',
                    title: 'Pizza ingredients has been updated',
                    showConfirmButton: false,
                    timer:2000
                })
            }
        }
    },

    mounted() {
    axios.get('http://127.0.0.1:8000/api/pizzas/')
        .then(response => {
            this.pizzas = response.data.pizzas
        })
    axios.get('http://127.0.0.1:8000/api/ingredients/')
        .then(response => {
            this.ingredients = response.data.ingredients
        })
},
}
</script>

