import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Table, Typography, Button, Space } from "antd";

//delete Action
function destroyRecord(e) {
    if (confirm("Are you sure you want to delete this record ?")) {
        router.delete(route("branches.destroy", e.currentTarget.id));
    }
}

//Loading Edit View
function editRecord(e) {
    router.get(route("branches.edit", e.currentTarget.id));
}

//icons
import {
    EditOutlined,
    DeleteOutlined,
    PlusCircleOutlined,
    CameraOutlined,
    CopyOutlined,
} from "@ant-design/icons";

//table columns
const columns = [
    {
        title: "URL",
        dataIndex: "url",
        key: "key",
    },
    {
        title: "Type",
        dataIndex: "type",
        key: "key",
    },
    {
        title: "Title",
        dataIndex: "title",
        key: "key",
    },
    {
        title: "Published",
        dataIndex: "published",
        key: "key",
    },

    {
        title: "Created On",
        dataIndex: "createdon",
        key: "key",
    },
    {
        title: "Actions",
        dataIndex: "actions",
        render: (_, record) => (
            <Space size="small">
                <Button
                    style={{
                        margin: "5px",
                        color: "dodgerblue",
                        borderColor: "dodgerblue",
                    }}
                    shape="circle"
                    //id={record.id}
                    //onClick={editRecord}
                    icon={<CameraOutlined />}
                />
                <Button
                    style={{
                        margin: "5px",
                        color: "green",
                        borderColor: "green",
                    }}
                    shape="circle"
                    //id={record.id}
                    //onClick={editRecord}
                    icon={<EditOutlined />}
                />
                <Button
                    style={{
                        margin: "5px",
                        color: "orange",
                        borderColor: "orange",
                    }}
                    shape="circle"
                    //id={record.id}
                    //onClick={editRecord}
                    icon={<CopyOutlined />}
                />
                <Button
                    style={{ margin: "5px" }}
                    shape="circle"
                    //id={record.id}
                    icon={<DeleteOutlined />}
                    //onClick={destroyRecord}
                    danger
                />
            </Space>
        ),
    },
];

const data = [
    {
        id: 1,
        title: "Demo",
    },
];

function Listingview({ props, branchesList }) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome to Listings Page`}>
                <Typography.Text>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "8px",
                        }}
                    >
                        <h3>Listings</h3>
                        <Link
                            href={window.route("listings.create")}
                            type="button"
                        >
                            <Button
                                type="primary"
                                icon={<PlusCircleOutlined />}
                            >
                                New Listing
                            </Button>
                        </Link>
                    </div>
                    <Table columns={columns} dataSource={data} size="small" />
                </Typography.Text>
            </Card>
        </>
    );
}

Listingview.layout = (page) => <AuthenticatedLayout children={page} />;

export default Listingview;
