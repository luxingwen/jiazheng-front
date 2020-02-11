<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="名称">
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="大类">
        <el-select v-model="form.category" placeholder="大类">
          <el-option v-for="item in categoryList" v-bind:label="item.name" v-bind:value="item.ID" />
        </el-select>
      </el-form-item>
      <el-form-item label="小类">
        <el-select v-model="form.typ" placeholder="小类">
          <el-option v-for="item in typList" v-bind:label="item.name" v-bind:value="item.ID" />
        </el-select>
      </el-form-item>
      <el-form-item label="联系方式">
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="区域">
        <el-select v-model="form.arean" placeholder="区域">
          <el-option v-for="item in areanList" v-bind:label="item.name" v-bind:value="item.ID" />
        </el-select>
      </el-form-item>
      <el-form-item label="地址">
        <el-input v-model="form.location" />
      </el-form-item>
       <el-form-item label="图片" label-width="120px">
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
      <div class="editor-container">
        <el-tag class="tag-title">描述:</el-tag>
        <mavon-editor v-model="content" ref="md" @imgAdd="$imgAdd" @change="change" style="min-height: 600px"/>
      </div>
     
      <el-button type="primary" @click="onSubmit">立即创建</el-button>
    </el-form>
  </div>
</template>

<script>
import { mavonEditor } from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'
import { getCategoryList, getTypList, uploadImg, addShifu, getArean } from "@/api/jiazhen";

export default {
  components: { mavonEditor },
  data() {
    return {
      form: {
        name: "",
        category: "",
        typ: "",
        phone: "",
        img: "",
        location: "",
        desc: "",
        arean: "",
      },
      html: '',
      content: '',
      categoryList: [],
      listLoading: false,
      typList: [],
      areanList: [],
      imgUrl: ''
    };
  },
  created() {
    this.fetchData();
    getArean().then(res => {
      this.areanList = res.data;
      console.log(res);
    })
  },
  methods: {
    onSubmit() {
      this.$message("submit!");
      this.form.desc = this.html;
      console.log(this.form);
      addShifu(this.form).then(res => {
        console.log("res:",res);
      })
    },
    onCancel() {
      this.$message({
        message: "cancel!",
        type: "warning"
      });
    },
    getHtml() {
      this.html = this.$refs.markdownEditor.getHtml();
      console.log(this.html);
    },
    fetchData() {
      this.listLoading = true;
      getCategoryList().then(response => {
        this.categoryList = response.data.list;
        this.listLoading = false;
      });

      getTypList().then(response => {
        this.typList = response.data.list;
      })
    },
    $imgAdd(pos, $file){
      var formdata = new FormData();
        formdata.append('file', $file);
        uploadImg(formdata).then(res => {
          console.log(res)
          var url = res.path + res.filename;
          console.log(url)
          this.$refs.md.$img2Url(pos, url);
        })
    },
    change(value, render){
                // render 为 markdown 解析后的结果
      this.html = render;
    },
    handleAvatarSuccess(res, file) {

      this.imgUrl = res.path + res.filename;
      this.form.img = res.filename;
      },
    beforeAvatarUpload(file) {
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isLt2M;
    },
  }
};
</script>

<style scoped>
.line {
  text-align: center;
}

.editor-container {
  margin-bottom: 30px;
}
.tag-title {
  margin-bottom: 5px;
}

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