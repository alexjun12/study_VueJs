<template>
<nav>
    <router-link to="/example">Example</router-link> 
</nav>
    <div v-html="htmlString">
    </div>
</template>
<script>
export default {
    name: 'DataBinding',
    components: {},
    data() {
        return{
            htmlString: '<p style="color:red;">This is a red string</p>',
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {}
}
</script>