name_of_the_student_array = [];

function submit() 
{
    var displaystudent=[];
   for(var j=1; j<=4; j++)
   {
       var nameofthesudent=document.getElementById("name"+j).value;
       console.log(nameofthesudent);
       name_of_the_student_array.push(nameofthesudent);
   }
    console.log(name_of_the_student_array);
    lenghtofthestudentarray=name_of_the_student_array.length;
    console.log(lenghtofthestudentarray);

    for(var k=0; k<lenghtofthestudentarray; k++)
    {
        displaystudent.push("<h4>NAME- "+name_of_the_student_array[k]+"</h4>");
        console.log(displaystudent)
    }
    console.log(displaystudent)
    document.getElementById("displaynameswithcoma").innerHTML=displaystudent;

    var nocomas=displaystudent.join(" ");
    console.log(nocomas);
    document.getElementById("displaynameswithoutcoma").innerHTML=nocomas;
}
function sorting()
{
    name_of_the_student_array.sort();

    console.log(name_of_the_student_array);
    var displaystudentsorting=[];

    lenghtofthestudentarray=name_of_the_student_array.length;
    console.log(lenghtofthestudentarray);

    for(var k=0; k<lenghtofthestudentarray; k++)
    {
        displaystudentsorting.push("<h4>NAME- "+name_of_the_student_array[k]+"</h4>");
        console.log(displaystudentsorting)
    }
    console.log(displaystudentsorting)
    document.getElementById("displaynameswithoutcoma").innerHTML=displaystudentsorting;

}
function newupdata()
{
    document.getElementById("displaynameswithoutcoma").innerHTML=name_of_the_student_array;
}