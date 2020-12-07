<!DOCTYPE html>

<html >
   
    <head>
    <link rel="stylesheet" href="{{asset('css/app.css')}}">
    </head>
    <title></title>
    <body>
        <div id="app">

        </div>

        <script src="{{asset('js/app.js')}}"></script>
   
    </body>
</html>

{{-- @extends('layouts.master')

@section('title')
 Welcome!
@endsection
@section('content')
   <div class="row">
       <div class="col-md-6">
           <h3>Sign Up</h3>
           <form action="/saveEmploy" method="post">
               {{csrf_field()}}
               <div class="form-group">
                   <label for="name">Your Name </label>
                   <input class="form-control" type="text" name="name" id="name">
               </div>
               <div class="form-group">
                   <label for="address">Your Address</label>
                   <input class="form-control" type="text" name="address" id="address">
               </div>
               <div class="input-group mb-3">
                   <div class="input-group-prepend">
                       <label class="input-group-text" for="project">Your Project</label>
                   </div>
                   <select class="custom-select" name="project" id="project">
                       <option selected>Choose...</option>
                       <option value="Project 1">Project 1</option>
                       <option value="Project 2">Project 2</option>
                       <option value="Project 3">Project 3</option>
                   </select>
               </div>
               <div class="input-group mb-3">
                   <div class="input-group-prepend">
                       <label class="input-group-text" for="company">Your Company</label>
                   </div>
                   <select class="custom-select" name="company" id="company">
                       <option selected>Choose...</option>
                       <option value="company 1">company 1</option>
                       <option value="company 2">company 2</option>
                       <option value="company 3">company 3</option>
                   </select>
               </div>
{{--               <div class="form-group">--}}
{{--                   <label for="department">Your Department</label>--}}
{{--                   <input class="form-control" type="text" name="department" id="department">--}}
{{--               </div>--}}
               {{-- <div class="input-group mb-3">
                   <div class="input-group-prepend">
                       <label class="input-group-text" for="company">Your department</label>
                   </div>
                   <select class="custom-select" name="department" id="department">
                       <option selected>Choose...</option>
                       <option value="department 1">department 1</option>
                       <option value="department 2">department 2</option>
                       <option value="department 3">department 3</option>
                   </select>
               </div>

               <button type="submit" class="btn btn-primary">Submit</button>
           </form>
           <br>
           <form action="/display" method="view">
               <button type="submit" class="btn btn-primary">Finde</button>
           </form>
       </div>
   </div>
@endsection


  --}}
