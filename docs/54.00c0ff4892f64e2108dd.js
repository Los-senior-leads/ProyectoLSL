(self.webpackChunkproyecto_sicoes=self.webpackChunkproyecto_sicoes||[]).push([[54],{5054:(e,t,r)=>{"use strict";r.r(t),r.d(t,{ModificarEmpresaModule:()=>d});var s=r(8583),i=r(7716),a=r(1841);let n=(()=>{class e{constructor(e){this.http=e,this.empresaUrl="http://127.0.0.1:5000/empresas/"}updateEmpresa(e,t){return this.http.put(this.empresaUrl+e,t)}getEmpresa(e){return this.http.get(this.empresaUrl+e)}}return e.\u0275fac=function(t){return new(t||e)(i.LFG(a.eN))},e.\u0275prov=i.Yz7({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();var o=r(4330);const c=[{path:"",component:(()=>{class e{constructor(e,t){this.router=e,this.modificarEmpresaService=t,this.idnumber=this.router.url.lastIndexOf("/")+1,this.id=this.router.url.charAt(this.idnumber)}ngOnInit(){this.getEmpresa()}getEmpresa(){this.modificarEmpresaService.getEmpresa(this.id).subscribe(e=>this.empresa=e)}edit(e,t,r,s){console.log(this.empresa),this.empresa&&(this.empresa.nombre=e,this.empresa.funciones=t,this.updateEmpresa())}updateEmpresa(){this.empresa&&this.modificarEmpresaService.updateEmpresa(this.id,this.empresa).subscribe(e=>this.empresa=e)}}return e.\u0275fac=function(t){return new(t||e)(i.Y36(o.F0),i.Y36(n))},e.\u0275cmp=i.Xpm({type:e,selectors:[["app-modificarEmpresa"]],features:[i._Bn([n])],decls:20,vars:0,consts:[[1,"borde"],[1,"bordeVerde"],[1,"d-flex","justify-content-center"],[1,"fw-normal",2,"font-size","x-large"],[1,"input-group","mb-3"],["type","text","placeholder","Nombre de la empresa","aria-label","Recipient's username","aria-describedby","button-addon2",1,"form-control"],["nombreEmpresa",""],["type","text","placeholder","Funciones de la empresa","aria-label","Recipient's username","aria-describedby","button-addon2",1,"form-control"],["funciones",""],["type","text","placeholder","Fecha de registro","aria-label","Recipient's username","aria-describedby","button-addon2",1,"form-control"],["fecha",""],["type","text","placeholder","Documentaci\xf3n","aria-label","Recipient's username","aria-describedby","button-addon2",1,"form-control"],["docs",""],[1,"d-flex","justify-content-end"],["type","button",1,"btn","btn-dark","btn-block",2,"background-color","#47525E","width","max-content",3,"click"]],template:function(e,t){if(1&e){const e=i.EpF();i.TgZ(0,"div",0),i.TgZ(1,"div",1),i.TgZ(2,"div",2),i.TgZ(3,"p",3),i._uU(4," Modificar"),i.qZA(),i.qZA(),i.TgZ(5,"div",4),i._UZ(6,"input",5,6),i.qZA(),i.TgZ(8,"div",4),i._UZ(9,"input",7,8),i.qZA(),i.TgZ(11,"div",4),i._UZ(12,"input",9,10),i.qZA(),i.TgZ(14,"div",4),i._UZ(15,"input",11,12),i.qZA(),i.TgZ(17,"div",13),i.TgZ(18,"button",14),i.NdJ("click",function(){i.CHM(e);const r=i.MAs(7),s=i.MAs(10),a=i.MAs(13),n=i.MAs(16);return t.edit(r.value,s.value,a.value,n.value),r.value="",s.value="",a.value="",n.value=""}),i._uU(19,"Modificar "),i.qZA(),i.qZA(),i.qZA(),i.qZA()}},styles:[".bordeVerde[_ngcontent-%COMP%]{background-color:#84b68f;border-radius:5px}.borde[_ngcontent-%COMP%], .bordeVerde[_ngcontent-%COMP%]{padding:30px}"]}),e})()}];let d=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=i.oAB({type:e}),e.\u0275inj=i.cJS({imports:[[s.ez,o.Bz.forChild(c)]]}),e})()}}]);