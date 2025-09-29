<?php
$directory = '.'; // Current directory
$files = scandir($directory);

echo "<h2>Files in Directory:</h2>";
echo "<ul>";
foreach ($files as $file) {
    // Skip current (.), parent (..) directory entries and your script itself
    if ($file != "." && $file != "..") {
        echo "<li><a href='$file'>$file</a></li>";
    }
}
echo "</ul>";
?>
