(()=>{"use strict";const e=document.querySelector("#content"),n=document.createElement("div");function t(){e.hasChildNodes&&e.removeChild(e.firstChild),n.className="contentDiv",n.innerHTML='<img id="headerImg" src="../pr-food.jpg" alt="puerto rican food">\n    <div class="title">A meal from paradise</div>\n    <div class="menuText" style="text-align: center;">We strive to create an experience that will give our guests an escape to a Puerto Rican food experience</div>',e.appendChild(n)}const i=document.querySelector("#content"),a=document.createElement("div"),s=document.querySelector("#content"),d=document.createElement("div");t(),document.querySelector("#mainBtn").addEventListener("click",t),document.querySelector("#menuBtn").addEventListener("click",(function(){s.hasChildNodes&&s.removeChild(s.firstChild),d.className="contentDiv",d.innerHTML='<img id="headerImg" src="../pr-food.jpg" alt="puerto rican food">\n    \n    <div class="title">Menu</div>\n   \n    <div class="menuDiv">\n\n    <div class="menuItem"> \n\n    <img class="menuImg" src="../Alcapurria.jpg" alt="Alcapurria">\n    <div class="menuTitle">Alcapurria</div>\n    <div class="menuText">These beachside appetizers are made from a combination of the masa of green plantains, and yautía, a taro root. The dish is filled with stewed crab meat or ground beef. </div>\n    \n    </div>\n\n    <div class="menuItem"> \n\n    <img class="menuImg" src="../mofongo.webp" alt="Mofongo">\n    <div class="menuTitle">Mofongo</div>\n    <div class="menuText">Mofongo is a ‘volcano’ of fried plantain, it is a dish that has roots in both the African and Taíno influences on Puerto Rican cuisine. Served with chicken, fried meat, or shrimp.  </div>\n    \n    </div>\n\n    <div class="menuItem"> \n\n    <img class="menuImg" src="../pastales.webp" alt="Pasteles">\n    <div class="menuTitle">Pasteles</div>\n    <div class="menuText">Pasteles are one of the three dishes you simply can’t do without in a Puerto Rican Christmas meal, with the other two being pernil and arroz con gandules.</div>\n    \n    </div>\n\n    <div class="menuItem"> \n\n    <img class="menuImg" src="../tembleque.webp" alt="Tembleque">\n    <div class="menuTitle">Tembleque</div>\n    <div class="menuText">The name tembleque comes from the words ‘temblequeo’ and ‘temblor’, which means ‘to jitter’ and ‘tremble’ respectively. As a staple Christmas dessert, coconut milk is the star ingredient of this rich, jiggly Puerto Rican pudding. </div>\n    \n    </div>\n    </div>\n    \n    ',s.appendChild(d)})),document.querySelector("#aboutBtn").addEventListener("click",(function(){i.hasChildNodes&&i.removeChild(i.firstChild),a.className="contentDiv",a.innerHTML='<img id="headerImg" src="../pr-food.jpg" alt="puerto rican food">\n    <div class="title">Who are we?</div>\n    <div class="menuText" style="text-align: center;">god knows</div>',i.appendChild(a)}))})();