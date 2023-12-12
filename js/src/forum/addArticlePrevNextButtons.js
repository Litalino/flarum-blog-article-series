import { extend } from 'flarum/common/extend';
import BlogItem from 'flarum/v17development/blog/pages/BlogItem';
import LinkButton from 'flarum/common/components/LinkButton';

export default function addArticlePrevNextButtons() {
  extend(BlogItem.prototype, 'postItems', function (items) {
    const articleSeries = this.article?.articleSeries();

    if (!articleSeries || articleSeries.articles().length <= 1) return;

    const articlesSorted = articleSeries.articles().sort((a1, a2) => a1.articleSeriesOrder() - a2.articleSeriesOrder());

    const i = articlesSorted.findIndex((a) => a.id() === this.article.id());

    items.add(
      'nextPrevButtons',
      <div class="FlarumBlog-Article-Post--nextPrevButtons">
        {i === 0 ? (
          <div />
        ) : (
          <LinkButton icon="fas fa-chevron-left" href={app.route('blogArticle', { id: articlesSorted[i - 1].slug() })}>
            {app.translator.trans('askvortsov-article-series.forum.article_item.prev_article')}
          </LinkButton>
        )}
        {i + 1 === articleSeries.articles().length ? (
          <div />
        ) : (
          <LinkButton icon="fas fa-chevron-right" href={app.route('blogArticle', { id: articlesSorted[i + 1].slug() })}>
            {app.translator.trans('askvortsov-article-series.forum.article_item.next_article')}
          </LinkButton>
        )}
      </div>
    );
  });
}
