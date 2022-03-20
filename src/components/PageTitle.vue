<template>
    <h1 class="page-title">{{title}}</h1>
</template>
<script>
export default {
     props: {
         title: {
             type: String,
             default: '페이지 타이틀 입니다.'
         }
     }
}
</script>
<style scoped>
.page-title {
    padding-left:10px;
    text-align: left;
    border-left: 3px solid green;
}
</style>