
import TranslatedText from "../i18n";

function WhatWeDo() {
    return (
        <div id="what-we-do" style={{ paddingTop: '21rem' }}>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="left-text">
                        <TranslatedText textKey="whatwedo_title"/>
                            <br />
                         <TranslatedText textKey="whatwedo_txt"/>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default WhatWeDo;