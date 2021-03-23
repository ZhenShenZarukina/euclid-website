document.addEventListener('DOMContentLoaded', function() {

document.querySelector('#burger').addEventListener('click', function () {                        /* это для задания 4*/
    document.querySelector('#menu').classList.toggle('is-active')
})




    document.querySelectorAll('.section-work__link').forEach (function(tabsBtn) { 
        tabsBtn.addEventListener('click', function(event) {
            const path = event.currentTarget.dataset.path;
            document.querySelectorAll('.tab__content').forEach(function(tabContent) {
                tabContent.classList.remove('section-work__content-active')
            })
            document.querySelector(`[data-target="${path}"]`).classList.remove('tab__content-off')
            document.querySelector(`[data-target="${path}"]`).classList.add('section-work__content-active')
        })
    })
})