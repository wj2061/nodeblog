var config = require('config-lite');
var Mongolass = require('mongonlass');
var mogolass = new Mongolass;
mogolass.connect(config.mongodb);