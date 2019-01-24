<template>
    <div id="Res" ref="res">
        <p>Separate multiple resource name with commas</p>
        <input type="text" v-model="name">
        <div class="button">
            <div @click="submit()">Add Resource</div>
            <div @click="cancel()">Cancel</div>
        </div>
        <span class="del" @click="changeStatus()">x</span>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                status: true,
                name: ''
            }
        },
        methods: {
            changeStatus() {
                this.$refs.res.classList.add('hide');
            },
            submit() {
                if(!this.name.trim()) {
                    return;
                }
                let names
                try{
                    names = this.name.split(',')
                }catch(e) {
                    console.log(e)
                }
                let option = this.$props.option;
                option.resources = option.resources.concat(names)
                let id = option.id
                fetch(`http://localhost:3001/agents/${id}`,{
                    method: 'put',
                    "headers": {
                        "Content-Type": "application/json"
                    },
                    "body": JSON.stringify(option)
                })
                this.$refs.res.classList.add('hide');
            },
            cancel() {
                this.name = ''
            }
        },
        props:['option']
    }
</script>

<style scoped>
    .hide {
        display: none;
    }
    #Res {
        width: 450px;
        border: 1px solid #8ADCE9;
        background: white;
        position: absolute;
        z-index: 999;
        left: 8%;
        top: 100%;
        padding: 5px 15px;
        box-shadow: 0 3px 5px rgba(0,0,0,30%)
    }
    #Res::before,#Res::after {
        position: absolute;
        display: block;
        width: 0;
        height: 0;
        border: solid transparent;
        pointer-events: none;
        content: "";
        border-color: rgba(136, 183, 213, 0);
    }
    #Res::before {    
        border-bottom-color: #c2e1f5;
        border-width: 12px;
        left: 20px;
        bottom: 100%;
    }
    #Res::after {
       border-bottom-color: #fff;
        border-width: 10px;
        left: 22px;
        bottom: 100%;
    }
    #Res p {
        text-align: left;
        color: #878787;
        font-weight: 700;
    }
    .del {
            position: absolute;
            font-size: 31px;
            color: #c2e1f5;
            top: 0;
            right: 0;
            margin-right: 12px;
            cursor: pointer;
    }
    #Res input {
        width: 100%;
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        box-shadow: 0 1px 3px #ccc inset;
        height: 30px;
    }
    #Res .button {
        margin-top: 20px;
    }
    #Res .button>div {
        float: left;
        color: white;
        width: 130px;
        padding: 10px 0;
    }
    #Res .button>div:first-child {
        background: #00B4CF;
        margin-right: 20px;
    }
    #Res .button>div:last-child {
        background: #435466;
    }
</style>