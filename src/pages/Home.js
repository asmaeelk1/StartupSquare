import React from 'react';
import './Home.css';
import MT from './meta.png';
import FinanceCity from './fianceCity.png';
import WorldBank from './worldBank.jpeg';
import Auf from './auf.png';
import {data} from './contentcards';
import Cards from './card.js';
import {Modal } from './modale.js';
import { BiCalendar ,BiSearch } from 'react-icons/bi';

export default function Home() {
  return (
    <div>
        {/* section titre de video  */}
      <section className='secTitelVd'>
      <h2 className='titel'>The Operating System <br/> for your
       <span className='titelGradient' > Innovation Programs</span></h2>
      <p className='afterTitle'>All-in-one platform that digitizes the workflow of awards organization, incubation/acceleration programs, investments and corporate collaborations with startups</p>
      <div className='btns'>
        <button className='getStartedBtnBody'>Get Started</button>
        <p className='textGrey'>Or</p>
        <button className='btnWhite'>< BiCalendar className='icon'/>Book Demo</button>
      </div>
        <div className='mignature'>
          <Modal/>
        </div>
        {/* section apres la vd */}
        <div className='afterVd'>
          <h4>ENABLED MORE THAN 500 INNOVATION PROGRAMS</h4>
          <p>Used by over 20,000 investors, founders, coaches, mentors and programs managers in 30 countries.</p>
        </div>
        {/* section brands */}
        <div className='brands'>
          <img src={MT} />
          <img src={FinanceCity} />
          <img src={WorldBank} />
          <img src={Auf}/>
        </div>        
      </section>
      {/* sction made for teamwork */}
      <section className='MadeForTeamwork'>
      <div className='boxe'>
        <h3>Made for teamwork.</h3>
        <p>Startup Square’s powerful suite of tools helps your team to stay stronger than ever.</p>
        <div className='inputEmail'>
          <input placeholder='Your work email' />
          <button className='getStartedBtnBody'>Get started</button>
        </div>
      </div>
      </section>
      {/* section why StartupSquare */}
      <section className='whystartupsquare'>
        <span className='remarque'>WHY</span>
        <h2 className='titelGradient'>Why StartupSquare?</h2>
        <p className='afterTitle'>The Benefits of using StartupSquare</p>
        <div className='cards'>
      {data.map((item , index)=>{
        return(
          <Cards
          key={index}
          img={item.img}
          remarque={item.remarque}
          titel={item.titel}
          description={item.description}
          />
        )
      })}
    </div>
      </section>
      <section className='MadeForTeamwork'>
        <div>
          <span className='remarque'>HOW</span>
        <h2 className='titelGradient'>How it works ?</h2>
        <p className='afterTitle'>As simple as building LEGO</p>
        </div>
      </section>
      {/* section a softwarethat put forward your values */}
      <section className='whystartupsquare'>
      <span className='remarque'>VALUES</span>
      <h2 className='titelGradient'>A software that put forward your values !</h2>
      <p className='afterTitle'>Build strong relationships with your ecosystem partners (entrepreneurs, investors, coaches, judges, donors…)</p>
      <div>
        <div className='valeur'>
          <div> <BiSearch className='icone'/></div>
          <h4>Transparency</h4>
          <p className='card-text'>With its native ability to keep track of every single action, Startup Square makes your program management workflow fully transparent</p>
        </div>
        <div className='valeur'>
          <div> <BiSearch className='icone'/></div>
          <h4>Transparency</h4>
          <p className='card-text'>With its native ability to keep track of every single action, Startup Square makes your program management workflow fully transparent</p>
        </div>
        <div className='valeur'>
          <div> <BiSearch className='icone'/></div>
          <h4>Transparency</h4>
          <p className='card-text'>With its native ability to keep track of every single action, Startup Square makes your program management workflow fully transparent</p>
        </div>
        <div className='valeur'>
          <div> <BiSearch className='icone'/></div>
          <h4>Transparency</h4>
          <p className='card-text'>With its native ability to keep track of every single action, Startup Square makes your program management workflow fully transparent</p>
        </div>
        <div className='valeur'>
          <div> <BiSearch className='icone'/></div>
          <h4>Transparency</h4>
          <p className='card-text'>With its native ability to keep track of every single action, Startup Square makes your program management workflow fully transparent</p>
        </div>
      </div>
      </section>
    </div>
  )
}
