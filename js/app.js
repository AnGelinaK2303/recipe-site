const navigation = document.querySelector('.navigation');

document.addEventListener('DOMContentLoaded', function () {

    const hamburgerMenu = document.querySelector('.hamburger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');

    if (hamburgerMenu && mobileMenu) {
        hamburgerMenu.addEventListener('click', function () {
            mobileMenu.classList.toggle('open');
        });

        document.addEventListener('click', function (event) {
            if (
                mobileMenu.classList.contains('open') &&
                !mobileMenu.contains(event.target) &&
                !hamburgerMenu.contains(event.target)
            ) {
                mobileMenu.classList.remove('open');
            }
        });
    }

    // ===== search =====
    const searchForm = document.getElementById('searchForm');

    if (searchForm) {
        const input = document.getElementById('searchInput');
        const results = document.querySelectorAll('.search-result');
        const radios = document.querySelectorAll('input[name="category"]');
        const emptyMsg = document.getElementById('searchEmpty');
        const clearBtn = document.getElementById('filterClear');

        function applyFilter() {
            const query = input.value.trim().toLowerCase();
            const checked = document.querySelector('input[name="category"]:checked');
            const category = checked ? checked.value : '';
            let shown = 0;

            results.forEach(function (item) {
                const matchText = !query || item.textContent.toLowerCase().includes(query);
                const matchCategory = !category || item.dataset.cat === category;
                item.hidden = !(matchText && matchCategory);
                if (!item.hidden) shown++;
            });

            emptyMsg.hidden = shown !== 0;
        }

        searchForm.addEventListener('submit', function (e) {
            e.preventDefault();
            applyFilter();
        });

        input.addEventListener('input', applyFilter);

        radios.forEach(function (r) {
            r.addEventListener('change', applyFilter);
        });

        clearBtn.addEventListener('click', function () {
            radios.forEach(function (r) { r.checked = false; });
            input.value = '';
            applyFilter();
        });
    }

    // =====login =====
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (e) {
            e.preventDefault();
            alert('Signed in!');
        });
    }

    // =====signup =====
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        const pass1 = document.getElementById('signupPassword');
        const pass2 = document.getElementById('signupPassword2');
        const signupError = document.getElementById('signupError');

        signupForm.addEventListener('submit', function (e) {
            e.preventDefault();

            if (pass1.value !== pass2.value) {
                signupError.hidden = false;
                return;
            }

            signupError.hidden = true;
            signupForm.reset();
            alert('Account created!');
        });

        pass2.addEventListener('input', function () {
            signupError.hidden = true;
        });
    }

    const subscribeForm = document.getElementById('subscribeForm');
    if (subscribeForm) {
        subscribeForm.addEventListener('submit', function (e) {
            e.preventDefault();
            subscribeForm.reset();
            alert('Thanks for subscribing!');
        });
    }
});