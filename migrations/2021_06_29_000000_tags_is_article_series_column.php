<?php

return Flarum\Database\Migration::addColumns('tags', [
    'is_article_series' => ['boolean', 'default' => false],
]);