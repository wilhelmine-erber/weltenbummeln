import React from 'react';
import './aboutus.css'

//* all bootstrap styling are disable in index.html
function Aboutus() {
  return (
    <div className="aboutus">
      <div className="pt-5 pb-5">  
        <div className="container">
          <div className="row">
            <div className="section-head_about col-sm-12">
              <h4>
                <span>Über uns</span>
              </h4>
              <p>
                Unsere Plattform ermöglicht es, eine Wohnung in Deutschland für einen kurzen oder längeren Zeitraum zu mieten.
                Die Nutzer können nach einer Mietwohnung suchen oder nach der Registrierung ihre eigene Wohnung vermieten.
              </p>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item_about">
                <span className="icon_about feature_box_col_one">
                  <i className="fa fa-feather"></i>
                </span>
                <h6>Unser Projekt "Weltenbummeln"</h6>
                <p>
                  Dieses Projekt wurde innerhalb von 7 Wochen nach Beginn der Arbeiten in Betrieb genommen und stand für Tests zur Verfügung.
                  Wir arbeiten immer noch an der allgemeinen Verbesserung und wir möchten weitere Funktionen hinzufügen.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item_about">
                <span className="icon_about feature_box_col_one">
                  <i className="fa fa-lightbulb"></i>
                </span>
                <h6>Motivation</h6>
                <p>
                  Viele Menschen sind auf der Suche nach einer Unterkunft, in der sie sich ähnlich wie im eigenen Zu Hause, geborgen fühlen können. Sei es für unterschiedliche Anlässe, wie private Reisen, Geschäftsreisen, Tages,- und Wochenendtrips.
                  Unsere Website ermöglicht es, eine Wohnung ganz einfach in ein paar Minuten zu buchen.
                </p>
              </div>
            </div>
            <div className="col-lg-4 col-sm-6">
              <div className="item_about">
                <span className="icon_about feature_box_col_one">
                  <i className="fa fa-laptop-code"></i>
                </span>
                <h6>Wer sind wir ?</h6>
                <p>
                  Wir sind fünf Studenten bestehend aus Wilhelmine, Julia, Salem, Jesus und Marine, die einen einjährigen Full Stack
                  Webentwicklungskurs beim Digital Career Institute absolviert haben.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>



    </div>
  );
}


export default Aboutus;