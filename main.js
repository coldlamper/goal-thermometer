$( document ).ready(function() {
	$.fn.thermometer = function (current) {
	  $('.current').text(current);
		var $therm = this;
		//this.append('<div class="meter"></div>');

		var	$goal = $therm.find('.goal'),
				$current = $therm.find('.current'),
				$meter = $therm.find('.meter'),
				goalNum = $goal.text().replace(/\D/g, ''), //strip non-numbers from amount
				currentNum = $current.text().replace(/\D/g, ''), //strip non-numbers from amount
				thermHeight = 650,
				reached = currentNum / goalNum,
				level = thermHeight - (thermHeight * reached);

		$current.css({
			'top': level - ($current.height() / 2) + 'px'
		});

		$meter.css({
			'height': thermHeight - level + 'px'
		});

		if (goalNum == currentNum) {
			$meter.css({
				'-webkit-border-radius': '52px 52px 0 0',
				'-moz-border-radius': '52px 52px 0 0',
				'border-radius': '52px 52px 0 0'
			});
		}

	}
	var goal = '$7,500'
	var current = '$2,000'
	$('.goal').text(goal);
	$('#thermometer').thermometer(current);
	
	var newGoal = '';
	$(document).on("keypress", function (e) {
		if (e.charCode == 78 || e.charCode == 110) {
			newGoal = '';
			$('#thermometer').thermometer('$0');
		}

		if (e.charCode < 48 || e.charCode > 57) {
			return;
		}
		newGoal+=(e.charCode-48); 
		$('#thermometer').thermometer('$' + newGoal.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,'));
  	});
});

