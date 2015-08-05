/**
 * @author Michael Ion
 * @email michael.antonius.ion@gmail.com
 */
var dict_name = ["Kolonig", "asdf", "ww"];
var used_name = [];
var dict_meaning = ["This is a super long description of alsdfkij aslfkijasoflijasdof ijasdof ijasdof ijsdflkrejfl kejfl kej lkej sl j","2","3"];
var colorSelect = -1;


function css(selector, property, value) {
    for (var i=0; i<document.styleSheets.length;i++) {//Loop through all styles
        //Try add rule
		console.log(selector+ ' {'+property+':'+value+'}');
        try { document.styleSheets[i].insertRule(selector+ ' {'+property+':'+value+'}', document.styleSheets[i].cssRules.length);
        } catch(err) {try { document.styleSheets[i].addRule(selector, property+':'+value);} catch(err) {}}//IE
    }
}


function setRandomStyle() {
	/*There are two colors to set:
	First: Word-Bg
	Second: Body-Background, Description-Bg, NewButton-Bg
	Font color is white*/
	
	//don't change font color
	var values = [['#7D9ABC', '#2C3E50'],
				['#427F3F', '#4CB646']
				//['#', '#'],
				/*['#', '#'],
				['#', '#'],
				['#', '#'],
				['#', '#'],
				['#', '#'],
				['#', '#'],
				['#', '#'],
				['#', '#']*/
	]
	var selectors = ['body', '#newWordButton', '.name', '.desc'];

	//make fix for first, then animate for every following
	var tmp = Math.floor(Math.random()*values.length);
	colorSelect = tmp == colorSelect ? (tmp+1)%values.length : tmp;
	$(selectors[0]).animate({'background-color': values[colorSelect][1]}, { duration: 200, queue: false });
	$(selectors[1]).animate({'background-color': values[colorSelect][1]}, { duration: 200, queue: false });
	$(selectors[2]).animate({'background-color': values[colorSelect][0]}, { duration: 200, queue: false });
	$(selectors[3]).animate({'background-color': values[colorSelect][1]}, { duration: 200, queue: false });
	css(selectors[3], 'background-color', values[colorSelect][1]);

}

function main() {
	setRandomStyle();
	fitText(document.getElementById('fittext'), 1.2);
	loadNewWord();
	var names = document.getElementsByClassName("name");
	[].forEach.call(names, addDescription);
	
}

//gets called to initialize everything
function loadFirst(){}

//gets called to initialize new words and contents
function loadNew() {}

function loadNewWord() {
	var names = document.getElementsByClassName("name");
	for (i = 0; i < names.length; i++) {
		var random_index = Math.floor(Math.random()*dict_name.length);
		used_name[i] = random_index;
		//don't override inserted div
		names[i].innerHTML = dict_name[random_index];
	}
	
	var descs = document.getElementsByClassName("desc");
	for (i = 0; i < descs.length; i++) {
		var d = descs[i];
		d.innerHTML = dict_meaning[used_name[i]];
	}
}

window.onresize = function(event) {
	var d = document.getElementsByClassName("desc");
	[].forEach.call(d, function(temp){ setSmallerFontSize(temp);});
}

function setSmallerFontSize(obj) {
	obj.style.fontSize = document.getElementById("fittext").style.fontSize.split("px")[0] * 0.65 + "px";
}

function addDescription(name) {
	var desc = document.createElement('div');
	desc.setAttribute('class', 'desc');
	desc.innerHTML = "this is an interesting description!";
	name.parentNode.insertBefore(desc, name.nextSibling);
	
	//make the description font smaller than the fittext font size
	setSmallerFontSize(desc);
	
	$(name).click(function(){
		var descs = document.getElementsByClassName("desc");
		for (i = 0; i < descs.length; i++) {
			var d = descs[i];
			if(d !== desc && d.style.display !== "none") {
				$(d).animate({
					height: 'toggle'
				});
			}
		}
		$(desc).animate({
            height: 'toggle'
        });

    });
	desc.style.display = "none";
}


