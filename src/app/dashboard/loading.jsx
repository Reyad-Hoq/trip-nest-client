import { Spinner } from '@heroui/react';
import React from 'react';

const DashboardLoading = () => {
  return (
    <div className="flex items-center justify-center min-h-screen gap-4 ">
      <Spinner size='xl' />
      <span className="text-lg text-muted">Loading Dashboard...</span>
    </div>
  );
};

export default DashboardLoading;