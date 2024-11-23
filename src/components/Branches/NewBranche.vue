<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">New</h1>
        <div class="card">
            <div class="card-header- fw-bold">
                Branche
            </div>
            <div class="card-body">
                <form @submit.prevent="saveBranche">
                    <div class="row mb-3">
                        <label for="id" class="form-label">Codigo</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag"/></div>
                            <input type="text" class="form-control" id="id" placeholder="Id " disabled
                            v-model="branche.id"
                            >

                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="name" class="form-label">Name Branche :</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="idbadge" /> </div>
                            <input type="text" class="form-control " id="name" placeholder="Name"
                            v-model="branche.name">
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="name" class="form-label">Address Branches :</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="idbadge" /> </div>
                            <input type="text" class="form-control " id="address" placeholder="Address"
                            v-model="branche.address">
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
    name: 'EditarBranche',
    data() {
    return {
        branche: {
            name:'',
            address:'',
        },
      
    }
},

    methods:{
        cancel(){
            this.$router.push({name: 'Branches'})
        },
        async saveBranche(){
            this.branche.id=this.id
            const res = await axios.post(`http://127.0.0.1:8000/api/branches/`, this.branche)
            console.log(res);
            if (res.status==200){
                this.$router.push({name: 'Branches'})
                Swal.fire({
                    position: 'top-end',
                    icon:'success',
                    title: 'Branche has been updated',
                    showConfirmButton: false,
                    timer:2000
                })
            }
        }
    },

    mounted() {
    axios.get('http://127.0.0.1:8000/api/branches/')
        .then(response => {
            this.branches = response.data.branches
        })
},
}
</script>

