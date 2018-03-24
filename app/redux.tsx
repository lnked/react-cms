import { createStore } from 'redux'

/**
 * Это редюсер - чистая функция в формате(state, action) => state.
 * Он описывает то, как действие преобразовывает состояние в следующее состояние
 *
 * Формат состояния зависит от вас: это может быть примитивом,
 * массивом, объектом
 * или даже структурой данных Immutable.js.
 * Важно только одно, вы не должны изменять объект состояния
 * напрямую, а возвращать
 * новый объект, если состояние изменилось
 *
 * В этом примере мы используем `switch` и строки, но вы можете
 * использовать хелпер, который следует другому соглашению
 * (например, function maps), если это имеет смысл для вашего
 * проекта.
 */
function counter (state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1
        case 'DECREMENT':
            return state - 1
        default:
            return state
    }
}

// Создаем хранилище Redux которое хранит состояние вашего приложения.
// Его API - { subscribe, dispatch, getState }.
const store = createStore(counter)

// Вы можете подписаться на обновления вручную или использовать биндинги к вашему view layer.
store.subscribe(() =>
    console.log(store.getState())
)

// Единственный способ изменить внутреннее состояние - это вызвать действие
// Действия могут быть сериализированы, залогированы или сохранены и далее воспроизведены.
store.dispatch({ type: 'INCREMENT' })
// 1
store.dispatch({ type: 'INCREMENT' })
// 2
store.dispatch({ type: 'DECREMENT' })
// 1

// import * as React from 'react'
// import * as ReactDOM from 'react-dom'
// import { Provider } from 'react-redux'
// import { applyMiddleware, createStore } from 'redux'
// import thunk from 'redux-thunk'
// import * as Actions from 'actions'

// import Homepage from './containers/Homepage'
// import { helloApp } from 'reducers'

// const store = createStore(
//     helloApp,
//     applyMiddleware(thunk),
// )

// // Log the initial state
// console.log(store.getState())

// // Every time the state changes, log it
// // Note that subscribe() returns a function for unregistering the listener
// const unsubscribe = store.subscribe(() => {
//     console.log(store.getState())
// })

// store.dispatch(Actions.addLog('Hello from the react/redux/typescript/webpack boilerplate'))
// store.dispatch(Actions.addError('Both of these messages were dispatched via redux actions'))
// store.dispatch(Actions.getRandomChuckNorrisJoke())

// // unsubscribe from store updates
// unsubscribe()

// const mount: Element | null = document.querySelector('#app')

// if (mount !== null) {
//     ReactDOM.render(
//         <Provider store={store}>
//             <Homepage />
//         </Provider>,
//         mount,
//     )
// } else {
//     console.error(`#app not found in document`)
// }
