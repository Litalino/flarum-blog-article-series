import { extend, override } from 'flarum/common/extend';
import BlogItemSidebar from 'flarum/v17development/blog/components/BlogItemSidebar';

import ArticleSeriesList from './components/ArticleSeriesList';

export default function addArticleList() {
  extend(BlogItemSidebar.prototype, 'items', function (items) {
    const author = items.get('author');
    items.remove('author');
    items.add('author', author, app.screen() === 'phone' ? 5 : 20);
    items.add('article-list', <ArticleSeriesList discussion={this.attrs.article} />, 10);
  });
}
