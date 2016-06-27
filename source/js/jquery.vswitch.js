;
(function ($) {
	'use strict';

	var pluginName = 'vSwitch';
	var defaults = {
		theme: '',
		size: ''
	};

	function vSwitch(checkbox, options) {
		this.checkbox = checkbox;
		this.settings = $.extend({}, defaults, options);
		this.isOn = null;

		this.privateMethodScopeAssignment();
	}

	//public methods
	$.extend(vSwitch.prototype, {
		privateMethodScopeAssignment: function () {
			create.apply(this);
			currentCheckboxState.apply(this);
			events.apply(this);
		}
	});

	//private methods
	function create() {
		$(this.checkbox).wrap('<div class="vSwitch">').parent().append('<div class="switch"><div class="button">');

		var wrapper = $(this.checkbox).parent();

		if (this.settings.theme !== '') {
			wrapper.addClass(this.settings.theme);
		}

		if (this.settings.size !== '') {
			$(this.checkbox).parent().addClass(this.settings.size);
		}

		$(this.checkbox).hide();
	}

	function currentCheckboxState() {
		console.debug($(this.checkbox).parent().addClass('on'));
		if ($(this.checkbox).prop('checked')) {
			this.isOn = true;
			$(this.checkbox).parent().addClass('on');
		} else {
			this.isOn = false;
			$(this.checkbox).parent().removeClass('on');
		}
	}

	function events() {
		var scope = this;

		$(this.checkbox).on('click', function () {
			currentCheckboxState.apply(scope);
		});

		//when the switch is clicked trigger the checkbox click event
		$(this.checkbox).siblings('.switch').on('click', function () {
			$(scope.checkbox).trigger('click');
		});
	}

	$.fn[pluginName] = function (options) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new vSwitch(this, options));
			}
		});
	};
})(jQuery);