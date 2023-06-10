import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Spin, Tabs } from 'antd';
import AddCampaign from './AddCampaign';
import CampaignTable from './CampaignTable';
import { fetchCampaign } from '../../state/campaignSlice';

const { TabPane } = Tabs;

const Index = () => {
  const dispatch = useDispatch();
  const { records, loading } = useSelector(state => state.clients);

  const handleTabChange = activeKey => {
    if (activeKey === '2' && records.length === 0) {
      dispatch(fetchCampaign());
    }
  };

  const items = [
    {
      key: '1',
      label: 'Create Campaign',
    },
    {
      key: '2',
      label: 'Campaign History',
    },
    {
      key: '3',
      label: 'Scheduled Campaigns',
    },
  ];

  const renderTabContent = key => {
    if (key === '1') {
      return <AddCampaign />;
    } else if (key === '2') {
      return <CampaignTable data={records} />;
    } else if (key === '3') {
      return 'Content of Tab Pane 3';
    }
    return null;
  };

  return (
    <Tabs defaultActiveKey="1" type="card" size="large" onChange={handleTabChange}>
      {items.map(item => (
        <TabPane key={item.key} tab={item.label}>
          {loading ? <Spin /> : renderTabContent(item.key)}
        </TabPane>
      ))}
    </Tabs>
  );
};

export default Index;
