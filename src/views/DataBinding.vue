<template>
<div>
 <h1>{{temp}}</h1>
 <form>
     <input type="text" v-model="temp" />
 </form>
</div>
</template>
<script>
export default {
    name: 'DataBinding',
    components: {},
    data() {
        return{
        temp: 'hello',
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
    }
}
</script>