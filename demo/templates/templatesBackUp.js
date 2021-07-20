//This is just a backup for the html files in js format
function templatesBackUp() {
    templates = {
        nav_bar: `<header>
        <h3><center>CUHK SEEM</center></h3>
        <h3><center>Dysarthric Speech Recognition</center></h3>
        <h4><br></h4>
        <h4><center><a href="https://www.isca-speech.org/archive/Interspeech_2019/pdfs/8047.pdf"> The CUHK Dysarthric Speech Recognition Systems for English and Cantonese </center></a></h4>
        <h4><center><a href="https://www.isca-speech.org/archive/Interspeech_2019/pdfs/1536.pdf"> Exploiting Visual Features using Bayesian Gated Neural Networks for Disordered Speech Recognition  </center></a></h4>
    </header>


    
    
    <nav>
        <div>
            <a href="./M14B2M3.html">Demo 1</a>
        </div>
        <div>
            <a href="./F04B2M3.html">Demo 2</a>
        </div>
        <div>
            <a href="./M12B2M3.html">Demo 3</a>
        </div>
    </nav>`,
        main: `<div class="main">
        <div class="display_vid">
            <video class="vid subject" controls webkit-playsinline="true" playsinline="true"></video>
        </div>
        <div class="display_transcript">
            <h4>Transcript</h4>
            <p></p>
        </div>
        <div class="display_box">
            <div class="box cu">
                <h4>CUHK System</h4>
                <p></p>
            </div>
            <div class="box google">
                <h4>Google API</h4>
                <p></p>
            </div>
            <div class="box human">
                <h4>Human</h4>
                <p></p>
            </div>
        </div>
        <div class="display_text">
            <div class="left">
                <div class="left_transcript">
                    <div class="remarks">
                        <span>[?]</span>
                        <p class="hide">There are 255 words in total. Click on an underlined word to go to the
                            corresponding time in the video.</p>
                    </div>
                    <h5>Original transcript</h5>
                    <div class="accuracy transcript"></div>
                </div>
    
                <div class="left_cu">
                    <h5>CUHK System</h5>
                    <div class="accuracy cu"></div>
                </div>
    
                <div class="left_google">
                    <div class="remarks">
                        <span>[?]</span>
                        <p class="hide">The speech recognition results were obtained here:
                            https://cloud.google.com/speech-to-text/</p>
                    </div>
                    <h5>Google API</h5>
                    <div class="accuracy google"></div>
                </div>
    
                <div class="left_human">
                    <div class="remarks">
                        <span>[?]</span>
                        <p class="hide">Human recognitions were carried out by some other people who had not seen the word
                            list in advance. They were encouraged to recognize as many words as possible to the best of
                            their abilites.</p>
                    </div>
                    <h5>Human</h5>
                    <div class="accuracy human"></div>
                </div>
            </div>
            <div class="right">
            </div>
        </div>
    
    </div>`,
        detail_wave: `<div class="detail_wave">
        <h3>Wave form</h3>
        <video class="vid wave" webkit-playsinline="true" playsinline="true"></video>
    </div>`,
        detail: `<div class="detail">
        <p><center>Copyright 2021. All rights reserved. </center></p>
        <p><center>Department of Systems Engineering and Engineering Management</center></p>
        <p><center>The Chinese University of Hong Kong</center></p>
      </div>`,
        line: `<div class="line one">
        <div class="black_line"></div>
        <div class="black_line"></div>
    </div>
    
    <div class="line two">
        <div class="black_line"></div>
        <div class="black_line"></div>
    </div>
    
    <div class="line three">
        <div class="black_line"></div>
        <div class="black_line"></div>
    </div>`    
    };
    return [templates.nav_bar, templates.main, templates.detail_wave, templates.detail, templates.line];
}
