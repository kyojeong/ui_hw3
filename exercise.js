$(document).ready(function() {
  $('#ajax-form button[type="submit"]').click((event) => {
    event.preventDefault()
    // Step 9 and step 10 code goes here

    $.get('./step5', {
			fname: $('#ajax-form input[name=fname]').val(),
  		lname: $('#ajax-form input[name=lname]').val(),
      },(data)=>{$('#ajax-output').html(data)

})
    // Step 11 code goes here
})
})
//step1
$(document).ready(function() {

	$('#list').click((event) => {
		event.preventDefault()
		$('#output1').html("");
		$.getJSON("./students.json",(data) => {
			$.each(data, function (id,name) {
				$('#output1').append(id+":"+name+"<br>");
})
})
})
});

//step2
$(document).ready(function() {
	$('#search-list').click((event) =>{
		event.preventDefault()
		$('#output2').html("");
		$.getJSON("./students.json",(data)=>{
			$.each(data, function(id,name){
				if(id==$('#form-search input[name=key]').val()){
					$('#output2').append("Hello,"+name+"<br>");
				}
				else{
					$('#output2').html("nobody is this ID");
				}
			})
		})
	})
})


$(document).ready(function() {
$('#add').click((event) => {
    event.preventDefault()
$.get('./add', {
  fname: $('#add-form input[name=ID]').val(),
  lname: $('#add-form input[name=name]').val()
})
})
})

$(document).ready(function() {
	$('#delete').click( (event) =>{
		event.preventDefault()
		$.get('./del', {
			fname: $('#delete-form input[name=ID]').val()
		})
	})
})
