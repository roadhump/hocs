import branch from 'recompose/branch'
import renderComponent from 'recompose/renderComponent';

export default (condition, Component) =>
    branch(condition, renderComponent(Component));
