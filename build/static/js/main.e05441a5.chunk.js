(this.webpackJsonprestaurant=this.webpackJsonprestaurant||[]).push([[0],{142:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),c=a.n(o),i=a(89),s=Object(i.a)({palette:{primary:{main:"#cf1b1b"},secondary:{main:"#cf1b1b"}}}),l=a(181),u=a(17),m=a(83),d=a.n(m),p=a(84),g=a(178),b=a(177),f=a(174),E=a(38),h=a(87),v=a.n(h),x=a(144),y=a(86),N=a(182),O=a(183),j=Object(f.a)((function(e){return{paper:{backgroundColor:"white",borderRadius:25,margin:"50px auto",padding:20,width:"70%",display:"block"},text:{marginBottom:10},select:{marginBottom:10,width:"100%"},icon:{height:"40px",width:"40px"}}}));function S(e){var t=j(),a=Object(n.useState)({restaurantLocation:"Times Square, Manhattan, NYC",restaurantName:""}),o=Object(u.a)(a,2),c=o[0],i=o[1],s=Object(n.useState)(["-73.985130","40.758896"]),l=Object(u.a)(s,2),m=l[0],d=l[1];function p(e){var t=e.target,a=t.name,n=t.value;i((function(e){return Object(E.a)(Object(E.a)({},e),{},{[a]:n})})),"Times Square, Manhattan, NYC"===n?d(["-73.985130","40.758896"]):"Current Location"===n&&(navigator.geolocation?navigator.geolocation.getCurrentPosition(g,f):alert("Geolocation is not supported by this browser."))}function g(e){d([e.coords.longitude,e.coords.latitude])}function f(e){switch(e.code){case e.PERMISSION_DENIED:alert("User denied the request for Geolocation.");break;case e.POSITION_UNAVAILABLE:alert("Location information is unavailable.");break;case e.TIMEOUT:alert("The request to get user location timed out.");break;case e.UNKNOWN_ERROR:alert("An unknown error occurred.");break;default:alert("An error occurred.")}i((function(e){return Object(E.a)(Object(E.a)({},e),{},{restaurantLocation:"Times Square, Manhattan, NYC"})})),d(["-73.985130","40.758896"])}return r.a.createElement(x.a,{elevation:3,className:t.paper},r.a.createElement(b.a,{container:!0,spacing:3,direction:"row"},r.a.createElement(b.a,{item:!0,xs:12,sm:5},r.a.createElement(y.a,{value:c.restaurantLocation,onChange:p,className:t.select,name:"restaurantLocation"},r.a.createElement("option",{value:"Times Square, Manhattan, NYC"},"Times Square, Manhattan, NYC"),r.a.createElement("option",{value:"Current Location"},"Current Location"))),r.a.createElement(b.a,{item:!0,xs:12,sm:5},r.a.createElement(N.a,{placeholder:"restaurant name...",rows:1,fullWidth:!0,className:t.text,value:c.restaurantName,onChange:p,name:"restaurantName"})),r.a.createElement(b.a,{item:!0,xs:12,sm:2,container:!0,justify:"center",alignItems:"center"},r.a.createElement(O.a,{onClick:function(){e.search(m,c.restaurantName),e.setLocation(m)},variant:"contained",color:"secondary",className:t.icon},e.isLoading?r.a.createElement("div",{className:"loader"}):r.a.createElement(v.a,null)))))}var w=Object(f.a)((function(e){return{root:{flexGrow:1},paper:{padding:e.spacing(2),margin:"20px 15px 0"}}}));function L(e){var t=w(),a=Object(n.useState)(!1),o=Object(u.a)(a,2),c=o[0],i=o[1],s=Object(n.useState)(!1),l=Object(u.a)(s,2),m=l[0],d=l[1];function p(){i(!0)}function f(){i(!1)}var E,h=e.rating.aggregate_rating;h<=.5?E="320px":h>.5&&h<=1?E="360px":h>1&&h<=1.5?E="340px":h>1.5&&h<=2?E="400px":h>2&&h<=2.5?E="380px":h>2.5&&h<=3?E="440px":h>3&&h<=3.5?E="420px":h>3.5&&h<=4?E="480px":h>4&&h<=4.5?E="460px":h>4.5&&h<=5&&(E="500px");var v={background:"url('https://s3-media0.fl.yelpcdn.com/assets/public/stars_v2.yji-52d3d7a328db670d4402843cbddeed89.png') 0 -"+E,display:"inline-block",verticalAlign:"middle",width:"108px",height:"20px",marginBottom:"8px"};return r.a.createElement("div",{className:t.root},r.a.createElement(x.a,{className:t.paper,elevation:c?8:1,onMouseOver:p,onMouseOut:f,style:{cursor:c&&"pointer",backgroundColor:c?"#f6f6f6":"white",borderTop:m&&"2px solid #cf1b1b",borderLeft:m&&"2px solid #cf1b1b"},onClick:function(){d(!m)}},r.a.createElement(b.a,{container:!0,spacing:2},r.a.createElement(b.a,{item:!0,xs:12,sm:!0,container:!0},r.a.createElement(b.a,{item:!0,xs:!0,container:!0,direction:"column",spacing:2},r.a.createElement(b.a,{item:!0,xs:!0},r.a.createElement(g.a,{gutterBottom:!0,onMouseOver:p,onMouseOut:f,style:{textDecoration:c&&"underline"}},e.id+". "+e.name),m&&r.a.createElement("div",{style:v}),m&&r.a.createElement(g.a,{variant:"body2",gutterBottom:!0,color:"textSecondary",style:{display:"inline",marginLeft:"10px"}},e.reviews+" reviews"),r.a.createElement(g.a,{variant:"body2",gutterBottom:!0},e.currency.repeat(e.price)+" \xb7 "+e.cuisine),r.a.createElement(g.a,{variant:"body2",color:"textSecondary",gutterBottom:!0},e.address),m&&r.a.createElement(g.a,{variant:"body2",color:"textSecondary"},e.phone))),r.a.createElement(b.a,{item:!0},m&&r.a.createElement(g.a,{variant:"body2",color:"textSecondary"},e.distance+"m"))))))}var k=a(51);var C=function(e){var t={height:window.innerHeight*.95.toString(),width:"100%"},a="https://maps.google.com/mapfiles/kml/paddle/",n={lat:Number(e.userLocation[1]),lng:Number(e.userLocation[0])},o=[{name:"center",location:n,imgURL:a+"red-stars.png"}].concat(e.restaurants.map((function(e,t){return{name:e.restaurant.name,location:{lat:Number(e.restaurant.location.latitude),lng:Number(e.restaurant.location.longitude)},imgURL:a+(t+1).toString()+".png"}})));return r.a.createElement(k.b,{googleMapsApiKey:"AIzaSyAt5NuRkDNkH0xiPYjt050weIs3EK8rBUo"},r.a.createElement(k.a,{mapContainerStyle:t,zoom:13,center:n},o.map((function(e,t){return r.a.createElement(k.c,{key:t+1,position:e.location,icon:e.imgURL})}))))},I=Object(f.a)((function(e){return{title:{fontFamily:"'Ubuntu', sans-serif",textAlign:"center",margin:"15% auto 50px",width:"50%"},gridContainer:{backgroundColor:"#fff",padding:"30px 10px"}}}));function M(){var e=I(),t=Object(n.useState)([]),a=Object(u.a)(t,2),o=a[0],c=a[1],i=Object(n.useState)([]),s=Object(u.a)(i,2),l=s[0],m=s[1],f=Object(n.useState)(!1),E=Object(u.a)(f,2),h=E[0],v=E[1],x=Object(n.useState)(!1),y=Object(u.a)(x,2),N=y[0],O=y[1];return r.a.createElement("div",null,!N&&r.a.createElement(g.a,{variant:"h4",className:e.title},"Find Restaurants near you."),r.a.createElement(S,{search:function(e,t){var a="https://developers.zomato.com/api/v2.1/search?start=0&count=10"+(""===t?"":"&q="+t)+"&lat="+e[1]+"&lon="+e[0];v(!0),d()({method:"GET",url:a,headers:{"user-key":"a26ab6f479fab165848f3c41334dd07c","content-type":"application/json"}}).then((function(e){c(e.data.restaurants),v(!1),O(!0)})).catch((function(e){console.log(e)}))},setLocation:function(e){m(e)},isLoading:h}),N&&r.a.createElement(b.a,{container:!0,className:e.gridContainer},r.a.createElement(b.a,{item:!0,xs:12,sm:6,container:!0,justify:"center",alignItems:"center"},r.a.createElement(C,{userLocation:l,restaurants:o})),r.a.createElement(b.a,{item:!0,xs:12,sm:6,container:!0,justify:"center",alignItems:"center"},o.map((function(e,t){return r.a.createElement(b.a,{item:!0,xs:12,sm:6,key:t},r.a.createElement(L,{key:t,id:t+1,name:e.restaurant.name,cuisine:e.restaurant.cuisines,address:e.restaurant.location.address,price:e.restaurant.price_range,currency:e.restaurant.currency,rating:e.restaurant.user_rating,reviews:e.restaurant.all_reviews_count,phone:e.restaurant.phone_numbers,distance:Object(p.getDistance)({latitude:Number(e.restaurant.location.latitude),longitude:Number(e.restaurant.location.longitude)},{latitude:Number(l[1]),longitude:Number(l[0])})}))})))))}var A=a(179),R=a(180),T=a(88),B=a.n(T);function U(){return r.a.createElement(A.a,{position:"static",color:"secondary"},r.a.createElement(R.a,null,r.a.createElement(B.a,null),r.a.createElement(g.a,{variant:"h5",style:{color:"#fff",fontFamily:"'Ubuntu', sans-serif",marginLeft:"5px"}},"Restaurant App")))}var _=function(){return r.a.createElement(l.a,{theme:s},r.a.createElement(U,null),r.a.createElement(M,null))},q=document.getElementById("root");c.a.render(r.a.createElement(_,null),q)},95:function(e,t,a){e.exports=a(142)}},[[95,1,2]]]);
//# sourceMappingURL=main.e05441a5.chunk.js.map