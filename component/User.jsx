import React from 'react';

function User() 
{
    return(
    <>
    <div className="user">
<input type="email" placeholder="userid"/> <br/>
<input type="password" placeholder="password"/> <br/>
<button>login</button>
<button>create</button>
</div>
</>
);
};
export default User;
