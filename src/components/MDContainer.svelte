<script>
    import { Remarkable } from 'remarkable';
    import DOMPurify from 'dompurify';

    let rmd = new Remarkable();

    export let content;
    export let purify = true;

    export let renderer = (content, purify, rmd, DOMPurify) => {
        return rmd.render(purify ? DOMPurify.sanitize(content) : content);
    };

    $: rendered = renderer(content, purify, rmd, DOMPurify);
</script>

<div>
    {@html rendered}
</div>