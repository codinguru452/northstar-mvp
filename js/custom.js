(function() {
	'use strict';

	var tinyslider = function() {
		var el = document.querySelectorAll('.testimonial-slider');

		if (el.length > 0) {
			var slider = tns({
				container: '.testimonial-slider',
				items: 1,
				axis: "horizontal",
				controlsContainer: "#testimonial-nav",
				swipeAngle: false,
				speed: 700,
				nav: true,
				controls: true,
				autoplay: true,
				autoplayHoverPause: true,
				autoplayTimeout: 3500,
				autoplayButtonOutput: false
			});
		}
	};
	(function() {
		'use strict';

		var initTestimonialSlider = function() {
			var el = document.querySelectorAll('.testimonial-slider');

			if (el.length > 0) {
				var slider = tns({
					container: '.testimonial-slider',
					items: 1,
					axis: "horizontal",
					controlsContainer: "#testimonial-nav",
					swipeAngle: false,
					speed: 700,
					nav: true,
					controls: true,
					autoplay: true,
					autoplayHoverPause: true,
					autoplayTimeout: 3500,
					autoplayButtonOutput: false
				});
			}
		};
		initTestimonialSlider();


		var initQuantityControls = function() {

			var currentValue,
				quantityContainers = document.getElementsByClassName('quantity-container');

			function bindQuantityControls(quantityContainer) {
			  var quantityAmount = quantityContainer.getElementsByClassName('quantity-amount')[0];
			  var increase = quantityContainer.getElementsByClassName('increase')[0];
			  var decrease = quantityContainer.getElementsByClassName('decrease')[0];
			  increase.addEventListener('click', function (e) { increaseQuantity(e, quantityAmount); });
			  decrease.addEventListener('click', function (e) { decreaseQuantity(e, quantityAmount); });
			}

			function init() {
				for (var i = 0; i < quantityContainers.length; i++ ) {
							bindQuantityControls(quantityContainers[i]);
				}
			};

			function increaseQuantity(event, quantityAmount) {
				currentValue = parseInt(quantityAmount.value, 10);

				console.log(quantityAmount, quantityAmount.value);

				currentValue = isNaN(currentValue) ? 0 : currentValue;
				currentValue++;
				quantityAmount.value = currentValue;
			}

			function decreaseQuantity(event, quantityAmount) {
				currentValue = parseInt(quantityAmount.value, 10);

				currentValue = isNaN(currentValue) ? 0 : currentValue;
				if (currentValue > 0) currentValue--;

				quantityAmount.value = currentValue;
			}
        
			init();
        
		};
		initQuantityControls();


	})();