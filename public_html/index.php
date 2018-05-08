<?php
/**
 * Fastest web bootstrap file.
 */

// Set path constants
define('FASTEST_BASE_PATH', dirname(__DIR__));
define('FASTEST_VENDOR_PATH', FASTEST_BASE_PATH.'/fastest/vendors');

// Load Composer's autoloader
require_once FASTEST_VENDOR_PATH.'/autoload.php';

// Load dotenv?
if (file_exists(FASTEST_BASE_PATH.'/.env')) {
    (new Dotenv\Dotenv(FASTEST_BASE_PATH))->load();
}

// // Load and run Craft
// define('CRAFT_ENVIRONMENT', getenv('ENVIRONMENT') ?: 'production');
// $app = require FASTEST_VENDOR_PATH.'/craftcms/cms/bootstrap/web.php';
// $app->run();
