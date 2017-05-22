
"use strict";

module.exports = function(context) {
    return {
        'ImportDeclaration': function(node) {
            console.log(node.source.value);
        }
    };
};

module.exports.schema = [];
