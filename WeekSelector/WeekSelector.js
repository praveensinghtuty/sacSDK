(function() { 


	class WeekSelector extends HTMLElement {
		constructor() {
			super(); 
      this._props = {};
 Date.prototype.getWeek = function() {
  var date = new Date(this.getTime());
  date.setHours(0, 0, 0, 0);
  // Thursday in current week decides the year.
  date.setDate(date.getDate() + 3 - (date.getDay() + 6) % 7);
  // January 4 is always in week 1.
  var week1 = new Date(date.getFullYear(), 0, 4);
  // Adjust to Thursday in week 1 and count number of weeks from date to week1.
  return 1 + Math.round(((date.getTime() - week1.getTime()) / 86400000 - 3 + (week1.getDay() + 6) % 7) / 7);
}

this.getDateRangeOfWeek = function(weekNo, y){
    var d1, numOfdaysPastSinceLastMonday, rangeIsFrom, rangeIsTo;
    d1 = new Date(''+y+'');
    numOfdaysPastSinceLastMonday = d1.getDay() - 1;
    d1.setDate(d1.getDate() - numOfdaysPastSinceLastMonday);
    d1.setDate(d1.getDate() + (7 * (weekNo - d1.getWeek())));
    rangeIsFrom = (d1.getMonth() + 1) + "-" + d1.getDate() + "-" + d1.getFullYear();
    d1.setDate(d1.getDate() + 6);
    rangeIsTo = (d1.getMonth() + 1) + "-" + d1.getDate() + "-" + d1.getFullYear() ;
    return rangeIsFrom + " to " + rangeIsTo;
};


      
      var yeartable= document.createElement("table");
      yeartable.style = "border-collapse: collapse;border: 1px solid black;width:100%;height:20%;table-layout:fixed;";
      yeartable.id = 'yearTable';
       let yeartableRow = document.createElement("tr");
          yeartableRow.style = "border: 1px solid black;"
      var year = 2017;
      for(var j=0;j<4;j++)
            {
              let tableCell = document.createElement("td");
              tableCell.style = "border: 1px solid black;text-align:center;font-weight:bold;color:white";
             tableCell.innerHTML = year+j;
             tableCell.id =  year+j;
              tableCell.addEventListener("click", e => { 
                $(this).find('#yearTable').find("td").css("background-color",this._props["yearcolor"]);
                e.currentTarget.style.backgroundColor = this._props["selectedcolor"];
                 this._props["selectedyear"] =  e.currentTarget.innerText;
                
                 if( Number(this._props["selectedyear"]) === new Date().getFullYear())
          {
            $(this).find("#"+new Date().getWeek()).css("border",this._props["borderthickness"]+"px solid "+this._props["bordercolor"]);
          }
        else
          {
             $(this).find("#"+new Date().getWeek()).css("border","1px solid black");
          }
                let  dateRange = this.getDateRangeOfWeek(this._props["selectedweek"],this._props["selectedyear"]).split(" to ");
                let startdate = dateRange[0];
                let enddate = dateRange[1];
                this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							selectedyear: e.currentTarget.innerText,
              startdate: startdate,
              enddate: enddate
						}
					}
			}));
               
				// var event = new Event("onSelect");
				// this.dispatchEvent(event);
			});
              yeartableRow.appendChild(tableCell);
            }
      
      yeartable.appendChild(yeartableRow);
      $(this).append(yeartable);
      var table= document.createElement("table");
      table.style = "border-collapse: collapse;border: 1px solid black;width:100%;height:calc(80% - 30px);table-layout:fixed;";
      table.id = "weekTable";
      for(var i=0;i<4;i++)
        {
           let tableRow = document.createElement("tr");
          tableRow.style = "border: 1px solid black;"
          for(var j=0;j<13;j++)
            {
              let tableCell = document.createElement("td");
              tableCell.style = "border: 1px solid black;text-align:center;";
              tableCell.innerHTML =j+1+(i*13);
              tableCell.id =j+1+(i*13);
              tableCell.addEventListener("click", e => { 
                $(this).find("#weekTable").find("td").css("background-color",this._props["color"]);
                e.currentTarget.style.backgroundColor = this._props["selectedcolor"];
                this._props["selectedweek"] =  e.currentTarget.id;
                let  dateRange = this.getDateRangeOfWeek(this._props["selectedweek"],this._props["selectedyear"]).split(" to ");
                let startdate = dateRange[0];
                let enddate = dateRange[1];
                this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							selectedweek: e.currentTarget.id,
              startdate: startdate,
              enddate: enddate
              
						}
					}
			}));
                
				var event = new Event("onSelect");
				this.dispatchEvent(event);
			});
              
         tableCell.addEventListener("mouseover", e =>{
           var  dateRange = this.getDateRangeOfWeek(e.currentTarget.id,this._props["selectedyear"]);
           $(this).find("#dateRange").html(dateRange);
           
         })     
              
        tableCell.addEventListener("mouseout", e =>{
          
          var  dateRange = this.getDateRangeOfWeek(this._props["selectedweek"],this._props["selectedyear"]);
           $(this).find("#dateRange").html(dateRange);
           
         })     
              tableRow.appendChild(tableCell);
            }
          table.appendChild(tableRow);
        }
     
      $(this).append(table);      
      var dateRange = document.createElement("div");
      dateRange.id = "dateRange";
      dateRange.innerHTML = this.getDateRangeOfWeek(new Date().getWeek(),new Date().getFullYear());
      dateRange.style = "width:100%;height:30px;text-align: center; font-weight: bold; color: white; background-color: rgb(88, 89, 91); font-size: 25px;"
       $(this).append(dateRange);

			
			
		}

		onCustomWidgetBeforeUpdate(changedProperties) {
			this._props = { ...this._props, ...changedProperties };
		}

		onCustomWidgetAfterUpdate(changedProperties) {		
      	if ("borderthickness" in changedProperties || "bordercolor" in changedProperties) {
           if( Number(this._props["selectedyear"]) === new Date().getFullYear())
          {
            $(this).find("#"+new Date().getWeek()).css("border",this._props["borderthickness"]+"px solid "+this._props["bordercolor"]);
          }
          
        }
      
        
      
			if ("selectedweek" in changedProperties || "selectedyear" in changedProperties) {
        
        if(this._props["selectedyear"] === "")
            {
              this._props["selectedyear"] = new Date().getFullYear();
             if(this._props["designMode"] === false)
               {
              this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							selectedyear: this._props["selectedyear"]
						}
					}
			}));
               }   
            }
         if(this._props["selectedweek"] === "")
            {
              this._props["selectedweek"] = new Date().getWeek();
                if(this._props["designMode"] === false)
               {
               this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							selectedweek: this._props["selectedweek"]
						}
					}
			}));
               }
            }
         if(this._props["designMode"] === false)
               {
        let  dateRange = this.getDateRangeOfWeek(this._props["selectedweek"],this._props["selectedyear"]).split(" to ");
                let startdate = dateRange[0];
                let enddate = dateRange[1];
        this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							startdate: startdate,
              enddate: enddate
						}
					}
			}));
               }
        
        $(this).find("td").css("background-color",this._props ["color"]);
        $(this).find('#yearTable').find("td").css("background-color",this._props ["yearcolor"]);
				$(this).find("#"+this._props["selectedweek"]).css("background-color",this._props ["selectedcolor"]);
        $(this).find("#"+this._props["selectedyear"]).css("background-color",this._props["selectedcolor"]);
			}
      
      	if ("color" in changedProperties) {
       $(this).find("td").css("background-color",changedProperties["color"]);
        $(this).find('#yearTable').find("td").css("background-color",this._props ["yearcolor"]);
        $(this).find("#"+this._props ["selectedweek"]).css("background-color",this._props ["selectedcolor"]);
        $(this).find("#"+this._props["selectedyear"]).css("background-color",this._props["selectedcolor"]);
			}
      	if ("yearcolor" in changedProperties) {
        $(this).find('#yearTable').find("td").css("background-color",this._props ["yearcolor"]);
        $(this).find("#"+this._props["selectedyear"]).css("background-color",this._props["selectedcolor"]);
			}
      	if ("datefontsize" in changedProperties) {
        $(this).find('#dateRange').css({"fontSize":this._props ["datefontsize"]+"px","height":(Number(this._props ["datefontsize"])+5)+"px"});
			}
      
      
      if ("fontcolor" in changedProperties) {
       $(this).find('#weekTable').find("td").css("color",changedProperties["fontcolor"]);
			}
            
      if ("selectedcolor" in changedProperties) {
       $(this).find("td").css("background-color",this._props ["color"]);
        $(this).find('#yearTable').find("td").css("background-color",this._props ["yearcolor"]);
        $(this).find("#"+this._props["selectedweek"]).css("background-color",changedProperties["selectedcolor"]);
        $(this).find("#"+this._props["selectedyear"]).css("background-color",changedProperties["selectedcolor"]);
			}
      if("startyear" in changedProperties)
        {          
          let year = Number(this._props["startyear"]);
          let cells = $(this).find("#yearTable").find("td");
          for(var i=0;i<4;i++)
            {
              cells[i].innerHTML = year+i;
              cells[i].id = year+i;
            }
         // $(this).find("#yearTable").find("td").css("background-color",this._props ["color"]);
          $(this).find('#yearTable').find("td").css("background-color",this._props ["yearcolor"]);
          $(this).find("#"+this._props["selectedyear"]).css("background-color",this._props["selectedcolor"]);
          
        }

		}
	}

	customElements.define("com-visualbi-weekselector", WeekSelector);
})();