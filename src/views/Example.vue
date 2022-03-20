<template>
    <h1>{{parentMsg}}</h1>
    <button type="button" @click="showData">부모버튼</button>
    <ChildComponents ref="childComponent" />
</template>
<script>
import ChildComponents from "./ChildComponents.vue"
export default {
    name: 'ExampleVue',
    components: {ChildComponents},
    data() {
        return{
            parentMsg: "",
        };
    },
    computed: {
        msg(){
            return this.$refs.childComponent.msg;
        }
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        showData(){
            alert(this.msg);
        }
    }
}
</script>