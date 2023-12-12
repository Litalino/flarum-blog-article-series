<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Askvortsov\FlarumArticleSeries\Listener;

use Flarum\Discussion\Event\Saving;
use Illuminate\Support\Arr;

class SaveDiscussionArticleSeriesToDatabase
{
    public function handle(Saving $event)
    {
        $data = $event->data;
        $actor = $event->actor;

        $attributes = Arr::get($data, 'attributes', []);

        if (isset($attributes['articleSeriesId'])) {
            $actor->assertAdmin();

            $event->discussion->article_series_id = $attributes['articleSeriesId'];
            $event->discussion->save();
        }

        if (isset($attributes['articleSeriesOrder'])) {
            $actor->assertAdmin();

            $event->discussion->article_series_order = $attributes['articleSeriesOrder'];
            $event->discussion->save();
        }
    }
}
