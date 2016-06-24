;
(function ($) {
	'use strict';

	var pluginName = 'vSwitch';
	var defaults = {
		theme: 'blue'
	};

	function vSwitch(element, options) {
		this.element = element;
		this.settings = $.extend({}, defaults, options);
		this.isOn = false;

		this.privateMethodScopeAssignment();
	}

	//public methods
	$.extend(vSwitch.prototype, {
		privateMethodScopeAssignment: function () {
			create.apply(this);
			events.apply(this);
		}
	});

	//private methods
	function create() {
		$(this.element).wrap('<div class="vSwitch">').parent().append('<div class="switch"><div class="button">');

		if (this.settings.theme !== '') {
			$(this.element).parent().addClass(this.settings.theme);
		}

		$(this.element).hide();
	}

	function events() {
		var scope = this;

		$(this.element).siblings().find('.button').on('click', function () {
			onOff.apply(scope);
		});
	}

	function onOff() {
		if (this.isOn) {

		} else {
			console.debug($(this.element));
			$(this.element).siblings().find('.button').addClass('on');
		}
	}

	$.fn[pluginName] = function (options) {
		return this.each(function () {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new vSwitch(this, options));
			}
		});
	};
})(jQuery);