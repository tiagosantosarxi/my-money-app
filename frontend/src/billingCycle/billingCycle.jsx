import React, { Component } from "react";
import ContentHeader from '../common/template/contentHeader'
import Content from '../common/template/content'
import Tabs from "../common/tab/tabs";
import TabsHeader from "../common/tab/tabsHeader";
import TabsContent from "../common/tab/tabsContent";
import TabHeader from "../common/tab/tabHeader";

class BillingCycle extends Component {
    render() {
        return (
            <div>
                <ContentHeader title="Ciclo de Pagamento" small="Registo" />
                <Content>
                    <Tabs>
                        <TabsHeader>
                            <TabHeader label="Listar" icon="bars" target="tabList" />
                            <TabHeader label="Adicionar" icon="plus" target="tabCreate" />
                            <TabHeader label="Alterar" icon="pencil" target="tabUpdate" />
                            <TabHeader label="Eliminar" icon="trash-o" target="tabDelete" />
                        </TabsHeader>
                        <TabsContent>

                        </TabsContent>
                    </Tabs>
                </Content>
            </div>
        )
    }
}

export default BillingCycle
