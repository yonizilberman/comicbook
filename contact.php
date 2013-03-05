<!doctype html system>
<html>
	<head>
		<meta http-equiv="Content-Type" content="text/html;charset=utf-8" />
		<title>contact</title>
		<!--<script type="text/javascript" src="menuMark.js"></script>-->
		<script type="text/javascript" src="a.js"></script>
		<script type="text/javascript" src="phpcode.js"></script>
		<link href="menu.css" rel="stylesheet" type="text/css" />
		<link href="body.css" rel="stylesheet" type="text/css">
	</head>
	<body id="body"  onLoad="showSiteLocation()">
		<script type="text/javascript">printMenu()</script>
		<div id="conntact">
			<p dir=rtl> אם יש לכם שאלה או דעה על האתר, אתם מוזמנים ליצור איתנו קשר:</p>
			<form name="tofes" id="tofes" dir="rtl" onsubmit="return checkform();" method="post">
				שם :
				<a id="st"><input type="text" name="fname" id="fname" value=""></a>
				<p>
					אימייל :
					<a><input type="text" name="email" id="email" value=""></a>
					<br/> <br/>	
					<textarea name="Comment" id="Comment" rows="10px" cols="70px" value="">
כתבו לנו...
					</textarea>
					<p align="center"><input type="submit" value="שלח"> <br/><br/></p>
				</p>
			</form>
	<?php 
		if($_REQUEST['submit'] != ""){
			$fname ="name=".$_REQUEST['fname']."\n"; 
			$email = $_REQUEST['email']."\n";
			$Comment ="Comment=".$_REQUEST['Comment']."\n"; 
			$to = "yoox21@gmail.com";
			$subject="request for information ";
			$body =$fname.$email.$Comment;
			if (mail($to, $subject, $body, "From: $email")){
				echo "good jab...php";
				exit();
			}
			else echo "Message delivery failed...";
		}
	?>
		</div>
		</div>
		<script type="text/javascript">printcopy()</script>
	</body>
</html>