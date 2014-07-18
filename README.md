# spm-server

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![Test coverage][coveralls-image]][coveralls-url]

[npm-image]: https://img.shields.io/npm/v/spm-server.svg?style=flat
[npm-url]: https://npmjs.org/package/spm-server
[travis-image]: https://img.shields.io/travis/spmjs/spm-server.svg?style=flat
[travis-url]: https://travis-ci.org/spmjs/spm-server
[coveralls-image]: https://img.shields.io/coveralls/spmjs/spm-server.svg?style=flat
[coveralls-url]: https://coveralls.io/r/spmjs/spm-server?branch=master

Server for spm.

## Install

```bash
$ npm install spm-server -g
```

## Usage

```bash
$ spm-server [options]
```

## Options

* `-b, --base`, base path in production
* `--id-leading`, prefix of module name, default: {{name}}/{{version}}
