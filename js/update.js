$(document).ready(function(){
	
	//Delete table
	$("#table tbody").on("click",".delete",function(){ 
	 var data=$(this).closest('tr');
	  $(this).closest('tr').remove();
	});
	
	//Editing the form data
	$("#table tbody").on("click","#edit",function(){ 
	 $('#subBtn').hide();
	  $('#hideBtn').show();
	 var updtBtn="<input type=\"button\" id=\"update\" value=\"Edit\">"
	 $('#first-div').append(updtBtn);
	 var data=$(this).closest('tr');
	 setTheFormData(data);
	 setRowObject(data);
	 
	});
	
	//update table
	$("#updateBtn").on("click",function(){ 
	  var data=getRowData();
	  var tdda=data.find('td:eq(0)');
	 data.find('td:eq(0)').text().replace('Swarup Bhol','erwef');
	   var arr=getDetails();
	  return false; 
	});
})


//setting the value to the respective field
function setTheFormData(data){
	 $('#name').val(data.find('td:eq(0)').text());			
	 $('#email').val(data.find('td:eq(1)').text());
	 $('#password').val(data.find('td:eq(2)').text());
	 var lannguage=data.find('td:eq(4)').text().split(",");
	 var languageDtls=$("[name='lang']");
	 for(var i=0; i<languageDtls.length; i++){
		for(var j=0;j<lannguage.length;j++){
			var check=languageDtls[i].value==lannguage[j] ? languageDtls[i].checked=true:false ;	
		}
	  }
	var country=data.find('td:eq(5)').text().split(" ");
	$('#country').val(country[0]);
	$('#sel').val(country[1]);
	$('#sel1').val(country[2]);
	$('#addrs').val(data.find('td:eq(6)').text());
	var gender=data.find('td:eq(3)').text();
	$("input[name='gndr']").prop("checked", true).val(gender);
	//alert($("input[name='gndr']").val(gender).checked());
	
	
}

//these two are act as getter and setter
var data;
function setRowObject(data){
	this. data=data;
}
function getRowData(){
	return data;
}
