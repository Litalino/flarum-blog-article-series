import Component from 'flarum/common/Component';
import Link from 'flarum/components/Link';

export default class ArticleSeriesList extends Component {
  view() {
    if (this.attrs.discussion == null) return '';

    const articleSeries = this.attrs.discussion.articleSeries();
    //console.log(articleSeries);

    if (!articleSeries) return '';

    //const articles = articleSeries.articles();
    const get_articles = articleSeries.articles();
    //console.log(get_articles);

    //this.articles_randomSeries = get_articles.subList(0, 5);
    //console.log(this.articles_randomSeries);
    //this.featuredPosts = articles.slice(0, this.featuredCount);
    //this.articlesCount = 6;
    //this.articles = get_articles.length > this.articlesCount ? get_articles.slice(this.articlesCount, get_articles.length) : get_articles;
    //const articles = this.articles;
    this.articlesCount = 5;

    if (get_articles.length > this.articlesCount) {
      var newItems = [];

      for (var i = 0; i < 5; i++) {
        var idx = Math.floor(Math.random() * get_articles.length);
        //newItems.push(items[idx]);
        //items.splice(idx, 1);
        newItems.push(get_articles.splice(idx, 1)[0]);
      }
      this.articles = newItems;
      //console.log(newItems);

    } else {
      this.articles = get_articles;
      //console.log(get_articles);
    }
    const articles = this.articles;

    return (
      <div className="BlogArticleList BlogSideWidget">
        <h3>
          {app.translator.trans('askvortsov-article-series.forum.article_list.title', {
            series: <Link href={app.route('blogCategory', { slug: articleSeries.slug() })}>{articleSeries.name()}</Link>,
          })}
        </h3>

        {articles && articles.sort((a1, a2) => a1.articleSeriesOrder() - a2.articleSeriesOrder()).map(this.articleItem)}
      </div>
    );
  }

  articleItem(article, i) {
    return (
      <Link href={app.route('blogArticle', { id: article.slug() })} className={`BlogSideWidget-item BlogSideWidget-item-${article.id()}`}>
        {i + 1}. {m.route.param('id') === article.slug() ? <strong>{article.title()}</strong> : article.title()}
      </Link>
    );
  }
}
