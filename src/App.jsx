import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import ComplexTable from 'views/admin/event/components/ComplexTable';
import EventDetail from 'views/admin/event/components/EventDetail';
import PlanDetail from 'views/admin/planning/components/PlanDetail';

// Import your data
import { columnsDataComplex } from 'views/admin/event/variables/columnsData.js'
import eventData from 'views/admin/event/variables/tableDataComplex.json';
import { columnsDataComplexPlan } from 'views/admin/planning/variables/columnsData.js'
import planData from 'views/admin/planning/variables/tableDataComplex.json';

const App = () => {
  return (
    <Routes>
      <Route path="admin/event-management/event/:id" element={ <EventDetail eventData={eventData} />} />
      <Route path="admin/planning/event/:id" element={ <PlanDetail planData={planData} />} />
      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route path="/" element={<ComplexTable columnsData={columnsDataComplex} tableData={eventData} />} />
      <Route path="/" element={<ComplexTable columnsData={columnsDataComplexPlan} tableData={planData} />} />
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
    </Routes>
  );
};

export default App;



