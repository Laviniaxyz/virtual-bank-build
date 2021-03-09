(this["webpackJsonplearn-context"]=this["webpackJsonplearn-context"]||[]).push([[0],{39:function(n,e,t){},40:function(n,e,t){},54:function(n,e,t){"use strict";t.r(e);var i,a,c,r,o,s,d,l,x,j,b,p,h,f,g,m,u,O=t(2),v=t.n(O),y=t(15),w=t.n(y),k=(t(39),t(40),t(6)),z=t(17),S=t(10),T=t(9),C=t(3),L=t(4),F=L.a.nav(i||(i=Object(C.a)(["\n  background: ",";\n  height: 80px;\n  margin-top: -80px;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  font-size: 1rem;\n  position: sticky;\n  top:0;\n  z-index: 10;\n"])),(function(n){return n.scrollNav?"#000":"transparent"})),B=L.a.div(a||(a=Object(C.a)(["\n  display: flex;\n  justify-content: space-between;\n  height: 80px;\n  z-index: 1;\n  width: 100%; \n  padding: 0, 24px;\n  max-width: 1100px;\n"]))),I=Object(L.a)(k.b)(c||(c=Object(C.a)(["\n  color: #01bf71;\n  cursor: pointer;\n  font-size: 1.5rem;\n  display:flex;\n  justify-content: flex-end;\n  align-items: center;\n  margin-left: 24px;\n  font-weight:bold;\n  text-decoration: none;\n"]))),D=L.a.div(r||(r=Object(C.a)(["\n  display: none;\n\n@media screen and (max-width: 768px) {\n  display: block;\n  position: absolute;\n  top:0;\n  right:0;\n  transform: translate(-100%, 60%);\n  font-size: 1.8rem;\n  cursor: pointer;\n  color: #fff;\n}\n"]))),A=L.a.ul(o||(o=Object(C.a)(["\n  display: flex;\n  align-items: center;\n  list-style: none;\n  text-align: center;\n  //margin-right: -22px;\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n"]))),E=L.a.li(s||(s=Object(C.a)(["\n  height: 80px;\n"]))),P=Object(L.a)(T.Link)(d||(d=Object(C.a)(["\n  color: #fff;\n  display:flex;\n  align-items:center;\n  text-decoration: none;\n  padding: 0 1rem;\n  height: 100%;\n  cursor: pointer;\n\n  &.active {\n    border-bottom: 3px solid #01bf71;\n  }\n"]))),M=L.a.nav(l||(l=Object(C.a)(["\n  display: flex;\n  align-items: center;\n\n  @media screen and (max-width: 768px) {\n    display: none;\n  }\n\n"]))),U=Object(L.a)(k.b)(x||(x=Object(C.a)(["\n  background-color:#01bf71;\n  border-radius: 50px;\n  margin: 24px;\n  padding: 10px 22px;\n  color: #010606;\n  font-weight: bold;\n  outline: none;\n  text-decoration: none;\n  border: none;\n  cursor: pointer;\n  transition: all 0.2s ease-in-out;\n\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background-color: #fff;\n    color: #010606;\n  }\n"]))),G=t(8),Y=t(1),_=function(n){var e=n.toggleIsOpen,t=Object(O.useState)(!1),i=Object(S.a)(t,2),a=i[0],c=i[1],r=function(){window.scrollY>=80?c(!0):c(!1)};Object(O.useEffect)((function(){window.addEventListener("scroll",r)}),[]);return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)(F,{scrollNav:a,children:Object(Y.jsxs)(B,{children:[Object(Y.jsx)(I,{to:"/",onClick:function(){T.animateScroll.scrollToTop()},children:"dolla"}),Object(Y.jsx)(D,{onClick:e,children:Object(Y.jsx)(G.a,{})}),Object(Y.jsxs)(A,{children:[Object(Y.jsx)(E,{children:Object(Y.jsx)(P,{to:"about",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,activeClass:"active",children:"About"})}),Object(Y.jsx)(E,{children:Object(Y.jsx)(P,{to:"discover",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,activeClass:"active",children:"Discover"})}),Object(Y.jsx)(E,{children:Object(Y.jsx)(P,{to:"services",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,activeClass:"active",children:"Services"})}),Object(Y.jsx)(E,{children:Object(Y.jsx)(P,{to:"signup",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,activeClass:"active",children:"Sign Up"})})]}),Object(Y.jsx)(M,{children:Object(Y.jsx)(U,{to:"/signin",children:"Sign In"})})]})})})},V=L.a.aside(j||(j=Object(C.a)(["\n  background-color: #0d0d0d;\n  position: fixed;\n  z-index: 999;\n  width: 100%;\n  height: 100%;\n  display: grid;\n  align-items:center;\n  top: 0;\n  left: 0;\n  transition: 0.3 ease-in-out;\n  opacity: ",";\n  top: ",";\n"])),(function(n){return n.isOpen?"100%":"0"}),(function(n){return n.isOpen?"0":"-100%"})),J=L.a.div(b||(b=Object(C.a)(["\n  background-color: red;\n  position: absolute;\n  top: 1.2rem;\n  right: 1.5rem;\n  background: transparent;\n  font-size: 2rem;\n  cursor: pointer;\n  outline: none;\n"]))),N=Object(L.a)(G.e)(p||(p=Object(C.a)(["\n  color: #fff;\n"]))),W=L.a.div(h||(h=Object(C.a)(["\n  color: #fff;\n"]))),H=L.a.ul(f||(f=Object(C.a)(["\n  display:grid;\n  grid-template-columns: 1fr;\n  grid-template-rows: repeat(6, 80px);\n  text-align: center;\n\n\n  @media screen and (max-width) {\n    grid-template-rows: repeat(6, 60px)\n  }\n"]))),R=Object(L.a)(T.Link)(g||(g=Object(C.a)(["\n  display:flex;\n  align-items:center;\n  justify-content: center;\n  font-size: 1.3rem;\n  text-decoration: none;\n  color: #fff;\n  cursor: pointer;\n\n  &:hover {\n    color: #01bf71;\n    transition: 0.2s ease-in-out;\n\n  }\n"]))),$=L.a.div(m||(m=Object(C.a)(["\n  display:flex;\n  justify-content:center;\n"]))),q=Object(L.a)(k.b)(u||(u=Object(C.a)(["\n  background-color: #01bf71;\n  border-radius: 50px;\n  white-space: nowrap;\n  padding: 16px 64px;\n  color: #010606;\n  font-size: 16px;\n  font-weight: bold;\n  outline: none;\n  border: none;\n  cursor: pointer;\n  text-decoration: none;\n  transition: all 0.2s ease-in-out;\n\n&:hover {\n  transition: all 0.2s ease-in-out;\n  background: #fff;\n  color: #010606;\n}\n"])));var K,Q,X,Z,nn,en,tn,an,cn,rn,on,sn,dn,ln,xn,jn,bn,pn,hn,fn,gn,mn,un,On,vn,yn,wn,kn,zn,Sn,Tn,Cn,Ln,Fn,Bn,In,Dn,An,En,Pn,Mn,Un,Gn=function(n){var e=n.toggleIsOpen,t=n.isOpen;return Object(Y.jsxs)(V,{isOpen:t,onClick:e,children:[Object(Y.jsx)(J,{onClick:e,children:Object(Y.jsx)(N,{})}),Object(Y.jsxs)(W,{children:[Object(Y.jsxs)(H,{children:[Object(Y.jsx)(R,{to:"about",onClick:e,children:"About"}),Object(Y.jsx)(R,{to:"discover",onClick:e,children:"Discover"}),Object(Y.jsx)(R,{to:"services",onClick:e,children:"Services"}),Object(Y.jsx)(R,{to:"signup",onClick:e,children:"Sign Up"})]}),Object(Y.jsx)($,{children:Object(Y.jsx)(q,{tp:"/signin",children:"Sign In"})})]})]})},Yn=t(25),_n=L.a.div(K||(K=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n  align-items:center;\n  padding: 0 30px;\n  height: 800px;\n  position: relative;\n  z-index: 1;\n\n  :before {\n    content: '';\n    position:absolute;\n    top: 0;\n    right: 0;\n    bottom: 0;\n    left: 0;\n    background-color: #000;\n    opacity: 0.6;\n    z-index: 2;\n  }\n"]))),Vn=L.a.div(Q||(Q=Object(C.a)(["\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  width: 100%;\n  height: 100%;\n  overflow: hidden;\n\n"]))),Jn=L.a.video(X||(X=Object(C.a)(["\n  width: 100%;\n  height: 100%;\n  -o-object-fit: cover;\n  object-fit: cover;\n  background-color: #232a34;\n"]))),Nn=L.a.div(Z||(Z=Object(C.a)(["\n  z-index: 3;\n  max-width: 1200px;\n  position: absolute;\n  padding: 8px 24px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),Wn=L.a.h1(nn||(nn=Object(C.a)(["\n  color: #fff;\n  font-size: 48px;\n  text-align: center;\n\n  @media screen and (max-width: 768px) {\n    font-size: 40px\n  }\n\n  @media screen and (max-width: 480px) {\n    font-size: 32px\n  }\n"]))),Hn=L.a.p(en||(en=Object(C.a)(["\n  color: #fff;\n  margin-top: 24px;\n  font-size: 24px;\n  text-align: center;\n  max-width: 600px;\n\n  @media screen and (max-width: 768px) {\n    font-size: 24px;\n  }\n\n  @media screen and (max-width: 480px) {\n    font-size: 18px;\n  }\n  "]))),Rn=L.a.div(tn||(tn=Object(C.a)(["\n  margin-top: 32px;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n"]))),$n=Object(L.a)(Yn.a)(an||(an=Object(C.a)(["\nmargin-left: 8px;\nfont-size: 24px;\n"]))),qn=Object(L.a)(Yn.b)(cn||(cn=Object(C.a)(["\nmargin-left: 8px;\nfont-size: 24px;\n"]))),Kn=Object(L.a)(T.Link)(rn||(rn=Object(C.a)(["\n  border-radius: 50px;\n  background: ",";\n  white-space: nowrap;\n  font-weight: bold;\n  padding: ",";\n  color: ",";\n  font-size: ",";\n  outline: none;\n  border: none;\n  cursor: pointer;\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  transition: all 0.2 ease-ease-in-out;\n\n  &:hover {\n    transition: all 0.2s ease-in-out;\n    background: ",";\n  } \n\n\n\n"])),(function(n){return n.primary?"#01BF71":"#010606"}),(function(n){return n.big?"14px 48px":"12px 30px"}),(function(n){return n.dark?"#010606":"#fff"}),(function(n){return n.fontBig?"20px":"16px"}),(function(n){return n.primary?"#fff":"#01BF71"})),Qn=t.p+"static/media/video.7d1ea6a9.mp4",Xn=function(){var n=Object(O.useState)(!1),e=Object(S.a)(n,2),t=e[0],i=e[1],a=function(){i(!t)};return Object(Y.jsxs)(_n,{id:"home",children:[Object(Y.jsx)(Vn,{children:Object(Y.jsx)(Jn,{autoPlay:!0,loop:!0,muted:!0,type:"video/mp4",src:Qn})}),Object(Y.jsxs)(Nn,{children:[Object(Y.jsx)(Wn,{children:"Virtual Banking Made Easy"}),Object(Y.jsx)(Hn,{children:"Sign up for a new account and receive 250$ credit on your first payment"}),Object(Y.jsx)(Rn,{children:Object(Y.jsxs)(Kn,{primary:!0,dark:!0,to:"signup",onMouseEnter:a,onMouseLeave:a,children:["Get started ",t?Object(Y.jsx)($n,{}):Object(Y.jsx)(qn,{})]})})]})]})},Zn=L.a.div(on||(on=Object(C.a)(["\n  color: #fff;\n  background-color: ",";\n\n  @media screen and (max-width: 768px) {\n    padding: 100px 0;\n  }\n"])),(function(n){return n.lightBg?"#F9F9F9":"#010606"})),ne=L.a.div(sn||(sn=Object(C.a)(["\n  display: grid;\n  z-index: 1;\n  height: 800px;\n  width: 100%;\n  max-width: 1100px;\n  margin-right: auto;\n  margin-left:auto;\n  padding: 0 24px;\n  justify-content: center\n  \n"]))),ee=L.a.div(dn||(dn=Object(C.a)(["\n  display: grid;\n  grid-auto-columns: minmax(auto, 1fr);\n  align-items: center;\n  grid-template-areas: ",";\n\n\n  @media screen and (max-width: 768px) {\n    grid-template-areas: ",";\n  }\n"])),(function(n){return n.imgStart?"'col2 col1'":"'col1 col2'"}),(function(n){return n.imgStart?"'col1' 'col2'":"'col1 col1' 'col2 col2'"})),te=L.a.div(ln||(ln=Object(C.a)(["\n  margin-bottom: 15px;\n  padding: 0 15px;\n  grid-area: col1;\n"]))),ie=L.a.div(xn||(xn=Object(C.a)(["\n  margin-bottom: 15px;\n  padding: 0 15px;\n  grid-area: col2;\n"]))),ae=L.a.div(jn||(jn=Object(C.a)(["\n  max-width: 540px;\n  padding-top: 0px;\n  padding-bottom: 60px;\n  "]))),ce=L.a.p(bn||(bn=Object(C.a)(["\n  color: #01bf71;\n  font-size: 16px;\n  line-height: 16px;\n  font-weight: 700;\n  letter-spacing: 1.4px;\n  text-transform: uppercase;\n  margin-bottom: 16px;\n"]))),re=L.a.h1(pn||(pn=Object(C.a)(["\n  margin-bottom: 24px;\n  font-size: 48px;\n  line-height: 1.1;\n  font-weight: 600;\n  color: ",";\n\n  @media screen and (max-width: 480px) {\n    font-size: 32px;\n  }\n\n"])),(function(n){return n.lightText?"#f7f8fa":"#010606"})),oe=L.a.div(hn||(hn=Object(C.a)(["\n  max-width: 440px;\n  margin-bottom: 35px;\n  font-size: 18px;\n  line-height: 24px;\n  color: ","\n"])),(function(n){return n.darkText?"#010606":"#fff"})),se=L.a.div(fn||(fn=Object(C.a)(["\n  display: flex;\n  justify-content: flex-start;\n"]))),de=L.a.div(gn||(gn=Object(C.a)(["\n  max-width: 555px;\n  height: 100%;\n"]))),le=L.a.img(mn||(mn=Object(C.a)(["\n  width: 100%;\n  margin: 0 0 10px 0;\n  padding-right: 0;\n\n"]))),xe=function(n){var e=n.lightBg,t=n.id,i=n.imgStart,a=n.topLine,c=n.headline,r=n.description,o=n.lightText,s=n.darkText,d=n.buttonLabel,l=n.img,x=n.alt,j=n.primary,b=n.dark;return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsx)(Zn,{lightBg:e,id:t,children:Object(Y.jsx)(ne,{children:Object(Y.jsxs)(ee,{imgStart:i,children:[Object(Y.jsx)(te,{children:Object(Y.jsxs)(ae,{children:[Object(Y.jsx)(ce,{children:a}),Object(Y.jsx)(re,{lightText:o,children:c}),Object(Y.jsx)(oe,{darkText:s,children:r}),Object(Y.jsx)(se,{children:Object(Y.jsx)(Kn,{to:"home",smooth:!0,duration:500,spy:!0,exact:"true",offset:-80,primary:j?1:0,dark:b?1:0,children:d})})]})}),Object(Y.jsx)(ie,{children:Object(Y.jsx)(de,{children:Object(Y.jsx)(le,{src:l,alt:x})})})]})})})})},je=t.p+"static/media/icon1.f2d4f4ef.png",be=t.p+"static/media/icon2.bab78dcb.png",pe=t.p+"static/media/icon3.d4d8c080.png",he=L.a.div(un||(un=Object(C.a)(["\n  height: 800px;\n  width: 100%;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  background-color: #010606;\n  color: white;\n\n  @media screen and (max-width: 768px) {\n    height: 1100px;\n    padding: 120px;\n  }\n\n  @media screen and (max-width: 480px) {\n    height: 1200px;\n    margin: 0px;\n    padding: 0px;\n    \n  }\n\n"]))),fe=L.a.h1(On||(On=Object(C.a)(["\n  font-size: 2.5rem;\n  color: #fff;\n  margin-bottom: 64px;\n\n  @media screen and (max-width: 480px) {\n    font-size: 2rem;\n  }\n\n"]))),ge=L.a.div(vn||(vn=Object(C.a)(["\n  max-width: 1000px;\n  margin: 0 auto;\n  display: grid;\n  grid-template-columns: 1fr 1fr 1fr;\n  align-items: center;\n  grid-gap: 16px;\n  padding: 0 50px;\n\n  @media screen and (max-width: 1000px) {\n    grid-template-columns: 1fr 1fr;\n  }\n\n  @media screen and (max-width: 768px) {\n    grid-template-columns: 1fr;\n    padding: 0 20px;\n  }\n"]))),me=L.a.div(yn||(yn=Object(C.a)(["\n  background-color: #fff;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  color: black;\n  border-radius: 10px;\n  max-height: 340px;\n  padding: 30px;\n  box-shadow: 0 1px 3px rgba(0,0,0,0.2);\n  transition: all 0.2s ease-in-out;\n\n  &:hover {\n    transform: scale(1.02);\n    transition: all 0.2s ease-in-out;\n    cursor: pointer;\n  }\n\n"]))),ue=L.a.img(wn||(wn=Object(C.a)(["\n  width: 60%;\n  height: 60%;\n  margin-bottom: 10px;\n"]))),Oe=L.a.h2(kn||(kn=Object(C.a)(["\n  font-size: 1rem;\n  margin-bottom: 10px;\n"]))),ve=L.a.p(zn||(zn=Object(C.a)(["\n  font-size: 1rem;\n  text-align: center;\n"]))),ye=function(){return Object(Y.jsx)(Y.Fragment,{children:Object(Y.jsxs)(he,{id:"services",children:[Object(Y.jsx)(fe,{children:"Our services"}),Object(Y.jsxs)(ge,{children:[Object(Y.jsxs)(me,{children:[Object(Y.jsx)(ue,{src:je}),Object(Y.jsx)(Oe,{children:"Reduce Expenses"}),Object(Y.jsx)(ve,{children:"We help redyce your fees and increase your overall revenue"})]}),Object(Y.jsxs)(me,{children:[Object(Y.jsx)(ue,{src:be}),Object(Y.jsx)(Oe,{children:"Virtual Offices"}),Object(Y.jsx)(ve,{children:"You can acces your platform online anywhere in the world"})]}),Object(Y.jsxs)(me,{children:[Object(Y.jsx)(ue,{src:pe}),Object(Y.jsx)(Oe,{children:"Premium Benefits"}),Object(Y.jsx)(ve,{children:"Unlock our special membership card that returns 5% cashback"})]})]})]})})},we=L.a.div(Sn||(Sn=Object(C.a)(["\n  background-color: #101522;\n"]))),ke=L.a.div(Tn||(Tn=Object(C.a)(["\n  padding: 48px 24px;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n  max-width: 1100px;\n  margin: 0 auto;\n"]))),ze=L.a.div(Cn||(Cn=Object(C.a)(["\n  display: flex;\n  justify-content: center;\n\n  @media screen and (max-width: 820px) {\n    padding-top: 32px;\n  }\n  "]))),Se=L.a.div(Ln||(Ln=Object(C.a)(["\n  display: flex;\n\n  @media screen and (max-width: 820px) {\n    flex-direction: column;\n  }\n"]))),Te=L.a.div(Fn||(Fn=Object(C.a)(["\n  display: flex;\n  flex-direction: column;\n  align-items: flex-start;\n  margin: 16px;\n  text-align: left;\n  width: 160px;\n  box-sizing: border-box;\n  color: #fff;\n\n  @media screen and (max-width: 420px) {\n    margin: 0;\n    padding: 10px;\n    width: auto;\n  }\n"]))),Ce=L.a.h1(Bn||(Bn=Object(C.a)(["\n  font-size: 14px;\n  margin-bottom: 16px;\n"]))),Le=Object(L.a)(k.b)(In||(In=Object(C.a)(["\n  text-decoration: none;\n  color: #fff;\n  font-size: 12px;\n  margin-bottom: 0.5rem;\n\n  &:hover {\n    color: #01bf71;\n    transition: 0.3s ease-out;\n  }\n"]))),Fe=L.a.div(Dn||(Dn=Object(C.a)(["\n  max-width: 1000px;\n  width: 100%;\n"]))),Be=L.a.div(An||(An=Object(C.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  max-width: 1100px;\n  margin: 40px auto 0 auto;\n\n  @media screen and (max-width: 820px) {\n    flex-direction: column;\n  }\n"]))),Ie=Object(L.a)(k.b)(En||(En=Object(C.a)(["\n  color: #fff;\n  display: flex;\n  justify-content: start;\n  align-items: center;\n  cursor: pointer;\n  text-decoration: none;\n  font-size: 1.5rem;\n  margin-bottom: 16px;\n  font-weight: bold;\n"]))),De=L.a.div(Pn||(Pn=Object(C.a)(["\n  color: #fff;\n  margin-bottom: 16px;\n  font-size: 14px;\n  "]))),Ae=L.a.div(Mn||(Mn=Object(C.a)(["\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  width: 140px;\n  "]))),Ee=L.a.a(Un||(Un=Object(C.a)(["\n  color: #fff;\n  font-size: 24px;\n"]))),Pe=function(){return Object(Y.jsx)(we,{children:Object(Y.jsxs)(ke,{children:[Object(Y.jsxs)(ze,{children:[Object(Y.jsxs)(Se,{children:[Object(Y.jsxs)(Te,{children:[Object(Y.jsx)(Ce,{children:"About us"}),Object(Y.jsx)(Le,{to:"/",children:"How it works"}),Object(Y.jsx)(Le,{to:"/",children:"Testimonials"}),Object(Y.jsx)(Le,{to:"/",children:"Careers"}),Object(Y.jsx)(Le,{to:"/",children:"Investors"}),Object(Y.jsx)(Le,{to:"/",children:"Terms of service"})]}),Object(Y.jsxs)(Te,{children:[Object(Y.jsx)(Ce,{children:"Contact us"}),Object(Y.jsx)(Le,{to:"/",children:"Contact"}),Object(Y.jsx)(Le,{to:"/",children:"Support"}),Object(Y.jsx)(Le,{to:"/",children:"Destinations"}),Object(Y.jsx)(Le,{to:"/",children:"Sponsorships"})]})]}),Object(Y.jsxs)(Se,{children:[Object(Y.jsxs)(Te,{children:[Object(Y.jsx)(Ce,{children:"Videos"}),Object(Y.jsx)(Le,{to:"/",children:"Submit videp"}),Object(Y.jsx)(Le,{to:"/",children:"Ambassadors"}),Object(Y.jsx)(Le,{to:"/",children:"Agency"}),Object(Y.jsx)(Le,{to:"/",children:"Influencer"})]}),Object(Y.jsxs)(Te,{children:[Object(Y.jsx)(Ce,{children:"Social Media"}),Object(Y.jsx)(Le,{to:"/",children:"Instagram"}),Object(Y.jsx)(Le,{to:"/",children:"facebook"}),Object(Y.jsx)(Le,{to:"/",children:"Youtube"}),Object(Y.jsx)(Le,{to:"/",children:"Twitter"})]})]})]}),Object(Y.jsx)(Fe,{children:Object(Y.jsxs)(Be,{children:[Object(Y.jsx)(Ie,{to:"/",children:"dolla"}),Object(Y.jsxs)(De,{children:["dolla \xa9 ",(new Date).getFullYear(),"All rights reserved"]}),Object(Y.jsxs)(Ae,{children:[Object(Y.jsx)(Ee,{href:"/",target:"_blank","aria-label":"Facebook",children:Object(Y.jsx)(G.b,{})}),Object(Y.jsx)(Ee,{href:"/",target:"_blank","aria-label":"Instagram",children:Object(Y.jsx)(G.c,{})}),Object(Y.jsx)(Ee,{href:"/",target:"_blank","aria-label":"Twitter",children:Object(Y.jsx)(G.f,{})}),Object(Y.jsx)(Ee,{href:"/",target:"_blank","aria-label":"LinkedinIn",children:Object(Y.jsx)(G.d,{})})]})]})})]})})},Me=t(16),Ue=t.p+"static/media/svg-1.198c8835.svg",Ge=t.p+"static/media/svg-2.5f11287c.svg",Ye=t.p+"static/media/svg-3.20750a9d.svg",_e={id:"about",lightBg:!1,lightText:!0,lightTextDesc:!0,topLine:"Premium Bank",headline:"Unlimited Transactions with zero fees",description:"Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees",buttonLabel:"Get started",imgStart:!1,img:Ue,alt:"Car",dark:!0,primary:!0,darkText:!1},Ve=Object(Me.a)({id:"discover",lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Unlimited access",headline:"Login to your account at any time",description:"We have you covered no matter where you are located. All you need is an internet connection and a phone or computer",buttonLabel:"Learn more",imgStart:!0,img:Ge,alt:"Piggybank",dark:!1,primary:!1,darkText:!0},"dark",!1),Je={id:"signup",lightBg:!0,lightText:!1,lightTextDesc:!1,topLine:"Create a free account",headline:"Start saving money today",description:"Get access to our exclusive app that allows you to send unlimited transactions without getting charged any fees",buttonLabel:"Sign up",imgStart:!1,img:Ye,alt:"Car",dark:!1,primary:!1,darkText:!0};var Ne=function(){var n=Object(O.useState)(!1),e=Object(S.a)(n,2),t=e[0],i=e[1],a=function(){i(!t)};return console.log(t),Object(Y.jsxs)(Y.Fragment,{children:[Object(Y.jsx)(_,{isOpen:t,toggleIsOpen:a}),Object(Y.jsx)(Gn,{isOpen:t,toggleIsOpen:a}),Object(Y.jsx)(Xn,{}),Object(Y.jsx)(xe,Object(z.a)({},_e)),Object(Y.jsx)(xe,Object(z.a)({},Ve)),Object(Y.jsx)(ye,{}),Object(Y.jsx)(xe,Object(z.a)({},Je)),Object(Y.jsx)(Pe,{})]})};var We=function(){return Object(Y.jsx)(k.a,{children:Object(Y.jsx)(Ne,{})})},He=function(n){n&&n instanceof Function&&t.e(3).then(t.bind(null,55)).then((function(e){var t=e.getCLS,i=e.getFID,a=e.getFCP,c=e.getLCP,r=e.getTTFB;t(n),i(n),a(n),c(n),r(n)}))};w.a.render(Object(Y.jsx)(v.a.StrictMode,{children:Object(Y.jsx)(We,{})}),document.getElementById("root")),He()}},[[54,1,2]]]);
//# sourceMappingURL=main.9a522bc0.chunk.js.map