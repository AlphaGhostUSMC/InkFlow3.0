import * as bootstrap from 'bootstrap';

document.addEventListener('DOMContentLoaded', function () {

	let tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bss-tooltip]'));
	tooltipTriggerList.map(function (tooltipTriggerEl) {
		return new bootstrap.Tooltip(tooltipTriggerEl);
	})
}, false);