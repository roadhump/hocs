import branch from 'recompose/branch';
import renderNothing from 'recompose/renderNothing';

export default condition =>
  branch(condition, renderNothing);
