<template>
  <div class="articleList">
    <!-- 开始    内容部分 -->
    
    <el-row>
      <el-col :span="20">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <el-dropdown>
          <i class="el-icon-setting" style="margin-right: 15px"></i>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>查看</el-dropdown-item>
            <el-dropdown-item>退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
        <div class="avater" :style="{backgroundImage: 'url(' + avaterImg + ')'}"></div>
      </el-col>
    </el-row>

    <el-table ref="filterTable" :data="tableData" style="width: 100%">
      <el-table-column
        prop="date"
        label="日期"
        sortable
        width="180"
        column-key="date"
        :filters="[{text: '2016-05-01', value: '2016-05-01'}, {text: '2016-05-02', value: '2016-05-02'}, {text: '2016-05-03', value: '2016-05-03'}, {text: '2016-05-04', value: '2016-05-04'}]"
        :filter-method="filterHandler"
      ></el-table-column>

      <el-table-column prop="name" label="作者" width="180"></el-table-column>

      <el-table-column prop="address" label="文章" :formatter="formatter"></el-table-column>

      <el-table-column prop="name" label="分类" width="180"></el-table-column>

      <el-table-column
        prop="tag"
        label="标签"
        width="100"
        :filters="[{ text: '家', value: '家' }, { text: '公司', value: '公司' }]"
        :filter-method="filterTag"
        filter-placement="bottom-end"
      >
        <template slot-scope="scope">
          <el-tag
            :type="scope.row.tag === '家' ? 'primary' : 'success'"
            disable-transitions
          >{{scope.row.tag}}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="操作" width="180">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination small layout="prev, pager, next" :total="50"></el-pagination>

    <!-- 结束    内容部分 -->
  </div>
</template>

<script>
export default {
  name: 'articleList',
  data() {
    const imgDir = "../assets/sign_in/";
    return {
      avaterImg: imgDir + "tuzi.jpg",
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          tag: "家"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          tag: "公司"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          tag: "家"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄",
          tag: "公司"
        }
      ]
    };
  },
  methods: {
    resetDateFilter() {
      this.$refs.filterTable.clearFilter("date");
    },
    clearFilter() {
      this.$refs.filterTable.clearFilter();
    },
    formatter(row, column) {
      return row.address;
    },
    filterTag(value, row) {
      return row.tag === value;
    },
    filterHandler(value, row, column) {
      const property = column["property"];
      return row[property] === value;
    }
  }
};
</script>

<style>
.articleList .el-main {
  padding: 0;
}
.articleList .el-row {
  height: 60px;
  background: skyblue;
}
.articleList .el-row .el-col {
  height: 100%;
}
</style>

<style lang="scss" scoped>
.articleList {
  width: 100%;
  height: 100%;
}
</style>
