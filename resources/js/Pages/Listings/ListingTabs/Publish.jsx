import React from "react";
import { Col, Row, Form, Input, DatePicker, Select } from "antd";

const Publish = () => {
    return (
        <Row gutter={[8, 4]}>
            <Col xs={24} md={12}>
                <Form.Item name="listingstatus" label="Listing Status">
                    {" "}
                    <Select
                        name="listingstatus"
                        options={[
                            {
                                value: "Demo Status",
                                label: "Demo Status",
                            },
                        ]}
                        //onChange={handleCompany}
                        placeholder="--select listing status--"
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
            </Col>

            <Col xs={24} md={12}>
                <Form.Item name="group" label="Group">
                    {" "}
                    <Select
                        name="group"
                        options={[
                            {
                                value: "Demo Group",
                                label: "Demo Group",
                            },
                        ]}
                        //onChange={handleCompany}
                        placeholder="--select group--"
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
            </Col>

            <Col xs={24} md={12}>
                <Form.Item name="pagelayout" label="Page Layout">
                    {" "}
                    <Select
                        name="pagelayout"
                        options={[
                            {
                                value: "Demo Layout",
                                label: "Demo Layout",
                            },
                        ]}
                        //onChange={handleCompany}
                        placeholder="--select page layout--"
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
            </Col>

            <Col xs={24} md={12}>
                <Form.Item name="contentaccess" label="Content Access">
                    {" "}
                    <Select
                        name="contentaccess"
                        options={[
                            {
                                value: "Demo Content",
                                label: "Demo content",
                            },
                        ]}
                        //onChange={handleCompany}
                        placeholder="--select content access--"
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
            </Col>

            <Col xs={24} md={8}>
                <Form.Item name="publishon" label="Published On">
                    <DatePicker
                        style={{ width: "100%" }}
                        name="publishon"
                        placeholder="Published On"
                    />
                </Form.Item>
            </Col>

            <Col xs={24} md={8}>
                <Form.Item name="pstate" label="Published State">
                    {" "}
                    <Select
                        name="pstate"
                        options={[
                            {
                                value: "YES",
                                label: "YES",
                            },
                        ]}
                        //onChange={handleCompany}
                        placeholder="--select published state--"
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
            </Col>

            <Col xs={24} md={8}>
                <Form.Item name="expireon" label="Expires On">
                    <DatePicker
                        style={{ width: "100%" }}
                        name="expireon"
                        placeholder="Expires On"
                    />
                </Form.Item>
            </Col>
        </Row>
    );
};

export default Publish;
