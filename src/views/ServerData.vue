<template>
    <div>
        <button type="button" @click="getProductList">조회</button>
        <table>
            <thead>
                <tr>
                    <th>제품먕</th>
                    <th>가격</th>
                    <th>배송료</th>
                    <th>카테고리</th>
                </tr>
            </thead>
            <tbody>
                <tr :key="i" v-for="(product, i) in productList">
                    <td>{{product.product_name}}</td>
                    <td>{{product.price}}</td>
                    <td>{{product.delivery_price}}</td>
                    <td>{{product.category}}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
import axios from 'axios';

export default {
    name: 'ServerData',
    components: {},
    data() {
        return{
        productList: [],
        };
    },
    setup() {},
    created() {},
    mounted() {},
    unmounted() {},
    methods: {
        async getProductList() {
            this.productList = await this.api('https://1fd3a76e-bf93-4139-8c5d-b7000888b7da.mock.pstmn.io/productList','get',{});
            console.log(this.productList);
        },
        async api(url, method, data){
            return (await axios({
                method: method,
                url: url,
                data: data,
            }).catch(e => {
                console.log(e);
            })).data;
        }
    }
}
</script>