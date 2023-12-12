<?php

use Illuminate\Database\Schema\Blueprint;
use Illuminate\Database\Schema\Builder;


return [
    'up' => function (Builder $schema) {
        $schema->table('discussions', function (Blueprint $table) {
                $table->integer('article_series_id')->nullable()->unsigned();
                $table->integer('article_series_order')->nullable();

                $table->foreign('article_series_id')->references('id')->on('tags')->onDelete('set null');
            });
    },
    'down' => function (Builder $schema) {
        $schema->table('discussions', function (Blueprint $table) {
            $table->dropForeign(['article_series_id']);

            $table->dropColumn('article_series_id');
            $table->dropColumn('article_series_order');
        });
    }
];
