import { useState } from 'react';
import { Form, Input, Radio, DatePicker, Select, Button, Modal, Spin } from 'antd';
import { CalendarOutlined } from '@ant-design/icons';
import { useDispatch } from 'react-redux';
import { addCampaign } from '../../state/campaignSlice';
const { Option } = Select

const AddCampaign = () => {
    const [createListModalVisible, setCreateListModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);
    const [listArray, setListArray] = useState(['List 1', 'List 2', 'List 3']);
    const dispatch = useDispatch();
    const [form] = Form.useForm();

    const onFinish = async (values) => {
        setLoading(true);
        try {
            console.log({ values })
            await dispatch(addCampaign(values));
            form.resetFields();

        } catch (error) {
            console.log('Error occurred while posting news: ', error);
        } finally {
            setLoading(false);
        }
    };
    
    const initialValues = {
        dateNow: true,
        sendTo: 'List',
        listId: 'List1'
    };

    const handleCreateList = (listName) => {
        setListArray([...listArray, listName]);
        setCreateListModalVisible(false);
    };

    return (
        <div style={{ width: "70%" }} >
            <h2 style={{ marginBottom: '40px' }} >Create New Campaign</h2>
            <Spin spinning={loading}>
                <Form
                    form={form}
                    name="add-category-form"
                    onFinish={onFinish}
                    initialValues={initialValues}
                    layout="vertical"
                >
                    <Form.Item
                        label="Campaign Name"
                        name="campaigName"
                        rules={[{ required: true, message: 'Please enter a campaign name' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Date"
                        name="dateNow"
                        rules={[{ required: true, message: 'Please select a date option' }]}
                    >
                        <Radio.Group>
                            <Radio value={true}>Now</Radio>
                            <Radio value="specificDate">
                                <div style={{ display: "flex", alignItems: 'center', gap: '15px' }}>
                                    <span>Schedule</span>
                                    <CalendarOutlined style={{ fontSize: '20px', color: 'var(--primary-color)' }} />
                                </div>
                            </Radio>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.dateType !== currentValues.dateType}
                    >
                        {({ getFieldValue }) => {
                            return getFieldValue('dateType') === 'specificDate' ? (
                                <Form.Item
                                    label="Start Date"
                                    name="startDate"
                                    rules={[{ required: true, message: 'Please enter a start date' }]}
                                >
                                    <DatePicker showTime />
                                </Form.Item>
                            ) : null;
                        }}
                    </Form.Item>
                    <Form.Item
                        label="Sender Name"
                        name="senderNameId"
                        rules={[{ required: true, message: 'Please select a sender name' }]}
                    >
                        <Select placeholder="Select a sender name">
                            <Option value={0}>Sender Name 1</Option>
                            <Option value={1}>Sender Name 2</Option>
                            <Option value={2}>Sender Name 3</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Send to"
                        name="sendTo"
                        rules={[{ required: true, message: 'Please select a send to option' }]}
                    >
                        <Radio.Group>
                            <Radio value="List">List</Radio>
                            <Radio value="Contacts">Contacts</Radio>
                        </Radio.Group>
                    </Form.Item>

                    <Form.Item
                        noStyle
                        shouldUpdate={(prevValues, currentValues) => prevValues.sendTo !== currentValues.sendTo}
                    >
                        {({ getFieldValue }) => {
                            return getFieldValue('sendTo') === 'Contacts' ? (
                                <Form.Item
                                    label="Contacts"
                                    name="contactsId"
                                    rules={[{ required: true, message: 'Please select a contacts' }]}
                                >
                                    <Select placeholder="Select a contacts">
                                        <Option value={0}>contacts 1</Option>
                                        <Option value={1}>contacts 2</Option>
                                        <Option value={2}>contacts 3</Option>
                                    </Select>
                                </Form.Item>
                            ) : (
                                <Form.Item
                                    label="List"
                                    name="listId"
                                    rules={[{ required: true, message: 'Please select a list' }]}
                                >
                                    <div style={{ display: 'flex', alignItems: 'center' }}>
                                        <Select placeholder="Select a list">
                                            {listArray.map((listItem, index) => (
                                                <Option key={index} value={listItem}>
                                                    {listItem}
                                                </Option>
                                            ))}
                                        </Select>
                                        <Button type="link" onClick={() => setCreateListModalVisible(true)}>
                                            + Create a new list
                                        </Button>
                                    </div>
                                </Form.Item>
                            );
                        }}
                    </Form.Item>

                    <Form.Item
                        label="Campaign Message"
                        name="message"
                        rules={[{ required: true, message: 'Please enter a message' }]}
                    >
                        <Input.TextArea
                            placeholder="Please note that one message is limited to 160 characters in English or 70 characters in Arabic. Message counter: "
                            autoSize={{ minRows: 3, maxRows: 6 }}
                        />
                    </Form.Item>

                    <Form.Item>
                        <Button className='create_campign' type="primary" htmlType="submit" style={{ display: 'flex' }}>Create Campaign</Button>
                    </Form.Item>

                    <Modal
                        title="Create New List"
                        visible={createListModalVisible}
                        onCancel={() => setCreateListModalVisible(false)}
                        footer={[
                            <Button key="cancel" onClick={() => setCreateListModalVisible(false)}>
                                Cancel
                            </Button>,
                            <Button key="create" type="primary" onClick={() => handleCreateList(form.getFieldValue('newListName'))}>
                                Create
                            </Button>
                        ]}
                    >
                        <Form form={form} layout="vertical">
                            <Form.Item label="List Name" name="newListName">
                                <Input placeholder="Enter the new list name" />
                            </Form.Item>
                        </Form>
                    </Modal>
                </Form>

            </Spin>
        </div>
    );
};

export default AddCampaign;
