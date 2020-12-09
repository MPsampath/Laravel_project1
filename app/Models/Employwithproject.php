<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Employwithproject extends Model
{
    protected $table = 'employe_projects';
    protected $primaryKey = 'id';
    public $incrementing = false;
   // use HasFactory;
}
