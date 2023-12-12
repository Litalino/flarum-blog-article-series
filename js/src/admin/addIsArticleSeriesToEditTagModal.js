import { extend } from 'flarum/extend';
import EditTagModal from 'flarum/tags/components/EditTagModal';
import Stream from 'flarum/utils/Stream';
import Switch from 'flarum/common/components/Switch';

export default function addIsArticleSeriesToEditTagModal() {
  extend(EditTagModal.prototype, 'oninit', function () {
    this.isArticleSeries = Stream(this.tag.isArticleSeries() || false);
  });

  extend(EditTagModal.prototype, 'fields', function (items) {
    items.add(
      'isArticleSeries',
      <div className="Form-group">
        {Switch.component(
          {
            state: this.isArticleSeries(),
            onchange: this.isArticleSeries,
          },
          app.translator.trans('askvortsov-article-series.admin.edit_tags.is_article_series')
        )}
      </div>,
      9
    );
  });

  extend(EditTagModal.prototype, 'submitData', function (data) {
    data['isArticleSeries'] = this.isArticleSeries();
  });
}
