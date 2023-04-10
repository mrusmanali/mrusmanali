import DatabaseService from "./database";

class Articles {
  constructor() {
    if(!this.instance) this.instance = this;
    return this.instance;
  }

  createArticle(data) {
    return DatabaseService.addDocument('articles', data);
  }
}
const ArticlesService = new Articles;
export default ArticlesService;