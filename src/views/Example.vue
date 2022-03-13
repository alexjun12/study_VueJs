<template>
    <div>
        <!-- <img v-bind:src="temp" /> -->
        <input type="text" v-model="textValue" />
        <button type="button" v-bind:disabled="textValue===''" >Click</button>
    </div>
</template>
<script>
export default {
    name: 'ExampleVue',
    components: {},
    data() {
        return{
        temp : 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/Temp_plate_blue.svg/601px-Temp_plate_blue.svg.png',
        textValue: "",
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