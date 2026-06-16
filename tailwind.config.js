module.exports = {
    important: false,
    content: [
        "src/views/**/*.twig",
        "src/assets/js/**/*.js",
        'node_modules/@salla.sa/twilight-tailwind-theme/safe-list-css.txt',
    ],
    darkMode: 'class',
    theme   : {
        container : {
            center : true,
            padding: '10px',
            screens: {
                '2xl': "1280px"
            }
        },
        fontFamily: {
            sans: [
                'var(--font-main)',
                '-apple-system',
                'BlinkMacSystemFont',
            ],
            primary: "var(--font-main)"
        },
        extend    : {
            transitionTimingFunction: {
              'elastic': 'cubic-bezier(0.55, 0, 0.1, 1)',
            },
            colors             : {
                'dark'         : '#1D1F1F',
                'darker'       : '#0E0F0F',
                'danger'       : '#AE0A0A',
                'primary-dark' : 'var(--color-primary-dark)',
                'accent'       : 'var(--color-accent)',
                'off-white'    : '#faf8f5',
                'warm-beige'   : '#f5f0eb',
                'charcoal'     : '#2d2d2d',
                'gold'         : '#C9A96E',
                'rose-gold'    : '#D4A5A5',
            },
            spacing: {
              '3.75': '15px',
              '7.5' : '30px',
              '18'  : '4.5rem',
              '22'  : '5.5rem',
              '58'  : '232px',
              '62'  : '248px',
              '100' : '28rem',
              '116' : '464px',
              '132' : '528px',
              '200' : '800px',
            },
            borderRadius       : {
                'large': '22px',
                'big'  : '40px',
                'tiny' : '3px',
                DEFAULT: '.75rem',
            },
            fontSize           : {
                'icon-lg'   : '33px',
                'xxs'       : '10px',
                'xxxs'      : '8px',
                'title-size': '42px',
                '22px'      : '22px',
            },
            lineHeight         : {
                '12': '3rem',
                '14': '3.5rem',
                '16': '4rem',
                '18': '4.5rem',
                '20': '5rem',
            },
            boxShadow          : {
                'default' : '5px 10px 30px #2B2D340D;',
                'top'     : '0px 0px 10px #0000001A;',
                'md'      : '5px 10px 99px #2B2D340D',
                'dropdown': '0 4px 8px rgba(161, 121, 121, 0.07)',
                'light'   : '0px 4px 15px rgba(1, 1, 1, 0.06)',
                'huge'    : '0px 3px 6px #00000029',
                'card'    : '0 2px 20px rgba(0,0,0,0.06)',
                'card-hover': '0 10px 40px rgba(0,0,0,0.1)',
            },
            width              : {
                '18': '4.5rem',
                '22': '5.5rem',
                '74': '18.5rem',
                '76': '19rem',
                '78': '19.5rem',
            },
            height             : {
                'banner'        : '200px',
                'lg-banner'     : '428px',
                'full-banner'   : '600px',
                '500'           : '500px',
                '460'           : '460px',
                'hero'          : '600px',
                'hero-sm'       : '400px',
            },
            minWidth           : {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            maxWidth           : {
                '1/4': '25%',
                '1/2': '50%',
                '3/4': '75%',
            },
            zIndex             : {
                '1': '1',
                '2': '2',
                '-1': '-1',
            },
            screens            : {
                'xxs': {'min': '380px', 'max': '479px'},
                'xs': '480px',
            },
        },
    },
    corePlugins: {
      outline: false,
    },
    plugins: [
      require('@salla.sa/twilight-tailwind-theme'),
      require('@tailwindcss/forms'),

    ],
}
