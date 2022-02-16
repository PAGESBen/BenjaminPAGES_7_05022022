<template>
    <form>
        <h1 class="h2">Identifiez-vous</h1>
        <div class="form-group">
            <label for="exampleInputEmail1">Email address</label>
            <input type="email" class="form-control" id="InputEmail" aria-describedby="emailHelp" placeholder="Enter email">
        </div>
        <div class="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input type="password" class="form-control" id="InputPassword" placeholder="Password">
        </div>
        <button type="submit" class="btn btn-primary">Valider</button>
        <router-link to="/register" class="ml-3">Je n'ai pas encore de compte</router-link>
    </form>
</template>

<script>

export default{
    name : 'LoginForm'
}
</script>

<style scoped>

</style>