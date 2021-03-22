miningpoolhub
------------


This is a very simple api client that helps interact with the [miningpoolhub](http://miningpoolhub.com/) mining pool api.  

Here is a list of all the methods that are available with this api.
[API reference](https://github.com/miningpoolhub/php-mpos/wiki/API-Reference)

Installation
------------
```bash
npm install miningpoolhub --save
```

Usage
------------

```javascript

var options = {
  "api_key": ""
}

var MiningPoolHub = require('miningpoolhub');
var miningPoolHub = new MiningPoolHub(options);

miningPoolHub.getuserallbalances(function(err, data) {
  console.log(data);
})


```




Contributing
------------

If you'd like to contribute a feature or bugfix: Thanks! To make sure your fix/feature has a high chance of being included, please read the following guidelines:

1. Post a [pull request](https://github.com/ballantyne/miningpoolhub/compare/).
2. Make sure there are tests! We will not accept any patch that is not tested.
   It's a rare time when explicit tests aren't needed. If you have questions
   about writing tests for paperclip, please open a
   [GitHub issue](https://github.com/ballantyne/miningpoolhub/issues/new).


And once there are some contributors, then I would like to thank all of [the contributors](https://github.com/ballantyne/miningpoolhub/graphs/contributors)!


License
-------

It is free software, and may be redistributed under the terms specified in the MIT-LICENSE file.

Copyright
-------
© 2018 Scott Ballantyne. See LICENSE for details.
