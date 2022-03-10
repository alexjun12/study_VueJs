<template>
    <div>
        <input type="text" v-model="valueModel "/>
        <input type="number" v-model.number="valueModel2"/>
        <textarea v-model="valueModel3"></textarea>
        <select v-model="city">
            <option value="02">서울</option>
            <option value="21">부산</option>
            <option value="064">제주</option>
        </select>
            <input type="checkbox" v-model ="checked" />
        <label>
            {{checked}}
        </label>
    <div>
        <label><input type="radio" v-bind:value="radioValue1" v-model="picked" />서울</label>
        <label><input type="radio" v-bind:value="radioValue2" v-model="picked" />부산</label>
        <label><input type="radio" v-bind:value="radioValue3" v-model="picked" />제주</label>
        <br>
        <span>선택한 지역 : {{picked}}</span>
    </div>
    </div>
</template>
<script>
export default {
    name: 'DataBinding', 
    components: {},
    data() {
        return{
            valueModel: 'South Korea',
            valueModel2: 12,
            valueModel3: '안녕',
            city: "02",
            checked: true,
            picked: "",
            radioValue1: "서울",
            radioValue2: "부산",
            radioValue3: "제주",
        };
    },
    setup() {},
    created() {},
    mounted() {
        console.log(this.valueModel2);
    },
    unmounted() {},
    methods: {}
}
</script>