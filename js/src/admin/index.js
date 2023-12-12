import registerModels from '../common/registerModels';
import addIsArticleSeriesToEditTagModal from './addIsArticleSeriesToEditTagModal';

app.initializers.add('litalino/flarum-blog-article-series', () => {
  registerModels();
  addIsArticleSeriesToEditTagModal();
});
