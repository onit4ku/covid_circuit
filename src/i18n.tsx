import React from 'react';
import { useRecoilState } from 'recoil';
import selectedLanguage from './i18nState';

const translations = {
    "en": {
        "whatwedo_title":
            <h4 style={{ textAlign: 'justify' }}>SARS-CoV-2 whole genome sequencing circuit in Andalusia</h4>
            ,
        "whatwedo_txt": 
            <p style={{ textAlign: 'justify', fontSize: 18 }}>As response to a recommendation for the integration of genome sequencing in the SARS-CoV-2 surveillance published by the Public Health Commission of the Interterritorial council in <a href="https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov/documentos/Integracion_de_la_secuenciacion_genomica-en_la_vigilancia_del_SARS-CoV-2.pdf">22 January 2021</a>, a joint instruction was carried out, 1/2020 from the General Secretariat for Research, Development and Innovation in Health and the Management Directorate of the Andalusian Health Service, for the Management of samples in the approach to Personalized Medicine in COVID-19.<br/><br/>A previous project funded by the Andalusian Health System (<a href="https://clinbioinfosspa.es/projects/covseq/indexEng.html">Sequencing of the SARS-CoV-2 virus genome for the monitoring and management of the Covid-19 epidemic in Andalusia and the rapid generation of prognostic and response to treatment biomarkers</a>)  that included the 16 main tertiary hospitals in Andalusia, along with three research centers with genome sequencing facilities (IBIS, Genyo and CABIMER) and the Bioinformatics Area of the Progress and Health Foundation, set the ground for a rapid implementation of a regional-scale systematic sequencing of the virus. This project constitutes a remarkable example of translational research.</p>
            ,
        "about_text_title": 
            <h4 style={{ fontSize: 20 }}>SARS-CoV-2 whole genome sequencing circuit</h4>
            ,
        "about_text_1": 
            <p style={{ textAlign: 'justify', fontSize: 18 }}>The operation of the circuit is as follows: SARS-CoV-2 naso-pharingeal samples (used for PCR testing) are collected in the main tertiary hospitals of the eight Andalusian provinces and sent to the two reference hospitals, the San Cecilio Clinical Hospital for Eastern Andalusia, and Virgen del Rocio University Hospital for Western Andalusia (Figure 1A and Table 1), where the viral RNA is extracted and subjected to WGS (Figure 1B). Raw sequencing data is transferred to the <a href="https://www.clinbioinfosspa.es/">Bioinformatics Area</a> (Figure 1C), processed, and indexed along with the meta-data automatically provided by the COVID registry (Figure 1D), previously collected from the hospitals (Figure 1E). The resulting findings (strain, VOIs and VOCs) are reported back to the sampling hospitals, for supporting clinical decision (Figure 1G), and relevant epidemiological information is reported to the COVID registry (Figure 1F).<br /></p>
        ,
        "about_text_Table1": 
            <p style={{ textAlign: 'center', fontSize: 16 }}><b>Table 1.</b> <i>Selection of samples per week for sequencing at different Andalusian provinces in primary care (PC) or hospitalized (H) patients</i></p>
            ,
        "about_text_2": 
            <p className="text-justify" style={{ fontSize: 18 }}>Unlike in many other initiatives that consider exclusively the primary use of genomic data, here especial attention has been paid to the secondary use of genomic data for clinical research. Andalusia has a unique resource, the Population Health Database (<a href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/profesionales/sistemas-de-informacion/base-poblacional-de-salud">BPS, after Base Poblacional de Salud</a>). All the clinical information on all the patients of the Andalusian Health System is stored there (Figure 1H).<br/><br/>The Bioinformatics Area submits all the viral genomes to BPS (Figure 1I), where they are permanently stored, linked to the clinical information of the patients. BPS has a procedure available to request data for secondary use in <a href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/sites/default/files/sincfiles/wsas-media-mediafile_sasdocumento/2019/BPS_Investigaci%C3%B3n.pdf">clinical research</a>. Finally, the Bioinformatic Area is responsible for the submission of the viral genomic sequences to ENA to make them available to the scientific community (Figure 1J).</p> 
        ,
        "about_text_fig1": 
            <p style={{ textAlign: 'center', fontSize: 16 }}><b>Figure 1.</b> <i>Clinical circuit for WGS of SARS-CoV-2 for epidemiologic surveillance and medical decision support</i></p>
            ,
        "clinicalInterest_text_title":
            <h4 style={{ fontSize: 20, marginBottom:30 }}>Potential Clinical Interest</h4>
            ,
        "clinicalInterest_text_charts": 
            <p style={{ textAlign: "center", fontSize: 16 }}>
            <b>Charts.</b>{" "}<i>These charts refer to the samples sequenced as part of this study, which are selected according to their potential scientific interest. As such, the proportions do not reflect the relative natural prevalence in the general population.</i></p>
            ,
            "results_text_title": 
            <h4 style={{ fontSize: 20 }}>Results</h4>
            ,
            "results_text_1":
            <p className="text-justify" style={{ fontSize: 18 }}>This circuit is operating since middle February and currently, the pace of sequencing is of 300-400 per week, depending on the final results of quality control processes both in the RNA extraction and in the sequencing processes.</p>
            ,
            "results_text_2":
            <p className="text-justify" style={{ fontSize: 18 }}>The Bioinformatics Area reports back to the San Cecilio and the Virgen del Rocio reference hospitals the lineages of the virus sequenced, if these are VOIs or VOCs, as well as any new mutations of concern.<br /><br />An advanced tool developed by the area, which is freely available in the{" "}<a href="https://github.com/babelomics/impuSARS">impuSARS github repository</a>, is used to recover low quality sequences and we can impute lineage with accuracy for more than the 95% of the samples sequenced. See more details in the <a href="https://www.biorxiv.org/content/10.1101/2021.04.13.439668v1">preprint</a>.<br /><br /></p>
            ,

            "results_text_3":
            <p className = "text-justify text-center" style = {{fontSize: 18}}>
            <a href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage">A local instance of NextStrain</a>{" "}represent all the samples currently sequenced:<br /></p> 
            ,


            "news_title":
            <h4 style = {{fontSize: 20}}>News</h4> 
            ,
            "news-heading":
            <h4 className="news-heading">
            Andalusia leads the genomic sequencing of the coronavirus at the national level
            </h4>
            , 
"news-text":
            <p>Informative video about the work carried out in the Andalusian Public Health System to sequence the coronavirus genome and better understand the disease. Made by 7TV in collaboration with the Ministry of Health and Families, the Progreso y Salud Foundation and Novartis.<br />
                              <br />
                              <br />
                              </p>
        ,
        "contact_title":
            <h4 style = {{fontSize: 20}}>Contact</h4> 
            ,


        }, 
    "es": {
        "whatwedo_title":
            <h4 style = {{textAlign: 'justify'}}> Circuito de secuenciaci??n del genoma completo del SARS-CoV-2 en Andaluc??a </h4> 
            ,
        "whatwedo_txt": 
            <p style = {{textAlign: 'justify', fontSize: 18}}>Como respuesta a una recomendaci??n para la integraci??n de la secuenciaci??n del genoma en la vigilancia del SARS-CoV-2 publicada por la Comisi??n de Salud P??blica del Consejo Interterritorial en <a href = "https://www.mscbs.gob.es/profesionales/saludPublica/ccayes/alertasActual/nCov/documentos/Integracion_de_la_secuenciacion_genomica-en_la_vigilancia_del_SARS-CoV-2.pdf"> 22 de enero de 2021 </a>, se realiz?? una instrucci??n conjunta, 1/2020 desde la Secretar??a General de Investigaci??n, Desarrollo e Innovaci??n en Salud y la Direcci??n de Gesti??n del Servicio Andaluz de Salud, para la Gesti??n de muestras en el abordaje de Medicina Personalizada en COVID-19. <br/> <br /> Un proyecto previo financiado por el Sistema Andaluz de Salud (<a href="https://clinbioinfosspa.es/projects/covseq/indexEng.html"> Secuenciaci??n del genoma del virus SARS-CoV-2 para el seguimiento y manejo de la epidemia de Covid-19 en Andaluc??a y la r??pida generaci??n de pron??sticos y respuestas de biomarcadores de tratamiento </a>) que inclu??a los 16 principales hospitales terciarios de Andaluc??a, junto con tres centros de investigaci??n con secuenciaci??n del genoma (IBIS, Genyo y CABIMER) y el ??rea de Bioinform??tica de la Fundaci??n Progreso y Salud, sentaron las bases para una r??pida implementaci??n de una secuenciaci??n sistem??tica del virus a escala regional. Este proyecto constituye un ejemplo notable de investigaci??n traslacional. </p>
            ,
        "about_text_title":
            <h4 style={{ fontSize: 20 }}>Circuito de secuenciaci??n del genoma completo del SARS-CoV-2</h4>
            ,
        "about_text_1": 
            <p style = {{textAlign: 'justify', fontSize: 18}}>El funcionamiento del circuito es el siguiente: Las muestras nasofar??ngeas del SARS-CoV-2 (utilizadas para las pruebas de PCR) se recogen en los principales hospitales terciarios de de las ocho provincias andaluzas y remitido a los dos hospitales de referencia, el Hospital Cl??nico San Cecilio de Andaluc??a Oriental y el Hospital Universitario Virgen del Roc??o de Andaluc??a Occidental (Figura 1A y Tabla 1), donde se extrae el ARN viral y se somete a WGS (Figura 1A y Tabla 1). 1B). Los datos de secuenciaci??n sin procesar se transfieren al <a href="https://www.clinbioinfosspa.es/"> ??rea de Bioinform??tica </a> (Figura 1C), se procesan e indexan junto con los metadatos proporcionados autom??ticamente por el registro del COVID (Figura 1D), recogido previamente de los hospitales (Figura 1E). Los hallazgos resultantes (cepa, VOI y VOC) se informan a los hospitales de muestreo, para respaldar la decisi??n cl??nica (Figura 1G), y la informaci??n epidemiol??gica relevante se reporta al registro COVID (Figura 1F). <br/> </p>
            ,

        "about_text_Table1": 
            <p style = {{textAlign: 'center', fontSize: 16}}><b>Tabla 1. </b> <i> Selecci??n de muestras semanales para secuenciaci??n en diferentes provincias andaluzas en atenci??n primaria (AP) u hospitalizadas (H) pacientes </i> </p> 
            ,
        "about_text_2": 
            <p className = "text-justify" style = {{fontSize: 18}}>A diferencia de muchas otras iniciativas que consideran exclusivamente el uso primario de datos gen??micos, aqu?? se ha prestado especial atenci??n al uso secundario de datos gen??micos para la investigaci??n cl??nica . Andaluc??a cuenta con un recurso ??nico, la <a href="https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/profesionales/sistemas-de-informacion/base-poblacional-de-salud"> Base Poblacional de Salud (BPS)</a>. All?? se almacena toda la informaci??n cl??nica de todos los pacientes del Sistema de Salud de Andaluc??a (Figura 1H). <br/> <br/> El ??rea de Bioinform??tica env??a todos los genomas virales al BPS (Figura 1I), donde se almacenan de forma permanente, vinculado a la informaci??n cl??nica de los pacientes. BPS dispone de un procedimiento para solicitar datos para uso secundario en <a href = "https://www.sspa.juntadeandalucia.es/servicioandaluzdesalud/sites/default/files/sincfiles/wsas-media-mediafile_sasdocumento/2019/BPS_Investigaci%C3%B3n.pdf "> investigaci??n cl??nica </a>. Finalmente, el ??rea Bioinform??tica se encarga del env??o de las secuencias gen??micas virales a ENA para ponerlas a disposici??n de la comunidad cient??fica (Figura 1J). </p> 
            ,
        "about_text_fig1": 
            <p style = {{textAlign: 'center', fontSize: 16}}><b>Figura 1. </b> <i> Circuito cl??nico para WGS de SARS-CoV-2 para vigilancia epidemiol??gica y apoyo a decisiones m??dicas </ i> </p> 
            ,
        "clinicalInterest_text_title":
            <h4 style = {{fontSize: 20, marginBottom:30 }}>Inter??s cl??nico potencial</h4> 
            ,
        "clinicalInterest_text_charts": 
            <p style = {{textAlign: "center", fontSize: 16}}><b>Gr??ficos. </b> {""}<i>Estos gr??ficos se refieren a las muestras secuenciadas como parte de este estudio, que se seleccionan de acuerdo con su potencial inter??s cient??fico. Como tal, las proporciones no reflejan la prevalencia natural relativa en la poblaci??n general.</i></p> 
            ,
            "results_text_title": 
            <h4 style={{ fontSize: 20 }}>Resultados</h4>
            ,
            "results_text_1":
            <p className = "text-justify" style = {{fontSize: 18}}>Este circuito est?? en funcionamiento desde mediados de febrero y actualmente, el ritmo de secuenciaci??n es de 300-400 por semana, dependiendo de los resultados finales de los procesos de control de calidad tanto en la extracci??n de ARN como en la secuenciaci??n Procesos.</p> 
            ,
            "results_text_2":
            <p className = "text-justify" style = {{fontSize: 18}}>El ??rea de Bioinform??tica informa a los hospitales de referencia San Cecilio y Virgen del Roc??o. linajes del virus secuenciado, si se trata de VOI o VOC, as?? como cualquier nueva mutaci??n de inter??s. <br /><br />Una herramienta avanzada desarrollada por el ??rea, que est?? disponible gratuitamente en el {""}<a href="https://github.com/babelomics/impuSARS"> repositorio de github impuSARS </a>, se utiliza para recuperar baja calidad secuencias y podemos imputar el linaje con precisi??n para m??s del 95% de las muestras secuenciadas. Ver m??s detalles en la <a href="https://www.biorxiv.org/content/10.1101/2021.04.13.439668v1"> preimpresi??n </a>.<br /><br />
            </p> 
            ,
            "results_text_3":
            <p className = "text-justify text-center" style = {{fontSize: 18}}>
            <a href="http://nextstrain.clinbioinfosspa.es/SARS-COV-2-all?c=lineage"> Una instancia local de NextStrain </a> {""}representan todas las muestras secuenciadas actualmente:<br /></p> 
            ,
            "news_title":
            <h4 style = {{fontSize: 20}}>Prensa </h4> 
            ,
           "news-heading":
            <h4 className="news-heading">
            Andaluc??a lidera la secuenciaci??n gen??mica del coronavirus a nivel nacional
            </h4>
            , 
            "news-text":
            <p>Video divulgativo sobre el trabajo que se realiza en el Sistema Sanitario P??blico de Andaluc??a para secuenciar el genoma del coronavirus y conocer mejor la enfermedad.
            Realizado por 7TV en colaboraci??n con la Consejer??a de Salud y Familias, la Fundaci??n Progreso y Salud y Novartis.<br /><br /><br /></p>
       ,    "contact_title":
            <h4 style = {{fontSize: 20}}>Contacto </h4> 
            ,
    
    }
};

interface IProps {
    textKey: string;
}

function TranslatedText(props: IProps) {
    const { textKey } = props;
    const [language, setLanguage] = useRecoilState(selectedLanguage);
    const languageTranslations = translations[language];
    return languageTranslations[textKey];
}

export default TranslatedText;
