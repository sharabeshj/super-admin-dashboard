import React from 'react';
import Auxillary from '../hoc/Auxillary';
import Layout from './Layout';
import { Route } from 'react-router-dom';
import signIn from './signIn';

const main = props => {
    return (
        <Auxillary>
           <Layout>
               <Route path = '/' component = {signIn}/>
           </Layout>
        </Auxillary>
    )
};

export default main;