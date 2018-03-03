import lifecycle from 'recompose/lifecycle';

export default (func) =>
    lifecycle({
        componentDidMount() {
            func(this.props);
        }
    })