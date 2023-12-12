<?php

/*
 * This file is part of askvortsov/flarum-article-series.
 *
 * Copyright (c) 2021 Alexander Skvortsov.
 *
 * For the full copyright and license information, please view the LICENSE.md
 * file that was distributed with this source code.
 */

namespace Litalino\FlarumArticleSeries;

use Litalino\FlarumArticleSeries\Listener\SaveDiscussionArticleSeriesToDatabase;
use Litalino\FlarumArticleSeries\Listener\SaveTagsIsListeningToDatabase;
use Flarum\Api\Controller\ListDiscussionsController;
use Flarum\Api\Controller\ShowDiscussionController;
use Flarum\Api\Serializer\DiscussionSerializer;
use Flarum\Api\Serializer\BasicDiscussionSerializer;
use Flarum\Discussion\Discussion;
use Flarum\Extend;
use Flarum\Tags\Api\Serializer\TagSerializer;
use Flarum\Tags\Tag;

return [
    (new Extend\Frontend('forum'))
        ->js(__DIR__.'/js/dist/forum.js')
        ->css(__DIR__.'/less/forum.less'),

    (new Extend\Frontend('admin'))
        ->js(__DIR__.'/js/dist/admin.js')
        ->css(__DIR__.'/less/admin.less'),

    new Extend\Locales(__DIR__.'/locale'),

    (new Extend\Model(Discussion::class))
        ->belongsTo('articleSeries', Tag::class),

    (new Extend\Model(Tag::class))
        ->hasMany('articles', Discussion::class, 'article_series_id'),

    (new Extend\ApiController(ShowDiscussionController::class))
        ->addInclude(['articleSeries', 'articleSeries.articles']),

    (new Extend\ApiController(ListDiscussionsController::class))
        ->addInclude(['articleSeries', 'articleSeries.articles']),

    (new Extend\ApiSerializer(DiscussionSerializer::class))
        ->hasOne('articleSeries', TagSerializer::class),
    
    (new Extend\ApiSerializer(BasicDiscussionSerializer::class))
        // fixes Issues #3 https://github.com/askvortsov1/flarum-article-series/issues/3
        ->attribute('articleSeriesOrder', function($serializer, $discussion) {
            return $discussion->article_series_order;
        }),
    
    (new Extend\ApiSerializer(TagSerializer::class))
        ->attribute('isArticleSeries', function($serializer, $tag) {
            return $tag->is_article_series;
        })
        ->hasMany('articles', BasicDiscussionSerializer::class),

    (new Extend\Event())
        ->listen(\Flarum\Discussion\Event\Saving::class, SaveDiscussionArticleSeriesToDatabase::class)
        ->listen(\Flarum\Tags\Event\Saving::class, SaveTagsIsListeningToDatabase::class),
];
