<template>
    <div class="single">
        <h1>Page Single {{ $route.params.id }}</h1>
    </div>
</template>

<script>

//import { getArticlesByID } from '../core/api'
import * as API from '../core/api'

export default {
    name :'Single',
    created() {   
        API.getArticleByID(this.$route.params.id)
    },
    mounted() {
        console.log(this.$route)
    }
}
</script>