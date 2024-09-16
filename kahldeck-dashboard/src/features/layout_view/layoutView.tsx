
import "./layoutView.css"
import { useAppSelector } from "../../stores/hooks"
import { Layout } from "../../domain/Layout"
import LayoutGrid from "../layout_grid/LayoutGrid"



const LayoutView = () => {


  const selectedLayout: Layout = useAppSelector(state => state.layoutReduce.selectedLayout)



  return (
    <>
      <main >
        <h1>{selectedLayout?.name}</h1>
        <p>{selectedLayout?.rows} x {selectedLayout?.columns}</p>

        <div className="layout-view">
          <div className="virtual-display">
            <LayoutGrid />
          </div>
        </div>
      </main>
    </>
  )
}

export default LayoutView
