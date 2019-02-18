(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(t,e,n){t.exports=n(35)},24:function(t,e,n){},26:function(t,e,n){},31:function(t,e,n){},33:function(t,e,n){},35:function(t,e,n){"use strict";n.r(e);var r=n(0),a=n.n(r),i=n(18),o=n.n(i),c=(n(24),n(5)),u=n(6),s=n(8),l=n(7),h=n(9),p=(n(26),n(12)),f=new p.a("c4"),y="http://evo.site:5984/".concat("c4"),v={live:!0,retry:!0};f.replicate.from(y).on("complete",function(t){f.sync(y,v).on("error",function(t){return console.log("Sync error",t)})}).on("error",function(t){return console.log("Inital sync error",t)});new p.a("localStore"),n(31);var m=function(t,e){for(var n=new Array(t),r=0;r<n.length;r++){n[r]=new Array(e);for(var a=0;a<n[r].length;a++)n[r][a]=0}return n},d=new RegExp("^https?://"),w=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(l.a)(e).call(this,t))).state={board:m(7,6),turn:1,winner:0,winningPositions:[]},n.computerTurn(),n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"humanTurn",value:function(){return!d.test(this.props["player".concat(this.state.turn)])}},{key:"getCurrentName",value:function(){return this.props["player".concat(this.state.turn)]}},{key:"computerTurn",value:function(){var t=this;if(!this.humanTurn()){var e=JSON.stringify(this.state.board),n=this.props["player".concat(this.state.turn)],r="".concat(n,"?gamestate=").concat(e),a=new Request(r);fetch(a).then(function(t){return t.text()}).then(function(t){return parseInt(t)}).then(function(e){return setTimeout(function(){return t.doTurn(e)},250)})}}},{key:"col_click",value:function(t,e){this.humanTurn()&&this.doTurn(e)}},{key:"doTurn",value:function(t){for(var e=this,n=this.state,r=n.board,a=n.turn,i=r[t],o=0,c=-1,u=0;u<i.length;u++)0===i[u]&&(c=u);return c<0?(this.computerTurn(),!1):!(this.state.winner>0)&&(i[c]=a,r[t]=i,this.check_win(1,r)&&(o=1),this.check_win(2,r)&&(o=2),this.setState({board:r,turn:1===a?2:1,winner:o},function(){return e.computerTurn()}),!0)}},{key:"check_win",value:function(t,e){for(var n=function(){return e.length+1},r=function(){return e[0].length+1},a=0;a<n()-3;a++)for(var i=0;i<r();i++){for(var o=0,c=[],u=0;u<4;u++)e[i][a+u]===t&&(o+=1,c.push("".concat(i,":").concat(a+u)));if(4===o)return this.setState({winningPositions:c}),!0}for(var s=0;s<r()-3;s++)for(var l=0;l<n();l++){for(var h=0,p=[],f=0;f<4;f++)e[s+f][l]===t&&(h++,p.push("".concat(s+f,":").concat(l)));if(4===h)return this.setState({winningPositions:p}),!0}for(var y=3;y<r();y++)for(var v=0;v<n()-3;v++){for(var m=0,d=[],w=0;w<4;w++)e[y-w][v+w]===t&&(m++,d.push("".concat(y-w,":").concat(v+w)));if(4===m)return this.setState({winningPositions:d}),!0}for(var g=3;g<r();g++)for(var b=3;b<n();b++){for(var k=0,E=[],O=0;O<4;O++)e[g-O][b-O]===t&&(k++,E.push("".concat(g-O,":").concat(b-O)));if(4===k)return this.setState({winningPositions:E}),!0}return!1}},{key:"render",value:function(){var t=this,e=0===this.state.winner?"Player ".concat(this.state.turn):"Winner ".concat(this.state.winner),n=this.humanTurn()||this.state.winner>0?"":" - waiting on AI",r=function(e,n,r){var a=1===e?"red":2===e?"yellow":"";return t.state.winningPositions.indexOf("".concat(r,":").concat(n))>-1&&(a="".concat(a," winner")),a},i=function(e,n){return a.a.createElement("div",{key:n,className:"col",onClick:function(e,r){return t.col_click(e,n)}},e.map(function(t,e){return function(t,e,n){return a.a.createElement("div",{key:e,className:r(t,e,n)+" item"},t)}(t,e,n)}))};return a.a.createElement("div",null,a.a.createElement("div",null,"Game - ",e,n),a.a.createElement("div",null,a.a.createElement("button",{onClick:function(){return t.props.restart()}},"Reset")),a.a.createElement("div",{className:"game"},this.state.board.map(function(t,e){return i(t,e)})))}}]),e}(r.Component);w.defaultProps={restart:function(){return console.log("Reset")}};var g=w,b=(n(33),function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(l.a)(e).call(this,t))).state={player1:t.player1,player2:t.player2},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"handleChange",value:function(t,e){var n=[];n[t]=e.target.value,this.setState(n)}},{key:"render",value:function(){var t=this,e=this.state,n=e.player1,r=e.player2;return a.a.createElement("div",{className:"Setup"},a.a.createElement("div",null,"Setup"),a.a.createElement("div",null,a.a.createElement("p",null,a.a.createElement("label",{htmlFor:"player_1"},"Player 1"),a.a.createElement("input",{id:"player_1",type:"text",value:this.state.player1,onChange:function(e){return t.handleChange("player1",e)}})),a.a.createElement("p",null,a.a.createElement("label",{htmlFor:"player_2"},"Player 2"),a.a.createElement("input",{id:"player_2",type:"text",value:this.state.player2,onChange:function(e){return t.handleChange("player2",e)}})),a.a.createElement("p",null,a.a.createElement("button",{onClick:function(){return t.props.play(n,r)},disabled:""===n||""===r},"Play"))))}}]),e}(r.Component));b.defaultProps={play:function(t,e){return console.log(t,"vs",e)},player1:"",player2:""};var k=b,E="setup",O=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(s.a)(this,Object(l.a)(e).call(this,t))).state={state:E,player1:"http://chris.evo.site/c4/c4.php",player2:"Human"},n}return Object(h.a)(e,t),Object(u.a)(e,[{key:"startGame",value:function(t,e){this.setState({player1:t,player2:e,state:"playing"})}},{key:"getMain",value:function(){var t=this;if(this.state.state===E)return a.a.createElement(k,{play:function(e,n){return t.startGame(e,n)},player1:this.state.player1,player2:this.state.player2});var e=this.state,n=e.player1,r=e.player2,i={state:E};return a.a.createElement(g,{restart:function(){return t.setState(i)},player1:n,player2:r})}},{key:"render",value:function(){return a.a.createElement("div",{className:"App"},a.a.createElement("header",{className:"App-header"},this.getMain()))}}]),e}(r.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(a.a.createElement(O,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(t){t.unregister()})}},[[19,2,1]]]);
//# sourceMappingURL=main.1e2d1e36.chunk.js.map