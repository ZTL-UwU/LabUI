<script>
    import { Remarkable } from 'remarkable';
    import DOMPurify from 'dompurify';
    import hljs from 'highlight.js';
    import '../styles/hljs_ayu.css';
    import '../styles/markdown.css';

    let rmd = new Remarkable({
        typographer: true,
        highlight: function (str, lang) {
            if (lang == 'text' || lang == 'plain') {
                return str;
            }

            if (lang && hljs.getLanguage(lang)) {
                try {
                    return hljs.highlight(lang, str).value;
                } catch (err) {}
            }

            try {
                return hljs.highlightAuto(str).value;
            } catch (err) {}

            return '';
        }
    });
    rmd.core.ruler.enable([
        'abbr'
    ]);
    rmd.block.ruler.enable([
        'footnote',
        'deflist'
    ]);
    rmd.inline.ruler.enable([
        'footnote_inline',
        'ins',
        'mark',
        'sub',
        'sup'
    ]);

    export let content;
    export let purify = false;

    export let renderer = (content, purify, rmd, DOMPurify) => {
        return rmd.render(purify ? DOMPurify.sanitize(content) : content);
    };

    $: rendered = renderer(content, purify, rmd, DOMPurify);
</script>

<div>
    {@html rendered}
</div>
