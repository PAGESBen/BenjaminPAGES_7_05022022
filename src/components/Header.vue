<template>
    <!-- <div class="navbar navbar-expand-md navbar-light">
        <a id="logo" class="navbar-brand w-50" href="#">
            <img src="../assets/logos/icon-left-font-monochrome-black.svg" class="img-fluid" alt="Logo Groupomania">
        </a>
        <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbar-content">
            <span class="navbar-toggler-icon"></span>
        </button>
        <nav class="collapse navbar-collapse" id="navbar-content">
            <ul class="navbar-nav ms-auto">
                <li class="nav-item"><a class="nav-link" href="#">Feed</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Messagerie</a></li>
                <li class="nav-item"><a class="nav-link" href="#">Profil</a></li>
            </ul>
        </nav>
    </div> -->

<div class="w-100">
  <b-navbar toggleable="md" type="dark" variant="primary">
    
    <b-navbar-brand href="#">
      <img class="w-50 img-fluid" src="../assets/logos/icon-left-font-monochrome-black.svg" alt="Logo Groupomania">
    </b-navbar-brand>

    <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

    <b-collapse id="nav-collapse" is-nav>
      <b-navbar-nav>
        <b-nav-item href="#">Feed</b-nav-item>
        <b-nav-item href="#">messages</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">
        <b-nav-item-dropdown right>
          <!-- Using 'button-content' slot -->
          <template #button-content>
            <em class="px-2">
              <b-icon icon="person-bounding-box" variant="dark"></b-icon>
            </em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#">Sign Out</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>
    </b-collapse>
  </b-navbar>
</div>

</template>

<style scoped>

</style>

<script>

export default {
    name : 'Header', 
    data : function () {
        return {
        }
    }
}

</script>
