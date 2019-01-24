<template>
    <div id="search">
        <div class="fl">
            <ul>
                <li>All</li>
                <li>Physical</li>
                <li>Virtual</li>
            </ul>
            <div id="text">
                <span class="icon-search"></span>
                <input id="ipt" type="text">
            </div>
        </div>
        <div class="fr">
            <span class="icon-th-card icon-fr"></span>
            <span class="icon-th-list icon-fr" style="color:#00B4CF"></span>
        </div>
    </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
    #search {
        background: #fff;
        height: 7vh;
        margin: 20px 0;
    }
    .fl {
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 50%;
        height: 100%;
    }
    .fr {
        float: right;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100%;
        margin-right: 10px;
    }
    .fl ul {
        padding: 0;
        margin: 0;
        width: 60%;
        display: flex;
        height: 100%;
        font-size: 0;
    }
    .fl ul li {
        font-size: 16px;
        flex: 1;
        list-style: none;
        border-right: 1px solid #F1F1F1; 
        line-height: 3em;
        height: 100%;
        font-weight: bold;
        color: #6E6E6E;
    }
    #ipt {
        width: 80%;
        padding: 0;
        margin: 0;
    }
    #text {
        background: #F1F1F1;
        margin-left: 20px;
        height: 60%;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #text>.icon-search {
        width: 20%;
    }
    #text>input {
        width: 90%;
        height: 100%;
        border: 0;
        background: #F1F1F1;
    }
    .icon-fr {
        width: 20px;
        height: 100%;
        float: left;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 10px;
        font-size: 19px;
    }
    .icon-fr::before {
        display: block;
    }
</style>