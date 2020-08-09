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

Tips
------------

Here are a few addresses where you can send me bitcoins.  If this library helps you and you are feeling especially generous because you were able to mine tons of that brand new altcoin super early in it's life I know that you will feel compelled to buy me la croix with magical internet money.  


* BTC: 1A1BrPyWpdXLPsidjaMAmyNG71vFwmKPSR
* BCH: qqhk5ce25fs706sk9vlnhtezpk3ezp9euc82cyky8v
* ETH: 0xC33DBB4D997e6A3d9457F41ff07fb13f8DA7bF64
* LTC: LS2P54xNErZ36pXp95zqTyST7XTx5XHEZy


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
