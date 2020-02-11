<template>
  <div class="app-container">
    <el-button type="primary" @click="onAdd">添加</el-button>
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column label="ID">
        <template slot-scope="scope">
          {{ scope.row.ID }}
        </template>
      </el-table-column>
      <el-table-column label="名称"  align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
    </el-table>
    <el-dialog title="添加小类"" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="名称" label-width="120px">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="onAddSubmit">确 定</el-button>
        </div>
      </el-dialog>
  </div>
</template>

<script>
import { getTypList, addTyp } from '@/api/jiazhen'

export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      listLoading: true,
      dialogFormVisible: false,
      form: {
        name: "",
      }
    }
  },
  created() {
    this.fetchData()
  },
 
  methods: {
    fetchData() {
      this.listLoading = true
      getTypList().then(response => {
        this.list = response.data.list
        this.listLoading = false
      })
    },
    onAdd() {
      this.dialogFormVisible=true;
    },
    onAddSubmit() {
      addTyp(this.form).then(res => {
        this.$message.success("添加成功")
        this.dialogFormVisible=false;
      })
    }
  }
}
</script>
