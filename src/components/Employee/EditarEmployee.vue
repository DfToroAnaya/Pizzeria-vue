<template>
    <div class="container text-start">
        <h1 class="text-primary fw-bold">Editar</h1>
        <div class="card">
            <div class="card-header- fw-bold">
                Employee
            </div>
            <div class="card-body">
                <form @submit.prevent="updateEmployee">
                    <div class="row mb-3">
                        <label for="id" class="form-label">Codigo</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="tag"/></div>
                            <input type="text" class="form-control" id="id" placeholder="Id Employee" disabled
                            v-model="employee.id"
                            >

                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="name" class="form-label">Nombre :</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="user" /> </div>
                            <select class="form-select" v-model="employee.user_id">
                                <option selected value="0">Seleccione un Employee</option>
                                <option v-for="user in users" v-bind:value="user.id">{{ user.name }}</option>
                            </select>
                        </div>
                    </div>

                    <div class="row mb-3">
                    <label for="position" class="form-label">Position :</label>
                    <div class="input-group">
                        <div class="input-group-text"> <font-awesome-icon icon="briefcase" /> </div>
                        <select class="form-select" v-model="employee.position">
                            <option selected value="">Seleccione una posición</option>
                            <option value="Cajero">Cajero</option>
                            <option value="Administrador">Administrador</option>
                            <option value="Cocinero">Cocinero</option>
                            <option value="Mensajero">Mensajero</option>
                        </select>
                    </div>
                     </div>

                    <div class="row mb-3">
                        <label for="name" class="form-label">Identification Employee :</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="idbadge" /> </div>
                            <input type="text" class="form-control " id="identification_number" placeholder="Identification Employee"
                            v-model="employee.identification_number">
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="name" class="form-label">Salary Employee:</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="money-bill" /> </div>
                            <input type="text" class="form-control " id="salary" placeholder="Salary Employee"
                            v-model="employee.salary">
                        </div>
                    </div>

                    <div class="row mb-3">
                        <label for="name" class="form-label">Hire Date:</label>
                        <div class="input-group">
                            <div class="input-group-text"> <font-awesome-icon icon="calendar" /> </div>
                            <input type="date" class="form-control " id="hire_date" placeholder="Hire Date "
                            v-model="employee.hire_date">
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
    name: 'EditarEmployee',
    data(){
        return{
            employee:{
                id:0,
                name:'',
                position:'',
                identification_number:'',
                salary:'',
                hire_date:''
            },
            users:[]
         
        }
    },
    methods:{
        cancelar(){
            this.$router.push({name: 'Employees'})
        },
        async updateEmployee(){
            const res = await axios.put(`http://127.0.0.1:8000/api/employees/${this.employee.id}`, this.employee)
            if (res.status==200){
                this.$router.push({name: 'Employees'})
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
        this.employee.id=this.$route.params.id;
        axios.get(`http://127.0.0.1:8000/api/employees/${this.employee.id}`)
        .then(response =>{
            this.employee=response.data.employee;
            this.users=response.data.users
           
        })
    },
}
</script>