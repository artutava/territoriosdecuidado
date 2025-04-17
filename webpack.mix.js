let mix = require('laravel-mix');

mix.setPublicPath('assets')
    .sass('resources/scss/purpose.scss', 'assets/css')
    .combine([
        'assets/libs/jquery/dist/jquery.min.js',
        'assets/libs/bootstrap/dist/js/bootstrap.bundle.min.js',
        'assets/libs/in-view/dist/in-view.min.js',
        'assets/libs/sticky-kit/dist/sticky-kit.min.js',
        'assets/libs/svg-injector/dist/svg-injector.min.js',
        'assets/libs/jquery.scrollbar/jquery.scrollbar.min.js',
        'assets/libs/jquery-scroll-lock/dist/jquery-scrollLock.min.js',
        'assets/libs/imagesloaded/imagesloaded.pkgd.min.js'
    ], 'assets/js/purpose.core.js')
    .combine([
        'resources/js/purpose/license.js',
        'resources/js/purpose/layout.js',
        'resources/js/purpose/init/popover.js',
        'resources/js/purpose/init/tooltip.js',
        
        // Arquivos de custom
        'resources/js/purpose/custom/bg-img-holder.js',
        'resources/js/purpose/custom/card.js',
        'resources/js/purpose/custom/dropdown.js',
        'resources/js/purpose/custom/forms.js',
        'resources/js/purpose/custom/navbar.js',
        'resources/js/purpose/custom/negative-margin.js',
        'resources/js/purpose/custom/pricing.js',
        'resources/js/purpose/custom/scroll-to.js',
        'resources/js/purpose/custom/shape.js',
        'resources/js/purpose/custom/spotlight.js',
    
        // Arquivos de maps
        'resources/js/purpose/maps/google-maps-custom.js',
        'resources/js/purpose/maps/google-maps.js',
    
        // Arquivos de libs
        'resources/js/purpose/libs/autosize.js',
        'resources/js/purpose/libs/countdown.js',
        'resources/js/purpose/libs/counter.js',
        'resources/js/purpose/libs/datepicker.js',
        'resources/js/purpose/libs/dropzone.js',
        'resources/js/purpose/libs/highlight.js',
        'resources/js/purpose/libs/list.js',
        'resources/js/purpose/libs/masonry.js',
        'resources/js/purpose/libs/notify.js',
        'resources/js/purpose/libs/nouislider.js',
        'resources/js/purpose/libs/popover.js',
        'resources/js/purpose/libs/quill.js',
        'resources/js/purpose/libs/scrollbar.js',
        'resources/js/purpose/libs/select.js',
        'resources/js/purpose/libs/sticky.js',
        'resources/js/purpose/libs/svg-injector.js',
        'resources/js/purpose/libs/swiper.js',
        'resources/js/purpose/libs/typed.js',
        'resources/js/purpose/libs/wavify.js',
    
        // Arquivo de charts
        'resources/js/purpose/charts/apexcharts.js'
    ]
    , 'assets/js/purpose.js');


// Options

mix.options({
    processCssUrls: false
});


// Live reload

mix.browserSync({
	browser: 'Google Chrome',
	proxy: false,
	server: {
		baseDir: './',
	},
	files: [
        '**/*.html',
        '**/*.js',
        '**/*.css'
    ]
});


// Production settings

if (mix.inProduction()) {

}
