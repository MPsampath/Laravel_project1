{{-- <!DOCTYPE HTML PUBLIC "-//W3C//DTD HTML 4.01//EN" "http://www.w3.org/TR/html4/strict.dtd">
<html>
<head>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.5.3/dist/css/bootstrap.min.css" integrity="sha384-TX8t27EcRE3e/ihU7zmQxVncDAy5uIKz4rEkgIXeMed4M0jlfIDPvg6uqKI2xXr2" crossorigin="anonymous">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
    <meta http-equiv="Content-Type" content="text/html;charset=UTF-8">
    <title>Document</title>
</head>
<body>



<div class="row">
    <div class="col-md-6">
<form action="/search" method="get">
<div class="input-group mb-3">
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
    <div class="input-group-prepend">
        <label class="input-group-text" for="project">Your Project</label>
    </div>

    <select class="custom-select" name="project" id="project">
        <option selected>Choose...</option>
        <option value="Project 1">project 1</option>
        <option value="project 2">project 2</option>
        <option value="project 3">project 3</option>
    </select>


</div>
<div class="input-group mb-3">
    <div class="input-group-prepend">
        <label class="input-group-text" for="department">Your department</label>
    </div>
    <select class="custom-select" name="department" id="department">

        <option selected>Choose...</option>
        <option value="department 1">department 1</option>
        <option value="department 2">department 2</option>
        <option value="department 3">department 3</option>
    </select>

</div>
    <button type="submit" class="btn btn-primary">Submit</button>
    <table class="table">
        <thead>
        <tr>
            <th scope="col">Name</th>
            <th scope="col">Id</th>
            <th scope="col">Address</th>
            <th scope="col">Company</th>
            <th scope="col">Project</th>
            <th scope="col">Department</th>
        </tr>
        </thead>
        <tbody>
        @foreach($searach as $emps)
            <tr>
                <th scope="row">{{$emps->emp_name}}</th>
                <td>{{$emps->id}}</td>
                <td>{{$emps->emp_address}}</td>
                <td>{{$emps->com_nsme}}</td>
                <td>{{$emps->pro_name}}</td>
                <td>{{$emps->dep_name}}</td>
            </tr>
        @endforeach

        </tbody>
    </table>
</form>
    </div>
</div>
</body>
</html>
 --}}
