import * as bootstrap from 'bootstrap';

document.addEventListener('DOMContentLoaded', function () {

	let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bss-tooltip]'));
	let tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	})
}, false);