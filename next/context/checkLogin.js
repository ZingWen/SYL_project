export default async function checkLogin(context) {
    const res = await fetch('http://localhost:3005/api/member/auth-status', {
      credentials: 'include',
      headers: {
        Cookie: context.req.headers.cookie || '', 
      },
    });
    const data = await res.json();
  
    // 如果沒登入...
    /* if (!data.isLoggedIn) {
      return {
        redirect: {
          destination: '/login',
          permanent: false,
        },
      };
    } */
  
   // 如果登入...
    if ((context.req.url === '/member/login' || context.req.url === '/member/register') && data.isLoggedIn) {
      return {
        redirect: {
          destination: '/',
          permanent: false,
        },
      };
    }
  
    
    return {
      props: {}, // 沒登入本來就可以進去
    };
  }
  