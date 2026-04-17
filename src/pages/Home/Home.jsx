import React from 'react';
import Header from '../../components/Header/Header.jsx';
import PatientCard from '../../components/PatientCard/PatientCard.jsx';
import PatientList from '../../components/PatientList/PatientList.jsx';
// import ActionCards from '../../components/ActionCards/ActionCards.jsx';
import '../../styles/global.css';
import QuickActions from '../../components/QuickActions/QuickActions.jsx';
import BottomNav from '../../components/BottonNav/BottomNav.jsx';
const Home = () => {
  return (
    <div className="container">
      <Header />
      <div style={{ padding: '0 15px',marginBottom: "30px"}}>
        <PatientList />
        {/* <QuickActions/> */}
        <BottomNav/>
        {/* <ActionCards /> */}
      </div>
    </div>
  );
};

export default Home;