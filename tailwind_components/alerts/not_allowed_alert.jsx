import {stripIndent} from "react-codepen-prefill-embed";

const not_allowed_alert = stripIndent`
<div className="flex justify-center mt-56 bg-slate-300 w-1/2 mx-auto p-4">
  <div class="flex flex-row bg-[#ffdede] w-11/12 mr-auto mt-40 ml-auto h-11 text-[#c6473b] rounded-xl p-2 border-[#c6473b]">

  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 27" strokeWidth={1.5} stroke="currentColor"  className="flex w-1 h-1 mt-20 mb-20">
  <path strokeLinecap="round" strokeLinejoin="round" d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728A9 9 0 015.636 5.636m12.728 12.728L5.636 5.636" />
  </svg>

   <h3 class="mr-auto">This is a not allowed alert!</h3>

  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 27 27" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 mt-auto mb-auto ml-auto text-right cursor-pointer">
  <path strokeLinecap="round" class="ml-10" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
  
  </div>
</div>`;

export default not_allowed_alert;
