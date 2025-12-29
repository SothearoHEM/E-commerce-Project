import React from 'react'

const getPages=(current,total)=>{
    let pages = [];
    if(total <= 5){
        for(let i=1;i<=total;i++){
            pages.push(i);
        }
    } else{
        if(current <=3){
            pages.push(1,2,3,'...',total);
        } else if(current >= total -2){
            pages.push(1,'...',total -2, total -1, total);
        } else{
            pages.push(1,'...', current -1, current, current +1,'...', total);
        }
    }
    return pages;
}

const Pagination = ({page,pageHandler,dynamicPage}) => {
    return (
        <div className='flex items-center justify-center gap-4 mt-10'>
            <button onClick={()=>pageHandler(page-1)} disabled={page===1} className={`px-1 py-1 rounded cursor-pointer ${page===1 ? 'bg-blue-400 text-gray-200' : 'bg-blue-500 text-white'}`}>Previous</button>
            {getPages(page,dynamicPage).map((pg,index)=>{
                return(
                    <button key={index} onClick={()=>pageHandler(pg)} className={`px-3 py-1 rounded cursor-pointer font-semibold ${page===pg ? ' text-blue-700 border border-blue-400' : ' text-blue-400'}`}>{pg}</button>
                )
            })}
            <button onClick={()=>pageHandler(page+1)} disabled={page===dynamicPage} className={`px-1 py-1 rounded cursor-pointer ${page===dynamicPage ? 'bg-blue-400 text-gray-200' : 'bg-blue-500 text-white'}`}>Next</button>
        </div>
    )
}

export default Pagination