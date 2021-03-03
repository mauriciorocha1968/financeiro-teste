import React from 'react';
import ContentHeader from '../../components/ContentHeader';
import SelectInput from '../../components/SelectInput';
import { Container } from './styles';


const Dashboard: React.FC = () => {


  const lista1 = [{  value: 'Mauricio', label: 'Maurício'},
    {value: 'Kauan', label: 'Kauan'},
    {value: 'Mauricio', label: 'Maurício'},
  ]

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#fff">
        <SelectInput options={lista1}/>
      </ContentHeader>
    </Container>
  );

}

export default Dashboard;
