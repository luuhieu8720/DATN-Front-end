import React from 'react';

function DashBoard() {
    const myHTML = `
    <head>
        <style id='wp-block-library-theme-inline-css' type='text/css'>
            .wp-block-audio figcaption {
                color: #555;
                font-size: 13px;
                text-align: center
            }
            .is-dark-theme .wp-block-audio figcaption {
            color: hsla(0, 0%, 100%, .65)
        }

        .wp-block-code {
            border: 1px solid #ccc;
            border-radius: 4px;
            font-family: Menlo, Consolas, monaco, monospace;
            padding: .8em 1em
        }

        .wp-block-embed figcaption {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .wp-block-embed figcaption {
            color: hsla(0, 0%, 100%, .65)
        }

        .blocks-gallery-caption {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .blocks-gallery-caption {
            color: hsla(0, 0%, 100%, .65)
        }

        .wp-block-image figcaption {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .wp-block-image figcaption {
            color: hsla(0, 0%, 100%, .65)
        }

        .wp-block-pullquote {
            border-top: 4px solid;
            border-bottom: 4px solid;
            margin-bottom: 1.75em;
            color: currentColor
        }

        .wp-block-pullquote__citation,
        .wp-block-pullquote cite,
        .wp-block-pullquote footer {
            color: currentColor;
            text-transform: uppercase;
            font-size: .8125em;
            font-style: normal
        }

        .wp-block-quote {
            border-left: .25em solid;
            margin: 0 0 1.75em;
            padding-left: 1em
        }

        .wp-block-quote cite,
        .wp-block-quote footer {
            color: currentColor;
            font-size: .8125em;
            position: relative;
            font-style: normal
        }

        .wp-block-quote.has-text-align-right {
            border-left: none;
            border-right: .25em solid;
            padding-left: 0;
            padding-right: 1em
        }

        .wp-block-quote.has-text-align-center {
            border: none;
            padding-left: 0
        }

        .wp-block-quote.is-large,
        .wp-block-quote.is-style-large,
        .wp-block-quote.is-style-plain {
            border: none
        }

        .wp-block-search .wp-block-search__label {
            font-weight: 700
        }

        :where(.wp-block-group.has-background) {
            padding: 1.25em 2.375em
        }

        .wp-block-separator.has-css-opacity {
            opacity: .4
        }

        .wp-block-separator {
            border: none;
            border-bottom: 2px solid;
            margin-left: auto;
            margin-right: auto
        }

        .wp-block-separator.has-alpha-channel-opacity {
            opacity: 1
        }

        .wp-block-separator:not(.is-style-wide):not(.is-style-dots) {
            width: 100px
        }

        .wp-block-separator.has-background:not(.is-style-dots) {
            border-bottom: none;
            height: 1px
        }

        .wp-block-separator.has-background:not(.is-style-wide):not(.is-style-dots) {
            height: 2px
        }

        .wp-block-table thead {
            border-bottom: 3px solid
        }

        .wp-block-table tfoot {
            border-top: 3px solid
        }

        .wp-block-table td,
        .wp-block-table th {
            padding: .5em;
            border: 1px solid;
            word-break: normal
        }

        .wp-block-table figcaption {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .wp-block-table figcaption {
            color: hsla(0, 0%, 100%, .65)
        }

        .wp-block-video figcaption {
            color: #555;
            font-size: 13px;
            text-align: center
        }

        .is-dark-theme .wp-block-video figcaption {
            color: hsla(0, 0%, 100%, .65)
        }

        .wp-block-template-part.has-background {
            padding: 1.25em 2.375em;
            margin-top: 0;
            margin-bottom: 0
        }
    </style>
    <style id='global-styles-inline-css' type='text/css'>
        body {
            --wp--preset--color--black: #000000;
            --wp--preset--color--cyan-bluish-gray: #abb8c3;
            --wp--preset--color--white: #ffffff;
            --wp--preset--color--pale-pink: #f78da7;
            --wp--preset--color--vivid-red: #cf2e2e;
            --wp--preset--color--luminous-vivid-orange: #ff6900;
            --wp--preset--color--luminous-vivid-amber: #fcb900;
            --wp--preset--color--light-green-cyan: #7bdcb5;
            --wp--preset--color--vivid-green-cyan: #00d084;
            --wp--preset--color--pale-cyan-blue: #8ed1fc;
            --wp--preset--color--vivid-cyan-blue: #0693e3;
            --wp--preset--color--vivid-purple: #9b51e0;
            --wp--preset--gradient--vivid-cyan-blue-to-vivid-purple: linear-gradient(135deg, rgba(6, 147, 227, 1) 0%, rgb(155, 81, 224) 100%);
            --wp--preset--gradient--light-green-cyan-to-vivid-green-cyan: linear-gradient(135deg, rgb(122, 220, 180) 0%, rgb(0, 208, 130) 100%);
            --wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange: linear-gradient(135deg, rgba(252, 185, 0, 1) 0%, rgba(255, 105, 0, 1) 100%);
            --wp--preset--gradient--luminous-vivid-orange-to-vivid-red: linear-gradient(135deg, rgba(255, 105, 0, 1) 0%, rgb(207, 46, 46) 100%);
            --wp--preset--gradient--very-light-gray-to-cyan-bluish-gray: linear-gradient(135deg, rgb(238, 238, 238) 0%, rgb(169, 184, 195) 100%);
            --wp--preset--gradient--cool-to-warm-spectrum: linear-gradient(135deg, rgb(74, 234, 220) 0%, rgb(151, 120, 209) 20%, rgb(207, 42, 186) 40%, rgb(238, 44, 130) 60%, rgb(251, 105, 98) 80%, rgb(254, 248, 76) 100%);
            --wp--preset--gradient--blush-light-purple: linear-gradient(135deg, rgb(255, 206, 236) 0%, rgb(152, 150, 240) 100%);
            --wp--preset--gradient--blush-bordeaux: linear-gradient(135deg, rgb(254, 205, 165) 0%, rgb(254, 45, 45) 50%, rgb(107, 0, 62) 100%);
            --wp--preset--gradient--luminous-dusk: linear-gradient(135deg, rgb(255, 203, 112) 0%, rgb(199, 81, 192) 50%, rgb(65, 88, 208) 100%);
            --wp--preset--gradient--pale-ocean: linear-gradient(135deg, rgb(255, 245, 203) 0%, rgb(182, 227, 212) 50%, rgb(51, 167, 181) 100%);
            --wp--preset--gradient--electric-grass: linear-gradient(135deg, rgb(202, 248, 128) 0%, rgb(113, 206, 126) 100%);
            --wp--preset--gradient--midnight: linear-gradient(135deg, rgb(2, 3, 129) 0%, rgb(40, 116, 252) 100%);
            --wp--preset--duotone--dark-grayscale: url('#wp-duotone-dark-grayscale');
            --wp--preset--duotone--grayscale: url('#wp-duotone-grayscale');
            --wp--preset--duotone--purple-yellow: url('#wp-duotone-purple-yellow');
            --wp--preset--duotone--blue-red: url('#wp-duotone-blue-red');
            --wp--preset--duotone--midnight: url('#wp-duotone-midnight');
            --wp--preset--duotone--magenta-yellow: url('#wp-duotone-magenta-yellow');
            --wp--preset--duotone--purple-green: url('#wp-duotone-purple-green');
            --wp--preset--duotone--blue-orange: url('#wp-duotone-blue-orange');
            --wp--preset--font-size--small: 13px;
            --wp--preset--font-size--medium: 20px;
            --wp--preset--font-size--large: 36px;
            --wp--preset--font-size--x-large: 42px;
        }

        body {
            margin: 0;
        }

        .wp-site-blocks>.alignleft {
            float: left;
            margin-right: 2em;
        }

        .wp-site-blocks>.alignright {
            float: right;
            margin-left: 2em;
        }

        .wp-site-blocks>.aligncenter {
            justify-content: center;
            margin-left: auto;
            margin-right: auto;
        }

        .has-black-color {
            color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-color {
            color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-color {
            color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-color {
            color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-color {
            color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-color {
            color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-color {
            color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-color {
            color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-color {
            color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-color {
            color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-color {
            color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-color {
            color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-background-color {
            background-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-background-color {
            background-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-background-color {
            background-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-background-color {
            background-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-background-color {
            background-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-background-color {
            background-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-background-color {
            background-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-background-color {
            background-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-background-color {
            background-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-background-color {
            background-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-background-color {
            background-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-black-border-color {
            border-color: var(--wp--preset--color--black) !important;
        }

        .has-cyan-bluish-gray-border-color {
            border-color: var(--wp--preset--color--cyan-bluish-gray) !important;
        }

        .has-white-border-color {
            border-color: var(--wp--preset--color--white) !important;
        }

        .has-pale-pink-border-color {
            border-color: var(--wp--preset--color--pale-pink) !important;
        }

        .has-vivid-red-border-color {
            border-color: var(--wp--preset--color--vivid-red) !important;
        }

        .has-luminous-vivid-orange-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-amber-border-color {
            border-color: var(--wp--preset--color--luminous-vivid-amber) !important;
        }

        .has-light-green-cyan-border-color {
            border-color: var(--wp--preset--color--light-green-cyan) !important;
        }

        .has-vivid-green-cyan-border-color {
            border-color: var(--wp--preset--color--vivid-green-cyan) !important;
        }

        .has-pale-cyan-blue-border-color {
            border-color: var(--wp--preset--color--pale-cyan-blue) !important;
        }

        .has-vivid-cyan-blue-border-color {
            border-color: var(--wp--preset--color--vivid-cyan-blue) !important;
        }

        .has-vivid-purple-border-color {
            border-color: var(--wp--preset--color--vivid-purple) !important;
        }

        .has-vivid-cyan-blue-to-vivid-purple-gradient-background {
            background: var(--wp--preset--gradient--vivid-cyan-blue-to-vivid-purple) !important;
        }

        .has-light-green-cyan-to-vivid-green-cyan-gradient-background {
            background: var(--wp--preset--gradient--light-green-cyan-to-vivid-green-cyan) !important;
        }

        .has-luminous-vivid-amber-to-luminous-vivid-orange-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-amber-to-luminous-vivid-orange) !important;
        }

        .has-luminous-vivid-orange-to-vivid-red-gradient-background {
            background: var(--wp--preset--gradient--luminous-vivid-orange-to-vivid-red) !important;
        }

        .has-very-light-gray-to-cyan-bluish-gray-gradient-background {
            background: var(--wp--preset--gradient--very-light-gray-to-cyan-bluish-gray) !important;
        }

        .has-cool-to-warm-spectrum-gradient-background {
            background: var(--wp--preset--gradient--cool-to-warm-spectrum) !important;
        }

        .has-blush-light-purple-gradient-background {
            background: var(--wp--preset--gradient--blush-light-purple) !important;
        }

        .has-blush-bordeaux-gradient-background {
            background: var(--wp--preset--gradient--blush-bordeaux) !important;
        }

        .has-luminous-dusk-gradient-background {
            background: var(--wp--preset--gradient--luminous-dusk) !important;
        }

        .has-pale-ocean-gradient-background {
            background: var(--wp--preset--gradient--pale-ocean) !important;
        }

        .has-electric-grass-gradient-background {
            background: var(--wp--preset--gradient--electric-grass) !important;
        }

        .has-midnight-gradient-background {
            background: var(--wp--preset--gradient--midnight) !important;
        }

        .has-small-font-size {
            font-size: var(--wp--preset--font-size--small) !important;
        }

        .has-medium-font-size {
            font-size: var(--wp--preset--font-size--medium) !important;
        }

        .has-large-font-size {
            font-size: var(--wp--preset--font-size--large) !important;
        }

        .has-x-large-font-size {
            font-size: var(--wp--preset--font-size--x-large) !important;
        }
    </style>
    <link rel='stylesheet' id='dizo-lightbox-styles-css'
        href='https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/plugins/dizo-image-hover/styles/lightbox.min.css?ver=349773c7a49fb104821f383504a1b7a1'
        type='text/css' media='all' />
    <style id='divi-style-parent-inline-inline-css' type='text/css'>
        /*!
Theme Name: Divi
Theme URI: http://www.elegantthemes.com/gallery/divi/
Version: 4.17.4
Description: Smart. Flexible. Beautiful. Divi is the most powerful theme in our collection.
Author: Elegant Themes
Author URI: http://www.elegantthemes.com
License: GNU General Public License v2
License URI: http://www.gnu.org/licenses/gpl-2.0.html
*/

        a,
        abbr,
        acronym,
        address,
        applet,
        b,
        big,
        blockquote,
        body,
        center,
        cite,
        code,
        dd,
        del,
        dfn,
        div,
        dl,
        dt,
        em,
        fieldset,
        font,
        form,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        html,
        i,
        iframe,
        img,
        ins,
        kbd,
        label,
        legend,
        li,
        object,
        ol,
        p,
        pre,
        q,
        s,
        samp,
        small,
        span,
        strike,
        strong,
        sub,
        sup,
        tt,
        u,
        ul,
        var {
            margin: 0;
            padding: 0;
            border: 0;
            outline: 0;
            font-size: 100%;
            -ms-text-size-adjust: 100%;
            -webkit-text-size-adjust: 100%;
            vertical-align: baseline;
            background: transparent
        }

        body {
            line-height: 1
        }

        ol,
        ul {
            list-style: none
        }

        blockquote,
        q {
            quotes: none
        }

        blockquote:after,
        blockquote:before,
        q:after,
        q:before {
            content: "";
            content: none
        }

        blockquote {
            margin: 20px 0 30px;
            border-left: 5px solid;
            padding-left: 20px
        }

        :focus {
            outline: 0
        }

        del {
            text-decoration: line-through
        }

        pre {
            overflow: auto;
            padding: 10px
        }

        figure {
            margin: 0
        }

        table {
            border-collapse: collapse;
            border-spacing: 0
        }

        article,
        aside,
        footer,
        header,
        hgroup,
        nav,
        section {
            display: block
        }

        body {
            font-family: Open Sans, Arial, sans-serif;
            font-size: 14px;
            color: #666;
            background-color: #fff;
            line-height: 1.7em;
            font-weight: 500;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }

        body.page-template-page-template-blank-php #page-container {
            padding-top: 0 !important
        }
        body.et_cover_background {
            background-size: cover !important;
            background-position: top !important;
            background-repeat: no-repeat !important;
            background-attachment: fixed
        }

        a {
            color: #2ea3f2
        }

        a,
        a:hover {
            text-decoration: none
        }

        p {
            padding-bottom: 1em
        }

        p:not(.has-background):last-of-type {
            padding-bottom: 0
        }

        p.et_normal_padding {
            padding-bottom: 1em
        }

        strong {
            font-weight: 700
        }

        cite,
        em,
        i {
            font-style: italic
        }

        code,
        pre {
            font-family: Courier New, monospace;
            margin-bottom: 10px
        }

        ins {
            text-decoration: none
        }

        sub,
        sup {
            height: 0;
            line-height: 1;
            position: relative;
            vertical-align: baseline
        }

        sup {
            bottom: .8em
        }

        sub {
            top: .3em
        }

        dl {
            margin: 0 0 1.5em
        }

        dl dt {
            font-weight: 700
        }

        dd {
            margin-left: 1.5em
        }

        blockquote p {
            padding-bottom: 0
        }

        embed,
        iframe,
        object,
        video {
            max-width: 100%
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
            color: #333;
            padding-bottom: 10px;
            line-height: 1em;
            font-weight: 500
        }

        h1 a,
        h2 a,
        h3 a,
        h4 a,
        h5 a,
        h6 a {
            color: inherit
        }

        h1 {
            font-size: 30px
        }

        h2 {
            font-size: 26px
        }

        h3 {
            font-size: 22px
        }

        h4 {
            font-size: 18px
        }

        h5 {
            font-size: 16px
        }

        h6 {
            font-size: 14px
        }

        input {
            -webkit-appearance: none
        }

        input[type=checkbox] {
            -webkit-appearance: checkbox
        }

        input[type=radio] {
            -webkit-appearance: radio
        }

        input.text,
        input.title,
        input[type=email],
        input[type=password],
        input[type=tel],
        input[type=text],
        select,
        textarea {
            background-color: #fff;
            border: 1px solid #bbb;
            padding: 2px;
            color: #4e4e4e
        }

        input.text:focus,
        input.title:focus,
        input[type=text]:focus,
        select:focus,
        textarea:focus {
            border-color: #2d3940;
            color: #3e3e3e
        }

        input.text,
        input.title,
        input[type=text],
        select,
        textarea {
            margin: 0
        }

        textarea {
            padding: 4px
        }

        button,
        input,
        select,
        textarea {
            font-family: inherit
        }

        img {
            max-width: 100%;
            height: auto
        }

        .clear {
            clear: both
        }

        br.clear {
            margin: 0;
            padding: 0
        }

        .pagination {
            clear: both
        }

        #et_search_icon:hover,
        .et-social-icon a:hover,
        .et_password_protected_form .et_submit_button,
        .form-submit .et_pb_buttontton.alt.disabled,
        .nav-single a,
        .posted_in a {
            color: #2ea3f2
        }

        .et-search-form,
        blockquote {
            border-color: #2ea3f2
        }

        #main-content {
            background-color: #fff
        }

        .container {
            width: 80%;
            max-width: 1080px;
            margin: auto;
            position: relative
        }

        body:not(.et-tb) #main-content .container,
        body:not(.et-tb-has-header) #main-content .container {
            padding-top: 58px
        }

        .et_full_width_page #main-content .container:before {
            display: none
        }

        .main_title {
            margin-bottom: 20px
        }

        .et_password_protected_form .et_submit_button:hover,
        .form-submit .et_pb_button:hover {
            background: rgba(0, 0, 0, .05)
        }

        .et_button_icon_visible .et_pb_button {
            padding-right: 2em;
            padding-left: .7em
        }

        .et_button_icon_visible .et_pb_button:after {
            opacity: 1;
            margin-left: 0
        }

        .et_button_left .et_pb_button:hover:after {
            left: .15em
        }

        .et_button_left .et_pb_button:after {
            margin-left: 0;
            left: 1em
        }

        .et_button_icon_visible.et_button_left .et_pb_button,
        .et_button_left .et_pb_button:hover,
        .et_button_left .et_pb_module .et_pb_button:hover {
            padding-left: 2em;
            padding-right: .7em
        }

        .et_button_icon_visible.et_button_left .et_pb_button:after,
        .et_button_left .et_pb_button:hover:after {
            left: .15em
        }

        .et_password_protected_form .et_submit_button:hover,
        .form-submit .et_pb_button:hover {
            padding: .3em 1em
        }

        .et_button_no_icon .et_pb_button:after {
            display: none
        }

        .et_button_no_icon.et_button_icon_visible.et_button_left .et_pb_button,
        .et_button_no_icon.et_button_left .et_pb_button:hover,
        .et_button_no_icon .et_pb_button,
        .et_button_no_icon .et_pb_button:hover {
            padding: .3em 1em !important
        }

        .et_button_custom_icon .et_pb_button:after {
            line-height: 1.7em
        }

        .et_button_custom_icon.et_button_icon_visible .et_pb_button:after,
        .et_button_custom_icon .et_pb_button:hover:after {
            margin-left: .3em
        }

        #left-area .post_format-post-format-gallery .wp-block-gallery:first-of-type {
            padding: 0;
            margin-bottom: -16px
        }

        .entry-content table:not(.variations) {
            border: 1px solid #eee;
            margin: 0 0 15px;
            text-align: left;
            width: 100%
        }

        .entry-content thead th,
        .entry-content tr th {
            color: #555;
            font-weight: 700;
            padding: 9px 24px
        }

        .entry-content tr td {
            border-top: 1px solid #eee;
            padding: 6px 24px
        }

        #left-area ul,
        .entry-content ul,
        .et-l--body ul,
        .et-l--footer ul,
        .et-l--header ul {
            list-style-type: disc;
            padding: 0 0 23px 1em;
            line-height: 26px
        }

        #left-area ol,
        .entry-content ol,
        .et-l--body ol,
        .et-l--footer ol,
        .et-l--header ol {
            list-style-type: decimal;
            list-style-position: inside;
            padding: 0 0 23px;
            line-height: 26px
        }

        #left-area ul li ul,
        .entry-content ul li ol {
            padding: 2px 0 2px 20px
        }

        #left-area ol li ul,
        .entry-content ol li ol,
        .et-l--body ol li ol,
        .et-l--footer ol li ol,
        .et-l--header ol li ol {
            padding: 2px 0 2px 35px
        }

        #left-area ul.wp-block-gallery {
            display: -webkit-box;
            display: -ms-flexbox;
            display: flex;
            -ms-flex-wrap: wrap;
            flex-wrap: wrap;
            list-style-type: none;
            padding: 0
        }

        #left-area ul.products {
            padding: 0 !important;
            line-height: 1.7 !important;
            list-style: none !important
        }

        .gallery-item a {
            display: block
        }

        .gallery-caption,
        .gallery-item a {
            width: 90%
        }

        #wpadminbar {
            z-index: 100001
        }

        #left-area .post-meta {
            font-size: 14px;
            padding-bottom: 15px
        }

        #left-area .post-meta a {
            text-decoration: none;
            color: #666
        }

        #left-area .et_featured_image {
            padding-bottom: 7px
        }

        .single .post {
            padding-bottom: 25px
        }

        body.single .et_audio_content {
            margin-bottom: -6px
        }

        .nav-single a {
            text-decoration: none;
            color: #2ea3f2;
            font-size: 14px;
            font-weight: 400
        }

        .nav-previous {
            float: left
        }

        .nav-next {
            float: right
        }

        .et_password_protected_form p input {
            background-color: #eee;
            border: none !important;
            width: 100% !important;
            border-radius: 0 !important;
            font-size: 14px;
            color: #999 !important;
            padding: 16px !important;
            -webkit-box-sizing: border-box;
            box-sizing: border-box
        }

        .et_password_protected_form label {
            display: none
        }

        .et_password_protected_form .et_submit_button {
            font-family: inherit;
            display: block;
            float: right;
            margin: 8px auto 0;
            cursor: pointer
        }

        .post-password-required p.nocomments.container {
            max-width: 100%
        }

        .post-password-required p.nocomments.container:before {
            display: none
        }

        .aligncenter,
        div.post .new-post .aligncenter {
            display: block;
            margin-left: auto;
            margin-right: auto
        }

        .wp-caption {
            border: 1px solid #ddd;
            text-align: center;
            background-color: #f3f3f3;
            margin-bottom: 10px;
            max-width: 96%;
            padding: 8px
        }

        .wp-caption.alignleft {
            margin: 0 30px 20px 0
        }

        .wp-caption.alignright {
            margin: 0 0 20px 30px
        }

        .wp-caption img {
            margin: 0;
            padding: 0;
            border: 0
        }

        .wp-caption p.wp-caption-text {
            font-size: 12px;
            padding: 0 4px 5px;
            margin: 0
        }

        .alignright {
            float: right
        }

        .alignleft {
            float: left
        }

        img.alignleft {
            display: inline;
            float: left;
            margin-right: 15px
        }

        img.alignright {
            display: inline;
            float: right;
            margin-left: 15px
        }

        .page.et_pb_pagebuilder_layout #main-content {
            background-color: transparent
        }

        body #main-content .et_builder_inner_content>h1,
        body #main-content .et_builder_inner_content>h2,
        body #main-content .et_builder_inner_content>h3,
        body #main-content .et_builder_inner_content>h4,
        body #main-content .et_builder_inner_content>h5,
        body #main-content .et_builder_inner_content>h6 {
            line-height: 1.4em
        }

        body #main-content .et_builder_inner_content>p {
            line-height: 1.7em
        }

        .wp-block-pullquote {
            margin: 20px 0 30px
        }

        .wp-block-pullquote.has-background blockquote {
            border-left: none
        }

        .wp-block-group.has-background {
            padding: 1.5em 1.5em .5em
        }

        @media (min-width:981px) {
            #left-area {
                width: 79.125%;
                padding-bottom: 23px
            }

            #main-content .container:before {
                content: "";
                position: absolute;
                top: 0;
                height: 100%;
                width: 1px;
                background-color: #e2e2e2
            }

            .et_full_width_page #left-area,
            .et_no_sidebar #left-area {
                float: none;
                width: 100% !important
            }

            .et_full_width_page #left-area {
                padding-bottom: 0
            }

            .et_no_sidebar #main-content .container:before {
                display: none
            }
        }

        @media (max-width:980px) {
            #page-container {
                padding-top: 80px
            }

            .et-tb #page-container,
            .et-tb-has-header #page-container {
                padding-top: 0 !important
            }

            #left-area,
            #sidebar {
                width: 100% !important
            }

            #main-content .container:before {
                display: none !important
            }

            .et_full_width_page .et_gallery_item:nth-child(4n+1) {
                clear: none
            }
        }

        @media print {
            #page-container {
                padding-top: 0 !important
            }
        }

        #wp-admin-bar-et-use-visual-builder a:before {
            font-family: ETmodules !important;
            font-size: 30px !important;
            width: 28px;
            margin-top: -3px;
            color: #974df3 !important
        }

        #wp-admin-bar-et-use-visual-builder:hover a:before {
            color: #fff !important
        }

        #wp-admin-bar-et-use-visual-builder:hover a,
        #wp-admin-bar-et-use-visual-builder a:hover {
            transition: background-color .5s ease;
            -webkit-transition: background-color .5s ease;
            -moz-transition: background-color .5s ease;
            background-color: #7e3bd0 !important;
            color: #fff !important
        }

        * html .clearfix,
        :first-child+html .clearfix {
            zoom: 1
        }

        .iphone .et_pb_section_video_bg video::-webkit-media-controls-start-playback-button {
            display: none !important;
            -webkit-appearance: none
        }

        .et_mobile_device .et_pb_section_parallax .et_pb_parallax_css {
            background-attachment: scroll
        }

        .et-social-facebook a.icon:before {
        }

        .et-social-twitter a.icon:before {
        }

        .et-social-google-plus a.icon:before {

        }

        .et-social-instagram a.icon:before {
        }

        .et-social-rss a.icon:before {
        }

        .ai1ec-single-event:after {
            content: " ";
            display: table;
            clear: both
        }

        .evcal_event_details .evcal_evdata_cell .eventon_details_shading_bot.eventon_details_shading_bot {
            z-index: 3
        }

        .wp-block-divi-layout {
            margin-bottom: 1em
        }
        * {
            -webkit-box-sizing: border-box;
            box-sizing: border-box
        }

        #et-info-email:before,
        #et-info-phone:before,
        #et_search_icon:before,
        .comment-reply-link:after,
        .et-cart-info span:before,
        .et-pb-arrow-next:before,
        .et-pb-arrow-prev:before,
        .et-social-icon a:before,
        .et_audio_container .mejs-playpause-button button:before,
        .et_audio_container .mejs-volume-button button:before,
        .et_overlay:before,
        .et_password_protected_form .et_submit_button:after,
        .et_pb_button:after,
        .et_pb_contact_reset:after,
        .et_pb_contact_submit:after,
        .et_pb_font_icon:before,
        .et_pb_newsletter_button:after,
        .et_pb_pricing_table_button:after,
        .et_pb_promo_button:after,
        .et_pb_testimonial:before,
        .et_pb_toggle_title:before,
        .form-submit .et_pb_button:after,
        .mobile_menu_bar:before,
        a.et_pb_more_button:after {
            font-family: ETmodules !important;
            speak: none;
            font-style: normal;
            font-weight: 400;
            -webkit-font-feature-settings: normal;
            font-feature-settings: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale;
            text-shadow: 0 0;
            direction: ltr
        }

        .et-pb-icon,
        .et_pb_custom_button_icon.et_pb_button:after,
        .et_pb_login .et_pb_custom_button_icon.et_pb_button:after,
        .et_pb_woo_custom_button_icon .button.et_pb_custom_button_icon.et_pb_button:after,
        .et_pb_woo_custom_button_icon .button.et_pb_custom_button_icon.et_pb_button:hover:after {
            content: attr(data-icon)
        }

        .et-pb-icon {
            font-family: ETmodules;
            speak: none;
            font-weight: 400;
            -webkit-font-feature-settings: normal;
            font-feature-settings: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            font-size: 96px;
            font-style: normal;
            display: inline-block;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
            direction: ltr
        }
        #et-ajax-saving {
            display: none;
            -webkit-transition: background .3s, -webkit-box-shadow .3s;
            transition: background .3s, -webkit-box-shadow .3s;
            transition: background .3s, box-shadow .3s;
            transition: background .3s, box-shadow .3s, -webkit-box-shadow .3s;
            -webkit-box-shadow: rgba(0, 139, 219, .247059) 0 0 60px;
            box-shadow: 0 0 60px rgba(0, 139, 219, .247059);
            position: fixed;
            top: 50%;
            left: 50%;
            width: 50px;
            height: 50px;
            background: #fff;
            border-radius: 50px;
            margin: -25px 0 0 -25px;
            z-index: 999999;
            text-align: center
        }

        #et-ajax-saving img {
            margin: 9px
        }

        .et-safe-mode-indicator,
        .et-safe-mode-indicator:focus,
        .et-safe-mode-indicator:hover {
            -webkit-box-shadow: 0 5px 10px rgba(41, 196, 169, .15);
            box-shadow: 0 5px 10px rgba(41, 196, 169, .15);
            background: #29c4a9;
            color: #fff;
            font-size: 14px;
            font-weight: 600;
            padding: 12px;
            line-height: 16px;
            border-radius: 3px;
            position: fixed;
            bottom: 30px;
            right: 30px;
            z-index: 999999;
            text-decoration: none;
            font-family: Open Sans, sans-serif;
            -webkit-font-smoothing: antialiased;
            -moz-osx-font-smoothing: grayscale
        }

        .et_pb_button {
            font-size: 20px;
            font-weight: 500;
            padding: .3em 1em;
            line-height: 1.7em !important;
            background-color: transparent;
            background-size: cover;
            background-position: 50%;
            background-repeat: no-repeat;
            border: 2px solid;
            border-radius: 3px;
            -webkit-transition-duration: .2s;
            transition-duration: .2s;
            -webkit-transition-property: all !important;
            transition-property: all !important
        }

        .et_pb_button,
        .et_pb_button_inner {
            position: relative
        }

        .et_pb_button:hover,
        .et_pb_module .et_pb_button:hover {
            border: 2px solid transparent;
            padding: .3em 2em .3em .7em
        }
        .et_pb_button:hover {
            background-color: hsla(0, 0%, 100%, .2)
        }

        .et_pb_bg_layout_light.et_pb_button:hover,
        .et_pb_bg_layout_light .et_pb_button:hover {
            background-color: rgba(0, 0, 0, .05)
        }

        .et_pb_button:after,
        .et_pb_button:before {
            font-size: 32px;
            line-height: 1em;
            opacity: 0;
            position: absolute;
            margin-left: -1em;
            -webkit-transition: all .2s;
            transition: all .2s;
            text-transform: none;
            -webkit-font-feature-settings: "kern"off;
            font-feature-settings: "kern"off;
            font-variant: none;
            font-style: normal;
            font-weight: 400;
            text-shadow: none
        }

        .et_pb_button.et_hover_enabled:hover:after,
        .et_pb_button.et_pb_hovered:hover:after {
            -webkit-transition: none !important;
            transition: none !important
        }

        .et_pb_button:before {
            display: none
        }

        .et_pb_button:hover:after {
            opacity: 1;
            margin-left: 0
        }

        .et_pb_column_1_3 h1,
        .et_pb_column_1_4 h1,
        .et_pb_column_1_5 h1,
        .et_pb_column_1_6 h1,
        .et_pb_column_2_5 h1 {
            font-size: 26px
        }

        .et_pb_column_1_3 h2,
        .et_pb_column_1_4 h2,
        .et_pb_column_1_5 h2,
        .et_pb_column_1_6 h2,
        .et_pb_column_2_5 h2 {
            font-size: 23px
        }

        .et_pb_column_1_3 h3,
        .et_pb_column_1_4 h3,
        .et_pb_column_1_5 h3,
        .et_pb_column_1_6 h3,
        .et_pb_column_2_5 h3 {
            font-size: 20px
        }

        .et_pb_column_1_3 h4,
        .et_pb_column_1_4 h4,
        .et_pb_column_1_5 h4,
        .et_pb_column_1_6 h4,
        .et_pb_column_2_5 h4 {
            font-size: 18px
        }

        .et_pb_column_1_3 h5,
        .et_pb_column_1_4 h5,
        .et_pb_column_1_5 h5,
        .et_pb_column_1_6 h5,
        .et_pb_column_2_5 h5 {
            font-size: 16px
        }

        .et_pb_column_1_3 h6,
        .et_pb_column_1_4 h6,
        .et_pb_column_1_5 h6,
        .et_pb_column_1_6 h6,
        .et_pb_column_2_5 h6 {
            font-size: 15px
        }

        .et_pb_bg_layout_dark,
        .et_pb_bg_layout_dark h1,
        .et_pb_bg_layout_dark h2,
        .et_pb_bg_layout_dark h3,
        .et_pb_bg_layout_dark h4,
        .et_pb_bg_layout_dark h5,
        .et_pb_bg_layout_dark h6 {
            color: #fff !important
        }

        .et_pb_module.et_pb_text_align_left {
            text-align: left
        }

        .et_pb_module.et_pb_text_align_center {
            text-align: center
        }

        .et_pb_module.et_pb_text_align_right {
            text-align: right
        }

        .et_pb_module.et_pb_text_align_justified {
            text-align: justify
        }

        .clearfix:after {
            visibility: hidden;
            display: block;
            font-size: 0;
            content: " ";
            clear: both;
            height: 0
        }

        .et_pb_bg_layout_light .et_pb_more_button {
            color: #2ea3f2
        }

        .et_builder_inner_content {
            position: relative;
            z-index: 1
        }

        header .et_builder_inner_content {
            z-index: 2
        }

        .et_pb_css_mix_blend_mode_passthrough {
            mix-blend-mode: unset !important
        }

        .et_pb_image_container {
            margin: -20px -20px 29px
        }

        .et_pb_module_inner {
            position: relative
        }

        .et_hover_enabled_preview {
            z-index: 2
        }

        .et_hover_enabled:hover {
            position: relative;
            z-index: 2
        }

        .et_pb_all_tabs,
        .et_pb_module,
        .et_pb_posts_nav a,
        .et_pb_tab,
        .et_pb_with_background {
            position: relative;
            background-size: cover;
            background-position: 50%;
            background-repeat: no-repeat
        }

        .et_pb_background_mask,
        .et_pb_background_pattern {
            bottom: 0;
            left: 0;
            position: absolute;
            right: 0;
            top: 0
        }

        .et_pb_background_mask {
            background-size: calc(100% + 2px) calc(100% + 2px);
            background-repeat: no-repeat;
            background-position: 50%;
            overflow: hidden
        }

        .et_pb_background_pattern {
            background-position: 0 0;
            background-repeat: repeat
        }

        .et_pb_with_border {
            position: relative;
            border: 0 solid #333
        }

        .post-password-required .et_pb_row {
            padding: 0;
            width: 100%
        }

        .post-password-required .et_password_protected_form {
            min-height: 0
        }

        body.et_pb_pagebuilder_layout.et_pb_show_title .post-password-required .et_password_protected_form h1,
        body:not(.et_pb_pagebuilder_layout) .post-password-required .et_password_protected_form h1 {
            display: none
        }

        .et_pb_no_bg {
            padding: 0 !important
        }

        .et_overlay.et_pb_inline_icon:before,
        .et_pb_inline_icon:before {
            content: attr(data-icon)
        }

        .et_pb_more_button {
            color: inherit;
            text-shadow: none;
            text-decoration: none;
            display: inline-block;
            margin-top: 20px
        }

        .et_parallax_bg_wrap {
            overflow: hidden;
            position: absolute;
            top: 0;
            right: 0;
            bottom: 0;
            left: 0
        }

        .et_parallax_bg {
            background-repeat: no-repeat;
            background-position: top;
            background-size: cover;
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: block
        }

        .et_parallax_bg.et_parallax_bg__hover,
        .et_parallax_bg.et_parallax_bg_phone,
        .et_parallax_bg.et_parallax_bg_tablet,
        .et_parallax_gradient.et_parallax_gradient__hover,
        .et_parallax_gradient.et_parallax_gradient_phone,
        .et_parallax_gradient.et_parallax_gradient_tablet,
        .et_pb_section_parallax_hover:hover .et_parallax_bg:not(.et_parallax_bg__hover),
        .et_pb_section_parallax_hover:hover .et_parallax_gradient:not(.et_parallax_gradient__hover) {
            display: none
        }

        .et_pb_section_parallax_hover:hover .et_parallax_bg.et_parallax_bg__hover,
        .et_pb_section_parallax_hover:hover .et_parallax_gradient.et_parallax_gradient__hover {
            display: block
        }

        .et_parallax_gradient {
            bottom: 0;
            display: block;
            left: 0;
            position: absolute;
            right: 0;
            top: 0
        }

        .et_pb_module.et_pb_section_parallax,
        .et_pb_posts_nav a.et_pb_section_parallax,
        .et_pb_tab.et_pb_section_parallax {
            position: relative
        }

        .et_pb_section_parallax .et_pb_parallax_css,
        .et_pb_slides .et_parallax_bg.et_pb_parallax_css {
            background-attachment: fixed
        }

        body.et-bfb .et_pb_section_parallax .et_pb_parallax_css,
        body.et-bfb .et_pb_slides .et_parallax_bg.et_pb_parallax_css {
            background-attachment: scroll;
            bottom: auto
        }

        .et_pb_section_parallax.et_pb_column .et_pb_module,
        .et_pb_section_parallax.et_pb_row .et_pb_column,
        .et_pb_section_parallax.et_pb_row .et_pb_module {
            z-index: 9;
            position: relative
        }

        .et_pb_more_button:hover:after {
            opacity: 1;
            margin-left: 0
        }

        .et_pb_preload .et_pb_section_video_bg,
        .et_pb_preload>div {
            visibility: hidden
        }

        .et_pb_preload,
        .et_pb_section.et_pb_section_video.et_pb_preload {
            position: relative;
            background: #464646 !important
        }

        .et_pb_preload:before {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            background: url(https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/themes/Divi/includes/builder/styles/images/preloader.gif) no-repeat;
            border-radius: 32px;
            width: 32px;
            height: 32px;
            margin: -16px 0 0 -16px
        }

        .box-shadow-overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 10;
            pointer-events: none
        }

        .et_pb_section>.box-shadow-overlay~.et_pb_row {
            z-index: 11
        }

        body.safari .section_has_divider {
            will-change: transform
        }

        .et_pb_row>.box-shadow-overlay {
            z-index: 8
        }

        .has-box-shadow-overlay {
            position: relative
        }

        .et_clickable {
            cursor: pointer
        }

        .screen-reader-text {
            border: 0;
            clip: rect(1px, 1px, 1px, 1px);
            -webkit-clip-path: inset(50%);
            clip-path: inset(50%);
            height: 1px;
            margin: -1px;
            overflow: hidden;
            padding: 0;
            position: absolute !important;
            width: 1px;
            word-wrap: normal !important
        }

        .et_multi_view_hidden,
        .et_multi_view_hidden_image {
            display: none !important
        }

        @keyframes multi-view-image-fade {
            0% {
                opacity: 0
            }

            10% {
                opacity: .1
            }

            20% {
                opacity: .2
            }

            30% {
                opacity: .3
            }

            40% {
                opacity: .4
            }

            50% {
                opacity: .5
            }

            60% {
                opacity: .6
            }

            70% {
                opacity: .7
            }

            80% {
                opacity: .8
            }

            90% {
                opacity: .9
            }

            to {
                opacity: 1
            }
        }

        .et_multi_view_image__loading {
            visibility: hidden
        }

        .et_multi_view_image__loaded {
            -webkit-animation: multi-view-image-fade .5s;
            animation: multi-view-image-fade .5s
        }

        #et-pb-motion-effects-offset-tracker {
            visibility: hidden !important;
            opacity: 0;
            position: absolute;
            top: 0;
            left: 0
        }

        .et-pb-before-scroll-animation {
            opacity: 0
        }

        header.et-l.et-l--header:after {
            clear: both;
            display: block;
            content: ""
        }

        .et_pb_module {
            -webkit-animation-timing-function: linear;
            animation-timing-function: linear;
            -webkit-animation-duration: .2s;
            animation-duration: .2s
        }

        @-webkit-keyframes fadeBottom {
            0% {
                opacity: 0;
                -webkit-transform: translateY(10%);
                transform: translateY(10%)
            }

            to {
                opacity: 1;
                -webkit-transform: translateY(0);
                transform: translateY(0)
            }
        }

        @keyframes fadeBottom {
            0% {
                opacity: 0;
                -webkit-transform: translateY(10%);
                transform: translateY(10%)
            }

            to {
                opacity: 1;
                -webkit-transform: translateY(0);
                transform: translateY(0)
            }
        }

        @-webkit-keyframes fadeLeft {
            0% {
                opacity: 0;
                -webkit-transform: translateX(-10%);
                transform: translateX(-10%)
            }

            to {
                opacity: 1;
                -webkit-transform: translateX(0);
                transform: translateX(0)
            }
        }

        @keyframes fadeLeft {
            0% {
                opacity: 0;
                -webkit-transform: translateX(-10%);
                transform: translateX(-10%)
            }

            to {
                opacity: 1;
                -webkit-transform: translateX(0);
                transform: translateX(0)
            }
        }

        @-webkit-keyframes fadeRight {
            0% {
                opacity: 0;
                -webkit-transform: translateX(10%);
                transform: translateX(10%)
            }

            to {
                opacity: 1;
                -webkit-transform: translateX(0);
                transform: translateX(0)
            }
        }

        @keyframes fadeRight {
            0% {
                opacity: 0;
                -webkit-transform: translateX(10%);
                transform: translateX(10%)
            }

            to {
                opacity: 1;
                -webkit-transform: translateX(0);
                transform: translateX(0)
            }
        }

        @-webkit-keyframes fadeTop {
            0% {
                opacity: 0;
                -webkit-transform: translateY(-10%);
                transform: translateY(-10%)
            }

            to {
                opacity: 1;
                -webkit-transform: translateX(0);
                transform: translateX(0)
            }
        }

        @keyframes fadeTop {
            0% {
                opacity: 0;
                -webkit-transform: translateY(-10%);
                transform: translateY(-10%)
            }

            to {
                opacity: 1;
                -webkit-transform: translateX(0);
                transform: translateX(0)
            }
        }

@-webkit-keyframes fadeIn {
            0% {
                opacity: 0
            }

            to {
                opacity: 1
            }
        }

        @keyframes fadeIn {
            0% {
                opacity: 0
            }

            to {
                opacity: 1
            }
        }

        .et-waypoint:not(.et_pb_counters) {
            opacity: 0
        }

        @media (min-width:981px) {

            .et_pb_section.et_section_specialty div.et_pb_row .et_pb_column .et_pb_column .et_pb_module.et-last-child,
            .et_pb_section.et_section_specialty div.et_pb_row .et_pb_column .et_pb_column .et_pb_module:last-child,
            .et_pb_section.et_section_specialty div.et_pb_row .et_pb_column .et_pb_row_inner .et_pb_column .et_pb_module.et-last-child,
            .et_pb_section.et_section_specialty div.et_pb_row .et_pb_column .et_pb_row_inner .et_pb_column .et_pb_module:last-child,
            .et_pb_section div.et_pb_row .et_pb_column .et_pb_module.et-last-child,
            .et_pb_section div.et_pb_row .et_pb_column .et_pb_module:last-child {
                margin-bottom: 0
            }
        }

        @media (max-width:980px) {

            .et_overlay.et_pb_inline_icon_tablet:before,
            .et_pb_inline_icon_tablet:before {
                content: attr(data-icon-tablet)
            }

            .et_parallax_bg.et_parallax_bg_tablet_exist,
            .et_parallax_gradient.et_parallax_gradient_tablet_exist {
                display: none
            }

            .et_parallax_bg.et_parallax_bg_tablet,
            .et_parallax_gradient.et_parallax_gradient_tablet {
                display: block
            }

            .et_pb_column .et_pb_module {
                margin-bottom: 30px
            }

            .et_pb_row .et_pb_column .et_pb_module.et-last-child,
            .et_pb_row .et_pb_column .et_pb_module:last-child,
            .et_section_specialty .et_pb_row .et_pb_column .et_pb_module.et-last-child,
            .et_section_specialty .et_pb_row .et_pb_column .et_pb_module:last-child {
                margin-bottom: 0
            }

            .et_pb_more_button {
                display: inline-block !important
            }

            .et_pb_bg_layout_light_tablet.et_pb_button,
            .et_pb_bg_layout_light_tablet.et_pb_module.et_pb_button,
            .et_pb_bg_layout_light_tablet .et_pb_more_button {
                color: #2ea3f2
            }

            .et_pb_bg_layout_light_tablet .et_pb_forgot_password a {
                color: #666
            }

            .et_pb_bg_layout_light_tablet h1,
            .et_pb_bg_layout_light_tablet h2,
            .et_pb_bg_layout_light_tablet h3,
            .et_pb_bg_layout_light_tablet h4,
            .et_pb_bg_layout_light_tablet h5,
            .et_pb_bg_layout_light_tablet h6 {
                color: #333 !important
            }
            .et_pb_module .et_pb_bg_layout_light_tablet.et_pb_button {
                color: #2ea3f2 !important
            }

            .et_pb_bg_layout_light_tablet {
                color: #666 !important
            }

            .et_pb_bg_layout_dark_tablet,
            .et_pb_bg_layout_dark_tablet h1,
            .et_pb_bg_layout_dark_tablet h2,
            .et_pb_bg_layout_dark_tablet h3,
            .et_pb_bg_layout_dark_tablet h4,
            .et_pb_bg_layout_dark_tablet h5,
            .et_pb_bg_layout_dark_tablet h6 {
                color: #fff !important
            }

            .et_pb_bg_layout_dark_tablet.et_pb_button,
            .et_pb_bg_layout_dark_tablet.et_pb_module.et_pb_button,
            .et_pb_bg_layout_dark_tablet .et_pb_more_button {
                color: inherit
            }

            .et_pb_bg_layout_dark_tablet .et_pb_forgot_password a {
                color: #fff
            }

            .et_pb_module.et_pb_text_align_left-tablet {
                text-align: left
            }

            .et_pb_module.et_pb_text_align_center-tablet {
                text-align: center
            }

            .et_pb_module.et_pb_text_align_right-tablet {
                text-align: right
            }

            .et_pb_module.et_pb_text_align_justified-tablet {
                text-align: justify
            }
        }

        @media (max-width:767px) {
            .et_pb_more_button {
                display: inline-block !important
            }

            .et_overlay.et_pb_inline_icon_phone:before,
            .et_pb_inline_icon_phone:before {
                content: attr(data-icon-phone)
            }

            .et_parallax_bg.et_parallax_bg_phone_exist,
            .et_parallax_gradient.et_parallax_gradient_phone_exist {
                display: none
            }

            .et_parallax_bg.et_parallax_bg_phone,
            .et_parallax_gradient.et_parallax_gradient_phone {
                display: block
            }

            .et-hide-mobile {
                display: none !important
            }

            .et_pb_bg_layout_light_phone.et_pb_button,
            .et_pb_bg_layout_light_phone.et_pb_module.et_pb_button,
            .et_pb_bg_layout_light_phone .et_pb_more_button {
                color: #2ea3f2
            }

            .et_pb_bg_layout_light_phone .et_pb_forgot_password a {
                color: #666
            }

            .et_pb_bg_layout_light_phone h1,
            .et_pb_bg_layout_light_phone h2,
            .et_pb_bg_layout_light_phone h3,
            .et_pb_bg_layout_light_phone h4,
            .et_pb_bg_layout_light_phone h5,
            .et_pb_bg_layout_light_phone h6 {
                color: #333 !important
            }

            .et_pb_module .et_pb_bg_layout_light_phone.et_pb_button {
                color: #2ea3f2 !important
            }

            .et_pb_bg_layout_light_phone {
                color: #666 !important
            }

            .et_pb_bg_layout_dark_phone,
            .et_pb_bg_layout_dark_phone h1,
            .et_pb_bg_layout_dark_phone h2,
            .et_pb_bg_layout_dark_phone h3,
            .et_pb_bg_layout_dark_phone h4,
            .et_pb_bg_layout_dark_phone h5,
            .et_pb_bg_layout_dark_phone h6 {
                color: #fff !important
            }

            .et_pb_bg_layout_dark_phone.et_pb_button,
            .et_pb_bg_layout_dark_phone.et_pb_module.et_pb_button,
            .et_pb_bg_layout_dark_phone .et_pb_more_button {
                color: inherit
            }

            .et_pb_module .et_pb_bg_layout_dark_phone.et_pb_button {
                color: #fff !important
            }

            .et_pb_bg_layout_dark_phone .et_pb_forgot_password a {
                color: #fff
            }

            .et_pb_module.et_pb_text_align_left-phone {
                text-align: left
            }

            .et_pb_module.et_pb_text_align_center-phone {
                text-align: center
            }

            .et_pb_module.et_pb_text_align_right-phone {
                text-align: right
            }

            .et_pb_module.et_pb_text_align_justified-phone {
                text-align: justify
            }
        }

        @media (max-width:479px) {
            a.et_pb_more_button {
                display: block
            }
        }

        @media (min-width:768px) and (max-width:980px) {
            [data-et-multi-view-load-tablet-hidden=true]:not(.et_multi_view_swapped) {
                display: none !important
            }
        }

        @media (max-width:767px) {
            [data-et-multi-view-load-phone-hidden=true]:not(.et_multi_view_swapped) {
                display: none !important
            }
        }

        .et_pb_menu.et_pb_menu--style-inline_centered_logo .et_pb_menu__menu nav ul {
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            justify-content: center
        }

        @-webkit-keyframes multi-view-image-fade {
            0% {
                -webkit-transform: scale(1);
                transform: scale(1);
                opacity: 1
            }

            50% {
                -webkit-transform: scale(1.01);
                transform: scale(1.01);
                opacity: 1
            }

            to {
                -webkit-transform: scale(1);
                transform: scale(1);
                opacity: 1
            }
        }
    </style>
    <style id='divi-dynamic-critical-inline-css' type='text/css'>
        @font-face {
            font-family: ETmodules;
            font-display: block;
            src: url(https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/themes/Divi/core/admin/fonts/modules/all/modules.eot);
            src: url(https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/themes/Divi/core/admin/fonts/modules/all/modules.eot?#iefix) format("embedded-opentype"), url(https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/themes/Divi/core/admin/fonts/modules/all/modules.ttf) format("truetype"), url(https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/themes/Divi/core/admin/fonts/modules/all/modules.woff) format("woff"), url(https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/themes/Divi/core/admin/fonts/modules/all/modules.svg#ETmodules) format("svg");
            font-weight: 400;
            font-style: normal
        }

        @media (min-width:981px) {

            .et_pb_gutters3 .et_pb_column,
            .et_pb_gutters3.et_pb_row .et_pb_column {
                margin-right: 5.5%
            }

            .et_pb_gutters3 .et_pb_column_4_4,
            .et_pb_gutters3.et_pb_row .et_pb_column_4_4 {
                width: 100%
            }

            .et_pb_gutters3 .et_pb_column_4_4 .et_pb_module,
            .et_pb_gutters3.et_pb_row .et_pb_column_4_4 .et_pb_module {
                margin-bottom: 2.75%
            }

            .et_pb_gutters3 .et_pb_column_3_4,
            .et_pb_gutters3.et_pb_row .et_pb_column_3_4 {
                width: 73.625%
            }

            .et_pb_gutters3 .et_pb_column_3_4 .et_pb_module,
            .et_pb_gutters3.et_pb_row .et_pb_column_3_4 .et_pb_module {
                margin-bottom: 3.735%
            }

            .et_pb_gutters3 .et_pb_column_2_3,
            .et_pb_gutters3.et_pb_row .et_pb_column_2_3 {
                width: 64.833%
            }

            .et_pb_gutters3 .et_pb_column_2_3 .et_pb_module,
            .et_pb_gutters3.et_pb_row .et_pb_column_2_3 .et_pb_module {
                margin-bottom: 4.242%
            }

            .et_pb_gutters3 .et_pb_column_3_5,
            .et_pb_gutters3.et_pb_row .et_pb_column_3_5 {
                width: 57.8%
            }

            .et_pb_gutters3 .et_pb_column_3_5 .et_pb_module,
            .et_pb_gutters3.et_pb_row .et_pb_column_3_5 .et_pb_module {
                margin-bottom: 4.758%
            }

            .et_pb_gutters3 .et_pb_column_1_2,
            .et_pb_gutters3.et_pb_row .et_pb_column_1_2 {
                width: 47.25%
            }

            .et_pb_gutters3 .et_pb_column_1_2 .et_pb_module,
            .et_pb_gutters3.et_pb_row .et_pb_column_1_2 .et_pb_module {
                margin-bottom: 5.82%
            }

            .et_pb_gutters3 .et_pb_column_2_5,
            .et_pb_gutters3.et_pb_row .et_pb_column_2_5 {
                width: 36.7%
            }

            .et_pb_gutters3 .et_pb_column_2_5 .et_pb_module,
            .et_pb_gutters3.et_pb_row .et_pb_column_2_5 .et_pb_module {
                margin-bottom: 7.493%
            }

            .et_pb_gutters3 .et_pb_column_1_3,
            .et_pb_gutters3.et_pb_row .et_pb_column_1_3 {
                width: 29.6667%
            }

            .et_pb_gutters3 .et_pb_column_1_3 .et_pb_module,
            .et_pb_gutters3.et_pb_row .et_pb_column_1_3 .et_pb_module {
                margin-bottom: 9.27%
            }

            .et_pb_gutters3 .et_pb_column_1_4,
            .et_pb_gutters3.et_pb_row .et_pb_column_1_4 {
                width: 20.875%
            }

            .et_pb_gutters3 .et_pb_column_1_4 .et_pb_module,
            .et_pb_gutters3.et_pb_row .et_pb_column_1_4 .et_pb_module {
                margin-bottom: 13.174%
            }

            .et_pb_gutters3 .et_pb_column_1_5,
            .et_pb_gutters3.et_pb_row .et_pb_column_1_5 {
                width: 15.6%
            }

            .et_pb_gutters3 .et_pb_column_1_5 .et_pb_module,
            .et_pb_gutters3.et_pb_row .et_pb_column_1_5 .et_pb_module {
                margin-bottom: 17.628%
            }

            .et_pb_gutters3 .et_pb_column_1_6,
            .et_pb_gutters3.et_pb_row .et_pb_column_1_6 {
                width: 12.0833%
            }

            .et_pb_gutters3 .et_pb_column_1_6 .et_pb_module,
            .et_pb_gutters3.et_pb_row .et_pb_column_1_6 .et_pb_module {
                margin-bottom: 22.759%
            }

            .et_pb_gutters3 .et_full_width_page.woocommerce-page ul.products li.product {
                width: 20.875%;
                margin-right: 5.5%;
                margin-bottom: 5.5%
            }

            .et_pb_gutters3.et_left_sidebar.woocommerce-page #main-content ul.products li.product,
            .et_pb_gutters3.et_right_sidebar.woocommerce-page #main-content ul.products li.product {
                width: 28.353%;
                margin-right: 7.47%
            }

            .et_pb_gutters3.et_left_sidebar.woocommerce-page #main-content ul.products.columns-1 li.product,
            .et_pb_gutters3.et_right_sidebar.woocommerce-page #main-content ul.products.columns-1 li.product {
                width: 100%;
                margin-right: 0
            }

            .et_pb_gutters3.et_left_sidebar.woocommerce-page #main-content ul.products.columns-2 li.product,
            .et_pb_gutters3.et_right_sidebar.woocommerce-page #main-content ul.products.columns-2 li.product {
                width: 48%;
                margin-right: 4%
            }

            .et_pb_gutters3.et_left_sidebar.woocommerce-page #main-content ul.products.columns-2 li:nth-child(2n+2),
            .et_pb_gutters3.et_right_sidebar.woocommerce-page #main-content ul.products.columns-2 li:nth-child(2n+2) {
                margin-right: 0
            }

            .et_pb_gutters3.et_left_sidebar.woocommerce-page #main-content ul.products.columns-2 li:nth-child(3n+1),
            .et_pb_gutters3.et_right_sidebar.woocommerce-page #main-content ul.products.columns-2 li:nth-child(3n+1) {
                clear: none
            }
        }

        @media (min-width:981px) {
            .et_pb_gutter.et_pb_gutters1 #left-area {
                width: 75%
            }

            .et_pb_gutter.et_pb_gutters1 #sidebar {
                width: 25%
            }

            .et_pb_gutters1.et_right_sidebar #left-area {
                padding-right: 0
            }

            .et_pb_gutters1.et_left_sidebar #left-area {
                padding-left: 0
            }

            .et_pb_gutter.et_pb_gutters1.et_right_sidebar #main-content .container:before {
                right: 25% !important
            }

            .et_pb_gutter.et_pb_gutters1.et_left_sidebar #main-content .container:before {
                left: 25% !important
            }

            .et_pb_gutters1 .et_pb_column,
            .et_pb_gutters1.et_pb_row .et_pb_column {
                margin-right: 0
            }

            .et_pb_gutters1 .et_pb_column_4_4,
            .et_pb_gutters1.et_pb_row .et_pb_column_4_4 {
                width: 100%
            }

            .et_pb_gutters1 .et_pb_column_4_4 .et_pb_module,
            .et_pb_gutters1.et_pb_row .et_pb_column_4_4 .et_pb_module {
                margin-bottom: 0
            }

            .et_pb_gutters1 .et_pb_column_3_4,
            .et_pb_gutters1.et_pb_row .et_pb_column_3_4 {
                width: 75%
            }

            .et_pb_gutters1 .et_pb_column_3_4 .et_pb_module,
            .et_pb_gutters1.et_pb_row .et_pb_column_3_4 .et_pb_module {
                margin-bottom: 0
            }

            .et_pb_gutters1 .et_pb_column_2_3,
            .et_pb_gutters1.et_pb_row .et_pb_column_2_3 {
                width: 66.667%
            }

            .et_pb_gutters1 .et_pb_column_2_3 .et_pb_module,
            .et_pb_gutters1.et_pb_row .et_pb_column_2_3 .et_pb_module {
                margin-bottom: 0
            }

            .et_pb_gutters1 .et_pb_column_3_5,
            .et_pb_gutters1.et_pb_row .et_pb_column_3_5 {
                width: 60%
            }

            .et_pb_gutters1 .et_pb_column_3_5 .et_pb_module,
            .et_pb_gutters1.et_pb_row .et_pb_column_3_5 .et_pb_module {
                margin-bottom: 0
            }

            .et_pb_gutters1 .et_pb_column_1_2,
            .et_pb_gutters1.et_pb_row .et_pb_column_1_2 {
                width: 50%
            }

            .et_pb_gutters1 .et_pb_column_1_2 .et_pb_module,
            .et_pb_gutters1.et_pb_row .et_pb_column_1_2 .et_pb_module {
                margin-bottom: 0
            }

            .et_pb_gutters1 .et_pb_column_2_5,
            .et_pb_gutters1.et_pb_row .et_pb_column_2_5 {
                width: 40%
            }

            .et_pb_gutters1 .et_pb_column_2_5 .et_pb_module,
            .et_pb_gutters1.et_pb_row .et_pb_column_2_5 .et_pb_module {
                margin-bottom: 0
            }

            .et_pb_gutters1 .et_pb_column_1_3,
            .et_pb_gutters1.et_pb_row .et_pb_column_1_3 {
                width: 33.3333%
            }

            .et_pb_gutters1 .et_pb_column_1_3 .et_pb_module,
            .et_pb_gutters1.et_pb_row .et_pb_column_1_3 .et_pb_module {
                margin-bottom: 0
            }

            .et_pb_gutters1 .et_pb_column_1_4,
            .et_pb_gutters1.et_pb_row .et_pb_column_1_4 {
                width: 25%
            }

            .et_pb_gutters1 .et_pb_column_1_4 .et_pb_module,
            .et_pb_gutters1.et_pb_row .et_pb_column_1_4 .et_pb_module {
                margin-bottom: 0
            }

            .et_pb_gutters1 .et_pb_column_1_5,
            .et_pb_gutters1.et_pb_row .et_pb_column_1_5 {
                width: 20%
            }

            .et_pb_gutters1 .et_pb_column_1_5 .et_pb_module,
            .et_pb_gutters1.et_pb_row .et_pb_column_1_5 .et_pb_module {
                margin-bottom: 0
            }

            .et_pb_gutters1 .et_pb_column_1_6,
            .et_pb_gutters1.et_pb_row .et_pb_column_1_6 {
                width: 16.6667%
            }

            .et_pb_gutters1 .et_pb_column_1_6 .et_pb_module,
            .et_pb_gutters1.et_pb_row .et_pb_column_1_6 .et_pb_module {
                margin-bottom: 0
            }

            .et_pb_gutters1 .et_full_width_page.woocommerce-page ul.products li.product {
                width: 25%;
                margin-right: 0;
                margin-bottom: 0
            }

            .et_pb_gutters1.et_left_sidebar.woocommerce-page #main-content ul.products li.product,
            .et_pb_gutters1.et_right_sidebar.woocommerce-page #main-content ul.products li.product {
                width: 33.333%;
                margin-right: 0
            }
        }

        @media (max-width:980px) {

            .et_pb_gutters1 .et_pb_column,
            .et_pb_gutters1 .et_pb_column .et_pb_module,
            .et_pb_gutters1.et_pb_row .et_pb_column,
            .et_pb_gutters1.et_pb_row .et_pb_column .et_pb_module {
                margin-bottom: 0
            }

            .et_pb_gutters1 .et_pb_row_1-2_1-4_1-4>.et_pb_column.et_pb_column_1_4,
            .et_pb_gutters1 .et_pb_row_1-4_1-4>.et_pb_column.et_pb_column_1_4,
            .et_pb_gutters1 .et_pb_row_1-4_1-4_1-2>.et_pb_column.et_pb_column_1_4,
            .et_pb_gutters1 .et_pb_row_1-5_1-5_3-5>.et_pb_column.et_pb_column_1_5,
            .et_pb_gutters1 .et_pb_row_3-5_1-5_1-5>.et_pb_column.et_pb_column_1_5,
            .et_pb_gutters1 .et_pb_row_4col>.et_pb_column.et_pb_column_1_4,
            .et_pb_gutters1 .et_pb_row_5col>.et_pb_column.et_pb_column_1_5,
            .et_pb_gutters1.et_pb_row_1-2_1-4_1-4>.et_pb_column.et_pb_column_1_4,
            .et_pb_gutters1.et_pb_row_1-4_1-4>.et_pb_column.et_pb_column_1_4,
            .et_pb_gutters1.et_pb_row_1-4_1-4_1-2>.et_pb_column.et_pb_column_1_4,
            .et_pb_gutters1.et_pb_row_1-5_1-5_3-5>.et_pb_column.et_pb_column_1_5,
            .et_pb_gutters1.et_pb_row_3-5_1-5_1-5>.et_pb_column.et_pb_column_1_5,
            .et_pb_gutters1.et_pb_row_4col>.et_pb_column.et_pb_column_1_4,
            .et_pb_gutters1.et_pb_row_5col>.et_pb_column.et_pb_column_1_5 {
                width: 50%;
                margin-right: 0
            }

            .et_pb_gutters1 .et_pb_row_1-2_1-6_1-6_1-6>.et_pb_column.et_pb_column_1_6,
            .et_pb_gutters1 .et_pb_row_1-6_1-6_1-6>.et_pb_column.et_pb_column_1_6,
            .et_pb_gutters1 .et_pb_row_1-6_1-6_1-6_1-2>.et_pb_column.et_pb_column_1_6,
            .et_pb_gutters1 .et_pb_row_6col>.et_pb_column.et_pb_column_1_6,
            .et_pb_gutters1.et_pb_row_1-2_1-6_1-6_1-6>.et_pb_column.et_pb_column_1_6,
            .et_pb_gutters1.et_pb_row_1-6_1-6_1-6>.et_pb_column.et_pb_column_1_6,
            .et_pb_gutters1.et_pb_row_1-6_1-6_1-6_1-2>.et_pb_column.et_pb_column_1_6,
            .et_pb_gutters1.et_pb_row_6col>.et_pb_column.et_pb_column_1_6 {
                width: 33.333%;
                margin-right: 0
            }

            .et_pb_gutters1 .et_pb_row_1-6_1-6_1-6_1-6>.et_pb_column.et_pb_column_1_6,
            .et_pb_gutters1.et_pb_row_1-6_1-6_1-6_1-6>.et_pb_column.et_pb_column_1_6 {
                width: 50%;
                margin-right: 0
            }
        }

        @media (max-width:767px) {

            .et_pb_gutters1 .et_pb_column,
            .et_pb_gutters1 .et_pb_column .et_pb_module,
            .et_pb_gutters1.et_pb_row .et_pb_column,
            .et_pb_gutters1.et_pb_row .et_pb_column .et_pb_module {
                margin-bottom: 0
            }
        }

        @media (max-width:479px) {

            .et_pb_gutters1 .et_pb_column,
            .et_pb_gutters1.et_pb_row .et_pb_column {
                margin: 0 !important
            }

            .et_pb_gutters1 .et_pb_column .et_pb_module,
            .et_pb_gutters1.et_pb_row .et_pb_column .et_pb_module {
                margin-bottom: 0
            }
        }

        .et_animated {
            opacity: 0;
            animation-duration: 1s;
            animation-fill-mode: both !important
        }

        .et_animated.infinite {
            animation-iteration-count: infinite
        }

        .et_had_animation {
            position: relative
        }

        @keyframes et_pb_fade {
            to {
                opacity: 1
            }
        }

        .et_animated.fade {
            animation-name: et_pb_fade
        }

        @keyframes et_pb_fadeTop {
            0% {
                transform: translate3d(0, -100%, 0)
            }

            to {
                opacity: 1;
                transform: none
            }
        }

        .et_animated.fadeTop {
            animation-name: et_pb_fadeTop
        }

        @keyframes et_pb_fadeRight {
            0% {
                transform: translate3d(100%, 0, 0)
            }

            to {
                opacity: 1;
                transform: none
            }
        }

        .et_animated.fadeRight {
            animation-name: et_pb_fadeRight
        }

        @keyframes et_pb_fadeBottom {
            0% {
                transform: translate3d(0, 100%, 0)
            }

            to {
                opacity: 1;
                transform: none
            }
        }

        .et_animated.fadeBottom {
            animation-name: et_pb_fadeBottom
        }

        @keyframes et_pb_fadeLeft {
            0% {
                transform: translate3d(-100%, 0, 0)
            }

            to {
                opacity: 1;
                transform: none
            }
        }

        .et_animated.fadeLeft {
            animation-name: et_pb_fadeLeft
        }

        .et_animated.slide {
            animation-name: et_pb_zoomLeft
        }

        .et_animated.slideBottom,
        .et_animated.slideRight,
        .et_animated.slideTop {
            animation-name: et_pb_slideLeft
        }

        @keyframes et_pb_slideLeft {
            to {
                transform: translateZ(0);
                opacity: 1
            }
        }

        .et_animated.slideLeft {
            animation-name: et_pb_slideLeft
        }

        @keyframes et_pb_bounce {

            0%,
            20%,
            40%,
            60%,
            80%,
            to {
                animation-timing-function: cubic-bezier(.215, .61, .355, 1)
            }

            0% {
                transform: scale3d(.3, .3, .3)
            }

            20% {
                transform: scale3d(1.1, 1.1, 1.1)
            }

            40% {
                transform: scale3d(.9, .9, .9)
            }

            60% {
                transform: scale3d(1.03, 1.03, 1.03)
            }

            80% {
                transform: scale3d(.97, .97, .97)
            }

            to {
                opacity: 1;
                transform: scaleX(1)
            }
        }

        .et_animated.bounce {
            animation-name: et_pb_bounce
        }

        @keyframes et_pb_bounceTop {

            0%,
            60%,
            75%,
            90%,
            to {
                animation-timing-function: cubic-bezier(.215, .61, .355, 1)
            }

            0% {
                transform: translate3d(0, -200px, 0)
            }

            60% {
                transform: translate3d(0, 25px, 0)
            }

            75% {
                transform: translate3d(0, -10px, 0)
            }

            90% {
                transform: translate3d(0, 5px, 0)
            }

            to {
                transform: none;
                opacity: 1
            }
        }

        .et_animated.bounceTop {
            animation-name: et_pb_bounceTop
        }

        @keyframes et_pb_bounceRight {

            0%,
            60%,
            75%,
            90%,
            to {
                animation-timing-function: cubic-bezier(.215, .61, .355, 1)
            }

            0% {
                transform: translate3d(200px, 0, 0)
            }

            60% {
                transform: translate3d(-25px, 0, 0)
            }

            75% {
                transform: translate3d(10px, 0, 0)
            }

            90% {
                transform: translate3d(-5px, 0, 0)
            }

            to {
                transform: none;
                opacity: 1
            }
        }

        .et_animated.bounceRight {
            animation-name: et_pb_bounceRight
        }

        @keyframes et_pb_bounceBottom {

            0%,
            60%,
            75%,
            90%,
            to {
                animation-timing-function: cubic-bezier(.215, .61, .355, 1)
            }

            0% {
                transform: translate3d(0, 200px, 0)
            }

            60% {
                transform: translate3d(0, -20px, 0)
            }

            75% {
                transform: translate3d(0, 10px, 0)
            }

            90% {
                transform: translate3d(0, -5px, 0)
            }

            to {
                transform: translateZ(0);
                opacity: 1
            }
        }

        .et_animated.bounceBottom {
            animation-name: et_pb_bounceBottom
        }

        @keyframes et_pb_bounceLeft {

            0%,
            60%,
            75%,
            90%,
            to {
                animation-timing-function: cubic-bezier(.215, .61, .355, 1)
            }

            0% {
                transform: translate3d(-200px, 0, 0)
            }

            60% {
                transform: translate3d(25px, 0, 0)
            }

            75% {
                transform: translate3d(-10px, 0, 0)
            }

            90% {
                transform: translate3d(5px, 0, 0)
            }

            to {
                transform: none;
                opacity: 1
            }
        }

        .et_animated.bounceLeft {
            animation-name: et_pb_bounceLeft
        }

        .et_animated.zoom,
        .et_animated.zoomTop {
            animation-name: et_pb_zoomLeft
        }

        .et_animated.zoomTop {
            transform-origin: top
        }

        .et_animated.zoomRight {
            animation-name: et_pb_zoomLeft;
            transform-origin: right
        }

        .et_animated.zoomBottom {
            animation-name: et_pb_zoomLeft;
            transform-origin: bottom
        }

        @keyframes et_pb_zoomLeft {
            to {
                transform: scaleX(1);
                opacity: 1
            }
        }

        .et_animated.zoomLeft {
            animation-name: et_pb_zoomLeft;
            transform-origin: left
        }

        .et_animated.flip,
        .et_animated.flipTop {
            animation-name: et_pb_foldBottom
        }

        .et_animated.flipRight,
        .et_animated.flipTop {
            transform-origin: center
        }

        .et_animated.flipRight {
            animation-name: et_pb_foldLeft
        }

        .et_animated.flipBottom {
            animation-name: et_pb_foldBottom;
            transform-origin: center
        }

        .et_animated.flipLeft,
        .et_animated.fold {
            animation-name: et_pb_foldLeft;
            transform-origin: center
        }

        .et_animated.foldTop {
            transform-origin: top;
            animation-name: et_pb_foldBottom
        }

        .et_animated.foldRight {
            transform-origin: right;
            animation-name: et_pb_foldLeft
        }

        @keyframes et_pb_foldBottom {
            to {
                opacity: 1;
                transform: rotateX(0deg)
            }
        }

        .et_animated.foldBottom {
            transform-origin: bottom;
            animation-name: et_pb_foldBottom
        }

        @keyframes et_pb_foldLeft {
            to {
                opacity: 1;
                transform: rotateY(0deg)
            }
        }

        .et_animated.foldLeft {
            transform-origin: left;
            animation-name: et_pb_foldLeft
        }

        @keyframes et_pb_roll {
            0% {
                transform-origin: center
            }

            to {
                transform-origin: center;
                transform: none;
                opacity: 1
            }
        }

        .et_animated.roll {
            animation-name: et_pb_roll
        }

        @keyframes et_pb_rollTop {
            0% {
                transform-origin: top
            }

            to {
                transform-origin: top;
                transform: none;
                opacity: 1
            }
        }

        .et_animated.rollTop {
            animation-name: et_pb_rollTop
        }

        @keyframes et_pb_rollRight {
            0% {
                transform-origin: right
            }

            to {
                transform-origin: right;
                transform: none;
                opacity: 1
            }
        }

        .et_animated.rollRight {
            animation-name: et_pb_rollRight
        }

        @keyframes et_pb_rollBottom {
            0% {
                transform-origin: bottom
            }

            to {
                transform-origin: bottom;
                transform: none;
                opacity: 1
            }
        }

        .et_animated.rollBottom {
            animation-name: et_pb_rollBottom
        }

        @keyframes et_pb_rollLeft {
            0% {
                transform-origin: left
            }

            to {
                transform-origin: left;
                transform: none;
                opacity: 1
            }
        }

        .et_animated.rollLeft {
            animation-name: et_pb_rollLeft
        }

        #et-secondary-menu li,
        #top-menu li {
            word-wrap: break-word
        }

        .nav li ul,
        .et_mobile_menu {
            border-color: #2EA3F2
        }

        .mobile_menu_bar:before,
        .mobile_menu_bar:after,
        #top-menu li.current-menu-ancestor>a,
        #top-menu li.current-menu-item>a {
            color: #2EA3F2
        }

        #main-header {
            -webkit-transition: background-color 0.4s, color 0.4s, opacity 0.4s ease-in-out, -webkit-transform 0.4s;
            transition: background-color 0.4s, color 0.4s, opacity 0.4s ease-in-out, -webkit-transform 0.4s;
            transition: background-color 0.4s, color 0.4s, transform 0.4s, opacity 0.4s ease-in-out;
            transition: background-color 0.4s, color 0.4s, transform 0.4s, opacity 0.4s ease-in-out, -webkit-transform 0.4s
        }

        #main-header.et-disabled-animations * {
            -webkit-transition-duration: 0s !important;
            transition-duration: 0s !important
        }

        .container {
            text-align: left;
            position: relative
        }

        .et_fixed_nav.et_show_nav #page-container {
            padding-top: 80px
        }

        .et_fixed_nav.et_show_nav.et-tb #page-container,
        .et_fixed_nav.et_show_nav.et-tb-has-header #page-container {
            padding-top: 0 !important
        }

        .et_fixed_nav.et_show_nav.et_secondary_nav_enabled #page-container {
            padding-top: 111px
        }

        .et_fixed_nav.et_show_nav.et_secondary_nav_enabled.et_header_style_centered #page-container {
            padding-top: 177px
        }

        .et_fixed_nav.et_show_nav.et_header_style_centered #page-container {
            padding-top: 147px
        }

        .et_fixed_nav #main-header {
            position: fixed
        }

        .et-cloud-item-editor #page-container {
            padding-top: 0 !important
        }

        .et_header_style_left #et-top-navigation {
            padding-top: 33px
        }

        .et_header_style_left #et-top-navigation nav>ul>li>a {
            padding-bottom: 33px
        }

        .et_header_style_left .logo_container {
            position: absolute;
            height: 100%;
            width: 100%
        }

        .et_header_style_left #et-top-navigation .mobile_menu_bar {
            padding-bottom: 24px
        }

        .et_hide_search_icon #et_top_search {
            display: none !important
        }

        #logo {
            width: auto;
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out;
            margin-bottom: 0;
            max-height: 54%;
            display: inline-block;
            float: none;
            vertical-align: middle;
            -webkit-transform: translate3d(0, 0, 0)
        }

        .et_pb_svg_logo #logo {
            height: 54%
        }

        .logo_container {
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out
        }

        span.logo_helper {
            display: inline-block;
            height: 100%;
            vertical-align: middle;
            width: 0
        }

        .safari .centered-inline-logo-wrap {
            -webkit-transform: translate3d(0, 0, 0);
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out
        }

        #et-define-logo-wrap img {
            width: 100%
        }

        .gecko #et-define-logo-wrap.svg-logo {
            position: relative !important
        }

        #top-menu-nav,
        #top-menu {
            line-height: 0
        }

        #et-top-navigation {
            font-weight: 600
        }

        .et_fixed_nav #et-top-navigation {
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out
        }

        .et-cart-info span:before {
            margin-right: 10px;
            position: relative
        }

        nav#top-menu-nav,
        #top-menu,
        nav.et-menu-nav,
        .et-menu {
            float: left
        }

        #top-menu li {
            display: inline-block;
            font-size: 14px;
            padding-right: 22px
        }

        #top-menu>li:last-child {
            padding-right: 0
        }

        .et_fullwidth_nav.et_non_fixed_nav.et_header_style_left #top-menu>li:last-child>ul.sub-menu {
            right: 0
        }

        #top-menu a {
            color: rgba(0, 0, 0, 0.6);
            text-decoration: none;
            display: block;
            position: relative;
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out
        }

        #top-menu-nav>ul>li>a:hover {
            opacity: 0.7;
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out
        }

        #et_search_icon:before {
            font-size: 17px;
            left: 0;
            position: absolute;
            top: -3px
        }

        #et_search_icon:hover {
            cursor: pointer
        }

        #et_top_search {
            float: right;
            margin: 3px 0 0 22px;
            position: relative;
            display: block;
            width: 18px
        }

        #et_top_search.et_search_opened {
            position: absolute;
            width: 100%
        }

        .et-search-form {
            top: 0;
            bottom: 0;
            right: 0;
            position: absolute;
            z-index: 1000;
            width: 100%
        }

        .et-search-form input {
            width: 90%;
            border: none;
            color: #333;
            position: absolute;
            top: 0;
            bottom: 0;
            right: 30px;
            margin: auto;
            background: transparent
        }

        .et-search-form .et-search-field::-ms-clear {
            width: 0;
            height: 0;
            display: none
        }

        .et_search_form_container {
            -webkit-animation: none;
            animation: none;
            -o-animation: none
        }

        .container.et_search_form_container {
            position: relative;
            opacity: 0;
            height: 1px
        }

        .container.et_search_form_container.et_pb_search_visible {
            z-index: 999;
            -webkit-animation: fadeInTop 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
            animation: fadeInTop 1s 1 cubic-bezier(0.77, 0, 0.175, 1)
        }

        .et_pb_search_visible.et_pb_no_animation {
            opacity: 1
        }

        .et_pb_search_form_hidden {
            -webkit-animation: fadeOutTop 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
            animation: fadeOutTop 1s 1 cubic-bezier(0.77, 0, 0.175, 1)
        }

        span.et_close_search_field {
            display: block;
            width: 30px;
            height: 30px;
            z-index: 99999;
            position: absolute;
            right: 0;
            cursor: pointer;
            top: 0;
            bottom: 0;
            margin: auto
        }

        span.et_close_search_field:after {
            font-family: 'ETmodules';
            speak: none;
            font-weight: normal;
            font-variant: normal;
            text-transform: none;
            line-height: 1;
            -webkit-font-smoothing: antialiased;
            font-size: 32px;
            display: inline-block;
            -webkit-box-sizing: border-box;
            box-sizing: border-box
        }

        .container.et_menu_container {
            z-index: 99
        }

        .container.et_search_form_container.et_pb_search_form_hidden {
            z-index: 1 !important
        }

        .et_search_outer {
            width: 100%;
            overflow: hidden;
            position: absolute;
            top: 0
        }

        .container.et_pb_menu_hidden {
            z-index: -1
        }

        form.et-search-form {
            background: rgba(0, 0, 0, 0) !important
        }

        input[type="search"]::-webkit-search-cancel-button {
            -webkit-appearance: none
        }

        .et-cart-info {
            color: inherit
        }

        #et-top-navigation .et-cart-info {
            float: left;
            margin: -2px 0 0 22px;
            font-size: 16px
        }

        #et-top-navigation {
            float: right
        }

        #top-menu li li {
            padding: 0 20px;
            margin: 0
        }

        #top-menu li li a {
            padding: 6px 20px;
            width: 200px
        }

        .nav li.et-touch-hover>ul {
            opacity: 1;
            visibility: visible
        }

        #top-menu .menu-item-has-children>a:first-child:after,
        #et-secondary-nav .menu-item-has-children>a:first-child:after {
            font-family: 'ETmodules';
            content: "3";
            font-size: 16px;
            position: absolute;
            right: 0;
            top: 0;
            font-weight: 800
        }

        #top-menu .menu-item-has-children>a:first-child,
        #et-secondary-nav .menu-item-has-children>a:first-child {
            padding-right: 20px
        }

        #top-menu li .menu-item-has-children>a:first-child {
            padding-right: 40px
        }

        #top-menu li .menu-item-has-children>a:first-child:after {
            right: 20px;
            top: 6px
        }

        #top-menu li.mega-menu {
            position: inherit
        }

        #top-menu li.mega-menu>ul {
            padding: 30px 20px;
            position: absolute !important;
            width: 100%;
            left: 0 !important
        }

        #top-menu li.mega-menu ul li {
            margin: 0;
            float: left !important;
            display: block !important;
            padding: 0 !important
        }

        #top-menu li.mega-menu>ul>li:nth-of-type(4n) {
            clear: right
        }

        #top-menu li.mega-menu>ul>li:nth-of-type(4n+1) {
            clear: left
        }

        #top-menu li.mega-menu ul li li {
            width: 100%
        }
        #top-menu li.mega-menu li>ul {
            -webkit-animation: none !important;
            animation: none !important;
            padding: 0px;
            border: none;
            left: auto;
            top: auto;
            width: 90% !important;
            position: relative;
            -webkit-box-shadow: none;
            box-shadow: none
        }

        #top-menu li.mega-menu li ul {
            visibility: visible;
            opacity: 1;
            display: none
        }

        #top-menu li.mega-menu.et-hover li ul {
            display: block
        }

        #top-menu li.mega-menu.et-hover>ul {
            opacity: 1 !important;
            visibility: visible !important
        }

        #top-menu li.mega-menu>ul>li>a {
            width: 90%;
            padding: 0 20px 10px
        }

        #top-menu li.mega-menu>ul>li>a:first-child {
            padding-top: 0 !important;
            font-weight: bold;
            border-bottom: 1px solid rgba(0, 0, 0, 0.03)
        }

        #top-menu li.mega-menu>ul>li>a:first-child:hover {
            background-color: transparent !important
        }

        #top-menu li.mega-menu li>a {
            width: 100%
        }

        #top-menu li.mega-menu.mega-menu-parent li li,
        #top-menu li.mega-menu.mega-menu-parent li>a {
            width: 100% !important
        }

        #top-menu li.mega-menu.mega-menu-parent li>.sub-menu {
            float: left;
            width: 100% !important
        }

        #top-menu li.mega-menu>ul>li {
            width: 25%;
            margin: 0
        }

        #top-menu li.mega-menu.mega-menu-parent-3>ul>li {
            width: 33.33%
        }

        #top-menu li.mega-menu.mega-menu-parent-2>ul>li {
            width: 50%
        }

        #top-menu li.mega-menu.mega-menu-parent-1>ul>li {
            width: 100%
        }

        #top-menu li.mega-menu .menu-item-has-children>a:first-child:after {
            display: none
        }

        #top-menu li.mega-menu>ul>li>ul>li {
            width: 100%;
            margin: 0
        }

        #et_mobile_nav_menu {
            float: right;
            display: none
        }

        .mobile_menu_bar {
            position: relative;
            display: block;
            line-height: 0
        }

        .mobile_menu_bar:before,
        .et_toggle_slide_menu:after {
            font-size: 32px;
            left: 0;
            position: relative;
            top: 0;
            cursor: pointer
        }

        .mobile_nav .select_page {
            display: none
        }

        .et_pb_menu_hidden #top-menu,
        .et_pb_menu_hidden #et_search_icon:before,
        .et_pb_menu_hidden .et-cart-info {
            opacity: 0;
            -webkit-animation: fadeOutBottom 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
            animation: fadeOutBottom 1s 1 cubic-bezier(0.77, 0, 0.175, 1)
        }

        .et_pb_menu_visible #top-menu,
        .et_pb_menu_visible #et_search_icon:before,
        .et_pb_menu_visible .et-cart-info {
            z-index: 99;
            opacity: 1;
            -webkit-animation: fadeInBottom 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
            animation: fadeInBottom 1s 1 cubic-bezier(0.77, 0, 0.175, 1)
        }

        .et_pb_menu_hidden #top-menu,
        .et_pb_menu_hidden #et_search_icon:before,
        .et_pb_menu_hidden .mobile_menu_bar {
            opacity: 0;
            -webkit-animation: fadeOutBottom 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
            animation: fadeOutBottom 1s 1 cubic-bezier(0.77, 0, 0.175, 1)
        }

        .et_pb_menu_visible #top-menu,
        .et_pb_menu_visible #et_search_icon:before,
        .et_pb_menu_visible .mobile_menu_bar {
            z-index: 99;
            opacity: 1;
            -webkit-animation: fadeInBottom 1s 1 cubic-bezier(0.77, 0, 0.175, 1);
            animation: fadeInBottom 1s 1 cubic-bezier(0.77, 0, 0.175, 1)
        }

        .et_pb_no_animation #top-menu,
        .et_pb_no_animation #et_search_icon:before,
        .et_pb_no_animation .mobile_menu_bar,
        .et_pb_no_animation.et_search_form_container {
            animation: none !important;
            -o-animation: none !important;
            -webkit-animation: none !important;
            -moz-animation: none !important
        }

        body.admin-bar.et_fixed_nav #main-header {
            top: 32px
        }

        body.et-wp-pre-3_8.admin-bar.et_fixed_nav #main-header {
            top: 28px
        }

        body.et_fixed_nav.et_secondary_nav_enabled #main-header {
            top: 30px
        }

        body.admin-bar.et_fixed_nav.et_secondary_nav_enabled #main-header {
            top: 63px
        }

        @media all and (min-width: 981px) {

            .et_hide_primary_logo #main-header:not(.et-fixed-header) .logo_container,
            .et_hide_fixed_logo #main-header.et-fixed-header .logo_container {
                height: 0;
                opacity: 0;
                -webkit-transition: all 0.4s ease-in-out;
                transition: all 0.4s ease-in-out
            }

            .et_hide_primary_logo #main-header:not(.et-fixed-header) .centered-inline-logo-wrap,
            .et_hide_fixed_logo #main-header.et-fixed-header .centered-inline-logo-wrap {
                height: 0;
                opacity: 0;
                padding: 0
            }

            .et-animated-content#page-container {
                -webkit-transition: margin-top 0.4s ease-in-out;
                transition: margin-top 0.4s ease-in-out
            }

            .et_hide_nav #page-container {
                -webkit-transition: none;
                transition: none
            }

            .et_fullwidth_nav .et-search-form,
            .et_fullwidth_nav .et_close_search_field {
                right: 30px
            }

            #main-header.et-fixed-header {
                -webkit-box-shadow: 0 0 7px rgba(0, 0, 0, 0.1) !important;
                box-shadow: 0 0 7px rgba(0, 0, 0, 0.1) !important
            }

            .et_header_style_left .et-fixed-header #et-top-navigation {
                padding-top: 20px
            }

            .et_header_style_left .et-fixed-header #et-top-navigation nav>ul>li>a {
                padding-bottom: 20px
            }

            .et_hide_nav.et_fixed_nav #main-header {
                opacity: 0
            }

            .et_hide_nav.et_fixed_nav .et-fixed-header#main-header {
                -webkit-transform: translateY(0px) !important;
                transform: translateY(0px) !important;
                opacity: 1
            }

            .et_hide_nav .centered-inline-logo-wrap,
            .et_hide_nav.et_fixed_nav #main-header,
            .et_hide_nav.et_fixed_nav #main-header,
            .et_hide_nav .centered-inline-logo-wrap {
                -webkit-transition-duration: .7s;
                transition-duration: .7s
            }

            .et_hide_nav #page-container {
                padding-top: 0 !important
            }

            .et_primary_nav_dropdown_animation_fade #et-top-navigation ul li:hover>ul,
            .et_secondary_nav_dropdown_animation_fade #et-secondary-nav li:hover>ul {
                -webkit-transition: all .2s ease-in-out;
                transition: all .2s ease-in-out
            }

            .et_primary_nav_dropdown_animation_slide #et-top-navigation ul li:hover>ul,
            .et_secondary_nav_dropdown_animation_slide #et-secondary-nav li:hover>ul {
                -webkit-animation: fadeLeft .4s ease-in-out;
                animation: fadeLeft .4s ease-in-out
            }

            .et_primary_nav_dropdown_animation_expand #et-top-navigation ul li:hover>ul,
            .et_secondary_nav_dropdown_animation_expand #et-secondary-nav li:hover>ul {
                -webkit-transform-origin: 0 0;
                transform-origin: 0 0;
                -webkit-animation: Grow .4s ease-in-out;
                animation: Grow .4s ease-in-out;
                -webkit-backface-visibility: visible !important;
                backface-visibility: visible !important
            }

            .et_primary_nav_dropdown_animation_flip #et-top-navigation ul li ul li:hover>ul,
            .et_secondary_nav_dropdown_animation_flip #et-secondary-nav ul li:hover>ul {
                -webkit-animation: flipInX .6s ease-in-out;
                animation: flipInX .6s ease-in-out;
                -webkit-backface-visibility: visible !important;
                backface-visibility: visible !important
            }

            .et_primary_nav_dropdown_animation_flip #et-top-navigation ul li:hover>ul,
            .et_secondary_nav_dropdown_animation_flip #et-secondary-nav li:hover>ul {
                -webkit-animation: flipInY .6s ease-in-out;
                animation: flipInY .6s ease-in-out;
                -webkit-backface-visibility: visible !important;
                backface-visibility: visible !important
            }

            .et_fullwidth_nav #main-header .container {
                width: 100%;
                max-width: 100%;
                padding-right: 30px;
                padding-left: 30px
            }

            .et_non_fixed_nav.et_fullwidth_nav.et_header_style_left #main-header .container {
                padding-left: 0
            }

            .et_non_fixed_nav.et_fullwidth_nav.et_header_style_left .logo_container {
                padding-left: 30px
            }
        }

        @media all and (max-width: 980px) {

            .et_fixed_nav.et_show_nav.et_secondary_nav_enabled #page-container,
            .et_fixed_nav.et_show_nav #page-container {
                padding-top: 80px
            }

            .et_fixed_nav.et_show_nav.et-tb #page-container,
            .et_fixed_nav.et_show_nav.et-tb-has-header #page-container {
                padding-top: 0 !important
            }

            .et_non_fixed_nav #page-container {
                padding-top: 0
            }

            .et_fixed_nav.et_secondary_nav_only_menu.admin-bar #main-header {
                top: 32px !important
            }

            .et_hide_mobile_logo #main-header .logo_container {
                display: none;
                opacity: 0;
                -webkit-transition: all 0.4s ease-in-out;
                transition: all 0.4s ease-in-out
            }

            #top-menu {
                display: none
            }

            .et_hide_nav.et_fixed_nav #main-header {
                -webkit-transform: translateY(0px) !important;
                transform: translateY(0px) !important;
                opacity: 1
            }

            #et-top-navigation {
                margin-right: 0;
                -webkit-transition: none;
                transition: none
            }

            .et_fixed_nav #main-header {
                position: absolute
            }

            .et_header_style_left .et-fixed-header #et-top-navigation,
            .et_header_style_left #et-top-navigation {
                padding-top: 24px;
                display: block
            }

            .et_fixed_nav #main-header {
                -webkit-transition: none;
                transition: none
            }

            .et_fixed_nav_temp #main-header {
                top: 0 !important
            }

            #logo,
            .logo_container,
            #main-header,
            .container {
                -webkit-transition: none;
                transition: none
            }

            .et_header_style_left #logo {
                max-width: 50%
            }

            #et_top_search {
                margin: 0 35px 0 0;
                float: left
            }

            #et_search_icon:before {
                top: 7px
            }

            .et_header_style_left .et-search-form {
                width: 50% !important;
                max-width: 50% !important
            }

            #et_mobile_nav_menu {
                display: block
            }

            #et-top-navigation .et-cart-info {
                margin-top: 5px
            }
        }

        @media screen and (max-width: 782px) {
            body.admin-bar.et_fixed_nav #main-header {
                top: 46px
            }
        }

        @media all and (max-width: 767px) {
            #et-top-navigation {
                margin-right: 0
            }

            body.admin-bar.et_fixed_nav #main-header {
                top: 46px
            }
        }

        @media all and (max-width: 479px) {
            #et-top-navigation {
                margin-right: 0
            }
        }

        @media print {

            #top-header,
            #main-header {
                position: relative !important;
                top: auto !important;
                right: auto !important;
                bottom: auto !important;
                left: auto !important
            }
        }

        @keyframes fadeOutTop {
            0% {
                opacity: 1;
                transform: translatey(0)
            }

            to {
                opacity: 0;
                transform: translatey(-60%)
            }
        }

        @keyframes fadeInTop {
            0% {
                opacity: 0;
                transform: translatey(-60%)
            }

            to {
                opacity: 1;
                transform: translatey(0)
            }
        }

        @keyframes fadeInBottom {
            0% {
                opacity: 0;
                transform: translatey(60%)
            }

            to {
                opacity: 1;
                transform: translatey(0)
            }
        }

        @keyframes fadeOutBottom {
            0% {
                opacity: 1;
                transform: translatey(0)
            }

            to {
                opacity: 0;
                transform: translatey(60%)
            }
        }

        @keyframes Grow {
            0% {
                opacity: 0;
                transform: scaleY(.5)
            }

            to {
                opacity: 1;
                transform: scale(1)
            }
        }

        /*!
* Animate.css - http://daneden.me/animate
* Licensed under the MIT license - http://opensource.org/licenses/MIT
* Copyright (c) 2015 Daniel Eden
*/
        @keyframes flipInX {
            0% {
                transform: perspective(400px) rotateX(90deg);
                animation-timing-function: ease-in;
                opacity: 0
            }

            40% {
                transform: perspective(400px) rotateX(-20deg);
                animation-timing-function: ease-in
            }

            60% {
                transform: perspective(400px) rotateX(10deg);
                opacity: 1
            }

            80% {
                transform: perspective(400px) rotateX(-5deg)
            }

            to {
                transform: perspective(400px)
            }
        }

        @keyframes flipInY {
            0% {
                transform: perspective(400px) rotateY(90deg);
                animation-timing-function: ease-in;
                opacity: 0
            }

            40% {
                transform: perspective(400px) rotateY(-20deg);
                animation-timing-function: ease-in
            }

            60% {
                transform: perspective(400px) rotateY(10deg);
                opacity: 1
            }

            80% {
                transform: perspective(400px) rotateY(-5deg)
            }

            to {
                transform: perspective(400px)
            }
        }

        #main-header {
            line-height: 23px;
            font-weight: 500;
            top: 0;
            background-color: #fff;
            width: 100%;
            box-shadow: 0 1px 0 rgba(0, 0, 0, .1);
            position: relative;
            z-index: 99999
        }

        .nav li li {
            padding: 0 20px;
            margin: 0
        }

        .et-menu li li a {
            padding: 6px 20px;
            width: 200px
        }

        .nav li {
            position: relative;
            line-height: 1em
        }

        .nav li li {
            position: relative;
            line-height: 2em
        }

        .nav li ul {
            position: absolute;
            padding: 20px 0;
            z-index: 9999;
            width: 240px;
            background: #fff;
            visibility: hidden;
            opacity: 0;
            border-top: 3px solid #2ea3f2;
            box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
            -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
            -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
            -webkit-transform: translateZ(0);
            text-align: left
        }

        .nav li.et-hover>ul {
            visibility: visible
        }

        .nav li.et-touch-hover>ul,
        .nav li:hover>ul {
            opacity: 1;
            visibility: visible
        }

        .nav li li ul {
            z-index: 1000;
            top: -23px;
            left: 240px
        }

        .nav li.et-reverse-direction-nav li ul {
            left: auto;
            right: 240px
        }

        .nav li:hover {
            visibility: inherit
        }

        .et_mobile_menu li a,
        .nav li li a {
            font-size: 14px;
            transition: all .2s ease-in-out
        }

        .et_mobile_menu li a:hover,
        .nav ul li a:hover {
            background-color: rgba(0, 0, 0, .03);
            opacity: .7
        }

        .et-dropdown-removing>ul {
            display: none
        }

        .mega-menu .et-dropdown-removing>ul {
            display: block
        }

        .et-menu .menu-item-has-children>a:first-child:after {
            font-family: ETmodules;
            content: "3";
            font-size: 16px;
            position: absolute;
            right: 0;
            top: 0;
            font-weight: 800
        }

        .et-menu .menu-item-has-children>a:first-child {
            padding-right: 20px
        }

        .et-menu li li.menu-item-has-children>a:first-child:after {
            right: 20px;
            top: 6px
        }

        .et-menu-nav li.mega-menu {
            position: inherit
        }

        .et-menu-nav li.mega-menu>ul {
            padding: 30px 20px;
            position: absolute !important;
            width: 100%;
            left: 0 !important
        }

        .et-menu-nav li.mega-menu ul li {
            margin: 0;
            float: left !important;
            display: block !important;
            padding: 0 !important
        }

        .et-menu-nav li.mega-menu li>ul {
            animation: none !important;
            padding: 0;
            border: none;
            left: auto;
            top: auto;
            width: 240px !important;
            position: relative;
            box-shadow: none;
            -webkit-box-shadow: none
        }

        .et-menu-nav li.mega-menu li ul {
            visibility: visible;
            opacity: 1;
            display: none
        }

        .et-menu-nav li.mega-menu.et-hover li ul,
        .et-menu-nav li.mega-menu:hover li ul {
            display: block
        }

        .et-menu-nav li.mega-menu:hover>ul {
            opacity: 1 !important;
            visibility: visible !important
        }

        .et-menu-nav li.mega-menu>ul>li>a:first-child {
            padding-top: 0 !important;
            font-weight: 700;
            border-bottom: 1px solid rgba(0, 0, 0, .03)
        }

        .et-menu-nav li.mega-menu>ul>li>a:first-child:hover {
            background-color: transparent !important
        }

        .et-menu-nav li.mega-menu li>a {
            width: 200px !important
        }

        .et-menu-nav li.mega-menu.mega-menu-parent li>a,
        .et-menu-nav li.mega-menu.mega-menu-parent li li {
            width: 100% !important
        }

        .et-menu-nav li.mega-menu.mega-menu-parent li>.sub-menu {
            float: left;
            width: 100% !important
        }

        .et-menu-nav li.mega-menu>ul>li {
            width: 25%;
            margin: 0
        }

        .et-menu-nav li.mega-menu.mega-menu-parent-3>ul>li {
            width: 33.33%
        }

        .et-menu-nav li.mega-menu.mega-menu-parent-2>ul>li {
            width: 50%
        }

        .et-menu-nav li.mega-menu.mega-menu-parent-1>ul>li {
            width: 100%
        }

        .et_pb_fullwidth_menu li.mega-menu .menu-item-has-children>a:first-child:after,
        .et_pb_menu li.mega-menu .menu-item-has-children>a:first-child:after {
            display: none
        }

        .et_fullwidth_nav #top-menu li.mega-menu>ul {
            width: auto;
            left: 30px !important;
            right: 30px !important
        }

        .et_mobile_menu {
            position: absolute;
            left: 0;
            padding: 5%;
            background: #fff;
            width: 100%;
            visibility: visible;
            opacity: 1;
            display: none;
            z-index: 9999;
            border-top: 3px solid #2ea3f2;
            box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
            -moz-box-shadow: 0 2px 5px rgba(0, 0, 0, .1);
            -webkit-box-shadow: 0 2px 5px rgba(0, 0, 0, .1)
        }

        #main-header .et_mobile_menu li ul,
        .et_pb_fullwidth_menu .et_mobile_menu li ul,
        .et_pb_menu .et_mobile_menu li ul {
            visibility: visible !important;
            display: block !important;
            padding-left: 10px
        }

        .et_mobile_menu li li {
            padding-left: 5%
        }

        .et_mobile_menu li a {
            border-bottom: 1px solid rgba(0, 0, 0, .03);
            color: #666;
            padding: 10px 5%;
            display: block
        }

        .et_mobile_menu .menu-item-has-children>a {
            font-weight: 700;
            background-color: rgba(0, 0, 0, .03)
        }

        .et_mobile_menu li .menu-item-has-children>a {
            background-color: transparent
        }

        .et_mobile_nav_menu {
            float: right;
            display: none
        }

        .mobile_menu_bar {
            position: relative;
            display: block;
            line-height: 0
        }

        .mobile_menu_bar:before {
            content: "a";
            font-size: 32px;
            position: relative;
            left: 0;
            top: 0;
            cursor: pointer
        }

        .et_pb_module .mobile_menu_bar:before {
            top: 2px
        }

        .mobile_nav .select_page {
            display: none
        }

        .et-social-icons {
            float: right
        }

        .et-social-icons li {
            display: inline-block;
            margin-left: 20px
        }

        .et-social-icon a {
            display: inline-block;
            font-size: 24px;
            position: relative;
            text-align: center;
            -webkit-transition: color 300ms ease 0s;
            transition: color 300ms ease 0s;
            color: #666;
            text-decoration: none
        }

        .et-social-icons a:hover {
            opacity: 0.7;
            -webkit-transition: all 0.4s ease-in-out;
            transition: all 0.4s ease-in-out
        }

        .et-social-icon span {
            display: none
        }

        .et_duplicate_social_icons {
            display: none
        }

        @media all and (max-width: 980px) {
            .et-social-icons {
                float: none;
                text-align: center
            }
        }

        @media all and (max-width: 980px) {
            .et-social-icons {
                margin: 0 0 5px
            }
        }

        .et_pb_widget {
            float: left;
            max-width: 100%;
            word-wrap: break-word
        }

        .et_pb_widget a {
            text-decoration: none;
            color: #666
        }

        .et_pb_widget li a:hover {
            color: #82c0c7
        }

        .et_pb_widget ol li,
        .et_pb_widget ul li {
            margin-bottom: .5em
        }

        .et_pb_widget ol li ol li,
        .et_pb_widget ul li ul li {
            margin-left: 15px
        }

        .et_pb_widget select {
            width: 100%;
            height: 28px;
            padding: 0 5px
        }

        .et_pb_widget_area .et_pb_widget a {
            color: inherit
        }

        .et_pb_bg_layout_light .et_pb_widget li a {
            color: #666
        }

        .et_pb_bg_layout_dark .et_pb_widget li a {
            color: inherit
        }

        .widget_search .screen-reader-text,
        .et_pb_widget .wp-block-search__label {
            display: none
        }

        .widget_search input#s,
        .widget_search input#searchsubmit,
        .et_pb_widget .wp-block-search__input,
        .et_pb_widget .wp-block-search__button {
            padding: .7em;
            height: 40px !important;
            margin: 0;
            font-size: 14px;
            line-height: normal !important;
            border: 1px solid #ddd;
            color: #666
        }

        .widget_search #s,
        .et_pb_widget .wp-block-search__input {
            width: 100%;
            border-radius: 3px
        }

        .widget_search #searchform,
        .et_pb_widget .wp-block-search {
            position: relative
        }

        .widget_search #searchsubmit,
        .et_pb_widget .wp-block-search__button {
            background-color: #ddd;
            -webkit-border-top-right-radius: 3px;
            -webkit-border-bottom-right-radius: 3px;
            -moz-border-radius-topright: 3px;
            -moz-border-radius-bottomright: 3px;
            border-top-right-radius: 3px;
            border-bottom-right-radius: 3px;
            position: absolute;
            right: 0;
            top: 0
        }

        #searchsubmit,
        .et_pb_widget .wp-block-search__button {
            cursor: pointer
        }

        .et_pb_section {
            position: relative;
            background-color: #fff;
            background-position: 50%;
            background-size: 100%;
            background-size: cover
        }

        .et_pb_section--absolute,
        .et_pb_section--fixed {
            width: 100%
        }

        .et_pb_section.et_section_transparent {
            background-color: transparent
        }

        .et_pb_fullwidth_section {
            padding: 0
        }

        .et_pb_fullwidth_section>.et_pb_module:not(.et_pb_post_content):not(.et_pb_fullwidth_post_content) .et_pb_row {
            padding: 0 !important
        }

        .et_pb_inner_shadow {
            box-shadow: inset 0 0 7px rgba(0, 0, 0, .07)
        }

        .et_pb_bottom_inside_divider,
        .et_pb_top_inside_divider {
            display: block;
            background-repeat-y: no-repeat;
            height: 100%;
            position: absolute;
            pointer-events: none;
            width: 100%;
            left: 0;
            right: 0
        }

        .et_pb_bottom_inside_divider.et-no-transition,
        .et_pb_top_inside_divider.et-no-transition {
            transition: none !important
        }

        .et_pb_top_inside_divider {
            margin-top: -1px
        }

        .et_pb_bottom_inside_divider {
            margin-bottom: -1px
        }

        .et-fb .section_has_divider.et_fb_element_controls_visible--child>.et_pb_bottom_inside_divider,
        .et-fb .section_has_divider.et_fb_element_controls_visible--child>.et_pb_top_inside_divider {
            z-index: 1
        }

        .et_pb_section_video:not(.et_pb_section--with-menu) {
            overflow: hidden;
            position: relative
        }

        .et_pb_column>.et_pb_section_video_bg {
            z-index: -1
        }

        .et_pb_section_video_bg {
            visibility: visible;
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            overflow: hidden;
            display: block;
            pointer-events: none;
            transition: display .3s
        }

        .et_pb_section_video_bg.et_pb_section_video_bg_hover,
        .et_pb_section_video_bg.et_pb_section_video_bg_phone,
        .et_pb_section_video_bg.et_pb_section_video_bg_tablet,
        .et_pb_section_video_bg.et_pb_section_video_bg_tablet_only {
            display: none
        }

        .et_pb_section_video_bg .mejs-controls,
        .et_pb_section_video_bg .mejs-overlay-play {
            display: none !important
        }

        .et_pb_section_video_bg embed,
        .et_pb_section_video_bg iframe,
        .et_pb_section_video_bg object,
        .et_pb_section_video_bg video {
            max-width: none
        }

        .et_pb_section_video_bg .mejs-video {
            left: 50%;
            position: absolute;
            max-width: none
        }

        .et_pb_section_video_bg .mejs-overlay-loading {
            display: none !important
        }

        .et_pb_social_network_link .et_pb_section_video {
            overflow: visible
        }

        .et_pb_section_video_on_hover:hover>.et_pb_section_video_bg {
            display: none
        }

        .et_pb_section_video_on_hover:hover>.et_pb_section_video_bg_hover,
        .et_pb_section_video_on_hover:hover>.et_pb_section_video_bg_hover_inherit {
            display: block
        }

        @media (min-width:981px) {
            .et_pb_section {
                padding: 4% 0
            }

            body.et_pb_pagebuilder_layout.et_pb_show_title .post-password-required .et_pb_section,
            body:not(.et_pb_pagebuilder_layout) .post-password-required .et_pb_section {
                padding-top: 0
            }

            .et_pb_fullwidth_section {
                padding: 0
            }

            .et_pb_section_video_bg.et_pb_section_video_bg_desktop_only {
                display: block
            }
        }

        @media (max-width:980px) {
            .et_pb_section {
                padding: 50px 0
            }

            body.et_pb_pagebuilder_layout.et_pb_show_title .post-password-required .et_pb_section,
            body:not(.et_pb_pagebuilder_layout) .post-password-required .et_pb_section {
                padding-top: 0
            }

            .et_pb_fullwidth_section {
                padding: 0
            }

            .et_pb_section_video_bg.et_pb_section_video_bg_tablet {
                display: block
            }

            .et_pb_section_video_bg.et_pb_section_video_bg_desktop_only {
                display: none
            }
        }

        @media (min-width:768px) {
            .et_pb_section_video_bg.et_pb_section_video_bg_desktop_tablet {
                display: block
            }
        }

        @media (min-width:768px) and (max-width:980px) {
            .et_pb_section_video_bg.et_pb_section_video_bg_tablet_only {
                display: block
            }
        }

        @media (max-width:767px) {
            .et_pb_section_video_bg.et_pb_section_video_bg_phone {
                display: block
            }

            .et_pb_section_video_bg.et_pb_section_video_bg_desktop_tablet {
                display: none
            }
        }

        .et_pb_row {
            width: 80%;
            max-width: 1080px;
            margin: auto;
            position: relative
        }

        body.safari .section_has_divider,
        body.uiwebview .section_has_divider {
            perspective: 2000px
        }

        .section_has_divider .et_pb_row {
            z-index: 5
        }

        .et_pb_row_inner {
            width: 100%;
            position: relative
        }

        .et_pb_row.et_pb_row_empty,
        .et_pb_row_inner:nth-of-type(n+2).et_pb_row_empty {
            display: none
        }

        .et_pb_row:after,
        .et_pb_row_inner:after {
            content: "";
            display: block;
            clear: both;
            visibility: hidden;
            line-height: 0;
            height: 0;
            width: 0
        }

        .et_pb_row_4col .et-last-child,
        .et_pb_row_4col .et-last-child-2,
        .et_pb_row_6col .et-last-child,
        .et_pb_row_6col .et-last-child-2,
        .et_pb_row_6col .et-last-child-3 {
            margin-bottom: 0
        }

        .et_pb_column {
            float: left;
            background-size: cover;
            background-position: 50%;
            position: relative;
            z-index: 2;
            min-height: 1px
        }

        .et_pb_column--with-menu {
            z-index: 3
        }

        .et_pb_column.et_pb_column_empty {
            min-height: 1px
        }

        .et_pb_row .et_pb_column.et-last-child,
        .et_pb_row .et_pb_column:last-child,
        .et_pb_row_inner .et_pb_column.et-last-child,
        .et_pb_row_inner .et_pb_column:last-child {
            margin-right: 0 !important
        }

        .et_pb_column.et_pb_section_parallax {
            position: relative
        }

        .et_pb_column,
        .et_pb_row,
        .et_pb_row_inner {
            background-size: cover;
            background-position: 50%;
            background-repeat: no-repeat
        }

        @media (min-width:981px) {
            .et_pb_row {
                padding: 2% 0
            }

            body.et_pb_pagebuilder_layout.et_pb_show_title .post-password-required .et_pb_row,
            body:not(.et_pb_pagebuilder_layout) .post-password-required .et_pb_row {
                padding: 0;
                width: 100%
            }

            .et_pb_column_3_4 .et_pb_row_inner {
                padding: 3.735% 0
            }

            .et_pb_column_2_3 .et_pb_row_inner {
                padding: 4.2415% 0
            }

            .et_pb_column_1_2 .et_pb_row_inner,
            .et_pb_column_3_5 .et_pb_row_inner {
                padding: 5.82% 0
            }

            .et_section_specialty>.et_pb_row {
                padding: 0
            }

            .et_pb_row_inner {
                width: 100%
            }

            .et_pb_column_single {
                padding: 2.855% 0
            }

            .et_pb_column_single .et_pb_module.et-first-child,
            .et_pb_column_single .et_pb_module:first-child {
                margin-top: 0
            }

            .et_pb_column_single .et_pb_module.et-last-child,
            .et_pb_column_single .et_pb_module:last-child {
                margin-bottom: 0
            }

            .et_pb_row .et_pb_column.et-last-child,
            .et_pb_row .et_pb_column:last-child,
            .et_pb_row_inner .et_pb_column.et-last-child,
            .et_pb_row_inner .et_pb_column:last-child {
                margin-right: 0 !important
            }

            .et_pb_row.et_pb_equal_columns,
            .et_pb_row_inner.et_pb_equal_columns,
            .et_pb_section.et_pb_equal_columns>.et_pb_row {
                display: -ms-flexbox;
                display: flex;
                direction: ltr
            }

            .et_pb_row.et_pb_equal_columns>.et_pb_column,
            .et_pb_section.et_pb_equal_columns>.et_pb_row>.et_pb_column {
                -ms-flex-order: 1;
                order: 1
            }
        }

        @media (max-width:980px) {
            .et_pb_row {
                max-width: 1080px
            }

            body.et_pb_pagebuilder_layout.et_pb_show_title .post-password-required .et_pb_row,
            body:not(.et_pb_pagebuilder_layout) .post-password-required .et_pb_row {
                padding: 0;
                width: 100%
            }

            .et_pb_column .et_pb_row_inner,
            .et_pb_row {
                padding: 30px 0
            }

            .et_section_specialty>.et_pb_row {
                padding: 0
            }

            .et_pb_column {
                width: 100%;
                margin-bottom: 30px
            }

            .et_pb_bottom_divider .et_pb_row:nth-last-child(2) .et_pb_column:last-child,
            .et_pb_row .et_pb_column.et-last-child,
            .et_pb_row .et_pb_column:last-child {
                margin-bottom: 0
            }

            .et_section_specialty .et_pb_row>.et_pb_column {
                padding-bottom: 0
            }

            .et_pb_column.et_pb_column_empty {
                display: none
            }

            .et_pb_row_1-2_1-4_1-4,
            .et_pb_row_1-2_1-6_1-6_1-6,
            .et_pb_row_1-4_1-4,
            .et_pb_row_1-4_1-4_1-2,
            .et_pb_row_1-5_1-5_3-5,
            .et_pb_row_1-6_1-6_1-6,
            .et_pb_row_1-6_1-6_1-6_1-2,
            .et_pb_row_1-6_1-6_1-6_1-6,
            .et_pb_row_3-5_1-5_1-5,
            .et_pb_row_4col,
            .et_pb_row_5col,
            .et_pb_row_6col {
                display: -ms-flexbox;
                display: flex;
                -ms-flex-wrap: wrap;
                flex-wrap: wrap
            }

            .et_pb_row_1-4_1-4>.et_pb_column.et_pb_column_1_4,
            .et_pb_row_1-4_1-4_1-2>.et_pb_column.et_pb_column_1_4,
            .et_pb_row_4col>.et_pb_column.et_pb_column_1_4 {
                width: 47.25%;
                margin-right: 5.5%
            }

            .et_pb_row_1-4_1-4>.et_pb_column.et_pb_column_1_4:nth-child(2n),
            .et_pb_row_1-4_1-4_1-2>.et_pb_column.et_pb_column_1_4:nth-child(2n),
            .et_pb_row_4col>.et_pb_column.et_pb_column_1_4:nth-child(2n) {
                margin-right: 0
            }

            .et_pb_row_1-2_1-4_1-4>.et_pb_column.et_pb_column_1_4 {
                width: 47.25%;
                margin-right: 5.5%
            }

            .et_pb_row_1-2_1-4_1-4>.et_pb_column.et_pb_column_1_2,
            .et_pb_row_1-2_1-4_1-4>.et_pb_column.et_pb_column_1_4:nth-child(odd) {
                margin-right: 0
            }

            .et_pb_row_1-2_1-4_1-4 .et_pb_column:nth-last-child(-n+2),
            .et_pb_row_1-4_1-4 .et_pb_column:nth-last-child(-n+2),
            .et_pb_row_4col .et_pb_column:nth-last-child(-n+2) {
                margin-bottom: 0
            }

            .et_pb_row_1-5_1-5_3-5>.et_pb_column.et_pb_column_1_5,
            .et_pb_row_5col>.et_pb_column.et_pb_column_1_5 {
                width: 47.25%;
                margin-right: 5.5%
            }

            .et_pb_row_1-5_1-5_3-5>.et_pb_column.et_pb_column_1_5:nth-child(2n),
            .et_pb_row_5col>.et_pb_column.et_pb_column_1_5:nth-child(2n) {
                margin-right: 0
            }

            .et_pb_row_3-5_1-5_1-5>.et_pb_column.et_pb_column_1_5 {
                width: 47.25%;
                margin-right: 5.5%
            }

            .et_pb_row_3-5_1-5_1-5>.et_pb_column.et_pb_column_1_5:nth-child(odd),
            .et_pb_row_3-5_1-5_1-5>.et_pb_column.et_pb_column_3_5 {
                margin-right: 0
            }

            .et_pb_row_3-5_1-5_1-5 .et_pb_column:nth-last-child(-n+2),
            .et_pb_row_5col .et_pb_column:last-child {
                margin-bottom: 0
            }

            .et_pb_row_1-6_1-6_1-6_1-2>.et_pb_column.et_pb_column_1_6,
            .et_pb_row_6col>.et_pb_column.et_pb_column_1_6 {
                width: 29.666%;
                margin-right: 5.5%
            }

            .et_pb_row_1-6_1-6_1-6_1-2>.et_pb_column.et_pb_column_1_6:nth-child(3n),
            .et_pb_row_6col>.et_pb_column.et_pb_column_1_6:nth-child(3n) {
                margin-right: 0
            }

            .et_pb_row_1-2_1-6_1-6_1-6>.et_pb_column.et_pb_column_1_6 {
                width: 29.666%;
                margin-right: 5.5%
            }

            .et_pb_row_1-2_1-6_1-6_1-6>.et_pb_column.et_pb_column_1_2,
            .et_pb_row_1-2_1-6_1-6_1-6>.et_pb_column.et_pb_column_1_6:last-child {
                margin-right: 0
            }

            .et_pb_row_1-2_1-2 .et_pb_column.et_pb_column_1_2,
            .et_pb_row_1-2_1-6_1-6_1-6 .et_pb_column:nth-last-child(-n+3),
            .et_pb_row_6col .et_pb_column:nth-last-child(-n+3) {
                margin-bottom: 0
            }

            .et_pb_row_1-2_1-2 .et_pb_column.et_pb_column_1_2 .et_pb_column.et_pb_column_1_6 {
                width: 29.666%;
                margin-right: 5.5%;
                margin-bottom: 0
            }

            .et_pb_row_1-2_1-2 .et_pb_column.et_pb_column_1_2 .et_pb_column.et_pb_column_1_6:last-child {
                margin-right: 0
            }

            .et_pb_row_1-6_1-6_1-6_1-6>.et_pb_column.et_pb_column_1_6 {
                width: 47.25%;
                margin-right: 5.5%
            }

            .et_pb_row_1-6_1-6_1-6_1-6>.et_pb_column.et_pb_column_1_6:nth-child(2n) {
                margin-right: 0
            }

            .et_pb_row_1-6_1-6_1-6_1-6:nth-last-child(-n+3) {
                margin-bottom: 0
            }
        }

        @media (max-width:479px) {

            .et_pb_row .et_pb_column.et_pb_column_1_4,
            .et_pb_row .et_pb_column.et_pb_column_1_5,
            .et_pb_row .et_pb_column.et_pb_column_1_6 {
                width: 100%;
                margin: 0 0 30px
            }

            .et_pb_row .et_pb_column.et_pb_column_1_4.et-last-child,
            .et_pb_row .et_pb_column.et_pb_column_1_4:last-child,
            .et_pb_row .et_pb_column.et_pb_column_1_5.et-last-child,
            .et_pb_row .et_pb_column.et_pb_column_1_5:last-child,
            .et_pb_row .et_pb_column.et_pb_column_1_6.et-last-child,
            .et_pb_row .et_pb_column.et_pb_column_1_6:last-child {
                margin-bottom: 0
            }

            .et_pb_row_1-2_1-2 .et_pb_column.et_pb_column_1_2 .et_pb_column.et_pb_column_1_6 {
                width: 100%;
                margin: 0 0 30px
            }

            .et_pb_row_1-2_1-2 .et_pb_column.et_pb_column_1_2 .et_pb_column.et_pb_column_1_6.et-last-child,
            .et_pb_row_1-2_1-2 .et_pb_column.et_pb_column_1_2 .et_pb_column.et_pb_column_1_6:last-child {
                margin-bottom: 0
            }

            .et_pb_column {
                width: 100% !important
            }
        }

        .et_pb_with_border .et_pb_image_wrap {
            border: 0 solid #333
        }

        .et_pb_image {
            margin-left: auto;
            margin-right: auto;
            line-height: 0
        }

        .et_pb_image.aligncenter {
            text-align: center
        }

        .et_pb_image.et_pb_has_overlay a.et_pb_lightbox_image {
            display: block;
            position: relative
        }

        .et_pb_image {
            display: block
        }

        .et_pb_image .et_pb_image_wrap {
            display: inline-block;
            position: relative;
            max-width: 100%
        }

        .et_pb_image .et_pb_image_wrap img[src*=".svg"] {
            width: auto
        }

        .et_pb_image img {
            position: relative
        }

        .et_pb_image_sticky {
            margin-bottom: 0 !important;
            display: inherit
        }

        .et_pb_image.et_pb_has_overlay .et_pb_image_wrap:hover .et_overlay {
            z-index: 3;
            opacity: 1
        }

        @media (min-width:981px) {

            .et_pb_section_sticky,
            .et_pb_section_sticky.et_pb_bottom_divider .et_pb_row:nth-last-child(2),
            .et_pb_section_sticky .et_pb_column_single,
            .et_pb_section_sticky .et_pb_row.et-last-child,
            .et_pb_section_sticky .et_pb_row:last-child,
            .et_pb_section_sticky .et_pb_specialty_column .et_pb_row_inner.et-last-child,
            .et_pb_section_sticky .et_pb_specialty_column .et_pb_row_inner:last-child {
                padding-bottom: 0 !important
            }
        }

        @media (max-width:980px) {
            .et_pb_image_sticky_tablet {
                margin-bottom: 0 !important;
                display: inherit
            }

            .et_pb_section_sticky_mobile,
            .et_pb_section_sticky_mobile.et_pb_bottom_divider .et_pb_row:nth-last-child(2),
            .et_pb_section_sticky_mobile .et_pb_column_single,
            .et_pb_section_sticky_mobile .et_pb_row.et-last-child,
            .et_pb_section_sticky_mobile .et_pb_row:last-child,
            .et_pb_section_sticky_mobile .et_pb_specialty_column .et_pb_row_inner.et-last-child,
            .et_pb_section_sticky_mobile .et_pb_specialty_column .et_pb_row_inner:last-child {
                padding-bottom: 0 !important
            }

            .et_pb_section_sticky .et_pb_row.et-last-child .et_pb_column.et_pb_row_sticky.et-last-child,
            .et_pb_section_sticky .et_pb_row:last-child .et_pb_column.et_pb_row_sticky:last-child {
                margin-bottom: 0
            }

            .et_pb_image_bottom_space_tablet {
                margin-bottom: 30px !important;
                display: block
            }

            .et_always_center_on_mobile {
                text-align: center !important;
                margin-left: auto !important;
                margin-right: auto !important
            }
        }

        @media (max-width:767px) {
            .et_pb_image_sticky_phone {
                margin-bottom: 0 !important;
                display: inherit
            }

            .et_pb_image_bottom_space_phone {
                margin-bottom: 30px !important;
                display: block
            }
        }

        .et_overlay {
            z-index: -1;
            position: absolute;
            top: 0;
            left: 0;
            display: block;
            width: 100%;
            height: 100%;
            background: hsla(0, 0%, 100%, .9);
            opacity: 0;
            pointer-events: none;
            transition: all .3s;
            border: 1px solid #e5e5e5;
            box-sizing: border-box;
            -webkit-backface-visibility: hidden;
            backface-visibility: hidden;
            -webkit-font-smoothing: antialiased
        }

        .et_overlay:before {
            color: #2ea3f2;
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            font-size: 32px;
            transition: all .4s
        }

        .et_portfolio_image,
        .et_shop_image {
            position: relative;
            display: block
        }

        .et_pb_has_overlay:not(.et_pb_image):hover .et_overlay,
        .et_portfolio_image:hover .et_overlay,
        .et_shop_image:hover .et_overlay {
            z-index: 3;
            opacity: 1
        }

        #ie7 .et_overlay,
        #ie8 .et_overlay {
            display: none
        }

        .et_pb_module.et_pb_has_overlay {
            position: relative
        }

        .et_pb_module.et_pb_has_overlay .et_overlay,
        article.et_pb_has_overlay {
            border: none
        }

        .et_pb_text {
            word-wrap: break-word
        }

        .et_pb_text ol,
        .et_pb_text ul {
            padding-bottom: 1em
        }

        .et_pb_text>:last-child {
            padding-bottom: 0
        }

        .et_pb_text_inner {
            position: relative
        }
    </style>
    <link rel='preload' id='divi-dynamic-css'
        href='https://modular.surugaseiki.com/wp-content/et-cache/199/et-divi-dynamic-199.css?ver=1654591894' as='style'
        media='all' onload="this.onload=null;this.rel='stylesheet'" />
    <link rel='stylesheet' id='divi-image-hover-styles-css'
        href='https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/plugins/dizo-image-hover/styles/style.min.css?ver=1.0.0'
        type='text/css' media='all' />
    <link rel='stylesheet' id='child-style-css'
        href='https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/themes/ChildThemeDivi/style.css?ver=1.0'
        type='text/css' media='all' />
    <link rel='stylesheet' id='divi-style-css'
        href='https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/themes/ChildThemeDivi/style.css?ver=1.0'
        type='text/css' media='all' />
    <script type='text/javascript'
        src='https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-includes/js/jquery/jquery.min.js?ver=3.6.0'
        id='jquery-core-js'></script>
    <script type='text/javascript'
        src='https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-includes/js/jquery/jquery-migrate.min.js?ver=3.3.2'
        id='jquery-migrate-js'></script>
    <script type='text/javascript'
        src='https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/plugins/wonderplugin-lightbox/engine/wonderpluginlightbox.js?ver=9.3C'
        id='wonderplugin-lightbox-script-js'></script>
    <link rel="https://api.w.org/" href="https://modular.surugaseiki.com/wp-json/" />
    <link rel="alternate" type="application/json" href="https://modular.surugaseiki.com/wp-json/wp/v2/pages/199" />
    <link rel="EditURI" type="application/rsd+xml" title="RSD" href="https://modular.surugaseiki.com/xmlrpc.php?rsd" />
    <link rel="wlwmanifest" type="application/wlwmanifest+xml"
        href="https://modular.surugaseiki.com/wp-includes/wlwmanifest.xml" />
    <link rel='shortlink' href='https://modular.surugaseiki.com/?p=199' />
    <link rel="alternate" type="application/json+oembed"
        href="https://modular.surugaseiki.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fmodular.surugaseiki.com%2Fabout%2F" />
    <link rel="alternate" type="text/xml+oembed"
        href="https://modular.surugaseiki.com/wp-json/oembed/1.0/embed?url=https%3A%2F%2Fmodular.surugaseiki.com%2Fabout%2F&#038;format=xml" />
    <style type="text/css">
        .wptime-plugin-progress-wrap {
            display: block !important;
            max-width: 100%;
            background: #eee;
            line-height: 1 !important;
            position: relative !important;
            box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.03) inset !important;
            -moz-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.03) inset !important;
            -webkit-box-shadow: 0px 0px 5px 1px rgba(0, 0, 0, 0.03) inset !important;
        }

        .wptime-plugin-progress-bar {
            width: 0%;
            display: block !important;
            background: #bbb;
            height: 30px !important;
            box-sizing: border-box !important;
            -webkit-box-sizing: border-box !important;
            -moz-box-sizing: border-box !important;
        }

        .wptime-plugin-progress-wrap span {
            position: absolute !important;
            left: 10px !important;
            top: 10px !important;
            font-size: 12px !important;
            color: #fff;
            line-height: 1 !important;
        }

        @media all and (max-width: 768px) {
            .wptime-plugin-progress-wrap {
                max-width: 100% !important;
            }
        }
    </style>
    <!-- Google Tag Manager for WordPress by gtm4wp.com -->
    <!-- GTM Container placement set to automatic -->
    <script data-cfasync="false" data-pagespeed-no-defer>
        var dataLayer_content = {
            "pagePostType": "page",
            "pagePostType2": "single-page",
            "pagePostAuthor": "Ryo Fukazawa"
        };
        dataLayer.push(dataLayer_content);
    </script>
    <script data-cfasync="false">
        (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({
                'gtm.start': new Date().getTime(),
                event: 'gtm.js'
            });
            var f = d.getElementsByTagName(s)[0],
                j = d.createElement(s),
                dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src =
                '//www.googletagmanager.com/gtm.' + 'js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
        })(window, document, 'script', 'dataLayer', 'GTM-TMG5R3R');
    </script>
    <!-- End Google Tag Manager -->
    <!-- End Google Tag Manager for WordPress by gtm4wp.com -->
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0" />
    <script src="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.js"></script>
    <!-- Makes the legal code go above the submit button-->
    <script>
        jQuery(document).ready(function () {
            jQuery('.et_contact_bottom_container').prepend(
                '<p> Information collected through this form is subject to our Privacy Policy <a href="https://modular.surugaseiki.com/terms-of-use-and-privacy-policy/" target="_blank" rel="noopener noreferrer"><span data-contrast="auto" class="TextRun SCXW222181998 BCX0" xml:lang="EN-US" lang="EN-US"><span class="NormalTextRun SCXW222181998 BCX0">Privacy Policy</span></span></a> and may be used for the purposes for which you submit it, marketing purposes, and such other purposes as set forth in the Privacy Policy. <p>'
                );
        });
    </script>
    <!-- End of legal text above submit -->
    <link rel="icon"
        href="https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/Suruga.svg"
        sizes="32x32" />
    <link rel="icon"
        href="https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/Suruga.svg"
        sizes="192x192" />
    <link rel="apple-touch-icon"
        href="https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/Suruga.svg" />
    <meta name="msapplication-TileImage"
        content="https://modular.surugaseiki.com/wp-content/uploads/2020/11/Suruga.svg" />
    <style id="et-divi-customizer-global-cached-inline-styles">
        .nav li ul {
            border-color: #172340
        }

        .et_header_style_centered .mobile_nav .select_page,
        .et_header_style_split .mobile_nav .select_page,
        .et_nav_text_color_light #top-menu>li>a,
        .et_nav_text_color_dark #top-menu>li>a,
        #top-menu a,
        .et_mobile_menu li a,
        .et_nav_text_color_light .et_mobile_menu li a,
        .et_nav_text_color_dark .et_mobile_menu li a,
        #et_search_icon:before,
        .et_search_form_container input,
        span.et_close_search_field:after,
        #et-top-navigation .et-cart-info {
            color: #172340
        }

        .et_search_form_container input::-moz-placeholder {
            color: #172340
        }

        .et_search_form_container input::-webkit-input-placeholder {
            color: #172340
        }

        .et_search_form_container input:-ms-input-placeholder {
            color: #172340
        }

        #top-menu li a {
            font-size: 16px
        }

        body.et_vertical_nav .container.et_search_form_container .et-search-form input {
            font-size: 16px !important
        }

        #top-menu li.current-menu-ancestor>a,
        #top-menu li.current-menu-item>a,
        #top-menu li.current_page_item>a {
            color: #172340
        }

        #main-footer {
            background-color: #172340
        }

        .footer-widget,
        .footer-widget li,
        .footer-widget li a,
        #footer-info {
            font-size: 16px
        }

        .footer-widget .et_pb_widget div,
        .footer-widget .et_pb_widget ul,
        .footer-widget .et_pb_widget ol,
        .footer-widget .et_pb_widget label {
            line-height: 3em
        }

        #footer-widgets .footer-widget li:before {
            top: 21px
        }

        #et-footer-nav {
            background-color: #172340
        }

        .bottom-nav,
        .bottom-nav a,
        .bottom-nav li.current-menu-item a {
            color: #ffffff
        }

        #et-footer-nav .bottom-nav li.current-menu-item a {
            color: #ffffff
        }

        .bottom-nav,
        .bottom-nav a {
            font-size: 16px
        }

        #footer-bottom {
            background-color: #172340
        }

        #footer-info,
        #footer-info a {
            color: #ffffff
        }

        #footer-bottom .et-social-icon a {
            color: #fcbf4d
        }

        @media only screen and (min-width:981px) {

            #main-footer .footer-widget h4,
            #main-footer .widget_block h1,
            #main-footer .widget_block h2,
            #main-footer .widget_block h3,
            #main-footer .widget_block h4,
            #main-footer .widget_block h5,
            #main-footer .widget_block h6 {
                font-size: 20px
            }

            .et-fixed-header #top-menu a,
            .et-fixed-header #et_search_icon:before,
            .et-fixed-header #et_top_search .et-search-form input,
            .et-fixed-header .et_search_form_container input,
            .et-fixed-header .et_close_search_field:after,
            .et-fixed-header #et-top-navigation .et-cart-info {
                color: #172340 !important
            }

            .et-fixed-header .et_search_form_container input::-moz-placeholder {
                color: #172340 !important
            }

            .et-fixed-header .et_search_form_container input::-webkit-input-placeholder {
                color: #172340 !important
            }

            .et-fixed-header .et_search_form_container input:-ms-input-placeholder {
                color: #172340 !important
            }

            .et-fixed-header #top-menu li.current-menu-ancestor>a,
            .et-fixed-header #top-menu li.current-menu-item>a,
            .et-fixed-header #top-menu li.current_page_item>a {
                color: #172340 !important
            }
        }

        @media only screen and (min-width:1350px) {
            .et_pb_row {
                padding: 27px 0
            }

            .et_pb_section {
                padding: 54px 0
            }

            .single.et_pb_pagebuilder_layout.et_full_width_page .et_post_meta_wrapper {
                padding-top: 81px
            }

            .et_pb_fullwidth_section {
                padding: 0
            }
        }

        @media only screen and (min-width:980px) {
            #main-header .menu-item-1998 a img {
                top: 8px !important;
                position: relative
            }
        }

        #main-header .et_menu_container {
            max-width: 1080px !important;
            padding-left: 0 !important;
            padding-right: 0 !important
        }

        #top-menu li.current-menu-item>a,
        #top-menu li.current_page_item>a,
        #top-menu-nav>ul>:hover {
            text-decoration: underline
        }

        @media (min-width:981px) {
            #page-container {
                padding-top: 60px !important;
            }
        }

        @media (min-width:642px) and (max-width:980px) {
            #page-container {
                padding-top: 130px !important;
            }
        }

        @media (max-width:641px) {
            #page-container {
                padding-top: 105px !important;
            }
        }

        #top-menu-nav #menu-item-1998 {
            margin-top: -5px
        }

        .custom-blurb-style .et_pb_blurb_container {
            padding: 0px 20px 20px 20px
        }

        .custom-blurb-style .et_pb_button {
            display: block;
            margin-left: auto;
            margin-right: auto;
            bottom: 10%;
            width: 68%;
            transition: 0.5s ease;
            font-size: 16px;
            color: #314B8A !important;
            background-color: white;
            border: 2px solid #314B84;
            border-color: #314B8A;
            text-align: center
        }

        .custom-blurb-style:hover a.et_pb_button {
            background-color: #314B8A;
            font-size: 16px;
            color: #ffffff !important
        }

        .et_contact_bottom_container {
            margin-top: 10% !important;
            margin-right: 30% !important
        }

        .custom-row .et_pb_row.et_pb_row_12.et_had_animation {
            margin-left: 310px !important
        }

        .custom-blurb-style .et_pb_main_blurb_image,
        .custom-blurb-style .et_pb_main_blurb_image span.et_pb_image_wrap img {
            width: 100%;
            max-width: 100%
        }

        .cta-button {
            background-color: #314B8A;
            font-size: 16px;
            margin-top: -10px;
            color: #ffffff !important;
            transition: all .3s 0s
        }

        .cta-button a {
            padding: 10px !important;
            color: white !important
        }

        .cta-button:hover {
            transform: scale(1.1);
            transition: all .2s 0s
        }

        .custom-border .et_pb_row::before {
            content: "|";
            position: absolute;
            height: 100%;
            font-size: 58px;
            left: 11%;
            top: 50%
        }

        .et-fixed-header #top-menu .cta-button a {
            color: #fff !important
        }

        #top-menu-nav .cta-button:hover {
            text-decoration: none !important
        }

        #top-menu-nav .cta-button a:hover {
            opacity: 1 !important
        }

        @media only screen and (max-width:980px) {
            .ctm_form .et_pb_contact_submit {
                margin: auto !important;
                float: none !important;
                margin-top: 20px !important
            }

            .ctm_form .et_contact_bottom_container {
                margin: auto !important;
                width: 100%;
                display: block !important
            }
        }

        .et_pb_video_play {
            display: none
        }

        .et_pb_video_play a:hover {
            opacity: 1 !important
        }

        .ctm_form .et-pb-contact-message {
            color: white;
            font-size: 2em;
            line-height: 1.2em
        }

        #blurbscroll .partstab {
            width: 100%;
            display: flex
        }

        #blurbscroll .partstab .et_pb_main_blurb_image {
            margin-bottom: 0px;
            margin-right: 10px
        }

        #blurbscroll .et_pb_blurb_content {
            display: flex;
            justify-content: flex-start;
            padding-right: 10px
        }

        #blurbscroll .partstab .et_pb_module_header {
            padding-bottom: 0
        }

        #blurbscroll .partstab .et_pb_main_blurb_image .et_pb_image_wrap {
            height: 100%
        }

        #blurbscroll .partstab .et_pb_main_blurb_image .et_pb_image_wrap .et-waypoint.et_pb_animation_off {
            height: 100%
        }

        .tab-content {
            display: none
        }

        .tab-open {
            display: block
        }

        #blurbscroll .partstab.active-tab {
            transform: translate(-50px, 0px)
        }

        #blurbscroll .partstab.active-tab .et_pb_module_header a {
            color: #FCBF4D !important
        }

        #blurbscroll ::-webkit-scrollbar {
            width: 10px
        }

        ::-webkit-scrollbar-track {
            box-shadow: inset 0 0 5px grey;
            border-radius: 10px
        }

        ::-webkit-scrollbar-thumb {
            background: #FCBF4D;
            border-radius: 10px
        }

        ::-webkit-scrollbar-thumb:hover {
            background: #b30000
        }

        #footer-info {
            float: none !important;
            text-align: center !important
        }

        .et_contact_bottom_container {
            float: none;
            text-align: center;
            display: block !important;
            width: 100%
        }

        .misumi-menu-image {
            width: 110px
        }
    </style>
</head>
<body
    class="page-template-default page page-id-199 et_bloom et_pb_button_helper_class et_fullwidth_nav et_fixed_nav et_show_nav et_primary_nav_dropdown_animation_fade et_secondary_nav_dropdown_animation_fade et_header_style_left et_pb_svg_logo et_pb_footer_columns1 et_cover_background et_pb_gutter windows et_pb_gutters3 et_pb_pagebuilder_layout et_no_sidebar et_divi_theme et-db">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
        style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;">
        <defs>
            <filter id="wp-duotone-dark-grayscale">
                <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                    values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                <feComponentTransfer color-interpolation-filters="sRGB">
                    <feFuncR type="table" tableValues="0 0.498039215686" />
                    <feFuncG type="table" tableValues="0 0.498039215686" />
                    <feFuncB type="table" tableValues="0 0.498039215686" />
                    <feFuncA type="table" tableValues="1 1" />
                </feComponentTransfer>
                <feComposite in2="SourceGraphic" operator="in" />
            </filter>
        </defs>
    </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
        style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;">
        <defs>
            <filter id="wp-duotone-grayscale">
                <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                    values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                <feComponentTransfer color-interpolation-filters="sRGB">
                    <feFuncR type="table" tableValues="0 1" />
                    <feFuncG type="table" tableValues="0 1" />
                    <feFuncB type="table" tableValues="0 1" />
                    <feFuncA type="table" tableValues="1 1" />
                </feComponentTransfer>
                <feComposite in2="SourceGraphic" operator="in" />
            </filter>
        </defs>
    </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
        style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;">
        <defs>
            <filter id="wp-duotone-purple-yellow">
                <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                    values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                <feComponentTransfer color-interpolation-filters="sRGB">
                    <feFuncR type="table" tableValues="0.549019607843 0.988235294118" />
                    <feFuncG type="table" tableValues="0 1" />
                    <feFuncB type="table" tableValues="0.717647058824 0.254901960784" />
                    <feFuncA type="table" tableValues="1 1" />
                </feComponentTransfer>
                <feComposite in2="SourceGraphic" operator="in" />
            </filter>
        </defs>
    </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
        style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;">
        <defs>
            <filter id="wp-duotone-blue-red">
                <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                    values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                <feComponentTransfer color-interpolation-filters="sRGB">
                    <feFuncR type="table" tableValues="0 1" />
                    <feFuncG type="table" tableValues="0 0.278431372549" />
                    <feFuncB type="table" tableValues="0.592156862745 0.278431372549" />
                    <feFuncA type="table" tableValues="1 1" />
                </feComponentTransfer>
                <feComposite in2="SourceGraphic" operator="in" />
            </filter>
        </defs>
    </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
        style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;">
        <defs>
            <filter id="wp-duotone-midnight">
                <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                    values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                <feComponentTransfer color-interpolation-filters="sRGB">
                    <feFuncR type="table" tableValues="0 0" />
                    <feFuncG type="table" tableValues="0 0.647058823529" />
                    <feFuncB type="table" tableValues="0 1" />
                    <feFuncA type="table" tableValues="1 1" />
                </feComponentTransfer>
                <feComposite in2="SourceGraphic" operator="in" />
            </filter>
        </defs>
    </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
        style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;">
        <defs>
            <filter id="wp-duotone-magenta-yellow">
                <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                    values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                <feComponentTransfer color-interpolation-filters="sRGB">
                    <feFuncR type="table" tableValues="0.780392156863 1" />
                    <feFuncG type="table" tableValues="0 0.949019607843" />
                    <feFuncB type="table" tableValues="0.352941176471 0.470588235294" />
                    <feFuncA type="table" tableValues="1 1" />
                </feComponentTransfer>
                <feComposite in2="SourceGraphic" operator="in" />
            </filter>
        </defs>
    </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
        style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;">
        <defs>
            <filter id="wp-duotone-purple-green">
                <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                    values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                <feComponentTransfer color-interpolation-filters="sRGB">
                    <feFuncR type="table" tableValues="0.650980392157 0.403921568627" />
                    <feFuncG type="table" tableValues="0 1" />
                    <feFuncB type="table" tableValues="0.447058823529 0.4" />
                    <feFuncA type="table" tableValues="1 1" />
                </feComponentTransfer>
                <feComposite in2="SourceGraphic" operator="in" />
            </filter>
        </defs>
    </svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 0 0" width="0" height="0" focusable="false" role="none"
        style="visibility: hidden; position: absolute; left: -9999px; overflow: hidden;">
        <defs>
            <filter id="wp-duotone-blue-orange">
                <feColorMatrix color-interpolation-filters="sRGB" type="matrix"
                    values=" .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 .299 .587 .114 0 0 " />
                <feComponentTransfer color-interpolation-filters="sRGB">
                    <feFuncR type="table" tableValues="0.0980392156863 1" />
                    <feFuncG type="table" tableValues="0 0.662745098039" />
                    <feFuncB type="table" tableValues="0.847058823529 0.419607843137" />
                    <feFuncA type="table" tableValues="1 1" />
                </feComponentTransfer>
                <feComposite in2="SourceGraphic" operator="in" />
            </filter>
        </defs>
    </svg>
    <!-- GTM Container placement set to automatic -->
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=1" height="0" width="0"
            style="display:none;visibility:hidden" aria-hidden="true"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <div id="page-container" style="margin-top:-40px">
        <div id="et-main-area">
            <div id="main-content">
                <article id="post-199" class="post-199 page type-page status-publish hentry">
                    <div class="entry-content">
                        <div class="et-l et-l--post">
                            <div class="et_builder_inner_content et_pb_gutters3">
                                <div class="et_pb_section et_pb_section_0 et_section_regular">
                                    <div class="et_pb_row et_pb_row_0">
                                        <div
                                            class="et_pb_column et_pb_column_4_4 et_pb_column_0 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div class="et_pb_module et_pb_image et_pb_image_0">
                                                <span class="et_pb_image_wrap "><img  style="width:700px"
                                                        src="/images/misumi.png"
                                                        alt="" title="Misumi and Mt Fuji_Cropped"
                                                        /></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="et_pb_row et_pb_row_1">
                                        <div   style="margin-left:-100px; margin-top:-110px"
                                            class="et_pb_column et_pb_column_3_4 et_pb_column_1 et_pb_css_mix_blend_mode_passthrough">
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_0 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner" >
                                                    <h1>About</h1>
                                                    <h1 style="margin-left:80px">Suruga</h1>
                                                </div>
                                            </div>
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_1 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <h2>a MISUMI Group company</h2>
                                                </div>
                                            </div>
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_2 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <h3><span>Providing automation solutions and value-added
                                                            service</span></h3>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="et_pb_column et_pb_column_1_4 et_pb_column_2 et_pb_css_mix_blend_mode_passthrough et-last-child et_pb_column_empty">
                                        </div>
                                    </div>
                                </div>
                                <div class="et_pb_section et_pb_section_1 et_section_regular">
                                    <div class="et_pb_row et_pb_row_2">
                                        <div
                                            class="et_pb_column et_pb_column_4_4 et_pb_column_3 et_pb_css_mix_blend_mode_passthrough et-last-child et_pb_column_empty">
                                        </div>
                                    </div>
                                    <div class="et_pb_row et_pb_row_3">
                                        <div
                                            class="et_pb_column et_pb_column_4_4 et_pb_column_4 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_3 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <h1>About Suruga</h1>
                                                </div>
                                            </div>
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_4 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <p>a MISUMI Group company</p>
                                                </div>
                                            </div>
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_5 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <h3><span>Providing automation solutions and value-added
                                                            service</span></h3>
                                                </div>
                                            </div>
                                            <div class="et_pb_module et_pb_image et_pb_image_1">
                                                <span class="et_pb_image_wrap "><img width="1024" height="717"
                                                        src="https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/Misumi-and-Mt-Fuji_Cropped-1024x717.png"
                                                        alt="" title="Misumi and Mt Fuji_Cropped"
                                                        srcset="https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/Misumi-and-Mt-Fuji_Cropped-980x687.png 980w, https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/Misumi-and-Mt-Fuji_Cropped-480x336.png 480w"
                                                        sizes="(min-width: 0px) and (max-width: 480px) 480px, (min-width: 481px) and (max-width: 980px) 980px, (min-width: 981px) 1024px, 100vw"
                                                        class="wp-image-1763" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="et_pb_section et_pb_section_2 et_pb_with_background et_section_regular">
                                    <div class="et_pb_row et_pb_row_4">
                                        <div
                                            class="et_pb_column et_pb_column_4_4 et_pb_column_5 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_6 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <p>The Suruga Mission</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="et_pb_row et_pb_row_5">
                                        <div
                                            class="et_pb_column et_pb_column_4_4 et_pb_column_6 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_7 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <h2>The endless pursuit of manufacturing innovation</h2>
                                                </div>
                                            </div>
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_8 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <p>Suruga is configured to save time throughout the product
                                                        lifecycle from design to build and ongoing maintenance. Suruga
                                                        is the most comprehensive, user-friendly engineering resource
                                                        for a variety of industries including Optical
                                                        Telecommunications, Automotive, Smartphones, Semiconductor, and
                                                        more. As an automation solution provider, Suruga offers an
                                                        unmatched, one-stop-shop to meet customer specifications, and is
                                                        committed to empowering customers to do incredible design work
                                                        incredibly fast. </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="et_pb_row et_pb_row_6">
                                        <div
                                            class="et_pb_column et_pb_column_4_4 et_pb_column_7 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div class="et_pb_module et_pb_image et_pb_image_2 et_animated et-waypoint">
                                                <span class="et_pb_image_wrap "><img width="113" height="225"
                                                        src="https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/Ellipse-762-2-e1603866962475.png"
                                                        alt="" title="Ellipse 762 (2)" class="wp-image-503" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="et_pb_section et_pb_section_3 et_pb_with_background et_section_regular">
                                    <div class="et_pb_row et_pb_row_7">
                                        <div
                                            class="et_pb_column et_pb_column_4_4 et_pb_column_8 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_9 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <h2>Advanced Modular Design, our secret to your success</h2>
                                                </div>
                                            </div>
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_10 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <h3><span>Modular systems mean</span></h3>
                                                    <h3><span>near-custom <span
                                                                style="font-size: 42px;">flexibility</span>, without the
                                                            wait</span><span>.</span></h3>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="et_pb_row et_pb_row_8">
                                        <div
                                            class="et_pb_column et_pb_column_3_5 et_pb_column_9 et_pb_css_mix_blend_mode_passthrough">
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_11 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <p>You might ask yourself; what does Advanced Modular Design really
                                                        mean?</p>
                                                    <p>It means that you can easily and quickly select your ideal
                                                        production line yourself, choosing from literally millions of
                                                        standard modules in our library. It means that your systems can
                                                        be easily designed, built, and seamlessly integrated into your
                                                        production line with full training and maintenance accounted
                                                        for. It means that lead times are dramatically reduced to a
                                                        third of the industry average, and support comes as and when you
                                                        need it &#8211; either remotely or on site.</p>
                                                    <p>In short, it means that you have the ability to create a
                                                        near-custom production line, without the complexity or the lead
                                                        times.</p>
                                                </div>
                                            </div>
                                        </div>
                                        <div
                                            class="et_pb_column et_pb_column_2_5 et_pb_column_10 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div class="et_pb_module et_pb_image et_pb_image_3 wplightbox">
                                                <a
                                                    href="https://www.youtube.com/watch?v=Y5V0kwL9ZHw&#038;feature=emb_title"><span
                                                        class="et_pb_image_wrap "><img width="338" height="222"
                                                            src="https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/Frame-96-2.svg"
                                                            alt="Suruga Innovation in Modular Designs"
                                                            title="Suruga Seiki About Video Photo"
                                                            class="wp-image-1054" /></span></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="et_pb_row et_pb_row_9">
                                        <div
                                            class="et_pb_column et_pb_column_4_4 et_pb_column_11 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div class="et_pb_module et_pb_image et_pb_image_4 et_pb_image_sticky">
                                                <span class="et_pb_image_wrap "><img width="152" height="80"
                                                        src="https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/Ellipse-760-1.svg"
                                                        alt="" title="Ellipse 760" class="wp-image-488" /></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="et_pb_section et_pb_section_4 et_pb_with_background et_section_regular">
                                    <div class="et_pb_row et_pb_row_10">
                                        <div
                                            class="et_pb_column et_pb_column_1_3 et_pb_column_12 et_pb_css_mix_blend_mode_passthrough et_pb_column_empty">
                                        </div>
                                        <div
                                            class="et_pb_column et_pb_column_1_3 et_pb_column_13 et_pb_css_mix_blend_mode_passthrough et_pb_column_empty">
                                        </div>
                                        <div
                                            class="et_pb_column et_pb_column_1_3 et_pb_column_14 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_12 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <h2>Where we operate</h2>
                                                </div>
                                            </div>
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_13 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <p>Suruga has a strong presence in Asia, with headquarters in
                                                        Shizuoka, Japan. Suruga has made large strides in establishing
                                                        its presence in North American markets. Our global presence has
                                                        accelerated the global prevalence of factory automation
                                                        products.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="et_pb_section et_pb_section_5 et_pb_with_background et_section_regular">
                                    <div class="et_pb_row et_pb_row_11">
                                        <div
                                            class="et_pb_column et_pb_column_1_3 et_pb_column_15 et_pb_css_mix_blend_mode_passthrough et_pb_column_empty">
                                        </div>
                                        <div
                                            class="et_pb_column et_pb_column_1_3 et_pb_column_16 et_pb_css_mix_blend_mode_passthrough et_pb_column_empty">
                                        </div>
                                        <div
                                            class="et_pb_column et_pb_column_1_3 et_pb_column_17 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_14 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <h2>Where we operate</h2>
                                                </div>
                                            </div>
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_15 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <p>Suruga has a strong presence in Asia, with headquarters in
                                                        Shizuoka, Japan. Suruga has made large strides in establishing
                                                        its presence in North American markets. Our global presence has
                                                        accelerated the global prevalence of factory automation
                                                        products.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="et_pb_section et_pb_section_6 et_pb_with_background et_section_regular">
                                    <div class="et_pb_row et_pb_row_12">
                                        <div
                                            class="et_pb_column et_pb_column_1_2 et_pb_column_18 et_pb_css_mix_blend_mode_passthrough et_pb_column_empty">
                                        </div>
                                        <div
                                            class="et_pb_column et_pb_column_1_2 et_pb_column_19 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_16 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <h2>Where we operate</h2>
                                                </div>
                                            </div>
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_17 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <p>Suruga has a strong presence in Asia, with headquarters in
                                                        Shizuoka, Japan. Suruga has made large strides in establishing
                                                        its presence in North American markets. Our global presence has
                                                        accelerated the global prevalence of factory automation
                                                        products.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="et_pb_section et_pb_section_7 et_section_regular">
                                    <div class="et_pb_row et_pb_row_13">
                                        <div
                                            class="et_pb_column et_pb_column_4_4 et_pb_column_20 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_18 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <h2>Suruga’s recent history</h2>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="et_pb_section et_pb_section_8 et_section_regular">
                                    <div class="et_pb_row et_pb_row_14">
                                        <div
                                            class="et_pb_column et_pb_column_4_4 et_pb_column_21 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_19 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <ul>
                                                        <li>
                                                            <p data-pm-slice="1 1 &#091;&#093;">2020: Suruga establishes
                                                                strong foothold in the American markets</p>
                                                        </li>
                                                        <li>
                                                            <p data-pm-slice="1 1 &#091;&#093;">2014: Suruga Production
                                                                Platform wins the Japan Management Association’s GOOD
                                                                Factory Awards</p>
                                                        </li>
                                                        <li>
                                                            <p data-pm-slice="1 1 &#091;&#093;">2001: ISO 14001
                                                                Registration</p>
                                                        </li>
                                                        <li>
                                                            <p data-pm-slice="1 1 &#091;&#093;">1998: ISO 9001
                                                                Registration</p>
                                                        </li>
                                                        <li>
                                                            <p data-pm-slice="1 1 &#091;&#093;">1998: Established a
                                                                local subsidiary, SURUGA USA CORP. in U.S.</p>
                                                        </li>
                                                        <li>
                                                            <p data-pm-slice="1 1 &#091;&#093;">1983: Established Laser
                                                                precision machining technology </p>
                                                        </li>
                                                        <li>
                                                            <p data-pm-slice="1 1 &#091;&#093;">1964: Founded SURUGA
                                                                SEIKI Industry</p>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="et_pb_section et_pb_section_9 custom-border et_section_regular">
                                    <div class="et_pb_row et_pb_row_15 et_pb_gutters1">
                                        <div
                                            class="et_pb_column et_pb_column_1_4 et_pb_column_22 et_pb_css_mix_blend_mode_passthrough">
                                            <div class="et_pb_module et_pb_image et_pb_image_5 et_pb_image_sticky">
                                                <span class="et_pb_image_wrap "><img width="16" height="16"
                                                        src="https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/Ellipse-796.svg"
                                                        alt="" title="Ellipse 796" class="wp-image-645" /></span>
                                            </div>
                                        </div>
                                        <div
                                            class="et_pb_column et_pb_column_3_4 et_pb_column_23 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_20 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <p>2020: Suruga establishes strong foothold in the American markets
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="et_pb_row et_pb_row_16 et_pb_gutters1">
                                        <div
                                            class="et_pb_column et_pb_column_1_4 et_pb_column_24 et_pb_css_mix_blend_mode_passthrough">
                                            <div class="et_pb_module et_pb_image et_pb_image_6 et_pb_image_sticky">
                                                <span class="et_pb_image_wrap "><img width="16" height="16"
                                                        src="https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/Ellipse-796.svg"
                                                        alt="" title="Ellipse 796" class="wp-image-645" /></span>
                                            </div>
                                        </div>
                                        <div
                                            class="et_pb_column et_pb_column_3_4 et_pb_column_25 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_21 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <p data-pm-slice="1 1 &#091;&#093;">2014: Suruga Production Platform
                                                        wins the Japan Management Association’s GOOD Factory Awards</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="et_pb_row et_pb_row_17 et_pb_gutters1">
                                        <div
                                            class="et_pb_column et_pb_column_1_4 et_pb_column_26 et_pb_css_mix_blend_mode_passthrough">
                                            <div class="et_pb_module et_pb_image et_pb_image_7 et_pb_image_sticky">
                                                <span class="et_pb_image_wrap "><img width="16" height="16"
                                                        src="https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/Ellipse-796.svg"
                                                        alt="" title="Ellipse 796" class="wp-image-645" /></span>
                                            </div>
                                        </div>
                                        <div
                                            class="et_pb_column et_pb_column_3_4 et_pb_column_27 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_22 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <p data-pm-slice="1 1 &#091;&#093;">2001: ISO 14001 Registration</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="et_pb_row et_pb_row_18 et_pb_gutters1">
                                        <div
                                            class="et_pb_column et_pb_column_1_4 et_pb_column_28 et_pb_css_mix_blend_mode_passthrough">
                                            <div class="et_pb_module et_pb_image et_pb_image_8 et_pb_image_sticky">
                                                <span class="et_pb_image_wrap "><img width="16" height="16"
                                                        src="https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/Ellipse-796.svg"
                                                        alt="" title="Ellipse 796" class="wp-image-645" /></span>
                                            </div>
                                        </div>
                                        <div
                                            class="et_pb_column et_pb_column_3_4 et_pb_column_29 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_23 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <p data-pm-slice="1 1 &#091;&#093;">1998: ISO 9001 Registration</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="et_pb_row et_pb_row_19 et_pb_gutters1">
                                        <div
                                            class="et_pb_column et_pb_column_1_4 et_pb_column_30 et_pb_css_mix_blend_mode_passthrough">
                                            <div class="et_pb_module et_pb_image et_pb_image_9 et_pb_image_sticky">
                                                <span class="et_pb_image_wrap "><img width="16" height="16"
                                                        src="https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/Ellipse-796.svg"
                                                        alt="" title="Ellipse 796" class="wp-image-645" /></span>
                                            </div>
                                        </div>
                                        <div
                                            class="et_pb_column et_pb_column_3_4 et_pb_column_31 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_24 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <p data-pm-slice="1 1 &#091;&#093;">1998: Established a local
                                                        subsidiary, SURUGA USA CORP. in U.S.</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="et_pb_row et_pb_row_20 et_pb_gutters1">
                                        <div
                                            class="et_pb_column et_pb_column_1_4 et_pb_column_32 et_pb_css_mix_blend_mode_passthrough">
                                            <div class="et_pb_module et_pb_image et_pb_image_10 et_pb_image_sticky">
                                                <span class="et_pb_image_wrap "><img width="16" height="16"
                                                        src="https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/Ellipse-796.svg"
                                                        alt="" title="Ellipse 796" class="wp-image-645" /></span>
                                            </div>
                                        </div>
                                        <div
                                            class="et_pb_column et_pb_column_3_4 et_pb_column_33 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_25 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <p data-pm-slice="1 1 &#091;&#093;">1983: Established Laser
                                                        precision machining technology</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="et_pb_row et_pb_row_21 et_pb_gutters1">
                                        <div
                                            class="et_pb_column et_pb_column_1_4 et_pb_column_34 et_pb_css_mix_blend_mode_passthrough">
                                            <div class="et_pb_module et_pb_image et_pb_image_11 et_pb_image_sticky">
                                                <span class="et_pb_image_wrap "><img width="16" height="16"
                                                        src="https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/Ellipse-796.svg"
                                                        alt="" title="Ellipse 796" class="wp-image-645" /></span>
                                            </div>
                                        </div>
                                        <div
                                            class="et_pb_column et_pb_column_3_4 et_pb_column_35 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_26 et_pb_text_align_left et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <p data-pm-slice="1 1 &#091;&#093;">1964: Founded SURUGA SEIKI
                                                        Industry</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                
                                
                                <div class="et_pb_section et_pb_section_15 et_pb_with_background et_section_regular">
                                    <div class="et_pb_row et_pb_row_27">
                                        <div
                                            class="et_pb_column et_pb_column_4_4 et_pb_column_48 et_pb_css_mix_blend_mode_passthrough et-last-child">
                                            <div
                                                class="et_pb_module et_pb_text et_pb_text_34 et_pb_text_align_center et_pb_bg_layout_light">
                                                <div class="et_pb_text_inner">
                                                    <p>Links</p>
                                                </div>
                                            </div>
                                            <div
                                                class="et_pb_button_module_wrapper et_pb_button_4_wrapper et_pb_button_alignment_center et_pb_button_alignment_tablet_center et_pb_module ">
                                                <a class="et_pb_button et_pb_button_4 et_pb_bg_layout_light"
                                                    href="https://modular.surugaseiki.com/">Home</a>
                                            </div>
                                            <div
                                                class="et_pb_button_module_wrapper et_pb_button_5_wrapper et_pb_button_alignment_center et_pb_button_alignment_tablet_center et_pb_module ">
                                                <a class="et_pb_button et_pb_button_5 et_pb_bg_layout_light"
                                                    href="https://modular.surugaseiki.com/smartphone/">Solutions</a>
                                            </div>
                                            <div
                                                class="et_pb_button_module_wrapper et_pb_button_6_wrapper et_pb_button_alignment_center et_pb_button_alignment_tablet_center et_pb_module ">
                                                <a class="et_pb_button et_pb_button_6 et_pb_bg_layout_light"
                                                    href="https://modular.surugaseiki.com/about/">About Us</a>
                                            </div>
                                            <div
                                                class="et_pb_button_module_wrapper et_pb_button_7_wrapper et_pb_button_alignment_center et_pb_button_alignment_tablet_center et_pb_module ">
                                                <a class="et_pb_button et_pb_button_7 et_pb_bg_layout_light"
                                                    href="https://modular.surugaseiki.com/contact/">Contact</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </article>


            </div>


            <footer id="main-footer">

                <div id="footer-bottom">
                    <div class="container clearfix">
                        <div id="footer-info">Copyright © Suruga Seiki Co., Ltd. All Rights Reserved - 2022 | <a
                                href="https://modular.surugaseiki.com/terms-of-use-and-privacy-policy/">Terms &amp;
                                Conditions</a>, <a
                                href="https://modular.surugaseiki.com/terms-of-use-and-privacy-policy/">Privacy
                                Policy</a>
                            <br>a MiSUMi Group Company
                        </div>
                    </div>
                </div>
            </footer>
        </div>


    </div>

    <!--
Lockers: user tracker for visibility filters
OnePress, bizpanda.com
-->
    
    <!-- / -->
    <div id="wonderpluginlightbox_options" data-skinsfoldername="skins/default/"
        data-jsfolder="https://modular.surugaseiki.com/wp-content/plugins/wonderplugin-lightbox/engine/"
        data-autoslide="false" data-showall="false" data-slideinterval="5000" data-showtimer="true"
        data-timerposition="bottom" data-timerheight="2" data-timercolor="#dc572e" data-timeropacity="1"
        data-navarrowspos="inside" data-closepos="outside" data-enteranimation="" data-exitanimation=""
        data-showplaybutton="false" data-alwaysshownavarrows="false" data-bordersize="8" data-showtitleprefix="false"
        data-responsive="true" data-fullscreenmode="false" data-fullscreentextoutside="true" data-closeonoverlay="true"
        data-videohidecontrols="false" data-mutevideo="false" data-nativehtml5controls="false" data-titlestyle="bottom"
        data-imagepercentage="75" data-enabletouchswipe="true" data-autoplay="true" data-html5player="true"
        data-overlaybgcolor="#000" data-overlayopacity="0.8" data-defaultvideovolume="1" data-bgcolor="#FFF"
        data-borderradius="0" data-thumbwidth="96" data-thumbheight="72" data-thumbtopmargin="12"
        data-thumbbottommargin="12" data-barheight="64" data-showtitle="true" data-titleprefix="%NUM / %TOTAL"
        data-titlebottomcss="color:#333; font-size:14px; font-family:Armata,sans-serif,Arial; overflow:hidden; text-align:left;"
        data-showdescription="true"
        data-descriptionbottomcss="color:#333; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;"
        data-titleinsidecss="color:#fff; font-size:16px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left;"
        data-descriptioninsidecss="color:#fff; font-size:12px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:left; margin:4px 0px 0px; padding: 0px;"
        data-titleoutsidecss="color:#fff; font-size:18px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:center; margin: 8px;"
        data-descriptionoutsidecss="color:#fff; font-size:14px; font-family:Arial,Helvetica,sans-serif; overflow:hidden; text-align:center; margin:8px; padding: 0px;"
        data-videobgcolor="#000" data-html5videoposter="" data-responsivebarheight="false" data-smallscreenheight="415"
        data-barheightonsmallheight="64" data-notkeepratioonsmallheight="false" data-showsocial="false"
        data-socialposition="position:absolute;top:100%;right:0;"
        data-socialpositionsmallscreen="position:absolute;top:100%;right:0;left:0;" data-socialdirection="horizontal"
        data-socialbuttonsize="32" data-socialbuttonfontsize="18" data-socialrotateeffect="true"
        data-showfacebook="true" data-showtwitter="true" data-showpinterest="true" data-bordertopmargin="48"
        data-shownavigation="true" data-navbgcolor="rgba(0,0,0,0.2)" data-shownavcontrol="true"
        data-hidenavdefault="false" data-hidenavigationonmobile="false" data-hidenavigationonipad="false"
        style="display:none;"></div>
    <script type="text/javascript">
        var et_animation_data = [{
            "class": "et_pb_image_2",
            "style": "zoomRight",
            "repeat": "once",
            "duration": "1000ms",
            "delay": "0ms",
            "intensity": "50%",
            "starting_opacity": "0%",
            "speed_curve": "ease-in-out"
        }, {
            "class": "et_pb_image_13",
            "style": "bounce",
            "repeat": "once",
            "duration": "1000ms",
            "delay": "0ms",
            "intensity": "50%",
            "starting_opacity": "0%",
            "speed_curve": "ease-in-out"
        }];
    </script>
    <!-- Google Tag Manager (noscript) -->
    <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-TMG5R3R" height="0" width="0"
            style="display:none;visibility:hidden"></iframe></noscript>
    <!-- End Google Tag Manager (noscript) -->
    <!-- Home Screen Tabs Functionality - show/hide items in the assembly line-->
    <script type="text/javascript">
        jQuery(document).ready(function () {
            jQuery('.partstab').each(function () {
                var section_id = jQuery(this).find("a").attr("href");
                jQuery(this).find("a").removeAttr("href");
                jQuery('.tab-initiallyselected').addClass("active-tab");
                jQuery(this).click(function () {
                    jQuery(this).siblings().removeClass("active-tab");
                    jQuery(this).addClass("active-tab");
                    jQuery('.tab-content').fadeOut(1000);
                    jQuery(section_id).fadeIn(500);
                });
            });
        });
    </script>
    <link rel='stylesheet' id='et-gf-open-sans-css'
        href='https://fonts.googleapis.com/css?family=Open+Sans%3A400%2C700&#038;ver=1.3.12' type='text/css'
        media='all' />
    <link rel='stylesheet' id='wp-block-library-css'
        href='https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-includes/css/dist/block-library/style.min.css?ver=349773c7a49fb104821f383504a1b7a1'
        type='text/css' media='none' onload="media='all'" />
    <script type='text/javascript'
        src='https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/plugins/duracelltomi-google-tag-manager/js/gtm4wp-form-move-tracker.js?ver=1.16'
        id='gtm4wp-form-move-tracker-js'></script>
    <script type='text/javascript' id='divi-custom-script-js-extra'>
        /* <![CDATA[ */
        var DIVI = {
            "item_count": "%d Item",
            "items_count": "%d Items"
        };
        var et_builder_utils_params = {
            "condition": {
                "diviTheme": true,
                "extraTheme": false
            },
            "scrollLocations": ["app", "top"],
            "builderScrollLocations": {
                "desktop": "app",
                "tablet": "app",
                "phone": "app"
            },
            "onloadScrollLocation": "app",
            "builderType": "fe"
        };
        var et_frontend_scripts = {
            "builderCssContainerPrefix": "#et-boc",
            "builderCssLayoutPrefix": "#et-boc .et-l"
        };
        var et_pb_custom = {
            "et_frontend_nonce": "dbddf82348",
            "subscription_failed": "Please, check the fields below to make sure you entered the correct information.",
            "et_ab_log_nonce": "8d1259a887",
            "fill_message": "Please, fill in the following fields:",
            "contact_error_message": "Please, fix the following errors:",
            "invalid": "Invalid email",
            "captcha": "Captcha",
            "prev": "Prev",
            "previous": "Previous",
            "next": "Next",
            "wrong_captcha": "You entered the wrong number in captcha.",
            "wrong_checkbox": "Checkbox",
            "ignore_waypoints": "no",
            "is_divi_theme_used": "1",
            "widget_search_selector": ".widget_search",
            "ab_tests": [],
            "is_ab_testing_active": "",
            "page_id": "199",
            "unique_test_id": "",
            "ab_bounce_rate": "5",
            "is_cache_plugin_active": "yes",
            "is_shortcode_tracking": "",
           
            "waypoints_options": []
        };
        var et_pb_box_shadow_elements = [];
        /* ]]> */
    </script>
    <script type='text/javascript'
        src='https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/themes/Divi/js/scripts.min.js?ver=4.17.4'
        id='divi-custom-script-js'></script>
    <script type='text/javascript'
        src='https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/plugins/dizo-image-hover/scripts/frontend-bundle.min.js?ver=1.0.0'
        id='divi-image-hover-frontend-bundle-js'></script>
    <script type='text/javascript'
        src='https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/themes/Divi/core/admin/js/common.js?ver=4.17.4'
        id='et-core-common-js'></script>
    <style id="et-builder-module-design-199-cached-inline-styles">
        @font-face {
            font-family: "SF Regular";
            font-display: swap;
            src: url("https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/et-fonts/SFProDisplay-Regular.ttf") format("truetype")
        }
    </style>
    <style id="et-builder-module-design-deferred-199-cached-inline-styles">
        @font-face {
            font-family: "SF Regular";
            font-display: swap;
            src: url("https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/et-fonts/SFProDisplay-Regular.ttf") format("truetype")
        }

        .et_pb_section_0 {
            overflow-y: hidden
        }

        .et_pb_section_0.et_pb_section,
        .et_pb_section_1.et_pb_section {
            padding-top: 0px;
            padding-bottom: 2px;
            margin-top: -21px;
            margin-bottom: -2px
        }

        .et_pb_row_0,
        body #page-container .et-db #et-boc .et-l .et_pb_row_0.et_pb_row,
        body.et_pb_pagebuilder_layout.single #page-container #et-boc .et-l .et_pb_row_0.et_pb_row,
        body.et_pb_pagebuilder_layout.single.et_full_width_page #page-container #et-boc .et-l .et_pb_row_0.et_pb_row,
        .et_pb_row_2,
        body #page-container .et-db #et-boc .et-l .et_pb_row_2.et_pb_row,
        body.et_pb_pagebuilder_layout.single #page-container #et-boc .et-l .et_pb_row_2.et_pb_row,
        body.et_pb_pagebuilder_layout.single.et_full_width_page #page-container #et-boc .et-l .et_pb_row_2.et_pb_row {
            width: 70%;
            max-width: 757px
        }

        .et_pb_image_0,
        .et_pb_image_2 {
            text-align: right;
            margin-right: 0
        }

        .et_pb_text_0 h1 {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 700;
            font-size: 7em;
            color: #172340 !important;
            letter-spacing: -0.03em;
            line-height: 95.35px
        }

        .et_pb_text_0 {
            margin-top: -55% !important
        }

        .et_pb_text_1 h2 {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 700;
            font-size: 35px;
            color: #172340 !important;
            letter-spacing: -0.02em;
            line-height: 0.1em
        }

        .et_pb_text_2 h3 {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 700;
            font-size: 2.7em;
            color: #314b8a !important;
            letter-spacing: -0.02em;
            line-height: 50px
        }

        .et_pb_text_2 {
            padding-right: 0px !important;
            padding-left: 0px !important;
            margin-right: -27px !important;
            width: 58%
        }

        .et_pb_text_3 h1 {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 700;
            font-size: 7em;
            color: #172340 !important;
            letter-spacing: -0.03em
        }

        .et_pb_text_4.et_pb_text {
            color: #000000 !important
        }

        .et_pb_text_4 {
            line-height: 0.5em;
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 600;
            font-size: 1.5em;
            line-height: 0.5em
        }

        .et_pb_text_5 h3 {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 700;
            font-size: 2.5em;
            color: #314b8a !important;
            letter-spacing: -0.02em;
            line-height: 50px
        }

        .et_pb_text_5 {
            padding-right: 0px !important;
            padding-left: 0px !important;
            margin-right: -27px !important
        }

        .et_pb_image_1 {
            margin-bottom: 60px !important;
            width: 100%;
            text-align: left;
            margin-left: 0
        }

        div.et_pb_section.et_pb_section_2 {
            background-image: url(https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/DARK-FEATURES-2.svg) !important
        }

        .et_pb_section_2.et_pb_section {
            padding-bottom: 0px;
            margin-bottom: -107px;
            background-color: #fcbf4d !important
        }

        .et_pb_text_6.et_pb_text {
            color: #172340 !important
        }

        .et_pb_text_6 {
            line-height: 30px;
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 700;
            font-size: 1.5em;
            letter-spacing: -0.01em;
            line-height: 30px
        }

        .et_pb_text_7 h2,
        .et_pb_text_18 h2 {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 700;
            font-size: 6em;
            color: #172340 !important;
            letter-spacing: -0.02em;
            line-height: 79px
        }

        .et_pb_text_8.et_pb_text {
            color: #314b8a !important
        }

        .et_pb_text_8 {
            line-height: 24px;
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-size: 1.2em;
            letter-spacing: -0.01em;
            line-height: 24px
        }

        div.et_pb_section.et_pb_section_3 {
            background-size: contain;
            background-image: url(https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/10/Value-Prop-Customize-2.svg) !important
        }

        .et_pb_section_3.et_pb_section {
            padding-bottom: 186px;
            background-color: #172340 !important
        }

        .et_pb_text_9 h2 {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 700;
            font-size: 6em;
            color: #FFFFFF !important;
            letter-spacing: -0.02em;
            line-height: 79px
        }

        .et_pb_text_10 {
            line-height: 0.8em;
            line-height: 0.8em;
            padding-right: 0px !important;
            padding-left: 0px !important;
            margin-right: -27px !important
        }

        .et_pb_text_10 h3 {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 700;
            font-size: 2.5em;
            color: #314b8a !important;
            letter-spacing: -0.02em;
            line-height: 1.2em
        }

        .et_pb_row_8.et_pb_row {
            padding-bottom: 0px !important;
            padding-bottom: 0px
        }

        .et_pb_text_11.et_pb_text,
        .et_pb_text_13.et_pb_text,
        .et_pb_text_15.et_pb_text,
        .et_pb_text_17.et_pb_text,
        .et_pb_text_29.et_pb_text,
        .et_pb_text_30.et_pb_text,
        .et_pb_text_31.et_pb_text,
        .et_pb_text_32.et_pb_text,
        .et_pb_text_33.et_pb_text,
        .et_pb_text_34.et_pb_text {
            color: #ffffff !important
        }

        .et_pb_text_11 {
            line-height: 24px;
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-size: 1.1em;
            letter-spacing: -0.01em;
            line-height: 24px
        }

        .et_pb_image_3 .et_pb_image_wrap {
            border-radius: 7px 7px 7px 7px;
            overflow: hidden;
            display: block
        }

        .et_pb_image_3:hover {
            transform: scaleX(1.05) scaleY(1.05) !important
        }

        .et_pb_image_3 {
            transition: transform 600ms ease-in-out 0ms;
            width: 100%;
            max-width: 100% !important;
            text-align: center
        }

        .et_pb_image_3:after {
            font-family: ETmodules;
            font-size: 80px;
            color: #fff;
            position: absolute;
            top: 50%;
            left: 50%;
            text-shadow: 2px 2px 10px #000000;
            margin-left: -40px;
            transition: all 1s ease;
            pointer-events: none
        }

        .et_pb_image_3:hover:after {
            color: #314B8A;
            font-size: 120px;
            margin-left: -60px;
            text-shadow: none
        }

        .et_pb_image_3 .et_pb_image_wrap,
        .et_pb_image_3 img,
        .et_pb_row_15,
        body #page-container .et-db #et-boc .et-l .et_pb_row_15.et_pb_row,
        body.et_pb_pagebuilder_layout.single #page-container #et-boc .et-l .et_pb_row_15.et_pb_row,
        body.et_pb_pagebuilder_layout.single.et_full_width_page #page-container #et-boc .et-l .et_pb_row_15.et_pb_row,
        .et_pb_row_16,
        body #page-container .et-db #et-boc .et-l .et_pb_row_16.et_pb_row,
        body.et_pb_pagebuilder_layout.single #page-container #et-boc .et-l .et_pb_row_16.et_pb_row,
        body.et_pb_pagebuilder_layout.single.et_full_width_page #page-container #et-boc .et-l .et_pb_row_16.et_pb_row,
        .et_pb_row_17,
        body #page-container .et-db #et-boc .et-l .et_pb_row_17.et_pb_row,
        body.et_pb_pagebuilder_layout.single #page-container #et-boc .et-l .et_pb_row_17.et_pb_row,
        body.et_pb_pagebuilder_layout.single.et_full_width_page #page-container #et-boc .et-l .et_pb_row_17.et_pb_row,
        .et_pb_row_18,
        body #page-container .et-db #et-boc .et-l .et_pb_row_18.et_pb_row,
        body.et_pb_pagebuilder_layout.single #page-container #et-boc .et-l .et_pb_row_18.et_pb_row,
        body.et_pb_pagebuilder_layout.single.et_full_width_page #page-container #et-boc .et-l .et_pb_row_18.et_pb_row,
        .et_pb_row_19,
        body #page-container .et-db #et-boc .et-l .et_pb_row_19.et_pb_row,
        body.et_pb_pagebuilder_layout.single #page-container #et-boc .et-l .et_pb_row_19.et_pb_row,
        body.et_pb_pagebuilder_layout.single.et_full_width_page #page-container #et-boc .et-l .et_pb_row_19.et_pb_row,
        .et_pb_row_20,
        body #page-container .et-db #et-boc .et-l .et_pb_row_20.et_pb_row,
        body.et_pb_pagebuilder_layout.single #page-container #et-boc .et-l .et_pb_row_20.et_pb_row,
        body.et_pb_pagebuilder_layout.single.et_full_width_page #page-container #et-boc .et-l .et_pb_row_20.et_pb_row,
        .et_pb_row_21,
        body #page-container .et-db #et-boc .et-l .et_pb_row_21.et_pb_row,
        body.et_pb_pagebuilder_layout.single #page-container #et-boc .et-l .et_pb_row_21.et_pb_row,
        body.et_pb_pagebuilder_layout.single.et_full_width_page #page-container #et-boc .et-l .et_pb_row_21.et_pb_row,
        .et_pb_row_26,
        body #page-container .et-db #et-boc .et-l .et_pb_row_26.et_pb_row,
        body.et_pb_pagebuilder_layout.single #page-container #et-boc .et-l .et_pb_row_26.et_pb_row,
        body.et_pb_pagebuilder_layout.single.et_full_width_page #page-container #et-boc .et-l .et_pb_row_26.et_pb_row {
            width: 100%
        }

        .et_pb_image_4 {
            margin-top: 65px !important;
            text-align: left;
            margin-left: 0
        }

        .et_pb_image_4 .et_pb_image_wrap,
        .et_pb_image_5 .et_pb_image_wrap,
        .et_pb_image_6 .et_pb_image_wrap,
        .et_pb_image_7 .et_pb_image_wrap,
        .et_pb_image_8 .et_pb_image_wrap,
        .et_pb_image_9 .et_pb_image_wrap,
        .et_pb_image_10 .et_pb_image_wrap,
        .et_pb_image_11 .et_pb_image_wrap {
            display: block
        }

        div.et_pb_section.et_pb_section_4 {
            background-image: url(https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/D2.svg) !important
        }

        .et_pb_section_4.et_pb_section {
            padding-top: 144px
        }

        .et_pb_text_12 h2 {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 700;
            font-size: 5.8em;
            color: #FFFFFF !important;
            letter-spacing: -0.02em;
            line-height: 79px
        }

        .et_pb_text_12 {
            width: 372px
        }

        .et_pb_text_13,
        .et_pb_text_15 {
            line-height: 24px;
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-size: 1.1em;
            letter-spacing: -0.01em;
            line-height: 24px;
            width: 372px
        }

        div.et_pb_section.et_pb_section_5 {
            background-position: right 0px top;
            background-image: url(https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/plz.svg) !important
        }

        .et_pb_section_5.et_pb_section,
        .et_pb_section_6.et_pb_section {
            padding-top: 46px;
            background-color: #314b8a !important
        }

        .et_pb_text_14 h2 {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 700;
            font-size: 4em;
            color: #FFFFFF !important;
            letter-spacing: -0.02em
        }

        .et_pb_text_14 {
            padding-top: 57px !important;
            width: 100%
        }

        div.et_pb_section.et_pb_section_6 {
            background-size: contain;
            background-position: right 0px top;
            background-image: url(https://3tpx5j285v9u4612g1djmjat-wpengine.netdna-ssl.com/wp-content/uploads/2020/11/D2.svg) !important
        }

        .et_pb_text_16 h2 {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 700;
            font-size: 3em;
            color: #FFFFFF !important;
            letter-spacing: -0.02em;
            line-height: 79px
        }

        .et_pb_text_16 {
            padding-top: 57px !important;
            width: 372px
        }

        .et_pb_text_17 {
            line-height: 24px;
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-size: 1.1em;
            letter-spacing: -0.01em;
            line-height: 24px;
            width: 100%
        }

        .et_pb_section_7.et_pb_section {
            padding-bottom: 1px
        }

        .et_pb_section_8.et_pb_section {
            padding-top: 0px;
            padding-bottom: 0px
        }

        .et_pb_row_14.et_pb_row {
            padding-top: 0px !important;
            padding-top: 0px
        }

        .et_pb_text_19.et_pb_text,
        .et_pb_text_20.et_pb_text,
        .et_pb_text_21.et_pb_text,
        .et_pb_text_22.et_pb_text,
        .et_pb_text_23.et_pb_text,
        .et_pb_text_24.et_pb_text,
        .et_pb_text_25.et_pb_text,
        .et_pb_text_26.et_pb_text {
            color: #596e86 !important
        }

        .et_pb_text_19 {
            line-height: 2.9em;
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 600;
            font-size: 1.4em;
            line-height: 2.9em;
            padding-right: 50px !important;
            transition: transform 300ms ease 0ms
        }

        .et_pb_text_19:hover {
            transform: scaleX(1.17) scaleY(1) translateX(65px) translateY(0px) !important
        }

        .et_pb_section_9.et_pb_section {
            padding-top: 0px;
            padding-bottom: 0px;
            margin-bottom: -37px
        }

        .et_pb_image_5,
        .et_pb_image_6,
        .et_pb_image_7,
        .et_pb_image_8,
        .et_pb_image_9,
        .et_pb_image_10,
        .et_pb_image_11 {
            transform: scaleX(1.4) scaleY(1.4);
            text-align: center
        }

        .et_pb_text_20,
        .et_pb_text_21,
        .et_pb_text_22,
        .et_pb_text_23,
        .et_pb_text_24,
        .et_pb_text_25,
        .et_pb_text_26 {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 600;
            font-size: 1.1em;
            margin-left: -13% !important;
            transition: transform 300ms ease 0ms
        }

        .et_pb_text_20:hover,
        .et_pb_text_21:hover,
        .et_pb_text_22:hover,
        .et_pb_text_23:hover,
        .et_pb_text_24:hover,
        .et_pb_text_25:hover,
        .et_pb_text_26:hover {
            transform: scaleX(1.17) scaleY(1.18) translateX(65px) translateY(0px) !important
        }

        .et_pb_section_11.et_pb_section {
            background-color: #fcbf4d !important
        }

        .et_pb_text_27 h1 {
            text-align: center
        }

        .et_pb_text_27 h2 {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 700;
            font-size: 5.7em;
            color: #172340 !important;
            letter-spacing: -0.02em
        }

        .et_pb_text_28.et_pb_text {
            color: #fcbf4d !important
        }

        .et_pb_text_28 {
            line-height: 50px;
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 700;
            font-size: 40px;
            letter-spacing: -0.02em;
            line-height: 50px
        }

        .et_pb_text_28 h3 {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 700;
            font-size: 1.2em;
            color: #314b8a !important;
            letter-spacing: -0.02em;
            line-height: 50px;
            text-align: left
        }

        .et_pb_row_23,
        body #page-container .et-db #et-boc .et-l .et_pb_row_23.et_pb_row,
        body.et_pb_pagebuilder_layout.single #page-container #et-boc .et-l .et_pb_row_23.et_pb_row,
        body.et_pb_pagebuilder_layout.single.et_full_width_page #page-container #et-boc .et-l .et_pb_row_23.et_pb_row {
            width: 61%
        }

        .et_pb_row_23 {
            position: relative
        }

        .et_pb_contact_form_0.et_pb_contact_form_container .input,
        .et_pb_contact_form_0.et_pb_contact_form_container .input::placeholder,
        .et_pb_contact_form_0.et_pb_contact_form_container .input[type=checkbox]+label,
        .et_pb_contact_form_0.et_pb_contact_form_container .input[type=radio]+label {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-size: 16px;
            letter-spacing: -0.01px;
            line-height: 24px
        }

        .et_pb_contact_form_0.et_pb_contact_form_container .input::-webkit-input-placeholder {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-size: 16px;
            letter-spacing: -0.01px;
            line-height: 24px
        }

        .et_pb_contact_form_0.et_pb_contact_form_container .input::-moz-placeholder {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-size: 16px;
            letter-spacing: -0.01px;
            line-height: 24px
        }

        .et_pb_contact_form_0.et_pb_contact_form_container .input:-ms-input-placeholder {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-size: 16px;
            letter-spacing: -0.01px;
            line-height: 24px
        }

        .et_pb_contact_form_0.et_pb_contact_form_container .input,
        .et_pb_contact_form_0.et_pb_contact_form_container .input[type="checkbox"]+label i,
        .et_pb_contact_form_0.et_pb_contact_form_container .input[type="radio"]+label i {
            border-radius: 8px 8px 8px 8px;
            overflow: hidden
        }

        body #page-container .et_pb_section .et_pb_contact_form_0.et_pb_contact_form_container.et_pb_module .et_pb_button {
            color: #ffffff !important;
            border-width: 0px !important;
            border-radius: 5px;
            font-size: 16px;
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif !important;
            font-weight: 600 !important;
            background-color: #34508a !important;
            padding-top: 18px !important;
            padding-right: 76px !important;
            padding-bottom: 18px !important;
            padding-left: 76px !important
        }

        body #page-container .et_pb_section .et_pb_contact_form_0.et_pb_contact_form_container.et_pb_module .et_pb_button:hover:after {
            margin-left: .3em;
            left: auto;
            margin-left: .3em;
            opacity: 1
        }

        body #page-container .et_pb_section .et_pb_contact_form_0.et_pb_contact_form_container.et_pb_module .et_pb_button:after {
            line-height: inherit;
            font-size: inherit !important;
            margin-left: -1em;
            left: auto;
            font-family: ETmodules !important;
            font-weight: 400 !important
        }

        .et_pb_contact_form_0 .input,
        .et_pb_contact_form_0 .input[type="checkbox"]+label i,
        .et_pb_contact_form_0 .input[type="radio"]+label i {
            background-color: #ffffff
        }

        .et_pb_contact_form_0.et_pb_contact_form_container.et_pb_contact_form_container .et_contact_bottom_container .et_pb_contact_submit.et_pb_button {}

        .et_pb_image_13 {
            margin-top: -175px !important;
            text-align: left;
            margin-left: 0
        }

        .et_pb_section_12.et_pb_section {
            padding-bottom: 0px
        }

        .et_pb_section_13.et_pb_section {
            padding-bottom: 0px;
            background-color: #172340 !important
        }

        .et_pb_text_29,
        .et_pb_text_34 {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 700;
            font-size: 20px;
            letter-spacing: -0.01em
        }

        .et_pb_button_0_wrapper .et_pb_button_0,
        .et_pb_button_0_wrapper .et_pb_button_0:hover,
        .et_pb_button_1_wrapper .et_pb_button_1,
        .et_pb_button_1_wrapper .et_pb_button_1:hover,
        .et_pb_button_2_wrapper .et_pb_button_2,
        .et_pb_button_2_wrapper .et_pb_button_2:hover,
        .et_pb_button_3_wrapper .et_pb_button_3,
        .et_pb_button_3_wrapper .et_pb_button_3:hover,
        .et_pb_button_4_wrapper .et_pb_button_4,
        .et_pb_button_4_wrapper .et_pb_button_4:hover,
        .et_pb_button_5_wrapper .et_pb_button_5,
        .et_pb_button_5_wrapper .et_pb_button_5:hover,
        .et_pb_button_6_wrapper .et_pb_button_6,
        .et_pb_button_6_wrapper .et_pb_button_6:hover,
        .et_pb_button_7_wrapper .et_pb_button_7,
        .et_pb_button_7_wrapper .et_pb_button_7:hover {
            padding-left: 0px !important
        }

        body #page-container .et_pb_section .et_pb_button_0,
        body #page-container .et_pb_section .et_pb_button_1,
        body #page-container .et_pb_section .et_pb_button_2,
        body #page-container .et_pb_section .et_pb_button_3,
        body #page-container .et_pb_section .et_pb_button_4,
        body #page-container .et_pb_section .et_pb_button_5,
        body #page-container .et_pb_section .et_pb_button_6,
        body #page-container .et_pb_section .et_pb_button_7 {
            color: #ffffff !important;
            border-width: 0px !important;
            letter-spacing: -0.01em;
            font-size: 16px;
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif !important
        }

        body #page-container .et_pb_section .et_pb_button_0,
        body #page-container .et_pb_section .et_pb_button_0:hover,
        body #page-container .et_pb_section .et_pb_button_1,
        body #page-container .et_pb_section .et_pb_button_1:hover,
        body #page-container .et_pb_section .et_pb_button_2,
        body #page-container .et_pb_section .et_pb_button_2:hover,
        body #page-container .et_pb_section .et_pb_button_3,
        body #page-container .et_pb_section .et_pb_button_3:hover,
        body #page-container .et_pb_section .et_pb_button_4,
        body #page-container .et_pb_section .et_pb_button_4:hover,
        body #page-container .et_pb_section .et_pb_button_5,
        body #page-container .et_pb_section .et_pb_button_5:hover,
        body #page-container .et_pb_section .et_pb_button_6,
        body #page-container .et_pb_section .et_pb_button_6:hover,
        body #page-container .et_pb_section .et_pb_button_7,
        body #page-container .et_pb_section .et_pb_button_7:hover {
            padding-right: 1em !important
        }

        body #page-container .et_pb_section .et_pb_button_0:before,
        body #page-container .et_pb_section .et_pb_button_0:after,
        body #page-container .et_pb_section .et_pb_button_1:before,
        body #page-container .et_pb_section .et_pb_button_1:after,
        body #page-container .et_pb_section .et_pb_button_2:before,
        body #page-container .et_pb_section .et_pb_button_2:after,
        body #page-container .et_pb_section .et_pb_button_3:before,
        body #page-container .et_pb_section .et_pb_button_3:after,
        body #page-container .et_pb_section .et_pb_button_4:before,
        body #page-container .et_pb_section .et_pb_button_4:after,
        body #page-container .et_pb_section .et_pb_button_5:before,
        body #page-container .et_pb_section .et_pb_button_5:after,
        body #page-container .et_pb_section .et_pb_button_6:before,
        body #page-container .et_pb_section .et_pb_button_6:after,
        body #page-container .et_pb_section .et_pb_button_7:before,
        body #page-container .et_pb_section .et_pb_button_7:after {
            display: none !important
        }

        .et_pb_button_0,
        .et_pb_button_0:after,
        .et_pb_button_1,
        .et_pb_button_1:after,
        .et_pb_button_2,
        .et_pb_button_2:after,
        .et_pb_button_3,
        .et_pb_button_3:after,
        .et_pb_button_4,
        .et_pb_button_4:after,
        .et_pb_button_5,
        .et_pb_button_5:after,
        .et_pb_button_6,
        .et_pb_button_6:after,
        .et_pb_button_7,
        .et_pb_button_7:after {
            transition: all 300ms ease 0ms
        }

        .et_pb_text_30 {
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-weight: 700;
            font-size: 20px;
            letter-spacing: -0.01em;
            margin-left: -40% !important
        }

        .et_pb_text_31,
        .et_pb_text_32,
        .et_pb_text_33 {
            line-height: 24px;
            font-family: 'SF Regular', Helvetica, Arial, Lucida, sans-serif;
            font-size: 16px;
            letter-spacing: -0.01em;
            line-height: 24px;
            margin-left: -40% !important
        }

        .et_pb_section_14.et_pb_section {
            padding-top: 12px;
            padding-bottom: 10px
        }

        .et_pb_section_15.et_pb_section {
            padding-top: 12px;
            padding-bottom: 10px;
            background-color: #172340 !important
        }

        .et_pb_button_4_wrapper,
        .et_pb_button_5_wrapper,
        .et_pb_button_6_wrapper,
        .et_pb_button_7_wrapper {
            margin-left: 13px !important
        }

        .et_pb_row_0.et_pb_row,
        .et_pb_row_2.et_pb_row,
        .et_pb_row_25.et_pb_row {
            padding-top: 0px !important;
            padding-bottom: 0px !important;
            margin-left: auto !important;
            margin-right: 0px !important;
            padding-top: 0px;
            padding-bottom: 0px
        }

        .et_pb_row_1.et_pb_row {
            padding-top: 0px !important;
            padding-bottom: 0px !important;
            margin-bottom: -50px !important;
            margin-left: auto !important;
            margin-right: auto !important;
            padding-top: 0px;
            padding-bottom: 0px
        }

        .et_pb_row_3.et_pb_row {
            padding-top: 0px !important;
            padding-bottom: 0px !important;
            margin-left: auto !important;
            margin-right: auto !important;
            padding-top: 0px;
            padding-bottom: 0px
        }

        .et_pb_image_1.et_pb_module,
        .et_pb_row_22.et_pb_row,
        .et_pb_text_27.et_pb_module,
        .et_pb_row_23.et_pb_row {
            margin-left: auto !important;
            margin-right: auto !important
        }

        .et_pb_row_6.et_pb_row {
            padding-bottom: 0px !important;
            margin-left: auto !important;
            margin-right: 0px !important;
            padding-bottom: 0px
        }

        .et_pb_row_9.et_pb_row {
            padding-bottom: 2px !important;
            margin-left: 0px !important;
            margin-right: auto !important;
            padding-bottom: 2px
        }

        .et_pb_row_15.et_pb_row,
        .et_pb_row_16.et_pb_row,
        .et_pb_row_17.et_pb_row,
        .et_pb_row_18.et_pb_row,
        .et_pb_row_19.et_pb_row,
        .et_pb_row_20.et_pb_row {
            padding-top: 0px !important;
            margin-left: 0px !important;
            margin-right: auto !important;
            padding-top: 0px
        }

        .et_pb_row_21.et_pb_row {
            padding-top: 0px !important;
            margin-bottom: 71px !important;
            margin-left: 0px !important;
            margin-right: auto !important;
            padding-top: 0px
        }

        .et_pb_row_24.et_pb_row {
            padding-top: 0px !important;
            padding-bottom: 4px !important;
            margin-left: 0px !important;
            margin-right: auto !important;
            padding-top: 0px;
            padding-bottom: 4px
        }

        @media only screen and (min-width:981px) {

            .et_pb_section_1,
            .et_pb_section_5,
            .et_pb_section_6,
            .et_pb_text_19,
            .et_pb_section_14,
            .et_pb_section_15 {
                display: none !important
            }

            .et_pb_text_5,
            .et_pb_text_10 {
                width: 58%
            }

            .et_pb_text_7 {
                width: 940px
            }

            .et_pb_text_8 {
                width: 62%
            }

            .et_pb_text_9,
            .et_pb_text_18,
            .et_pb_text_27 {
                width: 953px
            }
        }

        @media only screen and (max-width:980px) {

            .et_pb_image_0 .et_pb_image_wrap img,
            .et_pb_image_1 .et_pb_image_wrap img,
            .et_pb_image_2 .et_pb_image_wrap img,
            .et_pb_image_4 .et_pb_image_wrap img,
            .et_pb_image_5 .et_pb_image_wrap img,
            .et_pb_image_6 .et_pb_image_wrap img,
            .et_pb_image_7 .et_pb_image_wrap img,
            .et_pb_image_8 .et_pb_image_wrap img,
            .et_pb_image_9 .et_pb_image_wrap img,
            .et_pb_image_10 .et_pb_image_wrap img,
            .et_pb_image_11 .et_pb_image_wrap img,
            .et_pb_image_13 .et_pb_image_wrap img {
                width: auto
            }

            .et_pb_text_3 h1,
            .et_pb_text_18 h2,
            .et_pb_text_27 h2 {
                font-size: 4em
            }

            .et_pb_text_7 h2,
            .et_pb_text_9 h2 {
                font-size: 4em;
                line-height: 1.1em
            }

            .et_pb_text_7 {
                width: 83%
            }

            .et_pb_text_9 {
                width: 91%
            }

            .et_pb_text_10 {
                width: 80%
            }

            .et_pb_text_12 {
                background-image: radial-gradient(circle at center, #3b5390 70%, rgba(41, 196, 169, 0) 100%);
                background-color: initial
            }

            .et_pb_text_13 {
                background-image: radial-gradient(circle at center, #3b5390 60%, rgba(41, 196, 169, 0) 100%);
                background-color: initial
            }

            .et_pb_text_14,
            .et_pb_text_15,
            .et_pb_text_16,
            .et_pb_text_17 {
                background-image: initial;
                background-color: initial
            }

            .et_pb_text_18 {
                width: 95%
            }

            .et_pb_text_27 {
                width: 92%
            }

            .et_pb_text_28 h3 {
                font-size: 1em
            }

            body #page-container .et_pb_section .et_pb_contact_form_0.et_pb_contact_form_container.et_pb_module .et_pb_button:after {
                line-height: inherit;
                font-size: inherit !important;
                margin-left: -1em;
                left: auto;
                display: inline-block;
                opacity: 0;
                content: attr(data-icon);
                font-family: ETmodules !important;
                font-weight: 400 !important
            }

            body #page-container .et_pb_section .et_pb_contact_form_0.et_pb_contact_form_container.et_pb_module .et_pb_button:before {
                display: none
            }

            body #page-container .et_pb_section .et_pb_contact_form_0.et_pb_contact_form_container.et_pb_module .et_pb_button:hover:after {
                margin-left: .3em;
                left: auto;
                margin-left: .3em;
                opacity: 1
            }

            .et_pb_text_27.et_pb_module {
                margin-left: auto !important;
                margin-right: auto !important
            }
        }

        @media only screen and (min-width:768px) and (max-width:980px) {

            .et_pb_section_0,
            .et_pb_section_4,
            .et_pb_section_6,
            .et_pb_section_9,
            .et_pb_section_12,
            .et_pb_section_13 {
                display: none !important
            }
        }

        @media only screen and (max-width:767px) {

            .et_pb_section_0,
            .et_pb_section_4,
            .et_pb_section_5,
            .et_pb_section_9,
            .et_pb_section_10,
            .et_pb_section_11,
            .et_pb_section_12,
            .et_pb_section_13 {
                display: none !important
            }

            .et_pb_image_0 .et_pb_image_wrap img,
            .et_pb_image_1 .et_pb_image_wrap img,
            .et_pb_image_2 .et_pb_image_wrap img,
            .et_pb_image_4 .et_pb_image_wrap img,
            .et_pb_image_5 .et_pb_image_wrap img,
            .et_pb_image_6 .et_pb_image_wrap img,
            .et_pb_image_7 .et_pb_image_wrap img,
            .et_pb_image_8 .et_pb_image_wrap img,
            .et_pb_image_9 .et_pb_image_wrap img,
            .et_pb_image_10 .et_pb_image_wrap img,
            .et_pb_image_11 .et_pb_image_wrap img,
            .et_pb_image_13 .et_pb_image_wrap img {
                width: auto
            }

            .et_pb_text_3 h1 {
                font-size: 3em
            }

            .et_pb_text_5 {
                width: 80%
            }

            .et_pb_text_7 h2 {
                font-size: 3em;
                line-height: 1em
            }

            .et_pb_text_7,
            .et_pb_text_9,
            .et_pb_text_18,
            .et_pb_text_27 {
                width: 100%
            }

            .et_pb_text_8 {
                width: 90%
            }

            .et_pb_text_9 h2 {
                font-size: 3em;
                line-height: 1.1em
            }

            .et_pb_text_12 {
                background-image: radial-gradient(circle at center, #314B8A 70%, rgba(49, 75, 138, 0) 100%);
                background-color: rgba(49, 75, 138, 0.6)
            }

            .et_pb_text_13,
            .et_pb_text_15,
            .et_pb_text_17 {
                background-image: radial-gradient(circle at center, #314B8A 60%, rgba(49, 75, 138, 0.71) 100%)
            }

            .et_pb_text_14 {
                background-image: initial;
                background-color: rgba(49, 75, 138, 0.6)
            }

            .et_pb_text_16 {
                background-image: initial
            }

            .et_pb_text_18 h2 {
                font-size: 3em;
                line-height: 70px
            }

            .et_pb_section_10.et_pb_section,
            .et_pb_section_11.et_pb_section {
                padding-bottom: 0%
            }

            .et_pb_text_27 h2 {
                font-size: 3.5em
            }

            .et_pb_text_28 h3 {
                font-size: 0.7em
            }

            .et_pb_row_23 {
                z-index: 10 !important
            }

            body #page-container .et_pb_section .et_pb_contact_form_0.et_pb_contact_form_container.et_pb_module .et_pb_button:after {
                line-height: inherit;
                font-size: inherit !important;
                margin-left: -1em;
                left: auto;
                display: inline-block;
                opacity: 0;
                content: attr(data-icon);
                font-family: ETmodules !important;
                font-weight: 400 !important
            }

            body #page-container .et_pb_section .et_pb_contact_form_0.et_pb_contact_form_container.et_pb_module .et_pb_button:before {
                display: none
            }

            body #page-container .et_pb_section .et_pb_contact_form_0.et_pb_contact_form_container.et_pb_module .et_pb_button:hover:after {
                margin-left: .3em;
                left: auto;
                margin-left: .3em;
                opacity: 1
            }
        }
    </style>
</body>
`;
    return (
        <>
            <div dangerouslySetInnerHTML={{ __html: myHTML }} style={{width:"109%", marginLeft:"-9px", zIndex:"0"}} />
        </>
    )
}
export default DashBoard;