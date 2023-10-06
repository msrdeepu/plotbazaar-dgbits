import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, Link, router } from "@inertiajs/react";
import { Card, Table, Typography, Button, Space } from "antd";

//icons
import {
    EditOutlined,
    DeleteOutlined,
    PlusCircleOutlined,
    CameraOutlined,
    CopyOutlined,
} from "@ant-design/icons";

function Testview(props) {
    return (
        <>
            <Head title="Test" />

            <Card title={`Welcome to Test Page`}>
                <Typography.Text>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                            padding: "8px",
                        }}
                    >
                        <h3>Test</h3>
                        <Link href={window.route("test.create")} type="button">
                            <Button
                                type="primary"
                                icon={<PlusCircleOutlined />}
                            >
                                New Test
                            </Button>
                        </Link>
                    </div>
                    {/* <Table columns={columns} dataSource={""} size="small" /> */}
                </Typography.Text>
            </Card>
        </>
    );
}

Testview.layout = (page) => <AuthenticatedLayout children={page} />;

export default Testview;
