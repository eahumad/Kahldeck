import { useEffect, useRef, useState } from "react";
import { Layout } from "../../domain/Layout";
import { useAppSelector } from "../../stores/hooks";
import KahlButton from "../kahl_button/kahlButton";

const LayoutGrid = () => {
    const selectedLayout: Layout = useAppSelector(state => state.layoutReduce.selectedLayout)
    const ref = useRef<HTMLDivElement>(null);
    const [width, setWidth] = useState<number>(0);
    const [height, setHeight] = useState<number>(0);

    useEffect(() => {
        if (!ref.current) return;

        const resizeObserver = new ResizeObserver(entries => {
            for (const entry of entries) {
                if (entry.contentBoxSize) {
                    const contentBoxSize = Array.isArray(entry.contentBoxSize)
                        ? entry.contentBoxSize[0]
                        : entry.contentBoxSize;
                    setWidth(contentBoxSize.inlineSize);
                    setHeight(contentBoxSize.blockSize);
                } else {
                    setWidth(entry.contentRect.width);
                    setHeight(entry.contentRect.height);
                }
            }
        });

        resizeObserver.observe(ref.current);

        return () => {
            if (ref.current) {
                resizeObserver.unobserve(ref.current);
            }
        };
    }, []);


    const getCellWidth = () => {
        const cellWidth = Math.floor(width / selectedLayout?.columns) - 12;
        return cellWidth;
    }

    const getCellHeight = () => {
        const cellHeight = Math.floor(height / selectedLayout?.rows) - 12;
        return cellHeight;
    }

    const stylesCell = () => {
        const cellWidth = getCellWidth();
        const cellHeight = getCellHeight();
        return {
            width: cellWidth,
            height: cellHeight,
        }
    }


    return (
        <div className="layout-grid" ref={ref}>
            {selectedLayout?.buttons.map(button => {
                const myButton = button
                return (<div className="cell" key={button.uuid} style={stylesCell()} ><KahlButton button={myButton} isBackOffice={true} /></div>)
            })}

        </div>
    )
}

export default LayoutGrid