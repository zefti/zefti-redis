var redis = require("redis");

var init = function(options){
  var dataSource = options.dataSource;
  var args = [];
  if (dataSource.port) args.push(dataSource.port);
  if (dataSource.host) args.push(dataSource.host);
  var client = redis.createClient.apply(redis.createClient, args);
  return client;
}

module.exports = init;