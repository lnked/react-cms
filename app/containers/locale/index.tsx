import * as React from 'react'
import * as css from './styles.scss'

import { Checkbox, Copied, Badge, Button, Select } from 'components'

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
    handleChange = () => { }

    render () {
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

                <div>
                    <table className={css.table}>
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
                        <tbody>
                            <tr>
                                <td>
                                    <Checkbox name="item[1]" size="small" />
                                </td>
                                <td><Copied target="buttons.save" /></td>
                                <td>
                                    <Copied target="Sicherheit" /><br />
                                    <Copied target="SicheSaverheit" /><br />
                                    <Copied target="Сохранить" />
                                </td>
                                <td>key php twig smarty text</td>
                                <td><Badge title="Системный" /></td>
                            </tr>
                            <tr>
                                <td>
                                    <Checkbox name="item[1]" size="small" />
                                </td>
                                <td><Copied target="buttons.save" /></td>
                                <td>
                                    <Copied target="Sicherheit" /><br />
                                    <Copied target="SicheSaverheit" /><br />
                                    <Copied target="Сохранить" />
                                </td>
                                <td>key php twig smarty text</td>
                                <td><Badge title="Системный" /></td>
                            </tr>
                        </tbody>
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
