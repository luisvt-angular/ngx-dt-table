(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{QKna:function(t,e,o){"use strict";o.r(e),o.d(e,"SortableRemoteModule",function(){return I});var n=o("y7v8"),s=o("3q6j"),i=o("X2ml"),a=o("kzT0"),r=o("WObI"),c=o("kfQG"),p=o("ohzc"),b=o("DbkW"),l=o("pqFz"),u=o("Tftp"),d=o("GhDA");function g(t,e){if(1&t&&(a.Qb(0,"div"),a.Qb(1,"h2"),a.yc(2),a.Pb(),a.Qb(3,"p"),a.yc(4),a.Pb(),a.Pb()),2&t){const t=e.item;a.Ab(2),a.zc(t.title),a.Ab(2),a.zc(t.body)}}function h(t,e){1&t&&(a.Qb(0,"mat-icon"),a.yc(1,"north"),a.Pb())}function m(t,e){1&t&&(a.Qb(0,"mat-icon"),a.yc(1,"south"),a.Pb())}function f(t,e){if(1&t&&(a.wc(0,h,2,0,"mat-icon",8),a.wc(1,m,2,0,"mat-icon",8)),2&t){const t=e.$implicit;a.gc("ngIf",t.sortable&&1===t.sortDirection),a.Ab(1),a.gc("ngIf",t.sortable&&-1===t.sortDirection)}}const y=function(){return[10,25,50]},w=[{path:"",component:(()=>{class t{constructor(t){this.http=t,this.page={total:0,size:10,number:1}}ngOnInit(){this.getPosts()}getPosts(t){const e={};t&&(t.pageSize?(this.page.size=t.pageSize,this.page.number=t.pageIndex+1):t.sortBy&&(e._sort=t.sortBy,e._order=t.sortDirection)),this.posts$=this.http.get("https://jsonplaceholder.typicode.com/posts",{observe:"response",params:Object.assign({_expand:"user",_page:this.page.number.toString(),_limit:this.page.size.toString()},e)}).pipe(Object(i.a)(t=>(this.page.total=Number(t.headers.get("x-total-count")),t.body)))}}return t.\u0275fac=function(e){return new(e||t)(a.Lb(r.a))},t.\u0275cmp=a.Fb({type:t,selectors:[["app-sortable-remote"]],decls:8,vars:5,consts:[[2,"height","500px",3,"data","sort"],["field","id","header","Id","width","20px"],["header","Title / Body","sortBy","title"],[4,"dtCell"],["field","user.username","header","Username","width","100px","sortable",""],["field","user.email","header","Email","width","200px","sortable",""],["dtSortColumnIcon",""],[3,"length","pageSize","pageSizeOptions","page"],[4,"ngIf"]],template:function(t,e){1&t&&(a.Qb(0,"dt-table",0),a.Xb("sort",function(t){return e.getPosts(t)}),a.Mb(1,"dt-column",1),a.Qb(2,"dt-column",2),a.wc(3,g,5,2,"div",3),a.Pb(),a.Mb(4,"dt-column",4),a.Mb(5,"dt-column",5),a.wc(6,f,2,2,"ng-template",6),a.Pb(),a.Qb(7,"mat-paginator",7),a.Xb("page",function(t){return e.getPosts(t)}),a.Pb()),2&t&&(a.gc("data",e.posts$),a.Ab(7),a.gc("length",e.page.total)("pageSize",e.page.size)("pageSizeOptions",a.hc(4,y)))},directives:[c.a,p.a,b.a,l.a,u.a,n.k,d.a],styles:[""]}),t})()}];let z=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[s.e.forChild(w)],s.e]}),t})();var P=o("e+wM");let I=(()=>{class t{}return t.\u0275mod=a.Jb({type:t}),t.\u0275inj=a.Ib({factory:function(e){return new(e||t)},imports:[[n.c,z,r.b,P.a,u.b,d.b]]}),t})()}}]);