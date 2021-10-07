import axios from 'axios'
const BASE_URL = 'http://localhost:3003/api'
import React, { Component } from "react";
import Content from "../common/template/content";
import ContentHeader from "../common/template/contentHeader";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";

export default class Dashboard2 extends Component {

    constructor(props) {
        super(props)
        this.state = { credit: 0, debt: 0 }
    }   

    componentWillMount() {
        axios.get(`${BASE_URL}/billingCycles/summary`).then(resp => this.setState(resp.data))
    }

    render() {
        const { credit, debt } = this.state

        return (
            <div>
                <ContentHeader title="Dashboard2" small="Versão 1.0" />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value={`${credit} €`} text="Total Credits" />
                        <ValueBox cols='12 4' color='red' icon='credit-card' value={`${debt} €`} text="Total Debits" />
                        <ValueBox cols='12 4' color='blue' icon='money' value={`${credit-debt} €`} text="Consolidated Amount" />
                    </Row>
                </Content>
            </div>
        )
    }
}
