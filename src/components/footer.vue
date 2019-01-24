<template>
    <div id="footer">
        <div id="top">
            <div class="grid">
                &copy;Copyright 2017 <span>Thought</span>Works
            </div>
        </div>
        <div id="bottom"></div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    #footer {
        height: 10vh;
        width: 100vw;
        position: fixed;
        bottom: 0;
        box-shadow: 0 -5px 3px #F1F1F1;
        z-index: 999;
    }
    #top {
        background-color: white;
        height: 40%;
        line-height: 200%;
        text-align: center;
    }
    #bottom {
        background-color: #F1F1F1;
        height: 60%;
    }
    span {
        font-weight: bold;
    }
</style>