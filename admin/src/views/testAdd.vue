<template>
    <div class="test_add">
        <button @click="add()">添加文章</button>
        <button @click="getList()">获取文章列表</button>
    </div>
</template>

<script>
export default {
    methods: {
        add() {
            let article = {
                title: '测试',
                content: '这是测试文本啊',
                label: 'life'
            }
            this.$axios.post('http://localhost:3000/api/addArticle', article)
                .then( (res) =>{
                    console.log(res)
                })
                .catch( (err) => {
                    console.log(err)
                }) 
        },
        getList() {
            this.$axios.get('http://localhost:3000/api/page/1')
                .then( (res) =>{
                    console.log(res)
                })
                .catch( (err) => {
                    console.log(err)
                }) 
        }
    }
}
</script>

<style lang="scss" scoped>
.test_add{
    button{
        width: 100px;
        height: 40px;
    }
}    
</style>