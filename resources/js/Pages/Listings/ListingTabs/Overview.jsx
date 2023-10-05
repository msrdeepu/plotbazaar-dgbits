import React from "react";
import { Col, Row, Form, Input, Select, Radio } from "antd";
const { TextArea } = Input;

const Overview = () => {
    return (
        <Row gutter={[8, 4]}>
            <Col xs={24} md={12}>
                <Form.Item label="Property Title" name="ptitle">
                    <Input name="ptitle" placeholder="Enter Property Title" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Property Id" name="pid">
                    <Input name="pid" placeholder="Enter Property ID" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Category" name="category">
                    <Select
                        name="category"
                        options={[
                            {
                                value: "Demo Developers",
                                label: "Demo Developers",
                            },
                        ]}
                        //onChange={handleCompany}
                        placeholder="--select category--"
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Property Type" name="ptype">
                    <Select
                        name="ptype"
                        options={[
                            {
                                value: "Demo Property",
                                label: "Demo Property",
                            },
                        ]}
                        //onChange={handleCompany}
                        placeholder="--select property type--"
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Property Purpose" name="ppurpose">
                    <Select
                        name="ppurpose"
                        options={[
                            {
                                value: "Demo Property Purpose",
                                label: "Demo Property Purpose",
                            },
                        ]}
                        //onChange={handleCompany}
                        placeholder="--select property purpose--"
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Transaction" name="transaction">
                    <Select
                        name="transaction"
                        options={[
                            {
                                value: "Transaction",
                                label: "Transaction",
                            },
                        ]}
                        //onChange={handleCompany}
                        placeholder="--select Transactione--"
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Project Name" name="pname">
                    <Input name="pname" placeholder="Enter Project Name" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Builder" name="builder">
                    <Input
                        name="builder"
                        placeholder="Enter Builder Name Here"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Builder Contact" name="buildcontact">
                    <Input
                        name="buildcontact"
                        placeholder="Enter Builder Contact Here"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Owner Name" name="ownername">
                    <Input name="ownername" placeholder="Enter Owner Name" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Owner Contact" name="ownercontact">
                    <Input
                        name="ownercontact"
                        placeholder="Enter Owner Contact Here"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="URL/SLUG" name="urlslug">
                    <Input name="urlslug" placeholder="Enter URL/SLUG Here" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Meta Keywords" name="metakeywords">
                    <TextArea
                        name="metakeywords"
                        placeholder="Enter Meta Keywords"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Meta Description" name="metadescription">
                    <TextArea
                        name="metadescription"
                        placeholder="Enter Meta Description"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Page Title" name="pagetitle">
                    <Input name="pagetitle" placeholder="SEO Title Here" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="RERA ID" name="reraid">
                    <Input name="reraid" placeholder="Enter RERA ID Here" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Approval Authority" name="appauthority">
                    <Input
                        name="appauthority"
                        placeholder="Enter Approval Authority Name Here"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Locality" name="locality">
                    <Select
                        name="locality"
                        options={[
                            {
                                value: "Locality",
                                label: "Locality",
                            },
                        ]}
                        //onChange={handleCompany}
                        placeholder="--select locality--"
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
            </Col>
            <Col xs={24}>
                <Form.Item label="Posted By" name="postedby">
                    <Select
                        name="postedby"
                        options={[
                            {
                                value: "Posted by",
                                label: "Posted by",
                            },
                        ]}
                        //onChange={handleCompany}
                        placeholder="--select posted by--"
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={8}>
                <Form.Item label="Has Offer" name="offer">
                    <Radio.Group name="offer">
                        <Radio value={"YES"}>YES</Radio>
                        <Radio value={"NO"}>NO</Radio>
                    </Radio.Group>
                </Form.Item>
            </Col>
            <Col xs={24} md={8}>
                <Form.Item label="Loan Eligibility" name="loan">
                    <Radio.Group name="loan">
                        <Radio value={"YES"}>YES</Radio>
                        <Radio value={"NO"}>NO</Radio>
                    </Radio.Group>
                </Form.Item>
            </Col>
            <Col xs={24} md={8}>
                <Form.Item label="Has Construction" name="construction">
                    <Radio.Group name="construction">
                        <Radio value={"YES"}>YES</Radio>
                        <Radio value={"NO"}>NO</Radio>
                    </Radio.Group>
                </Form.Item>
            </Col>
        </Row>
    );
};

export default Overview;
