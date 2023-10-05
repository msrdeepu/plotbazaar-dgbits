import React from "react";
import { Col, Row, Form, Input, Select, Checkbox, Divider } from "antd";
const { TextArea } = Input;
const CheckboxGroup = Checkbox.Group;

//checklist options
const plainOptions = ["Storage Room", "Gym", "Home Theater", "Ball Room"];

const Buildingdetails = () => {
    return (
        <Row gutter={[8, 4]}>
            <Col xs={24} md={12}>
                <Form.Item label="Facing" name="facing">
                    <Select
                        name="facing"
                        options={[
                            {
                                value: "Facing",
                                label: "Facing",
                            },
                        ]}
                        //onChange={handleCompany}
                        placeholder="--select facing--"
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Total Units" name="totalunits">
                    <Input
                        name="totalunits"
                        placeholder="Enter Total Units Number Here"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Bed Rooms" name="bedrooms">
                    <Input
                        name="bedrooms"
                        placeholder="No. Of Bed Rooms"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Kitchen Areas" name="kitchenarea">
                    <Input
                        name="kitchenarea"
                        placeholder="No. Of Kitchen Areas"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Guest Rooms" name="guestromms">
                    <Input
                        name="guestromms"
                        placeholder="No. Of Guest Rooms"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Study Rooms" name="studyrooms">
                    <Input
                        name="studyrooms"
                        placeholder="No. Of Study Rooms"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Parking Slots" name="parkingslots">
                    <Input
                        name="parkingslots"
                        placeholder="No. Of Parking Slots"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Water" name="water">
                    <Input name="water" placeholder="Water Availability Here" />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Ideally Suitable" name="ideallysuit">
                    <Input
                        name="ideallysuit"
                        placeholder="Ideally Suitable For Whome? here.."
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Over Looking" name="overlooking">
                    <Select
                        name="overlooking"
                        options={[
                            {
                                value: "Over Looking",
                                label: "Over Looking",
                            },
                        ]}
                        //onChange={handleCompany}
                        placeholder="--Over Looking--"
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="On Floor" name="onfloor">
                    <Input
                        name="onfloor"
                        placeholder="Floor Number Here"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Living Rooms" name="livingrooms">
                    <Input
                        name="livingrooms"
                        placeholder="Enter No. Of Halls/Living Rooms"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Dinning Areas" name="diningareas">
                    <Input
                        name="diningareas"
                        placeholder="No. Of Dining Rooms Here"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Kids Rooms" name="kidsrooms">
                    <Input
                        name="kidsrooms"
                        placeholder="No. Of Kids Rooms"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Puja Rooms" name="pujarooms">
                    <Input
                        name="pujarooms"
                        placeholder="No. Of Puja Rooms"
                        type="number"
                    />
                </Form.Item>
            </Col>

            <Col xs={24} md={12}>
                <Form.Item label="Electricity" name="electricity">
                    <Input
                        name="electricity"
                        placeholder="Enter Electricity Status Here"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Other Rooms" name="otherrooms">
                    <CheckboxGroup name="otherrooms" options={plainOptions} />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Furnished" name="furnished">
                    <Select
                        name="furnished"
                        options={[
                            {
                                value: "Furnished",
                                label: "Furnished",
                            },
                        ]}
                        //onChange={handleCompany}
                        placeholder="--select furnished status--"
                        style={{
                            width: "100%",
                        }}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="No. of BHK" name="bhknumber">
                    <Input
                        name="bhknumber"
                        placeholder="Enter No. BHK Here"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Bath Rooms" name="bathrooms">
                    <Input
                        name="bathrooms"
                        placeholder="Enter No. Of Bathrooms Here"
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Home Office" name="homeoffice">
                    <Input
                        name="homeoffice"
                        placeholder="Enter No. Of Office Rooms Here.."
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Study Rooms" name="studyroomshere">
                    <Input
                        name="studyroomshere"
                        placeholder="Enter No. Of Study Rooms Here.."
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Balcony" name="balcony">
                    <Input
                        name="balcony"
                        placeholder="Enter No. Of Balcony"
                        type="number"
                    />
                </Form.Item>
            </Col>

            <Col xs={24} md={12}>
                <Form.Item label="Road Width" name="roadwidth">
                    <Input
                        name="roadwidth"
                        placeholder="Road Width In Feets Here.."
                        type="number"
                    />
                </Form.Item>
            </Col>
            <Col xs={24}>
                <Form.Item label="Suitable Tenant" name="tenant">
                    <TextArea
                        name="tenant"
                        placeholder="Suitable Tenant Here.."
                    />
                </Form.Item>
            </Col>
        </Row>
    );
};

export default Buildingdetails;
