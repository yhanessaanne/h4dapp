import React from 'react';
import '../App.css';
import { Grid, View, Heading, Card } from '@aws-amplify/ui-react';
import TrainingGraph from '../components/TrainingGraph';
import PieChart from '../components/PieChart';

// fetch training completion data
// render it to website
function Home() {
    return ( 
      <Grid
        stye={{ margin: '10px'}}
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
            <TrainingGraph/>
          </Card>
        </View>
        <View>
          <Card variation="elevated">
            <Heading level={4} >
              TOP NON-COMPLIANT TRAINING
            </Heading>
            <PieChart/>
          </Card>
        </View>
      </Grid>
    );
}
export default Home;