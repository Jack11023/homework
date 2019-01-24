<template>
    <div id="header">
        <div class="grid">
            <div id="avater"></div>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style>
    #header {
        height: 15vh;
        background-color: white;
        box-shadow: 1px 3px 5px #ccc;
        position: relative;
        background: url('../assets/logo/logo.svg') center center no-repeat;
        background-size: 12%;
    }
    #avater {
        width: 40px;
        height: 40px;
        border-radius: 50% 50%;
        position: absolute;
        margin: auto;
        top: 0;
        bottom: 0; 
        right: 10%;
        background: url('../assets/logo/avatar.jpg') 50% 50% no-repeat;
        background-size: 100%;
    }
</style>