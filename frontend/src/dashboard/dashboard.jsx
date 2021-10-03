import React, { Component } from "react";

import Content from "../common/template/content";
import ContentHeader from "../common/template/contentHeader";
import ValueBox from "../common/widget/valueBox";
import Row from "../common/layout/row";

class Dashboard extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Dashboard" small="Versão 1.0" />
                <Content>
                    <Row>
                        <ValueBox cols='12 4' color='green' icon='bank' value='10€' text="Total Credits" />
                        <ValueBox cols='12 4' color='red' icon='credit-card' value='10€' text="Total Debits" />
                        <ValueBox cols='12 4' color='blue' icon='money' value='0€' text="Consolidated Amount" />
                    </Row>
                </Content>
            </div>
        )
    }
}

export default Dashboard