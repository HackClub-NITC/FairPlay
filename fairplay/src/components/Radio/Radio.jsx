import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import RadioEncrypt from '../RadioEncrypt/RadioEncrypt';


const Radio = () => {
  return (
      <Tabs>
        <TabList>
            <Tab>Title 1</Tab>
            <Tab>Title 2</Tab>
        </TabList>

        <TabPanel>
        <RadioEncrypt />
        </TabPanel>
        <TabPanel>
        <RadioDecrypt />
        </TabPanel>
    </Tabs>

  )
}

export default Radio
