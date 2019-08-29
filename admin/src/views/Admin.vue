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
                    <el-menu :default-openeds="['1']">

                        <el-menu-item index="1" style="padding: 0">
                            <i class="el-icon-message"></i>
                            <router-link :to="{name: 'articleList'}">
                                <span>文章列表</span>
                            </router-link>
                        </el-menu-item>

                        <el-menu-item index="2" style="padding: 0">
                            <i class="el-icon-message"></i>
                            <router-link :to="{name: 'editArticle'}">
                                <span>文章添加</span>
                            </router-link>
                        </el-menu-item>

                    </el-menu>

                    <!-- 用户退出 -->
                    <div class="logout">
                        <h5 :class="{'active': isActive}" @click="logout()">
                            <i class="el-icon-switch-button" style="margin-right: 15px"></i>
                            <span>LOGOUT</span>
                        </h5>
                        <p>@2019 Copyright by Mao</p>

                        <el-dialog
                            title="提示"
                            :visible.sync="dialogVisible"
                            width="30%"
                            :before-close="handleClose">
                            <span>确认退出登录？</span>
                            <span slot="footer" class="dialog-footer">
                                <el-button @click="dialogVisible = false">取 消</el-button>
                                <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
                            </span>
                        </el-dialog>
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
            avaterUrl: 'https://img.zcool.cn/community/031802e5be42ab0a801209252c2403d.jpg@80w_80h_1c_1e_1o_100sh.jpg',
            isActive: false,
            dialogVisible: false
        }
    },
    methods: {
        logout(){
            this.isActive = true
            this.dialogVisible = true
        },
        handleClose(data) {
            this.$confirm('确认关闭？')
            .then(data => {
                console.log(data)
            })
            .catch(err => {
                console.log(err)
            });
      }
    }
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
    background: rgb(74, 163, 253);
    border-right: none;
}
.admin .el-menu li{
    padding: 0;
    width: 200px;
    margin-left: 100px; 
    border-radius: 30px 0 0 30px;
}
.admin .el-menu li:hover{
    border-radius: 30px 0 0 30px;
}
.admin .el-menu .el-menu-item.is-active{
    border-radius: 30px 0 0 30px;
    background: #fff;
}
.admin .el-menu .el-menu-item.is-active i{
    border-radius: 30px 0 0 30px;
    background: #fff;
}
.admin .el-menu .el-menu-item.is-active a{
    color: rgb(74, 163, 253);
}
.admin .el-menu li:hover i{
    color: rgb(74, 163, 253);
}
.admin .el-menu li:hover a{
    color: rgb(74, 163, 253);
}
.admin .el-menu li i{
    color: #fff;
    margin-left: 10px;
}
.admin .el-menu li a{
    color: #fff;
    text-decoration: none;
}
/* 退出登录 */
.admin .logout h5{
    width: 250px;
    margin-left: 50px;
    border-radius: 30px 0 0 30px;
    cursor: pointer;
}
.admin .logout h5.active{
    color: rgb(74, 163, 253);
    background: #fff;
}
.admin .logout h5:hover{
    color: rgb(74, 163, 253);
    background: #fff;
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