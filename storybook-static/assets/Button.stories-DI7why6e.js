import{f as J}from"./index-BPHu6psy.js";import{j as K}from"./jsx-runtime-CkxqCPlQ.js";import"./index-DZLKizrv.js";import"./index-DJO9vBfz.js";const _=({primary:E=!1,size:I="medium",backgroundColor:P,label:V,color:L,border:N,fontSize:O,padding:H,borderRadius:U,width:W,height:$,disabled:A=!1,...F})=>{const G=E?"storybook-button--primary":"storybook-button--secondary";return K.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${I}`,G].join(" "),style:{width:W,height:$,fontSize:O,padding:H,backgroundColor:P,color:L,border:N,borderRadius:U},disabled:A,...F,children:V})};_.__docgenInfo={description:"Primary UI component for user interaction",methods:[],displayName:"Button",props:{primary:{required:!1,tsType:{name:"boolean"},description:"Is this the principal call to action on the page?",defaultValue:{value:"false",computed:!1}},backgroundColor:{required:!1,tsType:{name:"string"},description:"What background color to use"},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium' | 'large'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"},{name:"literal",value:"'large'"}]},description:"How large should the button be?",defaultValue:{value:"'medium'",computed:!1}},label:{required:!0,tsType:{name:"string"},description:"Button contents"},disabled:{required:!1,tsType:{name:"boolean"},description:"Optional click handler",defaultValue:{value:"false",computed:!1}},border:{required:!1,tsType:{name:"string"},description:""},color:{required:!1,tsType:{name:"string"},description:""},fontSize:{required:!1,tsType:{name:"string"},description:""},padding:{required:!1,tsType:{name:"string"},description:""},borderRadius:{required:!1,tsType:{name:"string"},description:""},width:{required:!1,tsType:{name:"string"},description:""},height:{required:!1,tsType:{name:"string"},description:""},onClick:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""}}};const Z={title:"Example/Button",component:_,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}},args:{onClick:J()}},e={args:{primary:!0,label:"默认按钮",backgroundColor:"red"}},r={args:{primary:!0,label:"删除按钮",backgroundColor:"red"}},a={args:{primary:!0,label:"圆",borderRadius:"50%",width:"50px",height:"50px"}},s={args:{label:"禁用按钮",disabled:!0,backgroundColor:"#f5f5f5",color:"#1e1e1e"}},o={args:{label:"Button"}},t={args:{label:"Secondarys",border:"2px solid red"}},n={args:{size:"large",label:"大按钮"}},l={args:{size:"small",label:"小按钮",fontSize:"12px",padding:"8px"}};var i,d,c;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: '默认按钮',
    backgroundColor: "red"
  }
}`,...(c=(d=e.parameters)==null?void 0:d.docs)==null?void 0:c.source}}};var p,u,m;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: '删除按钮',
    backgroundColor: "red"
  }
}`,...(m=(u=r.parameters)==null?void 0:u.docs)==null?void 0:m.source}}};var g,b,y;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: '圆',
    borderRadius: "50%",
    width: "50px",
    height: "50px"
  }
}`,...(y=(b=a.parameters)==null?void 0:b.docs)==null?void 0:y.source}}};var f,S,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    label: '禁用按钮',
    disabled: true,
    backgroundColor: '#f5f5f5',
    color: '#1e1e1e'
  }
}`,...(h=(S=s.parameters)==null?void 0:S.docs)==null?void 0:h.source}}};var k,x,T;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`{
  args: {
    label: 'Button'
  }
}`,...(T=(x=o.parameters)==null?void 0:x.docs)==null?void 0:T.source}}};var q,C,v;t.parameters={...t.parameters,docs:{...(q=t.parameters)==null?void 0:q.docs,source:{originalSource:`{
  args: {
    label: 'Secondarys',
    border: "2px solid red"
  }
}`,...(v=(C=t.parameters)==null?void 0:C.docs)==null?void 0:v.source}}};var z,w,B;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`{
  args: {
    size: 'large',
    label: '大按钮'
  }
}`,...(B=(w=n.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var j,D,R;l.parameters={...l.parameters,docs:{...(j=l.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    size: 'small',
    label: '小按钮',
    fontSize: "12px",
    padding: "8px"
  }
}`,...(R=(D=l.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};const ee=["Primary","Danger","Shape","Disabled","Secondary","Secondarys","Large","Small"];export{r as Danger,s as Disabled,n as Large,e as Primary,o as Secondary,t as Secondarys,a as Shape,l as Small,ee as __namedExportsOrder,Z as default};
