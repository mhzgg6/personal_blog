<template>
  <div class="editArticle">
    <!-- 开始    内容部分 -->
    <h5>新增文章</h5>

    <div class="article article_title">
      <el-row>
        <el-col>
          <span>
            <el-tooltip class="item" effect="dark" content="必填" placement="top-start">
              <i>*</i>
            </el-tooltip>
            标题：
          </span>
        </el-col>
        <el-col>
          <el-input v-model="title" placeholder="文章标题"></el-input>
        </el-col>
      </el-row>
    </div>

    <div class="article article_image">
      <el-row>
        <el-col>
          <span>
            <el-tooltip class="item" effect="dark" content="必填" placement="top-start">
              <i>*</i>
            </el-tooltip>
            头像：
          </span>
        </el-col>
        <el-col>
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
              <img v-if="imageUrl" :src="imageUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-col>
      </el-row>
    </div>
    
    <div class="article article_labels">
      <el-row>
        <el-col>
          <span>
            <el-tooltip class="item" effect="dark" content="必填" placement="top-start">
              <i>*</i>
            </el-tooltip>
            标签：
          </span>
        </el-col>
        <el-col>
          <el-tag type="success">标签二</el-tag>
          <el-tag type="info">标签三</el-tag>
          <el-tag type="warning">标签四</el-tag>
          <el-tag type="danger">标签五</el-tag>
        </el-col>
      </el-row>
    </div>

    <div class="article article_textarea">
      <el-row>
        <el-col>
          <span>
            <el-tooltip class="item" effect="dark" content="必填" placement="top-start">
              <i>*</i>
            </el-tooltip>
            描述：
          </span>
        </el-col>
        <el-col>
          <el-input
            type="textarea"
            :rows="2"
            placeholder="文章描述"
            v-model="textarea">
          </el-input>
        </el-col>
      </el-row>
    </div>

    <div class="article article_content">
      <el-row>
        <el-col>
          <span>
            <el-tooltip class="item" effect="dark" content="必填" placement="top-start">
              <i>*</i>
            </el-tooltip>
            内容：
          </span>
        </el-col>
        <el-col>
          <mavon-editor v-model="value"/>
        </el-col>
      </el-row>
      <div class="submit">
        <el-button type="primary" @click="addArticle()">添加文章</el-button>
      </div>
    </div>
    <!-- 结束    内容部分 -->
  </div>
</template>

<script>
export default {
  name: 'editArticle',
  data() {
    return {
      title: '',
      imageUrl: '',
      textarea: '',
      value: ''
    }
  },
  methods: {
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg'
      const isLt2M = file.size / 1024 / 1024 < 2

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!')
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!')
      }
      return isJPG && isLt2M;
    },
    //  添加文章
    addArticle() {
      console.log(this.value)
    }
  }
}
</script>

<style>
.article .el-col:nth-child(1){
  width: 100px;
}
.article .el-col:nth-child(2){
  width: calc(100% - 100px);
}
.article .el-col span i{
  color: red;
}
/* 头像部分 */
.article_image .avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.article_image .avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.article_image .avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 178px;
  height: 178px;
  line-height: 178px;
  text-align: center;
}
.article_image .avatar {
  width: 178px;
  height: 178px;
  display: block;
}
/* 标签 */
.article_labels .el-tag{
  margin-right: 20px;
}
</style>

<style lang="scss" scoped>
.editArticle {
  width: 100%;
  height: 100%;
  h5{
    line-height: 40px;
    text-align: center;
  }
  .article_title{
    margin: 20px 0;
    span{
      line-height: 40px;
    }
  }
  .article_image{
    margin: 20px 0;
  }
  .article_labels{
    margin: 20px 0;
  }
  .article_textarea{
    margin: 20px 0;
  }
  .article_content{
    margin-bottom: 100px;
    .submit{
      height: 60px;
      button{
        margin: 20px 20px 0 0;
        float: right;
      }
    }
    .markdown-body{
      min-height: 500px;
    }
  }
}
</style>
