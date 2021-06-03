import React from 'react';
import {Row, Col, Typography} from 'antd';
import LeftPanelContainer from '../../../../components/HOC/withLeftPanel';
import ProductMapTree from "../../../../components/ProductMapTree";
import Head from "next/head";


const Capabilities: React.FunctionComponent = () => {
  return (
      <>
          <Head>
              <title>Product Map</title>
              <meta name="description" content="Product Map" />
          </Head>
    <LeftPanelContainer>
      <Row justify="space-between" style={{marginBottom: 40}}>
        <Col>
          <Typography.Text strong style={{fontSize: '1.4rem'}}>Product Map</Typography.Text>
        </Col>
      </Row>
      <Row>
        <ProductMapTree/>
      </Row>
    </LeftPanelContainer>
          </>
  );
};

export default Capabilities;