import React, { useState } from "react";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import {
    Card,
    Typography,
    Select,
    Radio,
    Col,
    Row,
    Form,
    Input,
    Avatar,
    List,
} from "antd";
//custom css
import "./test.css";
import {
    PhoneOutlined,
    UserAddOutlined,
    MobileOutlined,
} from "@ant-design/icons";

const CardListData = [
    {
        id: 1,
        title: "Respond to Buyer Enquiries",
        icon: <PhoneOutlined />,
    },
    {
        id: 2,
        title: "Connect with Matching Buyers",
        icon: <UserAddOutlined />,
    },
    {
        id: 3,
        title: "Download the App",
        icon: <MobileOutlined />,
    },
];

const CardListDataBuyer = [
    {
        id: 1,
        title: "Photos",
        icon: <PhoneOutlined />,
    },
    {
        id: 2,
        title: "Bedroom sizes",
        icon: <UserAddOutlined />,
    },
    {
        id: 3,
        title: "Booking/Security Amount",
        icon: <MobileOutlined />,
    },
];

function CardList(item) {
    return (
        <li key={item.id} className="card-list">
            <h3>
                {item.icon} {item.title}
            </h3>
        </li>
    );
}

function Testcreate(props) {
    const [user, setUser] = useState("");
    const [property, setProperty] = useState("");
    const onUserChange = (e) => {
        console.log(e.target.value);
        setUser(e.target.value);
    };

    const onProperty = (e) => {
        setProperty(e.target.value);
    };
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <Form layout="vertical">
                    <Row>
                        <Col xs={24} md={6}>
                            <h3>I am </h3>
                            <Radio.Group onChange={onUserChange}>
                                <Radio value={"Owner"}>Owner</Radio>
                                <Radio value={"Agent"}>Agent</Radio>
                                <Radio value={"Builder"}>Buider</Radio>
                            </Radio.Group>
                            {user == "Owner" ? (
                                <Card style={{ marginTop: "20px" }}>
                                    <ul>{CardListData.map(CardList)}</ul>
                                </Card>
                            ) : (
                                ""
                            )}
                        </Col>
                        <Col xs={24} md={7} offset={2}>
                            <h3>Property For </h3>
                            <Radio.Group onChange={onProperty}>
                                <Radio value={"Sale"}>Sale</Radio>
                                <Radio value={"Rent"}>Rent</Radio>
                                <Radio value={"PG"}>PG</Radio>
                            </Radio.Group>
                            {user == "Owner" ? (
                                <>
                                    <Row
                                        gutter={[8, 4]}
                                        style={{ marginTop: "10px" }}
                                    >
                                        <Col xs={24} md={12}>
                                            <Form.Item label="Name">
                                                <Input placeholder="Enter Your Name" />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24} md={12}>
                                            <Form.Item label="Phone Number">
                                                <Input
                                                    placeholder="Enter Phone Number"
                                                    type="number"
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24}>
                                            <Form.Item label="Email ID">
                                                <Input
                                                    placeholder="Enter Email ID"
                                                    type="email"
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24}>
                                            <Card className="wt-messaage">
                                                Enter Your WhatsApp Number To
                                                get enquires from Buyer/Tenent
                                            </Card>
                                        </Col>
                                    </Row>
                                </>
                            ) : (
                                ""
                            )}
                            <Col xs={24} style={{ marginTop: "10px" }}>
                                <Form.Item label="Property Type" name="ptype">
                                    <Select
                                        name="ptype"
                                        options={[
                                            {
                                                value: "Flat",
                                                label: "Flat",
                                            },
                                            {
                                                value: "Residencial House",
                                                label: "Residencial House",
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
                        </Col>
                        <Col xs={24} md={6} offset={2}>
                            {property !== "PG" ? (
                                <Card style={{ marginTop: "20px" }}>
                                    <p>
                                        Don't miss out on this extra 26% . Add &
                                        get 5 times more responses
                                    </p>
                                    <ul>{CardListDataBuyer.map(CardList)}</ul>
                                </Card>
                            ) : (
                                ""
                            )}
                        </Col>
                    </Row>
                </Form>
            </Card>
        </>
    );
}

Testcreate.layout = (page) => <AuthenticatedLayout children={page} />;

export default Testcreate;
