import "@aws-amplify/ui-react/styles.css";
import "../App.css"
import { View, CheckboxField, Table, TableRow, TableCell, TableHead, TableBody, Button, Card, SearchField} from "@aws-amplify/ui-react";
import { listServicemen } from '../graphql/queries'
import { API, graphqlOperation } from "aws-amplify";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from 'sweetalert';


function ProfilesList() {
    const [Servicemen, setServiceman] = useState([]);

    useEffect(() => {
        fetchServiceman();
    },[]);
  
    const fetchServiceman = async () => {
        try {
            const servicemanData = await API.graphql(graphqlOperation(listServicemen));
            const servicemanList = servicemanData.data.listServicemen.items;
            console.log('serviceman list', servicemanList);
            setServiceman(servicemanList);
        } catch (error) {
            console.log('error on fetching servicemen', error);
        }
    };
    
    const navigate = useNavigate();
    const navigateToProfile = (ServicememberID) => {
      navigate(`/profile/${ServicememberID}`);
    };

  return (
    <View className="App">
      <SearchField
        label="Search"
        placeholder="Search here..."
      />
      <Card>
        <Button
          variation="link"
          size="small"
          loadingText=""
          onClick={() => alert('mass update')}
          ariaLabel=""
          >Update</Button>
        <Button
          variation="link"
          size="small"
          loadingText=""
          onClick={() => swal({
          title: "Notified",
          text: "Selected Members",
          icon: "success",
          button: "Ok",})}
          ariaLabel=""
          >Notify</Button>
        <Button
          variation="link"
          size="small"
          loadingText=""
          onClick={() => swal({
            title: "Generate Reports",
            text: "Preparing to Download",
            icon: "success",
            button: "Ok",})}
          ariaLabel=""
          >Generate Reports</Button>
          </Card>
      <div className="servicemanlist">
            <Table
            caption=""
            highlightOnHover={false}>
            <TableHead>
              <TableRow>
                <TableCell as="th">Select</TableCell>
                <TableCell as="th">Rank</TableCell>
                <TableCell as="th">Last Name</TableCell>
                <TableCell as="th">First Name</TableCell>
                <TableCell as="th">Position</TableCell>
                <TableCell as="th">AFSC</TableCell>
                <TableCell as="th">Status</TableCell>
                <TableCell as="th">Action</TableCell>
              </TableRow>
            </TableHead>
            { Servicemen.map(Servicemen => {
          return (
            <TableBody>
              <TableRow>
                <TableCell>
                  <div className="checkbox">
                  <CheckboxField
                    name="select"
                    value="yes"
                    size="small"
                  />
                  </div>
                </TableCell>
                <TableCell>{Servicemen.rank}</TableCell>
                <TableCell>{Servicemen.last}</TableCell>
                <TableCell>{Servicemen.first}</TableCell>
                <TableCell>{Servicemen.position}</TableCell>
                <TableCell>{Servicemen.afsc}</TableCell>
                <TableCell>{Servicemen.status}</TableCell>
                <TableCell>
                <Button
                  variation="link"
                  size="small"
                  loadingText=""
                  onClick={() => navigateToProfile(Servicemen.id)}
                  ariaLabel=""
                >View/Edit</Button>
                </TableCell>
              </TableRow>
            </TableBody>
            )
            })}
          </Table>
      </div>
    </View>
  );
}

export default ProfilesList;
