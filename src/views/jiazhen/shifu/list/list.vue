<template>
  <div class="app-container">
    <router-link to="/shifu-add">
    <el-button type="primary">添加</el-button>
    </router-link>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="名称">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column label="类别" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.typName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="电话" align="center">
        <template slot-scope="scope">{{ scope.row.phone }}</template>
      </el-table-column>
      <el-table-column class-name="status-col" label="照片" align="center">
        <template slot-scope="scope">
          <img :src="scope.row.img" width="40px" height="40px" />
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="地址" align="center">
        <template slot-scope="scope">{{ scope.row.location }}</template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getShifuList } from "@/api/jiazhen";
import { imageUrl } from '@/utils/index'


export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: "success",
        draft: "gray",
        deleted: "danger"
      };
      return statusMap[status];
    }
  },
  data() {
    return {
      list: null,
      listLoading: true
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getShifuList().then(response => {
        this.list = response.data.list;
        this.list.forEach(item => {
          item.img = imageUrl(item.img)
        });
        this.listLoading = false;
      });
    }
  }
};
</script>
