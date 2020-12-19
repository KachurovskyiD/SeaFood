//ScrollOnScroll

let scr_items = document.querySelectorAll('._scr-item');
window.addEventListener('scroll', scroll_scroll);

function scroll_scroll() {
	let src_value = pageYOffset;

	if (scr_items.length > 0) {
		for (let index = 0; index < scr_items.length; index++) {
			let scr_item = scr_items[index];
			let scr_item_offset = offset(scr_item).top;
			let scr_item_height = scr_item.offsetHeight;
			let scr_item_point = window.innerHeight - (window.innerHeight - scr_item_height / 3);
			if (window.innerHeight > scr_item_height) {
				scr_item_point = window.innerHeight - scr_item_height / 3;
			}
			if ((src_value > scr_item_offset - scr_item_point) && src_value < (scr_item_offset + scr_item_height)) {
				scr_item.classList.add('_active');
			} else {
				// scr_item.classList.remove('_active');
			}
		}
	}
}

setTimeout(function () {
	//document.addEventListener("DOMContentLoaded", scroll_scroll);
	scroll_scroll();
}, 100);

//SameFunctions
function offset(el) {
	var rect = el.getBoundingClientRect(),
		scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
		scrollTop = window.pageYOffset || document.documentElement.scrollTop;
	return {
		top: rect.top + scrollTop,
		left: rect.left + scrollLeft
	}
}