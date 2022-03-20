<template>
<div>
    <button type="button" @click="changeData">자식컴포넌트 데이터 변경</button>
</div>
</template>
<script>
export default {
    name: 'ExampleVue',
    components: {},
    data() {
        return{
        msg : '자식 컴포넌트로부터 보내는 메시지',
        };
    },
    setup() {}, 
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        changeData(){
            this.msg = "자식컴포노ㅓㄴ트에서 변경되었습니다"
        }
    }
}
</script>