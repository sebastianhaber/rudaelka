(this["webpackJsonpruda-elka"]=this["webpackJsonpruda-elka"]||[]).push([[0],{75:function(n,e,t){"use strict";t.r(e);var i,r,a,c,o,s,l=t(3),d=t.n(l),j=t(25),h=t.n(j),p=t(5),b={primary:"#DA4213",primaryHover:"#EA3700",primaryLight:"#FFF0EB",white:"#fff",darkWhite:"#efefef",gray:"#999",lightGray:"#bababa",black:"#222",green:"#16D434"},u=t(4),m=t(21),x=t(11),f=t(47),g=t(48),O=t(49),v=t(26),y=t(18),w=t(50),k=t(51),z=t(52),S=t(1);function C(n){var e=n.onClose,t=Object(l.useContext)(yn),i=t.data.social;return Object(S.jsx)(F,{onClick:e,id:"overlay",children:Object(S.jsxs)(W,{id:"modal",children:[Object(S.jsx)("img",{src:t.data.logo.logo.url,alt:t.data.logo.logo.alt}),Object(S.jsxs)("div",{children:[Object(S.jsxs)("p",{children:[Object(S.jsx)(x.Icon,{icon:v.a}),Object(S.jsxs)("a",{href:"tel:+48 ".concat(i.telefon),children:["+48 ",i.telefon]})]}),Object(S.jsxs)("p",{children:[Object(S.jsx)(x.Icon,{icon:z.a}),Object(S.jsx)("a",{href:"mailto:".concat(i.mail),children:i.mail})]}),Object(S.jsxs)("p",{children:[Object(S.jsx)(x.Icon,{icon:w.a}),Object(S.jsx)("a",{href:"".concat(i.facebook),target:"_blank",rel:"noreferrer",children:i.facebookName})]}),Object(S.jsxs)("p",{children:[Object(S.jsx)(x.Icon,{icon:k.a}),Object(S.jsx)("a",{href:"".concat(i.instagram),target:"_blank",rel:"noreferrer",children:i.instagramName})]})]}),Object(S.jsx)("span",{onClick:e,children:"Zakmnij"})]})})}var I,L=Object(p.d)(i||(i=Object(u.a)(["\n    0%{\n        transform: scale(0);\n    }\n    30%, 100%{\n        transform: scale(1);\n    }\n    70%{\n        transform: scale(1.1);\n    }\n"]))),N=Object(p.d)(r||(r=Object(u.a)(["\n    0%{\n        transform: scale(1);\n    }\n    30%{\n        transform: scale(1.1);\n    }\n    100%{\n        transform: scale(0);\n    }\n"]))),P=Object(p.d)(a||(a=Object(u.a)(["\n    from{\n        opacity: 0;\n    }\n    to{\n        opacity: 1;\n    }\n"]))),A=Object(p.d)(c||(c=Object(u.a)(["\n    from{\n        opacity: 1;\n    }\n    to{\n        opacity: 0;\n    }\n"]))),F=p.c.div(o||(o=Object(u.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    width: 100%;\n    height: 100vh;\n    background-color: rgba(0,0,0,.6);\n    display: grid;\n    align-content: center;\n    justify-content: center;\n    animation: "," .5s ease;\n    &.hide{\n        pointer-events: none;\n        animation: "," .5s ease forwards;\n    }\n"])),P,A),W=p.c.div(s||(s=Object(u.a)(["\n    position: relative;\n    max-width: 400px;\n    width: 100%;\n    height: 500px;\n    border-radius: 20px;\n    padding: 2rem;\n    margin: 0 auto;\n    background-color: ",";\n    color: ",";\n    animation: "," .5s ease;\n    &.hide{\n        pointer-events: none;\n        animation: "," .5s ease forwards;\n    }\n    img{\n        width: 60%;\n        margin: 0 auto;\n    }\n    p{\n        margin-top: .7rem;\n        display: flex;\n        align-items: center;\n        transition: color .2s ease;\n        svg{\n            font-size: 24px;\n            margin-right: .5rem;\n        }\n        &:hover{\n            color: ",";\n        }\n        &:active{\n            transform: scale(.97);\n        }\n    }\n    span{\n        position: absolute;\n        bottom: 2rem;\n        right: 2rem;\n        color: ",";\n        font-weight: bold;\n        cursor: pointer;\n    }\n    @media screen and (max-width: 400px){\n        width: 90%;\n    }\n"])),(function(n){return n.theme.white}),(function(n){return n.theme.black}),L,N,(function(n){return n.theme.primary}),(function(n){return n.theme.primary}));function B(){var n=Object(l.useState)(!1),e=Object(m.a)(n,2),t=e[0],i=e[1];return Object(S.jsxs)(M,{children:[Object(S.jsxs)("ul",{children:[Object(S.jsx)("li",{children:Object(S.jsxs)(y.Link,{to:"top",spy:!0,smooth:!0,duration:800,children:[Object(S.jsx)(x.Icon,{icon:f.a}),Object(S.jsx)("p",{children:"G\u0142\xf3wna"})]})}),Object(S.jsx)("li",{children:Object(S.jsxs)(y.Link,{to:"projects",spy:!0,smooth:!0,duration:800,children:[Object(S.jsx)(x.Icon,{icon:g.a}),Object(S.jsx)("p",{children:"Projekty"})]})}),Object(S.jsxs)("li",{children:[Object(S.jsx)(x.Icon,{icon:O.a})," ",Object(S.jsx)("p",{children:"Opinie"})]}),Object(S.jsxs)("li",{onClick:function(){return document.body.classList.add("no-scroll"),void i(!0)},children:[Object(S.jsx)(x.Icon,{icon:v.a})," ",Object(S.jsx)("p",{children:"Kontakt"})]})]}),t?Object(S.jsx)(C,{onClose:function(){document.body.classList.remove("no-scroll"),document.querySelector("#overlay").classList.add("hide"),document.querySelector("#modal").classList.add("hide"),setTimeout((function(){i(!1)}),600)}}):null]})}var D,E,q,G,_,H,J,K,Z,M=p.c.nav(I||(I=Object(u.a)(["\n    position: fixed;\n    top: 0;\n    left: 0;\n    z-index: 2;\n    background-color: rgba(0,0,0,.9);\n    color: ",";\n    width: 100%;\n    height: 50px;\n    padding: 0 2rem;\n    box-shadow: 0px 0px 20px rgba(54, 53, 53, .2);\n    ul{\n        display: flex;\n        flex-direction: row;\n        justify-content: center;\n        list-style: none;\n        height: 100%;\n    }\n    li{\n        display: flex;\n        flex-direction: row;\n        align-items: center;\n        margin: 0 1rem;\n        cursor: pointer;\n        transition: color .2s ease;\n        a{\n            display: flex;\n            flex-direction: row;\n            align-items: center;\n            width: 100%;\n            height: 100%;\n            padding: 0 .5rem;\n        }\n        svg{\n            margin-right: .5rem;\n        }\n        &:hover{\n            color: ",";\n        }\n        &:active{\n            transform: scale(.97);\n        }\n    }\n    @media screen and (max-width: 1000px){\n        padding: 0;\n        ul{\n            justify-content: space-evenly;\n        }\n        li{\n            margin: unset;\n        }\n    }\n    @media screen and (max-width: 600px){\n        li, li a{\n            flex-direction: column;\n            justify-content: center;\n            p{\n                font-size: 12px;\n            }\n            svg{\n                margin: unset;\n            }\n        }\n    }\n"])),(function(n){return n.theme.white}),(function(n){return n.theme.white})),R=Object(p.b)(D||(D=Object(u.a)(["\n    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');\n\n    *, *::after, *::before{\n        margin: 0;\n        padding: 0;\n        box-sizing: border-box;\n        border-radius: 0;\n        border: 0;\n    }\n    html, body{\n        font-family: -apple-system, 'Poppins', sans-serif;\n        font-size: 18px;\n        color: ",";\n        line-height: 1.4;\n        scrollbar-color: "," ",";\n        &.no-scroll{\n            overflow-y: hidden;\n        }\n    }\n    img{\n        display: block;\n        object-fit: cover;\n        object-position: center;\n    }\n    input, textarea, button, select{\n        font-size: inherit;\n        font-weight: inherit;\n        font-family: inherit;\n    }\n    a{\n        color: inherit;\n        text-decoration: none;\n    }\n"])),(function(n){return n.theme.black}),(function(n){return n.theme.lightGray}),(function(n){return n.theme.darkWhite})),T=t.p+"static/media/marianne-krohn-8wDm3cr48Xc-unsplash.db0f559b.jpg",X=p.c.button(E||(E=Object(u.a)(["\n    padding: 0 2.5rem;\n    height: 50px;\n    background-color: ",";\n    color: ",";\n    font-weight: bold;\n    border-radius: 20px;\n    cursor: pointer;\n    z-index: 1;\n    transition: background-color .2s ease;\n    &:hover{\n        background-color: ",";\n    }\n    &:active{\n        transform: scale(.98);\n    }\n"])),(function(n){return n.theme.primary}),(function(n){return n.theme.white}),(function(n){return n.theme.primaryHover})),Q=p.c.h1(q||(q=Object(u.a)(["\n    font-size: 48px;\n    @media screen and (max-width: 800px){\n        font-size: 32px;\n    }\n"])));function U(n){var e=n.choosen,t=n.services,i=n.handleSetSummary;console.log(t);var r=function(n){return t.map((function(e){return e.usluga===n?Object(S.jsx)("option",{value:e.id,children:e.nazwa},e.id):null}))};return Object(S.jsx)(sn,{className:"animated",children:Object(S.jsxs)("select",{onChange:function(n){i(n.target.value)},children:[Object(S.jsx)("option",{value:"null",onClick:function(){return i(0)},children:"Wybierz z listy"}),"szycie"===e?Object(S.jsx)("optgroup",{label:"Szycie",children:r("szycie")}):null,"bluza"===e?Object(S.jsx)("optgroup",{label:"Bluza, bluzka, koszula",children:r("bluza")}):null]})})}function V(n){var e=n.id,t=Object(l.useState)(null),i=Object(m.a)(t,2),r=i[0],a=i[1],c=Object(l.useState)(0),o=Object(m.a)(c,2),s=o[0],d=o[1],j=Object(l.useContext)(yn).services;return Object(S.jsxs)(cn,{id:e,children:[Object(S.jsxs)("span",{children:[Object(S.jsx)("p",{className:"title",children:"\ud83d\udc57 Co Ci\u0119 interesuje?"})," Sprawd\u017a cen\u0119 interesuj\u0105cej Ci\u0119 us\u0142ugi."]}),Object(S.jsxs)(on,{children:[Object(S.jsx)(sn,{children:Object(S.jsxs)("select",{onChange:function(n){if("null"===n.target.value)return a(null),void d(0);a(n.target.value)},children:[Object(S.jsx)("option",{value:"null",children:"Wybierz z listy"}),Object(S.jsx)("optgroup",{label:"Szycie",children:Object(S.jsx)("option",{value:"szycie",children:"Szycie na miar\u0119"})}),Object(S.jsxs)("optgroup",{label:"Doszywanie, skracanie, itp.",children:[Object(S.jsx)("option",{value:"bluza",children:"Bluza, bluzka, koszula"}),Object(S.jsx)("option",{value:"zakiet",children:"\u017bakiet, marynarka"}),Object(S.jsx)("option",{value:"plaszcz",children:"P\u0142aszcz, kurtka"}),Object(S.jsx)("option",{value:"spodnica",children:"Sp\xf3dnica"}),Object(S.jsx)("option",{value:"sukienka",children:"Sukienka"}),Object(S.jsx)("option",{value:"spodnie",children:"Spodnie"})]}),Object(S.jsx)("optgroup",{label:"Inne",children:Object(S.jsx)("option",{value:"akcesoria",children:"Akcesoria dekoracyjne"})})]})}),r?Object(S.jsx)(S.Fragment,{children:Object(S.jsx)(U,{choosen:r,services:j,handleSetSummary:function(n){"null"!==n?j.forEach((function(e){e.id===n&&d(e.cena)})):d(0)}})}):null,s?Object(S.jsxs)(S.Fragment,{children:[Object(S.jsxs)(ln,{children:[Object(S.jsx)("strong",{children:"Cena ko\u0144cowa*:"})," od ",Object(S.jsxs)("b",{children:[s," PLN"]})," + ",Object(S.jsx)("u",{children:"cena dojazdu"})]}),Object(S.jsx)(dn,{children:"*Cena ko\u0144cowa jest orientacyjna i mo\u017ce ulec zmianie."})]}):null]})]})}var Y,$,nn,en,tn,rn,an=Object(p.d)(G||(G=Object(u.a)(["\n    from{\n        opacity: 0;\n    }\n    to{\n        opacity: 1;\n    }\n"]))),cn=p.c.section(_||(_=Object(u.a)(["\n    max-width: 1000px;\n    width: 100%;\n    background-color: ",";\n    margin: 5rem auto;\n    border-radius: 30px;\n    padding: 2rem;\n    transition: all .4s ease;\n    p.title{\n        font-size: 24px;\n        font-weight: bold;\n    }\n    @media screen and (max-width: 1000px){\n        border-radius: 0;\n        padding: 1rem;\n    }\n"])),(function(n){return n.theme.primaryLight})),on=p.c.div(H||(H=Object(u.a)(["\n    display: flex;\n    flex-direction: column;\n    flex-wrap: wrap;\n    button{\n        margin-left: 2rem;\n    }\n"]))),sn=p.c.div(J||(J=Object(u.a)(["\n    position: relative;\n    display: flex;\n    flex-direction: column;\n    flex: 1;\n    &.animated{\n        animation: "," .4s ease;\n    }\n    select{\n        height: 50px;\n        width: 100%;\n        padding: 0 2rem;\n        margin-top: 1rem;\n        background-color: ",";\n        border-radius: 20px;\n        appearance: none;\n    }\n    label{\n        position: absolute;\n        top: -1.2rem;\n        left: 1rem;\n        font-size: 14px;\n    }\n"])),an,(function(n){return n.theme.white})),ln=p.c.p(K||(K=Object(u.a)(["\n    margin-top: 2rem;\n    text-align: center;\n    font-size: 24px;\n    b{\n        color: ",";\n    }\n"])),(function(n){return n.theme.green})),dn=p.c.p(Z||(Z=Object(u.a)(["\n    margin-top: 1rem;\n    font-size: 12px;\n"]))),jn=Object(p.d)(Y||(Y=Object(u.a)(["\n    from{\n        opacity: 0;\n    }\n    to{\n        opacity: 1;\n    }\n"]))),hn=p.c.div($||($=Object(u.a)(["\n    position: absolute;\n    top: 0;\n    left: 0;\n    z-index: -1;\n    width: 100%;\n    height: 100vh;\n    background-image: url(",");\n    background-position: center;\n    background-size: cover;\n    &::after{\n        content: '';\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: linear-gradient(180deg, rgba(255, 255, 255, 0.5) 0%, rgba(255, 255, 255, 0) 100%);\n    }\n"])),(function(n){var e=n.src;return e||"none"})),pn=p.c.div(nn||(nn=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    align-items: center;\n    max-width: 1440px;\n    height: 100vh;\n    margin: 0 auto;\n    padding: 0 50px;\n    div{\n        position: relative;\n        flex: 1;\n        display: flex;\n        flex-direction: column;\n        align-items: flex-start;\n        justify-content: center;\n    }\n    img{\n        width: 420px;\n        height: 420px;\n        margin: 0 auto;\n        animation: "," .4s ease;\n    }\n    h1{\n        font-size: 64px;\n    }\n    p.type{\n        font-weight: 300;\n        text-transform: uppercase;\n        font-size: 14px;\n    }\n    @media screen and (max-width: 1100px){\n        padding: 0 1rem;\n        img{\n            display: none;\n        }\n    }\n"])),jn),bn=p.c.p(en||(en=Object(u.a)(["\n    margin: 50px 0;\n    max-width: 600px;\n"]))),un=p.c.div(tn||(tn=Object(u.a)(["\n    max-width: 1200px;\n    margin: 0 auto 50px;\n    a{\n        font-weight: bold;\n        color: ",";\n    }\n    div.header{\n        padding: 0 2rem;\n        @media screen and (max-width: 768px){\n            padding: 0 .5rem;\n        }\n    }\n"])),(function(n){return n.theme.primary})),mn=p.c.div(rn||(rn=Object(u.a)(["\n    display: flex;\n    flex-direction: row;\n    justify-content: space-evenly;\n    flex-wrap: wrap;\n    margin-top: 2rem;\n    div{\n        max-width: 300px;\n        width: 100%;\n        height: 400px;\n        border-radius: 20px;\n        margin: 1rem;\n        overflow: hidden;\n        background-color: ",";\n        img{\n            width: 100%;\n            height: 100%;\n            object-fit: cover;\n            object-position: center;\n        }\n    }\n"])),(function(n){return n.theme.primaryLight}));function xn(n){var e=n.data;return Object(S.jsxs)(S.Fragment,{children:[Object(S.jsx)(hn,{src:T}),Object(S.jsxs)(pn,{id:"top",children:[Object(S.jsxs)("div",{children:[Object(S.jsx)("h1",{children:"El\u017cbieta Nizio\u0142ek"}),Object(S.jsx)("p",{className:"type",children:"KRAWCOWA"}),Object(S.jsx)(bn,{children:null===e||void 0===e?void 0:e.description.opis}),Object(S.jsx)(y.Link,{to:"search",spy:!0,smooth:!0,offset:-70,duration:800,children:Object(S.jsx)(X,{children:"Zaczynajmy!"})})]}),Object(S.jsx)("img",{src:e.photo.mainPhoto.url,alt:e.photo.mainPhoto.alt})]}),Object(S.jsx)(V,{id:"search"}),Object(S.jsxs)(un,{id:"projects",children:[Object(S.jsxs)("div",{className:"header",children:[Object(S.jsx)(Q,{children:"\ud83c\udf89 Najlepsze projekty"}),Object(S.jsxs)("p",{children:["Sprawd\u017a moje wszyskie projekty na ",Object(S.jsx)("a",{href:e.social.instagram,target:"_blank",rel:"noopener noreferrer",children:"Instagramie"}),"\u2764"]})]}),Object(S.jsx)(mn,{children:e.project.project.map((function(n){return Object(S.jsx)("div",{children:Object(S.jsx)("img",{src:n.url,alt:n.alt,loading:"lazy"})},n.id)}))})]})]})}var fn,gn=t(93),On=t(91),vn=Object(On.a)(fn||(fn=Object(u.a)(["\n  {\n    description {\n      opis\n    }\n    photo{\n      mainPhoto {\n        url,\n        alt,\n      }\n    }\n    project{\n      project{\n        id\n        url\n        alt\n      }\n    }\n    social{\n      instagram\n      instagramName\n      facebook\n      facebookName\n      telefon\n      mail\n    }\n    stopka {\n      text\n    }\n    allServices{\n      id\n      usluga\n      nazwa\n      cena\n      cenaOdDo\n    }\n    logo{\n      logo{\n        url\n        alt\n      }\n    }\n  }\n"]))),yn=Object(l.createContext)({data:[],services:[]});var wn=function(){var n=Object(gn.a)(vn),e=n.loading,t=n.error,i=n.data;return e?null:t?(console.log(t),null):Object(S.jsx)(p.a,{theme:b,children:Object(S.jsxs)(yn.Provider,{value:{data:i,services:null===i||void 0===i?void 0:i.allServices},children:[Object(S.jsx)(R,{}),Object(S.jsx)(B,{}),Object(S.jsx)(xn,{data:i})]})})},kn=t(90),zn=t(92),Sn=t(89),Cn=new kn.a({uri:"https://graphql.datocms.com/",cache:new zn.a,headers:{Authorization:"Bearer ".concat("bd78fed5dde49f9a6df2991a44f67c")}});h.a.render(Object(S.jsx)(d.a.StrictMode,{children:Object(S.jsx)(Sn.a,{client:Cn,children:Object(S.jsx)(wn,{})})}),document.getElementById("root"))}},[[75,1,2]]]);
//# sourceMappingURL=main.7ab5936d.chunk.js.map