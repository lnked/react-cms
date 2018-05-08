import * as React from 'react'

import {
    System,
    Dialog,
    Content
} from 'segments'

import {
    Tabs,
    Input,
    Range,
    Title,
    Radio,
    Badge,
    Switch,
    Loader,
    Widget,
    Copied,
    Button,
    Spinner,
    Sandwich,
    Quantity,
    Progress,
    // Truncate,
    Important,
    Checkbox,
    SpeechText,
    FileUpload,
    ColorPicker,
    AddressInput,
    SelectionBox
} from 'components'

export default class Dashboard extends React.Component<{}, {}> {
    renderDropzone = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <FileUpload /><br /><br />
            <FileUpload />
        </div>
    )

    renderProgress = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <Progress /><br /><br />
            <Progress />
        </div>
    )

    renderSystem = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <System /><br /><br />
            <System />
        </div>
    )

    renderLoader = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <Loader /><br /><br />
            <Spinner />
        </div>
    )

    renderCopied = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <Copied target="Lorem Ipsum" /><br /><br />
            <Copied target="Lorem Ipsum Dolar And so so so">Скопировать длинный текст</Copied><br /><br />
            <Copied>Copy to clipboard</Copied>
        </div>
    )

    renderAddressInput = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <AddressInput /><br /><br />
            <AddressInput />
        </div>
    )

    renderDialog = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <Dialog type="alert" title="Предупреждение!" /><br /><br />
            <Dialog
                type="prompt"
                title="Какой сейчас год?"
                placeholder="Укажите текущий год"
                value={2018}
            /><br /><br />
            <Dialog
                type="prompt"
                title="Какой сейчас год?"
                placeholder="Укажите текущий год"
            /><br /><br />
            <Dialog
                type="confirm"
                title="Вы уверены что хотите удалить файл?"
            /><br /><br />
            <Dialog
                type="confirm"
                title="Вы уверены что хотите удалить файл?"
            />
        </div>
    )

    renderImportant = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <Important variant="success">
                <p>You cannot pass raw card information to <code>stripe.createSource(sourceData)</code>.
                    Instead, you must gather card information in an Element and use.
                    You can also pass an existing card token to convert it into a <code>Source</code> object.
                </p>
            </Important>
            <br /><br />
            <Important variant="error">
                <p>You cannot pass raw card information to <code>stripe.createSource(sourceData)</code>.
                    Instead, you must gather card information in an Element and use.
                    You can also pass an existing card token to convert it into a <code>Source</code> object.
                </p>
            </Important>
            <br /><br />
            <Important variant="info">
                <p>You cannot pass raw card information to <code>stripe.createSource(sourceData)</code>.
                    Instead, you must gather card information in an Element and use.
                    You can also pass an existing card token to convert it into a <code>Source</code> object.
                </p>
            </Important>
            <br /><br />
            <Important variant="normal">
                <p>You cannot pass raw card information to <code>stripe.createSource(sourceData)</code>.
                    Instead, you must gather card information in an Element and use.
                    You can also pass an existing card token to convert it into a <code>Source</code> object.
                </p>
            </Important>
            <br /><br />
            <Important variant="warning">
                <p>You cannot pass raw card information to <code>stripe.createSource(sourceData)</code>.
                    Instead, you must gather card information in an Element and use.
                    You can also pass an existing card token to convert it into a <code>Source</code> object.
                </p>
            </Important>
        </div>
    )

    renderRange = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <Range />
        </div>
    )

    renderTitle = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <Title size="small" type="primary" label="Test title" />
            <Title size="small" type="secondary" label="Test title" />
            <Title size="normal" type="primary" label="Test title" />
            <Title size="normal" type="secondary" label="Test title" />
            <Title size="small" type="secondary" label="Test title" />
            <Title size="medium" type="primary" label="Test title" />
            <Title size="medium" type="secondary" label="Test title" />
            <Title size="small" type="secondary" label="Test title" />
            <Title size="big" type="primary" label="Test title" />
            <Title size="big" type="secondary" label="Test title" />
        </div>
    )

    // renderTruncate = () => {
    //     return (
    //         <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
    //             <Truncate length={100}>
    //                 Reference site about Lorem Ipsum, giving information on its origins,
    //                 as well as a random Lipsum generator
    //             </Truncate>
    //             <br /><br />
    //             <Truncate rows={2}>
    //                 Reference site about Lorem Ipsum, giving information on its origins,
    //                 as well as a random Lipsum generator
    //                 Reference site about Lorem Ipsum, giving information on its origins,
    //                 as well as a random Lipsum generator
    //             </Truncate>
    //         </div>
    //     )
    // }

    renderTabs = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <Tabs title="tabs test" />
        </div>
    )

    renderSelectionBox = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <SelectionBox
                items={[
                    {
                        label: 'Первый',
                        value: 1
                    },
                    {
                        label: 'Второй',
                        value: 2
                    },
                    {
                        label: 'Третий',
                        value: 3
                    },
                    {
                        label: 'Четвертый',
                        value: 4
                    },
                    {
                        label: 'Пятый',
                        value: 5
                    },
                    {
                        label: 'Шестой',
                        value: 6
                    }
                ]}
                name="sradio"
                checked={3}
                isMultiple={false}
            /><br /><br />
            <SelectionBox
                items={[
                    {
                        label: 'Первый',
                        value: 1
                    },
                    {
                        label: 'Второй',
                        value: 2
                    },
                    {
                        label: 'Третий',
                        value: 3
                    },
                    {
                        label: 'Четвертый',
                        value: 4
                    },
                    {
                        label: 'Пятый',
                        value: 5
                    },
                    {
                        label: 'Шестой',
                        value: 6
                    }
                ]}
                name="scheckbox"
                checked={[1, 2, 3]}
                isMultiple
            />
        </div>
    )

    renderSandwich = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <Sandwich /><br /><br />
            <Sandwich isOpened />
        </div>
    )

    renderSwitch = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <Switch name="switch1" />
            <br /><br />
            <Switch name="switch2" checked />
            <br /><br />
            <Switch name="switch3" round />
        </div>
    )

    renderInput = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <SpeechText propname="value">
                <Input name="input0" required />
            </SpeechText><br /><br />
            <SpeechText propname="placeholder">
                <Input name="input0" required multiline={4} />
            </SpeechText><br /><br />
            <Input name="input1" value="Входящие общие папки" cleaned /><br /><br />
            <Input name="input2" value="Входящие общие папки" cleaned /><br /><br />
            <Input name="input3" focus />
        </div>
    )

    renderQuantity = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <Quantity name="count" min={1} max={999} step={1} />
        </div>
    )

    renderColorPicker = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <ColorPicker />
            <br /><br />
            <ColorPicker color="#f00" />
        </div>
    )

    renderRadio = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <Radio name="radio" label="1 Входящие" value={1} /><br /><br />
            <Radio name="radio" label="2 Входящие" value={2} /><br /><br />
            <Radio name="radio" label="3 Входящие" value={3} />
        </div>
    )

    renderCheckbox = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <Checkbox name="hecke1" /><br /><br />
            <Checkbox name="hecke2" checked /><br /><br />
            <Checkbox name="hecke3" label="Корзина" />
        </div>
    )

    renderButton = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <Button>Применить</Button><br /><br />
            <Button size="small">Button size-small</Button><br /><br />
            <Button size="normal">Button size-normal</Button><br /><br />
            <Button size="medium">Button size-medium</Button><br /><br />
            <Button size="large">Button size-large</Button><br /><br />
            <Button variant="pure">Button pure</Button><br /><br />
            <Button variant="link">Button link</Button><br /><br />
            <Button variant="info">Button info</Button><br /><br />
            <Button variant="danger">Button danger</Button><br /><br />
            <Button variant="normal">Button normal</Button><br /><br />
            <Button variant="primary">Button primary</Button><br /><br />
            <Button variant="success">Button success</Button><br /><br />
            <Button variant="warning">Button warning</Button><br /><br />
            <Button variant="subtle-link">Button subtle-link</Button>
        </div>
    )

    renderBadge = () => (
        <div style={{ marginBottom: '15px', padding: '10px', border: '1px solid lime' }}>
            <Badge>badge default</Badge><br /><br />
            <Badge variant="info">badge info</Badge><br /><br />
            <Badge variant="primary">badge primary</Badge><br /><br />
            <Badge variant="success">badge success</Badge><br /><br />
            <Badge variant="warning">badge warning</Badge><br /><br />
            <Badge variant="danger">badge danger</Badge>
        </div>
    )

    render () {
        return (
            <Content>
                <Widget title="Общее использование">
                    <div>Свободное место</div>
                </Widget>

                <Widget title="Использовано свободного места">
                    <div>
                        {this.renderProgress()}
                        {this.renderSystem()}
                        {this.renderDropzone()}
                        {this.renderCopied()}
                        {this.renderLoader()}
                        {this.renderRange()}
                        {this.renderAddressInput()}
                        {this.renderImportant()}
                        {this.renderQuantity()}
                        {this.renderInput()}
                        {this.renderSelectionBox()}
                        {this.renderTitle()}
                        {this.renderDialog()}
                        {this.renderTabs()}
                        {this.renderSandwich()}
                        {this.renderSwitch()}
                        {this.renderColorPicker()}
                        {this.renderRadio()}
                        {this.renderCheckbox()}
                        {this.renderButton()}
                        {this.renderBadge()}
                    </div>
                </Widget>

                <Widget title="Данные" />
            </Content>
        )
    }
}
