<template>
    <div class="container">
        <h1 class="text-start">Listado de Employees | 
            <button @click="newEmployee()"
                    class="btn btn-success mx-2">
                    <font-awesome-icon icon="plus"/>
            </button>
        </h1>
        
        <table class="table">
            <thead>
                <tr>
                <th scope="col">Code</th>
                <th scope="col">User</th>
                <th scope="col">Position</th>
                <th scope="col">identification</th>
                <th scope="col">Salary</th>
                <th scope="col">Hire Date</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(employee,index) in employees" :key="index">
                    <th scope="row">{{ index+1 }}</th>
                    <td>{{employee.name}}</td>
                    <td>{{employee.position}}</td>
                    <td>{{employee.identification_number}}</td>
                    <td>{{employee.salary}}</td>
                    <td>{{employee.hire_date}}</td>
                    <td>
                        <button @click="deleteEmployee(employee.id)"
                        class="btn btn-danger mx-2">
                        <font-awesome-icon icon="trash"/>
                    </button>
                    <button @click="editEmployee(employee.id)"
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

    name: 'Employee',
    data(){
        return{
            employees:[]
        }
    },
    methods:{
        deleteEmployee(codigo){
            Swal.fire({
                title: `Do you want to delete the Employee with id ${codigo}?`,
                showCancelButton: true,
                confirmButtonText: `Delete`,
            }).then((result) =>{
                if (result.isConfirmed) {
                    
                    axios.delete(`http://127.0.0.1:8000/api/employees/${codigo}`)
                    .then(response =>{
                        if (response.data.success){
                            Swal.fire('Deleted!!', '', 'success')
                            this.employees=response.data.employees
                        }
                    })
                }
            })
        },
        editEmployee(id){
            this.$router.push({name: 'EditarEmployee', params: {id: `${id}`}})
        },
        newEmployee(){
            this.$router.push({name: 'NewEmployee'});
        }
    },
    mounted(){
        axios
        .get('http://127.0.0.1:8000/api/employees')
        .then(response => (this.employees=response.data.employees))
    },
}
</script>