(function()  {
	let template = document.createElement("template");
	template.innerHTML = `
		<form id="form">
			<fieldset>
				<legend>Month Selector Properties</legend>
				<table>
					<tr>
						<td>Selected Week</td>
<td><select id="bps_selectedmonth">
<option value="1">1</option>
<option value="2">2</option>
<option value="3">3</option>
<option value="4">4</option>
<option value="5">5</option>
<option value="6">6</option>
<option value="7">7</option>
<option value="8">8</option>
<option value="9">9</option>
<option value="10">10</option>
<option value="11">11</option>
<option value="12">12</option>
<option value="13">13</option>
<option value="14">14</option>
<option value="15">15</option>
<option value="16">16</option>
<option value="17">17</option>
<option value="18">18</option>
<option value="19">19</option>
<option value="20">20</option>
<option value="21">21</option>
<option value="22">22</option>
<option value="23">23</option>
<option value="24">24</option>
<option value="25">25</option>
<option value="26">26</option>
<option value="27">27</option>
<option value="28">28</option>
<option value="29">29</option>
<option value="30">30</option>
<option value="31">31</option>
<option value="32">32</option>
<option value="33">33</option>
<option value="34">34</option>
<option value="35">35</option>
<option value="36">36</option>
<option value="37">37</option>
<option value="38">38</option>
<option value="39">39</option>
<option value="40">40</option>
<option value="41">41</option>
<option value="42">42</option>
<option value="43">43</option>
<option value="44">44</option>
<option value="45">45</option>
<option value="46">46</option>
<option value="47">47</option>
<option value="48">48</option>
<option value="49">49</option>
<option value="50">50</option>
<option value="51">51</option>
<option value="52">52</option>
</select></td>
					</tr>
<tr>
<td>Start Year</td>
<td><input type="number" id="bps_startyear"></td>
</tr>
<tr>
<td>Selected Year</td>
<td><input type="number" id="bps_selectedyear"></td>
</tr>
				</table>
				<input type="submit" style="display:none;">
			</fieldset>
		</form>
	`;

	class WeekSelectorBps extends HTMLElement {
		constructor() {
			super();
			this._shadowRoot = this.attachShadow({mode: "open"});
			this._shadowRoot.appendChild(template.content.cloneNode(true));
      this._shadowRoot.getElementById("bps_selectedmonth").addEventListener("change", this._submit.bind(this));
      this._shadowRoot.getElementById("bps_selectedyear").addEventListener("change", this._submit.bind(this));
      this._shadowRoot.getElementById("bps_startyear").addEventListener("change", this._submit.bind(this));
		}

		_submit(e) {
			e.preventDefault();
      console.log(this.color);
			this.dispatchEvent(new CustomEvent("propertiesChanged", {
					detail: {
						properties: {
              selectedweek:this.selectedweek,
              selectedyear:this.selectedyear,
              startyear:this.startyear
						}
					}
			}));
		}


    
    set selectedweek(newColor) {
			this._shadowRoot.getElementById("bps_selectedmonth").value = newColor;
		}

		get selectedweek() {
			return this._shadowRoot.getElementById("bps_selectedmonth").value;
		}
    
        set selectedyear(newColor) {
			this._shadowRoot.getElementById("bps_selectedyear").value = newColor;
		}

		get selectedyear() {
			return this._shadowRoot.getElementById("bps_selectedyear").value;
		}   
    set startyear(newColor) {
			this._shadowRoot.getElementById("bps_startyear").value = newColor;
		}

		get startyear() {
			return this._shadowRoot.getElementById("bps_startyear").value;
		}
	}

customElements.define("com-visualbi-weekselector-bps", WeekSelectorBps);
  })();