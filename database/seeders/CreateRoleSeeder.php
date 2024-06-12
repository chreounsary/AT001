<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
class CreateRoleSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $datas = array(
            ['name' => 'Player']
        );
        foreach ($datas as $v) {
            $old_datas = Role::where('name', $v['name'])->first();
            if(!$old_datas) {
                Role::create($v);
            }
        }
    }
}
