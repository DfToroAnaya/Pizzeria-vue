<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Nuevo</h1>
        <div class="card">
            <div class="card-header fw-bold">
                Pizza Size
            </div>
            <div class="card-body">
                <form @submit.prevent = "savePizza_Size">

                    <div class="row mb-3">

                        <label for="id" class="form-label">Codigo</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag" /></div>
                            <input type="text" class="form-control" id="id" placeholder="Codigo Pizza Size" disabled
                            v-model="pizza_size.id"
                            >
                        </div>
                    </div>

                    <div class="row mb-3">

                        <label for="pizzas_id" class="form-label">Nombre Pizza :</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <<input type="text" class="form-control" id="pizzas_id" placeholder="Nombre Pizza Size"
                            v-model="pizza_size.pizzas_id"
                            >
                        </div>
                    </div>

                    <div class="row mb-3">

                        <label for="size" class="form-label">Tamaño :</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="building" /></div>
                            <input type="text" class="form-control" id="size" placeholder="Tamaño Pizza Size"
                            v-model='pizza_size.size'>
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="price" class="form-label">Precio Pizza Size :</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="bank" /></div>
                            <input type="text" class="form-control" id="price" placeholder="Pizza Precio"
                            v-model='pizza_size.price'>
                        </div>
                    </div>
                    <button class="btn btn-primary" type="submit">Save</button>
                    <button class="btn btn-secondary mx-2" @click="cancel">Cancel</button>
                </form>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import Swal from 'sweetalert2'

export default{
    name: 'EditarPizza_Size',
    data(){
        return{
            pizza_size:{
                id:0,
                pizzas_id:'',
                size:'',
                price:0
            },
            pizzas: [],
            id:0
        }
    },
    methods: {
        cancel(){
            this.$router.push({name: 'Pizza_Sizes'})
        },
        async savePizza_Size(){
            
            const res = await axios.post(`http://127.0.0.1:8000/api/pizza_sizes`, this.pizza_size)
            console.log(res);
            if (res.status == 200){
                this.$router.push({name: 'Pizza_Sizes'})
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Pizza size has been updated',
                    showConfirmButton: false,
                    timer: 2000
                })
            }
        }
    },
    mounted(){
        axios.get(`http://127.0.0.1:8000/api/pizzas`)
        .then(response => {
            this.pizzas = response.data.pizzas
        })
        this.pizza_size.id = Math.floor(Math.random() * 1000);
    },
}

</script>