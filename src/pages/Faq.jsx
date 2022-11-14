import React from 'react';
import AccordionItem from '../components/AccordionItem';

const Faq = () => {
    return (
        <div className='faq' id='faq'>
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
            <div className="wrapper">
                <AccordionItem />
                <AccordionItem />
                <AccordionItem />
            </div>
        </div>
    );
}

export default Faq;
