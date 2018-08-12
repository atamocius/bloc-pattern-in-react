# Using BLoC Pattern in React

A demo application showing a sample implementation of the BLoC pattern in React.

## How to run

### Install dependencies

```cmd
yarn
```

### Start the application

```cmd
yarn start
```

## Setup

A _Counter_ component's state is implemented in 4 different ways:

- Using the State object
- Using MobX
- Using Subject from RxJS
- Using the BLoC pattern

## Intention

This demo is intended to show how the _BLoC pattern_ (a pattern specifically for Flutter) differs from other methods. The syntax of Dart can be a bit hard to understand due to the syntax noise (as compared to JSX), so implementing it in React might allow for a different perspective in understanding the BLoC pattern.

## Notes

- The implementation of `StreamBuilder` and `AsyncSnapshot` are just approximations and have only been partially implemented just to satisfy the needed features for the demo.
- Most of the BLoC demos out there show that the `Sink` is exposed as public. I'm not entirely sold on the idea of exposing it; I think `add()` (`next()` in _RxJS_) should be called as an _action_, similar to how `MobX` specifically tags methods that mutate the state as `action`s. This ensures that the operations being done on the stream are encapsulated and are explicitly labeled (ie. `increment()`, `decrement()`)
- Inspiration: [Brian Egan - Build a Reactive Flutter App!](https://www.youtube.com/watch?v=As6sFqpIwII)
