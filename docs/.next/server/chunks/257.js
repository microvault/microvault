exports.id=257,exports.ids=[257],exports.modules={5682:(e,t,n)=>{"use strict";n.a(e,async(e,i)=>{try{n.d(t,{z:()=>Button});var r=n(997),a=n(1664),s=n.n(a),l=n(6593),o=e([l]);function ArrowIcon(e){return r.jsx("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",...e,children:r.jsx("path",{stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",d:"m11.5 6.5 3 3.5m0 0-3 3.5m3-3.5h-9"})})}l=(o.then?(await o)():o)[0];let c={primary:"rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-blue-400/10 dark:text-blue-400 dark:ring-1 dark:ring-inset dark:ring-blue-400/20 dark:hover:bg-blue-400/10 dark:hover:text-blue-300 dark:hover:ring-blue-300",secondary:"rounded-full bg-zinc-100 py-1 px-3 text-zinc-900 hover:bg-zinc-200 dark:bg-zinc-800/40 dark:text-zinc-400 dark:ring-1 dark:ring-inset dark:ring-zinc-800 dark:hover:bg-zinc-800 dark:hover:text-zinc-300",filled:"rounded-full bg-zinc-900 py-1 px-3 text-white hover:bg-zinc-700 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-400",outline:"rounded-full py-1 px-3 text-zinc-700 ring-1 ring-inset ring-zinc-900/10 hover:bg-zinc-900/2.5 hover:text-zinc-900 dark:text-zinc-400 dark:ring-white/10 dark:hover:bg-white/5 dark:hover:text-white",text:"text-blue-500 hover:text-blue-600 dark:text-blue-400 dark:hover:text-blue-500"};function Button({variant:e="primary",className:t,children:n,arrow:i,...a}){let o=a.href?s():"button";t=(0,l.default)("inline-flex gap-0.5 justify-center overflow-hidden text-sm font-medium transition",c[e],t);let d=r.jsx(ArrowIcon,{className:(0,l.default)("mt-0.5 h-5 w-5","text"===e&&"relative top-px","left"===i&&"-ml-1 rotate-180","right"===i&&"-mr-1")});return(0,r.jsxs)(o,{className:t,...a,children:["left"===i&&d,n,"right"===i&&d]})}i()}catch(e){i(e)}})},361:(e,t,n)=>{"use strict";n.a(e,async(e,i)=>{try{n.d(t,{EK:()=>Code,P3:()=>CodeGroup,SU:()=>Pre});var r=n(997),a=n(6689),s=n(9211),l=n(6593),o=n(9890),c=n(3410),d=e([l,o,c]);[l,o,c]=d.then?(await d)():d;let h={js:"JavaScript",ts:"TypeScript",javascript:"JavaScript",typescript:"TypeScript",php:"PHP",python:"Python",ruby:"Ruby",go:"Go"};function getPanelTitle({title:e,language:t}){return e??h[t]??"Code"}function ClipboardIcon(e){return(0,r.jsxs)("svg",{viewBox:"0 0 20 20","aria-hidden":"true",...e,children:[r.jsx("path",{strokeWidth:"0",d:"M5.5 13.5v-5a2 2 0 0 1 2-2l.447-.894A2 2 0 0 1 9.737 4.5h.527a2 2 0 0 1 1.789 1.106l.447.894a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2Z"}),r.jsx("path",{fill:"none",strokeLinejoin:"round",d:"M12.5 6.5a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2m5 0-.447-.894a2 2 0 0 0-1.79-1.106h-.527a2 2 0 0 0-1.789 1.106L7.5 6.5m5 0-1 1h-3l-1-1"})]})}function CopyButton({code:e}){let[t,n]=(0,a.useState)(0),i=t>0;return(0,a.useEffect)(()=>{if(t>0){let e=setTimeout(()=>n(0),1e3);return()=>{clearTimeout(e)}}},[t]),(0,r.jsxs)("button",{type:"button",className:(0,l.default)("group/button absolute right-4 top-3.5 overflow-hidden rounded-full py-1 pl-2 pr-3 text-2xs font-medium opacity-0 backdrop-blur transition focus:opacity-100 group-hover:opacity-100",i?"bg-blue-400/10 ring-1 ring-inset ring-blue-400/20":"bg-white/5 hover:bg-white/7.5 dark:bg-white/2.5 dark:hover:bg-white/5"),onClick:()=>{window.navigator.clipboard.writeText(e).then(()=>{n(e=>e+1)})},children:[(0,r.jsxs)("span",{"aria-hidden":i,className:(0,l.default)("pointer-events-none flex items-center gap-0.5 text-zinc-400 transition duration-300",i&&"-translate-y-1.5 opacity-0"),children:[r.jsx(ClipboardIcon,{className:"h-5 w-5 fill-zinc-500/20 stroke-zinc-500 transition-colors group-hover/button:stroke-zinc-400"}),"Copy"]}),r.jsx("span",{"aria-hidden":!i,className:(0,l.default)("pointer-events-none absolute inset-0 flex items-center justify-center text-blue-400 transition duration-300",!i&&"translate-y-1.5 opacity-0"),children:"Copied!"})]})}function CodePanelHeader({tag:e,label:t}){return e||t?(0,r.jsxs)("div",{className:"flex h-9 items-center gap-2 border-y border-b-white/7.5 border-t-transparent bg-white/2.5 bg-zinc-900 px-4 dark:border-b-white/5 dark:bg-white/1",children:[e&&r.jsx("div",{className:"dark flex",children:r.jsx(c.V,{variant:"small",children:e})}),e&&t&&r.jsx("span",{className:"h-0.5 w-0.5 rounded-full bg-zinc-500"}),t&&r.jsx("span",{className:"font-mono text-xs text-zinc-400",children:t})]}):null}function CodePanel({tag:e,label:t,code:n,children:i}){let s=a.Children.only(i);return(0,r.jsxs)("div",{className:"group dark:bg-white/2.5",children:[r.jsx(CodePanelHeader,{tag:s.props.tag??e,label:s.props.label??t}),(0,r.jsxs)("div",{className:"relative",children:[r.jsx("pre",{className:"overflow-x-auto p-4 text-xs text-white",children:i}),r.jsx(CopyButton,{code:s.props.code??n})]})]})}function CodeGroupHeader({title:e,children:t,selectedIndex:n}){let i=a.Children.count(t)>1;return e||i?(0,r.jsxs)("div",{className:"flex min-h-[calc(theme(spacing.12)+1px)] flex-wrap items-start gap-x-4 border-b border-zinc-700 bg-zinc-800 px-4 dark:border-zinc-800 dark:bg-transparent",children:[e&&r.jsx("h3",{className:"mr-auto pt-3 text-xs font-semibold text-white",children:e}),i&&r.jsx(s.O.List,{className:"-mb-px flex gap-4 text-xs font-medium",children:a.Children.map(t,(e,t)=>r.jsx(s.O,{className:(0,l.default)("border-b py-3 transition focus:[&:not(:focus-visible)]:outline-none",t===n?"border-blue-500 text-blue-400":"border-transparent text-zinc-400 hover:text-zinc-300"),children:getPanelTitle(e.props)}))})]}):null}function CodeGroupPanels({children:e,...t}){return a.Children.count(e)>1?r.jsx(s.O.Panels,{children:a.Children.map(e,e=>r.jsx(s.O.Panel,{children:r.jsx(CodePanel,{...t,children:e})}))}):r.jsx(CodePanel,{...t,children:e})}let u=(0,o.create)(e=>({preferredLanguages:[],addPreferredLanguage:t=>e(e=>({preferredLanguages:[...e.preferredLanguages.filter(e=>e!==t),t]}))})),x=(0,a.createContext)(!1);function CodeGroup({children:e,title:t,...n}){let i=a.Children.map(e,e=>getPanelTitle(e.props)),l=function(e){let t,n,{preferredLanguages:i,addPreferredLanguage:r}=u(),[s,l]=(0,a.useState)(0),o=[...e].sort((e,t)=>i.indexOf(t)-i.indexOf(e))[0],c=e.indexOf(o),d=-1===c?s:c;d!==s&&l(d);let{positionRef:h,preventLayoutShift:x}=(t=(0,a.useRef)(),n=(0,a.useRef)(),(0,a.useEffect)(()=>()=>{window.cancelAnimationFrame(n.current)},[]),{positionRef:t,preventLayoutShift(e){let i=t.current.getBoundingClientRect().top;e(),n.current=window.requestAnimationFrame(()=>{let e=t.current.getBoundingClientRect().top;window.scrollBy(0,e-i)})}});return{as:"div",ref:h,selectedIndex:s,onChange:t=>{x(()=>r(e[t]))}}}(i),o=a.Children.count(e)>1,c=o?s.O.Group:"div",d=o?l:{},h=o?{selectedIndex:l.selectedIndex}:{};return r.jsx(x.Provider,{value:!0,children:(0,r.jsxs)(c,{...d,className:"not-prose my-6 overflow-hidden rounded-2xl bg-zinc-900 shadow-md dark:ring-1 dark:ring-white/10",children:[r.jsx(CodeGroupHeader,{title:t,...h,children:e}),r.jsx(CodeGroupPanels,{...n,children:e})]})})}function Code({children:e,...t}){return(0,a.useContext)(x)?r.jsx("code",{...t,dangerouslySetInnerHTML:{__html:e}}):r.jsx("code",{...t,children:e})}function Pre({children:e,...t}){return(0,a.useContext)(x)?e:r.jsx(CodeGroup,{...t,children:e})}i()}catch(e){i(e)}})},8417:(e,t,n)=>{"use strict";n.a(e,async(e,i)=>{try{n.d(t,{$:()=>Footer});var r=n(997),a=n(1664),s=n.n(a),l=n(1163),o=n(5682),c=n(2358),d=e([o,c]);function PageLink({label:e,page:t,previous:n=!1}){return(0,r.jsxs)(r.Fragment,{children:[r.jsx(o.z,{href:t.href,"aria-label":`${e}: ${t.title}`,variant:"secondary",arrow:n?"left":"right",children:e}),r.jsx(s(),{href:t.href,tabIndex:-1,"aria-hidden":"true",className:"text-base font-semibold text-zinc-900 transition hover:text-zinc-600 dark:text-white dark:hover:text-zinc-300",children:t.title})]})}function PageNavigation(){let e=(0,l.useRouter)(),t=c.G.flatMap(e=>e.links),n=t.findIndex(t=>t.href===e.pathname);if(-1===n)return null;let i=t[n-1],a=t[n+1];return i||a?(0,r.jsxs)("div",{className:"flex",children:[i&&r.jsx("div",{className:"flex flex-col items-start gap-3",children:r.jsx(PageLink,{label:"Previous",page:i,previous:!0})}),a&&r.jsx("div",{className:"ml-auto flex flex-col items-end gap-3",children:r.jsx(PageLink,{label:"Next",page:a})})]}):null}function TwitterIcon(e){return r.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",...e,children:r.jsx("path",{d:"M16.712 6.652c.01.146.01.29.01.436 0 4.449-3.267 9.579-9.242 9.579v-.003a8.963 8.963 0 0 1-4.98-1.509 6.379 6.379 0 0 0 4.807-1.396c-1.39-.027-2.608-.966-3.035-2.337.487.097.99.077 1.467-.059-1.514-.316-2.606-1.696-2.606-3.3v-.041c.45.26.956.404 1.475.42C3.18 7.454 2.74 5.486 3.602 3.947c1.65 2.104 4.083 3.382 6.695 3.517a3.446 3.446 0 0 1 .94-3.217 3.172 3.172 0 0 1 4.596.148 6.38 6.38 0 0 0 2.063-.817 3.357 3.357 0 0 1-1.428 1.861 6.283 6.283 0 0 0 1.865-.53 6.735 6.735 0 0 1-1.62 1.744Z"})})}function GitHubIcon(e){return r.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",...e,children:r.jsx("path",{fillRule:"evenodd",clipRule:"evenodd",d:"M10 1.667c-4.605 0-8.334 3.823-8.334 8.544 0 3.78 2.385 6.974 5.698 8.106.417.075.573-.182.573-.406 0-.203-.011-.875-.011-1.592-2.093.397-2.635-.522-2.802-1.002-.094-.246-.5-1.005-.854-1.207-.291-.16-.708-.556-.01-.567.656-.01 1.124.62 1.281.876.75 1.292 1.948.93 2.427.705.073-.555.291-.93.531-1.143-1.854-.213-3.791-.95-3.791-4.218 0-.929.322-1.698.854-2.296-.083-.214-.375-1.09.083-2.265 0 0 .698-.224 2.292.876a7.576 7.576 0 0 1 2.083-.288c.709 0 1.417.096 2.084.288 1.593-1.11 2.291-.875 2.291-.875.459 1.174.167 2.05.084 2.263.53.599.854 1.357.854 2.297 0 3.278-1.948 4.005-3.802 4.219.302.266.563.78.563 1.58 0 1.143-.011 2.061-.011 2.35 0 .224.156.491.573.405a8.365 8.365 0 0 0 4.11-3.116 8.707 8.707 0 0 0 1.567-4.99c0-4.721-3.73-8.545-8.334-8.545Z"})})}function DiscordIcon(e){return r.jsx("svg",{viewBox:"0 0 20 20","aria-hidden":"true",...e,children:r.jsx("path",{d:"M16.238 4.515a14.842 14.842 0 0 0-3.664-1.136.055.055 0 0 0-.059.027 10.35 10.35 0 0 0-.456.938 13.702 13.702 0 0 0-4.115 0 9.479 9.479 0 0 0-.464-.938.058.058 0 0 0-.058-.027c-1.266.218-2.497.6-3.664 1.136a.052.052 0 0 0-.024.02C1.4 8.023.76 11.424 1.074 14.782a.062.062 0 0 0 .024.042 14.923 14.923 0 0 0 4.494 2.272.058.058 0 0 0 .064-.02c.346-.473.654-.972.92-1.496a.057.057 0 0 0-.032-.08 9.83 9.83 0 0 1-1.404-.669.058.058 0 0 1-.029-.046.058.058 0 0 1 .023-.05c.094-.07.189-.144.279-.218a.056.056 0 0 1 .058-.008c2.946 1.345 6.135 1.345 9.046 0a.056.056 0 0 1 .059.007c.09.074.184.149.28.22a.058.058 0 0 1 .023.049.059.059 0 0 1-.028.046 9.224 9.224 0 0 1-1.405.669.058.058 0 0 0-.033.033.056.056 0 0 0 .002.047c.27.523.58 1.022.92 1.495a.056.056 0 0 0 .062.021 14.878 14.878 0 0 0 4.502-2.272.055.055 0 0 0 .016-.018.056.056 0 0 0 .008-.023c.375-3.883-.63-7.256-2.662-10.246a.046.046 0 0 0-.023-.021Zm-9.223 8.221c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.717 1.814-1.618 1.814Zm5.981 0c-.887 0-1.618-.814-1.618-1.814s.717-1.814 1.618-1.814c.908 0 1.632.821 1.618 1.814 0 1-.71 1.814-1.618 1.814Z"})})}function SocialLink({href:e,icon:t,children:n}){return(0,r.jsxs)(s(),{href:e,className:"group",children:[r.jsx("span",{className:"sr-only",children:n}),r.jsx(t,{className:"h-5 w-5 fill-zinc-700 transition group-hover:fill-zinc-900 dark:group-hover:fill-zinc-500"})]})}function SmallPrint(){return(0,r.jsxs)("div",{className:"flex flex-col items-center justify-between gap-5 border-t border-zinc-900/5 pt-8 dark:border-white/5 sm:flex-row",children:[(0,r.jsxs)("p",{className:"text-xs text-zinc-600 dark:text-zinc-400",children:["\xa9 Copyright ",new Date().getFullYear(),". All rights reserved."]}),(0,r.jsxs)("div",{className:"flex gap-4",children:[r.jsx(SocialLink,{href:"#",icon:TwitterIcon,children:"Follow us on Twitter"}),r.jsx(SocialLink,{href:"#",icon:GitHubIcon,children:"Follow us on GitHub"}),r.jsx(SocialLink,{href:"#",icon:DiscordIcon,children:"Join our Discord server"})]})]})}function Footer(){return(0,l.useRouter)(),(0,r.jsxs)("footer",{className:"mx-auto max-w-2xl space-y-10 pb-16 lg:max-w-5xl",children:[r.jsx(PageNavigation,{}),r.jsx(SmallPrint,{})]})}[o,c]=d.then?(await d)():d,i()}catch(e){i(e)}})},4760:(e,t,n)=>{"use strict";n.a(e,async(e,i)=>{try{n.d(t,{h:()=>p});var r=n(997),a=n(6689),s=n(1664),l=n.n(s),o=n(6593),c=n(6197),d=n(2245),h=n(4734),u=n(5599),x=n(5202),m=e([o,c,h]);function TopLevelNavItem({href:e,children:t}){return r.jsx("li",{children:r.jsx(l(),{href:e,className:"text-sm leading-5 transition text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",children:t})})}[o,c,h]=m.then?(await m)():m;let p=(0,a.forwardRef)(function({className:e},t){let{isOpen:n}=(0,h.fX)(),i=(0,h.Fi)(),{scrollY:a}=(0,c.useScroll)(),s=(0,c.useTransform)(a,[0,72],[.5,.9]),m=(0,c.useTransform)(a,[0,72],[.2,.8]);return(0,r.jsxs)(c.motion.div,{ref:t,className:(0,o.default)(e,"fixed inset-x-0 top-0 z-50 flex h-14 items-center justify-between gap-12 px-4 transition sm:px-6 lg:left-72 lg:z-30 lg:px-8 xl:left-80",!i&&"backdrop-blur-sm dark:backdrop-blur lg:left-72 xl:left-80",i?"bg-white dark:bg-zinc-900":"bg-white/[var(--bg-opacity-light)] dark:bg-zinc-900/[var(--bg-opacity-dark)]"),style:{"--bg-opacity-light":s,"--bg-opacity-dark":m},children:[r.jsx("div",{className:(0,o.default)("absolute inset-x-0 top-full h-px transition",(i||!n)&&"bg-zinc-900/7.5 dark:bg-white/7.5")}),r.jsx(x.o,{}),(0,r.jsxs)("div",{className:"flex items-center gap-5 lg:hidden",children:[r.jsx(h.$o,{}),r.jsx(l(),{href:"/","aria-label":"Home",children:r.jsx(d.T,{className:"h-6"})})]}),(0,r.jsxs)("div",{className:"flex items-center gap-5",children:[r.jsx("nav",{className:"hidden md:block",children:(0,r.jsxs)("ul",{role:"list",className:"flex items-center gap-8",children:[r.jsx(TopLevelNavItem,{href:"/",children:"Home"}),r.jsx(TopLevelNavItem,{href:"#",children:"Changelog"})]})}),r.jsx("div",{className:"hidden md:block md:h-5 md:w-px md:bg-zinc-900/10 md:dark:bg-white/15"}),(0,r.jsxs)("div",{className:"flex gap-4",children:[r.jsx(x._,{}),r.jsx(u.l,{})]}),r.jsx("div",{className:"hidden min-[416px]:contents"})]})]})});i()}catch(e){i(e)}})},3541:(e,t,n)=>{"use strict";n.a(e,async(e,i)=>{try{n.d(t,{X:()=>Heading});var r=n(997),a=n(6689),s=n(1664),l=n.n(s),o=n(6197),c=n(5074),d=n(3410),h=n(2251),u=e([o,c,d]);function AnchorIcon(e){return r.jsx("svg",{viewBox:"0 0 20 20",fill:"none",strokeLinecap:"round","aria-hidden":"true",...e,children:r.jsx("path",{d:"m6.5 11.5-.964-.964a3.535 3.535 0 1 1 5-5l.964.964m2 2 .964.964a3.536 3.536 0 0 1-5 5L8.5 13.5m0-5 3 3"})})}function Eyebrow({tag:e,label:t}){return e||t?(0,r.jsxs)("div",{className:"flex items-center gap-x-3",children:[e&&r.jsx(d.V,{children:e}),e&&t&&r.jsx("span",{className:"h-0.5 w-0.5 rounded-full bg-zinc-300 dark:bg-zinc-600"}),t&&r.jsx("span",{className:"font-mono text-xs text-zinc-400",children:t})]}):null}function Anchor({id:e,inView:t,children:n}){return(0,r.jsxs)(l(),{href:`#${e}`,className:"group text-inherit no-underline hover:text-inherit",children:[t&&r.jsx("div",{className:"absolute ml-[calc(-1*var(--width))] mt-1 hidden w-[var(--width)] opacity-0 transition [--width:calc(2.625rem+0.5px+50%-min(50%,calc(theme(maxWidth.lg)+theme(spacing.8))))] group-hover:opacity-100 group-focus:opacity-100 md:block lg:z-50 2xl:[--width:theme(spacing.10)]",children:r.jsx("div",{className:"group/anchor block h-5 w-5 rounded-lg bg-zinc-50 ring-1 ring-inset ring-zinc-300 transition hover:ring-zinc-500 dark:bg-zinc-800 dark:ring-zinc-700 dark:hover:bg-zinc-700 dark:hover:ring-zinc-600",children:r.jsx(AnchorIcon,{className:"h-5 w-5 stroke-zinc-500 transition dark:stroke-zinc-400 dark:group-hover/anchor:stroke-white"})})}),n]})}function Heading({level:e=2,children:t,id:n,tag:i,label:s,anchor:l=!0,...d}){let u=`h${e}`,x=(0,a.useRef)(),m=(0,c.S)(e=>e.registerHeading),p=(0,o.useInView)(x,{margin:`${(0,h.c)(-3.5)}px 0px 0px 0px`,amount:"all"});return(0,a.useEffect)(()=>{2===e&&m({id:n,ref:x,offsetRem:i||s?8:6})}),(0,r.jsxs)(r.Fragment,{children:[r.jsx(Eyebrow,{tag:i,label:s}),r.jsx(u,{ref:x,id:l?n:void 0,className:i||s?"mt-2 scroll-mt-32":"scroll-mt-24",...d,children:l?r.jsx(Anchor,{id:n,inView:p,children:t}):t})]})}[o,c,d]=u.then?(await u)():u,i()}catch(e){i(e)}})},9028:(e,t,n)=>{"use strict";n.a(e,async(e,i)=>{try{n.d(t,{A:()=>Layout});var r=n(997),a=n(1664),s=n.n(a),l=n(6197),o=n(8417),c=n(4760),d=n(2245),h=n(2358),u=n(8088),x=n(5074),m=e([l,o,c,h,u,x]);function Layout({children:e,sections:t=[]}){return r.jsx(x.s,{sections:t,children:(0,r.jsxs)("div",{className:"lg:ml-72 xl:ml-80",children:[r.jsx(l.motion.header,{layoutScroll:!0,className:"contents lg:pointer-events-none lg:fixed lg:inset-0 lg:z-40 lg:flex",children:(0,r.jsxs)("div",{className:"contents lg:pointer-events-auto lg:block lg:w-72 lg:overflow-y-auto lg:border-r lg:border-zinc-900/10 lg:px-6 lg:pb-8 lg:pt-4 lg:dark:border-white/10 xl:w-80",children:[r.jsx("div",{className:"hidden lg:flex",children:r.jsx(s(),{href:"/","aria-label":"Home",children:r.jsx(d.T,{className:"h-6"})})}),r.jsx(c.h,{}),r.jsx(h.W,{className:"hidden lg:mt-10 lg:block"})]})}),(0,r.jsxs)("div",{className:"relative px-4 pt-14 sm:px-6 lg:px-8",children:[r.jsx("main",{className:"py-16",children:r.jsx(u.M,{as:"article",children:e})}),r.jsx(o.$,{})]})]})})}[l,o,c,h,u,x]=m.then?(await m)():m,i()}catch(e){i(e)}})},2245:(e,t,n)=>{"use strict";n.d(t,{T:()=>Logo});var i=n(997);function Logo(e){return i.jsx("svg",{viewBox:"0 0 99 24","aria-hidden":"true",...e})}},4734:(e,t,n)=>{"use strict";n.a(e,async(e,i)=>{try{n.d(t,{$o:()=>MobileNavigation,Fi:()=>useIsInsideMobileNavigation,fX:()=>m});var r=n(997),a=n(6689),s=n(4080),l=n(8875),o=n(6197),c=n(9890),d=n(4760),h=n(2358),u=e([o,c,d,h]);function MenuIcon(e){return r.jsx("svg",{viewBox:"0 0 10 9",fill:"none",strokeLinecap:"round","aria-hidden":"true",...e,children:r.jsx("path",{d:"M.5 1h9M.5 8h9M.5 4.5h9"})})}function XIcon(e){return r.jsx("svg",{viewBox:"0 0 10 9",fill:"none",strokeLinecap:"round","aria-hidden":"true",...e,children:r.jsx("path",{d:"m1.5 1 7 7M8.5 1l-7 7"})})}[o,c,d,h]=u.then?(await u)():u;let x=(0,a.createContext)(!1);function useIsInsideMobileNavigation(){return(0,a.useContext)(x)}let m=(0,c.create)(e=>({isOpen:!1,open:()=>e({isOpen:!0}),close:()=>e({isOpen:!1}),toggle:()=>e(e=>({isOpen:!e.isOpen}))}));function MobileNavigation(){let e=useIsInsideMobileNavigation(),{isOpen:t,toggle:n,close:i}=m(),c=t?XIcon:MenuIcon;return(0,r.jsxs)(x.Provider,{value:!0,children:[r.jsx("button",{type:"button",className:"flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5","aria-label":"Toggle navigation",onClick:n,children:r.jsx(c,{className:"w-2.5 stroke-zinc-900 dark:stroke-white"})}),!e&&r.jsx(s.u.Root,{show:t,as:a.Fragment,children:(0,r.jsxs)(l.V,{onClose:i,className:"fixed inset-0 z-50 lg:hidden",children:[r.jsx(s.u.Child,{as:a.Fragment,enter:"duration-300 ease-out",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"duration-200 ease-in",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:r.jsx("div",{className:"fixed inset-0 top-14 bg-zinc-400/20 backdrop-blur-sm dark:bg-black/40"})}),(0,r.jsxs)(l.V.Panel,{children:[r.jsx(s.u.Child,{as:a.Fragment,enter:"duration-300 ease-out",enterFrom:"opacity-0",enterTo:"opacity-100",leave:"duration-200 ease-in",leaveFrom:"opacity-100",leaveTo:"opacity-0",children:r.jsx(d.h,{})}),r.jsx(s.u.Child,{as:a.Fragment,enter:"duration-500 ease-in-out",enterFrom:"-translate-x-full",enterTo:"translate-x-0",leave:"duration-500 ease-in-out",leaveFrom:"translate-x-0",leaveTo:"-translate-x-full",children:r.jsx(o.motion.div,{layoutScroll:!0,className:"fixed bottom-0 left-0 top-14 w-full overflow-y-auto bg-white px-4 pb-4 pt-6 shadow-lg shadow-zinc-900/10 ring-1 ring-zinc-900/7.5 dark:bg-zinc-900 dark:ring-zinc-800 min-[416px]:max-w-sm sm:px-6 sm:pb-10",children:r.jsx(h.W,{})})})]})]})})]})}i()}catch(e){i(e)}})},5599:(e,t,n)=>{"use strict";n.d(t,{l:()=>ModeToggle});var i=n(997);function SunIcon(e){return(0,i.jsxs)("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",...e,children:[i.jsx("path",{d:"M12.5 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"}),i.jsx("path",{strokeLinecap:"round",d:"M10 5.5v-1M13.182 6.818l.707-.707M14.5 10h1M13.182 13.182l.707.707M10 15.5v-1M6.11 13.889l.708-.707M4.5 10h1M6.11 6.111l.708.707"})]})}function MoonIcon(e){return i.jsx("svg",{viewBox:"0 0 20 20",fill:"none","aria-hidden":"true",...e,children:i.jsx("path",{d:"M15.224 11.724a5.5 5.5 0 0 1-6.949-6.949 5.5 5.5 0 1 0 6.949 6.949Z"})})}function ModeToggle(){return(0,i.jsxs)("button",{type:"button",className:"flex h-6 w-6 items-center justify-center rounded-md transition hover:bg-zinc-900/5 dark:hover:bg-white/5","aria-label":"Toggle dark mode",onClick:function(){document.documentElement.classList.add("[&_*]:!transition-none"),window.setTimeout(()=>{document.documentElement.classList.remove("[&_*]:!transition-none")},0);let e=window.matchMedia("(prefers-color-scheme: dark)").matches,t=document.documentElement.classList.toggle("dark");t===e?delete window.localStorage.isDarkMode:window.localStorage.isDarkMode=t},children:[i.jsx(SunIcon,{className:"h-5 w-5 stroke-zinc-900 dark:hidden"}),i.jsx(MoonIcon,{className:"hidden h-5 w-5 stroke-white dark:block"})]})}},2358:(e,t,n)=>{"use strict";n.a(e,async(e,i)=>{try{n.d(t,{G:()=>f,W:()=>Navigation});var r=n(997),a=n(6689),s=n(1664),l=n.n(s),o=n(1163),c=n(6593),d=n(6197),h=n(5682),u=n(4734),x=n(5074),m=n(3410),p=n(2251),g=e([c,d,h,u,x,m]);function useInitialValue(e,t=!0){let n=(0,a.useRef)(e).current;return t?n:e}function TopLevelNavItem({href:e,children:t}){return r.jsx("li",{className:"md:hidden",children:r.jsx(l(),{href:e,className:"block py-1 text-sm text-zinc-600 transition hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white",children:t})})}function NavLink({href:e,tag:t,active:n,isAnchorLink:i=!1,children:a}){return(0,r.jsxs)(l(),{href:e,"aria-current":n?"page":void 0,className:(0,c.default)("flex justify-between gap-2 py-1 pr-3 text-sm transition",i?"pl-7":"pl-4",n?"text-zinc-900 dark:text-white":"text-zinc-600 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"),children:[r.jsx("span",{className:"truncate",children:a}),t&&r.jsx(m.V,{variant:"small",color:"zinc",children:t})]})}function VisibleSectionHighlight({group:e,pathname:t}){let[n,i]=useInitialValue([(0,x.S)(e=>e.sections),(0,x.S)(e=>e.visibleSections)],(0,u.Fi)()),a=(0,d.useIsPresent)(),s=Math.max(0,[{id:"_top"},...n].findIndex(e=>e.id===i[0])),l=(0,p.c)(2),o=a?Math.max(1,i.length)*l:l,c=e.links.findIndex(e=>e.href===t)*l+s*l;return r.jsx(d.motion.div,{layout:!0,initial:{opacity:0},animate:{opacity:1,transition:{delay:.2}},exit:{opacity:0},className:"absolute inset-x-0 top-0 bg-zinc-800/2.5 will-change-transform dark:bg-white/2.5",style:{borderRadius:8,height:o,top:c}})}function ActivePageMarker({group:e,pathname:t}){let n=(0,p.c)(2),i=(0,p.c)(.25),a=e.links.findIndex(e=>e.href===t);return r.jsx(d.motion.div,{layout:!0,className:"absolute left-2 h-6 w-px bg-blue-500",initial:{opacity:0},animate:{opacity:1,transition:{delay:.2}},exit:{opacity:0},style:{top:i+a*n}})}function NavigationGroup({group:e,className:t}){let n=(0,u.Fi)(),[i,a]=useInitialValue([(0,o.useRouter)(),(0,x.S)(e=>e.sections)],n),s=-1!==e.links.findIndex(e=>e.href===i.pathname);return(0,r.jsxs)("li",{className:(0,c.default)("relative mt-6",t),children:[r.jsx(d.motion.h2,{layout:"position",className:"text-xs font-semibold text-zinc-900 dark:text-white",children:e.title}),(0,r.jsxs)("div",{className:"relative mt-3 pl-2",children:[r.jsx(d.AnimatePresence,{initial:!n,children:s&&r.jsx(VisibleSectionHighlight,{group:e,pathname:i.pathname})}),r.jsx(d.motion.div,{layout:!0,className:"absolute inset-y-0 left-2 w-px bg-zinc-900/10 dark:bg-white/5"}),r.jsx(d.AnimatePresence,{initial:!1,children:s&&r.jsx(ActivePageMarker,{group:e,pathname:i.pathname})}),r.jsx("ul",{role:"list",className:"border-l border-transparent",children:e.links.map(e=>(0,r.jsxs)(d.motion.li,{layout:"position",className:"relative",children:[r.jsx(NavLink,{href:e.href,active:e.href===i.pathname,children:e.title}),r.jsx(d.AnimatePresence,{mode:"popLayout",initial:!1,children:e.href===i.pathname&&a.length>0&&r.jsx(d.motion.ul,{role:"list",initial:{opacity:0},animate:{opacity:1,transition:{delay:.1}},exit:{opacity:0,transition:{duration:.15}},children:a.map(t=>r.jsx("li",{children:r.jsx(NavLink,{href:`${e.href}#${t.id}`,tag:t.tag,isAnchorLink:!0,children:t.title})},t.id))})})]},e.href))})]})]})}[c,d,h,u,x,m]=g.then?(await g)():g;let f=[{title:"Getting Started",links:[{title:"Getting Started",href:"/"}]},{title:"How-To Guides",links:[{title:"Install",href:"/quick/install"},{title:"Setup",href:"/quick/setup"},{title:"Training",href:"/quick/training"},{title:"Log",href:"/quick/log"}]},{title:"Concepts",links:[{title:"Components",href:"/concepts/components"}]},{title:"Examples",links:[{title:"Notebook",href:"/examples/notebooks"},{title:"ROS 2",href:"/examples/ros2"}]},{title:"API",links:[{title:"Algorithms",href:"/apis/algorithms"}]}];function Navigation(e){return r.jsx("nav",{...e,children:(0,r.jsxs)("ul",{role:"list",children:[r.jsx(TopLevelNavItem,{href:"/",children:"API"}),r.jsx(TopLevelNavItem,{href:"#",children:"Changelog"}),f.map((e,t)=>r.jsx(NavigationGroup,{group:e,className:0===t&&"md:mt-0"},e.title)),r.jsx("li",{className:"sticky bottom-0 z-10 mt-6 min-[416px]:hidden"})]})})}i()}catch(e){i(e)}})},8088:(e,t,n)=>{"use strict";n.a(e,async(e,i)=>{try{n.d(t,{M:()=>Prose});var r=n(997),a=n(6593),s=e([a]);function Prose({as:e="div",className:t,...n}){return r.jsx(e,{className:(0,a.default)(t,"prose dark:prose-invert"),...n})}a=(s.then?(await s)():s)[0],i()}catch(e){i(e)}})},5202:(e,t,n)=>{"use strict";n.d(t,{_:()=>MobileSearch,o:()=>Search});var i=n(997);function Search(){return i.jsx("div",{className:"hidden lg:block lg:max-w-md lg:flex-auto"})}function MobileSearch(){return i.jsx("div",{className:"contents lg:hidden"})}},5074:(e,t,n)=>{"use strict";n.a(e,async(e,i)=>{try{n.d(t,{S:()=>useSectionStore,s:()=>SectionProvider});var r=n(997),a=n(6689),s=n(9890),l=n(2251),o=e([s]);s=(o.then?(await o)():o)[0];let c=(0,a.createContext)(),d=a.useEffect;function SectionProvider({sections:e,children:t}){let n,i,[o]=(0,a.useState)(()=>(0,s.createStore)(t=>({sections:e,visibleSections:[],setVisibleSections:e=>t(t=>t.visibleSections.join()===e.join()?{}:{visibleSections:e}),registerHeading:({id:e,ref:n,offsetRem:i})=>t(t=>({sections:t.sections.map(t=>t.id===e?{...t,headingRef:n,offsetRem:i}:t)}))})));return n=(0,s.useStore)(o,e=>e.setVisibleSections),i=(0,s.useStore)(o,e=>e.sections),(0,a.useEffect)(()=>{function checkVisibleSections(){let{innerHeight:e,scrollY:t}=window,r=[];for(let n=0;n<i.length;n++){let{id:a,headingRef:s,offsetRem:o}=i[n],c=(0,l.c)(o),d=s.current.getBoundingClientRect().top+t;0===n&&d-c>t&&r.push("_top");let h=i[n+1],u=(h?.headingRef.current.getBoundingClientRect().top??1/0)+t-(0,l.c)(h?.offsetRem??0);(d>t&&d<t+e||u>t&&u<t+e||d<=t&&u>=t+e)&&r.push(a)}n(r)}let e=window.requestAnimationFrame(()=>checkVisibleSections());return window.addEventListener("scroll",checkVisibleSections,{passive:!0}),window.addEventListener("resize",checkVisibleSections),()=>{window.cancelAnimationFrame(e),window.removeEventListener("scroll",checkVisibleSections),window.removeEventListener("resize",checkVisibleSections)}},[n,i]),d(()=>{o.setState({sections:e})},[o,e]),r.jsx(c.Provider,{value:o,children:t})}function useSectionStore(e){let t=(0,a.useContext)(c);return(0,s.useStore)(t,e)}i()}catch(e){i(e)}})},3410:(e,t,n)=>{"use strict";n.a(e,async(e,i)=>{try{n.d(t,{V:()=>Tag});var r=n(997),a=n(6593),s=e([a]);a=(s.then?(await s)():s)[0];let l={medium:"rounded-lg px-1.5 ring-1 ring-inset"},o={emerald:{small:"text-emerald-500 dark:text-emerald-400",medium:"ring-emerald-300 dark:ring-emerald-400/30 bg-emerald-400/10 text-emerald-500 dark:text-emerald-400"},sky:{small:"text-sky-500",medium:"ring-sky-300 bg-sky-400/10 text-sky-500 dark:ring-sky-400/30 dark:bg-sky-400/10 dark:text-sky-400"},amber:{small:"text-amber-500",medium:"ring-amber-300 bg-amber-400/10 text-amber-500 dark:ring-amber-400/30 dark:bg-amber-400/10 dark:text-amber-400"},rose:{small:"text-red-500 dark:text-rose-500",medium:"ring-rose-200 bg-rose-50 text-red-500 dark:ring-rose-500/20 dark:bg-rose-400/10 dark:text-rose-400"},zinc:{small:"text-zinc-400 dark:text-zinc-500",medium:"ring-zinc-200 bg-zinc-50 text-zinc-500 dark:ring-zinc-500/20 dark:bg-zinc-400/10 dark:text-zinc-400"}},c={get:"emerald",post:"sky",put:"amber",delete:"rose"};function Tag({children:e,variant:t="medium",color:n=c[e.toLowerCase()]??"emerald"}){return r.jsx("span",{className:(0,a.default)("font-mono text-[0.625rem] font-semibold leading-6",l[t],o[n][t]),children:e})}i()}catch(e){i(e)}})},1105:(e,t,n)=>{"use strict";n.a(e,async(e,i)=>{try{n.r(t),n.d(t,{Button:()=>c.z,CodeGroup:()=>d.P3,Col:()=>Col,Note:()=>Note,Properties:()=>Properties,Property:()=>Property,Row:()=>Row,a:()=>u,code:()=>d.EK,h2:()=>h2,pre:()=>d.SU});var r=n(997),a=n(1664),s=n.n(a),l=n(6593),o=n(3541),c=n(5682),d=n(361),h=e([l,o,c,d]);[l,o,c,d]=h.then?(await h)():h;let u=s(),h2=function(e){return r.jsx(o.X,{level:2,...e})};function InfoIcon(e){return(0,r.jsxs)("svg",{viewBox:"0 0 16 16","aria-hidden":"true",...e,children:[r.jsx("circle",{cx:"8",cy:"8",r:"8",strokeWidth:"0"}),r.jsx("path",{fill:"none",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.5",d:"M6.75 7.75h1.5v3.5"}),r.jsx("circle",{cx:"8",cy:"4",r:".5",fill:"none"})]})}function Note({children:e}){return(0,r.jsxs)("div",{className:"my-6 flex gap-2.5 rounded-2xl border border-blue-500/20 bg-blue-50/50 p-4 leading-6 text-blue-900 dark:border-blue-500/30 dark:bg-blue-500/5 dark:text-blue-200 dark:[--tw-prose-links-hover:theme(colors.blue.300)] dark:[--tw-prose-links:theme(colors.blue)]",children:[r.jsx(InfoIcon,{className:"mt-1 h-4 w-4 flex-none fill-blue-500 stroke-white dark:fill-emerald-200/20 dark:stroke-blue-200"}),r.jsx("div",{className:"[&>:first-child]:mt-0 [&>:last-child]:mb-0",children:e})]})}function Row({children:e}){return r.jsx("div",{className:"grid grid-cols-1 items-start gap-x-16 gap-y-10 xl:max-w-none xl:grid-cols-2",children:e})}function Col({children:e,sticky:t=!1}){return r.jsx("div",{className:(0,l.default)("[&>:first-child]:mt-0 [&>:last-child]:mb-0",t&&"xl:sticky xl:top-24"),children:e})}function Properties({children:e}){return r.jsx("div",{className:"my-6",children:r.jsx("ul",{role:"list",className:"m-0 max-w-[calc(theme(maxWidth.lg)-theme(spacing.8))] list-none divide-y divide-zinc-900/5 p-0 dark:divide-white/5",children:e})})}function Property({name:e,type:t,children:n}){return r.jsx("li",{className:"m-0 px-0 py-4 first:pt-0 last:pb-0",children:(0,r.jsxs)("dl",{className:"m-0 flex flex-wrap items-center gap-x-3 gap-y-2",children:[r.jsx("dt",{className:"sr-only",children:"Name"}),r.jsx("dd",{children:r.jsx("code",{children:e})}),r.jsx("dt",{className:"sr-only",children:"Type"}),r.jsx("dd",{className:"font-mono text-xs text-zinc-400 dark:text-zinc-500",children:t}),r.jsx("dt",{className:"sr-only",children:"Description"}),r.jsx("dd",{className:"w-full flex-none [&>:first-child]:mt-0 [&>:last-child]:mb-0",children:n})]})})}i()}catch(e){i(e)}})},2251:(e,t,n)=>{"use strict";function remToPx(e){return 16*parseFloat(e)}n.d(t,{c:()=>remToPx})},2257:(e,t,n)=>{"use strict";n.a(e,async(e,i)=>{try{n.r(t),n.d(t,{default:()=>App});var r=n(997),a=n(968),s=n.n(a),l=n(1163),o=n(7834),c=n(9028),d=n(1105),h=n(4734);n(6788),n(2235);var u=e([o,c,d,h]);function onRouteChange(){h.fX.getState().close()}function App({Component:e,pageProps:t}){let n=(0,l.useRouter)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(s(),{children:["/"===n.pathname?r.jsx("title",{children:"Microvault API Reference"}):r.jsx("title",{children:`${t.title} - Microvault API Reference`}),r.jsx("meta",{name:"description",content:t.description})]}),r.jsx(o.MDXProvider,{components:d,children:r.jsx(c.A,{...t,children:r.jsx(e,{...t})})})]})}[o,c,d,h]=u.then?(await u)():u,l.Router.events.on("routeChangeStart",onRouteChange),l.Router.events.on("hashChangeStart",onRouteChange),i()}catch(e){i(e)}})},6788:()=>{}};