<template>
    <div id="main">
        <deskTop></deskTop>
        <ybsearch></ybsearch>
        <mainBox></mainBox>
    </div>
</template>
<script>
import deskTop from './desk-top'
import ybsearch from './search'
import mainBox from './main-box'
import '../assets/font icons/fonts.css'
    export default {
        components: {
            deskTop,
            ybsearch,
            mainBox
        }
    }
</script>

<style scoped>
    #main {
        margin: 2% 5% 0 1.5%;
        background-color: #F1F1F1;
        width: 100%;
    }
</style>