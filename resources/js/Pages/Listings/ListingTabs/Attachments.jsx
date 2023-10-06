import React from "react";
import { Col, Row, Form, Input, Select, Checkbox } from "antd";

//multiple select options
const features = [];
features.push({
    label: "item3",
    value: "item3",
});
const indooramenities = [];
indooramenities.push({
    label: "item3",
    value: "item3",
});

const outdooramenities = [];
outdooramenities.push({
    label: "item3",
    value: "item3",
});

const propertynearby = [];
propertynearby.push(
    {
        label: "item3",
        value: "item3",
    },
    {
        label: "item4",
        value: "vlue4",
    }
);

const Attachments = () => {
    return (
        <Row gutter={[8, 4]}>
            <Col xs={24} md={8}>
                <Form.Item label="Image" name="image">
                    <input
                        name="image"
                        type="file"
                        style={{
                            width: "100%",
                            borderStyle: "solid",
                            borderWidth: "0.5px",
                            borderColor: "#D9D9D9",
                            borderRadius: "5px",
                            padding: "5px",
                        }}
                    />
                    <Checkbox style={{ margin: "5px" }}>
                        Approve Banner
                    </Checkbox>
                    <p style={{ fontSize: "10px", color: "#D9D9D9" }}>
                        Note: Banner must be Width:1200 X Height:800 Pixels and
                        Less than 5MB in Size
                    </p>
                </Form.Item>
            </Col>
            <Col xs={24} md={8}>
                <Form.Item label="FB Banner" name="bannerfb">
                    <input
                        name="bannerfb"
                        type="file"
                        style={{
                            width: "100%",
                            borderStyle: "solid",
                            borderWidth: "0.5px",
                            borderColor: "#D9D9D9",
                            borderRadius: "5px",
                            padding: "5px",
                        }}
                    />
                    <Checkbox style={{ margin: "5px" }}>
                        Approve Banner
                    </Checkbox>
                    <p style={{ fontSize: "10px", color: "#D9D9D9" }}>
                        Note: Image must be Width:900 X Height:600 Pixels and
                        Less than 2MB in Size
                    </p>
                </Form.Item>
            </Col>
            <Col xs={24} md={8}>
                <Form.Item label="Brochure" name="brochure">
                    <input
                        name="brochure"
                        type="file"
                        style={{
                            width: "100%",
                            borderStyle: "solid",
                            borderWidth: "0.5px",
                            borderColor: "#D9D9D9",
                            borderRadius: "5px",
                            padding: "5px",
                        }}
                    />
                    <Checkbox style={{ margin: "5px" }}>
                        Approve Brochure
                    </Checkbox>
                    <p style={{ fontSize: "10px", color: "#D9D9D9" }}>
                        Note: Attachment must be Image or PDF and Less than 10MB
                        in Size
                    </p>
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Project Features" name="projectfeatures">
                    <Select
                        name="projectfeatures"
                        mode="multiple"
                        allowClear
                        style={{
                            width: "100%",
                        }}
                        placeholder="Please select"
                        defaultValue={["item1", "item2"]}
                        //onChange={handleChange}
                        options={features}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Indoor Amenities" name="indooramenities">
                    <Select
                        name="indooramenities"
                        mode="multiple"
                        allowClear
                        style={{
                            width: "100%",
                        }}
                        placeholder="Please select"
                        defaultValue={["item1", "item2"]}
                        //onChange={handleChange}
                        options={indooramenities}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Outdoor Amenities" name="outdooramenities">
                    <Select
                        name="outdooramenities"
                        mode="multiple"
                        allowClear
                        style={{
                            width: "100%",
                        }}
                        placeholder="Please select"
                        defaultValue={["item1", "item2"]}
                        //onChange={handleChange}
                        options={outdooramenities}
                    />
                </Form.Item>
            </Col>
            <Col xs={24} md={12}>
                <Form.Item label="Property Near By" name="propertynearby">
                    <Select
                        name="propertynearby"
                        mode="multiple"
                        allowClear
                        style={{
                            width: "100%",
                        }}
                        placeholder="Please select"
                        defaultValue={["item1", "item2"]}
                        //onChange={handleChange}
                        options={propertynearby}
                    />
                </Form.Item>
            </Col>
        </Row>
    );
};

export default Attachments;
