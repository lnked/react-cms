import * as React from 'react'

import axios from 'axios'

// import {
//     Importer
// } from 'utils'

import { Content } from 'segments'

interface S {
    components: any;
}

export default class Accounts extends React.Component<{}, S> {
    state = {
        components: []
    }

    componentDidMount () {
        this._handleComponentsLoad()
    }

    _handleComponentsLoad () {
        axios
            .get('/cp/api/entities/accounts.json')
            .then((response) => {
                this.setState({ components: response.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    renderPage = () => {
        // const { components } = this.state

        // const page: any = []

        // if (components.length) {
        //     const length = components.length - 1

        //     components.forEach((element: any, index: number) => {
        //         console.log(index, ' as ', element, Importer)

        //         import(`../../components/${element.name}`).then(m => {
        //             page.push('m.default')
        //         })

        //         // page.push(
        //         //     <Importer {...element.props} importer={() => import(`../../components/${element.name}`)} />
        //         // )

        //         if (index === length) {
        //             console.log('page: ', page)
        //         }
        //     })
        // }

        // return page
    }

    render () {
        return (
            <Content>
                {this.renderPage()}
                Пользователи<br />
                Группы<br />
                Дополнительные поля<br />
                Логи
            </Content>
        )
    }
}
