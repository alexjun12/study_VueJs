<template>
<div>
 <h1>{{temp}}</h1>
 <div>{{temp2}}</div>
</div>
</template>
<script>
export default {
    name: 'DataBinding',
    components: {},
    data() {
        return{
        temp: 'hello',
        temp2: 'world',
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