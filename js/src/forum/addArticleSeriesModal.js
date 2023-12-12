import { extend } from 'flarum/common/extend';
import Button from 'flarum/common/components/Button';
import DiscussionControls from 'flarum/forum/utils/DiscussionControls';
import BlogPostController from 'flarum/v17development/blog/components/BlogPostController';

import ArticleSeriesModal from './components/ArticleSeriesModal';

function addModal(items, discussion) {
  items.add(
    'article-series-settings',
    <Button
      icon="fas fa-book"
      onclick={() =>
        app.modal.show(ArticleSeriesModal, {
          discussion,
        })
      }
    >
      {app.translator.trans('askvortsov-article-series.forum.discussion_controls.article_series_button')}
    </Button>
  );
}

export default function addArticleSeriesModal() {
  extend(BlogPostController.prototype, 'manageArticleButtons', function (items) {
    return addModal(items, this.attrs.article);
  });
  extend(DiscussionControls, 'userControls', addModal);
}
