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
		theme: 'blue'
	};

	function vSwitch(element, options) {
		this.element = element;
		this.settings = $.extend({}, defaults, options);
		this.isOn = false;

		this.privateMethodScopeAssignment();
	}

	$.extend(vSwitch.prototype, {
		privateMethodScopeAssignment: function () {
			create.apply(this);
			events.apply(this);
		}
	});

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