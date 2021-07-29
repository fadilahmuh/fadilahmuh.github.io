$(document).ready(function () {
  $.get(
    "https://www.googleapis.com/youtube/v3/playlistItems",
    {
      part: "snippet",
      maxResults: "50",
      key: "AIzaSyBswKibMjCpmTpH9Z9g7v88KJl7xxhvGa8",
      playlistId: "UU6Wp_bA0LWBpJg2-nCIG88Q",
    },
    function (data) {
      console.log(data);
      $.each(data.items, function (i, item) {
        console.log(item);
        vidTittle = item.snippet.title;
        vidId = item.snippet.resourceId.videoId;

        // output = "<h3>" + vidTittle + "</h3>";
        output = '<iframe width="560" height="315" src="https://www.youtube.com/embed/' + vidId +'" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'

        $("#yt_res").append(output);
      });
    }
  );
});
