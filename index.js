'use strict';

var semver = require('semver');

if (semver.satisfies(process.version, '>=6.0.0'))
    module.exports = require('./gulp-fasttime-lint');
else
{
    var colors = require('ansi-colors');
    var through = require('through2');

    module.exports =
    function ()
    {
        var stream = through.obj();
        process.nextTick
        (
            function ()
            {
                stream.end();
            }
        );
        return stream;
    };
    console.error(colors.red('Validation not available in Node.js < 6'));
}