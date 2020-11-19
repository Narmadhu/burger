import React from 'react'
import Auxiliary from "../../hoc/Auxilary"
import "./Layouts.css"

const Layouts = (props) =>  (
    <Auxiliary>
        <div>toolbar, sidebar, backdrop</div>
        <main className="content">{props.children}</main>
    </Auxiliary>
    )

export default Layouts
