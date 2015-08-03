/**
 * @author Michael Ion
 * @email michael.antonius.ion@gmail.com
 */
var dict_name = ["Kolonig", "asdf", "ww"];
var dict_meaning = ["1","2","3"];

function loadNewWord() {
	var random_index = Math.floor(Math.random()*dict_name.length);
	document.getElementById("name").innerHTML = dict_name[random_index];
	document.getElementById("description").innerHTML = dict_meaning[random_index];

}