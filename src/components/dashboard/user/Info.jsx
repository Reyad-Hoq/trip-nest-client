import React from 'react';

const Info = ({ icon, label, value }) => {
  return (
    <div className="flex items-start gap-4">

      <div className="rounded-xl bg-primary-50 p-3 text-primary">
        {icon}
      </div>

      <div>
        <p className="text-sm text-default-500">
          {label}
        </p>

        <p className="font-semibold">
          {value}
        </p>
      </div>

    </div>
  );
};

export default Info;