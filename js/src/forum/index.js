import registerModels from '../common/registerModels';
import addArticleList from './addArticleList';
import addArticlePrevNextButtons from './addArticlePrevNextButtons';
import addArticleSeriesModal from './addArticleSeriesModal';

app.initializers.add("litalino/flarum-blog-article-series", () => {
  registerModels();
  addArticleList();
  addArticleSeriesModal();
  addArticlePrevNextButtons();
});
