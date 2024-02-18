
import imgStar from '../assets/images/icon-star.svg';
import imgPlus from '../assets/images/icon-plus.svg';
import imgMinus from '../assets/images/icon-minus.svg';
import { useState } from 'react';

// Un componente es una función
function Card() {

  const faqs = [
    { 
      id: 1, 
      title: "What is Frontend Mentor, and how will it help me?", 
      description: "Frontend Mentor offers realistic coding challenges to help developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. Its suitable for all levels and ideal for portfolio building.",
      value: false,
    },
    { 
      id: 2, 
      title: "Is Frontend Mentor free?", 
      description: "Yes, Frontend Mentor offers both free and premium coding challenges, with the free option providing access to a range of projects suitable for all skill levels.",
      value: false,
    },
    { 
      id: 3, 
      title: "Can I use Frontend Mentor projects in my portfolio?", 
      description: "Yes, you can use projects completed on Frontend Mentor in your portfolio. It's an excellent way to showcase your skills to potential employers!",
      value: false,
    },
    { 
      id: 4, 
      title: "How can I get help if I'm stuck on a Frontend Mentor challenge?", 
      description: "The best place to get help is inside Frontend Mentor's Discord community. There's a help channel where you can ask questions and seek support from other community members.",
      value: false,
    }
  ];

  const [isOpen, setIsOpen] = useState( faqs );

  const toggleDropdown = (faqs, indice) => {

    const updatedFaqs = faqs.map( faq => {
    
      let { ...singleFaq } = faq;

      singleFaq.id === indice ? singleFaq.value = !singleFaq.value : singleFaq.value ? singleFaq.value =  false : '' ;
      
      return singleFaq;
      
    });

    setIsOpen(updatedFaqs);
    
  };

  return ( 
    <>
      <section className="card" id="card-component">

        <div className="card-header">
          <img src={imgStar} alt="Imagen estrella" />
          <h1 className='c-title'>FAQs</h1>
        </div>

        <div className="card-body">

          { isOpen.map( (faq) => (

            <div className={`accordion accordion-${faq.id}`} key={faq.id} >
              <div className="title">
                <p className='accordion-title w-600 c-title'>{ faq.title }</p>
                <img src={ faq.value ? imgMinus : imgPlus } alt="Imagen estrella" onClick={ () => toggleDropdown(isOpen, faq.id) } />
                <p className={`descripcion w-400 ${ faq.value ? 'show' : ''}`}>{ faq.description }</p>
              </div>
            </div>

          )) }

        </div>

      </section>
    </>
  )

}

export default Card;