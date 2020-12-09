<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\DB;

class Employe extends Model
{
    protected $table = 'employes';
    protected $primaryKey = 'id';
    protected $fillable = ['emp_name','emp_address'];
    public $incrementing = false;

    // public function projec(){
    //     return $this->belongsToMany('\App\Models\Projects')->withPivot('id');
    // }
}
