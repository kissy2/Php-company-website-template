<?php
if (isset($_POST['email']))
{
    if ($_POST['email'] != "")
    {
        $email = filter_var($_POST['email'], FILTER_SANITIZE_EMAIL);

        if (!filter_var($email, FILTER_VALIDATE_EMAIL))
        {
            header($_SERVER['SERVER_PROTOCOL'] . ' ' . 400 . ' ' . 'The mail you entered is not a valid email address.');
            exit;

        }
        else
        {
            //mysql
            //		$link = mysqli_connect('localhost','root','');
            //		mysqli_select_db($link,'newsletter');
            //sqlite
            $link = new PDO('sqlite:/var/www/html/newsletter.db');
            $sql = 'INSERT INTO newsletter(email) values(:e)';
            $sql1 = 'SELECT email FROM newsletter WHERE email = "' . $email . '"';

            if ($link->query($sql1)->fetchColumn())
            {
                $result = "Your email is alredy registered.";
            }
            else
            {

                $p = $link->prepare($sql);
                $p->bindValue(':e', $email);
                $p->execute();
                if ($link->query($sql1)->fetchColumn())
                {
                    $result = "Your email has been successfully registered.";
                }
            }
        }
    }
    else
    {
        header($_SERVER['SERVER_PROTOCOL'] . ' ' . 400 . ' ' . 'Please enter your email address.');
        exit;
    }
}
echo $result;

?>
