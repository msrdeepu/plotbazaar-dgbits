import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head, router } from "@inertiajs/react";
import { Card, Typography, Tabs, Form, Button } from "antd";

const onCancelData = () => {
    window.alert("Are You Sure Want to Cancel?");
    router.get(route("listings.index"));
};

//tabs
import Overview from "./ListingTabs/Overview";
import Propertydetails from "./ListingTabs/Propertydetails";
import Buildingdetails from "./ListingTabs/Buildingdetails";
import Propertycontent from "./ListingTabs/Propertycontent";
import Attachments from "./ListingTabs/Attachments";
import Locationdetails from "./ListingTabs/Locationdetails";
import Calltoaction from "./ListingTabs/Calltoaction";
import Publish from "./ListingTabs/Publish";

const onChange = (key) => {
    console.log(key);
};
const items = [
    {
        key: "1",
        label: "Listing Overview",
        children: <Overview />,
    },
    {
        key: "2",
        label: "Property Details",
        children: <Propertydetails />,
    },
    {
        key: "3",
        label: "Building Details",
        children: <Buildingdetails />,
    },
    {
        key: "4",
        label: "Property Content",
        children: <Propertycontent />,
    },
    {
        key: "5",
        label: "Attachments",
        children: <Attachments />,
    },

    {
        key: "6",
        label: "Location Details",
        children: <Locationdetails />,
    },
    {
        key: "7",
        label: "Call to Action",
        children: <Calltoaction />,
    },
    {
        key: "8",
        label: "Publish Settings",
        children: <Publish />,
    },
];

function CreateListing({ props, saveButton }) {
    return (
        <>
            <Head title="Listings" />

            <Card title={`Create Listing`}>
                <Form layout="vertical">
                    <Tabs
                        defaultActiveKey="1"
                        items={items}
                        onChange={onChange}
                    />
                    <div style={{ textAlign: "center" }}>
                        <p>
                            Note: Fields Marked with (
                            <span style={{ color: "red" }}>*</span>) Astrik is
                            Mandatory.
                        </p>
                    </div>
                    <div style={{ display: "flex", justifyContent: "center" }}>
                        <Button
                            style={{ margin: "5px" }}
                            //onClick={handelForm}
                            htmlType="submit"
                            className="btn-item"
                            type="primary"
                        >
                            {(saveButton = "Save")}
                        </Button>
                        <Button
                            style={{ margin: "5px" }}
                            onClick={onCancelData}
                            className="btn-item"
                            type="primary"
                            danger
                        >
                            Cancel
                        </Button>
                    </div>
                </Form>
            </Card>
        </>
    );
}

CreateListing.layout = (page) => <AuthenticatedLayout children={page} />;

export default CreateListing;
