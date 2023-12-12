# Blog Article Series

![License](https://img.shields.io/badge/license-MIT-blue.svg) [![Latest Stable Version](https://img.shields.io/packagist/v/litalino/flarum-blog-article-series.svg)](https://packagist.org/packages/litalino/flarum-blog-article-series) [![Total Downloads](https://img.shields.io/packagist/dt/litalino/flarum-blog-article-series.svg)](https://packagist.org/packages/litalino/flarum-blog-article-series)

A [Flarum](http://flarum.org) extension. Article Series support for Flarum Blog

PLugin Developer: askvortsov/flarum-article-series

PLugin Clone Co-development: Litalino/flarum-blog-article-series

This allows you to create article series by labelling discussions with certain secondary tags.

![blog-article-series](https://github.com/Litalino/flarum-blog-article-series/assets/99712477/89bbdac5-b3ca-4521-9464-7495a613b17b)


Live site: [ceramichacker.com](https://ceramichacker.com)

### Usage

1. Install and enable the extension
2. Go to a tag that you'd like to be an article series on the tags settings page, and select the "Is Article Series" checkbox in the tag settings modal
   1. Usually, secondary tags should be used for article series
3. For every discussion that's part of the article series, open the discussion controls dropdown, select which article series it's a part of, and select an order index. Articles will be sorted from lowest to highest order.
4. Go to the article in the flarum-blog view, and you should see an article series navigation on the right

### Installation

Install with composer:

```sh
composer require litalino/flarum-blog-article-series:"*"
```

### Updating

```sh
composer update litalino/flarum-blog-article-series:"*"
php flarum migrate
php flarum cache:clear
```

### Links

- [Packagist](https://packagist.org/packages/litalino/flarum-blog-article-series)
- [GitHub](https://github.com/litalino/flarum-blog-article-series)
- [Discuss](https://discuss.flarum.org/d/PUT_DISCUSS_SLUG_HERE)
