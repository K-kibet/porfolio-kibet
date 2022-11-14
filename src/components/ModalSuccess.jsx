import { CloseOutlined } from '@mui/icons-material';
import React, { useEffect, useMemo, useState } from 'react';

const ModalSuccess = () => {
    const [closed, setClosed] = useState("flex");
    const handleClose = () => {
        setClosed("none");
    }
    return (
        <div className='modal' style={{
            display: closed
        }} >
            <div className="top"> 
                <span>Thank you</span>
                <CloseOutlined className='close' onClick={handleClose}/>
            </div>
            <div className="content">
                <span>
                   Form submitted successfully
                </span>
            </div>
            
            <div className="bottom">
                <button>
                    VIEW
                </button>
                <button onClick={handleClose}>
                    CLOSE
                </button>
            </div>
        </div>
    );
}

export default ModalSuccess;