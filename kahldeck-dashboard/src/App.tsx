
import { useEffect } from 'react'
import './App.css'
import LayoutList from './features/layout_list/layoutList'
import LayoutView from './features/layout_view/layoutView'
import MainOptions from './features/main_options/mainOptions'
import { useAppDispatch } from './stores/hooks'
import { fetchLayouts } from './stores/layout_slice'
import { getAllMacros } from './stores/macro_slice'
//import { useTranslation } from 'react-i18next'

function App() {
  
  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(fetchLayouts())
    dispatch(getAllMacros())
  }, [dispatch])

  /*
  const [t, i18n] = useTranslation()
  const changeLanguage = (lng: string) => {
    
    i18n.changeLanguage(lng);
  };
  */

  // load Macros


  return (
    <div className="App">
      <div className="container">
        
      {/* <button onClick={() => changeLanguage('en')}>English</button> */}
      {/* <button onClick={() => changeLanguage('es')}>Español</button> */}
        <LayoutList id="layout-list" />
        <LayoutView  />
        <MainOptions />
      </div>
    </div>
  )
}

export default App
