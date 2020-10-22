(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([[28],{"339e":function(t,a,n){"use strict";n.r(a);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("q-page-container",{staticStyle:{height:"100vh",overflow:"hidden"}},[a("q-dialog",{attrs:{persistent:""},model:{value:e.newNamePrompt,callback:function(t){e.newNamePrompt=t},expression:"newNamePrompt"}},[a("q-card",{staticStyle:{"min-width":"350px"}},[a("q-card-section",[a("div",{staticClass:"text-h6"},[e._v("Name")])]),a("q-card-section",{staticClass:"q-pt-none"},[a("q-input",{attrs:{dense:"",autofocus:""},on:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.createNew()}},model:{value:e.newName,callback:function(t){e.newName=t},expression:"newName"}})],1),a("q-card-actions",{staticClass:"text-primary",attrs:{align:"right"}},[a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Cancel"}}),a("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{flat:"",label:"Create"},on:{click:function(t){return e.createNew()}}})],1)],1)],1),a("q-menu",{attrs:{"context-menu":""}},[a("q-list",{staticStyle:{"min-width":"100px"},attrs:{dense:""}},[a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(){e.newNamePrompt=!0,e.newName="",e.newNameType="file"}}},[a("q-item-section",[e._v("New file")])],1),a("q-separator"),a("q-item",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{clickable:""},on:{click:function(){e.newNamePrompt=!0,e.newName="",e.newNameType="folder"}}},[a("q-item-section",[e._v("New folder")])],1),a("q-separator")],1)],1),a("q-page",[a("user-header-bar",{staticStyle:{"border-bottom":"1px solid black"},attrs:{buttons:{before:[{icon:"fas fa-search",event:"search"}],after:[{icon:"card"===e.viewMode?"fas fa-th-list":"fas fa-th-large",click:function(){e.viewMode="card"===e.viewMode?"table":"card"}},{icon:"fas fa-sync-alt",event:"search"}]},title:"Files"},on:{search:e.searchDocuments,"show-uploader":e.showUploader}}),a("div",{staticClass:"row",staticStyle:{height:"100vh","overflow-y":"scroll"}},[a("div",{staticClass:"col-2 col-sm-12 col-md-2 col-lg-2 col-xl-2 col-xs-12"},[e.selectedFile&&!e.selectedFile.is_dir?a("q-card",{staticStyle:{background:"transparent"},attrs:{flat:""}},[a("q-card-section",[a("span",{staticClass:"text-bold"},[e._v(e._s(e.selectedFile.name))]),a("br")]),a("q-card-section",[e._v("\n            Size "),a("span",{staticClass:"text-bold"},[e._v(e._s(parseInt(e.selectedFile.document_content[0].size/1024))+" Kb")]),a("br"),e._v("\n            Type "),a("span",{staticClass:"text-bold"},[e._v(e._s(e.selectedFile.mime_type))])]),a("q-card-section",[a("q-list",{attrs:{separator:"",bordered:""}},[a("q-item",{attrs:{clickable:""},on:{click:function(t){return e.fileDownload(e.selectedFile)}}},[a("q-item-section",[e._v("Download")])],1),e.isEditable(e.selectedFile)?a("q-item",{attrs:{clickable:""},on:{click:function(t){return e.openEditor(e.selectedFile)}}},[a("q-item-section",[e._v("Open")])],1):e._e(),e.isViewable(e.selectedFile)?a("q-item",{attrs:{clickable:""},on:{click:function(t){return e.openViewer(e.selectedFile)}}},[a("q-item-section",[e._v("View")])],1):e._e()],1)],1)],1):e._e(),a("q-card",{attrs:{flat:""}},[a("q-card-section",[a("q-list",{attrs:{bordered:"",separator:""}},[a("q-item",{attrs:{clickable:""},on:{click:function(t){return e.$router.push("/apps/document/new")}}},[a("q-item-section",[e._v("New document")])],1),a("q-item",{attrs:{clickable:""},on:{click:function(t){return e.$router.push("/apps/spreadsheet/new")}}},[a("q-item-section",[e._v("New spreadsheet")])],1),a("q-item",{attrs:{clickable:""},on:{click:function(){e.newNamePrompt=!0,e.newName="",e.newNameType="file"}}},[a("q-item-section",[e._v("New file")])],1)],1)],1),a("q-card-section")],1),a("q-card",{staticStyle:{border:"1px dashed black","font-size":"10px","box-shadow":"none"}},[a("file-upload",{ref:"upload",staticStyle:{height:"300px",width:"100%","text-align":"left"},attrs:{multiple:!0,drop:!0,"drop-directory":!0,"post-action":"/post.method","put-action":"/put.method"},on:{"input-file":e.uploadFile},model:{value:e.uploadedFiles,callback:function(t){e.uploadedFiles=t},expression:"uploadedFiles"}},[a("div",{staticClass:"container"},[a("div",{staticClass:"row q-pa-xs"},[a("div",{staticClass:"col-12 "},[a("table",{staticStyle:{width:"100%"}},[e.uploadedFiles.length>0?a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"left"}},[e._v("File")]),a("th",{staticStyle:{"text-align":"right"}},[e._v("Size")]),a("th",{staticStyle:{"text-align":"right"}},[e._v("Status")])])]):e._e(),a("tbody",e._l(e.uploadedFiles,(function(t){return a("tr",[a("td",{staticStyle:{"text-align":"left"}},[e._v(" "+e._s(t.name))]),a("td",{staticStyle:{"text-align":"right"}},[e._v(e._s(parseInt(t.size/1024))+" Kb")]),a("td",{staticStyle:{"text-align":"right"}},[e._v(e._s(t.status))])])})),0)])])]),a("div",{staticClass:"row",staticStyle:{padding:"10px"}},[a("div",{staticClass:"col-12",staticStyle:{height:"100%"}},[0===e.uploadedFiles.length?a("span",{staticClass:"vertical-middle"},[e._v("\n                Click here to select files, or drag and drop files here to upload")]):e._e()])])])])],1)],1),a("div",{staticClass:"col-10 col-sm-12 col-md-10 col-lg-10 col-xl-10 col-xs-12"},["table"===e.viewMode?a("paginated-table-view",{attrs:{items:e.files},on:{"item-deleted":e.itemDelete,"item-rename":e.itemRename,"item-double-clicked":e.fileDblClicked,"item-clicked":e.fileClicked}}):e._e(),"card"===e.viewMode?a("paginated-card-view",{attrs:{items:e.files},on:{"item-deleted":e.itemDelete,"item-rename":e.itemRename,"item-clicked":e.fileClicked,"item-double-clicked":e.fileDblClicked}}):e._e()],1)])],1)],1)},o=[],s=(n("8e6e"),n("8a81"),n("ac6a"),n("cadf"),n("456d"),n("551c"),n("06db"),n("aef6"),n("7f7f"),n("28a5"),n("9523")),r=n.n(s),l=(n("34ef"),n("2f62"));function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function d(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r()(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e){for(var t=window.atob(e),a=t.length,n=new Uint8Array(a),i=0;i<a;i++){var o=t.charCodeAt(i);n[i]=o}return n}function u(e,t,a){var n=new Blob([a],{type:t}),i=document.createElement("a");i.href=window.URL.createObjectURL(n);var o=e;i.download=o,i.click()}var f={name:"FileBrowser",watch:{currentPath:function(e){console.log("Current path changed",e),localStorage.setItem("_last_current_path",e)}},methods:d(d({searchDocuments:function(e){console.log("search documents",e),this.refreshData(e)},itemRename:function(e){console.log("rename item",e)},fileDblClicked:function(e){console.log("Item double click",e),e.is_dir?this.fileDownload(e):this.isEditable(e)?this.openEditor(e):this.isViewable(e)?this.openViewer(e):this.fileDownload(e)},isEditable:function(e){var t=["ddoc","dsheet"],a="";return e.document_name.indexOf(".")>-1&&(a=e.document_name.split(".")[1]),console.log("Check file extension",a),t.filter((function(e){return e===a})).length>0},isViewable:function(e){var t=["jpg","png","gif","txt","pdf","mp4","mp3","wav","mkv"],a="";return e.document_name.indexOf(".")>-1&&(a=e.document_name.split(".")[1]),t.filter((function(e){return e===a})).length>0},openEditor:function(e){var t=e.document_name.split(".")[1];switch(t){case"ddoc":return void this.$router.push("/apps/document/"+e.reference_id);case"dsheet":return void this.$router.push("/apps/spreadsheet/"+e.reference_id)}},openViewer:function(e){var t=e.document_name.split(".")[1];switch(t){case"ddoc":return void this.$router.push("/apps/document/"+e.reference_id);case"dsheet":return void this.$router.push("/apps/spreadsheet/"+e.reference_id)}},itemDelete:function(e){console.log("Delete file",e);var t=this;this.deleteRow({tableName:"document",reference_id:e.reference_id}).then((function(){t.refreshData()})).catch((function(e){t.$q.notify({message:e[0].title})}))},fileClicked:function(e){console.log("file clicked",e),this.selectedFile=e},fileDownload:function(e){var t=this;if(console.log("File clicked",e),e.is_dir){if("."===e.name)t.refreshData();else if(".."===e.name){var a=this.currentPath.split("/");a.length>1&&a.pop();var n=a.join("/");console.log("one level up %s",n),this.currentPath=n}else t.currentPath=e.document_path+e.name;t.refreshData()}else t.$q.loading=!0,t.loadData({tableName:"document",params:{query:JSON.stringify([{column:"reference_id",operator:"is",value:e.reference_id}]),included_relations:"document_content",page:{size:1}}}).then((function(e){t.$q.loading=!1;var a=e.data[0];u(a.document_name,a.mime_type,m(e.data[0].document_content[0].contents))}))},createNew:function(){console.log("Create ",this.newNameType,this.newName,this.currentPath);var e=this,t={document_name:this.newName,tableName:"document",document_extension:this.newName.indexOf(".")>-1?this.newName.split(".")[1]:"",mime_type:"",document_path:this.currentPath+"/",document_content:[{name:this.newName,type:"text/plain",path:this.currentPath,contents:"data:base64,"+btoa("")}]};"folder"===this.newNameType&&(t.document_extension="folder",t.document_content=[]),this.createRow(t).then((function(t){e.refreshData(),e.newNamePrompt=!1})).catch((function(t){console.log("Failed to create",t),e.$q.notify({message:JSON.stringify(t)})}))}},Object(l["b"])(["loadData","createRow","loadModel","deleteRow"])),{},{handleDataLoad:function(e){var t=this;null!==e.data?(console.log("Documents ",e),t.files=e.data.map((function(e){return e.icon="fas fa-file",e.name=e.document_name,e.path=e.document_path,e.name.endsWith("xlsx")||e.name.endsWith("xls")?e.icon="fas fa-file-excel":e.name.endsWith(".doc")||e.name.endsWith("docx")?e.icon="fas fa-file-word":e.name.endsWith("dsheet")?e.icon="fas fa-border-none":e.name.endsWith("ddoc")?e.icon="fas fa-file-alt":e.name.endsWith("ppt")||e.name.endsWith("pptx")?e.icon="fas fa-file-powerpoint":e.name.endsWith("pdf")?e.icon="fas fa-file-pdf":e.name.endsWith("txt")||e.name.endsWith("yaml")||e.name.endsWith("json")?e.icon="fas fa-file-alt":e.name.endsWith("html")||e.name.endsWith("xml")||e.name.endsWith("css")?e.icon="fas fa-file-code":e.name.endsWith("csv")?e.icon="fas fa-file-csv":e.name.endsWith("jpg")||e.name.endsWith("tiff")||e.name.endsWith("gif")||e.name.endsWith("png")?e.icon="fas fa-image":e.name.endsWith("mp3")||e.name.endsWith("wav")||e.name.endsWith("riff")||e.name.endsWith("ogg")?e.icon="fas fa-file-audio":e.name.endsWith("mp4")||e.name.endsWith("mkv")||e.name.endsWith("riff")||e.name.endsWith("m4a")?e.icon="fas fa-file-video":(e.name.endsWith("zip")||e.name.endsWith("rar")||e.name.endsWith("gz")||e.name.endsWith("tar"))&&(e.icon="fas fa-file-archive"),"folder"===e.document_extension&&(e.icon="fas fa-folder",e.is_dir=!0,e.color="rgb(224, 135, 94)"),e})),""!==t.currentPath&&(t.files.unshift({name:"..",path:"..",icon:"fas fa-folder",is_dir:!0,color:"rgb(224, 135, 94)"}),t.files.unshift({name:".",path:".",icon:"fas fa-folder",is_dir:!0,color:"rgb(224, 135, 94)"}))):t.$q.notify({message:"Error fetching files"})},refreshData:function(e){var t=this;t.selectedFile=null;var a={tableName:"document",params:{query:JSON.stringify([{column:"document_path",operator:"is",value:t.currentPath+"/"}]),page:{size:100}}};e&&e.trim().length>0&&(a.params.query=JSON.stringify([{column:"document_name",operator:"contains",value:e}])),t.files=[],console.log("Query data"),t.loadData(a).then((function(e){console.log("data load complete"),t.handleDataLoad(e)}))},ensureDirectory:function(e){var t=this;if("/"!==e&&!t.directoryEnsureCache[e]){t.directoryEnsureCache[e]=!0;var a=e.split("/"),n=a[a.length-1];a.pop();var i=a.join("/")+"/";console.log("Ensure directory",e);var o=[{column:"document_name",operator:"is",value:n},{column:"document_path",operator:"is",value:i},{column:"document_extension",operator:"is",value:"folder"}];console.log("Document search query",o),t.loadData({tableName:"document",params:{query:JSON.stringify(o)}}).then((function(a){if(console.log("Ensure directory result",a),0===a.data.length){console.log("Directory does not exist",e);var o={document_name:n,tableName:"document",document_extension:"folder",mime_type:"",document_path:i,document_content:[]};console.log("Create folder request",o),t.createRow(o).then((function(e){t.refreshData()})).catch((function(e){console.log("Failed to create folder",e),t.$q.notify({message:"Failed to create folder: "+JSON.stringify(e)})}))}}))}},uploadFile:function(t,a){var n=this;t.status="Queued";var i=function(i){return new Promise((function(o,s){var r=a||i.name,l=(i.type,new FileReader);t.status="Reading",l.onload=function(e){t.status="Uploading";var r=n.currentPath+"/";if(i.webkitRelativePath&&i.webkitRelativePath.length>0){var l=i.webkitRelativePath.split("/");l.pop(),r=n.currentPath+"/"+l.join("/")+"/"}var c=r.split("/");c.length>2&&(c.pop(),n.ensureDirectory(c.join("/")));var d={tableName:"document",document_content:[{name:a||i.name,contents:e.target.result,type:i.type,path:r}],document_name:a||i.name,document_path:r,mime_type:i.type,document_extension:i.name.indexOf(".")>-1?i.name.split(".")[1]:""};n.createRow(d).then((function(){t.status="Uploaded",n.refreshData(),o()})).catch(s)},l.onerror=function(){console.log("Failed to load file onerror",e,arguments),s(r)},l.readAsDataURL(i)}))};return i(t.file)},showUploader:function(){console.log("show uploader",this.showUploadComponent);var e=this;this.uploadedFiles=[],e.$refs.upload.$el.click()}}),data:function(){return d(d({searchInput:""},Object(l["c"])(["endpoint"])),{},{directoryEnsureCache:{},newNamePrompt:!1,viewMode:"card",uploadedFiles:[],newName:"",newNameType:"",currentPath:"",selectedFile:null,showSearchInput:!1,files:[],showUploadComponent:!1,viewParameters:{tableName:"document"},containerId:"id-"+(new Date).getMilliseconds(),screenWidth:(window.screen.width<1200?window.screen.width:1200)+"px"})},mounted:function(){var e=this;this.containerId="id-"+(new Date).getMilliseconds(),console.log("Mounted FilesBrowser",this.containerId);var t=localStorage.getItem("_last_current_path");t&&(this.currentPath=t),e.refreshData(),document.querySelector("html").ondragenter=function(e){return e.stopPropagation(),!1},document.querySelector("html").ondragover=function(e){return e.stopPropagation(),!1},document.ondrop=function(t){if(console.log("File(s) dropped"),t.preventDefault(),t.dataTransfer.items){for(var a=0;a<t.dataTransfer.items.length;a++)if("file"===t.dataTransfer.items[a].kind){var n=t.dataTransfer.items[a].getAsFile();console.log("... file["+a+"].name = "+n.name),e.uploadFile({file:n})}}else for(a=0;a<t.dataTransfer.files.length;a++)console.log("... file["+a+"].name = "+t.dataTransfer.files[a].name),e.uploadFile({file:t.dataTransfer.files[a]})},document.onpaste=function(t){var a=(t.clipboardData||t.originalEvent.clipboardData).items;for(var n in console.log("Items",a),a){var i=a[n];if(console.log("Items",n,i,i),window.item=i,"file"===i.kind){var o=i.getAsFile();console.log("Upload blob",o);var s=o.name.split("."),r=s[0]+" pasted at "+(new Date).toLocaleString()+"."+s[1];e.uploadFile({file:o},r)}}}}},p=f,h=n("2877"),v=n("09e3"),w=n("24e8"),g=n("f09f"),b=n("a370"),_=n("27f9"),y=n("4b7e"),k=n("9c40"),q=n("4e73"),x=n("1c1c"),N=n("66e5"),D=n("4074"),C=n("eb85"),P=n("9989"),F=n("de5e"),S=n("7f67"),O=n("eebe"),W=n.n(O),j=Object(h["a"])(p,i,o,!1,null,null,null);a["default"]=j.exports;W()(j,"components",{QPageContainer:v["a"],QDialog:w["a"],QCard:g["a"],QCardSection:b["a"],QInput:_["a"],QCardActions:y["a"],QBtn:k["a"],QMenu:q["a"],QList:x["a"],QItem:N["a"],QItemSection:D["a"],QSeparator:C["a"],QPage:P["a"],QPageSticky:F["a"]}),W()(j,"directives",{ClosePopup:S["a"]})}}]);