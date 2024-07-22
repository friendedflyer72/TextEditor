import React from 'react';

export default function Alert(props) {
  const capitalize = (word) => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };

  const getAlertStyle = (type) => {
    switch(type) {
      case 'success':
        return 'bg-green-100 text-green-800';
      case 'warning':
        return 'bg-yellow-100 text-yellow-800';  
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div style={{ height: "60px" }}>
      {props.alert && (
        <div className={`alert ${getAlertStyle(props.alert.type)} p-4 rounded-md`} role="alert">
          <strong>{capitalize(props.alert.type)}</strong>: {props.alert.msg}
        </div>
      )}
    </div>
  );
}
