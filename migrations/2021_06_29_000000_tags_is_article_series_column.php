<?php


use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;
use Illuminate\Support\Facades\Schema;

return [
    'up' => function (Builder $schema) {
        if ($schema->hasTable('tags')) {
            if (Schema::hasColumn('tags', 'is_article_series')) {
                return;
            }
            return Flarum\Database\Migration::addColumns('tags', [
                'is_article_series' => ['boolean', 'default' => false],
            ]);
        }
    },
    'down' => function (Builder $schema) {

    },
];

//return Flarum\Database\Migration::addColumns('tags', [
//    'is_article_series' => ['boolean', 'default' => false],
//]);