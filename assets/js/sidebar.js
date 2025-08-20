(function() {
	const products = document.getElementById('products');
	const tabLinks = document.querySelectorAll('nav.tabs-boxed .tab-link');
	const openBtn = document.getElementById('btn_mobile_menu');
	const closeBtn = document.getElementById('btn_close_sidebar');
	const sidebar = document.getElementById('mobile_sidebar');
	const backdrop = document.getElementById('sidebar_backdrop');

	function setView(view) {
		// Toggle active state on tabs
		tabLinks.forEach(function(tab) {
			const isActive = tab.getAttribute('data-view') === view;
			if (isActive) tab.classList.add('active'); else tab.classList.remove('active');
		});
		// Switch container class
		if (products) {
			products.classList.remove('grid-view', 'list-view');
			products.classList.add(view === 'list' ? 'list-view' : 'grid-view');
		}
	}

	// Attach handlers
	tabLinks.forEach(function(tab) {
		tab.addEventListener('click', function() { setView(tab.getAttribute('data-view')); });
		tab.addEventListener('keydown', function(e) {
			if (e.key === 'Enter' || e.key === ' ') { e.preventDefault(); setView(tab.getAttribute('data-view')); }
		});
	});

	// Mobile filter show/hide
	window.showHide = function(id) {
		var el = document.getElementById(id);
		if (!el) return;
		if (el.classList.contains('hidden')) { el.classList.remove('hidden'); }
		else { el.classList.add('hidden'); }
	};

	function openSidebar() {
		if (!sidebar || !backdrop) return;
		sidebar.classList.add('open');
		backdrop.classList.add('open');
		sidebar.setAttribute('aria-hidden', 'false');
		document.body.style.overflow = 'hidden';
	}
	function closeSidebar() {
		if (!sidebar || !backdrop) return;
		sidebar.classList.remove('open');
		backdrop.classList.remove('open');
		sidebar.setAttribute('aria-hidden', 'true');
		document.body.style.overflow = '';
	}

	openBtn && openBtn.addEventListener('click', openSidebar);
	closeBtn && closeBtn.addEventListener('click', closeSidebar);
	backdrop && backdrop.addEventListener('click', closeSidebar);
	window.addEventListener('keydown', function(e){ if (e.key === 'Escape') closeSidebar(); });

	// ensure closed on load
	closeSidebar();
})();