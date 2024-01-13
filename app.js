const menu = document.querySelector('#mobile-menu')
const menuLinks = document.querySelector('.navbar__menu')

menu.addEventListener('click', function() {
    menu.classList.toggle('is-active');
    menuLinks.classList.toggle('active');
})

function vergleichen() {
    var textfeldWortWert = document.getElementById('textfeldWort').value.toLowerCase();
    var textfeldZahlWert = parseFloat(document.getElementById('textfeldZahl').value);
  
    var ergebnisElement = document.getElementById('ergebnis');
  
    var erlaubteWoerter = ['auto', 'fahrrad', 'zug', 'bus', 'laufen'];
  
    if (textfeldZahlWert >= 0 && textfeldZahlWert <= 3) {
      if (textfeldWortWert === 'laufen' || textfeldWortWert === 'fahrrad') {
        ergebnisElement.textContent = 'Prima, du bist sportlich und umweltbewusst.';
      } else if (textfeldWortWert === 'auto') {
        ergebnisElement.textContent = 'Das geht besser. Das Auto ist zwar zeitsparend, aber die CO2-Emissionen sind zu hoch. Ein Fahrrad würde sich besser eignen, da es bei einer solchen Distanz ebenfalls sehr viel Zeit spart.';
      } else if (textfeldWortWert === 'bus') {
        ergebnisElement.textContent = 'Nicht optimal. Das Laufen und Fahrradfahren sind umweltfreundlichere Optionen.';
      } else if (textfeldWortWert === 'zug') {
        ergebnisElement.textContent = 'Das geht viel besser. CO2-Emissionen und Zeitaufwand sind fatal für diese kurze Strecke.';
      } else {
        ergebnisElement.textContent = 'Das erste Feld enthält: ' + textfeldWortWert +
          '. Die eingegebene Zahl liegt zwischen 0 und 3 (einschließlich).';
      }
    } else if (textfeldZahlWert > 3 && textfeldZahlWert <= 5) {
      if (textfeldWortWert === 'laufen' || textfeldWortWert === 'fahrrad') {
        ergebnisElement.textContent = 'Prima, du bist sportlich und umweltbewusst.';
      } else if (textfeldWortWert === 'auto') { 
        ergebnisElement.textContent = 'Nicht optimal. Fahrrad und Bus sind bessere Optionen, da sie umweltfreundlicher sind.';
      } else if (textfeldWortWert === 'bus') {
        ergebnisElement.textContent = 'Beinahe perfekt. Der Bus ist zeitsparend, aber besser ist das Fahrrad.';
      } else if (textfeldWortWert === 'zug') {
        ergebnisElement.textContent = 'Das geht viel besser. CO2-Emissionen und Zeitaufwand sind fatal für diese kurze Strecke.';
      } else {
        ergebnisElement.textContent = 'Das erste Feld enthält: ' + textfeldWortWert +
          '. Die eingegebene Zahl liegt im Bereich zwischen 3 (exklusive) und 5 (einschließlich).';
      }
    } else if (textfeldZahlWert > 5) {
      if (textfeldWortWert === 'laufen' || textfeldWortWert === 'fahrrad') {
        ergebnisElement.textContent = 'Prima, du bist sportlich und umweltbewusst.';
      } else if (textfeldWortWert === 'auto') {
        ergebnisElement.textContent = 'Das Auto ist hier besonders zeiteffizient, aber im Sinne der Umwelt ist es besser Bus oder Zug zu fahren.';
      } else if (textfeldWortWert === 'bus') {
        ergebnisElement.textContent = 'Der Bus ist ideal für diese Distanz.';
      } else if (textfeldWortWert === 'zug') {
        ergebnisElement.textContent = 'Der Zug eignet sich sehr gut für diese Distanz.';
      } else {
        ergebnisElement.textContent = 'Das erste Feld enthält: ' + textfeldWortWert +
          '. Die eingegebene Zahl ist größer als 5.';
      }
    } else if (erlaubteWoerter.includes(textfeldWortWert)) {
      ergebnisElement.textContent = 'Das erste Feld enthält: ' + textfeldWortWert +
        '. Die eingegebene Zahl ist nicht im erlaubten Bereich.';
    } else {
      ergebnisElement.textContent = 'Bitte gib im ersten Feld eines der erlaubten Wörter ein und im zweiten Feld eine Zahl.';
    }
  }
  
  