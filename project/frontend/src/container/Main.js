import React from 'react';
import Aux from '../hoc/Aux';
import Layout from './Layout';
import { Route } from 'react-router-dom';
import signIn from './signIn';

const main = props => {
    return (
        <Aux>
           <Layout>
               <Route path = '/' component = {signIn}/>
           </Layout>
        </Aux>
    )
};

export default main;