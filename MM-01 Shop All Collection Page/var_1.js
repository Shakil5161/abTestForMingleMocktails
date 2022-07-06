var mm01ShopAllCollectionPage = {
        init: function() {
            this.mainCss();
            this.mainJs();
            this.goals();
        },
        mainCss: function() {
            var styles = document.createElement('style');
            styles.setAttribute('type', 'text/css');
            document.head.appendChild(styles).textContent =
                '' +
                /* CSS will be imported here */
                '';
        },
        mainJs: function() {
        	var shopAllBtn = document.querySelector('.site-header .site-nav--has-dropdown a');
        	var shopAllBtnMb = document.querySelector('.slide-nav__wrapper .slide-nav__table a')
            
        	shopAllBtn.setAttribute("href", "/collections/shop-all");
        	shopAllBtnMb.setAttribute("href", "/collections/shop-all");
        },
        goals: function() {}
    };
    (function pollOnload() {
        if (document.querySelector('header.site-header')) {
            try {
                mm01ShopAllCollectionPage.init();
                const styles = ["color: white", "background: #07090F", "font-size: 20px", "border: 3px solid red", "text-shadow: 1px 1px black", "padding: 5px"].join(";");
            console.log(`%cShakil Ahmed Software Engineer - ${new Date().toLocaleDateString()}`, styles);
            } catch (error) {
                console.log('Initialization error:', error);
            }
        } else {
            setTimeout(pollOnload, 25);
        }
    })();