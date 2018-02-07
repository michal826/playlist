// quick fix for Cloud9 warning:
/* global $ */

// Class 2:
// Complete displayList() to show a single song in the list

// Class 2:
// Complete displayList() to show all the songs in the list
// Complete clearList() funcion

// Class 3:
// Complete the addSong function to take an input from input boxes and push a new song to the playlist array. 

// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

// Songs
var mySong = {
	title: "Crown",
	artist: "Camila Cabello  Grey",
	song_Url: "https://open.spotify.com/album/3QB2VHZ40qHxyTHSEzqthX",
	image_Url: "https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
}

var myPlayList = [{
		title: "24K Magic",
		artist: "Bruno Mars",
		mp3_url: "https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
		image_url: "https://images-na.ssl-images-amazon.com/images/I/71Gr9aCHQfL._SY355_.jpg",
	},
	{
		title: "Sir Duke",
		artist: "Stevie Wonder",
		mp3_url: "https://open.spotify.com/track/2udw7RDkldLFIPG9WYdVtT",
		image_url: "https://upload.wikimedia.org/wikipedia/en/thumb/e/e2/Songs_in_the_key_of_life.jpg/220px-Songs_in_the_key_of_life.jpg",
	},
	{
		title: "Sorry",
		artist: "Justin Bieber",
		mp3_url: "https://open.spotify.com/track/09CtPGIpYB4BrO8qb1RGsF",
		image_url: "http://assets-s3.usmagazine.com/uploads/assets/articles/93827-justin-biebers-sorry-choreographer-spills-video-style-secrets-parris-goebel/1445638548_justin-bieber-sorry-dancers-zoom.jpg",
	}

]



// DOCUMENT READY FUNCTION
$(document).ready(function() {
	$(".add").click(function() {

		newSong();
		showSongs(myPlayList)

	});

});
console.log(myPlayList);

function showSongs() {
	for (var i = 0; i < myPlayList.length; i = i + 1) {
		console.log(myPlayList[i]);
		$(".songs").append(myPlayList[i].title);
	}
}



function newSong() {
	var title = $('#title').val();
	var artist = $('#name').val();
	var length = $('#length').val();
	var releaseDate = $('#date').val();
	var mp3Url = $('#mp3').val();
	var imageUrl = $('#image').val();
	var newSong = {
		"title": title,
		"artist": artist,
		"length": length,
		"releaseDate": releaseDate,
		"mp3Url": mp3Url,
		"imageUrl": imageUrl,
		"genres": [
			$('#titleInput').val()
		]
	}
	myPlayList.push(newSong);
	console.log(newSong);
}

function clearList() {
	$('#list').empty();
}
