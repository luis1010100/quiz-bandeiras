const flags = [
    { file: "af.jpg", name: "afeganistão" },
    { file: "ax.jpg", name: "ilhas aland" },
    { file: "al.jpg", name: "albânia" },
    { file: "dz.jpg", name: "argélia" },
    { file: "as.jpg", name: "samoa americana" },
    { file: "ad.jpg", name: "andorra" },
    { file: "ao.jpg", name: "angola" },
    { file: "ai.jpg", name: "anguilla" },
    { file: "aq.jpg", name: "antártida" },
    { file: "ag.jpg", name: "antígua e barbuda" },
    { file: "ar.jpg", name: "argentina" },
    { file: "am.jpg", name: "armênia" },
    { file: "aw.jpg", name: "aruba" },
    { file: "au.jpg", name: "austrália" },
    { file: "at.jpg", name: "áustria" },
    { file: "az.jpg", name: "azerbaijão" },
    { file: "bs.jpg", name: "bahamas" },
    { file: "bh.jpg", name: "bahrein" },
    { file: "bd.jpg", name: "bangladesh" },
    { file: "bb.jpg", name: "barbados" },
    { file: "by.jpg", name: "bielorrússia" },
    { file: "be.jpg", name: "bélgica" },
    { file: "bz.jpg", name: "belize" },
    { file: "bj.jpg", name: "benin" },
    { file: "bm.jpg", name: "bermudas" },
    { file: "bt.jpg", name: "butão" },
    { file: "bo.jpg", name: "bolívia" },
    { file: "bq.jpg", name: "bonaire, santo eustáquio e saba" },
    { file: "ba.jpg", name: "bósnia e herzegovina" },
    { file: "bw.jpg", name: "botsuana" },
    { file: "bv.jpg", name: "ilha bouvet" },
    { file: "br.jpg", name: "brasil" },
    { file: "io.jpg", name: "território britânico do oceano índico" },
    { file: "bn.jpg", name: "brunei" },
    { file: "bg.jpg", name: "bulgária" },
    { file: "bf.jpg", name: "burquina fasso" },
    { file: "bi.jpg", name: "burundi" },
    { file: "kh.jpg", name: "camboja" },
    { file: "cm.jpg", name: "camarões" },
    { file: "ca.jpg", name: "canadá" },
    { file: "cv.jpg", name: "cabo verde" },
    { file: "ky.jpg", name: "ilhas caimã" },
    { file: "cf.jpg", name: "república centro-africana" },
    { file: "td.jpg", name: "chade" },
    { file: "cl.jpg", name: "chile" },
    { file: "cn.jpg", name: "china" },
    { file: "cx.jpg", name: "ilha christmas" },
    { file: "cc.jpg", name: "ilhas cocos" },
    { file: "co.jpg", name: "colômbia" },
    { file: "km.jpg", name: "comores" },
    { file: "cg.jpg", name: "congo" },
    { file: "cd.jpg", name: "república democrática do congo" },
    { file: "ck.jpg", name: "ilhas cook" },
    { file: "cr.jpg", name: "costa rica" },
    { file: "ci.jpg", name: "costa do marfim" },
    { file: "hr.jpg", name: "croácia" },
    { file: "cu.jpg", name: "cuba" },
    { file: "cw.jpg", name: "curaçao" },
    { file: "cy.jpg", name: "chipre" },
    { file: "cz.jpg", name: "tchéquia" },
    { file: "dk.jpg", name: "dinamarca" },
    { file: "dj.jpg", name: "djibuti" },
    { file: "dm.jpg", name: "dominica" },
    { file: "do.jpg", name: "república dominicana" },
    { file: "ec.jpg", name: "equador" },
    { file: "eg.jpg", name: "egito" },
    { file: "sv.jpg", name: "el salvador" },
    { file: "gq.jpg", name: "guiné equatorial" },
    { file: "er.jpg", name: "eritreia" },
    { file: "ee.jpg", name: "estônia" },
    { file: "sz.jpg", name: "essuatíni" },
    { file: "et.jpg", name: "etiópia" },
    { file: "fk.jpg", name: "ilhas malvinas" },
    { file: "fo.jpg", name: "ilhas faroé" },
    { file: "fj.jpg", name: "fiji" },
    { file: "fi.jpg", name: "finlândia" },
    { file: "fr.jpg", name: "frança" },
    { file: "gf.jpg", name: "guiana francesa" },
    { file: "pf.jpg", name: "polinésia francesa" },
    { file: "tf.jpg", name: "terras austrais e antárticas francesas" },
    { file: "ga.jpg", name: "gabão" },
    { file: "gm.jpg", name: "gâmbia" },
    { file: "ge.jpg", name: "geórgia" },
    { file: "de.jpg", name: "alemanha" },
    { file: "gh.jpg", name: "gana" },
    { file: "gi.jpg", name: "gibraltar" },
    { file: "gr.jpg", name: "grécia" },
    { file: "gl.jpg", name: "groenlândia" },
    { file: "gd.jpg", name: "granada" },
    { file: "gp.jpg", name: "guadalupe" },
    { file: "gu.jpg", name: "guam" },
    { file: "gt.jpg", name: "guatemala" },
    { file: "gg.jpg", name: "guernsey" },
    { file: "gn.jpg", name: "guiné" },
    { file: "gw.jpg", name: "guiné-bissau" },
    { file: "gy.jpg", name: "guiana" },
    { file: "ht.jpg", name: "haiti" },
    { file: "hm.jpg", name: "ilhas heard e mcdonald" },
    { file: "va.jpg", name: "vaticano" },
    { file: "hn.jpg", name: "honduras" },
    { file: "hk.jpg", name: "hong kong" },
    { file: "hu.jpg", name: "hungria" },
    { file: "is.jpg", name: "islândia" },
    { file: "in.jpg", name: "índia" },
    { file: "id.jpg", name: "indonésia" },
    { file: "ir.jpg", name: "irã" },
    { file: "iq.jpg", name: "iraque" },
    { file: "ie.jpg", name: "irlanda" },
    { file: "im.jpg", name: "ilha de man" },
    { file: "il.jpg", name: "israel" },
    { file: "it.jpg", name: "itália" },
    { file: "jm.jpg", name: "jamaica" },
    { file: "jp.jpg", name: "japão" },
    { file: "je.jpg", name: "jersey" },
    { file: "jo.jpg", name: "jordânia" },
    { file: "kz.jpg", name: "cazaquistão" },
    { file: "ke.jpg", name: "quênia" },
    { file: "ki.jpg", name: "quiribati" },
    { file: "kp.jpg", name: "coreia do norte" },
    { file: "kr.jpg", name: "coreia do sul" },
    { file: "kw.jpg", name: "kuwait" },
    { file: "kg.jpg", name: "quirguistão" },
    { file: "la.jpg", name: "laos" },
    { file: "lv.jpg", name: "letonia" },
    { file: "lb.jpg", name: "líbano" },
    { file: "ls.jpg", name: "lesoto" },
    { file: "lr.jpg", name: "libéria" },
    { file: "ly.jpg", name: "líbia" },
    { file: "li.jpg", name: "liechtenstein" },
    { file: "lt.jpg", name: "lituânia" },
    { file: "lu.jpg", name: "luxemburgo" },
    { file: "mo.jpg", name: "macau" },
    { file: "mg.jpg", name: "madagáscar" },
    { file: "mw.jpg", name: "malawi" },
    { file: "my.jpg", name: "malásia" },
    { file: "mv.jpg", name: "maldivas" },
    { file: "ml.jpg", name: "mali" },
    { file: "mt.jpg", name: "malta" },
    { file: "mh.jpg", name: "ilhas marshall" },
    { file: "mq.jpg", name: "martinica" },
    { file: "mr.jpg", name: "mauritânia" },
    { file: "mu.jpg", name: "maurício" },
    { file: "yt.jpg", name: "mayotte" },
    { file: "mx.jpg", name: "méxico" },
    { file: "fm.jpg", name: "micronésia" },
    { file: "md.jpg", name: "moldávia" },
    { file: "mc.jpg", name: "mônaco" },
    { file: "mn.jpg", name: "mongólia" },
    { file: "me.jpg", name: "montenegro" },
    { file: "ms.jpg", name: "montserrat" },
    { file: "ma.jpg", name: "marrocos" },
    { file: "mz.jpg", name: "moçambique" },
    { file: "mm.jpg", name: "mianmar" },
    { file: "na.jpg", name: "namíbia" },
    { file: "nr.jpg", name: "nauru" },
    { file: "np.jpg", name: "nepal" },
    { file: "nl.jpg", name: "países baixos" },
    { file: "nc.jpg", name: "nova caledônia" },
    { file: "nz.jpg", name: "nova zelândia" },
    { file: "ni.jpg", name: "nicarágua" },
    { file: "ne.jpg", name: "níger" },
    { file: "ng.jpg", name: "nigéria" },
    { file: "nu.jpg", name: "niue" },
    { file: "nf.jpg", name: "ilha norfolk" },
    { file: "mk.jpg", name: "macedônia do norte" },
    { file: "mp.jpg", name: "ilhas marianas do norte" },
    { file: "no.jpg", name: "noruega" },
    { file: "om.jpg", name: "omã" },
    { file: "pk.jpg", name: "paquistão" },
    { file: "pw.jpg", name: "palau" },
    { file: "ps.jpg", name: "palestina" },
    { file: "pa.jpg", name: "panamá" },
    { file: "pg.jpg", name: "papua-nova guiné" },
    { file: "py.jpg", name: "paraguai" },
    { file: "pe.jpg", name: "peru" },
    { file: "ph.jpg", name: "filipinas" },
    { file: "pn.jpg", name: "ilhas pitcairn" },
    { file: "pl.jpg", name: "polônia" },
    { file: "pt.jpg", name: "portugal" },
    { file: "pr.jpg", name: "porto rico" },
    { file: "qa.jpg", name: "catar" },
    { file: "re.jpg", name: "reunião" },
    { file: "ro.jpg", name: "romênia" },
    { file: "ru.jpg", name: "rússia" },
    { file: "rw.jpg", name: "ruanda" },
    { file: "bl.jpg", name: "são bartolomeu" },
    { file: "sh.jpg", name: "santa helena" },
    { file: "kn.jpg", name: "são cristóvão e nevis" },
    { file: "lc.jpg", name: "santa lúcia" },
    { file: "mf.jpg", name: "são martinho (frança)" },
    { file: "pm.jpg", name: "são pedro e miquelão" },
    { file: "vc.jpg", name: "são vicente e granadinas" },
    { file: "ws.jpg", name: "samoa" },
    { file: "sm.jpg", name: "san marino" },
    { file: "st.jpg", name: "são tomé e príncipe" },
    { file: "sa.jpg", name: "arábia saudita" },
    { file: "sn.jpg", name: "senegal" },
    { file: "rs.jpg", name: "sérvia" },
    { file: "sc.jpg", name: "seicheles" },
    { file: "sl.jpg", name: "serra leoa" },
    { file: "sg.jpg", name: "singapura" },
    { file: "sx.jpg", name: "são martinho (holanda)" },
    { file: "sk.jpg", name: "eslováquia" },
    { file: "si.jpg", name: "eslovênia" },
    { file: "sb.jpg", name: "ilhas salomão" },
    { file: "so.jpg", name: "somália" },
    { file: "za.jpg", name: "áfrica do sul" },
    { file: "gs.jpg", name: "ilhas geórgia do sul e sandwich do sul" },
    { file: "ss.jpg", name: "sudão do sul" },
    { file: "es.jpg", name: "espanha" },
    { file: "lk.jpg", name: "sri lanka" },
    { file: "sd.jpg", name: "sudão" },
    { file: "sr.jpg", name: "suriname" },
    { file: "se.jpg", name: "suécia" },
    { file: "ch.jpg", name: "suíça" },
    { file: "sy.jpg", name: "síria" },
    { file: "tw.jpg", name: "taiwan" },
    { file: "tj.jpg", name: "tajiquistão" },
    { file: "tz.jpg", name: "tanzânia" },
    { file: "th.jpg", name: "tailândia" },
    { file: "tl.jpg", name: "timor-leste" },
    { file: "tg.jpg", name: "togo" },
    { file: "tk.jpg", name: "tokelau" },
    { file: "to.jpg", name: "tonga" },
    { file: "tt.jpg", name: "trinidad e tobago" },
    { file: "tn.jpg", name: "tunísia" },
    { file: "tr.jpg", name: "turquia" },
    { file: "tm.jpg", name: "turcomenistão" },
    { file: "tc.jpg", name: "ilhas turcas e caicos" },
    { file: "tv.jpg", name: "tuvalu" },
    { file: "ug.jpg", name: "uganda" },
    { file: "ua.jpg", name: "ucrânia" },
    { file: "ae.jpg", name: "emirados árabes unidos" },
    { file: "gb.jpg", name: "reino unido" },
    { file: "us.jpg", name: "estados unidos" },
    { file: "uy.jpg", name: "uruguai" },
    { file: "uz.jpg", name: "uzbequistão" },
    { file: "vu.jpg", name: "vanuatu" },
    { file: "ve.jpg", name: "venezuela" },
    { file: "vn.jpg", name: "vietnã" },
    { file: "wf.jpg", name: "wallis e futuna" },
    { file: "eh.jpg", name: "saara ocidental" },
    { file: "ye.jpg", name: "iemen" },
    { file: "zm.jpg", name: "zâmbia" },
    { file: "zw.jpg", name: "zimbábue" }
  ];
  let currentFlag = null;
  let streak = 0;
  let timeLeft = 12;
  let timerInterval = null;
  

  const elements = {
      flagImg: document.getElementById("flag"),
      input: document.getElementById("country-input"),
      timer: document.getElementById("timer"),
      streak: document.getElementById("streak"),
      container: document.getElementById("quiz-container")
  };

  function pickRandomFlag() {
      let newFlag;

      do {
          newFlag = flags[Math.floor(Math.random() * flags.length)];
      } while (newFlag.file === currentFlag?.file);
  
      currentFlag = newFlag;
      

      timeLeft = 12;
      elements.timer.classList.remove('timer-low');
      elements.flagImg.style.opacity = '0';
      

      elements.flagImg.onload = () => {
          elements.flagImg.style.opacity = '1';
      };
      elements.flagImg.src = `flags/${newFlag.file}`;
      
      elements.input.value = "";
      elements.input.focus();
      updateTimer();
      startTimer();
  }
  
 
  function startTimer() {
      clearInterval(timerInterval);
      timerInterval = setInterval(() => {
          timeLeft--;
          updateTimer();
          
          if (timeLeft <= 5) {
              elements.timer.classList.add('timer-low');
          }
          
          if (timeLeft <= 0) {
              handleAnswer(false);
              pickRandomFlag();
          }
      }, 1000);
  }
  
  function updateTimer() {
      elements.timer.textContent = timeLeft;
  }
  
  function handleAnswer(isCorrect) {
      if (isCorrect) {
          streak++;
          elements.container.classList.add('correct');
          setTimeout(() => elements.container.classList.remove('correct'), 500);
      } else {
          streak = 0;
          elements.container.classList.add('incorrect');
          setTimeout(() => elements.container.classList.remove('incorrect'), 500);
      }
      elements.streak.textContent = `Sequência: ${streak}`;
  }

  elements.input.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
          const answer = elements.input.value.trim().toLowerCase();
          const isCorrect = answer === currentFlag.name.toLowerCase();
          handleAnswer(isCorrect);
          pickRandomFlag();
      }
  });
  

  window.addEventListener('DOMContentLoaded', () => {
      if (flags.length > 0) {
          pickRandomFlag();
      } else {
          alert('Erro: Nenhuma bandeira encontrada!');
      }
  });
  