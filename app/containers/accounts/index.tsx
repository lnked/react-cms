import * as React from 'react'

import { Content } from 'segments'

export default class Accounts extends React.Component<{}, {}> {
    render () {
        return (
            <Content>
                Пользователи<br />
                Группы<br />
                Дополнительные поля<br />
                Логи
            </Content>
        )
    }
}
