(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{28:function(e,t,n){},40:function(e,t,n){},41:function(e,t,n){},42:function(e,t,n){},43:function(e,t,n){},54:function(e,t,n){},55:function(e,t,n){},57:function(e,t){},58:function(e,t,n){},84:function(e,t,n){},85:function(e,t,n){},86:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){},92:function(e,t,n){},93:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n.n(a),i=n(44),c=n.n(i),r=(n(54),n.p,n(55),n(6)),o=n(4),l=n.n(o),u=n(9),d=n(5),j=(n(57),n(58),n(45)),h=n.n(j).a.create({baseURL:"https://the-real-bon-app.herokuapp.com",withCredentials:!0}),p=n(10),b=(n(40),n(0));var m=Object(r.g)((function(e){var t=Object(a.useState)((null===e||void 0===e?void 0:e.ingredientsFromHome)||[""]),n=Object(d.a)(t,2),s=n[0],i=n[1];return Object(a.useEffect)((function(){"function"===typeof e.onIngredientInput&&(console.log("i am in use effect and the ingredients are: ",s),e.onIngredientInput(s))}),[s]),Object(b.jsx)("div",{children:Object(b.jsxs)("form",{children:[s.map((function(e,t){return Object(b.jsxs)("div",{className:"one-ingredient",children:[Object(b.jsx)("input",{className:"add-ingredient",type:"text",value:s[t],onChange:function(e){return function(e,t){console.log("yep smtg definitely changed");var n=Object(p.a)(s);n[t]=e.target.value,console.log("and the new ingredients are...",n),i(n)}(e,t)}}),Object(b.jsx)("img",{className:"ingredient-image",src:"https://themealdb.com/images/ingredients/"+s[t]+".png",alt:""}),s.length>1&&Object(b.jsx)("button",{className:"ingredient-delete",onClick:function(e){return function(e,t){e.preventDefault();var n=Object(p.a)(s);n.splice(t,1),i(n)}(e,t)},children:Object(b.jsx)("i",{className:"fas fa-trash-alt"})}),Object(b.jsx)("br",{})]},t)})),s.length<5&&Object(b.jsx)("button",{className:"ingredient-add-button",onClick:function(e){e.preventDefault(),i([].concat(Object(p.a)(s),[""]))},children:Object(b.jsx)("i",{className:"fas fa-plus-circle"})})]})})})),f=n(12),O=n(13),g=n(15),x=n(14),v=(n(84),n(11)),y=n(2),N=(n(85),n(86),n(7)),C=n(8),k=s.a.createContext(),w=function(e){var t=Object(a.useState)(null),n=Object(d.a)(t,2),s=n[0],i=n[1],c=Object(a.useState)(!0),r=Object(d.a)(c,2),o=r[0],l=r[1];Object(a.useEffect)((function(){h.get("/is-loggedin").then((function(e){l(!1),i(e.data.currentUser)})).catch((function(){i(null),l(!1)}))}),[]);var u=Boolean(s);return Object(b.jsx)(k.Provider,{value:{currentUser:s,isLoading:o,isLoggedIn:u,setCurrentUser:i},children:o?null:e.children})},S=function(e){return function(t){return Object(b.jsx)(k.Consumer,{children:function(n){return Object(b.jsx)(e,Object(v.a)(Object(v.a)({},t),{},{userContext:n}))}})}},I=function(){return Object(a.useContext)(k)};function F(e){var t=I(),n=t.currentUser,s=t.setCurrentUser,i=Object(a.useState)(!1),c=Object(d.a)(i,2),r=c[0],o=c[1],l=Object(a.useState)([]),u=Object(d.a)(l,2);u[0],u[1];Object(a.useEffect)((function(){var t=null===n||void 0===n?void 0:n.favorites.includes(e.id);o(t)}),[n]);var j=function(){!0===r?f():m()},m=function(){h.get("/all-recipes/add-to-favorite/"+n._id+"/"+e.id).then((function(e){Object(p.a)(n.favorites);var t=e.data.favorites;s(Object(v.a)(Object(v.a)({},n),{},{favorites:t}))})).catch((function(e){return console.error(e)}))},f=function(){h.get("/all-recipes/remove-from-favorite/"+n._id+"/"+e.id).then((function(t){e.handler&&e.handler();Object(p.a)(n.favorites);var a=t.data.favorites;s(Object(v.a)(Object(v.a)({},n),{},{favorites:a}))})).catch((function(e){return console.error(e)}))};return Object(b.jsx)("div",{children:r?Object(b.jsxs)("button",{className:"isFavorite",onClick:j,children:[Object(b.jsx)(N.a,{className:"coeur-plein",icon:C.d,size:"2x",color:"#d18110"}),Object(b.jsx)("i",{className:"far fa-heart coeur-vide fa-2x"})]}):Object(b.jsxs)("button",{className:"isNotFavorite",onClick:j,children:[Object(b.jsx)(N.a,{className:"coeur-plein",icon:C.d,size:"2x",color:"#d18110"}),Object(b.jsx)("i",{className:"far fa-heart coeur-vide fa-2x"})]})})}var q=function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(){return Object(f.a)(this,n),t.apply(this,arguments)}return Object(O.a)(n,[{key:"render",value:function(){return Object(b.jsxs)("div",{className:"simple-card",children:[Object(b.jsxs)("div",{className:"favorite",children:[!0===this.props.userContext.isLoggedIn&&Object(b.jsx)(F,{handler:this.props.handler,id:this.props.recipe._id}),!1===this.props.userContext.isLoggedIn&&Object(b.jsxs)(y.b,{to:"/sign-in",className:"isNotFavorite",children:[Object(b.jsx)(N.a,{className:"coeur-plein",icon:C.d,size:"2x",color:"#d18110"}),Object(b.jsx)("i",{className:"far fa-heart coeur-vide fa-2x"})]})]}),Object(b.jsxs)(y.b,{to:{pathname:"/all-recipes/"+this.props.recipe._id,state:Object(v.a)(Object(v.a)({},this.props.previousSearchParams),{},{showLinks:this.props.showLinks})},className:"link",children:[Object(b.jsx)("img",{src:this.props.recipe.image,alt:"photo-recipe"}),Object(b.jsx)("h1",{className:"title-simple-card",children:this.props.recipe.title}),Object(b.jsx)("p",{className:"title-difficulty",children:Object(b.jsx)("i",{children:this.props.recipe.category})})]})]})}}]),n}(a.Component),D=S(q);n(89);function M(e){var t=["Meat","Dessert","Miscellaneous","Pasta","Seafood","Side","Starter","Vegan","Vegetarian","Breakfast"],n=Object(a.useState)(!1),s=Object(d.a)(n,2),i=s[0],c=s[1],r=t.map((function(t){var n;return null===(n=e.state)||void 0===n?void 0:n.categoryFilter.includes(t)}));return Object(a.useEffect)((function(){r=t.map((function(t){var n;return null===(n=e.state)||void 0===n?void 0:n.categoryFilter.includes(t)})),console.log("the array i made for categories",r)})),Object(b.jsxs)("div",{className:"search-menu",children:[Object(b.jsxs)("div",{className:"search-bar-with-btn",children:[Object(b.jsx)("form",{children:Object(b.jsx)("input",{className:"search-bar",type:"text",placeholder:"Search by name",onChange:e.onNameInput,value:e.state.nameFilter})}),Object(b.jsx)("button",{className:"filter-btn",onClick:function(){c(!i)},children:Object(b.jsx)("i",{className:"fal fa-sliders-v"})})]}),i&&Object(b.jsxs)("div",{className:"filter-menu",children:[Object(b.jsxs)("div",{className:"category-menu",children:[Object(b.jsx)("h3",{children:"Categories"}),Object(b.jsx)("div",{className:"all-categories",children:t.map((function(t,n){return Object(b.jsxs)("span",{className:"one-category",children:[Object(b.jsx)("input",{checked:r[n],type:"checkbox",onChange:function(n){return e.onCategoryInput(n,t)}}),Object(b.jsx)("label",{children:t})]},t)}))})]}),Object(b.jsxs)("div",{className:"ingredients-menu",children:[Object(b.jsx)("h3",{children:"Ingredients"}),Object(b.jsx)(m,{onIngredientInput:e.onIngredientInput,ingredientsFromHome:e.ingredientsFromHome})]})]})]})}var L=function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(f.a)(this,n),(a=t.call(this,e)).onNameInput=function(e){a.setState({nameFilter:e.target.value},(function(){a.fetchData()}))},a.onCategoryInput=function(e,t){var n=Object(p.a)(a.state.categoryFilter);a.state.categoryFilter.includes(t)?n.splice(n.indexOf(t),1):n.push(t),a.setState({categoryFilter:n},(function(){a.fetchData()}))},a.onIngredientInput=function(e){a.setState({ingredientFilter:Object(p.a)(e)},(function(){a.fetchData()}))},a.fetchData=function(){h.get("/all-recipes",{params:{name:a.state.nameFilter,category:a.state.categoryFilter,ingredients:a.state.ingredientFilter}}).then((function(e){a.setState({recipes:e.data})})).catch((function(e){return console.error(e)}))},a.state={recipes:null,nameFilter:null,ingredientFilter:[],categoryFilter:[],searchString:""},a}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e,t=this,n=(null===(e=this.props.location)||void 0===e||e.reset,new URLSearchParams(this.props.location.search)),a=[""];"string"===typeof n.get("ingredients")&&(a=n.get("ingredients").split(","));var s="",i=[];this.props.location.searchFromOneRecipe&&(a=this.props.location.searchFromOneRecipe.ingredients,s=this.props.location.searchFromOneRecipe.name,i=this.props.location.searchFromOneRecipe.category),this.setState({ingredientFilter:a,nameFilter:s,categoryFilter:i},(function(){return t.fetchData()}))}},{key:"componentDidUpdate",value:function(e){var t,n=this;e!==this.props&&(null===(t=this.props.location)||void 0===t?void 0:t.reset)&&(this.setState({ingredientFilter:[""],nameFilter:"",categoryFilter:[]},(function(){return n.fetchData()})),this.props.location.reset=!1,console.log("ok i get that you are trying to reset"))}},{key:"render",value:function(){var e=this;return this.state.recipes?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(M,{onNameInput:this.onNameInput,onCategoryInput:this.onCategoryInput,onIngredientInput:this.onIngredientInput,ingredientsFromHome:this.state.ingredientFilter,state:this.state}),this.state.recipes.length?Object(b.jsx)("div",{className:"list-recipes",children:this.state.recipes.map((function(t){return Object(b.jsx)("div",{children:Object(b.jsx)(D,{previousSearchParams:{name:e.state.nameFilter,ingredients:e.state.ingredientFilter,category:e.state.categoryFilter},recipe:t,showLinks:!0})},t._id)}))}):Object(b.jsxs)("div",{children:[Object(b.jsx)("p",{children:"There are no recipes matching these criteria"}),Object(b.jsx)("i",{className:"far fa-times-circle"})]})]}):Object(b.jsx)("div",{children:"Loading..."})}}]),n}(a.Component),U=(n(90),function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={message:"",date:Date.now(),recipe:e.props.idRecipe,comments:[],didMount:!1},e.updateComments=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.get("/comments/"+e.props.recipeId);case 3:n=t.sent,e.setState({comments:n.data,didMount:!0}),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])}))),e.handleChange=function(t){e.setState({message:t.target.value})},e.handleSubmit=function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.prev=1,t.next=4,h.post("/comments/"+e.props.userId+"/"+e.props.recipeId,e.state);case 4:e.updateComments(),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[1,7]])})));return function(e){return t.apply(this,arguments)}}(),e}return Object(O.a)(n,[{key:"componentDidMount",value:function(){var e=Object(u.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:this.updateComments();case 1:case"end":return e.stop()}}),e,this)})));return function(){return e.apply(this,arguments)}}()},{key:"render",value:function(){return this.state.didMount?Object(b.jsxs)("div",{className:"comments",children:[Object(b.jsxs)("div",{className:"header",children:[Object(b.jsx)("h1",{className:"title",children:"Leave a comment"}),Object(b.jsxs)("form",{action:"",children:[Object(b.jsx)("input",{type:"text",className:"input",placeholder:"leave a comment here ..",onChange:this.handleChange}),!0===this.props.userContext.isLoggedIn&&Object(b.jsx)("button",{onClick:this.handleSubmit,children:"send !"}),!1===this.props.userContext.isLoggedIn&&Object(b.jsx)(y.b,{to:"/sign-in",children:Object(b.jsx)("button",{className:"btn",children:"send !"})})]})]}),this.state.comments.length?this.state.comments.map((function(e,t){var n,a;return Object(b.jsxs)("div",{className:"comment",children:[Object(b.jsxs)("div",{className:"date",children:[e.date.slice(0,10)," ",e.date.slice(11,19)," "]}),Object(b.jsxs)("div",{className:"author-infos",children:[Object(b.jsx)("img",{className:"avatar",src:null===(n=e.author)||void 0===n?void 0:n.avatar,alt:"user-avatar"}),Object(b.jsx)("b",{children:null===(a=e.author)||void 0===a?void 0:a.username})]}),Object(b.jsx)("div",{className:"message",children:e.message})]},e._id)})):Object(b.jsx)("div",{className:"comment",children:" no comments yet "})]}):Object(b.jsx)("div",{children:"loading"})}}]),n}(a.Component)),B=S(U),P=(n(91),function(e){var t=Object(a.useState)(),n=Object(d.a)(t,2);n[0],n[1];return Object(b.jsx)(b.Fragment,{})});n(20);var _=function(e){var t,n,s,i,c=Object(a.useState)([]),r=Object(d.a)(c,2),o=r[0],j=r[1],p=Object(a.useState)([]),m=Object(d.a)(p,2),f=(m[0],m[1],new RegExp(/[0-9]+\./,"g")),O=new RegExp(/\.\s/,"g"),g=I().currentUser;Object(a.useEffect)((function(){x()}),[]);var x=function(){var t=Object(u.a)(l.a.mark((function t(){var n;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.get("/all-recipes/"+e.match.params.id);case 3:n=t.sent,j(n.data),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(){return t.apply(this,arguments)}}();return Object(b.jsxs)(b.Fragment,{children:[(null===(t=e.location.state)||void 0===t?void 0:t.showLinks)&&Object(b.jsxs)("div",{className:"back-links-container",children:[Object(b.jsx)(y.b,{to:"./",className:"back-links",children:"Back to all recipes"}),Object(b.jsx)(y.b,{to:{pathname:"/all-recipes",searchFromOneRecipe:e.location.state},className:"back-links",children:"Back to my search"})]}),Object(b.jsx)("div",{className:"container",children:Object(b.jsxs)("div",{className:"shadow-drop-2-center wrapper",children:[Object(b.jsxs)("div",{className:"favorite",children:[g&&Object(b.jsx)(F,{id:e.match.params.id}),!g&&Object(b.jsxs)(y.b,{to:"/sign-in",className:"isNotFavorite",children:[Object(b.jsx)("i",{class:"fas fa-heart coeur-plein fa-3x"}),Object(b.jsx)("i",{className:"far fa-heart coeur-vide fa-3x"})]})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("img",{src:o.image,alt:o.title}),Object(b.jsx)("h1",{children:o.title}),Object(b.jsx)(P,{infoRecipe:e})]}),Object(b.jsxs)("h2",{className:"difficulties",children:["Level: ",o.difficulty]}),Object(b.jsx)("div",{className:"wrapper-ingredients",children:null===(n=o.ingredients)||void 0===n?void 0:n.map((function(e,t){return Object(b.jsxs)("div",{className:"wrapp-ingredient shadow-drop-2-center ",children:[Object(b.jsx)("h3",{children:e}),Object(b.jsx)("img",{src:"https://themealdb.com/images/ingredients/"+e+".png",width:"40px"}),Object(b.jsx)("p",{children:o.quantities[t]})]},t)}))}),Object(b.jsxs)("div",{className:"instructions-list",children:[f.test(o.instructions),Object(b.jsx)("ul",{children:f.test(o.instructions)?null===(s=o.instructions)||void 0===s?void 0:s.split(f).map((function(e){return Object(b.jsx)("li",{children:e})})):null===(i=o.instructions)||void 0===i?void 0:i.split(O).map((function(e){return Object(b.jsx)("li",{children:e})}))})]}),Object(b.jsx)("div",{className:"comment-section",children:Object(b.jsx)(B,{userId:null===g||void 0===g?void 0:g._id,recipeId:e.match.params.id})})]})})]})};n(28);function R(){return Object(b.jsxs)("div",{className:"signin",children:[Object(b.jsx)(N.a,{icon:C.h,className:"fa"}),Object(b.jsx)("p",{children:"Connexion"})]})}n(92),n(93);var E=Object(r.g)((function(e){var t=I().setCurrentUser;return Object(b.jsx)(N.a,{onClick:function(){return h.post("/signout").finally((function(){t(null)}))},className:"link icon-signout is-clickable",icon:C.e,size:"xs",title:"signout"})}));n(94);var V=function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,s=new Array(a),i=0;i<a;i++)s[i]=arguments[i];return(e=t.call.apply(t,[this].concat(s))).state={showProfileMenu:!0},e.toggleProfileMenu=function(){e.setState({showProfileMenu:!e.state.showProfileMenu})},e}return Object(O.a)(n,[{key:"render",value:function(){var e=this;return Object(b.jsx)("div",{className:"connected-menu",children:Object(b.jsxs)("div",{className:"signin",onClick:function(){return e.toggleProfileMenu()},children:[Object(b.jsx)("img",{src:this.props.avatar,alt:"avatar",className:"img-avatar"}),Object(b.jsx)("p",{children:this.props.username}),Object(b.jsx)(N.a,{icon:C.f,className:"fa"}),!this.state.showProfileMenu&&Object(b.jsxs)("div",{className:"hidden-menu",children:[Object(b.jsx)(y.b,{className:"link",to:"/profile/my-recipes",children:"My recipes"}),Object(b.jsx)(y.b,{className:"link",to:"/profile/my-favourites",children:"My favourites"}),Object(b.jsx)(E,{className:"link signin"})]})]})})}}]),n}(a.Component);function A(){var e=I().isLoggedIn,t=I().currentUser;return Object(b.jsxs)("nav",{id:"nav_main",className:"nav",children:[Object(b.jsxs)(y.c,{exact:!0,className:"link logo",activeClassName:"is-active",to:"/",children:[Object(b.jsx)("img",{className:"logo-fridge",src:"./../../FridgeIcon.png",alt:"fridge-logo"}),Object(b.jsx)("img",{className:"title-logo",src:"./../../title-bon-app.png",alt:"bon-app"})]}),Object(b.jsx)(y.c,{className:"link title",activeClassName:"is-active",to:{pathname:"/all-recipes",reset:!0},children:"All Recipes"}),!1===e&&Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(y.c,{className:"link signin",activeClassName:"is-active",to:"/sign-in",children:Object(b.jsx)(R,{})})}),!0===e&&Object(b.jsx)(b.Fragment,{children:Object(b.jsx)(V,{username:t.username,avatar:t.avatar})})]})}function z(){return Object(b.jsxs)("div",{className:"not-found",children:[Object(b.jsx)("h1",{className:"title",children:"404"}),Object(b.jsx)("span",{children:"Oh no !!!"}),Object(b.jsx)("span",{children:"You seem lost friend :("}),Object(b.jsxs)("span",{children:["Go back to the \xa0",Object(b.jsx)(y.b,{to:"/",children:"home page"})]})]})}n(95);function H(e){var t=Object(a.useState)([]),n=Object(d.a)(t,2),s=n[0],i=n[1];return Object(b.jsxs)("div",{className:"main-home",children:[Object(b.jsxs)("div",{className:"left-home",children:[Object(b.jsx)("img",{className:"logo-home",src:"title-bon-app.png",alt:"BonApp"}),Object(b.jsx)("p",{children:"Add your ingredients"}),Object(b.jsx)(m,{onIngredientInput:function(e){i(e)}}),Object(b.jsx)("button",{className:"find-recipe-btn",onClick:function(){e.history.push({pathname:"/all-recipes",search:new URLSearchParams({ingredients:s}).toString()})},children:"Find your recipe"})]}),Object(b.jsx)(y.b,{className:"fridge-container",to:"/all-recipes",children:Object(b.jsx)("img",{className:"fridge",src:"openingFridge.gif",alt:"fridge opening"})})]})}n(41);function T(e){var t=Object(a.useState)("admin@foobarbaz.io"),n=Object(d.a)(t,2),s=n[0],i=n[1],c=Object(a.useState)("12345"),o=Object(d.a)(c,2),j=o[0],p=o[1],m=I(),f=m.isLoggedIn,O=m.setCurrentUser,g=Object(a.useState)(!1),x=Object(d.a)(g,2),v=x[0],N=x[1],C=function(){var e=Object(u.a)(l.a.mark((function e(t){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),e.prev=1,e.next=4,h.post("/signin",{email:s,password:j});case 4:n=e.sent,O(n.data.currentUser),N(!1),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(1),O(null),N(!0);case 13:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}();return f?Object(b.jsx)(r.a,{to:"/all-recipes"}):Object(b.jsxs)("form",{className:"form",onSubmit:C,children:[Object(b.jsx)("h1",{className:"title",children:"Sign in"}),!0===v&&Object(b.jsx)("div",{className:"error title",children:"invalid credentials"}),Object(b.jsx)("input",{className:"input",placeholder:"email",id:"email",type:"email",value:s,onChange:function(e){return i(e.target.value)}}),Object(b.jsx)("input",{className:"input",placeholder:"password",id:"password",type:"password",value:j,onChange:function(e){return p(e.target.value)}}),Object(b.jsx)("button",{className:"btn",children:"ok"}),Object(b.jsxs)("p",{className:"parag",children:["No account yet ? please"," ",Object(b.jsx)(y.b,{to:"/signup",className:"linksign",children:"sign up"})]})]})}var Y=n(19);n(96);var J=function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(){var e;Object(f.a)(this,n);for(var a=arguments.length,i=new Array(a),c=0;c<a;c++)i[c]=arguments[c];return(e=t.call.apply(t,[this].concat(i))).state={avatar:"",tmpAvatar:"",username:"admin",email:"admin@foobarbaz.io",password:"12345",isError:!1},e.fileInput=s.a.createRef(),e.handleSubmit=function(){var t=Object(u.a)(l.a.mark((function t(n){var a;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),(a=new FormData).append("email",e.state.email),a.append("password",e.state.password),a.append("username",e.state.username),e.fileInput.current.files[0]&&a.append("avatar",e.fileInput.current.files[0]),t.prev=6,t.next=9,h.post("/signup",a);case 9:e.props.history.push("/sign-in"),t.next=16;break;case 12:t.prev=12,t.t0=t.catch(6),console.error(t.t0),e.setState({isError:!0});case 16:case"end":return t.stop()}}),t,null,[[6,12]])})));return function(e){return t.apply(this,arguments)}}(),e.handleChange=function(t){e.setState(Object(Y.a)({},t.target.name,t.target.value))},e.handleImage=function(t){e.setState({avatar:t.target.files[0]})},e}return Object(O.a)(n,[{key:"render",value:function(){var e=this.props.userContext.isLoggedIn,t=this.state,n=t.email,a=t.password,s=t.username;t.tmpAvatar;return e?Object(b.jsx)(r.a,{to:"/all-recipes"}):Object(b.jsxs)("form",{className:"form",onSubmit:this.handleSubmit,onChange:this.handleChange,children:[Object(b.jsx)("h1",{className:"title",children:"Sign up"}),!0===this.state.isError&&Object(b.jsx)("div",{className:"error",children:"email already registered, please sign in"}),Object(b.jsx)("input",{className:"input",placeholder:"email",id:"email",type:"email",name:"email",defaultValue:n}),Object(b.jsx)("input",{className:"input",placeholder:"username",id:"username",type:"text",name:"username",defaultValue:s}),Object(b.jsx)("input",{className:"input",placeholder:"password",id:"password",type:"password",name:"password",defaultValue:a}),Object(b.jsxs)("div",{className:"container ",children:[Object(b.jsx)("label",{htmlFor:"",children:"Upload your avatar"}),Object(b.jsx)("input",{ref:this.fileInput,type:"file",name:"avatar",id:"avatar",className:"avatar",onChange:this.handleImage})]}),Object(b.jsx)("button",{className:"btn",children:"ok"}),Object(b.jsxs)("p",{className:"parag",children:["Already a member ? please"," ",Object(b.jsx)(y.b,{to:"/sign-in",className:"linksign",children:"sign in"})]})]})}}]),n}(a.Component),Q=S(J);n(97);n(42);function G(){var e=this,t=Object(a.useState)([]),n=Object(d.a)(t,2),s=n[0],i=n[1],c=I().currentUser;Object(a.useEffect)((function(){r()}),[c]);var r=function(){var e=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.get("/my-recipes/"+c._id);case 3:t=e.sent,i(t.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(u.a)(l.a.mark((function e(t){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.delete("/my-recipes/".concat(t));case 3:r(),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.error(e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}(),j=function(){var t=Object(u.a)(l.a.mark((function t(n){return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,h.get("/my-recipes/".concat(n,"/edit"));case 3:r(),e.props.history.push("/my-recipes/".concat(n)),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),console.error(t.t0);case 10:case"end":return t.stop()}}),t,null,[[0,7]])})));return function(e){return t.apply(this,arguments)}}();return Object(b.jsxs)("div",{className:"my-recipes",children:[Object(b.jsx)("h1",{children:"My recipes"}),0===s.length&&Object(b.jsxs)("div",{className:"text",children:[" ","You don't have any recipes yet. Add a recipe !"]}),Object(b.jsx)(y.b,{to:"/profile/my-recipes/create",className:"container",children:Object(b.jsxs)("button",{className:"ingredient-add-button",children:[Object(b.jsx)("i",{className:"fas fa-plus-circle"})," "]})}),Object(b.jsx)("div",{className:"list-my-recipes",children:s.map((function(e){return Object(b.jsxs)("div",{className:"all-recipes",children:[Object(b.jsx)(D,{showLinks:!1,recipe:e}),Object(b.jsxs)("div",{children:[Object(b.jsx)(y.b,{to:"/profile/my-recipes/update/"+e._id,children:Object(b.jsx)(N.a,{icon:C.c,className:"edit",style:{cursor:"pointer"},onClick:function(){return j(e._id)}})}),Object(b.jsx)(N.a,{icon:C.g,className:"trash",style:{cursor:"pointer"},onClick:function(){return o(e._id)}})]})]},e._id)}))})]})}n(98);function K(){var e=I().currentUser,t=Object(a.useState)([]),n=Object(d.a)(t,2),s=n[0],i=n[1];Object(a.useEffect)((function(){c()}),[e]);var c=function(){h.get("/"+(null===e||void 0===e?void 0:e._id)).then((function(e){i(e.data.favorites)})).catch((function(e){return console.error(e)}))};return Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"My favourites"}),0===s.length&&Object(b.jsxs)("div",{className:"text",children:[" ","You don't have any favourites yet. ",Object(b.jsx)(y.b,{to:"/all-recipes",className:"link-recipe",children:"Add one !"})]}),Object(b.jsx)("div",{className:"list-favorites",children:s.map((function(e){return Object(b.jsx)("div",{className:"all-recipes",children:Object(b.jsx)(D,{showLinks:!1,recipe:e,handler:c})},e._id)}))})]})}n(43);var W=function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(f.a)(this,n),console.log(e),(a=t.call(this,e)).handleSubmit=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,s,i,c,r,o,u,d,j,p;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,s=n.title,i=n.difficulty,c=n.ingredients,r=n.category,o=n.quantities,u=n.instructions,d=a.state.image.current.files[0],j=a.props.userContext.currentUser._id,console.log("this is user",j),(p=new FormData).append("title",s),p.append("difficulty",i),p.append("ingredients",c),p.append("quantities",o),p.append("category",r),p.append("instructions",u),p.append("image",d),p.append("author",j),e.prev=14,e.next=17,h.post("/recipe/create",p);case 17:a.props.history.push("./"),console.log("this is this props",a.props.history),e.next=25;break;case 21:e.prev=21,e.t0=e.catch(14),console.error(e.t0),a.setState({error:!0});case 25:case"end":return e.stop()}}),e,null,[[14,21]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){a.setState(Object(Y.a)({},e.target.name,e.target.value))},a.addIngredientBar=function(e){console.log("you are",e),e.preventDefault();var t=Object(p.a)(a.state.ingredients),n=Object(p.a)(a.state.quantities);t.push(a.state.ingredient),n.push(a.state.quantity),a.setState({ingredients:t,ingredient:"",quantities:n,quantity:""})},a.removeIngredientBar=function(e,t){e.preventDefault();var n=Object(p.a)(a.state.ingredients);n.splice(t,1),a.setState({ingredients:n,quantities:n})},a.state={title:"",author:"",difficulty:"easy",ingredient:"",ingredients:[],quantities:[],quantity:"",category:"Meat",instructions:"",image:s.a.createRef(),error:!1},a}return Object(O.a)(n,[{key:"render",value:function(){var e=this;return console.log("this is the ingrdients",this.state),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)("h1",{className:"title",children:"Create your own recipe!"}),Object(b.jsxs)("div",{className:"general-wrap",children:[Object(b.jsxs)("form",{className:"form-wrap bounce-in-top",children:[!0===this.state.error&&Object(b.jsx)("div",{className:"error",children:"Please fill in all the values"}),Object(b.jsx)("input",{name:"title",type:"text",placeholder:"title",value:this.state.title,onChange:this.handleChange}),Object(b.jsxs)("select",{name:"difficulty",value:this.state.difficulty,onChange:this.handleChange,className:"input",children:[Object(b.jsx)("option",{value:"easy",children:"Easy"}),Object(b.jsx)("option",{value:"medium",children:"Medium"}),Object(b.jsx)("option",{value:"difficult",children:"difficult"})]}),Object(b.jsxs)("select",{name:"category",value:this.state.category,onChange:this.handleChange,className:"input",children:[Object(b.jsx)("option",{value:"Meat",children:"Meat"}),Object(b.jsx)("option",{value:"Dessert",children:"Dessert"}),Object(b.jsx)("option",{value:"Miscellaneous",children:"Miscellaneous"}),Object(b.jsx)("option",{value:"Pasta",children:"Pasta"}),Object(b.jsx)("option",{value:"Seafood",children:"Seafood"}),Object(b.jsx)("option",{value:"Side",children:"Side"}),Object(b.jsx)("option",{value:"Starter",children:"Starter"}),Object(b.jsx)("option",{value:"Vegan",children:"Vegan"}),Object(b.jsx)("option",{value:"Vegetarian",children:"Vegetarian"}),Object(b.jsx)("option",{value:"Breakfast",children:"Breakfast"})]}),Object(b.jsx)("input",{name:"ingredient",type:"text",placeholder:"ingredients",value:this.state.ingredient,onChange:this.handleChange}),Object(b.jsx)("input",{name:"quantity",type:"text",placeholder:"quantities",value:this.state.quantity,onChange:this.handleChange}),Object(b.jsx)("button",{onClick:this.addIngredientBar,children:Object(b.jsx)("i",{className:"fas fa-plus-circle"})}),Object(b.jsx)("input",{name:"instructions",type:"text",placeholder:"instructions",value:this.state.instructions,onChange:this.handleChange}),Object(b.jsx)("input",{ref:this.state.image,name:"image",type:"file"}),Object(b.jsx)("button",{onClick:this.handleSubmit,children:"Create"})]}),Object(b.jsxs)("div",{className:"info-box",children:[Object(b.jsx)("h1",{children:"information"}),Object(b.jsx)("table",{className:"table",children:Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{className:"table-title",children:[Object(b.jsx)("th",{children:"Ingredient"}),Object(b.jsx)("th",{children:"Quantity"})]}),this.state.ingredients.map((function(t,n){return Object(b.jsxs)("tr",{className:"ingredients",children:[Object(b.jsx)("td",{children:t},n),Object(b.jsx)("td",{children:e.state.quantities[n]}),Object(b.jsx)("button",{onClick:function(t){return e.removeIngredientBar(t,e.index)},children:Object(b.jsx)("i",{className:"fas fa-trash-alt"})})]})}))]})})]})]})]})}}]),n}(a.Component),X=S(W),Z=function(e){Object(g.a)(n,e);var t=Object(x.a)(n);function n(e){var a;return Object(f.a)(this,n),console.log(e),(a=t.call(this,e)).componentDidMount=Object(u.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,h.get("/all-recipes/"+a.props.match.params.id);case 3:t=e.sent,console.log("hoaoaoaoao",t),a.setState({title:t.data.title,difficulty:t.data.difficulty,ingredient:t.data.ingredient,ingredients:t.data.ingredients,quantities:t.data.quantities,quantity:t.data.quantity,category:t.data.category,instructions:t.data.instructions,image:t.data.image}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.error(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])}))),a.handleSubmit=function(){var e=Object(u.a)(l.a.mark((function e(t){var n,s,i,c,r,o,u,d,j,p;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t.preventDefault(),n=a.state,s=n.title,n.author,i=n.difficulty,c=n.ingredients,r=n.category,o=n.quantities,u=n.instructions,d=n.image,j=new FormData,p=a.state.imageInput.current.files[0]||d,j.append("title",s),j.append("difficulty",i),j.append("ingredients",c),j.append("quantities",o),j.append("category",r),j.append("instructions",u),j.append("image",p),e.prev=11,e.next=14,h.patch("/recipe/update/"+a.props.match.params.id,j);case 14:a.props.history.push("/profile/my-recipes"),e.next=20;break;case 17:e.prev=17,e.t0=e.catch(11),console.error(e.t0);case 20:case"end":return e.stop()}}),e,null,[[11,17]])})));return function(t){return e.apply(this,arguments)}}(),a.handleChange=function(e){a.setState(Object(Y.a)({},e.target.name,e.target.value))},a.addIngredientBar=function(e){console.log("you are",e),e.preventDefault();var t=Object(p.a)(a.state.ingredients),n=Object(p.a)(a.state.quantities);t.push(a.state.ingredient),n.push(a.state.quantity),a.setState({ingredients:t,ingredient:"",quantities:n,quantity:""})},a.removeIngredientBar=function(e,t){e.preventDefault();var n=Object(p.a)(a.state.ingredients);n.splice(t,1),a.setState({ingredients:n,quantities:n})},a.state={title:"",author:a.props.userContext.currentUser._id,difficulty:"",ingredient:"",ingredients:[],quantities:[],quantity:"",category:"",instructions:"",image:"",imageInput:s.a.createRef()},a}return Object(O.a)(n,[{key:"render",value:function(){var e=this;return console.log("this is the ingrdients",this.props.match.params.id),console.log("state",this.state),Object(b.jsxs)(b.Fragment,{children:[Object(b.jsxs)("form",{children:[Object(b.jsx)("h1",{children:"Update your recipe!"}),Object(b.jsx)("input",{name:"title",type:"text",placeholder:"title",value:this.state.title,onChange:this.handleChange}),Object(b.jsxs)("select",{name:"difficulty",value:this.state.difficulty,onChange:this.handleChange,className:"input",children:[Object(b.jsx)("option",{value:"easy",children:"Easy"}),Object(b.jsx)("option",{value:"medium",children:"Medium"}),Object(b.jsx)("option",{value:"difficult",children:"difficult"})]}),Object(b.jsxs)("select",{name:"category",value:this.state.category,onChange:this.handleChange,className:"input",children:[Object(b.jsx)("option",{value:"Meat",children:"Meat"}),Object(b.jsx)("option",{value:"Dessert",children:"Dessert"}),Object(b.jsx)("option",{value:"Miscellaneous",children:"Miscellaneous"}),Object(b.jsx)("option",{value:"Pasta",children:"Pasta"}),Object(b.jsx)("option",{value:"Seafood",children:"Seafood"}),Object(b.jsx)("option",{value:"Side",children:"Side"}),Object(b.jsx)("option",{value:"Starter",children:"Starter"}),Object(b.jsx)("option",{value:"Vegan",children:"Vegan"}),Object(b.jsx)("option",{value:"Vegetarian",children:"Vegetarian"}),Object(b.jsx)("option",{value:"Breakfast",children:"Breakfast"})]}),Object(b.jsx)("input",{name:"ingredient",type:"text",placeholder:"ingredients",value:this.state.ingredient,onChange:this.handleChange}),Object(b.jsx)("input",{name:"quantity",type:"text",placeholder:"quantities",value:this.state.quantity,onChange:this.handleChange}),Object(b.jsx)("input",{name:"instructions",type:"text",placeholder:"instructions",value:this.state.instructions,onChange:this.handleChange}),Object(b.jsx)("button",{onClick:this.addIngredientBar,children:"+"}),Object(b.jsx)("input",{ref:this.state.imageInput,name:"image",type:"file"}),Object(b.jsx)("button",{onClick:this.handleSubmit,children:"ok"})]}),Object(b.jsxs)("div",{children:[Object(b.jsx)("h1",{children:"information"}),Object(b.jsxs)("table",{children:[Object(b.jsx)("thead",{children:Object(b.jsx)("tr",{children:Object(b.jsx)("th",{children:"Ingredients"})})}),Object(b.jsxs)("tbody",{children:[Object(b.jsxs)("tr",{children:[Object(b.jsx)("th",{children:"Ingredient"}),Object(b.jsx)("th",{children:"Quantity"})]}),this.state.ingredients.map((function(t,n){return Object(b.jsxs)("tr",{children:[Object(b.jsx)("td",{children:t},n),Object(b.jsx)("td",{children:e.state.quantities[n]}),Object(b.jsx)("button",{onClick:function(t){return e.removeIngredientBar(t,e.index)},children:Object(b.jsx)("i",{className:"fas fa-trash-alt"})})]})}))]})]})]})]})}}]),n}(a.Component),$=S(Z),ee=n(48),te=["component"],ne=function(e){var t=e.component,n=Object(ee.a)(e,te),a=I(),s=a.isLoggedIn;return a.isLoading?Object(b.jsx)("div",{children:"Loading..."}):s?Object(b.jsx)(r.b,Object(v.a)(Object(v.a)({},n),{},{render:function(e){return Object(b.jsx)(t,Object(v.a)({},e))}})):Object(b.jsx)(r.a,{to:"/sign-in"})};var ae=function(){return Object(b.jsx)(w,{children:Object(b.jsxs)("div",{className:"App",children:[Object(b.jsx)(A,{}),Object(b.jsxs)(r.d,{children:[Object(b.jsx)(r.b,{exact:!0,path:"/",component:H}),Object(b.jsx)(r.b,{path:"/sign-in",component:T}),Object(b.jsx)(r.b,{path:"/signup",component:Q}),Object(b.jsx)(ne,{exact:!0,path:"/profile/my-recipes",component:G}),Object(b.jsx)(ne,{path:"/profile/my-recipes/create",component:X}),Object(b.jsx)(ne,{path:"/profile/my-recipes/update/:id",component:$}),Object(b.jsx)(ne,{path:"/profile/my-favourites",component:K}),Object(b.jsx)(r.b,{path:"/all-recipes/:id",component:_}),Object(b.jsx)(r.b,{exact:!0,path:"/all-recipes",component:L}),Object(b.jsx)(r.b,{path:"*",component:z})]})]})})},se=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,100)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,i=t.getLCP,c=t.getTTFB;n(e),a(e),s(e),i(e),c(e)}))};c.a.render(Object(b.jsx)(y.a,{children:Object(b.jsx)(w,{children:Object(b.jsx)(ae,{})})}),document.getElementById("root")),se()}},[[99,1,2]]]);
//# sourceMappingURL=main.f23ad5c3.chunk.js.map