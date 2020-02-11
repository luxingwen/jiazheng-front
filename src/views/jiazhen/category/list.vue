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
      <el-table-column label="sortId" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.sortId }}</span>
        </template>
      </el-table-column>
      <el-table-column label="名称"  align="center">
        <template slot-scope="scope">
          {{ scope.row.name }}
        </template>
      </el-table-column>
      <el-table-column class-name="status-col" label="图标" align="center">
        <template slot-scope="scope">
           <img :src="scope.row.img" width="40px" height="40px" />
          </template>
      </el-table-column>
      <el-table-column label="Actions" align="center" width="230" class-name="small-padding fixed-width">
          <template slot-scope="{row}">
            <el-button type="primary" size="mini" @click="handleUpdate(row)">
              编辑
            </el-button>
          </template>
        </el-table-column>
    </el-table>

    <el-dialog title="添加分类" :visible.sync="dialogFormVisible">
        <el-form :model="form">
          <el-form-item label="分类名称" :label-width="formLabelWidth">
            <el-input v-model="form.name" autocomplete="off"></el-input>
          </el-form-item>
          <el-form-item label="排序" :label-width="formLabelWidth">
              <el-input v-model="form.sortId" autocomplete="off" type="number"></el-input>
          </el-form-item>
          <el-form-item label="图标" :label-width="formLabelWidth">
            <el-upload
              class="avatar-uploader"
              action="/api/v1/upload/image"
              :show-file-list="false"
              :on-success="handleAvatarSuccess"
              :before-upload="beforeAvatarUpload">
              <img v-if="imgUrl" :src="imgUrl" class="avatar">
              <i v-else class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFormVisible = false">取 消</el-button>
          <el-button type="primary" @click="onAddSubmit">确 定</el-button>
        </div>
      </el-dialog>

      <el-dialog title="编辑" :visible.sync="dialogFormVisibleedi">
          <el-form :model="form1">
              <el-form-item label="分类名称" :label-width="formLabelWidth">
                <el-input v-model="form1.name" autocomplete="off"></el-input>
              </el-form-item>
              <el-form-item label="排序" :label-width="formLabelWidth">
                  <el-input v-model="form1.sortId" autocomplete="off" type="number"></el-input>
              </el-form-item>
              <el-form-item label="图标" :label-width="formLabelWidth">
                <el-upload
                  class="avatar-uploader"
                  action="/api/v1/upload/image"
                  :show-file-list="false"
                  :on-success="handleAvatarSuccess"
                  :before-upload="beforeAvatarUpload">
                  <img v-if="imgUrl1" :src="imgUrl1" class="avatar">
                  <i v-else class="el-icon-plus avatar-uploader-icon"></i>
                </el-upload>
              </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer">
              <el-button @click="dialogFormVisibleedi = false">取 消</el-button>
              <el-button type="primary" @click="onUpdateSubmit">确 定</el-button>
            </div>
      </el-dialog>
  </div>
</template>

<script>
import { getCategoryList, addCategoryList, updateCategory } from '@/api/jiazhen'
import { imageUrl } from '@/utils/index'

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
      formLabelWidth: '120px',
      dialogFormVisibleedi: false,
      imgUrl: '',
      imgUrl1: '',
      form: {
        name: "",
        sortId: 0,
        img: ''
      },
      form1: {
        ID: 0,
        name: "",
        sortId: 0,
        img: ''
      }
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getCategoryList().then(response => {
        this.list = response.data.list
        this.list.forEach(item => {
          item.img = imageUrl(item.img)
        });
      
        this.listLoading = false
      })
    },
    onAdd() {
      console.log('add!');
      this.dialogFormVisible=true;
    },
    handleAvatarSuccess(res, file) {
      console.log("res:",res)
      console.log("file:",file)
      this.imgUrl = res.path + res.filename;
      this.form.img = res.filename;
      this.form1.img = res.filename;
      this.imgUrl1 = res.path + res.filename;
      console.log(this.form.img);
      },
    beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isLt2M;
    },
    onAddSubmit() {
      this.dialogFormVisible = false;
      console.log(this.form);
      this.form.sortId = parseInt(this.form.sortId);
      let form = JSON.stringify(this.form);
      console.log(form)
      addCategoryList(form).then(response => {
        this.$message.success('添加成功');
      })
    },
    handleUpdate(row) {
      this.form1.ID = row.ID
      this.form1.name = row.name
      this.form1.sortId = row.sortId
      this.form1.img = row.img
      this.imgUrl1 = row.img
      this.dialogFormVisibleedi =true
    },
    onUpdateSubmit() {
      this.form1.sortId = parseInt(this.form1.sortId);
      updateCategory(this.form1.ID,this.form1).then(res => {
        console.log("res:",res)
        this.$message.success('更新成功');
        this.dialogFormVisibleedi = false
      })
    }
  }
}
</script>



<style>
    .avatar-uploader .el-upload {
      border: 1px dashed #d9d9d9;
      border-radius: 6px;
      cursor: pointer;
      position: relative;
      overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
      border-color: #409EFF;
    }
    .avatar-uploader-icon {
      font-size: 28px;
      color: #8c939d;
      width: 178px;
      height: 178px;
      line-height: 178px;
      text-align: center;
    }
    .avatar {
      width: 178px;
      height: 178px;
      display: block;
    }
  </style>