import * as React from 'react'
import * as css from './styles.scss'

import { Button, ChangeView } from 'components'

export default class RequestsPanel extends React.Component<{}, {}> {
    render () {
        return (
            <div className={css.requests}>
                <div>
                    <Button size="small" variant="info">Добавить контакт</Button>
                    <Button size="small" variant="success" rounded>Сохранить</Button>
                </div>

                <div className={css.right}>
                    <ChangeView />
                </div>
            </div>
        )
    }
}
