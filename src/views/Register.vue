<template>
<div class="container vh-100 d-flex align-items-center">
    <div class="row w-100 d-flex justify-content-between align-items-center">
        <div class="col-12 col-md-6 col-lg-5">
            <Navbarlogin />
        </div>
        <div class="col-12 col-md-6 col-lg-5">
            <Registerform />
        </div>
        
    </div>
    </div>
</template>

<script>
import Navbarlogin from '../components/Navbarlogin';
import Registerform from '../components/Registerform.vue';

export default {
    name : 'Register',
    components: {
        Navbarlogin,
        Registerform
    }
}

</script>
