<script>
    import DOMPurify from 'dompurify';
    import rmd from '../scripts/markdown';

    export let content;
    export let purify = false;

    function renderer(content, purify, rmd, DOMPurify) {
        return rmd.render(purify ? DOMPurify.sanitize(content) : content);
    };

    $: rendered = renderer(content, purify, rmd, DOMPurify);
</script>

<div class="lb__md-container">
    {@html rendered}
</div>
