import React from 'react';
import AccordionItem from './AccordionItem';
import { faqs } from './data';

const Faq = () => {
    return (
        <div className='faq' id='faq'>
            <h1>FREQUENTLY ASKED QUESTIONS</h1>
            <ul className="accordion">
                {
                    faqs.map(faq => {
                        return <AccordionItem key={faq.id} faq={faq}/>
                    })
                }
            </ul>
        </div>
    );
}

export default Faq;
