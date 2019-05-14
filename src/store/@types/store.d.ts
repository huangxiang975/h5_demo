interface IAppStore {
  /**
   * 系统语言
   */
  lang: string;
  sidebar: { opened: boolean; withoutAnimation: boolean };
  size: string;
}

interface IErrorLogStore {
  logs: any[];
}

interface IPermissionStore {
  routers: any[];
  addRouters: any[];
}

interface ITagsViewStore {
  visitedViews: any[];
  cachedViews: any[];
}

interface IUserStore {
  token: { token: string; type: string };
  userId: string;
  roles: string[];
  name: string;
  avatar: string; // 头像地址
  once: boolean; // 是否首次使用系统
  store: { Id?: number; Name?: string }; //当前所进入的门店
  isAdmin: boolean; // 是否管理员

  user: string;
  status: string;
  code: string;
  introduction: string;
  setting: {
    articlePlatform: any[];
  };
}

interface IStore {
  app: IAppStore;
  errorLog: IErrorLogStore;
  permission: IPermissionStore;
  tagsView: ITagsViewStore;
  user: IUserStore;
}
