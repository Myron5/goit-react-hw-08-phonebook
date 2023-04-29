"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[242],{6242:function(n,e,t){t.r(e),t.d(e,{default:function(){return sn}});var r,o,a,i,l,c,s,d,u,x,p,h,f,b,m,v,j,g,Z,w=t(5861),y=t(9439),k=t(4687),P=t.n(k),C=t(2791),Y=t(8337),H=t(5705),O=t(6727),N=t(3458),V=t(6950),_=t(2083),B=t(7116),S=t(168),F=t(6444),E=t(184),L=F.ZP.div(r||(r=(0,S.Z)(["\n  display: inline-flex;\n  flex-direction: column;\n  gap: 40px;\n  padding: 40px 30px;\n\n  background-color: ",";\n  box-shadow: ",";\n  border: ",";\n  border-radius: ","px;\n"])),B.O9.white,B.YH.boxShadow,B.YH.border,B.YH.borderRadius),R=F.ZP.h2(o||(o=(0,S.Z)(["\n  display: inline-block;\n  color: ",";\n  ","\n"])),B.O9.txtBlack,B.xn.md),K=(0,F.ZP)(H.l0)(a||(a=(0,S.Z)(["\n  display: inline-flex;\n  flex-direction: column;\n  gap: 20px;\n"]))),T=F.ZP.div(i||(i=(0,S.Z)(["\n  position: relative;\n"]))),W=F.ZP.label(l||(l=(0,S.Z)(["\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 5px;\n  pointer-events: none;\n  transition: translate ",";\n\n  ","\n  color: ",";\n"])),B.YH.animation,(0,_.V4)(12,14,16),B.O9.txtBlack),q=(0,F.ZP)(H.gN)(c||(c=(0,S.Z)(["\n  padding: 5px 8px;\n  background-color: transparent;\n  border: none;\n  border-bottom: ",";\n\n  ","\n\n  &:focus ~ label {\n    translate: 0 -100%;\n    color: blue;\n  }\n"])),B.YH.border,(function(n){if(n.value)return"\n    & ~ label {\n      translate: 0 -100%;\n      color: blue;\n    } \n    "})),A=F.ZP.p(s||(s=(0,S.Z)(["\n  ","\n  max-width: 200px;\n  color: red;\n"])),(0,_.V4)(10,12,14)),M=function(n){var e=n.name;return(0,E.jsx)(H.Bc,{name:e,render:function(n){return(0,E.jsx)(A,{children:n})}})},$=F.ZP.button(d||(d=(0,S.Z)(["\n  ","\n  color: ",";\n\n  padding: 10px 15px;\n  background-color: ",";\n  border: none;\n  box-shadow: none;\n  transition: box-shadow ",";\n\n  &:hover,\n  &:focus {\n    box-shadow: ",";\n  }\n"])),(0,_.V4)(12,14,16),B.O9.txtBlack,B.O9.generalBackground,B.YH.animation,B.YH.boxShadow),G=function(n){var e=n.title,t=void 0===e?"Add contact":e,r=(0,V.TL)(),o=(0,V.gW)(),a=o.isLoading,i=o.isError,l=o.contacts,c=O.Ry().shape({name:O.Z_().max(50).required(),number:O.Z_().required().matches(B.Oj,"Phone number is not valid")});if(a)return(0,E.jsxs)(L,{children:[(0,E.jsx)(R,{children:t}),(0,E.jsx)(Y.$j,{})]});if(i||!l)return(0,E.jsxs)(L,{children:[(0,E.jsx)(R,{children:t}),"Error"]});var s=function(){var n=(0,w.Z)(P().mark((function n(e,t){var o,a,i,c;return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:if(o=t.resetForm,a=e.name,i=e.number,n.prev=2,!(0,_.Px)(l,a)){n.next=7;break}throw M({name:'Name "'.concat(a,'" is already in your contacts')});case 7:if(!(0,_.Cp)(l,i)){n.next=9;break}throw M({name:'Number "'.concat(i,'" is already in your contacts')});case 9:return n.next=11,r((0,N.uK)(e));case 11:(0,_.dN)("\u2705 Contact was successfully added",_.MR),o(),n.next=19;break;case 15:n.prev=15,n.t0=n.catch(2),(0,_.dN)("\u274c We couldn't add your contact, (".concat(null===(c=n.t0.props)||void 0===c?void 0:c.name,")"),_.pn),console.log(n.t0);case 19:case"end":return n.stop()}}),n,null,[[2,15]])})));return function(e,t){return n.apply(this,arguments)}}();return(0,E.jsxs)(L,{children:[(0,E.jsx)(R,{children:t}),(0,E.jsx)(H.J9,{initialValues:{name:"",number:""},onSubmit:s,validationSchema:c,children:function(n){var e=n.values;return(0,E.jsxs)(K,{autoComplete:"off",children:[(0,E.jsxs)(T,{children:[(0,E.jsx)(q,{name:"name",type:"text",value:e.name}),(0,E.jsx)(W,{htmlFor:"name",children:"Name"}),(0,E.jsx)(M,{name:"name"})]}),(0,E.jsxs)(T,{children:[(0,E.jsx)(q,{name:"number",type:"tel",value:e.number}),(0,E.jsx)(W,{htmlFor:"number",children:"Number"}),(0,E.jsx)(M,{name:"number"})]}),(0,E.jsx)($,{type:"submit",children:"Add contact"})]})}})]})},z=F.ZP.li(u||(u=(0,S.Z)(["\n  display: flex;\n\n  justify-content: space-between;\n  align-items: center;\n  flex-wrap: wrap;\n  gap: 30px;\n\n  padding: 15px 20px;\n\n  box-shadow: ",";\n"])),B.YH.boxShadow),I=F.ZP.p(x||(x=(0,S.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n\n  width: 200px;\n\n  overflow: hidden;\n"]))),J=F.ZP.p(p||(p=(0,S.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n\n  width: 200px;\n\n  overflow: hidden;\n"]))),D=(F.ZP.p(h||(h=(0,S.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 8px;\n\n  width: 130px;\n  ","\n\n  overflow: hidden;\n"])),(0,_.V4)(8,10,12)),F.ZP.button(f||(f=(0,S.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 15px;\n  padding: 8px 15px;\n  aspect-ratio: 1 / 1;\n\n  ","\n  color: ",";\n\n  background-color: ",";\n  border-radius: 50%;\n  border: none;\n  box-shadow: none;\n  transition: box-shadow ",";\n\n  &:hover,\n  &:focus {\n    box-shadow: ",";\n  }\n"])),(0,_.V4)(12,14,16),B.O9.txtBlack,B.O9.generalBackground,B.YH.animation,B.YH.boxShadow)),Q=t(1213),U=function(n){var e=n.contact,t=e.id,r=e.name,o=e.number,a=(0,V.TL)(),i=function(){var n=(0,w.Z)(P().mark((function n(e){return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,a((0,N.GK)(e));case 3:(0,_.dN)("\u2705 Contact was deleted successfully",_.MR),n.next=10;break;case 6:n.prev=6,n.t0=n.catch(0),console.log(n.t0),(0,_.dN)("\u274c Contact wasn't deleted sucessfully",_.pn);case 10:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(e){return n.apply(this,arguments)}}();return(0,E.jsxs)(z,{children:[(0,E.jsxs)(I,{children:[(0,E.jsx)(Q.Rq5,{}),r]}),(0,E.jsxs)(J,{children:[(0,E.jsx)(Q.Ya4,{size:20}),o]}),(0,E.jsx)(D,{type:"button",onClick:function(){return i(t)},children:(0,E.jsx)(Q.ySC,{})})]})},X=F.ZP.ul(b||(b=(0,S.Z)(["\n  display: inline-flex;\n  flex-direction: column;\n  gap: 20px;\n  padding: 30px 40px;\n\n  margin-top: 35px;\n"]))),nn=function(n){var e=n.filterValue,t=(0,V.gW)(),r=t.isLoading,o=t.isError,a=t.contacts,i=(0,C.useMemo)((function(){return e?a.filter((function(n){var t=n.name,r=n.number;return(0,_.K4)(t,e)||(0,_.K4)(r,e)})):a}),[a,e]);return r?(0,E.jsx)(X,{children:(0,E.jsx)(Y.$j,{})}):o||!a?(0,E.jsx)(X,{children:"Error"}):(0,E.jsx)("div",{children:(0,E.jsx)(X,{children:i.map((function(n){return(0,E.jsx)(U,{contact:n},n.id)}))})})},en=t(9126),tn=F.ZP.div(m||(m=(0,S.Z)(["\n  display: inline-flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 40px;\n"]))),rn=F.ZP.h2(v||(v=(0,S.Z)(["\n  display: inline-block;\n  color: ",";\n  ","\n"])),B.O9.txtBlack,B.xn.md),on=F.ZP.div(j||(j=(0,S.Z)(["\n  display: inline-flex;\n  align-items: center;\n  gap: 20px;\n  position: relative;\n\n  border: none;\n  border-bottom: ",";\n"])),B.YH.border),an=F.ZP.input(g||(g=(0,S.Z)(["\n  padding: 5px 8px;\n  background-color: transparent;\n  border: none;\n\n  ","\n\n  &:focus ~ label {\n    translate: 0 -100%;\n    color: blue;\n  }\n"])),(function(n){if(n.value)return"\n    & ~ label {\n      translate: 0 -100%;\n      color: blue;\n    } \n    "})),ln=F.ZP.label(Z||(Z=(0,S.Z)(["\n  display: inline-block;\n  position: absolute;\n  top: 0;\n  left: 5px;\n  pointer-events: none;\n  transition: translate ",";\n\n  ","\n  color: ",";\n"])),B.YH.animation,(0,_.V4)(12,14,16),B.O9.txtBlack),cn=function(n){var e=n.title,t=void 0===e?"Contacts":e,r=n.value,o=n.handleOnChange;return(0,E.jsxs)(tn,{children:[(0,E.jsx)(rn,{children:t}),(0,E.jsxs)(on,{children:[(0,E.jsx)(an,{name:"filter",type:"text",onChange:function(n){var e=n.target.value;o(e)},value:r}),(0,E.jsx)(en.dVI,{}),(0,E.jsx)(ln,{htmlFor:"filter",children:"Find contacts by name"})]})]})},sn=function(){var n=(0,C.useState)(""),e=(0,y.Z)(n,2),t=e[0],r=e[1],o=(0,V.TL)();(0,C.useEffect)((function(){var n=function(){var n=(0,w.Z)(P().mark((function n(){return P().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,o((0,N.yF)());case 3:n.next=9;break;case 5:n.prev=5,n.t0=n.catch(0),console.log(n.t0),(0,_.dN)("\u274c We didn't get your contacts",_.pn);case 9:case"end":return n.stop()}}),n,null,[[0,5]])})));return function(){return n.apply(this,arguments)}}();n()}),[o]);return(0,E.jsx)(Y.Yw,{children:(0,E.jsx)(Y.$0,{title:"Phonebook",icon:(0,E.jsx)(en.lfG,{}),children:(0,E.jsxs)(Y.hs,{children:[(0,E.jsx)(G,{title:"Add contact"}),(0,E.jsxs)(Y.Tw,{children:[(0,E.jsx)(cn,{title:"Contacts",value:t,handleOnChange:function(n){r(n)}}),(0,E.jsx)(nn,{filterValue:t})]})]})})})}}}]);
//# sourceMappingURL=242.7999ecdd.chunk.js.map