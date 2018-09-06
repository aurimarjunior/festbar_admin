import React from 'react';
import {Router, Scene} from 'react-native-router-flux';

import FormLogin from './screens/Login/FormLogin';
import FormRecupSenha from './screens/Login/FormRecupSenha';
import HomeFestas from './screens/Festas/HomeFestas';
import HomeBares from './screens/Bares/HomeBares';
import HomeSuperAdmin from './screens/SuperAdmin/HomeSuperAdmin';

//solução temporária para ocultar mensagem de metodo obsoleto... 
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
//na proxima atualização esta importação deve ser removida

export default props => (
    <Router>
        <Scene key="root">
            <Scene key='formLogin' component={FormLogin} hideNavBar={true} />
            <Scene key='formRecupSenha' component={FormRecupSenha} hideNavBar={true}/>
            <Scene key='homeFestas' component={HomeFestas} hideNavBar={true}/>
            <Scene key='homeBares' component={HomeBares} hideNavBar={true}/>
            <Scene key='homeSuperAdmin' component={HomeSuperAdmin} hideNavBar={true}/>
        </Scene>
    </Router>
);