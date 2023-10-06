import React from "react";
import { Col, Row, Form, Input } from "antd";
const { TextArea } = Input;
import JoditEditor from "jodit-react";

const Propertycontent = () => {
    return (
        <Row gutter={[8, 4]}>
            <Col xs={24} md={12}>
                <Form.Item label="Intro" name="intro">
                    <JoditEditor name="intro" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Description" name="description">
                    <JoditEditor name="description" />
                </Form.Item>
            </Col>

            <Col xs={24} md={12}>
                <Form.Item label="Advantages" name="advantages">
                    <TextArea
                        rows={3}
                        name="advantages"
                        placeholder="Enter Advantages"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Location Details" name="locationdetails">
                    <TextArea
                        rows={3}
                        name="locationdetails"
                        placeholder="Enter Location Details"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Facilities" name="facilities">
                    <TextArea
                        rows={3}
                        name="facilities"
                        placeholder="Enter Facilities"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Highlights" name="highlights">
                    <TextArea
                        rows={3}
                        name="highlights"
                        placeholder="Enter Highlights"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Embed Video" name="">
                    <TextArea rows={3} name="" placeholder="" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Embed Map" name="">
                    <TextArea rows={3} name="" placeholder="" />
                </Form.Item>
            </Col>
            <Col xs={24}>
                <Form.Item label="Extra Info" name="">
                    <TextArea rows={3} name="" placeholder="" />
                </Form.Item>
            </Col>
        </Row>
    );
};

export default Propertycontent;
