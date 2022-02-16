<template>
    <form>
        <h1>Formulaire d'inscription</h1>
        <div class="form-group">
            <label for="InputFirstName">Prenom</label>
            <input type="text" class="form-control" id="FirstName" aria-describedby="Prenom" placeholder="Prénom">
        </div>
        <div class="form-group">
            <label for="InputLastName">Prenom</label>
            <input type="text" class="form-control" id="LastName" aria-describedby="Nom" placeholder="Nom">
        </div>
        <div class="form-group">
            <label for="InputEmail">Email address</label>
            <input type="email" class="form-control" id="InputEmail" aria-describedby="email" placeholder="email">
        </div>
        <div class="form-group">
            <label for="InputPassword">Password</label>
            <input type="password" class="form-control" id="InputPassword" placeholder="Mot de passe">
        </div>
        <button type="submit" class="btn btn-primary">Valider</button>
        <router-link to="/register" class="ml-3">J'ai déjà un compte</router-link>
    </form>
</template>

<script>

export default{
    name : 'Registerform'
}
</script>

<style scoped>

</style>