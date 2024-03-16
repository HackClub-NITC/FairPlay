import React from 'react'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import RadioEncrypt from '../RadioEncrypt/RadioEncrypt';

import RadioDecrypt from '../RadioDecrypt/RadioDecrypt';


const Radio = () => {
  return (
    <>
    
      <Tabs>
        <TabList>
            <Tab>Encrypt</Tab>
            <Tab>Decrypt</Tab>
        </TabList>

        <TabPanel>
            <RadioEncrypt />
        </TabPanel>
        <TabPanel>
            <RadioDecrypt />
        </TabPanel>
    </Tabs>
    </>
  )
}

export default Radio
