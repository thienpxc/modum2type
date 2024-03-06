import React from 'react'

export default function PremissionDenied({url}:{
    url: string|null
}) {
    if (url){
        window.location.href = url
    }
  return (
    <>{
        url == null && (

            <div>PremissionDenied</div>
        )
    }
    </>
  );
}

