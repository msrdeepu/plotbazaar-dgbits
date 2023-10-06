import React from "react";
import { Col, Row, Form, Input } from "antd";
const { TextArea } = Input;

const Calltoaction = () => {
    return (
        <Row gutter={[8, 4]}>
            <Col xs={24} md={12}>
                <Form.Item label="Call To Action Text Here" name="ctatext">
                    <Input name="ctatext" placeholder="Enter CTA Text Here" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Call To Action Link Here" name="ctalink">
                    <Input
                        name="ctalink"
                        placeholder="Enter CTA Link Here..."
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Header" name="header">
                    <TextArea name="header" placeholder="" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Body" name="body">
                    <TextArea name="body" placeholder="" />
                </Form.Item>
            </Col>
        </Row>
    );
};

export default Calltoaction;
