(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const n=a(89),{lightningChart:s,IntensitySeriesTypes:i,IndividualPointFill:l,ColorHSV:o,Themes:d}=n;function h(e){return e*Math.PI/180}const r=s().ChartXY({theme:d[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0});r.setTitle("Heatmap using IntensityMesh"),r.addHeatmapSeries({rows:20,columns:20,start:{x:10,y:10},end:{x:1990,y:1990},pixelate:!0,type:i.Mesh}).invalidateColorsOnly(((e,t)=>o(70*Math.random(),.8))).setFillStyle(new l).invalidateGeometryOnly(((e,t,a)=>({x:a.x*Math.sin(h(e+1)),y:a.x*Math.sin(h(t+1))}))),r.addLegendBox().setAutoDispose({type:"max-width",maxWidth:.3}).add(r)}},e=>{e.O(0,[502],(()=>(44,e(e.s=44)))),e.O()}]);