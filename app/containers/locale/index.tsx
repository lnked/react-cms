import * as React from 'react'
import * as css from './styles.scss'

import axios from 'axios'

import { Checkbox, Copied, Badge, Button, Select } from 'components'

import { Content, Search } from 'segments'

// import * as map from 'lodash/map'
// import * as add from 'lodash/fp/add'

// const addOne = add(1)
// map([1, 2, 3], addOne)

// import { Table, Cell, Header, Footer } from 'components/table'
// import { Table, Cell, Header, Footer } from '../../components/table'
// console.log(Table, Cell, Header, Footer)

interface S {
    locales: any;
}

export default class Locale extends React.Component<{}, S> {
    state = {
        locales: []
    }

    componentDidMount () {
        axios
            .get('/cp/api/entities/locales.json')
            .then((response) => {
                this.setState({ locales: response.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    handleChange = () => { }

    render () {
        const { locales } = this.state

        return (
            <Content>
                <div className={css.holder}>
                    <div className={css.group}>
                        <Search name="word" placeholder="Поиск слова или ключа" className={css.search} />

                        <Button variant="primary">Добавить слово</Button>
                        <Button variant="normal">Сбросить фильтры</Button>
                    </div>

                    <div className={css.sort}>
                        Сортировать:

                        <Select
                            name="sort"
                            value={1}
                            autosize={false}
                            clearable={false}
                            onChange={this.handleChange}
                            options={[
                                { value: '1', label: 'По новизне' },
                                { value: '2', label: 'По алфавиту' },
                                { value: '3', label: 'Только системные' },
                                { value: '4', label: 'Только пользовательские' }
                            ]}
                        />
                    </div>
                </div>

                <div className={css.table}>
                    <div className={css.table__head}>
                        <table className={css.table__item}>
                            <colgroup>
                                <col width={40} />
                                <col />
                            </colgroup>
                            <thead>
                                <tr>
                                    <th>
                                        <Checkbox name="checkall" size="small" />
                                    </th>
                                    <th>Ключ</th>
                                    <th>Переводы</th>
                                    <th>Примеры</th>
                                    <th>Группа</th>
                                </tr>
                            </thead>
                        </table>
                    </div>

                    <div className={css.table__body}>
                        <table className={css.table__item}>
                            <colgroup>
                                <col width={40} />
                                <col />
                            </colgroup>
                            <tbody>
                                {locales.map((item: any, id: number) => (
                                    <tr key={id}>
                                        <td>
                                            <Checkbox name={`item[${id}]`} size="small" />
                                        </td>
                                        <td><Copied target={item.key} /></td>
                                        <td>
                                            {Object.keys(item.translates).map(key => (
                                                <div key={key}>
                                                    <Copied target={item.translates[key]} /><br/>
                                                </div>
                                            ))}
                                        </td>
                                        <td>key php twig smarty text</td>
                                        <td><Badge title={item.type} /></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                <br /><br /><br />
                Locale!<br /><br />
                dictionary<br />
                localization
            </Content>
        )
    }
}
