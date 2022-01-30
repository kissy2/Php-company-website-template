<?php 

// obj = "folder name" : [svg names in that folder]

$obj = array(

    "Backend" => array('.NET', 'Java', 'Node Js', 'PHP', 'Python', 'Rails'),

    "Front End" => array('Angular Js', 'HTML5', 'React Js', 'TypeScript', 'Vue', 'WPF'),

    "Mobile" => array('Android', 'Flutter', 'Ionic', 'IOS', 'Kotlin', 'ObjectiveC', 'React Native', 'Swift', 'Titanium', 'Xamarin'),

    "Database" => array('DynamoDB', 'Firebase', 'Mongo DB', 'MsSQL', 'MySQL', 'Oracle', 'PostgreSQL', 'Realm', 'Redis'),
    
    "Infra and DevOps" => array('Appium', 'AWS', 'Google Cloud', 'Gradle', 'Jenkins', 'Selenium'),
    
    "CMS" => array('Drupal', 'Joomla', 'Magento', 'Shopify', 'Wordpress')

);


$q = $_REQUEST['q'];

if (array_key_exists($q,$obj))
{
  $hint=$obj[$q];
}
else
{
//return first elem by default
  $hint = $obj['Backend'];
  $q='Backend';
}

$response='';

foreach($hint as $v) 
{
  $response .='<div _tech-item class="col-4 col-sm-4 col-md-3 col-lg-2"><div _tech-item class="icon-block" aria-label=""><div _tech-item class="icon-box" > <img src="assets/img/'.$q.'/'.$v.'.svg"></div><h5 _tech-item>'.$v.'</h5></div></div>';
}
echo $response;