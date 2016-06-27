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
		this.isOn = null;

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