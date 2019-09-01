import React, { Component } from 'react';

export default class Header extends Component{
    render(){
        return (
            <div className="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto">
                <div class="row">
                    <div className="col-md-4">
                        <div class="text-center">
                            <img src= "https://scontent.fbkk10-1.fna.fbcdn.net/v/t1.0-9/16195755_1408190169233627_4419636203824306178_n.jpg?_nc_cat=105&_nc_eui2=AeEm64Wj-YQokThxLGco5RbmeB29SrrC5_o6fN_trUJyIGUIAZi-93Pbkygt9MBBxF7AXyE3s6WAd88PKR3_TR4grwwTxeAqn_5RkTYk9yAx2Q&_nc_oc=AQmXmvXKArkUgKhy6M9367O8g75zDx7Qhs-Iiaq3GFwLBWVdMpeslijvUR6VBdmpv0s&_nc_ht=scontent.fbkk10-1.fna&oh=c87de928b5b84d2e90ebcfedc77550bd&oe=5E0BCC21"
                            class="circle" width="100%" />
                        </div>
                    </div>
                    <div className="col-md-8">
                        <div className="card" style={{marginTop: '40px'}}>
                            <div className="card-body">
                                <h1>Awatif Yusoh</h1>
                                <div style ={{fontSize: '20px', marginTop: '15px'}}>
                                <div className="row">
                                    <div className="col-3">Birth Of Dath</div><div class="col">4 June 1999</div>
                                </div>
                                <div className="row">
                                    <div className="col-3">Age</div><div class="col">20 Year</div>
                                </div>
                                <div className="row">
                                    <div className="col-3">Weight</div><div class="col">45 kg.</div>
                                </div>
                                <div className="row">
                                    <div className="col-3">Grade</div><div class="col">3.65</div>
                                </div>
                              </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        )
    }
}