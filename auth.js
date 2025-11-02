// auth.js
(function(){
  const publicPages = ['/login.html','/login','/','/test-login.html'];
  const path = window.location.pathname.toLowerCase();
  if(publicPages.some(p => path.endsWith(p))) return;

  const user = sessionStorage.getItem('fc_user');
  if(!user){
    const redirect = encodeURIComponent(window.location.pathname + window.location.search);
    window.location.href = `login.html?redirect=${redirect}`;
  }
})();
