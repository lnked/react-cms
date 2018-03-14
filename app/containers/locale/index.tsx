import * as React from 'react'
import * as css from './styles.scss'

import { Button } from 'components'

import { Content, Search } from 'segments'

// import { Table, Cell, Header, Footer } from 'components/table'
// import { Table, Cell, Header, Footer } from '../../components/table'

// console.log(Table, Cell, Header, Footer)

export default class Locale extends React.Component<{}, {}> {
    // shouldComponentUpdate () {
    //     const shouldUpdate =
    //         !shallowEqual(prevProps, nextProps) ||
    //         !shallowEqual(inst.state, nextState)

    //     return shouldUpdate
    // }
    render () {
        return (
            <Content>
                <div className={css.holder}>
                    <Search name="word" placeholder="Поиск слова или ключа" />

                    <Button variant="primary">Добавить слово</Button>
                    <Button variant="normal">Сбросить фильтры</Button>
                </div>

                <div>
                    <table className={css.table}>
                        <thead>
                            <tr>
                                <th>Ключ</th>
                                <th>Переводы</th>
                                <th>Примеры</th>
                                <th>Группа</th>
                            </tr>
                        </thead>
                    </table>
                    <br /><br /><br />
                    Locale!<br /><br />
                    dictionary<br />
                    localization
                </div>
            </Content>
        )
    }
}
