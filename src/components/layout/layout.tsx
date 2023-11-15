import React from 'react'
import './layout.css'
import { Counter } from '../counter'
import { Header } from '../Header'


type LayoutProps = {
 Header:React.ReactNode
}

export const Layout = ({Header}:LayoutProps) => {
return(
    <div className='layout'>
        <div className='header'>
            {Header}
        </div>
        <div className='main'>
            
            <div className='sidebar'>
            
            </div>

            <div className='mainContent'>
                <Counter/>
            </div>

        </div>
    </div>
)

}