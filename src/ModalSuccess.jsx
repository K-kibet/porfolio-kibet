import { CloseOutlined } from '@mui/icons-material';
import React, {useState } from 'react';

const ModalSuccess = () => {
    const [closed, setClosed] = useState(true);
    return (
        <div className='modal' style={{
            display: closed ? 'none' : 'flex'
        }} >
            <div className="top"> 
                <span>Thank you</span>
                <CloseOutlined className='close' onClick={() => setClosed(false)}/>
            </div>
            <div className="content">
                Form submitted successfully
            </div>
        </div>
    );
}

export default ModalSuccess;