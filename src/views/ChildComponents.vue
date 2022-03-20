<template>
<div>
    <button type="button" @click="sendFromChild">zz</button>
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
        sendFromChild(){
            this.$emit("sendMessage",this.msg);
        }
    }
}
</script>