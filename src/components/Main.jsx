import React from 'react'
import "./Main.css"
import Markdown from 'https://esm.sh/react-markdown@9'

function Main({activeNote ,onUpdateNote}) {

  const onEditNote=(key,value)=>{
    onUpdateNote({
      ...activeNote,
      [key]:value,
      modDate:Date.now(),
    })
  }

  if (!activeNote){
    return(
      <div className='no-note'>
        ノートが選択されていません
      </div>
    )
  }
  return (
    <div className='app-main'>
      <div className='app-main-note-adit'>
        <input id="title"type='text' placeholder='新しいノート'  onChange={(e)=>onEditNote("title",e.target.value)}/>
        <textarea id="" placeholder='ノートの内容を記入'  onChange={(e)=>onEditNote("content",e.target.value)}></textarea>
      </div>
      <div className='app-main-note-preview'>
        <h1 className='preview-title'>{activeNote.title}</h1>
        <Markdown className='markdown-preview'>{activeNote.content}</Markdown>
      </div>

    </div>
  )
}

export default Main