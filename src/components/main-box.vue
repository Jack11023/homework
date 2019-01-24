<template>
    <div id="main">
        <ul v-for="(agent, index) in agents" :key="index">
            <li>
                <div class="left dd">
                    <img :src="'../../static/os icons/'+agent.os+'.png'" alt="">
                </div>
                <div class="mid">
                    <div class="mid-top">
                        <span class="icon-desktop"></span>
                        <span class="mdtext">{{agent.name}}</span>
                        <span class="mdtex" v-if="agent.status === 'idle'">{{agent.status}}</span>
                        <span class="mdtex" style="background:#FF9A2A" v-if="agent.status === 'building'">{{agent.status}}</span>
                    </div>
                    <div class="mid-bot">
                        <span class="icon-plus" @click="showResource(index)" ></span>
                        <ul v-for="(resource,ind) in agent.resources" :key="ind">
                            <li :ref="'icons'+index">
                                <span>
                                    {{resource}}
                                </span>
                                <span class="icon-trash" @click="changeStatus(agent,index,ind)">

                                </span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="right">
                    <div class="right-top">
                        <ul>
                            <li>
                                <span class="icon-info rticon"></span>
                                <span class="rttext">{{agent.ip}}</span>
                            </li>
                            <li>
                                <span class="icon-folder rticon"></span>
                                <span class="rttext">{{agent.location}}</span>
                            </li>
                        </ul>
                    </div>
                    <div class="right-bot">
                        <div v-if="agent.type === 'physical'">
                            <span class="icon-deny"></span>
                            <span>Deny</span>
                        </div>
                    </div>
                </div>
            </li>   
            <addres class="hide" :option="agent" :ref="'res'+index"></addres>
        </ul>
    </div>
</template>

<script>
import addres from './add-resource'
    export default {
        data() {
            return {
                agents: []
            }
        },
        components:{
            addres
        },
        methods: {
            getAll() {
                fetch('http://localhost:3001/agents',{
                    method: 'get'
                }).then(response => {
                    return response.json()
                }).then(data => {
                    console.log(data)
                    this.agents  = data;
                })
            },
            changeStatus(agent,index,ind) {
                let option = agent;
                option.resources = option.resources.filter((val, index) => {
                    return index !== ind
                })    
                let id = option.id    
                console.log(option) 
                fetch(`http://localhost:3001/agents/${id}`,{
                    method: 'put',
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify(option)
                })
            },
            showResource(index) {
                console.log(this.$refs['res'+index][0].$el)
                this.$refs['res'+index][0].$el.classList.remove('hide');
            }
        },
        created() {
            this.getAll()
        }
    }
</script>

<style scoped>
@media screen and (min-width: 1200px) {
    .right {
        float: left;
        width: 35%;
        height: 100%;
    }
}
@media screen and (max-width: 1200px){
    .dd {
        display: none!important;
    }
    .right {
        float: left;
        height: 100%;
        width: 35%;
    }
}
    .hide {
        display: none;
    }
    .show {
        display: block;
    }
    #main {
        margin: 0;
        margin-bottom: 25vh;
    }
    #main>ul {
        margin: 0;
        padding: 0;
        position: relative;
    }
    #main>ul>li {
        list-style: none;
        background: white;
        height: 16vh;
        margin-bottom: 20px;
    }
    .left {
        float: left;
        width: 10%;
        height: 100%;
        justify-content: center;
        align-items: center;
        display: flex;
    }
    .left img {
        display: block;
    }
    .mid {
        float: left;
        width: 55%;
        height: 100%;
        text-align: left;
    }
    .mid-top {
        line-height: 3em;
    }
    .mid-bot,.mid-top {
        height: 8vh;
    }
    .mid-top>.icon-desktop::before {
        font-size: 25px;
        color: #ccc;
        display: inline-block;
        transform: translateY(20%);
    }
    .mid-bot>ul,.mid-bot>span {
        float: left;
    }
    .mid-bot ul li {
        list-style: none;
        float: left;
    }
    .right-top,.right-bot {
        height: 8vh;
    }
    .right-top ul li {
        list-style: none;
        float: left;
    } 
    .mid-top .mdtext {
        color: #01B4CF;
        font-weight: bold;
    }
    .mid-top .mdtex {
            margin-left: 20px;
        background: #7FBC39;
        padding: 2px 10px;
        color: white;
        font-size: 14px;
    }
    .mid-bot {
        display: flex;
        align-items: center;
    }
    .mid-bot .icon-plus {
        color: white;
        background: #00B4CF;
        height: 25px;
        width: 25px;
        line-height: 25px;
        text-align: center;
    }
    .mid-bot>ul {
        margin: 0;
        padding: 0;
    }
    .mid-bot>ul li {
        background: #EFEFEF;
        padding: 3px 9px;
        margin: 0 10px;
        font-size: 16px;
        font-weight: bold;
        color: #475869;
    }
    .mid-bot>ul li .icon-trash {
        font-weight: bold;   
    }
    .right {
        text-align: left;
    }
    .right-top>ul {
        margin: 0;
        padding: 0;
        height: 100%;
        line-height: 3em;
    }
    .right-top>ul li {
        margin-right: 20px;
        color: #9F9F9F;
    }
    .right-top>ul li>.rticon {
        margin-right: 2px;
        font-size: 18px;
    }
    .right-top>ul li>.rticon::before {
        display: inline-block;
        transform: translateY(10%);
    }
    .right-top>ul li>.rttext {
        font-size: 15px;
        font-weight: bold;
    }
    .right-bot {
        display: flex; 
        align-items: flex-end;
        justify-content: flex-end;
    }
    .right-bot>div {
        margin: 0 10px 10px 0;
        width: 79px;
        background: #00B4CF;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: white;
    }
</style>