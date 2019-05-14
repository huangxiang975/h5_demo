<!-- 图片上传 -->
<template>
  <div class='up-img'>
    <div class="title">
      <span>上传图片</span>
      <span class="title-hint">(最多上传{{maxSize}}张图片)</span>
    </div>
    <div class="img-content clearfloat">
      <div class="img-box pr"
           v-for="(item, index) in imgBlobData"
           :key="index">
        <div class="img-del pb"
             @click="img_del_click(index)"></div>
        <img :src="item.url">
      </div>
      <label for="fileupload"
             class="picture-label"
             v-show="imgBlobData.length < maxSize">
        <div class="img-upload">
          <img src="@/img/up-img.svg">
        </div>
      </label>
      <form name="imgForm"
            id="imgForm">
        <input @change='addImg($event)'
               type="file"
               accept="image/*"
               id="fileupload"
               name="file"
               ref="pathClear"
               multiple
               style="display:none">
      </form>
    </div>
  </div>
</template>

<script lang='ts'>
  import { Component, Vue, Prop } from "vue-property-decorator";
  @Component
  export default class upImg extends Vue {
    @Prop({ type: Number, default: 9 })
    maxSize: Number;

    @Prop({ type: Array, required: true, default: [] })
    imgBlobData: any[];

    img_del_click(i) {
      this.imgBlobData.splice(i, 1);
    }
    addImg(event: any) {
      let file = event.target.files;
      let fileLength = file.length;
      if (fileLength > this.maxSize) {
        this.$toast({ message: `图片上传最多可上传${this.maxSize}张` });
        this.getEmpty();
        return;
      }
      for (let i = 0; i < fileLength; i++) {
        if (this.imgBlobData.length < this.maxSize) {
          let addImg = {
            url: "",
            fileData: {}
          };
          addImg.url = URL.createObjectURL(file[i]);
          addImg.fileData = file[i];
          this.imgBlobData.push(addImg);
        } else {
          this.$toast({ message: `图片上传最多可上传${this.maxSize}张` });
          return;
        }
      }
      this.getEmpty();
    }
    /** 清空input 的file缓存 */
    getEmpty() {
      let _file_dom: any = document.getElementById("fileupload");
      _file_dom.value = "";
    }
  }
</script>

<style lang='less' scoped>
  .up-img {
    margin-top: 0.2rem;
    background-color: #fff;
    .title {
      height: 0.9rem;
      line-height: 0.9rem;
      padding: 0 0.3rem;
      font-size: 0.32rem;
      color: #333;
      .title-hint {
        color: #cecece;
      }
    }
    .img-content {
      padding: 0.1rem 0.3rem;
      .picture-label,
      .img-box {
        display: inline-block;
        width: 0.9rem;
        height: 0.9rem;
        padding: 0.2rem;
      }
      .picture-label {
        .img-upload {
          width: 100%;
          height: 100%;
        }
      }
      .img-box {
        .img-del {
          top: 0.06rem;
          right: 0.06rem;
          width: 0.32rem;
          height: 0.32rem;
          background: url("../img/del-img.svg") no-repeat top 0 right 0;
          background-size: 100% 100%;
        }
      }
    }
  }
</style>