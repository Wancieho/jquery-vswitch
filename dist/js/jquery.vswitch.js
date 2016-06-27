/*
 * Project: vSwitch
 * Description: Checkbox switch jQuery plug-in
 * Author: https://github.com/Wancieho
 * License: MIT
 * Version: 0.0.1
 * Dependancies: jquery-1.*
 * Date: 24/06/2016
 */
;
(function ($) {
	'use strict';

	var pluginName = 'vSwitch';
	var defaults = {
		theme: ''
	};

	function vSwitch(checkbox, options) {
		this.checkbox = checkbox;
		this.settings = $.extend({}, defaults, options);
		this.isOn = false;

		this.privateMethodScopeAssignment();
	}

	$.extend(vSwitch.prototype, {
		privateMethodScopeAssignment: function () {
			create.apply(this);
			currentCheckboxState.apply(this);
			events.apply(this);
		}
	});

	function create() {
		$(this.checkbox).wrap('<div class="vSwitch">').parent().append('<div class="switch"><div class="button">');

		if (this.settings.theme !== '') {
			$(this.checkbox).parent().addClass(this.settings.theme);
		}

		$(this.checkbox).hide();
	}

	function currentCheckboxState() {
		if ($(this.checkbox).prop('checked')) {
			this.isOn = true;
			$(this.checkbox).siblings().find('.button').addClass('on');
		} else {
			this.isOn = false;
			$(this.checkbox).siblings().find('.button').removeClass('on');
		}
	}

	function events() {
		var scope = this;

		$(this.checkbox).siblings('.switch').on('click', function () {
			onOff.apply(scope);
		});
	}

	function onOff() {
		$(this.checkbox).trigger('click');

		if (this.isOn) {
			this.isOn = false;
			$(this.checkbox).siblings().find('.button').removeClass('on');
		} else {
			this.isOn = true;
			$(this.checkbox).siblings().find('.button').addClass('on');
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