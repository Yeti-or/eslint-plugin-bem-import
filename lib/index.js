"use strict";

module.exports.rules = {
    'no-double-entities': require('./rule')
};

module.exports.configs = {
    recommended: {
        rules: {
            'bem-import/no-double-entities': 2
        }
    }
};
