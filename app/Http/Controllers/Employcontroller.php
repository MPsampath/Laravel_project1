<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\Employwithproject;
use App\Models\Departments;
use App\Models\Employe;
use App\Models\Projects;
use http\Url;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\DB;
use function GuzzleHttp\Promise\all;

class Employcontroller extends Controller
{
   public function insert(Request $request){
      //dd($request->all());
       $employ = new Employe();
       $department = new Departments();
       $project = new Projects();
       $company = new Company();
       $employproject = new Employwithproject();


       $company->com_nsme =$request->company;
       $company->save();
       $comid = DB::getPdo()->lastInsertId();
       $department->com_id=$comid;
       $department->dep_name= $request->department;
       $department->save();
       $depid = DB::getPdo()->lastInsertId();
       $project->dep_id=$depid;
       $project->pro_name = $request->project;
       $project->save();
       $proid = DB::getPdo()->lastInsertId();
       $employ -> emp_name = $request->name;
       $employ -> emp_address = $request ->address;
       $employ->save();
       $empid = DB::getPdo()->lastInsertId();
       $employproject->employe_id=$empid;
       $employproject->projects_id=$proid;
       $employproject->save();

     return view('welcome');


   }


   public function index(Request $reques)
   {




       $searach = DB::table('projects')->where('projects.id','=',4)
           ->leftJoin('employe_projects','projects.id','=','employe_projects.projects_id')
           ->leftJoin('employes','employe_projects.employe_id','=','employes.id')
           ->rightJoin('departments','projects.dep_id','=','departments.id')
           ->rightJoin('companies','departments.com_id','=','companies.id')
           ->select('projects.pro_name','employes.emp_name','employes.id','companies.com_nsme','departments.dep_name','employes.emp_address')
           ->get();
            return view('Display', ['searach'=>$searach]);

            
//       $search_val = $reques->get('company');
   }
}