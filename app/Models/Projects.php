<?php

namespace App\Models;
use App\Models\Employe;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Projects extends Model
{
    protected $table = 'projects';
    protected $primaryKey = 'id';
    protected $fillable = ['pro_name'];
    public $incrementing = false;

    // public function employ(){
    //     //return $this->belongsToMany(Employe::all())->withPivot('id');
    // }
}
