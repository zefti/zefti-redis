var redis = require("redis");

var init = function(options){
  var args = [];
  if (options.port) args.push(options.port);
  if (options.host) args.push(options.host);
  var client = redis.createClient.apply(redis.createClient, args);
  return client;
}

module.exports = init;