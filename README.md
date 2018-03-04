# @roadhump/hocs

Small useful HOCs based on recompose

### renderIf()

```js
renderIf(
    test: (props: Object) => boolean,
    Component: ReactClass | ReactFunctionalComponent | string
): HigherOrderComponent
```

Renders `Component` if `test` is true, otherwise default wrapped component.

### renderNothingIf((props) => Boolean)

```js
renderNothingIf(
    test: (props: Object) => boolean,
): HigherOrderComponent
```

Renders to null if `test` is true, otherwise default wrapped component.

### onMount

```js
onMount(
    func: (props: Object) => any,
): HigherOrderComponent
```

Run `func` on `componentDidMount` lifecycle handler.
