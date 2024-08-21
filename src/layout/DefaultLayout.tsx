import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from '../components/Header';
import { Bottom } from '../components/Bottom';

export function DefaultLayout() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Header />
      <Outlet />  
      <Bottom />
    </div>
  );
}