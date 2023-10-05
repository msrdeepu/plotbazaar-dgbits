import React from "react";
import { Col, Row, Form, Input, DatePicker, Select } from "antd";

const Propertydetails = () => {
    return (
        <Row gutter={[8, 4]}>
            <Col xs={24} md={12}>
                <Form.Item label="Measure Units" name="measuringuinits">
                    <Select
                        name="measuringuinits"
                        options={[
                            {
                                value: "Demo Units",
                                label: "Demo Units",
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
                <Form.Item label="Total Area" name="plotarea">
                    <Input name="plotarea" placeholder="Plot Total Area Here" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Price Per SFT" name="sftprice">
                    <Input name="sftprice" placeholder="Price Per SFT Here.." />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Property Status" name="pstatus">
                    <Select
                        name="pstatus"
                        options={[
                            {
                                value: "Demo Status",
                                label: "Demo Status",
                            },
                        ]}
                        //onChange={handleCompany}
                        placeholder="--select property status--"
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Rent Value" name="rentvalue">
                    <Input
                        name="rentvalue"
                        placeholder="Enter Rent Value"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Rent Advance" name="rentadvance">
                    <Input
                        name="rentadvance"
                        placeholder="Enter Rent Advance Here"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Move-in Date" name="movindate">
                    <DatePicker
                        name="movindate"
                        placeholder="Enter Move In Date"
                        style={{ width: "100%" }}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Length" name="length">
                    <Input
                        name="length"
                        placeholder="Enter Length here"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Super Area" name="suparea">
                    <Input
                        name="suparea"
                        placeholder="Enter Super Area Here"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Sale Price" name="saleprice">
                    <Input
                        name="saleprice"
                        type="number"
                        placeholder="Enter Sale Price Here"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Possession Date" name="possessiondate">
                    <DatePicker
                        name="possessiondate"
                        placeholder="Possession Date Here"
                        style={{ width: "100%" }}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Maintenance" name="maintinence">
                    <Input
                        name="maintinence"
                        placeholder="Enter Maintinence Charges Here"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Booking Amount" name="bookingamount">
                    <Input
                        name="bookingamount"
                        placeholder="Enter Booking Amount Here"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Width" name="width">
                    <Input
                        name="width"
                        placeholder="Enter Width Here"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Carpet Area" name="carpetarea">
                    <Input
                        name="carpetarea"
                        placeholder="Enter Carpet Area Here"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Build On" name="buildon">
                    <DatePicker
                        style={{ width: "100%" }}
                        name="buildon"
                        placeholder="Build On Here"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Floors" name="floors">
                    <Input name="floors" placeholder="Allowed Floors" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Lock In Period" name="lockinperiod">
                    <Input
                        name="lockinperiod"
                        placeholder="Enter Lock In Period"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Loan Amount" name="loanamount">
                    <Input
                        name="loanamount"
                        placeholder="Enter Loan Amount Here"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Move-in Date" name="moveindate">
                    <DatePicker
                        style={{ width: "100%" }}
                        name="moveindate"
                        placeholder="Move In Date"
                    />
                </Form.Item>
            </Col>
        </Row>
    );
};

export default Propertydetails;
