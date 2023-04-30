import React from 'react';
import StatSection from './StatSection';

const Stats = () => {
   return (
      <>
         <section className="counter__area pb-100">
            <div className="container">
               <div className="counter__inner white-bg wow fadeInUp" data-wow-delay=".2s">
                  <div className="row">

                     <StatSection counter={1749} title="Happy Clients" />
                     <StatSection counter={796} title="Project Completed" />
                     <StatSection counter={573} title="Support Given" />
                     <StatSection counter={2739} title="Offices Worldwide" />

                  </div>
               </div>
            </div>
         </section>
      </>
   );
};

export default Stats;