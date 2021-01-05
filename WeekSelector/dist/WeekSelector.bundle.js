!function(e){var t={};function r(s){if(t[s])return t[s].exports;var o=t[s]={i:s,l:!1,exports:{}};return e[s].call(o.exports,o,o.exports,r),o.l=!0,o.exports}r.m=e,r.c=t,r.d=function(e,t,s){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(r.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(s,o,function(t){return e[t]}.bind(null,o));return s},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=0)}([function(e,t){!function(){class e extends HTMLElement{constructor(){super(),this._props={},Date.prototype.getWeek=function(){var e=new Date(this.getTime());e.setHours(0,0,0,0),e.setDate(e.getDate()+3-(e.getDay()+6)%7);var t=new Date(e.getFullYear(),0,4);return 1+Math.round(((e.getTime()-t.getTime())/864e5-3+(t.getDay()+6)%7)/7)},this.getDateRangeOfWeek=function(e,t){var r,s,o,i;s=(r=new Date(""+t)).getDay()-1,console.log(r,s),r.setDate(r.getDate()-s),r.setDate(r.getDate()+7*(e-r.getWeek())),this.datearray=[];for(var n=0;n<7;n++)0===n?o=r.getMonth()+1+"-"+r.getDate()+"-"+r.getFullYear():(r.setDate(r.getDate()+1),6==n&&(i=r.getMonth()+1+"-"+r.getDate()+"-"+r.getFullYear())),this.datearray.push(r.getMonth()+1+"-"+r.getDate()+"-"+r.getFullYear());return o+" to "+i};var e=document.createElement("table");e.style="border-collapse: collapse;border: 1px solid black;width:100%;height:20%;table-layout:fixed;",e.id="yearTable";let t=document.createElement("tr");t.style="border: 1px solid black;";for(var r=0;r<4;r++){let e=document.createElement("td");e.style="border: 1px solid black;text-align:center;font-weight:bold;color:white",e.innerHTML=2017+r,e.id=2017+r,e.addEventListener("click",e=>{$(this).find("#yearTable").find("td").css("background-color",this._props.yearcolor),e.currentTarget.style.backgroundColor=this._props.selectedcolor,this._props.selectedyear=e.currentTarget.innerText,Number(this._props.selectedyear)===(new Date).getFullYear()?$(this).find("#"+(new Date).getWeek()).css("box-shadow","inset 0px 0px 0px "+this._props.borderthickness+"px "+this._props.bordercolor):$(this).find("#"+(new Date).getWeek()).css("border","1px solid black");let t=this.getDateRangeOfWeek(this._props.selectedweek,this._props.selectedyear).split(" to "),r=t[0],s=t[1];this.dispatchEvent(new CustomEvent("propertiesChanged",{detail:{properties:{selectedyear:e.currentTarget.innerText,startdate:r,enddate:s,datearray:this.datearray}}}))}),t.appendChild(e)}e.appendChild(t),$(this).append(e);var s=document.createElement("table");s.style="border-collapse: collapse;border: 1px solid black;width:100%;height:calc(80% - 30px);table-layout:fixed;",s.id="weekTable";for(var o=0;o<4;o++){let e=document.createElement("tr");e.style="border: 1px solid black;";for(r=0;r<13;r++){let t=document.createElement("td");t.style="border: 1px solid black;text-align:center;",t.innerHTML=r+1+13*o,t.id=r+1+13*o,t.addEventListener("click",e=>{$(this).find("#weekTable").find("td").css("background-color",this._props.color),e.currentTarget.style.backgroundColor=this._props.selectedcolor,this._props.selectedweek=e.currentTarget.id;let t=this.getDateRangeOfWeek(this._props.selectedweek,this._props.selectedyear).split(" to "),r=t[0],s=t[1];this.dispatchEvent(new CustomEvent("propertiesChanged",{detail:{properties:{selectedweek:e.currentTarget.id,startdate:r,enddate:s,datearray:this.datearray}}}));var o=new Event("onSelect");this.dispatchEvent(o)}),t.addEventListener("mouseover",e=>{let t=this.getDateRangeOfWeek(e.currentTarget.id,this._props.selectedyear).toSplit(" to ");$(this).find("#dateRange").html(t[0]+"(Mon) to "+t[1]+"(Sun)")}),t.addEventListener("mouseout",e=>{let t=this.getDateRangeOfWeek(this._props.selectedweek,this._props.selectedyear).toSplit(" to ");$(this).find("#dateRange").html(t[0]+"(Mon) to "+t[1]+"(Sun)")}),e.appendChild(t)}s.appendChild(e)}$(this).append(s);let i=document.createElement("div");i.id="dateRange";let n=this.getDateRangeOfWeek((new Date).getWeek(),(new Date).getFullYear()).split(" to ");i.innerHTML=n[0]+"(Mon) to "+n[1]+"(Sun)",i.style="width:100%;height:30px;text-align: center; font-weight: bold; color: white; background-color: rgb(88, 89, 91); font-size: 25px;",$(this).append(i)}onCustomWidgetBeforeUpdate(e){this._props={...this._props,...e}}onCustomWidgetAfterUpdate(e){if(("borderthickness"in e||"bordercolor"in e)&&Number(this._props.selectedyear)===(new Date).getFullYear()&&$(this).find("#"+(new Date).getWeek()).css("box-shadow","inset 0px 0px 0px "+this._props.borderthickness+"px "+this._props.bordercolor),"selectedweek"in e||"selectedyear"in e){if(""===this._props.selectedyear&&(this._props.selectedyear=(new Date).getFullYear(),!1===this._props.designMode&&this.dispatchEvent(new CustomEvent("propertiesChanged",{detail:{properties:{selectedyear:this._props.selectedyear}}}))),""===this._props.selectedweek&&(this._props.selectedweek=(new Date).getWeek(),!1===this._props.designMode&&this.dispatchEvent(new CustomEvent("propertiesChanged",{detail:{properties:{selectedweek:this._props.selectedweek}}}))),!1===this._props.designMode){let e=this.getDateRangeOfWeek(this._props.selectedweek,this._props.selectedyear).split(" to "),t=e[0],r=e[1];this.dispatchEvent(new CustomEvent("propertiesChanged",{detail:{properties:{startdate:t,enddate:r,datearray:this.datearray}}}))}$(this).find("td").css("background-color",this._props.color),$(this).find("#yearTable").find("td").css("background-color",this._props.yearcolor),$(this).find("#"+this._props.selectedweek).css("background-color",this._props.selectedcolor),$(this).find("#"+this._props.selectedyear).css("background-color",this._props.selectedcolor)}if("color"in e&&($(this).find("td").css("background-color",e.color),$(this).find("#yearTable").find("td").css("background-color",this._props.yearcolor),$(this).find("#"+this._props.selectedweek).css("background-color",this._props.selectedcolor),$(this).find("#"+this._props.selectedyear).css("background-color",this._props.selectedcolor)),"yearcolor"in e&&($(this).find("#yearTable").find("td").css("background-color",this._props.yearcolor),$(this).find("#"+this._props.selectedyear).css("background-color",this._props.selectedcolor)),"datefontsize"in e&&$(this).find("#dateRange").css({fontSize:this._props.datefontsize+"px",height:Number(this._props.datefontsize)+5+"px"}),"fontcolor"in e&&$(this).find("#weekTable").find("td").css("color",e.fontcolor),"selectedcolor"in e&&($(this).find("td").css("background-color",this._props.color),$(this).find("#yearTable").find("td").css("background-color",this._props.yearcolor),$(this).find("#"+this._props.selectedweek).css("background-color",e.selectedcolor),$(this).find("#"+this._props.selectedyear).css("background-color",e.selectedcolor)),"startyear"in e){let e=Number(this._props.startyear),r=$(this).find("#yearTable").find("td");for(var t=0;t<4;t++)r[t].innerHTML=e+t,r[t].id=e+t;$(this).find("#yearTable").find("td").css("background-color",this._props.yearcolor),$(this).find("#"+this._props.selectedyear).css("background-color",this._props.selectedcolor)}}}customElements.define("com-visualbi-weekselector",e)}()}]);