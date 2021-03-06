import * as React from 'react'
import * as css from './styles.scss'
import axios from 'axios'

import { Helmet } from 'react-helmet'

import { SvgFixer } from 'utils'

import { Aside, Navigation, RequestsPanel, Sidebar } from 'segments'

import { Title, GroupLinks } from 'components'

interface T {
    base?: string;
    links?: any;
    children?: string | React.ReactChild | React.ReactNode | any[];
}

interface S {
    title: string;
    pages: any;
}

export default class CoreLayout extends React.Component<T, S> {
    static defaultProps = {
        base: '',
        links: []
    }

    state = {
        title: 'React Starter App',
        pages: []
    }

    componentDidMount () {
        document.title = this.state.title
        SvgFixer()
        this.handleLoadPages()
    }

    componentDidUpdate () {
        window.scrollTo(0, 0)
    }

    handleLoadPages = () => {
        axios
            .get('/cp/api/entities/pages.json')
            .then((response) => {
                if (typeof (response.data) !== 'undefined') {
                    this.setState({ ...this.state, pages: response.data })
                }
            })
            .catch((err) => {
                console.log('err: ', err)
            })
    }

    renderSidebar = () => {
        const sbc: any = []
        const { pages } = this.state
        const { links, base } = this.props

        const submenuBlock: any = []

        if (links.length) {
            sbc.push(css.sidebar_long)

            submenuBlock.push(
                <Aside title="Интернет магазин" key="submenu">
                    <GroupLinks
                        base="shop"
                        links={links}
                    />
                </Aside>
            )
        }

        return (
            <div className={sbc.join(' ')}>
                <Sidebar pages={pages} base={base} />
                {submenuBlock}
            </div>
        )
    }

    renderContent = () => {
        const scc: any = []

        const { children, links } = this.props

        scc.push(css.body)

        if (links.length) {
            scc.push(css.body_short)
        }

        return (
            <div className={scc.join(' ')}>
                <header className={css.header}>
                    <div>
                        <Title label="Контакт" size="medium" />
                    </div>
                    <Navigation />
                </header>

                <RequestsPanel />

                <div className={css.content}>
                    {children}
                </div>
            </div>
        )
    }

    render () {
        return (
            <div className={css.layout}>
                <Helmet>
                    <title>My Title</title>
                    <meta name="description" content="Helmet application" />
                </Helmet>

                <section className={css.main}>
                    { this.renderSidebar() }
                    { this.renderContent() }
                </section>
            </div>
        )
    }
}
