var pos = 0;
var goRight = true;

function isNull(elementId) {
	var elementValue = "";
	
	if(elementId!=null && elementId!="") {
		//alert("Starting isNUll");		
		elementValue = document.getElementById(elementId).value;
		//alert("elementValue " + elementValue);
		if(elementValue!=null && elementValue!="") {
			return false;
		} 
					
	} else {
		console.log("Element Name is empty");
	}
				
	return true;
				
}

function doExist(elementId) {
	if(document.getElementById(elementId)!=null) {
		return true;
	}
	return false;
}

function elementDisplay(elementId) {
	elementDisplayToggle(elementId, true);
}

function elementHidden(elementId) {
	elementDisplayToggle(elementId, false);
}

function elementDisplayToggle(elementId, isDisplay) {
	
	var elementStyleDisplay = "";
	if (!doExist(elementId)) {
		console.log("Element: " + elementId + " does not exist.");
		
	} else {
		elementStyleDisplay = document.getElementById(elementId).style.display;
		if(isDisplay) {
			document.getElementById(elementId).style.display = "";
		} else {
			document.getElementById(elementId).style.display = "none";
		}
	}
}

function doItemMovement() {
	console.log("doItemMovement() pos=" + pos + " window.innerWidth " + window.innerWidth);
	var mypara = document.getElementById("movingItem");
	if(window.innerWidth > 500) {
		if (goRight) {
			pos += 5;
			if (pos > window.innerWidth - 500) {
				goRight = false;
			}
		} else {
			pos -= 5;
			if (pos < 0) {
				goRight = true;
			}
		}
		var posString = pos + "px";
		mypara.style.left = posString;
	} else {
		//do not move because the window's width is too short.
	}
}

//index page script start
var images = ["/study/img/lakelouise.jpg", "/study/img/morainelake.jpg", "/study/img/minnewanka.jpg"];
			var linkWebsites = ["https://www.banfflakelouise.com/lake-louise", "https://www.banfflakelouise.com/moraine-lake", "https://www.banfflakelouise.com/lake-minnewanka"];
			var descriptions = ["Lake Louise is world famous for its turquoise lakes, the Victoria Glacier, soaring mountain backdrop, palatial hotel, and incredible hiking and skiing. Surrounded by a lifetime�s worth of jaw-dropping sights and adventures, Lake Louise is a rare place that must be experienced to be believed.",
								"Its waters are the most amazing colour, a vivid shade of turquoise that changes in intensity through the summer as the glaciers melt. Set in the rugged Valley of the Ten Peaks, Moraine Lake is surrounded by mountains, waterfalls, and rock piles, creating a scene so stunning it almost seems unreal. Sit lakeside and absorb the sights and pure mountain air, or explore further by canoeing and hiking. It�s an iconically jaw-dropping place that is sure to leave a lasting impression.",
								"The early morning light casts a soft glow on the dark water. Across the lake, the mountains stand stark and impressive against the sky. A lone deer is drinking at the shoreline, and you can hear the faint tapping of a woodpecker somewhere in the woods. A shuffling noise behind alerts you to a herd of majestic bighorn sheep watching you inquisitively. Nature is coming alive around you and you�re happy you woke early to experience it. This is what you came to the Canadian Rockies for."];
								
			//var timer = setTimeout("code to run", 60000);
			//clearTimeout(timer);
			var popupWin = null;
			var timer = null;
			
			function loadImagesAndDescriptionsToTable() {
				//debugger;
				if(doExist("imageTable")) {
							
					var table = document.getElementById("imageTable");
					var imagesLength = images.length;
					var link = "";
					
					for(i=0; i<imagesLength; i++) {
						var row = table.createTBody();
						
						row.innerHTML += "<tr onclick=\"openWindow('" + linkWebsites[i] + "');\">" +
													"<td><img class=\"rounded-circle travelimage\" src=\"" + images[i] + "\"/></td>" +
													"<td>" + descriptions[i] + "</td>" +
												"</tr>";
						table.appendChild(row);
					}
				} else {
					//no need to load images & descriptions.
				}
			}
			
			function openWindow(url) {
				//debugger;
				popupWin = window.open(url, "_blank", "toolbar=yes,scrollbars=yes,resizable=yes,top=30%,left=50%,width=400,height=400");

				if(popupWin!=null) {
					//wait for pop up window loaded completely
					//debugger;
					setTimeout(startTimer,2000);
				}
			}
			
			function startTimer() {
				timer = setTimeout(closeWindow, 6000);
			}
			
			function closeWindow() {
				clearTimeout(timer);
				popupWin.close();
			}
			
			function moveItem() {
				pos +=5;
				document.getElementById("movingContainer").style.left = pos + "px";
			}
			
			
			function loadDestinationsToTable() {

				if(doExist("imageTable1")) {
				
					var table = document.getElementById("imageTable1");
					var imagesLength = images.length;
					
					for(i=0; i<imagesLength; i++) {
						var row = table.createTBody();
						row.innerHTML += "<tr>" +
												"<td data-toggle=\"popover\" data-trigger=\"hover\" html=\"true\" data-content=\""
												+ "<img class='rounded-circle travelimage' src='" + images[i] + "'/>" + "\"" + ">" + descriptions[i] + "</td>" +
												"</tr>";							
						table.appendChild(row);
					}
				} else {
					//no need to load images & descriptions.
				}
			}
//index page script end
