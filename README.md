# Database
php artisan migrate:refresh
php artisan migrate:refresh --path=/database/migrations/2023_06_14_134249_create_student_table.php
<!-- php artisan passport:client --personal
php artisan passport:install -->
php artisan passport:keys --force

cd storage/
mkdir -p framework/{sessions,views,cache}
chmod -R 775 framework

# Make Controller
Controller & Model
php artisan make:controller Common/ApiController --resource --model=Terms

# Table
php artisan make:migration create_privacy_table
php artisan make:migration create_terms_table

# Clear Cache
php artisan cache:clear
php artisan route:clear
php artisan config:clear
php artisan view:clear
php artisan route:cache

# Run seeder
php artisan db:seed --class=PermissionTableSeeder
php artisan db:seed --class=CreateAdminUserSeeder
php artisan db:seed --class=CreateRoleSeeder

php artisan ui bootstrap --auth

# Run server with Port 
php artisan serve --host=192.168.88.5 

# Other issue
npm install --legacy-peer-deps
cp .env.example .env
php artisan key:generate

# Allow Permission Directory
cd storage/
mkdir -p framework/{sessions,views,cache}
chmod -R 775 framework
chmod 777 -R storage
chown -R www-data:www-data storage
sudo chown -R www-data:www-data public

open -n -a /Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --args --user-data-dir="/tmp/chrome_dev_test" --disable-web-security

# Git
open -e ~/.zshrc
git revert HEAD
git clean -df //rever file
git reset --hard
git pull
git revert HEAD

php composer.phar install
php composer.phar -v
php composer.phar dump-autoload
Hello

# khod-laravel
