import { Routes, Route, Navigate } from 'react-router-dom';
import Header from './components/Header/Header';
import { lazy } from "react";
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchBaseCurrency } from './reduxState/currency/operations';
import { setbaseCurrency } from './reduxState/currency/currencySlise';

const Home = lazy(() => import('./pages/Home'));
const Rates = lazy(() => import('./pages/Rates'));

export const App = () => {

const dispatch = useDispatch()
  useEffect(() => {
const options = {
  enableHighAccuracy: true,
  timeout: 5000,
  maximumAge: 0,
    };
    const success = ({ coords }) => {
      dispatch(fetchBaseCurrency(coords));
    };
    const error = () => {
      dispatch(setbaseCurrency('USD'));
    };
    navigator.geolocation.getCurrentPosition(success, error, options)
  }, [])
  return (
    <Routes>
      <Route parh="/" element={<Header/>}>
        <Route index element={<Home/>}></Route>
        <Route path="/rates" element={<Rates />}></Route>
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};
