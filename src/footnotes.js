'use strict';

var md = require('markdown-it')({
    // allow HTML tags
    html: true
});

var indexLabelList = [
    '①②③④⑤⑥⑦⑧⑨⑩⑪⑫⑬⑭⑮⑯⑰⑱⑲⑳',
    '❶❷❸❹❺❻❼❽❾❿⓫⓬⓭⓮⓯⓰⓱⓲⓳⓴',
    '㊀㊁㊂㊃㊄㊅㊆㊇㊈㊉',
    '㈠㈡㈢㈣㈤㈥㈦㈧㈨㈩',
    '⑴⑵⑶⑷⑸⑹⑺⑻⑼⑽⑾⑿⒀⒁⒂⒃⒄⒅⒆⒇',
    '⒈⒉⒊⒋⒌⒍⒎⒏⒐⒑⒒⒓⒔⒕⒖⒗⒘⒙⒚⒛',
    'ⅠⅡⅢⅣⅤⅥⅦⅧⅨⅩⅪⅫ',
    'ⅰⅱⅲⅳⅴⅵⅶⅷⅸⅹ',
    'ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓂⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ',
    'ⓐⓑⓒⓓⓔⓕⓖⓗⓘⓙⓚⓛⓜⓝⓞⓟⓠⓡⓢⓣⓤⓥⓦⓧⓨⓩ',
    '⒜⒝⒞⒟⒠⒡⒢⒣⒤⒥⒦⒧⒨⒩⒪⒫⒬⒭⒮⒯⒰⒱⒲⒳⒴⒵',
];

/**
 * Render markdown footnotes
 * @param {String} text
 * @returns {String} text
 */
function renderFootnotes(text, config) {
    var footnotes = [];
    var indexMap = {};
    var indexLabel = ('⓪' + indexLabelList.join('')).split('').join("|");
    var indexLabelMap = {'⓪': 0};
    indexLabelList.forEach(function(item, index) {
        item.split('').forEach(function (it, id) {
            indexLabelMap[it] = id + 1;
        });
    });
    var reFootnoteContent = new RegExp('('+ indexLabel 
        + '|\\[\\d+\\])([\\S \\t]+?)(?::|：) ?([\\S\\s]+?)(?=\\n[\\S\\s]+?(?:' 
        + indexLabel + '|\\[\\d+\\])(?:[\\S \\t]+?)(?::|：)|\n\n|$)', 'g');
    var html = '';

    // render (HTML) footnotes reference
    text = text.replace(reFootnoteContent, function (match, index, original, content) {
        var reIndex = original + '^' + index + '^';
        var indexId = (undefined !== indexLabelMap[index]) ? indexLabelMap[index] : parseInt(index.substring(1));
        if (-1 != text.indexOf(reIndex)) {
            footnotes.push(indexMap[reIndex] = {
                index: index,
                indexId: indexId,
                original: original,
                reIndex: reIndex
            });
            // remove footnote content
            return '<span id="supfntxt:' + indexId + 
            (config.location_target_class ? '" class="' + config.location_target_class : '') + 
            '">' + index + original + '</span>: ' + md.renderInline(content.trim())
            + '<a href="#supfnref:' + indexId + '">↩</a>';
        } else {
            // with no footnot index
            return match;
        }
    });

    // render footnotes (HTML)
    if (footnotes.length) {
        var replaceStr = footnotes.map(function (item) 
            { return item.reIndex.replace(/[-[\]{}()*+!<=:?.\\^$|#\s,]/g, '\\$&'); }).join("|");
        text = text.replace(new RegExp(replaceStr, 'gm'), function (match) {
            var item = indexMap[match];
            if (item) {
                return '<a id="supfnref:' + item.indexId + '" href="#supfntxt:' + item.indexId +
                (config.location_target_class ? '" class="' + config.location_target_class : '') + 
                '">' + item.original + '<sup>' + item.index + '</sup></a>';
            } else {
                return match;
            }
        });
    }

    return text;
}
module.exports = renderFootnotes;