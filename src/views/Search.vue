<template>
    <div>
        <select v-model="selectedCity">
            <option :value="city.code" :key="i" v-for="(city, i) in cityList">{{city.name}}</option>
        </select>
        <input type="text" v-model="userName" @keyup.enter="searchUserList" />
        <button type="button" @click="searchUserList">조회</button>
    </div>
    <div>
        <table>
            <thead>
                <tr>
                    <th>이름</th>
                    <th>나이</th>
                    <th>직업</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(person,i) in userList">
                    <td>{{person.name}}</td> 
                    <td>{{person.age}}</td> 
                    <td>{{person.job}}</td> 
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
export default {
    name: 'VueExample',
    components: {},
    data() {
        return{
        selectedCity:"",
        cityList : [
            {name: "서울", code: "02"},
            {name: "부산", code: "21"},
            {name: "제주", code: "064"},
        ],
        userName: "",
        userList: [],
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        searchUserList(){
            const params = {
                selectedCity: this.selectedCity,
                userName: this.userName,
            }
            this.userList = this.getUserList(params);
        },
        getUserList(params){
            console.log(params);

            let list = [
                {name: "조준영", age: 24, job: "개발자"},
                {name: "김형국", age: 24, job: "개발자"},
                {name: "이주현", age: 24, job: "개발자"},
                {name: "유다연", age: 23, job: "개발자"},
            ];
 
            return list;
        },
    }
}
</script>