<html>
	<head>
		<title>REcommend: Welcome!</title>


		<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.3/jquery.min.js"></script> 
		<!-- <script src="scripts/jquery.js"></script>
		<!-- Latest compiled and minified CSS -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap.min.css">

		<!-- Optional theme -->
		<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/css/bootstrap-theme.min.css">

		<!-- Latest compiled and minified JavaScript -->
		<script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.4/js/bootstrap.min.js"></script>

		
		<!--<script src="scripts/test.js"></script>-->
		<link rel="stylesheet" href="styles/main.css">
	</head>


	<body>
		<div class='container'>
			<div class='col-md-12 ' id='top-banner'>
				<div class='col-md-10'>
					<div class='row' id='rec-top'>REcommend</div>
					<div class='row'> REduce, REuse, REcycle with REcommend</div>
				</div>
				<div class='col-md-2'>
					<a href='#"'><img src='images/rec2.gif' alt='REcommend' style='height:100px;width:100px;'></a>

				</div>	
			</div>

			<div id='mynav' class='col-md-12'>
			<?php 
				header("Access-Control-Allow-Headers: https://maps.googleapis.com/");
				header("Access-Control-Allow-Origin: https://maps.googleapis.com/");

				include 'nav.php'; 
			?>

			</div>

