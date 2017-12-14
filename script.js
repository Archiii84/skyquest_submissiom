
var URL = "http://localhost:1234/data.json";

$(document).ready(function(){
    $.get(URL, function(data, status){
        if(data){
          console.log(data);
          // response = $.parseJSON(data);
          trHTML = '';
          $.each(data, function (i, item) {
            trHTML += '<tr><td>' + item.clientID + '</td><td>' + item.first_name + '</td><td>' + item.last_name + '</td><td>' + item.business + '</td><td>' + item.email + '</td><td>' + item.phone + '</td><td>' + item.address.city + '</td><td class="status">' + item.status + '</td><td><i class="fa fa-eye" aria-hidden="true"></i> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> <i class="fa fa-trash-o" aria-hidden="true"></i>' +  '</td></tr>';
        });
         $('#records_table').append(trHTML);
         counter();
        }
    });

    //  count ready<script>
    // $('#total_client')[0].innerHTML = $('#client_table tr').length - 1;
});


$('#add_client').click(function(){
  console.log('clicked');
  data = '';
  data += '<tr><td>' + $('#cid')[0].value + '</td><td>' + $('#fname')[0].value + '</td><td>' + $('#lname')[0].value + '</td><td>' + $('#business')[0].value + '</td><td>' + $('#email')[0].value + '</td><td>' + $('#phone')[0].value + '</td><td>' + $('#city')[0].value + '</td><td class="status">' + $('#status')[0].value + '</td><td><i class="fa fa-eye" aria-hidden="true"></i> <i class="fa fa-pencil-square-o" aria-hidden="true"></i> <i class="fa fa-trash-o" aria-hidden="true"></i>' +  '</td></tr>';
  $('#records_table').append(data);
  counter();


  for(var i=0; i<16;i++){
    $('#add_client_form')[0][i].value = '';
  }

});


function counter(){
  $('#total_client')[0].innerHTML = $('#client_table tr').length - 1;
  var active = 0;
  var passive = 0;
  var pipeline = 0;
  var prospect = 0;



  $('.status').each(function() {

    if($(this)[0].innerHTML == 'Active'){
      active++;
    }
    if($(this)[0].innerHTML == 'Passive'){
      passive++;
    }
    if($(this)[0].innerHTML == 'Pipeline'){
      pipeline++;
    }
  if($(this)[0].innerHTML == 'Prospect'){
      prospect++;
    }

 });
$('#active_client')[0].innerHTML = active;
$('#passive_client')[0].innerHTML = passive;
$('#pipeline_client')[0].innerHTML = pipeline;
$('#prospect_client')[0].innerHTML = prospect;

}
