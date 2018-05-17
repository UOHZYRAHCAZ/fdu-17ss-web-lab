<?php

function generateLink($url, $label, $class) {
   $link = '<a href="' . $url . '" class="' . $class . '">';
   $link .= $label;
   $link .= '</a>';
   return $link;
}


function outputPostRow($number)  {
    include("travel-data.inc.php");
    $postId="postId".$number;
    $postId=$$postId;
    $userId="userId".$number;
    $userId=$$userId;
    $userName="userName".$number;
    $userName=$$userName;
    $date="date".$number;
    $date=$$date;
    $thumb="thumb".$number;
    $thumb=$$thumb;
    $title="title".$number;
    $title=$$title;
    $excerpt="excerpt".$number;
    $excerpt=$$excerpt;
    $reviewsNum="reviewsNum".$number;
    $reviewsNum=$$reviewsNum;
    $reviewsRating="reviewsRating".$number;
    $reviewsRating=$$reviewsRating;
    echo '
    <div class="row">
      <div class="col-md-4"><a href=';
    echo "post.php?id=".$postId.' class="">
      <img src=';
      echo "images/".$thumb.' alt=';
      echo $title.' class="img-responsive"/>
      </a>
      </div>
      <div class="col-md-8">
       <h2>';
     echo $title.'</h2>
       <div class="details">Posted by <a href=';echo "user.php?id=".$userId.' class="">';echo $userName.'</a>
       <span class="pull-right">';echo $date.'</span>
       <p class="ratings">';
       for ($i=0;$i<$reviewsRating;$i++){
         echo '<img src="images/star-gold.svg" width="16" />';
       }
       if($reviewsRating<5)
       for($j=$reviewsRating;$j<5;$j++){echo '<img src="images/star-white.svg" width="16" />';}


       echo $reviewsNum.' Reviews</p>
       </div>
       <p class="excerpt">';echo $excerpt.'</p>
       <p><a href=';echo "post.php?id=".$postId.' class="btn btn-primary btn-sm">Read more</a>
       </p>
       </div>
       </div>
       <hr/>;';
}

/*
  Function constructs a string containing the <img> tags necessary to display
  star images that reflect a rating out of 5
*/
function constructRating($rating) {
    $imgTags = "";

    // first output the gold stars
    for ($i=0; $i < $rating; $i++) {
        $imgTags .= '<img src="images/star-gold.svg" width="16" />';
    }

    // then fill remainder with white stars
    for ($i=$rating; $i < 5; $i++) {
        $imgTags .= '<img src="images/star-white.svg" width="16" />';
    }

    return $imgTags;
}

?>
