import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import RtlLayout from "layouts/rtl";
import AdminLayout from "layouts/admin";
import AuthLayout from "layouts/auth";
import ComplexTable from 'views/admin/event/components/ComplexTable';
import EventDetail from 'views/admin/event/components/EventDetail';

// Import your data
import { columnsDataComplex } from 'views/admin/event/variables/columnsData.js'
import eventData from 'views/admin/event/variables/tableDataComplex.json';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/admin" replace />} />
      <Route path="admin/event-management/event/:id" element={<EventDetail eventData={eventData} />} />
      <Route path="/" element={<ComplexTable columnsData={columnsDataComplex} tableData={eventData} />} />
      <Route path="auth/*" element={<AuthLayout />} />
      <Route path="admin/*" element={<AdminLayout />} />
      <Route path="rtl/*" element={<RtlLayout />} />
      

    </Routes>
  );
};

export default App;



