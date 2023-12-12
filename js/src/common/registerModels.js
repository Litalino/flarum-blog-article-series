import Model from 'flarum/Model';
import Discussion from 'flarum/models/Discussion';
import Tag from 'flarum/tags/models/Tag';

export default function registerModels() {
  Discussion.prototype.articleSeriesOrder = Model.attribute('articleSeriesOrder');
  Discussion.prototype.articleSeries = Model.hasOne('articleSeries');
  Tag.prototype.isArticleSeries = Model.attribute('isArticleSeries');
  Tag.prototype.articles = Model.hasMany('articles');
}
