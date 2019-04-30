# Starting place for hooks?
Here are the [official docs on hooks](https://reactjs.org/docs/hooks-intro.html#motivation), but there's also a nice [Traversy hooks video](https://www.youtube.com/watch?v=mxK8b99iJTg) and the [hooks tutorial article](https://scotch.io/tutorials/build-a-react-to-do-app-with-react-hooks-no-class-components#toc-react-hooks) it was based off of.

Here are the [docs for useEffects](https://reactjs.org/docs/hooks-effect.html) as well. `useEffects` is basically a new api for `componentDidMount` and `componentDidUpdate`.

# Why are you passing an empty array when you use useEffect()?

[This article explains the how](https://www.andreasreiterer.at/react-useeffect-hook-loop/), but the actual docs [explain it a little more in depth](https://reactjs.org/docs/hooks-effect.html#tip-optimizing-performance-by-skipping-effects)
Basially, you can pass a second argument, an array of objects, to `useEffect`. This says "hey, only run this effect if there are changes in the objects listed here." If we DON'T need props or state or context or anything, eg an async call when the page loads, then send it an empty array. This tells it to run once like it normally does when the component is rendered, but then never again.