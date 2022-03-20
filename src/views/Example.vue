<template>
    <h1>{{parentMsg}}</h1>
    <ChildComponents @sendMessage="sendMessage" />
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
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        sendMessage(data){
            this.parentMsg = data;
        }
    }
}
</script>