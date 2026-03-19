// ─── INTRO OVERLAY ───
window.addEventListener('load', () => {
  setTimeout(() => {
    document.getElementById('overlay').classList.add('hidden');
  }, 2000);
});

// ─── NAV BURGER (MOBILE) ───
const burger = document.getElementById('nav-burger');
const mobileMenu = document.getElementById('nav-mobile-menu');

burger.addEventListener('click', () => {
  burger.classList.toggle('open');
  mobileMenu.classList.toggle('open');
});

// Close mobile menu when a link is clicked
mobileMenu.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    burger.classList.remove('open');
    mobileMenu.classList.remove('open');
  });
});

// ─── KAPITEL DATA ───
const kapitelData = {
  rente: {
    number: '01',
    label: 'Kapitel',
    title: 'Rente & Altersvorsorge',
    sections: [
      {
        label: 'Probleme',
        heading: 'Zwei zentrale Herausforderungen',
        content: `
          <div class="kap-loesung">
            <div class="kap-loesung-header">
              <span class="kap-loesung-num">Problem 01</span>
              <span class="kap-loesung-title">Demografischer Wandel</span>
            </div>
            <div class="kap-loesung-body">
              <ul class="kap-list">
                <li>Geburtenrate niedrig — zu wenige Junge für zu viele Ältere</li>
                <li>Steigende Lebenserwartung erhöht die Rentendauer</li>
                <li>Weniger junge Menschen finanzieren das System</li>
                <li>Der Generationenvertrag gerät zunehmend unter Druck</li>
              </ul>
              <div class="kap-zukunft"><strong>Zukunft:</strong> Ohne eine grundlegende Systemänderung wird dieses Problem mit jeder weiteren Generation größer.</div>
            </div>
          </div>
          <div class="kap-loesung">
            <div class="kap-loesung-header">
              <span class="kap-loesung-num">Problem 02</span>
              <span class="kap-loesung-title">Altersarmut</span>
            </div>
            <div class="kap-loesung-body">
              <ul class="kap-list">
                <li>Niedrige Löhne über Jahrzehnte führen zu geringen Rentenansprüchen</li>
                <li>Lange Phasen von Arbeitslosigkeit unterbrechen die Einzahlungen</li>
                <li>Viele Menschen arbeiten jahrelang in Teilzeit</li>
                <li>Selbstständige zahlen oft nicht in die gesetzliche Rentenversicherung ein</li>
                <li>Steigende Lebenshaltungskosten machen auch kleine Renten wertlos</li>
              </ul>
              <div class="kap-zukunft"><strong>Zukunft:</strong> Ohne neue Gesetze und strukturelle Reformen wird Altersarmut weiter zunehmen — besonders bei Frauen.</div>
            </div>
          </div>
        `
      },
      {
        label: 'Datenanalyse',
        heading: 'Zahlen & Fakten',
        content: `
          <div class="kap-data-grid">
            <div class="kap-data-item">
              <div class="kap-data-num">67<span>J.</span></div>
              <div class="kap-data-label">Gesetzliches Renteneintrittsalter</div>
            </div>
            <div class="kap-data-item">
              <div class="kap-data-num">1.100–<br>1.500<span>€</span></div>
              <div class="kap-data-label">Durchschnittliche gesetzliche Rente (je nach Beruf)</div>
            </div>
            <div class="kap-data-item">
              <div class="kap-data-num">↑<span></span></div>
              <div class="kap-data-label">Durchschnittsalter der Bevölkerung steigt kontinuierlich</div>
            </div>
            <div class="kap-data-item">
              <div class="kap-data-num">♀<span></span></div>
              <div class="kap-data-label">Frauen häufiger betroffen — durch Teilzeit & Kinderpausen</div>
            </div>
          </div>
          <div class="kap-highlight">Immer <strong>weniger Arbeitnehmer</strong> finanzieren immer <strong>mehr Rentner</strong>. Das Verhältnis verschlechtert sich jedes Jahr weiter.</div>
        `
      },
      {
        label: 'Lösungsansätze',
        heading: 'Vier Wege aus der Krise',
        content: `
          <div class="kap-loesung">
            <div class="kap-loesung-header">
              <span class="kap-loesung-num">Lösung 01</span>
              <span class="kap-loesung-title">Stabilisierung der Rentenkasse</span>
            </div>
            <div class="kap-loesung-body">
              <ul class="kap-list">
                <li>Mehr Menschen sollen einzahlen — auch Selbstständige und Beamte</li>
                <li>Gezielte Anwerbung von Fachkräften aus dem Ausland</li>
                <li>Staatliche Zuschüsse zur Rentenkasse erhöhen</li>
              </ul>
              <p class="kap-text" style="margin-bottom:0; font-size:0.82rem; color:var(--text-muted);">Zeitrahmen: mittelfristig (5–10 Jahre)</p>
            </div>
          </div>
          <div class="kap-loesung">
            <div class="kap-loesung-header">
              <span class="kap-loesung-num">Lösung 02</span>
              <span class="kap-loesung-title">Garantierte Mindestrente</span>
            </div>
            <div class="kap-loesung-body">
              <ul class="kap-list">
                <li>Einführung einer Mindestrente oberhalb der Armutsgrenze</li>
                <li>Staatliche Zuschüsse für Menschen mit besonders geringer Rente</li>
              </ul>
            </div>
          </div>
          <div class="kap-loesung">
            <div class="kap-loesung-header">
              <span class="kap-loesung-num">Lösung 03</span>
              <span class="kap-loesung-title">Flexible Renteneintrittsmodelle</span>
            </div>
            <div class="kap-loesung-body">
              <ul class="kap-list">
                <li>Freiwillig länger arbeiten → mehr Rente, mehr Lebensstandard</li>
                <li>Früherer Renteneintritt möglich — mit kalkulierbaren Abschlägen</li>
              </ul>
            </div>
          </div>
          <div class="kap-loesung">
            <div class="kap-loesung-header">
              <span class="kap-loesung-num">Lösung 04</span>
              <span class="kap-loesung-title">Private Altersvorsorge stärken</span>
            </div>
            <div class="kap-loesung-body">
              <ul class="kap-list">
                <li>Staatliche Förderung privater Rente erhöhen</li>
                <li>Finanzbildung als Pflichtfach in Schulen verankern</li>
              </ul>
            </div>
          </div>
          <div class="kap-costs">
            <div class="kap-costs-title">Geschätzte Kosten</div>
            <div class="kap-cost-item">
              <span class="kap-cost-label">Fachkräfte aus dem Ausland anwerben (Integration, Ausbildung, Verwaltung)</span>
              <span class="kap-cost-value">5–10 Mrd. €/Jahr</span>
            </div>
            <div class="kap-cost-item">
              <span class="kap-cost-label">Erhöhung staatlicher Zuschüsse zur Rentenkasse (aktuell: ~120 Mrd. €)</span>
              <span class="kap-cost-value">+10–30 Mrd. €/Jahr</span>
            </div>
            <div class="kap-cost-item">
              <span class="kap-cost-label">Garantierte Mindestrente (je nach Ausgestaltung)</span>
              <span class="kap-cost-value">20–40 Mrd. €/Jahr</span>
            </div>
          </div>
        `
      }
    ]
  },

  umwelt: {
    number: '02',
    label: 'Kapitel',
    title: 'Umweltschutz & Klimapolitik',
    sections: [
      {
        label: 'Probleme',
        heading: 'Drei Hauptfelder des Handelns',
        content: `
          <ul class="kap-list">
            <li>Städtebau und Versiegelung natürlicher Flächen</li>
            <li>Abholzung — Verlust von Lebensräumen und CO₂-Speichern</li>
            <li>Müllentsorgung und Umweltverschmutzung</li>
          </ul>
        `
      },
      {
        label: 'Ursachen & Folgen',
        heading: 'Was passiert, wenn wir nichts tun?',
        content: `
          <div class="kap-loesung">
            <div class="kap-loesung-header">
              <span class="kap-loesung-num">Bereich 01</span>
              <span class="kap-loesung-title">Abholzung & Städtebau</span>
            </div>
            <div class="kap-loesung-body">
              <ul class="kap-list">
                <li>Zerstörung natürlicher Lebensräume — weniger Platz für Tier und Pflanze</li>
                <li>Überschwemmungsgefahr steigt: versiegelter Boden kann Wasser nicht aufnehmen</li>
                <li>Verlust von CO₂-Speichern erhöht den Klimadruck weiter</li>
              </ul>
            </div>
          </div>
          <div class="kap-loesung">
            <div class="kap-loesung-header">
              <span class="kap-loesung-num">Bereich 02</span>
              <span class="kap-loesung-title">Müllentsorgung & Verschmutzung</span>
            </div>
            <div class="kap-loesung-body">
              <ul class="kap-list">
                <li>Mikroplastik gelangt in Wasserwege und Nahrungsmittelketten</li>
                <li>Gefahr für Tiere durch Plastik in Verdauungssystemen</li>
                <li>Übervolle Mülldeponien — Kapazitäten werden überschritten</li>
                <li>Chemische Dünger auf Feldern verseuchen das Grundwasser</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        label: 'Datenanalyse',
        heading: 'Zahlen, die zählen',
        content: `
          <div class="kap-data-grid">
            <div class="kap-data-item">
              <div class="kap-data-num">456<span>kg</span></div>
              <div class="kap-data-label">Haushaltsmüll pro Person & Jahr in Deutschland</div>
            </div>
            <div class="kap-data-item">
              <div class="kap-data-num">240<span>T</span></div>
              <div class="kap-data-label">Beschäftigte in der deutschen Entsorgungswirtschaft</div>
            </div>
            <div class="kap-data-item">
              <div class="kap-data-num">10–15<span>%</span></div>
              <div class="kap-data-label">Globale Treibhausgas-Reduktion durch effizientes Recycling möglich</div>
            </div>
            <div class="kap-data-item">
              <div class="kap-data-num">250<span>kt</span></div>
              <div class="kap-data-label">CO₂ könnte Deutschland jährlich durch bessere Mülltrennung einsparen</div>
            </div>
          </div>
          <div class="kap-highlight"><strong>Mülltrennung spart Energie</strong> und ist einer der einfachsten Hebel für Klimaschutz auf individueller Ebene. Effizientes Recycling zahlt sich volkswirtschaftlich und ökologisch aus. (Quelle: Umweltbundesamt)</div>
          <p class="kap-text">Die Mülltrennung von 2024/25 auf 2026/27 verbessert die CO₂-Bilanz messbar — wenn die richtigen gesetzlichen Rahmenbedingungen geschaffen werden.</p>
        `
      },
      {
        label: 'Unsere Position',
        heading: 'Klimaschutz als wirtschaftliche Chance',
        content: `
          <p class="kap-text">Klimaziele konsequent erreichen — ohne den Wirtschaftsstandort Deutschland zu gefährden. Wir sehen den grünen Wandel nicht als Bürde, sondern als Chance für Innovation, Beschäftigung und Wohlstand.</p>
          <ul class="kap-list">
            <li>Strengere Mülltrennung mit Anreizen statt Strafen</li>
            <li>Renaturierung versiegelter Flächen in urbanen Gebieten</li>
            <li>Förderung nachhaltiger Landwirtschaft und Reduktion chemischer Pestizide</li>
            <li>Plastiksteuer und Förderung von Mehrwegsystemen</li>
            <li>Aufforstungsprogramme verbunden mit regionaler Wirtschaftsförderung</li>
          </ul>
          <div class="kap-zukunft"><strong>Vision:</strong> Ein Deutschland, das Klimaschutzziele nicht trotz, sondern durch wirtschaftlichen Fortschritt erreicht.</div>
        `
      }
    ]
  },

  fachkraefte: {
    number: '03',
    label: 'Kapitel',
    title: 'Fachkräftemangel & Bildung',
    sections: [
      {
        label: 'Probleme',
        heading: 'Zwei zentrale Herausforderungen',
        content: `
          <div class="kap-loesung">
            <div class="kap-loesung-header">
              <span class="kap-loesung-num">Problem 01</span>
              <span class="kap-loesung-title">Fehlende Versorgung für die Gesellschaft</span>
            </div>
            <div class="kap-loesung-body">
              <ul class="kap-list">
                <li>Längere Wartezeiten auf Termine und Dienstleistungen in vielen Branchen</li>
                <li>Keine ausreichende Terminvergabe — besonders im Gesundheits- und Pflegebereich spürbar</li>
              </ul>
              <div class="kap-zukunft"><strong>Folge:</strong> Die Bevölkerung leidet direkt unter dem Fachkräftemangel — nicht nur wirtschaftlich, sondern im Alltag.</div>
            </div>
          </div>
          <div class="kap-loesung">
            <div class="kap-loesung-header">
              <span class="kap-loesung-num">Problem 02</span>
              <span class="kap-loesung-title">Erhöhter Arbeitsdruck für Fachkräfte</span>
            </div>
            <div class="kap-loesung-body">
              <ul class="kap-list">
                <li>Verbleibende Fachkräfte müssen Aufgaben ausgeschiedener Kollegen auffangen</li>
                <li>Steigender Druck führt zu Burnout, Krankheitsausfällen und weiteren Kündigungen</li>
                <li>Ein Teufelskreis: weniger Personal → mehr Druck → noch weniger Personal</li>
              </ul>
              <div class="kap-zukunft"><strong>Folge:</strong> Ohne Gegenmaßnahmen verschärft sich die Situation selbstverstärkend — jeder Ausfall erhöht den Druck auf die verbleibenden Kräfte.</div>
            </div>
          </div>
        `
      },
      {
        label: 'Ursachenanalyse',
        heading: 'Warum fehlen uns die Fachkräfte?',
        content: `
          <div class="kap-loesung">
            <div class="kap-loesung-header">
              <span class="kap-loesung-num">Ursachen → Problem 01</span>
              <span class="kap-loesung-title">Fehlende Versorgung</span>
            </div>
            <div class="kap-loesung-body">
              <div class="kap-highlight"><strong>Demografischer Wandel</strong></div>
              <ul class="kap-list">
                <li>Weniger junge Nachwuchskräfte treten ins Berufsleben ein</li>
                <li>Gleichzeitig gehen immer mehr erfahrene Fachkräfte in Rente</li>
                <li>Das Verhältnis von Ausscheidenden zu Neueinsteigenden kippt</li>
              </ul>
              <div class="kap-highlight" style="margin-top:1rem;"><strong>Fehlende Digitalisierung</strong></div>
              <ul class="kap-list">
                <li>Keine ausreichende Anzahl an Fachkräften für das digitale Fortschreiten</li>
                <li>Deutschland hinkt bei der Digitalisierung öffentlicher und privater Strukturen hinterher</li>
                <li>Bestehende Prozesse könnten durch Digitalisierung effizienter gestaltet werden — doch das Wissen fehlt</li>
              </ul>
              <div class="kap-highlight" style="margin-top:1rem;"><strong>Akademisierung</strong></div>
              <ul class="kap-list">
                <li>Immer weniger Jugendliche entscheiden sich für eine Ausbildung</li>
                <li>Ein Studium wird gesellschaftlich höher bewertet — Ausbildungsberufe leiden darunter</li>
                <li>Handwerk, Pflege und technische Berufe bleiben chronisch unterbesetzt</li>
              </ul>
            </div>
          </div>
          <div class="kap-loesung">
            <div class="kap-loesung-header">
              <span class="kap-loesung-num">Ursachen → Problem 02</span>
              <span class="kap-loesung-title">Erhöhter Arbeitsdruck</span>
            </div>
            <div class="kap-loesung-body">
              <div class="kap-highlight"><strong>Hohe Prozesskomplexität & Tempo</strong></div>
              <ul class="kap-list">
                <li>Steigende Anforderungen in nahezu allen Berufsfeldern</li>
                <li>Multitasking und häufige Unterbrechungen erhöhen den mentalen Druck erheblich</li>
                <li>Beschleunigung der Arbeitsprozesse ohne entsprechende Personalaufstockung</li>
              </ul>
              <div class="kap-highlight" style="margin-top:1rem;"><strong>Organisatorische Faktoren</strong></div>
              <ul class="kap-list">
                <li>Unklare Zuständigkeiten und mangelnde Abstimmung zwischen Abteilungen</li>
                <li>Kostensenkungen bei ohnehin dünner Personaldecke</li>
                <li>Strukturelle Ineffizienzen, die den Einzelnen überlasten</li>
              </ul>
              <div class="kap-highlight" style="margin-top:1rem;"><strong>Psychische Belastungen</strong></div>
              <ul class="kap-list">
                <li>Laufende Anpassung an neue Technologien erzeugt berufliche Unsicherheit</li>
                <li>Angst vor Bedeutungsverlust oder Jobverlust durch Automatisierung</li>
                <li>Fehlende Unterstützung bei Weiterbildung und Umstrukturierung</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        label: 'Unsere Position',
        heading: 'Deutschland braucht Köpfe — und faire Bedingungen',
        content: `
          <p class="kap-text">Wir investieren in Ausbildung, schaffen gezielte Zuwanderungsanreize und stärken die duale Bildung. Gleichzeitig schützen wir die, die schon da sind — vor Überlastung und struktureller Ungerechtigkeit.</p>
          <ul class="kap-list">
            <li>Ausbildungsberufe gesellschaftlich aufwerten — finanziell und in der Wahrnehmung</li>
            <li>Gezielte Zuwanderung von Fachkräften mit klaren Integrationsprogrammen</li>
            <li>Digitalisierung als Entlastung, nicht als Bedrohung — mit begleitenden Schulungsangeboten</li>
            <li>Verbindliche Personalmindeststandards in systemrelevanten Berufen</li>
            <li>Psychische Gesundheit am Arbeitsplatz als gesetzlich verankertes Thema</li>
          </ul>
          <div class="kap-zukunft"><strong>Vision:</strong> Ein Arbeitsmarkt, der Fachkräfte anzieht, hält und wertschätzt — damit Gesellschaft und Wirtschaft funktionieren.</div>
        `
      }
    ]
  },

  sicherheit: {
    number: '04',
    label: 'Kapitel',
    title: 'Sicherheit & Verteidigung',
    sections: [
      {
        label: 'Probleme',
        heading: 'Zwei strukturelle Konfliktfelder',
        content: `
          <div class="kap-loesung">
            <div class="kap-loesung-header">
              <span class="kap-loesung-num">Problem 01</span>
              <span class="kap-loesung-title">Wehrpflicht & Gleichberechtigung</span>
            </div>
            <div class="kap-loesung-body">
              <ul class="kap-list">
                <li>Gleichberechtigung zwischen Frauen und Männern ist im aktuellen System nicht gegeben</li>
                <li>Zu wenige Freiwillige — die Bundeswehr kämpft mit einem massiven Personalmangel</li>
                <li>Eine reine Männerwehrpflicht widerspricht Artikel 3 des Grundgesetzes</li>
              </ul>
            </div>
          </div>
          <div class="kap-loesung">
            <div class="kap-loesung-header">
              <span class="kap-loesung-num">Problem 02</span>
              <span class="kap-loesung-title">Finanzierung & Ausrüstung</span>
            </div>
            <div class="kap-loesung-body">
              <ul class="kap-list">
                <li>Veraltete Ausrüstung in vielen Einheiten der Bundeswehr</li>
                <li>Finanzierung von modernem Verteidigungsgerät ungeklärt</li>
                <li>NATO-Ziel von 2 % des BIP für Verteidigung bisher nicht dauerhaft erreicht</li>
              </ul>
            </div>
          </div>
        `
      },
      {
        label: 'Ursachenanalyse',
        heading: 'Warum sind wir hier?',
        content: `
          <ul class="kap-list">
            <li>Wehrpflicht war historisch nur für Männer vorgesehen — ein Überbleibsel alter Rollenbilder</li>
            <li>Traditionelles Bild: Frau als "schwaches Geschlecht", zuständig für Familie — steht im Widerspruch zu modernem Gleichberechtigungsverständnis</li>
            <li>Artikel 3 GG garantiert Gleichberechtigung — reine Männerwehrpflicht schafft dadurch einen Verfassungskonflikt</li>
            <li>Jahrzehntelange Unterinvestition in die Bundeswehr nach Ende des Kalten Krieges</li>
          </ul>
          <div class="kap-highlight">Artikel 3 des Grundgesetzes garantiert die <strong>Gleichberechtigung von Frauen und Männern</strong> — eine reine Männerwehrpflicht steht damit in direktem Widerspruch und sorgt für politische wie rechtliche Diskussionen.</div>
        `
      },
      {
        label: 'Datenanalyse',
        heading: 'Die Lage in Zahlen',
        content: `
          <div class="kap-data-grid">
            <div class="kap-data-item">
              <div class="kap-data-num">19<span>T</span></div>
              <div class="kap-data-label">Offene Stellen bei der Bundeswehr</div>
            </div>
            <div class="kap-data-item">
              <div class="kap-data-num">60<span>%+</span></div>
              <div class="kap-data-label">Bevölkerung für Wiedereinführung der Wehrpflicht</div>
            </div>
            <div class="kap-data-item">
              <div class="kap-data-num">44<span>%</span></div>
              <div class="kap-data-label">Befürworten geschlechtsunabhängige Wehrpflicht</div>
            </div>
            <div class="kap-data-item">
              <div class="kap-data-num">18<span>%</span></div>
              <div class="kap-data-label">Unterstützen reine Männerwehrpflicht</div>
            </div>
          </div>
          <div class="kap-highlight">Die <strong>Ablehnung</strong> einer Wehrpflicht ist bei der jüngeren Zielgruppe am höchsten — ein zentrales gesellschaftliches Spannungsfeld.</div>
          <div class="kap-costs">
            <div class="kap-costs-title">Geschätzte Kosten</div>
            <div class="kap-cost-item">
              <span class="kap-cost-label">Wiedereinführung der Wehrpflicht (Gesamtschätzung)</span>
              <span class="kap-cost-value">~70 Mrd. €</span>
            </div>
          </div>
        `
      },
      {
        label: 'Unsere Position',
        heading: 'Sicherheit als Fundament',
        content: `
          <p class="kap-text">Ein sicheres Land ist kein Luxus — es ist die Voraussetzung für alles andere: Wirtschaft, Freiheit, Zusammenhalt. Wir setzen auf mehr Personal, bessere Ausrüstung und eine klare strategische Ausrichtung.</p>
          <ul class="kap-list">
            <li>Freiwilligendienst attraktiver gestalten — finanziell und beruflich</li>
            <li>Bei Einführung einer Dienstpflicht: geschlechtsunabhängig und verfassungskonform</li>
            <li>Investitionen in moderne Ausrüstung und digitale Verteidigungskapazitäten</li>
            <li>NATO-Ziele dauerhaft und verlässlich erfüllen</li>
            <li>Innere Sicherheit stärken: mehr Polizeipersonal, bessere Ausrüstung, klare Strategie</li>
          </ul>
          <div class="kap-zukunft"><strong>Unser Ziel:</strong> Eine Bundeswehr und Sicherheitsstruktur, die Deutschland im 21. Jahrhundert wirksam schützt — fair, modern und verfassungskonform.</div>
        `
      }
    ]
  }
};

// ─── KAPITEL PANEL ───
const panel = document.getElementById('kapitel-panel');
const panelTitle = document.getElementById('kapitel-title');
const panelEyebrow = document.getElementById('kapitel-eyebrow');
const panelBody = document.getElementById('kapitel-body');

function openKapitel(key) {
  const data = kapitelData[key];
  if (!data) return;

  panelEyebrow.textContent = `Kapitel ${data.number}`;
  panelTitle.textContent = data.title;

  let html = '';
  data.sections.forEach(sec => {
    html += `
      <div class="kap-section">
        <div class="kap-section-title">${sec.label}</div>
        <h3 class="kap-heading">${sec.heading}</h3>
        ${sec.content}
      </div>
    `;
  });
  panelBody.innerHTML = html;
  panelBody.scrollTop = 0;

  panel.classList.add('visible');
  document.body.style.overflow = 'hidden';
}

function closeKapitel() {
  panel.classList.remove('visible');
  document.body.style.overflow = '';
}

// Close on backdrop click
document.querySelector('.kapitel-backdrop').addEventListener('click', closeKapitel);

// Close on ESC
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeKapitel();
});

// ─── SCROLL ANIMATIONS ───
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), i * 80);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
