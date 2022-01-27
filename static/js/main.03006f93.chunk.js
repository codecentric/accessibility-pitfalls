(this["webpackJsonpaccessibility-pitfalls"]=this["webpackJsonpaccessibility-pitfalls"]||[]).push([[0],{113:function(e,a,t){},219:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t.n(s),i=t(25),l=t.n(i),r=(t(112),t(113),t(11)),c=t(59),d=t(18),o=t(26),m=t(17),j=t(1),b=function(e){var a=0===e.evolution?"-1":void 0;return Object(j.jsxs)(m.a,{className:"d-md-block bg-light sidebar",activeKey:"/my-profile",onSelect:function(e){return null},children:[Object(j.jsx)("div",{className:"sidebar-sticky"}),Object(j.jsx)(m.a.Item,{children:Object(j.jsx)(m.a.Link,{tabIndex:a,href:"#profile",children:"My Profile"})}),Object(j.jsx)(m.a.Item,{children:Object(j.jsx)(m.a.Link,{tabIndex:a,href:"#settings",children:"Settings"})}),Object(j.jsx)(m.a.Item,{children:Object(j.jsx)(m.a.Link,{tabIndex:a,href:"#security",children:"Security"})}),Object(j.jsx)(m.a.Item,{children:Object(j.jsx)(m.a.Link,{tabIndex:a,href:"#notifications",children:"Notifications"})})]})},u=t(43),h=function(e){var a=e.evolution,t=0===a?"-1":void 0,s=0===a?"#73A1FF":"#F8F8FF";return Object(j.jsx)(u.a,{bg:"primary",variant:"dark",children:Object(j.jsxs)(c.a,{children:[Object(j.jsx)(u.a.Brand,{href:"#dashboard",tabIndex:t,children:"Sportify"}),Object(j.jsxs)(m.a,{className:"me-auto",children:[Object(j.jsx)(m.a.Link,{style:{color:s},href:"#dashboard",tabIndex:t,children:"Dashboard"}),Object(j.jsx)(m.a.Link,{style:{color:s},href:"#training",tabIndex:t,children:"Training"}),Object(j.jsx)(m.a.Link,{style:{color:s},href:"#explore",tabIndex:t,children:"Explore"})]}),Object(j.jsx)(u.a.Toggle,{}),Object(j.jsx)(u.a.Collapse,{className:"justify-content-end",children:Object(j.jsxs)(u.a.Text,{style:{color:s},children:["Signed in as:"," ",Object(j.jsx)("a",{href:"#profile",tabIndex:t,children:"Emily H\xfb"})]})})]})})},x=t(107),O=t(10),p=t(6),N={SIMPLE:"SIMPLE",FIRST_NAME:"FIRST_NAME",COMPLETE_NAME:"COMPLETE_NAME",CUSTOM:"CUSTOM",MISTER:"MISTER",MISSES:"MISSES"},f=function(e){var a,t=e.setFieldValue,s=e.values,n=(a={},Object(p.a)(a,N.FIRST_NAME,"Hey ".concat(s.firstName,"!")),Object(p.a)(a,N.COMPLETE_NAME,"Hey ".concat(s.firstName," ").concat(s.lastName,"!")),Object(p.a)(a,N.SIMPLE,"Hey there!"),Object(p.a)(a,N.MISSES,"Hey Mrs. ".concat(s.lastName,"!")),Object(p.a)(a,N.MISTER,"Hey Mr. ".concat(s.lastName,"!")),Object(p.a)(a,N.CUSTOM,"Hey ".concat(s.customSalutation||"(custom name)")),a);return Object(j.jsx)("fieldset",{children:Object(j.jsxs)(O.a.Group,{as:o.a,className:"mb-3",children:[Object(j.jsx)(O.a.Label,{as:"legend",column:!0,sm:2,className:"text-muted",children:"Salutation *"}),Object(j.jsx)(d.a,{sm:10,children:Object.keys(n).map((function(e){var a="CUSTOM"===e,i="CUSTOM"===s.salutation,l=a&&i?Object(j.jsxs)(j.Fragment,{children:["Hey"," ",Object(j.jsx)("input",{type:"text",placeholder:"some custom name",value:s.customSalutation,onChange:function(e){return t("customSalutation",e.target.value)}})]}):n[e];return Object(j.jsx)(O.a.Check,{type:"radio",tabIndex:"-1",className:"mb-2",onChange:function(){t("salutation",e)},label:l,checked:s.salutation===e,name:"formHorizontalRadios",id:"formHorizontalRadios1"},e)}))})]})})},v=t(63),y=t(31),S=function(e){var a=e.isNameSeparated,t=e.tabIndex,s=e.handleChange,n=e.handleBlur,i=e.touched,l=e.errors,r=e.values;return a?Object(j.jsxs)(O.a.Group,{as:o.a,className:"mb-3",children:[Object(j.jsx)(O.a.Label,{column:!0,sm:"2",className:"text-muted",children:"Name *"}),Object(j.jsxs)(d.a,{sm:"5",children:[Object(j.jsx)(O.a.Control,{tabIndex:t,type:"text",value:r.firstName,name:"firstName",onChange:s,onBlur:n,isValid:i.firstName&&!l.firstName,isInvalid:!!l.firstName,placeholder:"First name"}),Object(j.jsx)(O.a.Control.Feedback,{type:"invalid",children:l.firstName})]}),Object(j.jsxs)(d.a,{sm:"5",children:[Object(j.jsx)(O.a.Control,{tabIndex:t,type:"text",name:"lastName",value:r.lastName,onBlur:n,onChange:s,isInvalid:!!l.lastName,isValid:i.lastName&&!l.lastName,placeholder:"Last name"}),Object(j.jsx)(O.a.Control.Feedback,{type:"invalid",children:l.lastName})]})]}):Object(j.jsxs)(O.a.Group,{as:o.a,className:"mb-3",children:[Object(j.jsx)(O.a.Label,{column:!0,sm:"2",className:"text-muted",children:"Name *"}),Object(j.jsxs)(d.a,{sm:"10",children:[Object(j.jsx)(O.a.Control,{tabIndex:t,type:"text",value:r.completeName,name:"completeName",onChange:s,onBlur:n,isValid:i.completeName&&!l.completeName,isInvalid:!!l.completeName,placeholder:"Name"}),Object(j.jsx)(O.a.Control.Feedback,{type:"invalid",children:l.completeName})]})]})},g=function(e){var a=e.evolution,t=0===a?"-1":void 0,s=a<2,n=y.a().shape({salutation:y.b().oneOf(Object.keys(N),"Must be one of the provided options"),customSalutation:y.b(),firstName:s?y.b().required("First name is required").min(3,"Not long enough").matches(/^[a-zA-Z]+$/,"No special characters please"):void 0,lastName:s?y.b().required("Last name is required").min(3,"Not long enough").matches(/^[a-zA-Z]+$/,"No special characters please"):void 0,completeName:s?void 0:y.b().required("Name is required"),emailAddress:y.b().email("Please provide a valid email address").required("Email address is required"),gender:y.b().oneOf(["MALE","FEMALE"],"Gender is required")});return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"h2",style:{marginBottom:40},children:"My Profile"}),Object(j.jsx)(x.a,{validationSchema:n,onSubmit:function(e,a){var t=a.setSubmitting;setTimeout((function(){alert(JSON.stringify(e,null,2)),t(!1)}),100)},initialValues:{salutation:"FIRST_NAME",customSalutation:"",firstName:"Emily",lastName:"H\xfb",completeName:"Emily H\xfb",gender:"MALE",emailAddress:"emily.hu@icloud.com"},children:function(e){var n=e.handleSubmit,i=e.handleChange,l=e.handleBlur,r=e.values,c=e.touched,m=e.isSubmitting,b=(e.isValid,e.errors),u=e.setFieldValue;return Object(j.jsxs)(O.a,{noValidate:!0,onSubmit:n,children:[Object(j.jsx)(S,{isNameSeparated:s,errors:b,values:r,touched:c,tabIndex:t,handleChange:i,handleBlur:l}),a<3&&Object(j.jsxs)(O.a.Group,{as:o.a,className:"mb-3",controlId:"gender",children:[Object(j.jsx)(O.a.Label,{column:!0,sm:"2",className:"text-muted",children:"Gender *"}),Object(j.jsx)(d.a,{sm:"10",children:Object(j.jsxs)(O.a.Select,{tabIndex:t,disabled:!0,isValid:c.gender&&!b.gender,isInvalid:!!b.gender,onChange:i,value:r.gender,name:"gender",children:[Object(j.jsx)("option",{value:"MALE",children:"Male"}),Object(j.jsx)("option",{value:"FEMALE",children:"Female"})]})})]}),a>=3&&Object(j.jsx)(f,{errors:b,values:r,setFieldValue:u}),Object(j.jsxs)(O.a.Group,{as:o.a,className:"mb-3",controlId:"email",children:[Object(j.jsx)(O.a.Label,{column:!0,sm:"2",className:"text-muted",children:"Email address *"}),Object(j.jsxs)(d.a,{sm:"10",children:[Object(j.jsx)(O.a.Control,{tabIndex:t,type:"email",value:r.emailAddress,onChange:i,onBlur:l,isValid:c.emailAddress&&!b.emailAddress,isInvalid:!!b.emailAddress,name:"emailAddress",placeholder:"Email address"}),Object(j.jsx)(O.a.Text,{className:"text-muted",children:"We'll never share your email address with anyone else."}),Object(j.jsx)(O.a.Control.Feedback,{type:"invalid",children:b.emailAddress})]})]}),Object(j.jsx)(v.a,{tabIndex:t,variant:"primary",type:"submit",disabled:m,children:"Save"})]})}})]})},I=t(222),E=function(){var e=Object(s.useState)(0),a=Object(r.a)(e,2),t=a[0],n=a[1];return Object(j.jsxs)("div",{style:{height:"100%"},children:[Object(j.jsx)(h,{evolution:t}),Object(j.jsx)(c.a,{style:{marginTop:30},children:Object(j.jsxs)(o.a,{children:[Object(j.jsx)(d.a,{sm:12,md:2,id:"sidebar-wrapper",children:Object(j.jsx)(b,{evolution:t})}),Object(j.jsx)(d.a,{md:{span:9,offset:1},id:"page-content-wrapper",children:Object(j.jsx)(g,{evolution:t})})]})}),Object(j.jsx)(I.a,{style:{position:"absolute",bottom:30,left:30},children:Array.from(Array(4).keys()).map((function(e){return Object(j.jsx)(v.a,{tabIndex:"-1",variant:e===t?"primary":"secondary",onClick:function(){return n(e)},children:e},e)}))})]})};l.a.render(Object(j.jsx)(n.a.StrictMode,{children:Object(j.jsx)(E,{})}),document.getElementById("root"))}},[[219,1,2]]]);
//# sourceMappingURL=main.03006f93.chunk.js.map