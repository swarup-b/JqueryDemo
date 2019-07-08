$(document).ready(function(){
	
	//Validating the form
	$('#btn').click(function(){
		var arr= getDetails();
		addRows(arr);
		 $("#f1")[0].reset();
		return false;
	})
	
	//validating name
	
	 $('#name').on('keypress keydown keyup',function(){
		 var name = $('#name').val();
		 if(name.length<6){
			 $('#nameSpan').text("Must be 6 letter");
			 $('#nameSpan').css('color', 'red');
		 }
		 else{
			 $('#nameSpan').html('&#10004;');
			 $('#nameSpan').css('color', 'green');
		 }
	 });
	
	//Validating email
	
	$('#email').on('keypress keydown keyup',function(){
		 var email = $('#email').val();
		 var indexat = email.indexOf("@"); //Index of "@" in the email field
		 var indexdot = email.indexOf("."); //Index of "." in the email field
		  if(indexat < 1 || (indexdot-indexat) < 2){
	         $('#email').focus();
			 $('#emailSpan').text("Not valid");
			 $('#emailSpan').css('color', 'red');
		 }
		 else{
			 $('#emailSpan').html('&#10004;');
			 $('#emailSpan').css('color', 'green');
		 }
	 });
	 
	 //validating password
	 
	  $('#password').on('keypress keydown keyup',function(){
		 var password = $('#password').val();
		 if(password.length<6){
			 $('#passSpan').text("Must be 6 letter");
			 $('#passSpan').css('color', 'red');
		 }
		 else{
			 $('#passSpan').html('&#10004;');
			 $('#passSpan').css('color', 'green');
		 }
	 });
	 
	 //Creating dynamic dropdown for State
	 $('#country').change(function(){
		 var country=$('#country').val();
		$('#sel').empty();
		var option0="<option>Select</option>";
		$('#sel').append(option0);
		for(var i=0;i<state[country].length;i++){
			var option="<option>"+state[country][i]+"</option>";
			$('#sel').append(option);
	    }
	 })
	 
	  //Creating dynamic dropdown for Districts
	 $('#sel').change(function(){
		 var state=$('#sel').val();
		$('#sel1').empty();
		var option0="<option>Select</option>";
		$('#sel1').append(option0);
		for(var i=0;i<districts[state].length;i++){
			var option="<option>"+districts[state][i]+"</option>";
			$('#sel1').append(option);
	    }
	 })
	
	
})


//getting country address data 
function getCountry(){
	var details=""
	var countryADD = $('#country').val();
		if(countryADD!='Select'){
			var stateVal=$('#sel').val();
			 if(stateVal!='Select'){
				 var dist=$('#sel1').val();
				 if(dist!='Select'){
					details=countryADD+" "+stateVal+" "+dist; 
				 }else{
					 $('#distSpan').text('Required')
					return false;
				 }
				  
			 }else{
				  $('#stateSpan').text('Required')
				 return false;
			 }
		}else{
			 $('#countrySpan').text('Required')
			 return false;
		}
	return details;
}

//Getting Checkbox value
function addRows(arr){
	var editDel="<td><input type=\"button\" id=\"edit\" value=\"Edit\"><input type=\"button\" class=\"delete\" value=\"Delete\"></td></tr>"
	var tr="<tr><td>"+arr[0]+"</td><td>"+arr[1]+"</td><td>"+arr[2]+"</td><td>"+arr[3]+"</td><td>"+arr[4]+"</td><td>"+arr[5]+"</td><td>"+arr[6]+"</td>";
	tr=tr+editDel;
	$('table').append(tr);


}
//getting the form data in a array
function getDetails(){
	var arr=[];
		arr.push($('#name').val());
		arr.push($('#email').val());
		arr.push($('#password').val());
		arr.push($("input[name='gndr']:checked").val());
		var countryData=getCountry();
		  var items=$("[name='lang']");
		var selectedItems="";
		for(var i=0; i<items.length; i++){
			if(items[i].type=='checkbox' && items[i].checked==true)
	    		selectedItems+=items[i].value+",";
			}
		arr.push(selectedItems);
		if(countryData==false){
			return false;
		}
		else arr.push(countryData);
	 
		arr.push($('#addrs').val());
		return arr;
}