(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{25:function(e,t,n){e.exports=n(43)},30:function(e,t,n){},32:function(e,t,n){},39:function(e,t,n){},41:function(e,t,n){},43:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(23),i=n.n(o),c=(n(30),n(6)),l=n(7),s=n(10),u=n(8),h=n(11),p=(n(32),n(14)),f=n(24);p.a.plugin(f.a);var y="http://evo.site:5984/".concat("c4"),v={live:!0,retry:!0},m=(new p.a("localStore"),new p.a("c4"));m.replicate.from(y).on("complete",function(e){m.sync(y,v).on("error",function(e){return console.log("Sync error",e)})}).on("error",function(e){return console.log("Inital sync error",e)});n(39);var d=function(e,t){for(var n=new Array(e),a=0;a<n.length;a++){n[a]=new Array(t);for(var r=0;r<n[a].length;r++)n[a][r]=0}return n},g=new RegExp("^https?://"),w=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={board:d(7,6),turn:1,winner:0,winningPositions:[]},n.computerTurn(),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"humanTurn",value:function(){return!g.test(this.props["player".concat(this.state.turn)])}},{key:"getCurrentName",value:function(){return this.props["player".concat(this.state.turn)]}},{key:"computerTurn",value:function(){var e=this;if(!this.humanTurn()){var t=JSON.stringify(this.state.board),n=this.props["player".concat(this.state.turn)],a="".concat(n,"?gamestate=").concat(t),r=new Request(a);fetch(r).then(function(e){return e.text()}).then(function(e){return parseInt(e)}).then(function(t){return setTimeout(function(){return e.doTurn(t)},250)})}}},{key:"col_click",value:function(e,t){this.humanTurn()&&this.doTurn(t)}},{key:"doTurn",value:function(e){for(var t=this,n=this.state,a=n.board,r=n.turn,o=a[e],i=0,c=-1,l=o.length-1;l>=0;l--)0===o[l]&&(c=l);return c<0?(this.computerTurn(),!1):!(this.state.winner>0)&&(o[c]=r,a[e]=o,this.check_win(1,a)&&(i=1),this.check_win(2,a)&&(i=2),this.setState({board:a,turn:1===r?2:1,winner:i},function(){return t.computerTurn()}),!0)}},{key:"check_win",value:function(e,t){for(var n=function(){return t.length+1},a=function(){return t[0].length+1},r=0;r<n()-3;r++)for(var o=0;o<a();o++){for(var i=0,c=[],l=0;l<4;l++)t[o][r+l]===e&&(i+=1,c.push("".concat(o,":").concat(r+l)));if(4===i)return this.setState({winningPositions:c}),!0}for(var s=0;s<a()-3;s++)for(var u=0;u<n();u++){for(var h=0,p=[],f=0;f<4;f++)t[s+f][u]===e&&(h++,p.push("".concat(s+f,":").concat(u)));if(4===h)return this.setState({winningPositions:p}),console.log(t),!0}for(var y=3;y<a();y++)for(var v=0;v<n()-3;v++){for(var m=0,d=[],g=0;g<4;g++)t[y-g][v+g]===e&&(m++,d.push("".concat(y-g,":").concat(v+g)));if(4===m)return this.setState({winningPositions:d}),!0}for(var w=3;w<a();w++)for(var k=3;k<n();k++){for(var b=0,E=[],O=0;O<4;O++)t[w-O][k-O]===e&&(b++,E.push("".concat(w-O,":").concat(k-O)));if(4===b)return this.setState({winningPositions:E}),!0}return!1}},{key:"render",value:function(){var e=this,t=0===this.state.winner?"Player ".concat(this.state.turn):"Winner ".concat(this.state.winner),n=this.humanTurn()||this.state.winner>0?"":" - waiting on AI",a=function(t,n,a){var r=e.state.board[0].length-n-1,o=1===t?"red":2===t?"yellow":"";return console.log("".concat(a,":").concat(r)),e.state.winningPositions.indexOf("".concat(a,":").concat(r))>-1&&(console.log("winner"),o="".concat(o," winner")),o},o=function(t,n){return r.a.createElement("div",{key:n,className:"col",onClick:function(t,a){return e.col_click(t,n)}},t.slice(0).reverse().map(function(e,t){return function(e,t,n){return r.a.createElement("div",{key:t,className:a(e,t,n)+" item"},e)}(e,t,n)}))};return r.a.createElement("div",null,r.a.createElement("div",null,"Game - ",t,n),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return e.props.restart()}},"Reset")),r.a.createElement("div",{className:"game"},this.state.board.map(function(e,t){return o(e,t)})))}}]),t}(a.Component);w.defaultProps={restart:function(){return console.log("Reset")}};var k=w,b=(n(41),function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={player1:e.player1,player2:e.player2,playerList:[]},n.getPlayers(),n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"getPlayers",value:function(){var e=this;m.query({map:function(e,t){"player"==e.type&&t(e.name)},reduce:function(e,t,n){console.log(e,t,n);var a={};return t.forEach(function(e){a[e]||(a[e]=!0)}),a}}).then(function(t){console.log(t),e.setState({playerList:t.rows})})}},{key:"handleChange",value:function(e,t){var n=[];n[e]=t.target.value,this.setState(n)}},{key:"render",value:function(){var e=this,t=this.state,n=t.player1,a=t.player2;this.state.playerList.map(function(e){return r.a.createElement("div",{key:e.id},e.key)});return r.a.createElement("div",{className:"Setup"},r.a.createElement("div",null,"Setup"),r.a.createElement("div",null,r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"player_1"},"Player 1"),r.a.createElement("input",{id:"player_1",type:"text",value:this.state.player1,onChange:function(t){return e.handleChange("player1",t)}})),r.a.createElement("p",null,r.a.createElement("label",{htmlFor:"player_2"},"Player 2"),r.a.createElement("input",{id:"player_2",type:"text",value:this.state.player2,onChange:function(t){return e.handleChange("player2",t)}})),r.a.createElement("p",null,r.a.createElement("button",{onClick:function(){return e.props.play(n,a)},disabled:""===n||""===a},"Play"))))}}]),t}(a.Component));b.defaultProps={play:function(e,t){return console.log(e,"vs",t)},player1:"",player2:""};var E=b,O="setup",P=function(e){function t(e){var n;return Object(c.a)(this,t),(n=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={state:O,player1:"Human",player2:"Human",players:[]},n}return Object(h.a)(t,e),Object(l.a)(t,[{key:"savePlayer",value:function(e){var t={type:"player",name:e,ts:(new Date).getTime()};t._id="".concat(t.name,":").concat(t.ts),m.put(t)}},{key:"startGame",value:function(e,t){this.savePlayer(e),this.savePlayer(t),this.setState({player1:e,player2:t,state:"playing"})}},{key:"getMain",value:function(){var e=this;if(this.state.state===O)return r.a.createElement(E,{play:function(t,n){return e.startGame(t,n)},player1:this.state.player1,player2:this.state.player2});var t=this.state,n=t.player1,a=t.player2,o={state:O};return r.a.createElement(k,{restart:function(){return e.setState(o)},player1:n,player2:a})}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement("header",{className:"App-header"},this.getMain()))}}]),t}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(P,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,2,1]]]);
//# sourceMappingURL=main.34861792.chunk.js.map