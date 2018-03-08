const klass       = require('klass');
const request     = require('request');
const _           = require('underscore');
const querystring = require('querystring');

module.exports = klass(function(options) {
  _.extend(this, options);
  if (this.protocol == undefined) {
    this.protocol = 'https';
  }

  if (this.host == undefined) {
    this.host = 'miningpoolhub.com';
  }

  if (this.path == undefined) {
    this.path = '/index.php';
  }

  if (this.verbose == undefined) {
    this.verbose = false;
  }

}).methods({

  setCoin: function(c) {
    this.coin = c;
  },

  unsetCoin: function() {
    this.coin = undefined;
  },

  parseArgs: function(options, then) {
    if (typeof options == 'function') {
      then = options;
      options = {};
    }
    return {then: then, options: options};
  },

  request: function(options, then) {
    var self = this

    var url = [this.protocol, '://'];
      
    if (this.coin != undefined) {
      url.push(this.coin.toLowerCase());
      url.push('.');
    } else {
      if (options.coin != undefined) {
        url.push(options.coin.toLowerCase());
        url.push('.');
        delete options.coin;
      }
    }

    url = url.concat([this.host, this.path, '?', querystring.stringify(options)]);
    url = url.join('');
    if (self.verbose) {
      console.log(url);
    }

    request.get({
      url: url
    }, function(err, r, body) {
      if (body != undefined) {
        body = JSON.parse(body);
      }

      if (self.verbose) {
        console.log(body);
      }

      then(err, body);
    })  
  },

  get: function(options, then) {
    var self = this;
    _.extend(options, {page: 'api', api_key: this.api_key});
    this.request(options, then);
  },

  getminingandprofitsstatistics: function(options, then) {
    var args = this.parseArgs(options, then)
    args.options.action = 'getminingandprofitsstatistics';
    
    this.get(args.options, function(err, data) {
      args.then(err, data.return);
    }); 
  },

  getautoswitchingandprofitsstatistics: function(options, then) {
    var args = this.parseArgs(options, then)
 
    args.options.action = 'getautoswitchingandprofitsstatistics';
    this.get(args.options, function(err, data) {
      args.then(err, data.return);
    }); 
  },

 
  getuserallbalances: function(options, then) {
    var args = this.parseArgs(options, then)
    
    args.options.action = 'getuserallbalances';
    this.get(args.options, function(err, data) {
      args.then(err, data);
    });
  },

  getblockcount: function(options, then) {
    var args = this.parseArgs(options, then)
 
    args.options.action = 'getblockcount';
    this.get(args.options, function(err, data) {
      args.then(err, data);
    }); 
  },

  getblocksfound: function(options, then) {
    var args = this.parseArgs(options, then)
 
    args.options.action = 'getblocksfound';
    this.get(args.options, function(err, data) {
      args.then(err, data);
    }); 
  },

  getuserallbalances: function(options, then) {
    var args = this.parseArgs(options, then)
 
    args.options.action = 'getuserallbalances';
    this.get(args.options, function(err, data) {
      args.then(err, data);
    });
  },

  getblockstats: function(options, then) {
    var args = this.parseArgs(options, then)
 
    args.options.action = 'getblockstats';
    this.get(args.options, function(err, data) {
      args.then(err, data);
    });
  },
  
  getcurrentworkers: function(options, then) {
    var args = this.parseArgs(options, then)
    
    args.options.action = 'getcurrentworkers';
    this.get(args.options, function(err, data) {
      args.then(err, data);
    });
  },

  getdashboarddata: function(options, then) {
    args = this.parseArgs(options, then)
      
    _.extend(args.options, {action: 'getdashboarddata'});
    this.get(args.options, function(err, data) {
      args.then(err, data);
    });
  },

 getdifficulty: function(options, then) {
    var args = this.parseArgs(options, then)
    _.extend(args.options, {action: 'getdifficulty'});
 
    this.get(args.options, function(err, data) {
      args.then(err, data);
    });
  },

 getestimatedtime: function(options, then) {
    var args = this.parseArgs(options, then);
    args.options.action = 'getestimatedtime';
    this.get(args.options, function(err, data) {
      args.then(err, data);
    });
  },

  gethourlyrates: function(options, then) {
    var args = this.parseArgs(options, then);
    args.options.action = 'gethourlyrates';
    this.get(args.options, function(err, data) {
      args.then(err, data);
    });
  },

  getnavbardata: function(options, then) {
    var args = this.parseArgs(options, then);
    args.options = {action: 'getnavbardata'};
    this.get(options, function(err, data) {
      args.then(err, data);
    });
  },

  getpoolhashrate: function(options, then) {
    var args = this.parseArgs(options, then);
    args.options.action = 'getpoolhashrate';
    this.get(args.options, function(err, data) {
      args.then(err, data);
    });
  },

  getpoolinfo: function(options, then) {
    var args = this.parseArgs(options, then);
    args.options.action = 'getpoolinfo';
    this.get(args.options, function(err, data) {
      args.then(err, data);
    });
  },

  getpoolsharerate: function(options, then) {
    var args = this.parseArgs(options, then);
    args.options.action = 'getpoolsharerate';
    this.get(args.options, function(err, data) {
      args.then(err, data);
    });
  },

  getpoolstatus: function(options, then) {
    var args = this.parseArgs(options, then);
    args.options.action = 'getpoolstatus';
    this.get(args.options, function(err, data) {
      args.then(err, data);
    });
  },

  gettimesincelastblock: function(options, then) {
    var args = this.parseArgs(options, then);
    args.options.action = 'gettimesincelastblock';
    this.get(args.options, function(err, data) {
      args.then(err, data);
    });
  },

  gettopcontributors: function(options, then) {
    var args = this.parseArgs(options, then);
    args.options.action = 'gettopcontributors';
    this.get(args.options, function(err, data) {
      args.then(err, data);
    });
  },

 getuserbalance: function(id, then) {
    var options = {id: id, action: 'getuserbalance'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },

 getuserhashrate: function(id, then) {
    var options = {id: id, action: 'getuserhashrate'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },

 getusersharerate: function(id, then) {
    var options = {id: id, action: 'getusersharerate'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },

 getuserstatus: function(id, then) {
    var options = {id: id, action: 'getuserstatus'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },

 getusertransactions: function(id, then) {
    var options = {id: id, action: 'getusertransactions'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },

 getuserworkers: function(id, then) {
    var options = {id: id, action: 'getuserworkers'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },


  public: function(then) {
    var options = {action: 'public'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  }



})
