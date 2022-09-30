import { Remarkable } from 'remarkable';
import hljs from 'highlight.js';
import '../styles/hljs_ayu.css';
import '../styles/markdown.css';

const rmd = new Remarkable({
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
        return str;
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
export default rmd;