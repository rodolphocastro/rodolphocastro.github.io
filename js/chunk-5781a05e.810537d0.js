(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5781a05e"],{2532:function(e,t,r){"use strict";var n=r("23e7"),o=r("5a34"),i=r("1d80"),a=r("ab13");n({target:"String",proto:!0,forced:!a("includes")},{includes:function(e){return!!~String(i(this)).indexOf(o(e),arguments.length>1?arguments[1]:void 0)}})},"3a6e":function(e,t,r){"use strict";var n=r("539f"),o=r.n(n);o.a},"44e7":function(e,t,r){var n=r("861d"),o=r("c6b6"),i=r("b622"),a=i("match");e.exports=function(e){var t;return n(e)&&(void 0!==(t=e[a])?!!t:"RegExp"==o(e))}},"45fc":function(e,t,r){"use strict";var n=r("23e7"),o=r("b727").some,i=r("a640"),a=r("ae40"),c=i("some"),s=a("some");n({target:"Array",proto:!0,forced:!c||!s},{some:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})},"539f":function(e,t,r){},"5a34":function(e,t,r){var n=r("44e7");e.exports=function(e){if(n(e))throw TypeError("The method doesn't accept regular expressions");return e}},ab13:function(e,t,r){var n=r("b622"),o=n("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[o]=!1,"/./"[e](t)}catch(n){}}return!1}},b0c0:function(e,t,r){var n=r("83ab"),o=r("9bf2").f,i=Function.prototype,a=i.toString,c=/^\s*function ([^ (]*)/,s="name";n&&!(s in i)&&o(i,s,{configurable:!0,get:function(){try{return a.call(this).match(c)[1]}catch(e){return""}}})},b724:function(e,t,r){"use strict";r.r(t);var n=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("h2",[e._v("Meus Projetos")]),e._m(0),e._m(1),r("label",[e._v(" Filtrar "),r("input",{directives:[{name:"model",rawName:"v-model.trim",value:e.textoFiltro,expression:"textoFiltro",modifiers:{trim:!0}}],attrs:{type:"text",placeholder:"Filtre com base no nome, tópico ou linguagem"},domProps:{value:e.textoFiltro},on:{input:function(t){t.target.composing||(e.textoFiltro=t.target.value.trim())},blur:function(t){return e.$forceUpdate()}}})]),r("hr"),e.loading?[r("loading")]:e.repositories.length?[r("transition-group",{attrs:{name:"list"}},e._l(e.repositoriosFiltrados,(function(e){return r("projeto-article",{key:e.id,attrs:{repo:e}})})),1)]:[r("p",[e._v("Nada foi encontrado!")])]],2)},o=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[e._v(" Estes são os repositórios "),r("em",[e._v("públicos")]),e._v(" nos quais participo. ")])},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("p",[r("small",[e._v("Recuperados automaticamente do meu perfil no GitHub. Os projetos executados para clientes podem ser encontrados em meu perfil do LinkedIn.")])])}],i=(r("4de4"),r("caad6"),r("d81d"),r("45fc"),r("b0c0"),r("d3b7"),r("2532"),r("5530")),a=(r("96cf"),r("1da1")),c=r("d4ec"),s=r("bee2"),u=r("262e"),l=r("2caf"),p=r("9ab4"),d=r("60a3"),f=r("2f62"),m=function(e){Object(u["a"])(r,e);var t=Object(l["a"])(r);function r(){var e;return Object(c["a"])(this,r),e=t.apply(this,arguments),e.textoFiltro="",e}return Object(s["a"])(r,[{key:"mounted",value:function(){var e=Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.next=2,this.fetchRepositories();case 2:case"end":return e.stop()}}),e,this)})));function t(){return e.apply(this,arguments)}return t}()},{key:"repositoriosFiltrados",get:function(){var e=this.textoFiltro,t=this.repositories,r=e.toUpperCase();return r?t.filter((function(e){var t;return e.name.toUpperCase().includes(r)||(null===(t=e.language)||void 0===t?void 0:t.toUpperCase().includes(r))||e.topics.map((function(e){return e.toUpperCase()})).some((function(e){return e.includes(r)}))})):t}}]),r}(d["c"]);m=Object(p["b"])([Object(d["a"])({name:"projetos",computed:Object(i["a"])({},Object(f["c"])("projetos",["repositories","loading"])),methods:Object(i["a"])({},Object(f["b"])("projetos",["fetchRepositories"])),components:{ProjetoArticle:function(){return Promise.all([r.e("chunk-2d0e68d3"),r.e("chunk-5bba6a10")]).then(r.bind(null,"5837"))},loading:function(){return r.e("chunk-1eb272ff").then(r.bind(null,"6f58"))}}})],m);var h=m,b=h,v=(r("3a6e"),r("2877")),g=Object(v["a"])(b,n,o,!1,null,"59f5f500",null);t["default"]=g.exports},caad6:function(e,t,r){"use strict";var n=r("23e7"),o=r("4d64").includes,i=r("44d2"),a=r("ae40"),c=a("indexOf",{ACCESSORS:!0,1:0});n({target:"Array",proto:!0,forced:!c},{includes:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}}),i("includes")},d81d:function(e,t,r){"use strict";var n=r("23e7"),o=r("b727").map,i=r("1dde"),a=r("ae40"),c=i("map"),s=a("map");n({target:"Array",proto:!0,forced:!c||!s},{map:function(e){return o(this,e,arguments.length>1?arguments[1]:void 0)}})}}]);