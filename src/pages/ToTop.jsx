import { ArrowUpwardOutlined } from '@mui/icons-material';
import React from 'react';

const ToTop = () => {
    function toTop() {
        window.screenTop = 0;
      }
    return (
      <button className="to-topBtn" onClick={toTop} id="to-topBtn">
        <ArrowUpwardOutlined />
      </button>
    );
}

export default ToTop;
