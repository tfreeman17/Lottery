
	$(function(){
		$('input').change(function(){
			var  firstNumber=$('input[name="1"]:checked').val()
				,secondNumber=$('input[name="2"]:checked').val()
				,thirdNumber=$('input[name="3"]:checked').val()
				,forthNumber=$('input[name="4"]:checked').val()
				,submit=$('button[type="submit"]')


			$("input[type='radio']").click(function(){
      			$("#" + $(this).attr("name")).addClass("selected");
      			console.log(firstNumber.val())
				console.log(secondNumber.val())
				console.log(thirdNumber.val())
				console.log(forthNumber.val())
			});


			if (firstNumber && secondNumber && thirdNumber && forthNumber)
				submit.removeAttr('disabled')
			else
				submit.attr('disabled','disabled')
		}).eq(0).trigger('change')
	})
