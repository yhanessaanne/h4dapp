import React from 'react';
import '../App.css';
import {
  Grid,
  View,
  Heading,
  Card,
  Expander,
  ExpanderItem,
  Table,
  TableCell,
  TableBody,
  TableHead,
  TableRow,
} from '@aws-amplify/ui-react';
import TrainingGraph from '../components/TrainingGraph';
import PieChart from '../components/PieChart';

// fetch training completion data
// render it to website
function filterTrainingToDate( servicememberArray, minTime, maxTime ) {
  return servicememberArray.filter(servicemember => {
    return minTime.getTime() < servicemember.dueDate.getTime() && servicemember.dueDate.getTime() < maxTime.getTime();
  });
}

function DueSoonTable({ servicememberArray }) {
  return (
    <Table variation='striped'>
      <TableHead>
        <TableCell as="th">Rank</TableCell>
        <TableCell as="th">Name</TableCell>
        <TableCell as="th">Training</TableCell>
        <TableCell as="th">Date Due</TableCell>
      </TableHead>
      <TableBody>
      {servicememberArray.map(servicemember => (
        <TableRow>
          <TableCell>{servicemember.rank}</TableCell>
          <TableCell>{servicemember.name}</TableCell>
          <TableCell>{servicemember.trainingName}</TableCell>
          <TableCell>{servicemember.dueDate.toDateString()}</TableCell>
        </TableRow>
      ))}
      </TableBody>
    </Table>
  );
}

function Home() {
  //  input: array of servicemember due soon
  //  [{ rank, name, trainingName, dueDate as Date() } ... ]
  const hardcodeData = [
    {
      rank: 'MSgt',
      name: 'John Smith',
      trainingName: 'EMEDS Course',
      dueDate: new Date(2022, 11, 9),
    },
    {
      rank: 'MSgt',
      name: 'John Smith',
      trainingName: 'EMEDS Course',
      dueDate: new Date(2022, 11, 16),
    },
    {
      rank: 'MSgt',
      name: 'John Smith',
      trainingName: 'EMEDS Course',
      dueDate: new Date(2022, 11, 17),
    },
    {
      rank: 'MSgt',
      name: 'John Smith',
      trainingName: 'EMEDS Course',
      dueDate: new Date(2022, 11, 13),
    },
    {
      rank: 'MSgt',
      name: 'John Smith',
      trainingName: 'EMEDS Course',
      dueDate: new Date(2023, 0, 5),
    },
    {
      rank: 'MSgt',
      name: 'John Smith',
      trainingName: 'EMEDS Course',
      dueDate: new Date(2023, 1, 17),
    },
    {
      rank: 'MSgt',
      name: 'John Smith',
      trainingName: 'EMEDS Course',
      dueDate: new Date(2023, 2, 3),
    },
    {
      rank: 'MSgt',
      name: 'John Smith',
      trainingName: 'EMEDS Course',
      dueDate: new Date(2023, 0, 28),
    },
  ]

  return (
    <Grid
      stye={{ margin: '10px' }}
      columnGap="0.5rem"
      rowGap="0.5rem"
      templateColumns="2fr 1fr"
      templateRows="1fr"
    >
      <View>
        <Card variation="elevated">
          <Heading level={4} >
            OVERALL TRAINING STATUS
          </Heading>
          <TrainingGraph />
        </Card>
      </View>
      <View>
        <Card variation="elevated">
          <Heading level={4} >
            TOP NON-COMPLIANT TRAINING
          </Heading>
          <PieChart />
        </Card>
      </View>
      <View columnStart="1" columnEnd="-1">
        <Expander type='multiple' defaultValue={['1w', '2w', '1m', '3m']}>
          <ExpanderItem title='Training Due In 1 Week' value='1w'>
            <DueSoonTable servicememberArray={filterTrainingToDate(hardcodeData, new Date(2022, 11, 3), new Date(2022, 11, 13))}></DueSoonTable>
          </ExpanderItem>
          <ExpanderItem title='Training Due In 2 Weeks' value='2w'>
            <DueSoonTable servicememberArray={filterTrainingToDate(hardcodeData, new Date(2022, 11, 13), new Date(2022, 11, 20))}></DueSoonTable>
          </ExpanderItem>
          <ExpanderItem title='Training Due In 1 month' value='1m'>
            <DueSoonTable servicememberArray={filterTrainingToDate(hardcodeData, new Date(2022, 11, 20), new Date(2023, 0, 13))}></DueSoonTable>
          </ExpanderItem>
          <ExpanderItem title='Training Due In 3 months' value='3m'>
            <DueSoonTable servicememberArray={filterTrainingToDate(hardcodeData, new Date(2023, 0, 13), new Date(2023, 2, 13))}></DueSoonTable>
          </ExpanderItem>
        </Expander>
      </View>
    </Grid>
  );
}
export default Home;