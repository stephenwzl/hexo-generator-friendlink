'use strict'
if (hexo.config.friendlink && hexo.config.friendlink instanceof Array) {
	hexo.extend.generator.register('friendlink', require('./lib/generator'))
}