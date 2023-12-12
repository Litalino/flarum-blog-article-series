import Modal from 'flarum/common/components/Modal';
import Button from 'flarum/common/components/Button';
import Select from 'flarum/common/components/Select';
import Stream from 'flarum/common/utils/Stream';

export default class ArticleSeriesModal extends Modal {
  oninit(vnode) {
    super.oninit(vnode);

    const articleSeries = this.attrs.discussion.articleSeries();
    this.articleSeriesId = Stream(articleSeries ? articleSeries.id() : 'NULL');
    this.articleSeriesOrder = Stream(this.attrs.discussion.articleSeriesOrder() || 0);
  }

  className() {
    return 'ArticleSeriesModal Modal--small';
  }

  title() {
    return app.translator.trans('askvortsov-article-series.forum.article_series_modal.title');
  }

  content() {
    const tagSelectOptions = this.attrs.discussion
      .tags()
      .filter((tag) => tag.isArticleSeries())
      .reduce((acc, tag) => {
        acc[tag.id()] = tag.name();
        return acc;
      }, {});
    tagSelectOptions['NULL'] = 'None';

    return (
      <div className="Modal-body">
        <div className="Form Form--centered">
          <div className="Form-group">
            <label>{app.translator.trans('askvortsov-article-series.forum.article_series_modal.tag_id_label')}</label>
            <Select value={this.articleSeriesId()} onchange={this.articleSeriesId} options={tagSelectOptions}></Select>
          </div>
          <div className="Form-group">
            <label>{app.translator.trans('askvortsov-article-series.forum.article_series_modal.order_label')}</label>
            <input className="FormControl" bidi={this.articleSeriesOrder} type="number" />
          </div>
          <div className="Form-group">
            {Button.component(
              {
                className: 'Button Button--primary Button--block',
                type: 'submit',
                loading: this.loading,
              },
              app.translator.trans('askvortsov-article-series.forum.article_series_modal.submit_button')
            )}
          </div>
        </div>
      </div>
    );
  }

  onsubmit(e) {
    e.preventDefault();

    this.loading = true;

    this.attrs.discussion
      .save({
        articleSeriesId: parseInt(this.articleSeriesId()) || null,
        articleSeriesOrder: this.articleSeriesOrder(),
      })
      .finally(() => {
        this.loading = false;
        m.redraw();
      });
  }
}
