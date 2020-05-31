import React from 'react';
import '../../sass/main.scss';

const Faq = () => {
    return <div className="Rules">
               <h6>- Da li moram uplaćivati novac da bi igrao?</h6>
               <p>Ne. Igra je besplatna i uopšte nema payment sistem. Projekat je osmišljen kako bi pokazao ljudima da su slične igre u kladionicama - <span>namještene</span>. Algoritam je napisan tako da Bingo bude uvijek na dobitku. Bez obzira koliko igrač novaca uložio, Bingo će dati jedino kada skupi novca toliko da mu se isplati nešto i dati. Ukoliko poznajete nekoga ko troši velike količine novca u kladionicama igrajući ovu igru, pokažite mu ovu aplikaciju. Idite na <span>statitiku > bingo statistika > sljedeći dobitak - igre: </span> Tu se nalazi informacija koja pokazuje još koliko igara mora proći prije nego što igrač dobije partiju. Ako je <span>sljedeći dobitak - igre: 6 / 8</span> to znači da se moraju odigrati još dvije partije do dobitka. <span>bingo statistika > sakupljeni novac:</span> označava novac kojeg je Bingo sakupio u partijama. Ako je Bingo u tim partijama sakupio <span>$45</span>, dobitak će biti <span>30% od toga. Napomena: </span> igrač može napraviti dobitnu partiju jedino ako je njegov ulog do <span>$10.</span> Još jedan trik koje kladionice koriste.</p>
           </div>
}

export default Faq;