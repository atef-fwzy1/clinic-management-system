import React, { useState } from 'react';
import './PatientList.css';
import PatientCard from '../PatientCard/PatientCard';
import {Link} from "react-router"
import { useContext , useEffect} from 'react';
import { SearchContext } from '../../Context/SearchContext'; 
const PatientList = ({page}) => {

const data  = [
    { name: 'سارة حسن السيد',blood_type :"O+ / O-", time: '١١:٠٠ صباحاً', type: 'متابعة', status: 1 ,id:54652},
    { name: 'ياسين عبدالله', blood_type :"AB+" , time: '١١:٣٠ صباحاً', type: 'كشف جديد', status: 1 ,id:26516},
    { name: 'مصطفى محمود',blood_type :"A+ / A-", time: '١٠:٠٠ صباحاً', type: 'تم الكشف', status: 2 ,id:4856165},
    { name:'محمد كمال السيد علي',blood_type :"O+ / O-", time: '١١:٠٠ صباحاً', type: 'متابعة', status: 1 ,id:918781},
    { name: 'جمال قاسم', blood_type :"AB+" , time: '١١:٣٠ صباحاً', type: 'كشف جديد', status: 1 , id:218855},
    { name: 'يحي  صفوت',blood_type :"A+ / A-", time: '١٠:٠٠ صباحاً', type: 'تم الكشف', status: 3 ,id:56465},
  ]


  const [patients , setPatients] = useState( data.sort((a, b) => a.status - b.status));
  const [resSearch , setresSearch] = useState("");

  // pending = 1
  // done = 2
  // delayed = 3
  
const searchstate = useContext(SearchContext)

  const normalizeArabic = (text) => {
    return text
      .toLowerCase()
      .replace(/[إأآا]/g, "ا")
      .replace(/ة/g, "ه")
      .replace(/ى/g, "ي")
      .replace(/ؤ/g, "و")
      .replace(/ئ/g, "ي")
      .replace(/[\u064B-\u065F]/g, "");
  };
  useEffect(() => {
  if(page=="allpatient"){

    const res = data.filter((item) =>
      normalizeArabic(item.name).includes(
        normalizeArabic(searchstate.search.trim())
      )
    );
    setresSearch(res);
  }
}, [page=="allpatient"?searchstate.search.length : 0]);

console.log(resSearch)

function sortPationts() {
const updated = patients.map((p, i) => {
  if (i === 0) {
    return { ...p, status: 2 };
  }
  return p;
});

setPatients(updated.sort((a, b) => a.status - b.status));


 }

  return (
    <div className="patient-list-container">
      <div className="list-header">
        {
          page =="allpatient" ?<a href="#" style={{fontSize:"20px" , padding:"10px"}}>  كل المرضي </a>: <Link to={"allnatients"}>
        <a href="#">عرض الكل</a>
        </Link>
        }
       
        <h4>المرضى اللي عليهم الدور</h4>
      </div>
      {
        (resSearch.length )> 0 &&  (resSearch.length < patients.length) ?resSearch.map((p, idx) => <PatientCard page={page}key={idx}  name={p.name} time={p.time} type={p.type} status={p.status} id={p.id}  actionButt={sortPationts}/>)
        :
      patients.map((p, idx) => <PatientCard quee={idx}page={page}key={idx}  name={p.name} time={p.time} type={p.type} status={p.status} id={p.id}  actionButt={sortPationts}/>)}
    </div>
  );
};

export default PatientList;