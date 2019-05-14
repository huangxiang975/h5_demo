import Vue from "vue";
// import moment from "moment"; // 解决对时间的处理

interface IMessageBox {
  /**
   * 询问框
   * @param message 消息
   */
  confirm(message: string): Promise<boolean>;
  /**
   * 询问框2
   * @param message 消息2
   * @param title 标题
   */
  confirm(message: string, title: string): Promise<boolean>;
}

declare module "vue/types/vue" {
  interface Vue {
    /**
     * 提示说明
     */
    $messagebox: IMessageBox;
    $toast: any;
    /** 加载遮罩 */
    $indicator: any;

    $store;

    // $moment: moment;
  }
}
