import DatabaseService from "./database";

class Articles {
  constructor() {
    if(!this.instance) this.instance = this;
    return this.instance;
  }

  find({search = '', page, limit, sort}) {
    return DatabaseService.fetchList('articles');
  }

  createArticle(data) {
    return DatabaseService.addDocument('articles', data);
  }
}
const ArticlesService = new Articles;
export default ArticlesService;