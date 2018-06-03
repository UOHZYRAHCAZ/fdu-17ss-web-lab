<?php
//Fill this place

$servername = "localhost";
$username = "root";
$password = "";
$dbname="travel";
// 创建连接
$conn = new mysqli($servername, $username, $password,$dbname);

// 检测连接
if ($conn->connect_error) {
    die("连接失败: " . $conn->connect_error);
}


//****** Hint ******
//connect database and fetch data here
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Chapter 14</title>

      <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href='http://fonts.googleapis.com/css?family=Lobster' rel='stylesheet' type='text/css'>
    <link href='http://fonts.googleapis.com/css?family=Open+Sans' rel='stylesheet' type='text/css'>

    <link rel="stylesheet" href="css/bootstrap.min.css" />



    <link rel="stylesheet" href="css/captions.css" />
    <link rel="stylesheet" href="css/bootstrap-theme.css" />

</head>

<body>

    <?php include 'header.inc.php'; ?>


    <!-- Page Content -->
    <main class="container">
        <div class="panel panel-default">
          <div class="panel-heading">Filters</div>
          <div class="panel-body">
            <form action="Lab10.php" method="get" class="form-horizontal">
              <div class="form-inline">
              <select name="continent" class="form-control">
                <option value="0">Select Continent</option>
                <?php
                //Fill this place
                 $sql="SELECT ContinentCode, ContinentName, GeoNameId FROM Continents";
                 $result=$conn->query($sql);


                 echo "<script>
                   obj=document.getElementsByClassName('form-control')[1];
                   obj.onchange=function(){
                    window.location.href='lab10.php?continent='+obj.options[obj.options.selectedIndex].value;
                  }
                 </script>";

                 $continent=isset($_GET['continent'])? htmlspecialchars($_GET['continent']) : '';

                //****** Hint ******
                //display the list of continents

                while($row = $result->fetch_assoc()) {
                  echo '<option value=' . $row['ContinentCode'] . '>' . $row['ContinentName'] . '</option>';
                }
                if($_GET['continent'])echo '<script>
                obj=document.getElementsByClassName("form-control")[1];
                for (let i=0;i<obj.options.length;i++){if(obj.options[i].value=="'.$_GET['continent'].'"){index=obj.options[i];break;}}

                index.setAttribute("selected","selected");
                </script>';
                ?>
              </select>

              <select name="country" class="form-control">
                <option value="0">Select Country</option>
                <?php
                //Fill this place
                $sql="SELECT ISO,CountryName,Continent FROM Countries";
                $result=$conn->query($sql);
                //****** Hint ******
                /* display list of countries */
                while($row = $result->fetch_assoc()) {


                  if($row['Continent']==$_GET['continent'])
                  echo '<option value=' . $row['ISO'] . '>' . $row['CountryName'] . '</option>';

                }
                if(!empty($_GET['country']))echo '<script>
                obj=document.getElementsByClassName("form-control")[2];
                for (let i=0;i<obj.options.length;i++){if(obj.options[i].value=="'.$_GET['country'].'"){index=obj.options[i];break;}}

                index.setAttribute("selected","selected");
                </script>';
                ?>
              </select>
              <input type="text"  placeholder="Search title" class="form-control" name=title>
              <button type="submit" class="btn btn-primary">Filter</button>
              </div>
            </form>

          </div>
        </div>


		<ul class="caption-style-2">
            <?php
            //Fill this place

            if(!empty($_GET['country'])){$sql="SELECT * FROM ImageDetails WHERE CountryCodeISO='".$_GET['country']."'";}
            else {$sql="SELECT * FROM ImageDetails";}
            $result=$conn->query($sql);
            while($row=$result->fetch_assoc()){
                echo '
                  <li>
                    <a href="detail.php?id='.$row['ImageID'].'" class="img-responsive">
                      <img src="images/square-medium/'.$row['Path'].'" alt="'.$row['Title'].'">
                      <div class="caption">
                        <div class="blur"></div>
                        <div class="caption-text">
                          <p>'.$row['Title'].'</p>
                        </div>
                      </div>
                    </a>
                  </li>';
            }
            //****** Hint ******
            /* use while loop to display images that meet requirements ... sample below ... replace ???? with field data
            <li>
              <a href="detail.php?id=????" class="img-responsive">
                <img src="images/square-medium/????" alt="????">
                <div class="caption">
                  <div class="blur"></div>
                  <div class="caption-text">
                    <p>????</p>
                  </div>
                </div>
              </a>
            </li>
            */
            ?>
       </ul>


    </main>

    <footer>
        <div class="container-fluid">
                    <div class="row final">
                <p>Copyright &copy; 2017 Creative Commons ShareAlike</p>
                <p><a href="#">Home</a> / <a href="#">About</a> / <a href="#">Contact</a> / <a href="#">Browse</a></p>
            </div>
        </div>


    </footer>


        <script src="https://code.jquery.com/jquery-2.2.4.min.js" integrity="sha256-BbhdlvQf/xTY9gja0Dq3HiwQF8LaCRTXxZKRutelT44=" crossorigin="anonymous"></script>
        <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>
</body>

</html>
