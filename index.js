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
    this.verbose = true;
  }

}).methods({

  setCoin: function(c) {
    this.coin = c;
  },

  unsetCoin: function() {
    this.coin = undefined;
  },

  request: function(options, then) {
    var self = this

    var url = [this.protocol, '://'];
      
    if (this.coin != undefined) {
      url.push(this.coin);
      url.push('.');
    }

    url = url.concat([this.host, this.path, '?', querystring.stringify(options)]);

    request.get({
      url: url.join('')
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

  getminingandprofitsstatistics: function(then) {
    var options = {action: 'getminingandprofitsstatistics'};
    this.get(options, function(err, data) {
      then(err, data.return);
    }); 
  },

  getautoswitchingandprofitsstatistics: function(then) {
    var options = {action: 'getautoswitchingandprofitsstatistics'};
    this.get(options, function(err, data) {
      then(err, data.return);
    }); 
  },

 
  getuserallbalances: function(then) {
    var options = {action: 'getuserallbalances'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },

  getblockcount: function(then) {
    var options = {action: 'getblockcount'};
    this.get(options, function(err, data) {
      then(err, data);
    }); 
  },

  getblocksfound: function(then) {
    var options = {action: 'getblocksfound'};
    this.get(options, function(err, data) {
      then(err, data);
    }); 
  },

  getuserallbalances: function(then) {
    var options = {action: 'getuserallbalances'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },

  getblockstats: function(then) {
    var options = {action: 'getblockstats'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },
  
  getcurrentworkers: function(then) {
    var options = {action: 'getcurrentworkers'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },

 getdashboarddata: function(id, then) {
    var options = {id: id, action: 'getdashboarddata'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },

 getdifficulty: function(then) {
    var options = {action: 'getdifficulty'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },

 getestimatedtime: function(then) {
    var options = {action: 'getestimatedtime'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },

 gethourlyrates: function(then) {
    var options = {action: 'gethourlyrates'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },

 getnavbardata: function(then) {
    var options = {action: 'getnavbardata'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },

 getpoolhashrate: function(then) {
    var options = {action: 'getpoolhashrate'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },

 getpoolinfo: function(then) {
    var options = {action: 'getpoolinfo'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },

 getpoolsharerate: function(then) {
    var options = {action: 'getpoolsharerate'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },

 getpoolstatus: function(then) {
    var options = {action: 'getpoolstatus'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },

 gettimesincelastblock: function(then) {
    var options = {action: 'gettimesincelastblock'};
    this.get(options, function(err, data) {
      then(err, data);
    });
  },

 gettopcontributors: function(then) {
    var options = {action: 'gettopcontributors'};
    this.get(options, function(err, data) {
      then(err, data);
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
