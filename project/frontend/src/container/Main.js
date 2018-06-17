import React from 'react';
import Auxillary from '../hoc/Auxillary';
import Layout from './Layout';
import { Route,Switch } from 'react-router-dom';
import signIn from './signIn';
import Dashboard from './Dashboard';


const main = props => {
    return (
        <Auxillary>
           <Layout>
               <Switch>
                    <Route exact path = '/dashboard' component = {Dashboard}/>
                    <Route path = '/' component = {signIn}/>
               </Switch> 
           </Layout>
        </Auxillary>
    )
};

export default main;