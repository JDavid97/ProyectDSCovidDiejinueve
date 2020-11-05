<template>
    <div>
        <h1>Layout marco de app</h1>
        <ul>
            <li>
                <b-link to="/cvd/map">Map</b-link>
            </li>
            <li>
                <b-link to="/cvd/dashboard">Dashboard</b-link>
            </li>
            <li>
                <b-link to="/cvd/doctor">Doctor</b-link>
            </li>
            <li>
                <b-link to="/cvd/paciente">Paciente</b-link>
            </li>
            <li>
                <b-link to="/cvd/admin">Admin</b-link>
            </li>
        </ul>
        <DashboardContent> </DashboardContent>
    </div>
</template>

<script>
import DashboardContent from "./Content.vue";
export default {
    name : 'DashboardLayout',
    components:{
        DashboardContent
    }
}
</script>