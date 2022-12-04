import React from 'react';
import '../App.css';
import {
  Grid,
  View,
  Heading,
  Card,
  SelectField,
  Button,
  Flex,
} from '@aws-amplify/ui-react';
import { MdCloudDownload } from "react-icons/md";
import swal from 'sweetalert';

function SelectFieldReports() {
  return (
    <SelectField
      label="Training Type"
      descriptiveText="Select training type to import/export"
    >
      <option value="ancilalry">Air Force Ancillary</option>
      <option value="itrm">ITRM</option>
      <option value="individual">Individual Training</option>
      <option value="mrdss">MRDSS</option>
    </SelectField>
  );
}

function Reports() {

  return (
    <Grid
      templateColumns="1fr 1fr"
      templateRows="1fr 3fr"
      style={{ textAlign: "center" }}
    >
      <View columnStart="1" columnEnd="-1">
        <Heading level={3}>IMPORT/EXPORT EXCEL REPORTS TO WEBSITE</Heading>
        <Card style={{ marginRight: '30%', marginLeft: '30%' }}>
          <SelectFieldReports />
        </Card>
      </View>
      <View style={{ marginLeft: '30%' }}>
        <Card variation="elevated">
          <Heading level={4}>Upload Report</Heading>
          <Grid
            templateColumns="1fr">
            <Flex
              justifyContent="center"
              alignItems="center"
              alignContent="center"
            >
              <MdCloudDownload size={'10em'} style={{}} />
            </Flex>
            Drag and drop the report here
          </Grid>
        </Card>
      </View>
      <View style={{ marginRight: '30%' }}>
        <Card>
          <Heading level={4}>Download Report</Heading>
          <Flex
            justifyContent="center"
            alignItems="center"
            alignContent="center"
            style={{ marginTop: '10%' }}
          >
            <Button
              variation="primary"
              size="large"
              loadingText=""
              onClick={() => swal({
                title: "Downloading",
                text: "Reports are being generated",
                icon: "success",
                button: "Ok",
              })}
              ariaLabel=""
            >
              Click to download report
            </Button>
          </Flex>
        </Card>
      </View>
    </Grid>
  );
}

export default Reports;