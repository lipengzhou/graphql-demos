module.exports = {
  Query: {
    async articles (parent, {}, { dataSources }) {
      const [ articles, articlesCount ] = await Promise.all([
        dataSources.articles.getArticles(),
        dataSources.articles.getCount()
      ])
      return {
        articles,
        articlesCount
      }
    }
  },
  Mutation: {
    async createArticle (parent, { article }, { dataSources, user }) {
      article.author = user._id
      const ret = await dataSources.articles.createArticle
      // 根据 用户 ID 获取用户信息填充到 article.author 中
      (article)
      return {
        article: ret
      }
    }
  },
  Article: {
    async author (parent, args, { dataSources }) {
      const user = await dataSources.users.findById(parent.author)
      return user
    }
  }
}
