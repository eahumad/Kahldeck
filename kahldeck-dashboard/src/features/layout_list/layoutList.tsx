import { t } from "i18next"
import { Button } from "antd"
import "./layoutList.css"
import Search from "antd/es/input/Search"


import { useAppDispatch, useAppSelector } from "../../stores/hooks";
import { Layout } from '../../domain/Layout';
import {  createNewLayout, filterLayouts,  setLayouts } from './layoutListSlice';
import { useEffect } from "react";
import { addLayout, fetchLayouts, selectLayoutToSelect, viewThisLayout } from "../../stores/layout_slice";
import LayoutToSelect from "../../enums/LayoutToSelect";

const LayoutList = (props: { id: string }) => {
  const { id } = props
  const layouts: Layout[] = useAppSelector(state => state.layoutReduce.layouts)
  const selectedLayout: Layout = useAppSelector(state => state.layoutReduce.selectedLayout)
  const filteredLayouts: Layout[] = useAppSelector(state => state.layoutReduce.layouts)
  
  const dispatch = useAppDispatch()

  useEffect(() => {
    loadLayouts()
  }, [dispatch]);


  const onSearch = (value: string) => {
    dispatch(filterLayouts(value))
  }

  
  const loadLayouts = async () => {
    await dispatch(fetchLayouts());  // Despachar la acción para cargar los layouts
    await dispatch(setLayouts(layouts));  // asignar layouts filtrados
    await dispatch(selectLayoutToSelect(LayoutToSelect.First))

    
  }
  

  const onCreateLayout = () => {
    const newLayout = createNewLayout()
    
    dispatch(addLayout(newLayout)).then(async () => {
      await loadLayouts()
      dispatch(selectLayoutToSelect(LayoutToSelect.Last))
    })
    
  }

  const onSelectLayout = (layout: Layout) => {
    dispatch(viewThisLayout(layout))
  }


  return (
    <>
      <aside  id={id}>
        <div className="search-bar">
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            enterButton
          />
        </div>
        <div className="layout-list" >
          {filteredLayouts.map(layout => {

            if (selectedLayout?.uuid === layout.uuid) {
              return (
                <Button
                  type="primary"
                  key={layout.uuid}
                  onClick={() => onSelectLayout(layout)}
                >
                  {layout.name}
                </Button>
              )
            } else {
              return (
                <Button
                  key={layout.uuid}
                  type="default"
                  onClick={() => onSelectLayout(layout)}
                >
                  {layout.name}
                </Button>
              )
            }

          })}
        </div>
        <div className="create-layout">
          <Button type="primary" size="large" onClick={onCreateLayout}>
            {t("layout_list.create_layout")}
          </Button>
        </div>
      </aside>
    </>
  )
}

export default LayoutList
