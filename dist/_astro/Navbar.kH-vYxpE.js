import{j as e}from"./jsx-runtime.7faW4zRM.js";import{r as n}from"./index.DhYZZe0J.js";import{N as m}from"./NotaLogo.Cible7IR.js";import{m as r}from"./motion.DIEilGlj.js";import{A as x}from"./index.Df5wtLB1.js";const o=[{label:"Home",href:"/#home",ariaLabel:"Home"},{label:"Features",href:"/#features",ariaLabel:"Features"},{label:"FAQ",href:"/#FAQ",ariaLabel:"FAQ"}],f=()=>{const[l,s]=n.useState(!1);return e.jsxs("nav",{className:"w-full h-20 flex flex-col justify-center items-center fixed bg-bgDark1 lg:bg-bgDarkTransparent z-40 lg:backdrop-blur-xl","aria-label":"Main navigation",children:[e.jsxs("div",{className:"2xl:w-[1280px] xl:w-10/12 w-11/12 flex justify-between items-center relative",children:[e.jsx(r.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},exit:{opacity:0},children:e.jsx("a",{href:"/#home","aria-label":"Home",children:e.jsxs("div",{className:"flex justify-start items-center grow basis-0",children:[e.jsx("div",{className:"text-white mr-2 text-6xl",children:e.jsx(m,{})}),e.jsx("div",{className:"text-white font-['Inter'] font-bold text-xl",children:"Nota"})]})})}),e.jsx(r.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},exit:{opacity:0},children:e.jsx("div",{className:"hidden lg:flex h-full pl-12 pb-2",children:o.map(({href:t,label:a,ariaLabel:i})=>e.jsx("a",{className:"text-white lg:text-base text-2xl  leading-6 mr-4 ml-4   2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition h-full pt-2",href:t,"aria-label":i,children:a},a))})}),e.jsxs("div",{className:"lg:hidden flex flex-col  px-2 py-3 border-solid border border-gray-600 rounded-md cursor-pointer hover:bg-bgDark2",onClick:()=>s(!l),children:[e.jsx("div",{className:"w-5 h-0.5 bg-gray-500  mb-1"}),e.jsx("div",{className:"w-5 h-0.5 bg-gray-500  mb-1"}),e.jsx("div",{className:"w-5 h-0.5 bg-gray-500 "})]})]}),e.jsx(x,{children:l&&e.jsx(r.div,{initial:{opacity:0},animate:{opacity:1},transition:{duration:.3},exit:{opacity:0},children:e.jsx("div",{className:`flex flex-col mt-16 lg:hidden absolute top-4 left-0  bg-bgDark1 z-50 w-full 
        items-center gap-10 pb-10 border-y border-solid border-bgDark3 pt-10
        `,children:o.map(({label:t,href:a,ariaLabel:i})=>e.jsx("a",{className:"text-white lg:text-base text-2xl  leading-6 mr-4 ml-4   2xl:mr-6 2xl:ml-6 cursor-pointer font-normal lg:font-medium hover:scale-110 transition duration-300 h-full pt-2",href:a,onClick:()=>s(!1),"aria-label":i,children:t},a))})})})]})};export{f as Navbar};
