import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";
import { Card, Typography } from "antd";

function Listingview(props) {
    return (
        <>
            <Head title="Dashboard" />

            <Card title={`Welcome, ${props.auth.user.name}`}>
                <Typography.Text>Listing View</Typography.Text>
            </Card>
        </>
    );
}

Listingview.layout = (page) => <AuthenticatedLayout children={page} />;

export default Listingview;
