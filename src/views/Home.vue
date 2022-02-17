<template>

    <div>
        <div class="container-fluid p-0">
            <header class="row">
                <Header />
            </header>
        </div>

        <div class="container-md">
            <main class="row my-3">
                <h1 class="h2">Feed</h1>
                <Card />
            </main>
        </div>

    </div>

</template>

<script>
import Card from '../components/Card.vue'
import Header from '../components/Header.vue'

export default {
    name : 'Home', 
    components : {
        Header,
        Card
    }
}

</script>
