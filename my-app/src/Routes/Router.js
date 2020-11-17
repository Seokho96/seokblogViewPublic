import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { Home, About, Login, Board, MyBoard, MyPage, Join, BoardDetail, Comment, PaperHouse, SimpleFive } from './index';

const Router = () => (
    <Switch>
         <Route exact path="/" component={Home} />
        <Route path="/about" component={About} />
        <Route path="/login" component={Login} />
        <Route path="/board" component={Board} />
        <Route path="/myboard" component={MyBoard} />
        <Route path="/mypage" component={MyPage} />
        <Route path="/join" component={Join} />
        <Route path="/boardDetail" component={BoardDetail} />
        <Route path="/comment" component={Comment}/>
        <Route path="/project/PaperHouse" component={PaperHouse}/>
        <Route path="/project/SimpleFive" component={SimpleFive}/>
    </Switch>
);


export default Router;