<template>
<div class="container vh-100 d-flex align-items-center">
    <div class="row w-100 d-flex justify-content-between align-items-center">
        <div class="col-12 col-md-6 col-lg-5">
            <Navbarlogin />
        </div>
        <div class="col-12 col-md-6 col-lg-5">
            <LoginForm />
        </div>
        
    </div>
    </div>
</template>

<script>
import Navbarlogin from '../components/Navbarlogin';
import LoginForm from '../components/LoginForm.vue'

export default {
    name : 'Login',
    components: {
        Navbarlogin,
        LoginForm
    }
}

</script>
