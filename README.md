# hexo-sup-footnote
[![npm version](https://img.shields.io/npm/v/hexo-sup-footnote.svg?)](https://www.npmjs.com/package/hexo-sup-footnote) [![travis build status](https://img.shields.io/travis/guorant/hexo-sup-footnote/master.svg?)](https://travis-ci.org/guorant/hexo-sup-footnote) [![Coverage Status](https://coveralls.io/repos/github/guorant/hexo-sup-footnote/badge.svg?branch=master)](https://coveralls.io/github/guorant/hexo-sup-footnote?branch=master) [![npm dependencies](https://img.shields.io/david/guorant/hexo-sup-footnote.svg?)](https://david-dm.org/guorant/hexo-sup-footnote#info=dependencies&view=table) [![npm dev dependencies](https://img.shields.io/david/dev/guorant/hexo-sup-footnote.svg?)](https://david-dm.org/guorant/hexo-sup-footnote#info=devDependencies&view=table)

A plugin to support markdown sup footnotes in your Hexo blog posts.

## Installation

```
npm install hexo-sup-footnote --save
```

If Hexo detect automatically all plugins, that's all.  

If that is not the case, register the plugin in your `_config.yml` file :
```
plugins:
  - hexo-sup-footnote
```

## Configuration

```
sup_footnote:
  location_target_class: location-target
```

## Syntax

### Mardown
```
footnote with ①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳ first type No.^①^
another footnote with ❶❷❸❹❺❻❼❽❾❿⓫⓬⓭⓮⓯⓰⓱⓲⓳⓴ second type No.^❷^
third type footnote with ㊀㊁㊂㊃㊄㊅㊆㊇㊈㊉ third type No.^㊂^
fourth type footnote with ㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩ fourth type No.^㈣^
fifth type footnote with ⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂⒃⒄⒅⒆⒇ fifth type No.^⑸^
sixth type footnote with ⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑⒒⒓⒔⒕⒖⒗⒘⒙⒚⒛ sixth type No.^⒍^
seventh type footnote with ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ seventh type No.^Ⅶ^
eighth type footnote with ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹ eighth type No.^ⅷ^
ninth type footnote with ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ ninth type No.^Ⓘ^
tenth type footnote with ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ tenth type No.^ⓙ^
eleventh type footnote with ⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵ eleventh type No.^⒦^
twelfth type footnote with 1234567890 twelfth type No.^[12]^

①first type No.: 第一类上标
❷second type No.: 第二类上标
㊂third type No.: 第三类上标
㈣fourth type No.: 第四类上标
⑸fifth type No.: 第五类上标
⒍sixth type No.: 第六类上标
Ⅶseventh type No.: 第七类上标
ⅷeighth type No.: 第八类上标
Ⓘninth type No.: 第九类上标
ⓙtenth type No.: 第十类上标
⒦eleventh type No.: 第十一类上标
[12]twelfth type No.: 第十二类上标
```

See [Demo](http://kchen.cc/2016/11/10/footnotes-in-hexo/) here.

### Output
![footnotes](http://data.kchen.cc/mac_qrsync/71e694ce6f0052b83f7af81cfa7ccc64.png-960.jpg)