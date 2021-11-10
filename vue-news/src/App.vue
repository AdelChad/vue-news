<template>
    <div id="news-app">
        <nav class="menu m-8">
        <router-link class="underline" to="/">Home</router-link>
        <router-link to="/about">About</router-link>
        <router-link to="/news/id">Single</router-link>
        </nav>

        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name :'App'
}
</script>