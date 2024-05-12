import React from 'react'
import Header from './component/header/Header'
import Sidebar from './component/sidebar/Sidebar'
import Feedd from './component/Feed/Feedd'
import Widget from './component/widget/Widget'



function App() {
  return (
    <div className='app_wrapper'>
       <Header/>
       <div className="app_body">
        <Sidebar/>
     <Feedd/>
     <Widget/>
       </div>
    </div>
  )
}

export default App
