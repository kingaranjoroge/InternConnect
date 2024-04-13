import React from 'react';

const MainNavbar = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const org = JSON.parse(localStorage.getItem('org'));

  return (
    <nav className="flex flex-row items-center justify-between bg-blue-800 p-2 h-[12.5vh]">
        <h1 className="font-bold text-2xl text-slate-200 pl-4">InternConnect</h1>
        <div className="flex flex-row gap-4 pr-8">
            {user && user.role === 'admin' && (
              <p className="font-bold text-slate-200 text-base hover:text-slate-300"><a href="/admin">Admin</a></p>
            )}
            {org && org.role === 'org' && (
              <p className="font-bold text-slate-200 text-base hover:text-slate-300"><a href="/org-admin">OrgAdmin</a></p>
            )}
            <p className="font-bold text-slate-200 text-base hover:text-slate-300"><a href="/attachments">Attachments</a></p>
            {user || org ? (
              <p className="font-bold text-slate-200 text-base hover:text-slate-300"><a href="/sign-out">Sign-out</a></p>
            ) : (
              <p className="font-bold text-slate-200 text-base hover:text-slate-300"><a href="/sign-in">Sign-in</a></p>
            )}
        </div>
    </nav>
  )
}

export default MainNavbar;