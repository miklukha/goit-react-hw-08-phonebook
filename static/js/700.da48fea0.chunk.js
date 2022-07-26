"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[700],{9700:function(e,t,n){n.r(t),n.d(t,{Contacts:function(){return q}});var a=n(4554),r=n(1614),s=n(7924),o=n(890),i=n(1413),l=n(6151),c=n(8892),d=n(5290),u=n(9434),m=n(9085),h=(n(5462),n(4770)),x=n(184);function p(){var e,t,n=(0,u.I0)(),r=(0,u.v9)(h.lP.getContacts),s=(0,d.cI)(),o=s.register,p=s.handleSubmit,f=s.formState.errors,v=s.reset;return(0,x.jsxs)(a.Z,{component:"form",onSubmit:p((function(e){var t=e.name;if(r.find((function(e){return e.name.toLowerCase()===t.toLowerCase()})))return m.Am.info("".concat(t," is already in contacts")),void v();try{n(h.mh.addContact(e)),m.Am.success("Contact has added")}catch(a){m.Am.error("Error when adding material"),console.log(a)}v()})),sx:{mt:1,width:"400px",display:"flex",margin:"0 auto",flexDirection:"column",alignItems:"center"},children:[(0,x.jsx)(c.Z,(0,i.Z)({margin:"normal",required:!0,fullWidth:!0,id:"outlined-required",label:"Name",name:"name",autoFocus:!0,autoComplete:"off",helperText:(null===f||void 0===f?void 0:f.name)&&((null===f||void 0===f||null===(e=f.name)||void 0===e?void 0:e.message)||"This field is required")},o("name",{required:!0,pattern:{value:/^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$/,message:"Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"}}))),(0,x.jsx)(c.Z,(0,i.Z)({margin:"normal",required:!0,fullWidth:!0,type:"tel",id:"outlined-required",label:"Number",name:"number",autoFocus:!0,autoComplete:"off",helperText:(null===f||void 0===f?void 0:f.number)&&((null===f||void 0===f||null===(t=f.number)||void 0===t?void 0:t.message)||"This field is required")},o("number",{type:"tel",required:!0,pattern:{value:/\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/,message:"Phone number must be digits and can contain spaces, dashes, parentheses and can start with +."}}))),(0,x.jsx)(l.Z,{type:"submit",variant:"contained",sx:{mt:3,mb:2},children:"Add contact"})]})}var f=n(7247),v=n(1889),g=n(3400),b=n(493),j=n(4852),Z=n(6259);function C(){var e=(0,u.I0)(),t=(0,u.v9)(h.lP.getVisibleContacts),n=(0,u.v9)(h.lP.getIsLoading);return t&&(0,x.jsx)(a.Z,{children:(0,x.jsx)(v.ZP,{item:!0,xs:12,md:6,children:(0,x.jsx)(b.Z,{children:t.map((function(t){var a=t.id,r=t.name,s=t.number;return(0,x.jsxs)(j.ZP,{sx:{display:"flex",justifyContent:"space-between",width:"400px"},secondaryAction:(0,x.jsx)(g.Z,{edge:"end","aria-label":"delete",disabled:n,onClick:function(){return function(t){return e(h.mh.deleteContact(t))}(a)},children:(0,x.jsx)(f.Z,{})}),children:[(0,x.jsx)(Z.Z,{primary:r,sx:{flexBasis:"150px"}}),(0,x.jsx)(Z.Z,{secondary:s,sx:{flexBasis:"150px"}})]},a)}))})})})}function y(){var e=(0,u.I0)(),t=(0,u.v9)(h.lP.getFilter);return(0,x.jsx)(c.Z,{id:"standard-search",label:"Find contacts by name",type:"search",variant:"standard",name:"query",value:t,autoFocus:!0,autoComplete:"off",onChange:function(t){return e((0,h.M6)(t.currentTarget.value))}})}var w=n(3767),A=n(2791);function q(){var e=(0,u.I0)(),t=(0,u.v9)(h.lP.getContacts);return(0,A.useEffect)((function(){e(h.mh.fetchContacts())}),[e]),(0,x.jsx)(r.Z,{maxWidth:"sm",children:(0,x.jsxs)(a.Z,{sx:{pt:8,pb:6},children:[(0,x.jsx)(o.Z,{component:"h1",variant:"h2",align:"center",color:"text.primary",gutterBottom:!0,children:"Phonebook"}),(0,x.jsx)(p,{}),(0,x.jsx)(s.Z,{variant:"middle"}),(0,x.jsx)(o.Z,{component:"h2",variant:"h3",align:"center",color:"text.primary",gutterBottom:!0,sx:{mt:"20px"},children:"Contacts"}),0!==t.length?(0,x.jsxs)(w.Z,{spacing:2,sx:{alignItems:"center"},children:[(0,x.jsx)(y,{}),(0,x.jsx)(C,{})]}):(0,x.jsx)(o.Z,{component:"p",variant:"h6",color:"text.primary",align:"center",children:"You haven't contacts yet..."}),(0,x.jsx)(m.Ix,{autoClose:3e3})]})})}}}]);
//# sourceMappingURL=700.da48fea0.chunk.js.map