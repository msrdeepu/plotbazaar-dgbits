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
    Alert,
    Segmented,
    Checkbox,
    Cascader,
    Button,
    DatePicker,
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

const selectAfter = (
    <Select defaultValue="Sq.ft">
        <Option value="Sq.ft">Sq.ft</Option>
        <Option value="Sq.yard">Sq.yard</Option>
        <Option value="Sq.m">Sq.m</Option>
        <Option value="Acere">Acere</Option>
    </Select>
);

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
    const [selectProperty, setSelectProperty] = useState("");
    const [bedrooms, setbedrooms] = useState();
    const [balcony, setSelectBalcony] = useState();
    const [selectFloor, setSelectFloor] = useState();
    const [propertyAvailability, setPropertyAvailability] = useState("");
    const onUserChange = (e) => {
        //console.log(e.target.value);
        setUser(e.target.value);
    };

    const onProperty = (e) => {
        setProperty(e.target.value);
    };

    const onSelcectProperty = (value) => {
        console.log(value);
        setSelectProperty(value);
    };

    const onSlectBedrooms = (value) => {
        console.log(value);
        setbedrooms(value);
    };

    const onSlectBalcony = (value) => {
        setSelectBalcony(value);
    };
    const onSelectFloor = (value) => {
        setSelectFloor(value);
    };
    const onpropertyAvailability = (e) => {
        setPropertyAvailability(e.target.value);
    };
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <Form layout="vertical">
                    <Row>
                        <Col xs={24} md={6}>
                            <h3>I am </h3>
                            <Radio.Group
                                onChange={onUserChange}
                                name="propertyfor"
                            >
                                <Radio value={"Owner"}>Owner</Radio>
                                <Radio value={"Agent"}>Agent</Radio>
                                <Radio value={"Builder"}>
                                    Builder/Developer
                                </Radio>
                            </Radio.Group>
                            {user == "Owner" ? (
                                <Card style={{ marginTop: "20px" }}>
                                    <ul>{CardListData.map(CardList)}</ul>
                                </Card>
                            ) : (
                                ""
                            )}
                            {user == "Agent" ? (
                                <Card style={{ marginTop: "20px" }}>
                                    <Col xs={24}>
                                        <Form.Item label="Agent Name">
                                            <Input placeholder="Enter Agent Name" />
                                        </Form.Item>
                                        <Form.Item label="Agent Code">
                                            <Input placeholder="Enter Agent Code" />
                                        </Form.Item>
                                        <Form.Item>
                                            <Button type="primary">
                                                Verify
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Card>
                            ) : (
                                ""
                            )}
                            {user == "Builder" ? (
                                <Card style={{ marginTop: "20px" }}>
                                    <Col xs={24}>
                                        <Form.Item label="Builder/Developer Name">
                                            <Input placeholder="Enter Builder/Developer Name" />
                                        </Form.Item>
                                        <Form.Item label="Builder/Developer Code">
                                            <Input placeholder="Enter Builder/Developer Code" />
                                        </Form.Item>
                                        <Form.Item>
                                            <Button type="primary">
                                                Verify
                                            </Button>
                                        </Form.Item>
                                    </Col>
                                </Card>
                            ) : (
                                ""
                            )}
                        </Col>
                        <Col xs={24} md={7} offset={2}>
                            <h3>Property For </h3>
                            <Radio.Group
                                onChange={onProperty}
                                name="propertyfor"
                            >
                                <Radio value={"Sale"}>Sale</Radio>
                                <Radio value={"Rent"}>Rent</Radio>
                                <Radio value={"Lease"}>Lease</Radio>
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
                                            <Alert
                                                message="Important! "
                                                description="Enter Your WhatsApp Number To
                                                get enquires from Buyer/Tenent"
                                                type="success"
                                                // showIcon
                                                closable
                                            />
                                        </Col>
                                        {}
                                    </Row>
                                </>
                            ) : (
                                ""
                            )}
                            <Col xs={24} style={{ marginTop: "10px" }}>
                                <Form.Item label="Property Type" name="ptype">
                                    <Select
                                        onChange={onSelcectProperty}
                                        value={selectProperty}
                                        name="ptype"
                                        options={[
                                            {
                                                value: "Select Property",
                                                label: "Select Property",
                                            },
                                            {
                                                value: "Flat/Appartment",
                                                label: "Flat/Appartment",
                                            },
                                            {
                                                value: "Residencial House",
                                                label: "Residencial House",
                                            },
                                        ]}
                                        placeholder="Select Property"
                                        style={{
                                            width: "100%",
                                        }}
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24}>
                                {" "}
                                {user == "Owner" &&
                                selectProperty == "Flat/Appartment" ? (
                                    <>
                                        <p>Total No of Flats in Your Society</p>
                                        <Segmented
                                            options={["<50", "50-100", ">100"]}
                                            onChange={(value) =>
                                                console.log(value)
                                            }
                                        />
                                    </>
                                ) : (
                                    ""
                                )}
                            </Col>

                            <Col xs={24}>
                                <h4 style={{ marginTop: "18px" }}>
                                    Property Location
                                </h4>
                                <Form.Item label="City" name="city">
                                    <Input
                                        name="city"
                                        placeholder="Enter City"
                                    />
                                </Form.Item>
                                <Form.Item label="Locality" name="locality">
                                    <Input
                                        name="locality"
                                        placeholder="Enter Locality"
                                    />
                                </Form.Item>
                            </Col>
                            <Col xs={24}>
                                {" "}
                                {selectProperty !== "Select Property" &&
                                selectProperty !== "" ? (
                                    <>
                                        <Col xs={24}>
                                            <h3>Property Features</h3>
                                            <Form.Item label="No. Of Bedrooms">
                                                <Select
                                                    onChange={onSlectBedrooms}
                                                    name="category"
                                                    options={[
                                                        {
                                                            value: "1",
                                                            label: "1",
                                                        },
                                                        {
                                                            value: "2",
                                                            label: "2",
                                                        },
                                                        {
                                                            value: "3",
                                                            label: "3",
                                                        },
                                                        {
                                                            value: "4",
                                                            label: "4",
                                                        },
                                                        {
                                                            value: "5",
                                                            label: "5",
                                                        },
                                                        {
                                                            value: "6",
                                                            label: "6",
                                                        },
                                                        {
                                                            value: "7",
                                                            label: "7",
                                                        },
                                                        {
                                                            value: "8",
                                                            label: "8",
                                                        },
                                                        {
                                                            value: "9",
                                                            label: "9",
                                                        },
                                                        {
                                                            value: "10",
                                                            label: "10",
                                                        },
                                                        {
                                                            value: "10+",
                                                            label: "10+",
                                                        },
                                                    ]}
                                                    //onChange={handleCompany}
                                                    placeholder="--select no of bedrooms--"
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                />
                                                {bedrooms == "1" ? (
                                                    <Checkbox
                                                        style={{
                                                            marginTop: "12px",
                                                        }}
                                                    >
                                                        Without Hall
                                                    </Checkbox>
                                                ) : (
                                                    ""
                                                )}
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24}>
                                            <Form.Item label="No. Of Balconies">
                                                <Select
                                                    onChange={onSlectBalcony}
                                                    name="category"
                                                    options={[
                                                        {
                                                            value: "1",
                                                            label: "1",
                                                        },
                                                        {
                                                            value: "2",
                                                            label: "2",
                                                        },
                                                        {
                                                            value: "3",
                                                            label: "3",
                                                        },
                                                        {
                                                            value: "4",
                                                            label: "4",
                                                        },
                                                        {
                                                            value: "5",
                                                            label: "5",
                                                        },
                                                        {
                                                            value: "6",
                                                            label: "6",
                                                        },
                                                        {
                                                            value: "7",
                                                            label: "7",
                                                        },
                                                        {
                                                            value: "8",
                                                            label: "8",
                                                        },
                                                        {
                                                            value: "9",
                                                            label: "9",
                                                        },
                                                        {
                                                            value: "10",
                                                            label: "10",
                                                        },
                                                        {
                                                            value: "10+",
                                                            label: "10+",
                                                        },
                                                    ]}
                                                    //onChange={handleCompany}
                                                    placeholder="--select no of balconies--"
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24}>
                                            <Form.Item label="Select Floor">
                                                <Select
                                                    onChange={onSelectFloor}
                                                    name="category"
                                                    options={[
                                                        {
                                                            value: "Lower Basement",
                                                            label: "Lower Basement",
                                                        },
                                                        {
                                                            value: "Upper Basement",
                                                            label: "Upper Basement",
                                                        },
                                                        {
                                                            value: "Ground",
                                                            label: "Ground",
                                                        },
                                                        {
                                                            value: "Other",
                                                            label: "Other",
                                                        },
                                                    ]}
                                                    //onChange={handleCompany}
                                                    placeholder="--select floor--"
                                                    style={{
                                                        width: "100%",
                                                    }}
                                                />
                                                {selectFloor == "Other" ? (
                                                    <>
                                                        <p
                                                            style={{
                                                                marginTop:
                                                                    "12px",
                                                            }}
                                                        >
                                                            Enter Floor Number
                                                        </p>
                                                        <Input
                                                            type="number"
                                                            placeholder="Enter Floor Number"
                                                        />
                                                    </>
                                                ) : (
                                                    ""
                                                )}
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24}>
                                            {" "}
                                            <Form.Item
                                                label="Total No. Of Floors"
                                                name="totalfloors"
                                            >
                                                <Input
                                                    type="number"
                                                    placeholder="Enter Total Number of Floors"
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24}>
                                            <Form.Item label="Furnished Status">
                                                <Segmented
                                                    options={[
                                                        "Furnieshed",
                                                        "Unfurnished",
                                                        "Semi-Furnished",
                                                    ]}
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24}>
                                            {" "}
                                            <Form.Item
                                                label="Total No. Of Bathrooms"
                                                name="totalfloors"
                                            >
                                                <Input
                                                    type="number"
                                                    placeholder="Enter Total No. Of Bathrooms"
                                                />
                                            </Form.Item>
                                        </Col>
                                        <h3>Area</h3>
                                        <p>
                                            Provide either Carpet Area or Super
                                            Area
                                        </p>
                                        <Col>
                                            <Form.Item label="Carpet Area">
                                                {" "}
                                                <Input
                                                    addonAfter={selectAfter}
                                                    defaultValue=""
                                                    type="number"
                                                />
                                                <Alert
                                                    style={{
                                                        marginTop: "12px",
                                                    }}
                                                    message="Important! "
                                                    description="Carpet Area is the total Usable Area of your property within the walls"
                                                    type="success"
                                                    // showIcon
                                                    closable
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col>
                                            <Form.Item label="Super Area">
                                                {" "}
                                                <Input
                                                    addonAfter={selectAfter}
                                                    defaultValue=""
                                                    type="number"
                                                />
                                                <Alert
                                                    style={{
                                                        marginTop: "12px",
                                                    }}
                                                    message="Important! "
                                                    description="Super Area is the total Area of your property under the roof, including corridors and balconies"
                                                    type="success"
                                                    // showIcon
                                                    closable
                                                />
                                            </Form.Item>
                                        </Col>
                                        <Col xs={24}>
                                            <h3>
                                                Transaction Type, Property
                                                Availability
                                            </h3>
                                            <p>Possession Status</p>
                                            <Radio.Group
                                                onChange={
                                                    onpropertyAvailability
                                                }
                                                name="propertyavailability"
                                            >
                                                <Radio
                                                    value={"Underconstruction"}
                                                >
                                                    Under Construction
                                                </Radio>
                                                <Radio value={"readytomove"}>
                                                    Ready to Move
                                                </Radio>
                                            </Radio.Group>
                                        </Col>
                                        {propertyAvailability ==
                                        "Underconstruction" ? (
                                            <Col
                                                xs={24}
                                                style={{ marginTop: "12px" }}
                                            >
                                                <Form.Item label="Available From">
                                                    <DatePicker
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                        placeholder="Select Available Date"
                                                    />
                                                </Form.Item>
                                            </Col>
                                        ) : (
                                            <Col
                                                xs={24}
                                                style={{ marginTop: "12px" }}
                                            >
                                                <Form.Item label="Age of Construction">
                                                    <Select
                                                        name="ageofconstructio"
                                                        options={[
                                                            {
                                                                value: "Newconstructin",
                                                                label: "New Construction",
                                                            },
                                                            {
                                                                value: "lessthan5years",
                                                                label: "Less Than 5 Years",
                                                            },
                                                            {
                                                                value: "5-10years",
                                                                label: "5 to 10 Years",
                                                            },
                                                        ]}
                                                        //onChange={handleCompany}
                                                        placeholder="--select age of construction--"
                                                        style={{
                                                            width: "100%",
                                                        }}
                                                    />
                                                </Form.Item>
                                            </Col>
                                        )}
                                    </>
                                ) : (
                                    ""
                                )}
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
