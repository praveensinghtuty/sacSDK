(function()  {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Colored Box Properties</legend>
				<table>
					<tr>
						<td>Color</td>
						<td><input id="sps_color" type="color" size="40" maxlength="40"></td>
</tr>
<tr>
						<td>Year Color</td>
						<td><input id="sps_yearcolor" type="color" size="40" maxlength="40"></td>
</tr>
<tr>
						<td>Selected Color</td>
<td><input id="sps_selectedcolor" type="color" size="40" maxlength="40"></td>
					</tr>
<tr>
						<td>Font Color</td>
<td><input id="sps_fontcolor" type="color" size="40" maxlength="40"></td>
					</tr>
<tr>
<tr>
						<td>Current Week Border Color</td>
<td><input id="sps_bordercolor" type="color" size="40" maxlength="40"></td>
					</tr>
<tr>
						<td>Date Font Size</td>
<td><input id="sps_datefontsize" type="number" size="40" maxlength="40"></td>
					</tr>
<tr>
						<td>Current Week Border Thickness</td>
<td><input id="sps_borderthickness" type="number" size="40" maxlength="40"></td>
					</tr>
				</table>
				<input type="submit" style="display:none;">
			</fieldset>
		</form>
	`;

	class WeekSelectorSps extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
			this._shadowRoot.getElementById("sps_color").addEventListener("change", this._submit.bind(this));
      this._shadowRoot.getElementById("sps_yearcolor").addEventListener("change", this._submit.bind(this));
      this._shadowRoot.getElementById("sps_selectedcolor").addEventListener("change", this._submit.bind(this));
      this._shadowRoot.getElementById("sps_datefontsize").addEventListener("change", this._submit.bind(this));
      this._shadowRoot.getElementById("sps_fontcolor").addEventListener("change", this._submit.bind(this));
      this._shadowRoot.getElementById("sps_bordercolor").addEventListener("change", this._submit.bind(this));
      this._shadowRoot.getElementById("sps_borderthickness").addEventListener("change", this._submit.bind(this));
      
		}

		_submit(e) {
			e.preventDefault();
      console.log(this.color);
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
							color: this.color,
              selectedcolor:this.selectedcolor,
              fontcolor: this.fontcolor,
              yearcolor: this.yearcolor,
              datefontsize: this.datefontsize,
              borderthickness: this.borderthickness,
              bordercolor: this.bordercolor
						}
					}
			}));
		}

		set color(newColor) {
			this._shadowRoot.getElementById("sps_color").value = newColor;
		}

		get color() {
			return this._shadowRoot.getElementById("sps_color").value;
		}
    set datefontsize(newColor) {
			this._shadowRoot.getElementById("sps_datefontsize").value = newColor;
		}

		get datefontsize() {
			return this._shadowRoot.getElementById("sps_datefontsize").value;
		}
    
    set yearcolor(newColor) {
			this._shadowRoot.getElementById("sps_yearcolor").value = newColor;
		}

		get yearcolor() {
			return this._shadowRoot.getElementById("sps_yearcolor").value;
		}
    
    set bordercolor(newColor) {
			this._shadowRoot.getElementById("sps_bordercolor").value = newColor;
		}

		get bordercolor() {
			return this._shadowRoot.getElementById("sps_bordercolor").value;
		}
    
    set borderthickness(newColor) {
			this._shadowRoot.getElementById("sps_borderthickness").value = newColor;
		}

		get borderthickness() {
			return this._shadowRoot.getElementById("sps_borderthickness").value;
		}
    set selectedcolor(newColor) {
			this._shadowRoot.getElementById("sps_selectedcolor").value = newColor;
		}

		get selectedcolor() {
			return this._shadowRoot.getElementById("sps_selectedcolor").value;
		}
    
     set fontcolor(newColor) {
			this._shadowRoot.getElementById("sps_fontcolor").value = newColor;
		}

		get fontcolor() {
			return this._shadowRoot.getElementById("sps_fontcolor").value;
		}
    
	}

customElements.define("com-visualbi-weekselector-sps", WeekSelectorSps);
  })();