<?php
session_start();
$languages = array(
    'en',
    'fr',
    'ar'
);

$parsedUrl = parse_url($_SERVER['HTTP_HOST']);
$host = explode('.', $parsedUrl['path']);
$subdomain = array_slice($host, count($host) > 2 ? 1 : 0, count($host) );
$url= '.'.join(".",$subdomain);

function clean($string)
{
    $string = str_replace(' ', '-', $string);
    return preg_replace('/[^A-Za-z0-9\-]/', '', $string);
}
if (isset($_POST["lang"]))
{
    $_POST["lang"] = clean($_POST["lang"]);
    if ($_SESSION["lang"] != $_POST["lang"] and in_array($_POST["lang"], $languages))
    {
        $_SESSION["lang"] = $_POST["lang"];
        setcookie("lang", $_SESSION["lang"], time() + 3600 * 24 * 365, '/', $url);
        echo "https://" . $_SESSION["lang"] . $url;
    }
}
else
{
    $subdomain = array_slice($host, 0, count($host) - 2);
    if (!empty($subdomain) and in_array($subdomain[0], $languages))
    {
        $_SESSION["lang"] = $subdomain[0];
        setcookie("lang", $_SESSION["lang"], time() + 3600 * 24 * 365, '/', $url);
    }
    else
    {
        if (isset($_COOKIE["lang"]))
        {
            $_COOKIE["lang"] = clean($_COOKIE["lang"]);
            if ($_SESSION["lang"] != $_COOKIE["lang"] and in_array($_COOKIE["lang"], $languages))
            {
                $_SESSION["lang"] = $_COOKIE["lang"];
            }
        }
        else
        {
            $_SESSION["lang"] = "en";
            setcookie("lang", 'en', time() + 3600 * 24 * 365, '/', $url); //add gio ip for default language

        }
    }

}
?>
