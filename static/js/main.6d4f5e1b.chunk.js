(this["webpackJsonpjschaub-portfolio"]=this["webpackJsonpjschaub-portfolio"]||[]).push([[0],{115:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),o=a(17),i=a.n(o),r=(a(67),a(68),a(33),a(69),a(18)),c=a(44),s=a.n(c),m=a(12);a(87),a(88);function u(){var e=Object(n.useState)({dots:!0,infinite:!0,speed:500,slidesToShow:3,slidesToScroll:1}),t=Object(r.a)(e,1)[0],o=[{img:a(89),title:"Project 2 - Cocktail_Coterie",description:"Description of Project: This app allows the user in seclusion during the covid pandemic to socialize with friends while staying safe at home. The user can organize an online cocktail party and stay socially connected with friends. Searching for a favorite cocktail by ingredient will bring up recipes containing that ingredient.",technologies:"Technologies Used: Axios, bCrypt, Bootstrap, Express, Express-Session, Handlebars, Javascript, jQuery, Node, Node FS, Passport, Sequelize",deploy:"https://cocktail-coterie.herokuapp.com/",git:"https://github.com/JulieAnn2330/cocktail_coterie"},{img:a(90),title:"Project 1 - Spacex/NASA Flight Data",description:"Description of Project: This interactive site provides information about NASA, SpaceX and their relative flight data information. Explore the history of NASA and SpaceX with interactive timelines that include links for additional organizational and mission detail, or pick a mission from the dropdown and click the link in the data table to view specific mission details.",technologies:"Technologies Used: HTML, Bulma, CSS, Javascript, jQuery, AJAX, API Calls NASA, SpaceX and DarkSky, moment.js",deploy:"https://reidbuckingham48.github.io/spacex-nasa-flight-data/",git:"https://github.com/JulieAnn2330/spacex-nasa-flight-data"},{img:a(91),title:"Google Book Library",description:"Description of Project: This interactive application allows the user to create a library of saved books using the GoogleBooks API call. Users can view the books on the GoogleBooks site, save books to their library and remove books from their library.",technologies:"Technologies Used: API Calls, Axios, Bootstrap, CSS, Heroku, HTML, JavaScript, mongoDB, node.js, React",deploy:"https://vast-peak-23165.herokuapp.com/",git:"https://github.com/JulieAnn2330/Google-Books-Library"},{img:a(92),title:"Midtown Full Stack Employee Directory",description:"Description of Project: This project allows employees in a company to view non-sensitive information about company employees. The directory can be sorted by any column.",technologies:"Technologies Used: React",deploy:"https://julieann2330.github.io/Midtown-Full-Stack-Employee-Directory/",git:"https://github.com/JulieAnn2330/Midtown-Full-Stack-Employee-Directory"},{img:a(93),title:"Eat-Da-Burger",description:"Description of Project: This interactive application takes users through a restaurant experience. Users can order the burger of their choice, devour the burger and trash the burger all with the click of a button.",technologies:"Technologies Used: AJAX, CSS, Express, Handlebars, HTML, JavaScript, MySQL, Node, ORM",deploy:"https://afternoon-plains-66165.herokuapp.com/",git:"https://github.com/JulieAnn2330/burger-logger"}];return l.a.createElement("div",{className:"App"},l.a.createElement(m.a,null,l.a.createElement("style",null,"body { background-color: slategray; }")),l.a.createElement("h1",{className:"portfolioLabel"},"Portfolio Work"),l.a.createElement(s.a,t,o.map((function(e,t){return l.a.createElement("div",{key:t,className:"img-card"},l.a.createElement("img",{className:"img",src:e.img,alt:"project"}),l.a.createElement("div",{class:"card-body"},l.a.createElement("div",{className:"card-title"},e.title),l.a.createElement("div",{className:"card-text"},e.description),l.a.createElement("div",{className:"card-text"},e.technologies),l.a.createElement("div",{className:"card-text"},l.a.createElement("a",{href:e.deploy,target:"blank"},"Link to Deployed Project")),l.a.createElement("div",{className:"card-text"},l.a.createElement("a",{href:e.git,target:"blank"},"Link to GitHub Repo"))))}))))}var d=a(15),p=a(6),b=a(47),g=a(118),h=a(119);function f(){var e=Object(b.a)(["\n  .navbar { background-color: transparent}\n  a, .navbar-nav, .navbar-light .nav-link {\n    color: white;\n        &:hover { color: red; };\n        &:visited { color: blue }\n  "]);return f=function(){return e},e}var E=a(48).a.div(f()),v=function(){return l.a.createElement(E,null,l.a.createElement(g.a,{expand:"lg"},l.a.createElement(g.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(g.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(h.a,{className:"ml-auto"},l.a.createElement(h.a.Item,null,l.a.createElement(d.b,{to:"/"},"Home")),l.a.createElement(h.a.Item,null,l.a.createElement(d.b,{to:"/about"},"About")),l.a.createElement(h.a.Item,null,l.a.createElement(d.b,{to:"/portfolio"},"Portfolio")),l.a.createElement(h.a.Item,null,l.a.createElement(d.b,{to:"/contact"},"Contact"))))))},k=a(24),y=a(21),S=a(53),w=a.n(S),j=a(16),x=a(57),N=a(54),A=a.n(N),P=a(55),T=a.n(P),C=a(56),O=a.n(C);function M(){var e=Object(n.useState)({}),t=Object(r.a)(e,2),a=t[0],o=t[1],i={email:function(e){return e&&/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e)},message:function(e){return!!e}},c=function(){for(var e={},t=!1,a=0,n=Object.keys(p);a<n.length;a++){var l=n[a];e[l]=!i[l](p[l]),t|=e[l]}return o((function(t){return Object(y.a)(Object(y.a)({},t),e)})),!t},s=function(e){if(a[e])return l.a.createElement("p",{className:"errorMsg"},"Please enter a valid ",e,".")};Object(n.useEffect)((function(){Object.keys(a).length>0&&c()}));var u=Object(n.useState)({email:"",message:""}),d=Object(r.a)(u,2),p=d[0],b=d[1],g=function(e){e.persist(),b((function(t){return Object(y.a)(Object(y.a)({},t),{},Object(k.a)({},e.target.id,e.target.value))}))},h=Object(n.useState)({submitting:!1,status:null}),f=Object(r.a)(h,2),E=f[0],v=f[1],S=function(e,t){v({submitting:!1,status:{ok:e,msg:t}}),e&&(o({}),b({email:"",message:""}))};return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement("style",null,"body { background-color: slategray; }")),l.a.createElement(j.a,{xs:!0,lg:"6"},l.a.createElement("ul",{class:"is-bullet"},l.a.createElement("li",null,l.a.createElement("b",null,"Email:")," ",l.a.createElement("a",{href:"mailto:julie.schaub@midtownfullstack.com",target:"blank",class:"link"},"julie.schaub@midtownfullstack.com")),l.a.createElement("li",null,l.a.createElement("a",{class:"link",href:"https://github.com/JulieAnn2330",target:"blank"},"Link to GitHub Repositories")),l.a.createElement("li",null,l.a.createElement("a",{class:"link",href:"https://www.linkedin.com/in/julie-schaub",target:"blank"},"LinkedIn Profile")),l.a.createElement("li",null,l.a.createElement("a",{class:"link",href:A.a,target:"blank"},"Resume")),l.a.createElement("li",null,l.a.createElement("a",{class:"link",href:T.a,target:"blank"},"Technical Writing Sample")),l.a.createElement("li",null,l.a.createElement("b",null,"Cell/Text:")," 913.284.6548"),l.a.createElement("li",null,l.a.createElement("b",null,"Location:")," Midtown, Kansas City, MO"))),l.a.createElement(j.a,{xs:!0,lg:"6"},l.a.createElement("h1",{className:"contactLabel"},"Contact Me"),l.a.createElement("form",{onSubmit:function(e){e.preventDefault(),c()&&(v({submitting:!0}),w()({method:"POST",url:"https://formspree.io/xwkryppl",data:p}).then((function(e){S(!0,"Thanks!")})).catch((function(e){S(!1,e.response.data.error)})))},noValidate:!0},l.a.createElement("label",{htmlFor:"email",className:"emailLabel"},"Email:"),l.a.createElement("input",{id:"email",type:"email",name:"email",onChange:g,value:p.email,className:a.email?"error":""}),s("email"),l.a.createElement("br",null),l.a.createElement("label",{htmlFor:"message",className:"messageLabel"},"Message:"),l.a.createElement("textarea",{id:"message",name:"message",onChange:g,value:p.message,className:a.message?"error":""}),s("message"),l.a.createElement("br",null),l.a.createElement("button",{type:"submit",disabled:E.submitting,className:"button"},"Submit"),E.status&&l.a.createElement("p",{className:E.status.ok?"":"errorMsg"},E.status.msg))),l.a.createElement(j.a,{xs:6,md:4},l.a.createElement(x.a,{className:"keyboard",src:O.a})))}var J=a(59),L=a(58),D=a.n(L),B=function(){return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement("style",null,"body { background-color: slategray; }")),l.a.createElement(J.a,null,l.a.createElement(j.a,{md:"auto"},l.a.createElement("img",{className:"imageProfile",src:D.a,alt:"Julie Ann Schaub"})),l.a.createElement(j.a,{xs:!0,lg:"6"},l.a.createElement("p",{className:"aboutMeTitle"},"About Me"),l.a.createElement("p",{className:"aboutMe"},"I'm a Full Stack Web Developer with a background in education, customer service and management. Recently earned a certificate in Full Stack Development from the University of Kansas Coding Boot Camp, with newly developed skills in SQL, JavaScript, HTML, CSS, React, and certificates in Agile Foundations and Project Management Foundations. Known as a detail-oriented, innovative problem-solver, passionate about coding and debugging to ensure a more intuitive end-user experience. Successfully worked with an experienced software team developing a proprietary, web-based interface for 600 users. Excited to leverage skills in the future as part of a fast-paced, quality-driven team in order to build better experiences on the web."))))},F=function(){return l.a.createElement("div",{className:"bg_image"},l.a.createElement(m.a,null,l.a.createElement("style",null,"body { background-color: black; }")),l.a.createElement("h1",{className:"title"},"Julie Schaub"),l.a.createElement("h3",{className:"subtitle"},"Professional Portfolio"))};var G=function(){return l.a.createElement("div",{style:{color:"white",textAlign:"center"}},"Created by Julie Schaub, University of Kansas Full Stack Boot Camp, October 2020")};var H=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{basename:"/jschaub-portfolio"},l.a.createElement(v,null),l.a.createElement(p.c,null,l.a.createElement(p.a,{exact:!0,path:"/",component:F}),l.a.createElement(p.a,{path:"/about",component:B}),l.a.createElement(p.a,{path:"/portfolio",component:u}),l.a.createElement(p.a,{path:"/contact",component:M})),l.a.createElement(G,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(H,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},54:function(e,t,a){e.exports=a.p+"static/media/Julie Schaub Resume.134c5263.pdf"},55:function(e,t,a){e.exports=a.p+"static/media/Technical-Writing-Sample.71996e20.pdf"},56:function(e,t,a){e.exports=a.p+"static/media/computer-keyboard-blue_2.9006be49.jpg"},58:function(e,t,a){e.exports=a.p+"static/media/new-profile-pic.59ff292c.png"},62:function(e,t,a){e.exports=a(115)},67:function(e,t,a){},68:function(e,t,a){},69:function(e,t,a){},89:function(e,t,a){e.exports=a.p+"static/media/Cocktail_Coterie.1e4911de.PNG"},90:function(e,t,a){e.exports=a.p+"static/media/Nasa.ddf55214.PNG"},91:function(e,t,a){e.exports=a.p+"static/media/GoogleBooks.02e716cc.PNG"},92:function(e,t,a){e.exports=a.p+"static/media/Employee.8719ad35.PNG"},93:function(e,t,a){e.exports=a.p+"static/media/Burger.07a6ffb5.PNG"}},[[62,1,2]]]);
//# sourceMappingURL=main.6d4f5e1b.chunk.js.map