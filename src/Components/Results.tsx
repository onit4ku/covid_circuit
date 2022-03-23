import TranslatedText from "../i18n";

import circuitImg2 from "../img/image2.png";
import phylogeny from "../img/phylogeny.png";
import geography from "../img/geography.png";
import imgDownloads from "../img/imgDownloads.png";

export default function Results() {
  return (
    <div className="page-section" id="results">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="section-heading">
              <br />
              <br />
              <br />
              <br />
              <TranslatedText textKey="results_text_title" />
            </div>
          </div>
        </div>
            <br />
              <br />
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <br />
              <br />
              <br />
              <br />
              <TranslatedText textKey="results_text_1" />
            </div>
            <div className="col-md-6">
              <br />
              <img src={circuitImg2} className="img-responsive center-block" alt="sequencing circuit" />
              <TranslatedText textKey="results_text_2" />
              <br />
            </div>
            {/* <div className="col-md-6">
              <br />
              <br />
              <br />
              <br />

            </div> */}

            <div className="col-md-6">
              <br />
              
              <TranslatedText textKey="results_text_Downloads" />
              <a target="_blank" rel="noreferrer" href="https://www.nature.com/articles/s41598-021-02701-5.pdf"><img src={imgDownloads} className="img-responsive center-block" alt="sequencing circuit" /></a>
            </div>

            <div className="col-md-12">
              <br />
              <br />
              <br />
              <TranslatedText textKey="results_text_3" />
            </div>
          </div>
          <br />

          <br />
          <div className="row">
            <div className="col-md-6">
              <div className="embed-responsive embed-responsive-16by9 google-maps">
                {/* <iframe
                  allowFullScreen
                  frameBorder="0"
                  title="andalucia sars-cov tree"
                  className="embed-responsive-item"
          
                  src="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage&d=tree&onlyPanels=TRUE&sidebar=closed" ></iframe> */}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage&d=tree&onlyPanels=TRUE&sidebar=closed"
                >
                  {" "}
                  <img src={phylogeny} className="img-responsive center-block" alt="phylogeny" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="embed-responsive embed-responsive-16by9 google-maps">
                {/* <iframe
                  allowFullScreen
                  frameBorder="0"
                  title="andalucia sars-cov map"
                  className="embed-responsive-item"
               
                  src="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage&d=map&onlyPanels=TRUE&sidebar=closed" ></iframe> */}
                <a
                  target="_blank"
                  rel="noreferrer noopener"
                  href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage&d=map&onlyPanels=TRUE&sidebar=closed"
                >
                  <img src={geography} className="img-responsive center-block" alt="phylogeny" />
                </a>
              </div>
            </div>
            </div>
          </div>
      </div>
    </div>
  );
}
