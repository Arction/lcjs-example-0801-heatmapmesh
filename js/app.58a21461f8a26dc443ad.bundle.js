(self.webpackChunk=self.webpackChunk||[]).push([[524],{44:(e,t,a)=>{const n=a(377),{lightningChart:s,IntensitySeriesTypes:i,IndividualPointFill:o,ColorHSV:d,Themes:h}=n;function r(e){return e*Math.PI/180}const l=s({resourcesBaseUrl:new URL(document.head.baseURI).origin+new URL(document.head.baseURI).pathname+"resources/"}).ChartXY({theme:h[new URLSearchParams(window.location.search).get("theme")||"darkGold"]||void 0});l.setTitle("Heatmap using IntensityMesh"),l.addHeatmapSeries({rows:20,columns:20,pixelate:!0,type:i.Mesh}).setStart({x:10,y:10}).setEnd({x:1990,y:1990}).invalidateColorsOnly(((e,t)=>d(70*Math.random(),.8))).setFillStyle(new o).invalidateGeometryOnly(((e,t,a)=>({x:a.x*Math.sin(r(e+1)),y:a.x*Math.sin(r(t+1))}))),l.addLegendBox().setAutoDispose({type:"max-width",maxWidth:.3}).add(l)}},e=>{e.O(0,[502],(()=>e(e.s=44))),e.O()}]);