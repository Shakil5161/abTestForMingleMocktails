var mm02RecipeMainNavigation = {
    init: function() {
        this.mainCss();
        this.mainJs();
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
    	var recipeSwap = `<ul class="site-nav site-navigation small--hide ab-about" style="display: flex;align-items: center;"></ul>`
    	var recipeForMb = `<li class="slide-nav__item site-nav__expanded-item">
          <a href="https://www.minglemocktails.com/blogs/recipes" class="slide-nav__link">Recipe
		  </a>
      </li>`
    	var recipeForDp = `<li class="site-nav__item site-nav__expanded-item">
          <a href="https://www.minglemocktails.com/blogs/recipes" class="site-nav__link">Recipe
		  </a>
      </li>`
      

      $('.site-nav.site-nav--icons').before(recipeSwap);
       $('.site-nav.site-navigation.small--hide .site-nav--has-dropdown').eq(1).appendTo('.ab-about');
      
      $('.site-nav.site-navigation.small--hide').eq(0).append(recipeForDp);
      
      $('#SlideNav .slide-nav__item.medium-up--hide').eq(0).before(recipeForMb);
    //   $('#SlideNav .slide-nav__item').eq(10).after(`<ul class="site-nav site-navigation small--hide" style="display: flex;align-items: center;"><li class="site-nav__item site-nav__expanded-item">
			 //<a href="https://www.minglemocktails.com/blogs/recipes" class="site-nav__link">
    //     Recipe
    //   </a></li></ul>`)
    },
};

	var num = 0;
(function pollOnload() {
   if (document.querySelector('body') && window.jQuery !== undefined ) {
        try {
            mm02RecipeMainNavigation.init();
            const styles = ["color: white", "background: #07090F", "font-size: 20px", "border: 3px solid red", "text-shadow: 1px 1px black", "padding: 5px"].join(";");
        console.log(`%cShakil Ahmed Software Engineer - ${new Date().toLocaleDateString()}`, styles);
        } catch (error) {
            console.log('Initialization error:', error);
        }
    } else if( num < 1000) {
    	num++
    	console.log('hi i am else if', num);
        setTimeout(pollOnload, 200);
    }
})();