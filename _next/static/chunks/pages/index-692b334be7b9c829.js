(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{75557:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return n(91849)}])},91849:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return M}});var s=n(47568),a=n(41799),r=n(69396),i=n(10797),c=n(34051),o=n.n(c),u=n(85893),l=n(9008),d=n.n(l),h=n(25675),m=n.n(h),b=n(214),p=n.n(b),f=n(67294),x=n(45697),_=n.n(x),v=n(40782),g=function(e){var t=e.type,n=e.message,s=e.action;return v.Am[t]((0,u.jsx)("div",{style:{display:"flex"},children:(0,u.jsxs)("div",{style:{flexGrow:1,fontSize:15,padding:"8px 12px"},children:[n," \xa0",(0,u.jsx)("a",{href:s,target:"_blank",rel:"noopener noreferrer",children:(0,u.jsx)("u",{style:{color:"blue"},children:"Click Here"})})]})}))};g.propTypes={message:_().string.isRequired,type:_().string.isRequired,action:_().string.isRequired},g.dismiss=v.Am.dismiss;var j=g,k=n(3283),w=n.n(k),y="0xD64ee21C013f3c84cf9B548918102c2fBA6B76dE",N="https://testnet.bscscan.com/tx/",C="$RXST",H=JSON.parse('{"M":[{"inputs":[{"internalType":"address","name":"_jelly","type":"address"}],"stateMutability":"nonpayable","type":"constructor"},{"inputs":[],"name":"buy","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[{"internalType":"address","name":"_useraddress","type":"address"}],"name":"getBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"},{"inputs":[],"name":"withdraw","outputs":[],"stateMutability":"nonpayable","type":"function"}]}');function B(e){var t=e.product,n=e.onAdd,a=e.isConnected,r=e.web3,i=e.accounts,c=e.rbal,l=e.setRbalance,d=(0,f.useState)(!1),h=d[0],b=d[1],x=(0,f.useState)(!1),_=x[0],v=x[1],g=(0,f.useCallback)((function(e,t,n){j({type:e,message:t,action:n})}),[]),k=function(){var e=(0,s.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=11;break}if(n=new r.eth.Contract(H.M,y)){e.next=7;break}g("info","Please try again! To know about incentive tips ","mmguide"),e.next=9;break;case 7:return e.next=9,n.methods.withdraw().send({from:t},(function(e,t){e?g("warning","Please try again! To know the steps ","mmguide"):g("success","Please find redeem receipt  ",N+t)}));case 9:e.next=12;break;case 11:case 12:e.next=17;break;case 14:e.prev=14,e.t0=e.catch(0),g("info","Please try again! To know about incentive tips ","mmguide");case 17:case"end":return e.stop()}}),e,null,[[0,14]])})));return function(t){return e.apply(this,arguments)}}(),w=function(){var e=(0,s.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,v(!0),e.next=4,k(t);case 4:v(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),v(!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,u.jsxs)("span",{className:p().card,children:[(0,u.jsx)("label",{children:"Mint"}),(0,u.jsxs)("div",{children:[(0,u.jsx)("button",{title:"Guide",className:p().refreshbutton,onClick:function(e){e.preventDefault()},disabled:h,children:(0,u.jsx)(m(),{src:"/guide.png",alt:"Refresh",width:10,height:10})}),"\xa0",(0,u.jsx)("button",{title:"Token Link",className:p().refreshbutton,onClick:function(e){e.preventDefault()},disabled:h,children:(0,u.jsx)(m(),{src:"/settings.png",alt:"Refresh",width:10,height:10})}),"\xa0",a&&(0,u.jsxs)("button",{title:"Refresh Balance",className:p().refreshbutton,onClick:function(e){e.preventDefault(),b(!0),l(i),b(!1)},disabled:h,children:[h&&(0,u.jsx)("span",{className:p().loaderre}),!h&&(0,u.jsx)(m(),{src:"/refresh.png",alt:"Refresh",width:10,height:10})]})]}),!a&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsx)("div",{className:p().h3,children:"BSC Testnet"}),(0,u.jsxs)("div",{className:p().h33,children:["Get Base Currency ","BNB"," ",(0,u.jsx)(m(),{src:"/bnbicon.png",width:20,height:20})," as incentive"]})]}),a&&(0,u.jsxs)(u.Fragment,{children:[(0,u.jsxs)("div",{className:p().h3,children:[Number.parseFloat(c).toFixed(3),(0,u.jsx)("sup",{className:p().supf,children:"BNB"})]}),c<=0&&(0,u.jsx)("div",{children:" Your Redeem Balance  "}),c>0&&(0,u.jsxs)("div",{children:[" ",(0,u.jsxs)("button",{className:p().betbutton,onClick:function(e){e.preventDefault(),w(i)},disabled:_,children:[_&&(0,u.jsx)("span",{className:p().loaderre}),"Redeem"]}),"   "]})]}),(0,u.jsx)("div",{className:p().line}),(0,u.jsx)("img",{className:"small",src:t.image,alt:t.name,width:100,height:100}),(0,u.jsx)("h3",{children:t.name}),(0,u.jsxs)("div",{children:[t.price," ",(0,u.jsx)("sup",{children:"BNB"})]}),(0,u.jsx)("div",{children:(0,u.jsx)("button",{className:p().betbutton,onClick:function(){return n(t)},children:"Add To Cart"})})]})}function S(e){var t=e.products,n=e.onAdd,s=e.isConnected,a=e.web3,r=e.accounts,i=e.rbal,c=e.setRbalance;return(0,u.jsx)("main",{className:"block col-2",children:(0,u.jsx)("div",{className:p().grid,children:t.map((function(e){return(0,u.jsx)(B,{product:e,onAdd:n,isConnected:s,web3:a,accounts:r,rbal:i,setRbalance:c},e.id)}))})})}function T(e){var t=e.cartItems,n=e.onAdd,a=e.onRemove,r=e.isConnected,i=e.web3,c=e.accounts,l=t.reduce((function(e,t){return e+t.qty*t.price}),0),d=(0,f.useState)(!1),h=d[0],m=d[1],b=(0,f.useState)(null),x=(b[0],b[1],(0,f.useCallback)((function(e,t,n){j({type:e,message:t,action:n})}),[])),_=function(){var e=(0,s.Z)(o().mark((function e(t){var n,s;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!c){e.next=12;break}if(n=t.toString(),s=new i.eth.Contract(H.M,"0xD64ee21C013f3c84cf9B548918102c2fBA6B76dE")){e.next=8;break}x("info","Please try again! To know about incentive tips ","mmguide"),e.next=10;break;case 8:return e.next=10,s.methods.buy().send({from:c,value:w().utils.toWei(n,"ether")},(function(e,t){e?x("warning","Please try again! To know the steps ","mmguide"):x("success","Please find the receipt  ",N+t)}));case 10:e.next=13;break;case 12:case 13:e.next=18;break;case 15:e.prev=15,e.t0=e.catch(0),x("info","Please try again! To know about incentive tips ","mmguide");case 18:case"end":return e.stop()}}),e,null,[[0,15]])})));return function(t){return e.apply(this,arguments)}}(),v=function(){var e=(0,s.Z)(o().mark((function e(t){return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,m(!0),e.next=4,_(t);case 4:m(!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),m(!1);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}();return(0,u.jsx)("div",{className:p().block,children:(0,u.jsxs)("div",{children:[(0,u.jsx)("div",{className:p().lineqty}),t.map((function(e){return(0,u.jsxs)("span",{children:[(0,u.jsxs)("div",{className:p().brow,children:["  ",(0,u.jsxs)("center",{children:[(0,u.jsx)("div",{className:p().bcolumn,children:l.toFixed(3)}),(0,u.jsxs)("div",{className:p().bcolumn,children:[(0,u.jsx)("button",{onClick:function(){return a(e)},className:p().remove,children:"-"})," "," ",e.qty,(0,u.jsx)("button",{onClick:function(){return n(e)},className:p().add,children:"+"})]})," "]})]}),(0,u.jsxs)("div",{className:p().infi,children:["You receive ","10"*e.qty," ",C]})]},e.id)})),0!==t.length&&(0,u.jsx)(u.Fragment,{children:(0,u.jsx)("div",{children:r&&(0,u.jsxs)("button",{className:p().paybutton,onClick:function(e){e.preventDefault(),v(l.toFixed(3))},disabled:h,children:[h&&(0,u.jsx)("span",{className:p().loaderMint}),"Mint"]})})})]})})}var q={products:[{id:"1",name:C,price:.024,image:"/basicdapp/rxscoin.png"}]};function M(){var e=(0,f.useState)(!1),t=e[0],n=(e[1],(0,f.useState)(!1)),c=n[0],l=(n[1],(0,f.useState)(null)),h=l[0],b=l[1],x=(0,f.useState)(null),_=x[0],v=x[1],g=(0,f.useState)(!1),k=g[0],N=g[1],C=(0,f.useState)(!1),B=C[0],M=C[1],P=(0,f.useState)({}),R=P[0],Z=P[1],A=(0,f.useState)(0),E=A[0],F=A[1],D=(0,f.useCallback)((function(e,t,n){j({type:e,message:t,action:n})}),[]),O=q.products,Y=(0,f.useState)([]),G=Y[0],I=Y[1],Q=function(e){var t=G.find((function(t){return t.id===e.id}));if(t){if(99===t.qty)return void alert("Maximum Quantity achieved");I(G.map((function(n){return n.id===e.id?(0,r.Z)((0,a.Z)({},t),{qty:t.qty+1}):n})))}else I((0,i.Z)(G).concat([(0,r.Z)((0,a.Z)({},e),{qty:1})]))},W={bsctest:{chainId:"0x".concat(Number(97).toString(16)),chainName:"BSC Testnet",nativeCurrency:{name:"Binance Chain Native Token",symbol:"BNB",decimals:18},rpcUrls:["https://data-seed-prebsc-1-s1.binance.org:8545"],blockExplorerUrls:["https://explorer.binance.org/smart-testnet"]},bsc:{chainId:"0x".concat(Number(56).toString(16)),chainName:"Binance Smart Chain Mainnet",nativeCurrency:{name:"Binance Chain Native Token",symbol:"BNB",decimals:18},rpcUrls:["https://bsc-dataseed1.binance.org","https://bsc-dataseed2.binance.org","https://bsc-dataseed3.binance.org","https://bsc-dataseed4.binance.org","https://bsc-dataseed1.defibit.io","https://bsc-dataseed2.defibit.io","https://bsc-dataseed3.defibit.io","https://bsc-dataseed4.defibit.io","https://bsc-dataseed1.ninicoin.io","https://bsc-dataseed2.ninicoin.io","https://bsc-dataseed3.ninicoin.io","https://bsc-dataseed4.ninicoin.io","wss://bsc-ws-node.nariox.org"],blockExplorerUrls:["https://bscscan.com"]}},U=function(){var e;return window.ethereum?e=window.ethereum:window.web3?e=window.web3.currentProvider:D("info","Please install MetaMask! Check the guide ","mmguide"),e},J=function(){var e=(0,s.Z)(o().mark((function e(){var t,n,s,r,i,c;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,N(!0),!(t=U())){e.next=49;break}if(t===window.ethereum){e.next=8;break}return alert("Please install MetaMask!"),N(!1),e.abrupt("return");case 8:return e.prev=8,e.next=11,t.request({method:"wallet_addEthereumChain",params:[(0,a.Z)({},W.bsctest)]});case 11:e.next=33;break;case 13:return e.prev=13,e.t0=e.catch(8),e.prev=15,e.next=18,ethereum.request({method:"wallet_switchEthereumChain",params:[{chainId:"0x".concat(Number(97).toString(16))}]});case 18:e.next=32;break;case 20:if(e.prev=20,e.t1=e.catch(15),4902!==e.t1.code){e.next=32;break}return e.prev=23,e.next=26,ethereum.request({method:"wallet_addEthereumChain",params:[(0,a.Z)({},W.bsctest)]});case 26:e.next=32;break;case 28:e.prev=28,e.t2=e.catch(23),D("info","Please reload and try connect wallet!","mmguide"),N(!1);case 32:N(!1);case 33:return e.next=35,t.request({method:"eth_requestAccounts"});case 35:return n=new(w())(t),e.next=38,n.eth.getAccounts();case 38:return s=e.sent,e.next=41,n.eth.getChainId();case 41:return r=e.sent,i=s[0],e.next=45,n.eth.getBalance(i);case 45:c=e.sent,c=n.utils.fromWei(c,"ether"),0===s.length?(alert("Please connect to meta mask"),N(!1)):(b(n),v(i),N(!1),K(c,i,r)),N(!1);case 49:N(!1),e.next=56;break;case 52:e.prev=52,e.t3=e.catch(0),D("info","Please reload and try connect wallet!","mmguide"),N(!1);case 56:case"end":return e.stop()}}),e,null,[[0,52],[8,13],[15,20],[23,28]])})));return function(){return e.apply(this,arguments)}}(),K=function(e,t,n){var s={address:t,balance:e,connectionid:n},a=JSON.parse(JSON.stringify(s));Z(a),M(!0)},L=function(){var e=(0,s.Z)(o().mark((function e(t){var n;return o().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(e.prev=0,!t){e.next=9;break}if(n=new h.eth.Contract(H.M,y)){e.next=7;break}e.next=9;break;case 7:return e.next=9,n.methods.getBalance(t).call((function(e,t){e||F(w().utils.fromWei(t,"ether"))}));case 9:e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),D("info","Please try after sometime! ","tricks");case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(t){return e.apply(this,arguments)}}();return(0,u.jsxs)("div",{className:p().pageCol,children:[(0,u.jsxs)(d(),{children:[(0,u.jsx)("title",{children:"Rabbit Eggs DeFi"}),(0,u.jsx)("meta",{name:"description",content:"Rabbit Eggs Token RXGS based on Binance Smart Chain"}),(0,u.jsx)("link",{rel:"icon",href:"/basicdapp/favicon.ico"})]}),(0,u.jsxs)("main",{className:p().main,children:[(0,u.jsxs)("div",{className:p().menuline,children:[(0,u.jsx)("button",{children:(0,u.jsx)(m(),{src:"/rxscoin.png",alt:"rabbit eggs defi",width:15,height:15})}),(0,u.jsx)("button",{children:"Papers"}),(0,u.jsx)("button",{children:"Guide"}),(0,u.jsx)("button",{children:"BSCTestnet"})]}),!t&&(0,u.jsx)("h3",{children:"Rabbit Eggs DeFi Platform"}),!c&&(0,u.jsxs)("div",{className:p().blockOut,children:[(0,u.jsx)(S,{products:O,onAdd:Q,isConnected:B,web3:h,accounts:_,rbal:E,setRbalance:L}),0!=G.length&&(0,u.jsx)("span",{children:(0,u.jsx)(T,{cartItems:G,onAdd:Q,onRemove:function(e){var t=G.find((function(t){return t.id===e.id}));1===t.qty?I(G.filter((function(t){return t.id!==e.id}))):I(G.map((function(n){return n.id===e.id?(0,r.Z)((0,a.Z)({},t),{qty:t.qty-1}):n})))},isConnected:B,web3:h,accounts:_})}),(0,u.jsx)("div",{className:p().blockC,children:(0,u.jsxs)("center",{children:[!B&&(0,u.jsxs)("button",{className:p().stbutton,onClick:J,disabled:k,children:[k&&(0,u.jsx)("span",{className:p().loaderMint}),"Connect Wallet"]}),B&&(0,u.jsxs)("button",{className:p().stbutton,onClick:function(){Z({}),F(0),v(null),M(!1),D("info","Disconnected! To know more about incentive tips ","tricks")},children:[R.address.substr(0,5),"...",R.address.substr(R.address.length-4,R.address.length-1)]})]})})]})]}),(0,u.jsx)("footer",{className:p().footer,children:(0,u.jsxs)("div",{className:p().menulinef,children:[(0,u.jsx)("button",{children:"Contract Address"}),(0,u.jsx)("button",{children:"Twitter"}),(0,u.jsx)("button",{children:"Reddit"}),(0,u.jsx)("button",{children:"Youtube"})]})})]})}},214:function(e){e.exports={container:"Home_container__bCOhY",pageCol:"Home_pageCol__YQtYY",main:"Home_main__nLjiQ",h3:"Home_h3__qTFjn",h33:"Home_h33__KGnHx",supf:"Home_supf__ZpE7K",menuline:"Home_menuline__BB2cr",menulinef:"Home_menulinef__HgUh6",line:"Home_line___MWv3",lineqty:"Home_lineqty__tvJIG",infi:"Home_infi__eqPtx",footer:"Home_footer____T7K",grid:"Home_grid__GxQ85",card:"Home_card___LpL1",stbutton:"Home_stbutton__vweYA",betbutton:"Home_betbutton__MIF4g",refreshbutton:"Home_refreshbutton__AMYxA",block:"Home_block__xGfy6",blockOut:"Home_blockOut__u7czd",blockC:"Home_blockC__b6s5q",add:"Home_add__e9_Zr",remove:"Home_remove__awaPE",bcolumn:"Home_bcolumn__gWyxK",brow:"Home_brow__fiNHu",paybutton:"Home_paybutton__YSkvQ",loaderMint:"Home_loaderMint__FFC15",rotation:"Home_rotation__vpfOx",loader:"Home_loader__7Zjim",loaderre:"Home_loaderre__k6QCe"}},46601:function(){},89214:function(){},71922:function(){},2363:function(){},27790:function(){},52361:function(){},94616:function(){},6567:function(){}},function(e){e.O(0,[482,714,419,774,888,179],(function(){return t=75557,e(e.s=t);var t}));var t=e.O();_N_E=t}]);