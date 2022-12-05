import React from 'react';
import '../App.css';
import { Card, Heading, View, Button, TableHead, TableCell, Table, TableRow, TableBody, Image } from '@aws-amplify/ui-react';
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
                <Heading level={4}>{`Position: ${Servicemember.position}`}</Heading> 
              </Card>
            </div> 
            <div className="cardbuttons">
              <Card>
                <Button
                  variation="link"
                  size="small"
                  loadingText=""
                  onClick={() => alert('Upload Success')}
                  ariaLabel=""
                  >Upload</Button>
              </Card>
            </div>
        <Table
            caption=""
            highlightOnHover={false}>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Image
                  src="certificate.png"
                  objectFit="initial"
                  objectPosition="50% 50%"
                  backgroundColor="initial"
                  height="75%"
                  width="75%"
                  opacity="100%"
                />
              </TableCell>
                <TableCell>
                <Image
                  src="certificate.png"
                  objectFit="initial"
                  objectPosition="50% 50%"
                  backgroundColor="initial"
                  height="75%"
                  width="75%"
                  opacity="100%"
                />
                </TableCell>
                <TableCell>
                <Image
                  src="certificate.png"
                  objectFit="initial"
                  objectPosition="50% 50%"
                  backgroundColor="initial"
                  height="75%"
                  width="75%"
                  opacity="100%"
                />
                </TableCell>
                <TableCell><Image
                  src="certificate.png"
                  objectFit="initial"
                  objectPosition="50% 50%"
                  backgroundColor="initial"
                  height="75%"
                  width="75%"
                  opacity="100%"
                /></TableCell>
                <TableCell><Image
                  src="certificate.png"
                  objectFit="initial"
                  objectPosition="50% 50%"
                  backgroundColor="initial"
                  height="75%"
                  width="75%"
                  opacity="100%"
                /></TableCell>
              </TableRow>
            </TableBody>
          </Table>
      </View>
        }
      </div>
    );
}
  
export default Profile;

        
      