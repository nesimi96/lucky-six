import React, { Component } from 'react';
import '../../sass/main.scss';
import Hamburger from '../../Components/Hamburger/Hamburger';
import NavigationItem from './NavigationItem';
import { Transition } from 'react-transition-group';

class Navigation extends Component {

    render() {

       const itemsData = [{text: 'Bingo', path: '/'},
                            {text: 'Statistika', path: '/statistika'},
                            {text: 'Prijava', path: '/prijava'},
                          {text: 'Pravila', path: '/pravila'},
                          {text: 'Pitanja i odgovori', path: '/faq'}]

       const items = itemsData.map((cur, ind) => {
           return <NavigationItem path={cur.path} text={cur.text}/>
       })

      
    
     return <Transition in={this.props.navOpen} timeout={270} mountOnEnter unmountOnExit>
               {state => (                   
                    <div style={{
                        animation: state === 'entering' ? 'navAnime-enter .27s ease-in-out' : 
                                   state === 'exiting' ? 'navAnime-exit .27s ease-in-out' : '' 
                    }} className="Navigation">
                        <nav style={{display: state === 'exiting' ? 'none' : ''}} className="Navigation-box">
                                { items }
                        </nav>
                        <div  style={{display: state === 'exiting' ? 'none' : ''}} className="Navigation-author">
                                <p>developed and designed by 
                                    <a className="Navigation-author-auth" target="_blank"
                                    href="https://www.instagram.com/nezir.nesimi/">Nesimi Nezir</a>
                                </p>
                        </div>
                        <div style={{display: state === 'exiting' ? 'none' : ''}} onClick={this.props.closeNav} className="Navigation-close-holder">
                                <span className="Navigation-close-holder-entity">
                                    &#10005;
                                </span>
                        </div>
                    </div>
               )}
             </Transition>

    }
}

export default Navigation;
