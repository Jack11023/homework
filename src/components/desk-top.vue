<template>
    <div id="top">
            <div class="top-flex flex-left" style="background-color:#FFB900;">
                <span class="left-text">Building</span>
                <span class="icon-cog icon-box"></span>
                <span class="right-text">3</span>
            </div>
            <div class="top-flex flex-left" style="background-color:#7FBC39">
                <span class="left-text">ldle</span>
                <span class="icon-coffee icon-box"></span>
                <span class="right-text">5</span>
            </div>
            <div class="top-flex flex-right">
                <ul class="clearfix">
                    <li>
                        <div class="flex-right-top">ALL</div>
                        <div class="flex-right-bottom">8</div>
                    </li>
                    <li>
                        <div class="flex-right-top">PHYSICAL</div>
                        <div class="flex-right-bottom">4</div>
                    </li>
                    <li>
                        <div class="flex-right-top">VIRTUAL</div>
                        <div class="flex-right-bottom">4</div>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script>
    export default {

    }
</script>

<style scoped>
@media screen and (min-width: 1200px){
    .flex-right>ul li {
        height: 100%;
        list-style: none;
        float: left;
        width: 33.33%;
        background-color: #fff; 
    }
    .flex-right-top {
        padding: 23px 0 28px 0;
        font-size: 12px;
    }
    .flex-right-bottom {
        font-size: 28px;
        font-weight: bold;
    }
}
@media screen  and (max-width: 1200px){
    .flex-right>ul li {
        padding: 20px 25px;
        box-sizing: border-box;
        width: 100%;
        list-style: none;
        height: 33.33%;
        background-color: #fff; 
    }
    .flex-right-top {
        font-size: 16px;
        float: left;
    }
    .flex-right-bottom {
        font-size: 23px;
        font-weight: bold;
        float: right;
    }
    .clearfix::after{
        display:block;
        clear:both;
        content:"";
        visibility:hidden;
        height:0;
    }
}
#top {
    display: flex;
}
    .top-flex {
        flex: 1;
        margin-right: 25px;
    }
    .top-flex.flex-right {
        margin: 0;
    }
    .left-text {
        color: #fff;
        font-weight: bold;
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 1;
        padding: 5px 0 0 2px;
        text-align: left;
        text-indent: 1em;
        line-height: 3em;
    }
    .icon-box {
        flex: 2;
    }
    .right-text {
        -webkit-box-flex: 1;
        -ms-flex: 1;
        flex: 0.5;
        color: white;
        font-weight: 90px;
        font-size: 50px;
        line-height: 3em;
        text-align: left;
    }
    .flex-left {
        display: flex;
        overflow: hidden;
    }
    .icon-box::before {
        display: block;
        font-size: 140px;
        -webkit-transform: translateY(-10px);
        transform: translateY(-12px);
        color: #FFC328;
    }
    .icon-coffee::before {
        color: #94C75A;
    }
    .top-flex ul {
        height: 100%;
        margin: 0;
        padding: 0;
    }
</style>