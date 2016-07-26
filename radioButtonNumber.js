
	$(function(){
		$('input').change(function(evt){
			var firstNumber= $('input[name="1"]:checked').val()
			var secondNumber= $('input[name="2"]:checked').val()
			var thirdNumber= $('input[name="3"]:checked').val()
			var forthNumber= $('input[name="4"]:checked').val()
			var submit = $('button[type="submit"]')
			var val = $(evt.target).val()
			console.log(firstNumber)
			console.log(secondNumber)
			console.log(thirdNumber)
			console.log(forthNumber)
			var arr = [firstNumber, secondNumber, thirdNumber, forthNumber]

		// $.each($('input[value="'+ val +'"]'), function(i, el){
		// 	el = $(el);
				
		// 		if (! el.is(':checked')){
		// 			el.attr('disabled','disabled')
		// 		}
		// 		else if (':unchecked'){
		// 			el.attr('enable','disabled')
		// 		 }
		// });
		});
		function submitButton(){
			function getNums(results){
				var array2= results.split(",").map(parseFloat);
				$("#displayNumbers").html(array2.toString());
			}
			bank [0]= bank[0] - 2

			function compare(array2, arr){
				count = 0
				for (var i = arr.length + 1; i <= 0; i++) {
					for (var j = array2.length + 1; j <= 0; j++) {
						if (arr[i] === array2[j])
						return count 1
			}
			function money(count){
				if 
					
			}
			}
			$.get("https://www.random.org/integer-sets/?sets=1&num=4&min=1&max=10&commas=on&sort=on&order=random&format=plain&rnd=new", getNums);
			var winnings = money(compare(array2, arr));
			bank[0] = bank [0] = winnings;
		}

		// $.get("https://www.random.org/integer-sets/?sets=1&num=4&min=1&max=10&commas=on&sort=on&order=random&format=plain&rnd=new", getNums);
 // }
		$("button").click(submitButton);
};






// $("button").click(getNums);
var bank = [10]
bank [0]=bank[0]
// function moneyCount(){}