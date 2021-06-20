var resolve = require('json-refs').resolveRefs;
var YAML = require('js-yaml');
var fs = require('fs');

var root = YAML.load(fs.readFileSync('index.yaml').toString());

// console.log(root);
var options = {
  processContent: function (content) {
    // console.log(content);
    return YAML.load(content);
  },
  resolveLocalRefs: false
};

// ここからSampleAPIのYAML出力
resolve(root,{filter: ['relative', 'remote']}).then(function (results) {
  console.log(YAML.dump(results.resolved));
}, function (err) {
  console.log(err.stack);
});
