import React from 'react';
import '../../sass/main.scss';

const Rules = () => {
    return <div className="Rules">
              <h6>Pravila:</h6>  
              <p>Pravila su jako jednostavna. Igrač mora izabrati <span>6</span> različitih brojeva, od <span> 1 - 48 </span> . Primjer: <span> 1 17 22 35 44 48 </span> .</p>
              <p>Bubanj izbacuje <span>35 </span> brojeva od mogućih <span> 48 </span>. Ako se ti brojevi koje je igrač odigrao poklapaju sa brojevima koje je bubanj izbacio, to je <span>dobitak</span>. </p>
              <p>Igrač ulaže novca koliko on želi. Najmanji ulog je <span>$1</span> a najveći <span> $50 </span>.   </p>
              <p> Ukoliko igrač napravi dobitak, uloženi novac će se pomnožiti sa novcem gdje je stala zadnja loptica.</p>
              <h6>Primjer: </h6>
              <p>Naš ulog: <span> $10 </span></p>
              <p>Naši brojevi: <span>1 17 22 35 44 48</span> </p>
              <p>Ukoliko zadnji dobitni broj(ex. 48) padne na predzadnje polje (<span>2$</span>) u tom slučaju množimo <span>2 * 10 = 20</span>. Konačni dobitak je: <span>$20</span> </p>
              <p>Ukoliko zadnji dobitni broj padne na polje gdje se nalazi <span>"Luckie"</span> (srećkica obojena u zeleno), tada ukupni dobitak množimo sa 2(duplo)</p>
              <p>Trenutni dobitak: <span>20. 20 * 2 = 40</span></p>
            </div>
}

export default Rules;