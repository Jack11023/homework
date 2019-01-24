<template>
    <div id="body" class="grid">
        <ybaside></ybaside>
        <router-view></router-view>
    </div>
</template>

<script>
import ybaside from './aside'
    export default {
        components:{
            ybaside
        }
    }
</script>

<style scoped>
    #body {
        background-color: #F1F1F1;
        display: flex;
    }
</style>