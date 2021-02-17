/* eslint-disable no-use-before-define */

export const regexQuotedString = /(["'`])((?:\\\1|(?:(?!\1)|\n).)*?)\1/mg
export const regexClassCheck = /^[a-z\-.]+[a-zA-Z0-9:\-/\\.]*$/
export const regexHtmlTag = /<([\w-]+)/g
export const regexClassSplitter = /[\s'"`{}]/g

export const defaultAlias: Record<string, TagNames> = {
  'router-link': 'a',
}

export const preflightTags = ['html', 'body', 'div']
export const htmlTags = [
  'html',
  'body',
  'div',
  'a',
  'abbr',
  'address',
  'area',
  'article',
  'aside',
  'audio',
  'base',
  'basefont',
  'bdo',
  'blink',
  'blockquote',
  'br',
  'button',
  'canvas',
  'caption',
  'center',
  'col',
  'colgroup',
  'command',
  'comment',
  'datalist',
  'dd',
  'del',
  'details',
  'dir',
  'dl',
  'dt',
  'embed',
  'fieldset',
  'figure',
  'b',
  'big',
  'i',
  'small',
  'tt',
  'font',
  'footer',
  'form',
  'frame',
  'frameset',
  'head',
  'header',
  'hgroup',
  'h1',
  'h2',
  'h3',
  'h4',
  'h5',
  'h6',
  'hr',
  'isindex',
  'iframe',
  'ilayer',
  'img',
  'input',
  'ins',
  'keygen',
  'keygen',
  'label',
  'layer',
  'legend',
  'li',
  'link',
  'map',
  'mark',
  'marquee',
  'menu',
  'meta',
  'meter',
  'multicol',
  'nav',
  'nobr',
  'noembed',
  'noframes',
  'noscript',
  'object',
  'ol',
  'optgroup',
  'option',
  'output',
  'p',
  'param',
  'cite',
  'code',
  'dfn',
  'em',
  'kbd',
  'samp',
  'strong',
  'var',
  'plaintext',
  'pre',
  'progress',
  'q',
  'ruby',
  'script',
  'section',
  'select',
  'spacer',
  'span',
  's',
  'strike',
  'style',
  'sub',
  'sup',
  'svg',
  'table',
  'tbody',
  'td',
  'textarea',
  'tfoot',
  'th',
  'thead',
  'time',
  'title',
  'tr',
  'u',
  'ul',
  'video',
  'wbr',
  'wbr',
  'xmp',
] as const

export type TagNames = (typeof htmlTags)[number]
