<?php

/*
 * This file is part of Flarum.
 *
 * For detailed copyright and license information, please view the
 * LICENSE file that was distributed with this source code.
 */

namespace Askvortsov\FlarumArticleSeries\Listener;

use Flarum\Tags\Event\Saving;
use Illuminate\Support\Arr;

class SaveTagsIsListeningToDatabase
{
    public function handle(Saving $event)
    {
        $data = $event->data;
        $actor = $event->actor;

        $attributes = Arr::get($data, 'attributes', []);

        if (isset($attributes['isArticleSeries'])) {
            $actor->assertAdmin();

            $event->tag->is_article_series = $attributes['isArticleSeries'];
        }
    }
}
