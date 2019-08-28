<template>
  <div class="editArticle">
    <!-- 开始    内容部分 -->
    <h5>新增文章</h5>

    <div class="article_title">
      <span>
        标题：
      </span>
      <el-input v-model="title" placeholder="文章标题"></el-input>
    </div>

    <div class="article_image">
      <el-upload
      class="avatar-uploader"
      action="https://jsonplaceholder.typicode.com/posts/"
      :show-file-list="false"
      :on-success="handleAvatarSuccess"
      :before-upload="beforeAvatarUpload">
        <img v-if="imageUrl" :src="imageUrl" class="avatar">
        <i v-else class="el-icon-plus avatar-uploader-icon"></i>
      </el-upload>
    </div>
    
    <div class="article_labels">
      <el-tag type="success">标签二</el-tag>
      <el-tag type="info">标签三</el-tag>
      <el-tag type="warning">标签四</el-tag>
      <el-tag type="danger">标签五</el-tag>
    </div>

    <div class="article_textarea">
      <el-input
        type="textarea"
        :rows="2"
        placeholder="文章描述"
        v-model="textarea">
      </el-input>
    </div>

    <div>
      <mavon-editor v-model="value"/>
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
    }
  }
}
</script>

<style>
.article_title .el-input{
  width: calc(100% - 50px);
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
      width: 50px;
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
}
</style>
