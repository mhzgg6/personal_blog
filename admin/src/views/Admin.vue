<template>
    <div class="admin">
        <el-container>
            <!-- <el-header>Header</el-header> -->
            <el-container>
                <!-- 开始    侧边栏部分 -->
                <el-aside width="300px" style="background-color: rgb(74, 163, 253)">
                    <div class="logo">
                        <h5>Personal blog</h5>
                        <div class="avater">
                            <img :src="avaterUrl" alt="" width="100%" height="100%">
                        </div>
                        <p>毛啊毛</p>
                    </div>
                    <el-menu :default-openeds="['1', '3']">

                        <el-submenu index="1">
                            <template slot="title">
                                <i class="el-icon-message"></i>
                                <router-link :to="{name: 'articleList'}">
                                    <span>文章列表</span>
                                </router-link>
                            </template>
                        </el-submenu>

                        <el-submenu index="2">
                            <template slot="title">
                                <i class="el-icon-menu"></i>
                                <router-link :to="{name: 'editArticle'}">
                                    <span>文章添加</span>
                                </router-link>
                            </template>
                        </el-submenu>

                        <el-submenu index="3">
                            <template slot="title"><i class="el-icon-setting"></i>头像上传</template> 
                        </el-submenu>
                    </el-menu>

                    <!-- 用户退出 -->
                    <div class="logout">
                        <h5>Personal blog</h5>
                        <p>@2019 Copyright by Mao</p>
                    </div>
                </el-aside>
                <!-- 结束    侧边栏部分 -->

                <!-- 开始    用户状态部分 -->
                <!-- 结束    用户状态部分 -->

                <!-- 开始    内容部分 -->
                <el-main>
                    <router-view></router-view>
                </el-main>
                <!-- 结束    内容部分 -->
            </el-container>
        </el-container>
    </div>
</template>

<script>
// import articleList from '../componnets/articleList'
export default {
    name: 'admin',
    data() {
        const imgDir = '../assets/sign_in/'
        return {
            avaterUrl: 'https://img.zcool.cn/community/031802e5be42ab0a801209252c2403d.jpg@80w_80h_1c_1e_1o_100sh.jpg'
        }
    },
    // components: {
    //     articleList
    // }
}
</script>

<style>
.admin .el-container{
    width: 100%;
    height: 100%;
}
.admin .el-main{
    width: 100%;
    height: 100%;
    background: #f7f8fc;
}
.admin .el-header{
    background: skyblue;
}
.admin .el-menu{
    height: calc(100% - 400px);
}
</style>

<style lang="scss" scoped>
.admin{
    width: 100%;
    height: 100%;
    .logo{
        width: 100%;
        height: 300px;
        color: #fff;
        text-align: center;
        h5{
            line-height: 100px;
            
        }
        .avater{
            width: 80px;
            height: 80px;
            margin-left: 110px;
            img{
                border-radius: 50%;
            }
        }
        p{
            line-height: 60px;

        }
    }
    .logout{
        width: 100%;
        height: 100px;
        color: #fff;
        text-align: center;
        h5{
            line-height: 60px;
        }
        p{
            font-size: 12px;
            line-height: 40px;
        }
    }
}
</style>