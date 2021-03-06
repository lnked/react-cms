import * as React from 'react'

import axios from 'axios'

import SortableTree from 'react-sortable-tree'

import 'react-sortable-tree/style.css'

import { Content } from 'segments'

interface S {
    treeData: any;
}

export default class Structure extends React.Component<{}, S> {
    state = {
        treeData: []
    }

    componentDidMount () {
        this._handleLoadStructure()
    }

    _handleLoadStructure () {
        axios
            .get('/cp/api/entities/structure.json')
            .then((response) => {
                this.setState({ treeData: response.data })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    render () {
        return (
            <Content>
                <div style={{ height: '1000px', border: '1px solid lime' }}>
                    <SortableTree
                        treeData={this.state.treeData}
                        onChange={treeData => this.setState({ treeData })}
                    />
                </div>
            </Content>
        )
    }
}
