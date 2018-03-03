'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var recompose = require('recompose');

var renderIf = (function (condition, Component) {
    return recompose.branch(condition, recompose.renderComponent(Component), recompose.identity);
});

var NullComponent = function NullComponent() {
    return null;
};

var renderNothingIf = (function (condition) {
    return renderIf(condition, NullComponent);
});

var onMount = (function (func) {
    return recompose.lifecycle({
        componentDidMount: function componentDidMount() {
            func(this.props);
        }
    });
});

exports.renderIf = renderIf;
exports.renderNothingIf = renderNothingIf;
exports.onMount = onMount;
