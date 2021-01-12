const { MongoDataSource } = require('apollo-datasource-mongodb')

class Articles extends MongoDataSource {
  createArticle (data) {
    const article = new this.model(data)
    // article.populate('author').execPopulate()
    return article.save()
  }
}

module.exports = Articles
