import * as React from 'react'
import * as css from './styles.scss'
// import WebStorage from 'react-webstorage'
// import { Input, Checkbox, Button } from 'components'

// const store = new WebStorage(window.localStorage ||
//     window.sessionStorage
// )

export default class Auth extends React.Component<{}, {}> {
    state = {
        save: false,
        login: '',
        password: ''
    }

    // componentWillMount () {
    //     this.setState({
    //         save: store.getItem('save') === 'on'
    //     })

    //     this.setState({
    //         login: store.getItem('login')
    //     })

    //     this.setState({
    //         password: store.getItem('password')
    //     })
    // }

    // handleChange = (event) => {
    //     this.setState({
    //         [event.target.name]: event.target.value
    //     })
    // }

    handleSubmit = (event) => {
        event.preventDefault()

    //     if (this.state.save) {
    //         store.setItem('save', this.state.save)
    //         store.setItem('login', this.state.login)
    //         store.setItem('password', this.state.password)
    //     } else {
    //         store.clear()
    //     }
    }

    // inputItem (item, index) {
    //     return (
    //         <div className={css.login__row} key={index.toString()}>
    //             <Input
    //                 type={item.type}
    //                 name={item.name}
    //             />
    //         </div>
    //     )
    // }

    render () {
        // const inputs = [
        //     {
        //         type: 'text',
        //         name: 'login'
        //     },
        //     {
        //         type: 'password',
        //         name: 'password'
        //     }
        // ]

        return (
            <form action="" onSubmit={this.handleSubmit} className={css.login} method="POST">
                AUTH Page
            </form>
        )
        // return (
        //     <form action="" onSubmit={this.handleSubmit} className={css.login} method="POST">
        //         <span>'https://codeclimate.com/login'</span>

        //         <div className={css.login__logo}>
        //             <img
        //                 src={require('images/lightning.svg')}
        //                 className={css['not-found__figure__image']}
        //                 alt="Error: 4xx" />
        //         </div>

        //         <div className={css.login__body}>
        //             {inputs.map(this.inputItem)}

        //             <div className={css.login__row}>
        //                 <div className={css.login__row__col}>
        //                     <Checkbox label="Запомнить меня" checked={this.state.save} />
        //                 </div>

        //                 <div className={[css.login__row__col, css.login__row__col_last].join(' ')}>
        //                     <Button type="submit" label="Войти" />
        //                 </div>
        //             </div>
        //         </div>
        //     </form>
        // )
    }
}
