﻿var LibraryBrowser = {

	getPosterViewHtml: function (options) {

		var items = options.items;

		var primaryImageAspectRatio = options.useAverageAspectRatio ? LibraryBrowser.getAveragePrimaryImageAspectRatio(items) : null;

		var html = "";

		for (var i = 0, length = items.length; i < length; i++) {
			var item = items[i];

			var hasPrimaryImage = item.ImageTags && item.ImageTags.Primary;

			var href = item.url || (item.IsFolder ? (item.Id ? "itemList.html?parentId=" + item.Id : "#") : "itemdetails.html?id=" + item.Id);

			var showText = options.showTitle || !hasPrimaryImage || (item.Type !== 'Movie' && item.Type !== 'Series' && item.Type !== 'Season' && item.Type !== 'Trailer');

			var cssClass = showText ? "posterViewItem" : "posterViewItem posterViewItemWithNoText";

			html += "<div class='" + cssClass + "'><a href='" + href + "'>";

			if (options.preferBackdrop && item.BackdropImageTags && item.BackdropImageTags.length) {
				html += "<img src='" + ApiClient.getImageUrl(item.Id, {
					type: "Backdrop",
					height: 198,
					width: 352,
					tag: item.BackdropImageTags[0]
				}) + "' />";
			} else if (hasPrimaryImage) {

				var height = 300;
				var width = primaryImageAspectRatio ? parseInt(height * primaryImageAspectRatio) : null;

				html += "<img src='" + ApiClient.getImageUrl(item.Id, {
					type: "Primary",
					height: height,
					width: width,
					tag: item.ImageTags.Primary
				}) + "' />";

			}
			else if (item.BackdropImageTags && item.BackdropImageTags.length) {
				html += "<img src='" + ApiClient.getImageUrl(item.Id, {
					type: "Backdrop",
					height: 198,
					width: 352,
					tag: item.BackdropImageTags[0]
				}) + "' />";
			}
			else if (item.MediaType == "Audio" || item.Type == "MusicAlbum" || item.Type == "MusicArtist") {

				html += "<img style='background:" + LibraryBrowser.getMetroColor(item.Id) + ";' src='css/images/items/list/audio.png' />";
			}
			else {

				html += "<img style='background:" + LibraryBrowser.getMetroColor(item.Id) + ";' src='css/images/items/list/collection.png' />";
			}

			if (showText) {
				html += "<div class='posterViewItemText'>";
				html += item.Name;
				html += "</div>";
			}

			html += "</a></div>";
		}

		return html;
	},

	getAveragePrimaryImageAspectRatio: function (items) {

		var values = [];

		for (var i = 0, length = items.length; i < length; i++) {

			var ratio = items[i].PrimaryImageAspectRatio || 0;

			if (!ratio) {
				continue;
			}

			values[values.length] = ratio;
		}

		if (!values.length) {
			return null;
		}

		// Use the median
		values.sort(function (a, b) { return a - b; });

		var half = Math.floor(values.length / 2);

		if (values.length % 2)
			return values[half];
		else
			return (values[half - 1] + values[half]) / 2.0;
	},

	metroColors: ["#6FBD45", "#4BB3DD", "#4164A5", "#E12026", "#800080", "#E1B222", "#008040", "#0094FF", "#FF00C7", "#FF870F", "#7F0037"],

	getRandomMetroColor: function () {

		var index = Math.floor(Math.random() * (LibraryBrowser.metroColors.length - 1));

		return LibraryBrowser.metroColors[index];
	},

	getMetroColor: function (str) {

		if (str) {
			var char = str.substr(0,1).charCodeAt();
			var index = String(char).substr(char.length,1);

			return LibraryBrowser.metroColors[index];
		}else {
			return LibraryBrowser.getRandomMetroColor();
		}

	}
}