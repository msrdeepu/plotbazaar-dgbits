import React from "react";
import { Col, Row, Form, Input, Select } from "antd";
const { TextArea } = Input;

const Locationdetails = () => {
    return (
        <Row gutter={[8, 4]}>
            <Col xs={24} md={12}>
                <Form.Item label="Select State" name="state">
                    <Select
                        name="state"
                        options={[
                            {
                                value: "Demo State",
                                label: "Demo State",
                            },
                        ]}
                        //onChange={handleCompany}
                        placeholder="--select state--"
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Select Country" name="country">
                    <Select
                        name="country"
                        options={[
                            {
                                value: "Demo Country",
                                label: "Demo Country",
                            },
                        ]}
                        //onChange={handleCompany}
                        placeholder="--select country--"
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Area Location" name="arealocation">
                    <Input
                        name="arealocation"
                        placeholder="Enter Area Here..."
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="City/Town" name="city">
                    <Input name="city" placeholder="Enter City/Town Here..." />
                </Form.Item>
            </Col>
            <Col xs={24} md={8}>
                <Form.Item label="Pin Code" name="pincode">
                    <Input name="pincode" placeholder="Enter Pin Code Here" />
                </Form.Item>
            </Col>
            <Col xs={24} md={8}>
                <Form.Item label="Longitude" name="longitude">
                    <Input
                        name="longitude"
                        placeholder="Enter Longitude"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={8}>
                <Form.Item label="Latitude" name="latitude">
                    <Input
                        name="latitude"
                        placeholder="Enter Latitude"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Address" name="address">
                    <TextArea
                        rows={3}
                        name="address"
                        placeholder="Enter Address Here..."
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Landmark" name="landmark">
                    <TextArea
                        rows={3}
                        name="landmark"
                        placeholder="Enter Landmark Here..."
                    />
                </Form.Item>
            </Col>
        </Row>
    );
};

export default Locationdetails;
