$apikey = "AIzaSyBswKibMjCpmTpH9Z9g7v88KJl7xxhvGa8";
$channelId = "UC6Wp_bA0LWBpJg2-nCIG88Q";
// $pl_id;

$.get(
  "https://www.googleapis.com/youtube/v3/channels",
  {
    part: "snippet,statistics,contentDetails",
    key: $apikey,
    id: $channelId,
  },
  function (data) {
    $pl_id = data.items[0].contentDetails.relatedPlaylists.uploads;
    console.log("Get id PL");
    $.get(
      "https://www.googleapis.com/youtube/v3/playlistItems",
      {
        part: "snippet",
        maxResults: "50",
        key: $apikey,
        playlistId: $pl_id,
      },
      function (data) {
        $.each(data.items, function (i, item) {
          vidTittle = item.snippet.title;
          vidId = item.snippet.resourceId.videoId;
          vidURL = "https://www.youtube.com/watch?v=" + vidId;
          vidThumb = item.snippet.thumbnails.standard.url;

          output =
            '<div class="slide-item"><div class="thumb"><a href="'+ vidURL +'" data-lity><img src="' +
            vidThumb +
            '" alt="" /></a></div></div>';

          $("#yt_res").append(output);
        });

        $("#yt_res").slick({
          rows: 2,
          dots: true,
          prevArrow: '<i class="fas fa-chevron-left sa-left"></i>',
          nextArrow: '<i class="fas fa-chevron-right sa-right"></i>',
          infinite: false,
          speed: 300,
          slidesToShow: 3,
          slidesToScroll: 2,
        });
      }
    );
    // console.log("YT Api executed");
  }
);
