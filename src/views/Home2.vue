<template>
    <div class="row">
        <div class="col-2">
            <h1 class="profil"></h1>
        </div>
        <div class="col-10">
            <div v-for="message in posts" :key="message.postId">
                {{message.user}}
                {{message.message}}
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name : 'Home2',
    data : function () {
        return {
            posts :  [
                {
                    postId : '123',
                    user : 'toto', 
                    message : 'message', 
                    comments : [
                        {
                            user : 'tata', 
                            message : 'super message'
                        }, 
                    ]
                }, 
                {
                    postId: '125',
                    user : 'tonton', 
                    message : 'message2', 
                    comments : [
                        {
                            user : 'tatan', 
                            message : 'super message2'
                        }, 
                    ]
                }
            ]
        }
    }
}
</script>