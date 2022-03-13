<template>
    <div>
        <input type="text" v-model="userInfo.name" />
        <input type="text" v-model.number="userInfo.age" />
        <input type="text" v-model="userInfo.job" />
        <button type="button" @click="saveUserInfo">저장</button>
    </div>
</template>
<script>
export default {
    name: 'ExampleVue',
    components: {},
    data() {
        return{
        userInfo : {
            name : '',
            age: 0,
            job: '',
        },
        };
        
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        saveUserInfo(){
            if(this.userInfo.name === ""){
                //return alert("이름을 입력하세요!");
                return this.$swal("이름을 입력하세요!");
            }
            if(this.userInfo.age === 0 || this.userInfo.age === ""){
                return alert("나이를 입력하세요!")
            }
            const r = this.saveData(this.userInfo);
            if(r === "S"){
                alert("사용자 정보 생성 완료");
            }
        },
        saveData(params) {
            console.log(params); 
            const r = "S";
            return r;

        }
    }
}
</script>