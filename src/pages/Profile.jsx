import React from 'react';
import '../App.css';
import { Card, Heading, View, Button, TableHead, TableCell, Table, TableRow, TableBody } from '@aws-amplify/ui-react';
import { getServiceman } from '../graphql/queries'
import { API, graphqlOperation } from "aws-amplify";
import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';

function Profile() {

  // grab servicemember id from url
  const ServicememberID = useParams().id;

  const [Servicemember, setServicemember] = useState(null);

  useEffect(() => {
      fetchServicememberByID();
  },[]);

  const fetchServicememberByID = async () => {
      try {
          const servicemenData = await API.graphql(graphqlOperation(getServiceman, {id: ServicememberID}));
          const servicemember = servicemenData.data.getServiceman;
          setServicemember(servicemember);
      } catch (error) {
          console.log('error on fetching airman', error);
      }
  }

    console.log(Servicemember);
    return (
      <div>
        {
          (Servicemember == null) ?
          <View>
            <Card>
              <Heading level={2}>Loading</Heading>
            </Card>
          </View>
          :
          <View>
            <div className="card">
              <Card>
                <Heading level={2}>{`${Servicemember.rank} ${Servicemember.first} ${Servicemember.last}`}</Heading> 
                <Heading level={4}>{`AFSC: ${Servicemember.afsc}`}</Heading> 
              </Card>
            </div> 
            <div className="cardbuttons">
              <Card>
                <Button
                    variation="link"
                    size="small"
                    loadingText=""
                    onClick={() => alert('this button will send email to associated email of airman')}
                    ariaLabel=""
                  >Notify</Button>
                <Button
                  variation="link"
                  size="small"
                  loadingText=""
                  onClick={() => alert('utm will be allowed to update the completion of a training')}
                  ariaLabel=""
                  >Update</Button>
                <Button
                  variation="link"
                  size="small"
                  loadingText=""
                  onClick={() => alert('this will lead to the airmans page of certificates to upload and view')}
                  ariaLabel=""
                  >Certificates</Button>
              </Card>
            </div>
        <Table
            caption=""
            highlightOnHover={false}>
            <TableHead>
              <TableRow>
                <TableCell as="th">Training Name</TableCell>
                <TableCell as="th">Status</TableCell>
                <TableCell as="th">Date Compeleted</TableCell>
                <TableCell as="th">Date Due</TableCell>
                <TableCell as="th">Days Until Due</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow>
                <TableCell>name of training</TableCell>
                <TableCell>completed/incomplete/overdue</TableCell>
                <TableCell>date of when training Compeleted</TableCell>
                <TableCell>due date of training</TableCell>
                <TableCell>days till due again</TableCell>
              </TableRow>
            </TableBody>
          </Table>
      </View>
        }
      </div>
    );
}
  
export default Profile;

        
      