import {ArticleStore} from "./ArticleStore";

class RootStore {
  constructor() {
    this.articleStore = new ArticleStore(this);
  }
}

export default RootStore;