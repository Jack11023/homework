<template>
    <div id="aside" class="hide">
        <ul>
            <li ><span class="icon-dashboard"></span>DASHBOARD</li>
            <li ><span class="icon-sitemap"></span>AGENT</li>
            <li ><span class="icon-boat"></span>MY CRUISE</li>
            <li ><span class="icon-life-bouy"></span>HELP</li>
        </ul>
        <div class="adbot">
            <h3>History</h3>
            <ul>
                <li>sasdasdasda</li>
                <li>sdadas</li>
            </ul>
        </div>
    </div>
</template>

<script>
import '../assets/font icons/fonts.css'
    export default {

    }
</script>

<style scoped>
@media screen and (max-width: 1024px){
    .hide {
        display: none;
    }
}
    #aside {
        width: 15%;
        background-color: #2D4054; 
        height: 100vh;
        padding: 2% 5% 0 0; 
        position: relative;
    }
    #aside>ul {
        margin: 0;
        padding: 0;
        list-style: none;
    }
    ul li {
        text-align: left;
        padding: 10% 0;
        padding-left: 17%; 
        color: white;
    }
    ul li span {
        padding-right: 10px;
    }
    .adbot {
        position: absolute;
        bottom: 10vh;
        z-index: 1;
        margin-bottom: 20px;
    }
    .adbot>h3 {
        font-size: 16px;
        color: white;
    }
    .adbot>ul {
        margin: 0;
    }
    .adbot>ul li {
        padding: 5px 0;
         text-align: left;
         font-size: 12px;
    }
</style>