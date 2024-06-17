var e;import{t,m as i}from"./index-8027a4c8.js";import"./index-8c106f3c.js";
/*!-----------------------------------------------------------------------------
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Version: 0.49.0(383fdf3fc0e1e1a024068b8d0fd4f3dcbae74d04)
 * Released under the MIT license
 * https://github.com/microsoft/monaco-editor/blob/main/LICENSE.txt
 *-----------------------------------------------------------------------------*/var s=Object.defineProperty,r=Object.getOwnPropertyDescriptor,n=Object.getOwnPropertyNames,a=Object.prototype.hasOwnProperty,o=(e,t,i,o)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let l of n(t))a.call(e,l)||l===i||s(e,l,{get:()=>t[l],enumerable:!(o=r(t,l))||o.enumerable});return e},l={};o(l,i,"default");var c=class{constructor(e,t){this._modeId=e,this._defaults=t,this._worker=null,this._client=null,this._configChangeListener=this._defaults.onDidChange((()=>this._stopWorker())),this._updateExtraLibsToken=0,this._extraLibsChangeListener=this._defaults.onDidExtraLibsChange((()=>this._updateExtraLibs()))}dispose(){this._configChangeListener.dispose(),this._extraLibsChangeListener.dispose(),this._stopWorker()}_stopWorker(){this._worker&&(this._worker.dispose(),this._worker=null),this._client=null}async _updateExtraLibs(){if(!this._worker)return;const e=++this._updateExtraLibsToken,t=await this._worker.getProxy();this._updateExtraLibsToken===e&&t.updateExtraLibs(this._defaults.getExtraLibs())}_getClient(){return this._client||(this._client=(async()=>(this._worker=l.editor.createWebWorker({moduleId:"vs/language/typescript/tsWorker",label:this._modeId,keepIdleModels:!0,createData:{compilerOptions:this._defaults.getCompilerOptions(),extraLibs:this._defaults.getExtraLibs(),customWorkerPath:this._defaults.workerOptions.customWorkerPath,inlayHintsOptions:this._defaults.inlayHintsOptions}}),this._defaults.getEagerModelSync()?await this._worker.withSyncedResources(l.editor.getModels().filter((e=>e.getLanguageId()===this._modeId)).map((e=>e.uri))):await this._worker.getProxy()))()),this._client}async getLanguageServiceWorker(...e){const t=await this._getClient();return this._worker&&await this._worker.withSyncedResources(e),t}},d={};function u(e,t,i=0){if("string"==typeof e)return e;if(void 0===e)return"";let s="";if(i){s+=t;for(let e=0;e<i;e++)s+="  "}if(s+=e.messageText,i++,e.next)for(const r of e.next)s+=u(r,t,i);return s}function g(e){return e?e.map((e=>e.text)).join(""):""}d["lib.d.ts"]=!0,d["lib.decorators.d.ts"]=!0,d["lib.decorators.legacy.d.ts"]=!0,d["lib.dom.d.ts"]=!0,d["lib.dom.iterable.d.ts"]=!0,d["lib.es2015.collection.d.ts"]=!0,d["lib.es2015.core.d.ts"]=!0,d["lib.es2015.d.ts"]=!0,d["lib.es2015.generator.d.ts"]=!0,d["lib.es2015.iterable.d.ts"]=!0,d["lib.es2015.promise.d.ts"]=!0,d["lib.es2015.proxy.d.ts"]=!0,d["lib.es2015.reflect.d.ts"]=!0,d["lib.es2015.symbol.d.ts"]=!0,d["lib.es2015.symbol.wellknown.d.ts"]=!0,d["lib.es2016.array.include.d.ts"]=!0,d["lib.es2016.d.ts"]=!0,d["lib.es2016.full.d.ts"]=!0,d["lib.es2017.d.ts"]=!0,d["lib.es2017.full.d.ts"]=!0,d["lib.es2017.intl.d.ts"]=!0,d["lib.es2017.object.d.ts"]=!0,d["lib.es2017.sharedmemory.d.ts"]=!0,d["lib.es2017.string.d.ts"]=!0,d["lib.es2017.typedarrays.d.ts"]=!0,d["lib.es2018.asyncgenerator.d.ts"]=!0,d["lib.es2018.asynciterable.d.ts"]=!0,d["lib.es2018.d.ts"]=!0,d["lib.es2018.full.d.ts"]=!0,d["lib.es2018.intl.d.ts"]=!0,d["lib.es2018.promise.d.ts"]=!0,d["lib.es2018.regexp.d.ts"]=!0,d["lib.es2019.array.d.ts"]=!0,d["lib.es2019.d.ts"]=!0,d["lib.es2019.full.d.ts"]=!0,d["lib.es2019.intl.d.ts"]=!0,d["lib.es2019.object.d.ts"]=!0,d["lib.es2019.string.d.ts"]=!0,d["lib.es2019.symbol.d.ts"]=!0,d["lib.es2020.bigint.d.ts"]=!0,d["lib.es2020.d.ts"]=!0,d["lib.es2020.date.d.ts"]=!0,d["lib.es2020.full.d.ts"]=!0,d["lib.es2020.intl.d.ts"]=!0,d["lib.es2020.number.d.ts"]=!0,d["lib.es2020.promise.d.ts"]=!0,d["lib.es2020.sharedmemory.d.ts"]=!0,d["lib.es2020.string.d.ts"]=!0,d["lib.es2020.symbol.wellknown.d.ts"]=!0,d["lib.es2021.d.ts"]=!0,d["lib.es2021.full.d.ts"]=!0,d["lib.es2021.intl.d.ts"]=!0,d["lib.es2021.promise.d.ts"]=!0,d["lib.es2021.string.d.ts"]=!0,d["lib.es2021.weakref.d.ts"]=!0,d["lib.es2022.array.d.ts"]=!0,d["lib.es2022.d.ts"]=!0,d["lib.es2022.error.d.ts"]=!0,d["lib.es2022.full.d.ts"]=!0,d["lib.es2022.intl.d.ts"]=!0,d["lib.es2022.object.d.ts"]=!0,d["lib.es2022.regexp.d.ts"]=!0,d["lib.es2022.sharedmemory.d.ts"]=!0,d["lib.es2022.string.d.ts"]=!0,d["lib.es2023.array.d.ts"]=!0,d["lib.es2023.d.ts"]=!0,d["lib.es2023.full.d.ts"]=!0,d["lib.es5.d.ts"]=!0,d["lib.es6.d.ts"]=!0,d["lib.esnext.d.ts"]=!0,d["lib.esnext.full.d.ts"]=!0,d["lib.esnext.intl.d.ts"]=!0,d["lib.scripthost.d.ts"]=!0,d["lib.webworker.d.ts"]=!0,d["lib.webworker.importscripts.d.ts"]=!0,d["lib.webworker.iterable.d.ts"]=!0;var p=class{constructor(e){this._worker=e}_textSpanToRange(e,t){let i=e.getPositionAt(t.start),s=e.getPositionAt(t.start+t.length),{lineNumber:r,column:n}=i,{lineNumber:a,column:o}=s;return{startLineNumber:r,startColumn:n,endLineNumber:a,endColumn:o}}},m=class{constructor(e){this._worker=e,this._libFiles={},this._hasFetchedLibFiles=!1,this._fetchLibFilesPromise=null}isLibFile(e){return!!e&&0===e.path.indexOf("/lib.")&&!!d[e.path.slice(1)]}getOrCreateModel(e){const i=l.Uri.parse(e),s=l.editor.getModel(i);if(s)return s;if(this.isLibFile(i)&&this._hasFetchedLibFiles)return l.editor.createModel(this._libFiles[i.path.slice(1)],"typescript",i);const r=t.getExtraLibs()[e];return r?l.editor.createModel(r.content,"typescript",i):null}_containsLibFile(e){for(let t of e)if(this.isLibFile(t))return!0;return!1}async fetchLibFilesIfNecessary(e){this._containsLibFile(e)&&await this._fetchLibFiles()}_fetchLibFiles(){return this._fetchLibFilesPromise||(this._fetchLibFilesPromise=this._worker().then((e=>e.getLibFiles())).then((e=>{this._hasFetchedLibFiles=!0,this._libFiles=e}))),this._fetchLibFilesPromise}},h=class extends p{constructor(e,t,i,s){super(s),this._libFiles=e,this._defaults=t,this._selector=i,this._disposables=[],this._listener=Object.create(null);const r=e=>{if(e.getLanguageId()!==i)return;const t=()=>{const{onlyVisible:t}=this._defaults.getDiagnosticsOptions();t?e.isAttachedToEditor()&&this._doValidate(e):this._doValidate(e)};let s;const r=e.onDidChangeContent((()=>{clearTimeout(s),s=window.setTimeout(t,500)})),n=e.onDidChangeAttached((()=>{const{onlyVisible:i}=this._defaults.getDiagnosticsOptions();i&&(e.isAttachedToEditor()?t():l.editor.setModelMarkers(e,this._selector,[]))}));this._listener[e.uri.toString()]={dispose(){r.dispose(),n.dispose(),clearTimeout(s)}},t()},n=e=>{l.editor.setModelMarkers(e,this._selector,[]);const t=e.uri.toString();this._listener[t]&&(this._listener[t].dispose(),delete this._listener[t])};this._disposables.push(l.editor.onDidCreateModel((e=>r(e)))),this._disposables.push(l.editor.onWillDisposeModel(n)),this._disposables.push(l.editor.onDidChangeModelLanguage((e=>{n(e.model),r(e.model)}))),this._disposables.push({dispose(){for(const e of l.editor.getModels())n(e)}});const a=()=>{for(const e of l.editor.getModels())n(e),r(e)};this._disposables.push(this._defaults.onDidChange(a)),this._disposables.push(this._defaults.onDidExtraLibsChange(a)),l.editor.getModels().forEach((e=>r(e)))}dispose(){this._disposables.forEach((e=>e&&e.dispose())),this._disposables=[]}async _doValidate(e){const t=await this._worker(e.uri);if(e.isDisposed())return;const i=[],{noSyntaxValidation:s,noSemanticValidation:r,noSuggestionDiagnostics:n}=this._defaults.getDiagnosticsOptions();s||i.push(t.getSyntacticDiagnostics(e.uri.toString())),r||i.push(t.getSemanticDiagnostics(e.uri.toString())),n||i.push(t.getSuggestionDiagnostics(e.uri.toString()));const a=await Promise.all(i);if(!a||e.isDisposed())return;const o=a.reduce(((e,t)=>t.concat(e)),[]).filter((e=>-1===(this._defaults.getDiagnosticsOptions().diagnosticCodesToIgnore||[]).indexOf(e.code))),c=o.map((e=>e.relatedInformation||[])).reduce(((e,t)=>t.concat(e)),[]).map((e=>e.file?l.Uri.parse(e.file.fileName):null));await this._libFiles.fetchLibFilesIfNecessary(c),e.isDisposed()||l.editor.setModelMarkers(e,this._selector,o.map((t=>this._convertDiagnostics(e,t))))}_convertDiagnostics(e,t){const i=t.start||0,s=t.length||1,{lineNumber:r,column:n}=e.getPositionAt(i),{lineNumber:a,column:o}=e.getPositionAt(i+s),c=[];return t.reportsUnnecessary&&c.push(l.MarkerTag.Unnecessary),t.reportsDeprecated&&c.push(l.MarkerTag.Deprecated),{severity:this._tsDiagnosticCategoryToMarkerSeverity(t.category),startLineNumber:r,startColumn:n,endLineNumber:a,endColumn:o,message:u(t.messageText,"\n"),code:t.code.toString(),tags:c,relatedInformation:this._convertRelatedInformation(e,t.relatedInformation)}}_convertRelatedInformation(e,t){if(!t)return[];const i=[];return t.forEach((t=>{let s=e;if(t.file&&(s=this._libFiles.getOrCreateModel(t.file.fileName)),!s)return;const r=t.start||0,n=t.length||1,{lineNumber:a,column:o}=s.getPositionAt(r),{lineNumber:l,column:c}=s.getPositionAt(r+n);i.push({resource:s.uri,startLineNumber:a,startColumn:o,endLineNumber:l,endColumn:c,message:u(t.messageText,"\n")})})),i}_tsDiagnosticCategoryToMarkerSeverity(e){switch(e){case 1:return l.MarkerSeverity.Error;case 3:return l.MarkerSeverity.Info;case 0:return l.MarkerSeverity.Warning;case 2:return l.MarkerSeverity.Hint}return l.MarkerSeverity.Info}},b=class e extends p{get triggerCharacters(){return["."]}async provideCompletionItems(t,i,s,r){const n=t.getWordUntilPosition(i),a=new l.Range(i.lineNumber,n.startColumn,i.lineNumber,n.endColumn),o=t.uri,c=t.getOffsetAt(i),d=await this._worker(o);if(t.isDisposed())return;const u=await d.getCompletionsAtPosition(o.toString(),c);return u&&!t.isDisposed()?{suggestions:u.entries.map((s=>{let r=a;if(s.replacementSpan){const e=t.getPositionAt(s.replacementSpan.start),i=t.getPositionAt(s.replacementSpan.start+s.replacementSpan.length);r=new l.Range(e.lineNumber,e.column,i.lineNumber,i.column)}const n=[];return void 0!==s.kindModifiers&&-1!==s.kindModifiers.indexOf("deprecated")&&n.push(l.languages.CompletionItemTag.Deprecated),{uri:o,position:i,offset:c,range:r,label:s.name,insertText:s.name,sortText:s.sortText,kind:e.convertKind(s.kind),tags:n}}))}:void 0}async resolveCompletionItem(t,i){const s=t,r=s.uri,n=s.position,a=s.offset,o=await this._worker(r),l=await o.getCompletionEntryDetails(r.toString(),a,s.label);return l?{uri:r,position:n,label:l.name,kind:e.convertKind(l.kind),detail:g(l.displayParts),documentation:{value:e.createDocumentationString(l)}}:s}static convertKind(e){switch(e){case k.primitiveType:case k.keyword:return l.languages.CompletionItemKind.Keyword;case k.variable:case k.localVariable:return l.languages.CompletionItemKind.Variable;case k.memberVariable:case k.memberGetAccessor:case k.memberSetAccessor:return l.languages.CompletionItemKind.Field;case k.function:case k.memberFunction:case k.constructSignature:case k.callSignature:case k.indexSignature:return l.languages.CompletionItemKind.Function;case k.enum:return l.languages.CompletionItemKind.Enum;case k.module:return l.languages.CompletionItemKind.Module;case k.class:return l.languages.CompletionItemKind.Class;case k.interface:return l.languages.CompletionItemKind.Interface;case k.warning:return l.languages.CompletionItemKind.File}return l.languages.CompletionItemKind.Property}static createDocumentationString(e){let t=g(e.documentation);if(e.tags)for(const i of e.tags)t+=`\n\n${f(i)}`;return t}};function f(e){let t=`*@${e.name}*`;if("param"===e.name&&e.text){const[i,...s]=e.text;t+=`\`${i.text}\``,s.length>0&&(t+=` — ${s.map((e=>e.text)).join(" ")}`)}else Array.isArray(e.text)?t+=` — ${e.text.map((e=>e.text)).join(" ")}`:e.text&&(t+=` — ${e.text}`);return t}var y=class e extends p{constructor(){super(...arguments),this.signatureHelpTriggerCharacters=["(",","]}static _toSignatureHelpTriggerReason(e){switch(e.triggerKind){case l.languages.SignatureHelpTriggerKind.TriggerCharacter:return e.triggerCharacter?e.isRetrigger?{kind:"retrigger",triggerCharacter:e.triggerCharacter}:{kind:"characterTyped",triggerCharacter:e.triggerCharacter}:{kind:"invoked"};case l.languages.SignatureHelpTriggerKind.ContentChange:return e.isRetrigger?{kind:"retrigger"}:{kind:"invoked"};case l.languages.SignatureHelpTriggerKind.Invoke:default:return{kind:"invoked"}}}async provideSignatureHelp(t,i,s,r){const n=t.uri,a=t.getOffsetAt(i),o=await this._worker(n);if(t.isDisposed())return;const l=await o.getSignatureHelpItems(n.toString(),a,{triggerReason:e._toSignatureHelpTriggerReason(r)});if(!l||t.isDisposed())return;const c={activeSignature:l.selectedItemIndex,activeParameter:l.argumentIndex,signatures:[]};return l.items.forEach((e=>{const t={label:"",parameters:[]};t.documentation={value:g(e.documentation)},t.label+=g(e.prefixDisplayParts),e.parameters.forEach(((i,s,r)=>{const n=g(i.displayParts),a={label:n,documentation:{value:g(i.documentation)}};t.label+=n,t.parameters.push(a),s<r.length-1&&(t.label+=g(e.separatorDisplayParts))})),t.label+=g(e.suffixDisplayParts),c.signatures.push(t)})),{value:c,dispose(){}}}},_=class extends p{async provideHover(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const a=await n.getQuickInfoAtPosition(s.toString(),r);if(!a||e.isDisposed())return;const o=g(a.documentation),l=a.tags?a.tags.map((e=>f(e))).join("  \n\n"):"",c=g(a.displayParts);return{range:this._textSpanToRange(e,a.textSpan),contents:[{value:"```typescript\n"+c+"\n```\n"},{value:o+(l?"\n\n"+l:"")}]}}},w=class extends p{async provideDocumentHighlights(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const a=await n.getDocumentHighlights(s.toString(),r,[s.toString()]);return a&&!e.isDisposed()?a.flatMap((t=>t.highlightSpans.map((t=>({range:this._textSpanToRange(e,t.textSpan),kind:"writtenReference"===t.kind?l.languages.DocumentHighlightKind.Write:l.languages.DocumentHighlightKind.Text}))))):void 0}},S=class extends p{constructor(e,t){super(t),this._libFiles=e}async provideDefinition(e,t,i){const s=e.uri,r=e.getOffsetAt(t),n=await this._worker(s);if(e.isDisposed())return;const a=await n.getDefinitionAtPosition(s.toString(),r);if(!a||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(a.map((e=>l.Uri.parse(e.fileName)))),e.isDisposed())return;const o=[];for(let l of a){const e=this._libFiles.getOrCreateModel(l.fileName);e&&o.push({uri:e.uri,range:this._textSpanToRange(e,l.textSpan)})}return o}},x=class extends p{constructor(e,t){super(t),this._libFiles=e}async provideReferences(e,t,i,s){const r=e.uri,n=e.getOffsetAt(t),a=await this._worker(r);if(e.isDisposed())return;const o=await a.getReferencesAtPosition(r.toString(),n);if(!o||e.isDisposed())return;if(await this._libFiles.fetchLibFilesIfNecessary(o.map((e=>l.Uri.parse(e.fileName)))),e.isDisposed())return;const c=[];for(let l of o){const e=this._libFiles.getOrCreateModel(l.fileName);e&&c.push({uri:e.uri,range:this._textSpanToRange(e,l.textSpan)})}return c}},v=class extends p{async provideDocumentSymbols(e,t){const i=e.uri,s=await this._worker(i);if(e.isDisposed())return;const r=await s.getNavigationTree(i.toString());if(!r||e.isDisposed())return;const n=(t,i)=>{var s;return{name:t.text,detail:"",kind:C[t.kind]||l.languages.SymbolKind.Variable,range:this._textSpanToRange(e,t.spans[0]),selectionRange:this._textSpanToRange(e,t.spans[0]),tags:[],children:null==(s=t.childItems)?void 0:s.map((e=>n(e,t.text))),containerName:i}};return r.childItems?r.childItems.map((e=>n(e))):[]}},k=((e=class{}).unknown="",e.keyword="keyword",e.script="script",e.module="module",e.class="class",e.interface="interface",e.type="type",e.enum="enum",e.variable="var",e.localVariable="local var",e.function="function",e.localFunction="local function",e.memberFunction="method",e.memberGetAccessor="getter",e.memberSetAccessor="setter",e.memberVariable="property",e.constructorImplementation="constructor",e.callSignature="call",e.indexSignature="index",e.constructSignature="construct",e.parameter="parameter",e.typeParameter="type parameter",e.primitiveType="primitive type",e.label="label",e.alias="alias",e.const="const",e.let="let",e.warning="warning",e),C=Object.create(null);C[k.module]=l.languages.SymbolKind.Module,C[k.class]=l.languages.SymbolKind.Class,C[k.enum]=l.languages.SymbolKind.Enum,C[k.interface]=l.languages.SymbolKind.Interface,C[k.memberFunction]=l.languages.SymbolKind.Method,C[k.memberVariable]=l.languages.SymbolKind.Property,C[k.memberGetAccessor]=l.languages.SymbolKind.Property,C[k.memberSetAccessor]=l.languages.SymbolKind.Property,C[k.variable]=l.languages.SymbolKind.Variable,C[k.const]=l.languages.SymbolKind.Variable,C[k.localVariable]=l.languages.SymbolKind.Variable,C[k.variable]=l.languages.SymbolKind.Variable,C[k.function]=l.languages.SymbolKind.Function,C[k.localFunction]=l.languages.SymbolKind.Function;var D,A,F=class extends p{static _convertOptions(e){return{ConvertTabsToSpaces:e.insertSpaces,TabSize:e.tabSize,IndentSize:e.tabSize,IndentStyle:2,NewLineCharacter:"\n",InsertSpaceAfterCommaDelimiter:!0,InsertSpaceAfterSemicolonInForStatements:!0,InsertSpaceBeforeAndAfterBinaryOperators:!0,InsertSpaceAfterKeywordsInControlFlowStatements:!0,InsertSpaceAfterFunctionKeywordForAnonymousFunctions:!0,InsertSpaceAfterOpeningAndBeforeClosingNonemptyParenthesis:!1,InsertSpaceAfterOpeningAndBeforeClosingNonemptyBrackets:!1,InsertSpaceAfterOpeningAndBeforeClosingTemplateStringBraces:!1,PlaceOpenBraceOnNewLineForControlBlocks:!1,PlaceOpenBraceOnNewLineForFunctions:!1}}_convertTextChanges(e,t){return{text:t.newText,range:this._textSpanToRange(e,t.span)}}},I=class extends F{constructor(){super(...arguments),this.canFormatMultipleRanges=!1}async provideDocumentRangeFormattingEdits(e,t,i,s){const r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getFormattingEditsForRange(r.toString(),n,a,F._convertOptions(i));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},T=class extends F{get autoFormatTriggerCharacters(){return[";","}","\n"]}async provideOnTypeFormattingEdits(e,t,i,s,r){const n=e.uri,a=e.getOffsetAt(t),o=await this._worker(n);if(e.isDisposed())return;const l=await o.getFormattingEditsAfterKeystroke(n.toString(),a,i,F._convertOptions(s));return l&&!e.isDisposed()?l.map((t=>this._convertTextChanges(e,t))):void 0}},P=class extends F{async provideCodeActions(e,t,i,s){const r=e.uri,n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=F._convertOptions(e.getOptions()),l=i.markers.filter((e=>e.code)).map((e=>e.code)).map(Number),c=await this._worker(r);if(e.isDisposed())return;const d=await c.getCodeFixesAtPosition(r.toString(),n,a,l,o);return!d||e.isDisposed()?{actions:[],dispose:()=>{}}:{actions:d.filter((e=>0===e.changes.filter((e=>e.isNewFile)).length)).map((t=>this._tsCodeFixActionToMonacoCodeAction(e,i,t))),dispose:()=>{}}}_tsCodeFixActionToMonacoCodeAction(e,t,i){const s=[];for(const r of i.changes)for(const t of r.textChanges)s.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,t.span),text:t.newText}});return{title:i.description,edit:{edits:s},diagnostics:t.markers,kind:"quickfix"}}},L=class extends p{constructor(e,t){super(t),this._libFiles=e}async provideRenameEdits(e,t,i,s){const r=e.uri,n=r.toString(),a=e.getOffsetAt(t),o=await this._worker(r);if(e.isDisposed())return;const l=await o.getRenameInfo(n,a,{allowRenameOfImportPath:!1});if(!1===l.canRename)return{edits:[],rejectReason:l.localizedErrorMessage};if(void 0!==l.fileToRename)throw new Error("Renaming files is not supported.");const c=await o.findRenameLocations(n,a,!1,!1,!1);if(!c||e.isDisposed())return;const d=[];for(const u of c){const e=this._libFiles.getOrCreateModel(u.fileName);if(!e)throw new Error(`Unknown file ${u.fileName}.`);d.push({resource:e.uri,versionId:void 0,textEdit:{range:this._textSpanToRange(e,u.textSpan),text:i}})}return{edits:d}}},O=class extends p{async provideInlayHints(e,t,i){const s=e.uri,r=s.toString(),n=e.getOffsetAt({lineNumber:t.startLineNumber,column:t.startColumn}),a=e.getOffsetAt({lineNumber:t.endLineNumber,column:t.endColumn}),o=await this._worker(s);return e.isDisposed()?null:{hints:(await o.provideInlayHints(r,n,a)).map((t=>({...t,label:t.text,position:e.getPositionAt(t.position),kind:this._convertHintKind(t.kind)}))),dispose:()=>{}}}_convertHintKind(e){return"Parameter"===e?l.languages.InlayHintKind.Parameter:l.languages.InlayHintKind.Type}};function N(e){A=E(e,"typescript")}function M(e){D=E(e,"javascript")}function K(){return new Promise(((e,t)=>{if(!D)return t("JavaScript not registered!");e(D)}))}function R(){return new Promise(((e,t)=>{if(!A)return t("TypeScript not registered!");e(A)}))}function E(e,t){const i=[],s=new c(t,e),r=(...e)=>s.getLanguageServiceWorker(...e),n=new m(r);return function(){const{modeConfiguration:s}=e;!function(e){for(;e.length;)e.pop().dispose()}(i),s.completionItems&&i.push(l.languages.registerCompletionItemProvider(t,new b(r))),s.signatureHelp&&i.push(l.languages.registerSignatureHelpProvider(t,new y(r))),s.hovers&&i.push(l.languages.registerHoverProvider(t,new _(r))),s.documentHighlights&&i.push(l.languages.registerDocumentHighlightProvider(t,new w(r))),s.definitions&&i.push(l.languages.registerDefinitionProvider(t,new S(n,r))),s.references&&i.push(l.languages.registerReferenceProvider(t,new x(n,r))),s.documentSymbols&&i.push(l.languages.registerDocumentSymbolProvider(t,new v(r))),s.rename&&i.push(l.languages.registerRenameProvider(t,new L(n,r))),s.documentRangeFormattingEdits&&i.push(l.languages.registerDocumentRangeFormattingEditProvider(t,new I(r))),s.onTypeFormattingEdits&&i.push(l.languages.registerOnTypeFormattingEditProvider(t,new T(r))),s.codeActions&&i.push(l.languages.registerCodeActionProvider(t,new P(r))),s.inlayHints&&i.push(l.languages.registerInlayHintsProvider(t,new O(r))),s.diagnostics&&i.push(new h(n,e,t,r))}(),r}export{p as Adapter,P as CodeActionAdaptor,S as DefinitionAdapter,h as DiagnosticsAdapter,w as DocumentHighlightAdapter,I as FormatAdapter,F as FormatHelper,T as FormatOnTypeAdapter,O as InlayHintsAdapter,k as Kind,m as LibFiles,v as OutlineAdapter,_ as QuickInfoAdapter,x as ReferenceAdapter,L as RenameAdapter,y as SignatureHelpAdapter,b as SuggestAdapter,c as WorkerManager,u as flattenDiagnosticMessageText,K as getJavaScriptWorker,R as getTypeScriptWorker,M as setupJavaScript,N as setupTypeScript};
