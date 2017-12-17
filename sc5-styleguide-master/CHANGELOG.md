## 0.3.6 (2015-02-11)

### Fixes
* Fix KSS parsing failing on an empty file (#[467](https://github.com/SC5/sc5-styleguide/pull/467))
* Revert gonzales to old version, fixes variable parsing issues (#[470](https://github.com/SC5/sc5-styleguide/pull/470))

### Improvements
* Reimplement Shadow DOM wrapping, fixes using Angular directives in shadowDom (#[468](https://github.com/SC5/sc5-styleguide/pull/468))


## 0.3.5 (2015-02-04)

### Fixes
* Fix sections being grouped based on start of section number (Fix #447) (#[449](https://github.com/SC5/sc5-styleguide/pull/449))
* Fix syntax error in the readme code example (#[445](https://github.com/SC5/sc5-styleguide/pull/445))
* Fix CLI argument `overviewPath` not taken into account (#[453](https://github.com/SC5/sc5-styleguide/pull/453))

### Internal improvements
* Refactor and further modularize CLI and add unit tests (#[446](https://github.com/SC5/sc5-styleguide/pull/446))
* Use the new version of Gonzales with {} AST and native map, and remove gonzales-ast package. (#[455](https://github.com/SC5/sc5-styleguide/pull/455))
* Unit and integration test improvements
* Update and clean out unused npm dependencies


## 0.3.4 (2015-01-23)

### Fixes
* Typo in CLI `--commonClass` argument (#[443](https://github.com/SC5/sc5-styleguide/pull/443))


## 0.3.3 (2015-01-22)

### Fixes
* Downgrade socket.io to 1.2.1 to fix socket port resolving issues (#[438](https://github.com/SC5/sc5-styleguide/pull/438))


## 0.3.2 (2015-01-21)

### Fixes
* Fix: apply socket event listener functions correctly through angular root scope (#[433](https://github.com/SC5/sc5-styleguide/pull/433))

### Improvements
* Restore full changelog from GitHub history (#[434](https://github.com/SC5/sc5-styleguide/pull/434))


## 0.3.1 (2015-01-21)

### Improvements
* Do not hide compile errors when fixing validation errors (#[429](https://github.com/SC5/sc5-styleguide/pull/429))
* Relay server port to socket.io client, defer socket event listener registrations until connection (#[430](https://github.com/SC5/sc5-styleguide/pull/430))


## 0.3.0 (2015-01-20)
* *Breaking change:* Remove internal style preprocessing (#[Merge pull request #386](https://github.com/SC5/sc5-styleguide/pull/386))
  * Since style preprocessing is not anymore part of the styleguide, it is now possible to use your preferred preprocessor. See README for the new API documentation.


## 0.2.19 (2015-01-19)

### Features
* Add variable syntax checking on save and show error on UI (#[412](https://github.com/SC5/sc5-styleguide/pull/412))

### Fixes
* Ensure variables' order in the Designer Tool is the same as in the source file (#[419](https://github.com/SC5/sc5-styleguide/pull/419))
* Fix running `npm run demo` when parent project already has gulp as dependency (#[414](https://github.com/SC5/sc5-styleguide/pull/414))


## 0.2.18 (2015-01-15)

### Features
* Create 404 page. Use ui-sref to generate internal links (#[402](https://github.com/SC5/sc5-styleguide/pull/402))

### Improvements
* Parse only the given syntax when parsing variables (#[406](https://github.com/SC5/sc5-styleguide/pull/406))
* Hide progress bar when socket connection is lost (#[398](https://github.com/SC5/sc5-styleguide/pull/398))

### Internal changes
* Fix tests when running with newest KSS (#[394](https://github.com/SC5/sc5-styleguide/pull/394))


## 0.2.17 (2015-01-08)

### Features
* Example to shows colors with functions (#[379](https://github.com/SC5/sc5-styleguide/pull/379))
* --port help added to CLI (#[376](https://github.com/SC5/sc5-styleguide/pull/376))

### Fixes
* Clean up custom KSS params before processing KSS (#[385](https://github.com/SC5/sc5-styleguide/pull/385))
* Remove defined in texts in variables. Update KSS example data (#[373](https://github.com/SC5/sc5-styleguide/pull/373))

### Internal changes
* Move gulp test tasks to own file (#[383](https://github.com/SC5/sc5-styleguide/pull/383))
* Move bin/styleguide to lib/cli.js (#[384](https://github.com/SC5/sc5-styleguide/pull/384))
* Improve npm integration tests (#[382](https://github.com/SC5/sc5-styleguide/pull/382))
* Add npm package integration test (#[378](https://github.com/SC5/sc5-styleguide/pull/378))
* Correct markup for code in README (#[367](https://github.com/SC5/sc5-styleguide/pull/367))


## 0.2.16 (2014-12-22)

### Features
* Declare Angular directives in KSS comments (#[364](https://github.com/SC5/sc5-styleguide/pull/364))

### Improvements
* Show variable source file name(s) (#[360](https://github.com/SC5/sc5-styleguide/pull/360))
* Nice looking designer tool for mobile devices (#[359](https://github.com/SC5/sc5-styleguide/pull/359))
* Hide absolute paths on client (#[358](https://github.com/SC5/sc5-styleguide/pull/358))
* Save only changed variables (#[355](https://github.com/SC5/sc5-styleguide/pull/355))

### Internal changes
* Add Dockerfile to run demo in docker container (#[357](https://github.com/SC5/sc5-styleguide/pull/357))
* Minor fixes to releasing instruction (#[349](https://github.com/SC5/sc5-styleguide/pull/349))


## 0.2.15 (2014-12-17)

### Critical and major changes
* Find variable declarations from every file. Use styleVariables to filter selected files (#[344](https://github.com/SC5/sc5-styleguide/pull/344))
* Feature: Custom KSS parameter for wrapper markup (#[338](https://github.com/SC5/sc5-styleguide/pull/338))
  **The syntax for declaring a component wrapper has been changed. It is not compartible anymore. When updating change
  you wrapper components according to [documentation](https://github.com/SC5/sc5-styleguide#wrapper-markup).**

### Fixes
* Allow empty single-line comments (#[345](https://github.com/SC5/sc5-styleguide/pull/345))
* Fixes failed styleguide generation when section modifier has no markup (#[343](https://github.com/SC5/sc5-styleguide/pull/343))
* Fix: Do not detect @imports as variables (#[342](https://github.com/SC5/sc5-styleguide/pull/342))

### Internal changes
* Instruction how to deal with branches (#[346](https://github.com/SC5/sc5-styleguide/pull/346))


## 0.2.14 (2014-12-10)

### Fixes
* Fix test directive when running gulp dev (#[335](https://github.com/SC5/sc5-styleguide/pull/335))
* Fix: Include demo-gulpfile.js to NPM package. Fixes demo (#[339](https://github.com/SC5/sc5-styleguide/pull/339))
* Fix typo in demo gulp file (#[336](https://github.com/SC5/sc5-styleguide/pull/336))

### Improvements
* Remove unused scoped styles from processing flow (#[337](https://github.com/SC5/sc5-styleguide/pull/337))


## 0.2.13 (2014-12-08)

### Fixes
* Fix addWrapper issue when styleguide config is not yet loaded (#[320](https://github.com/SC5/sc5-styleguide/pull/320))
* Fix issues when styleVariables is undefined (#[319](https://github.com/SC5/sc5-styleguide/pull/319))

### Improvements
* Add lazy loaded directive example to demo project. Use separated gulp file to run demo (#[322](https://github.com/SC5/sc5-styleguide/pull/322))
* Add debounce to search box.  (#[327](https://github.com/SC5/sc5-styleguide/pull/327))
* Append link elements to head instead of writing to document (#[331](https://github.com/SC5/sc5-styleguide/pull/331))


## 0.2.12 (2014-12-03)

### Features
* Insert user markup in shadowRoot or lightDom depending on browser support (#[310](https://github.com/SC5/sc5-styleguide/pull/310))

### Fixes
* Fix: Parse at-rules to separate stylesheet. Fixes font problems with shadow DOM (#[309](https://github.com/SC5/sc5-styleguide/pull/309))
* Fix common class: add a custom wrapper element with the defined class... (#[308](https://github.com/SC5/sc5-styleguide/pull/308))
* Fix: Handle extraHead parameter properly when it is a string (#[305](https://github.com/SC5/sc5-styleguide/pull/305))
* Fix: Apply shadow DOM styles properly on fullscreen mode (#[306](https://github.com/SC5/sc5-styleguide/pull/306))

### Improvements
* Watch variable file changes when running executable with watch parameter (#[314](https://github.com/SC5/sc5-styleguide/pull/314))


## 0.2.11 (2014-12-01)

### Features
* Possibility to pass a single stylefile to executable (#[301](https://github.com/SC5/sc5-styleguide/pull/301))

### Fixes
* Fix: Find variables that have double parenthesis. Simplify variable parser (#[292](https://github.com/SC5/sc5-styleguide/pull/292))
* Fix #241: Depend on Gonzales 3.0.0-12 (Parse variables in Bootstrap) (#[291](https://github.com/SC5/sc5-styleguide/pull/291))

### Improvements
* Add find variable -icons to designer tool markup (#[299](https://github.com/SC5/sc5-styleguide/pull/299))
* Remove unneeded dependencies. Update all dependencies (#[297](https://github.com/SC5/sc5-styleguide/pull/297))
* jshint: Enforce captilized identifiers (#[296](https://github.com/SC5/sc5-styleguide/pull/296))
* Instead of ignoring files, explicitly specify what is included in the npm tarball (#[294](https://github.com/SC5/sc5-styleguide/pull/294))


## 0.2.10 (2014-11-27)

### Features
* Find all sections that use the selected variable (#[265](https://github.com/SC5/sc5-styleguide/pull/265))
* If a section does not use variables, list its sub-sections' variables (#[275](https://github.com/SC5/sc5-styleguide/pull/275))
* Scope user stylesheet to user markup if the browser supports it. Thank you @Janpot! (#[280](https://github.com/SC5/sc5-styleguide/pull/280))

### Fixes
* Some headers are not activated due to scrollable area being too short (#[287](https://github.com/SC5/sc5-styleguide/pull/287))
* Fix #266: Do not replace pseudo selectors when they appear inside :not clause (#[279](https://github.com/SC5/sc5-styleguide/pull/279))
* Find used variables also from function parameters (#[267](https://github.com/SC5/sc5-styleguide/pull/267))

### Improvements
* Show full error message in UI when compilation error happens (#[286](https://github.com/SC5/sc5-styleguide/pull/286))
* Disable "Save changes" button when socket connection is lost (#[282](https://github.com/SC5/sc5-styleguide/pull/282))
* Disable "Reset local changes" button if no variable is dirty (#[289](https://github.com/SC5/sc5-styleguide/pull/289))
* Allow scrollbars in content preview if content is too large (#[277](https://github.com/SC5/sc5-styleguide/pull/277))
* Highlight section header when scrolling (#[273](https://github.com/SC5/sc5-styleguide/pull/273))
* Re-style section headings (#[270](https://github.com/SC5/sc5-styleguide/pull/270))
* Whole section heading is now clickable anchor link (#[272](https://github.com/SC5/sc5-styleguide/pull/272))
* Do not use block section styles when main section does not have markup (#[274](https://github.com/SC5/sc5-styleguide/pull/274))


## 0.2.9 (2014-11-25)

### Features
* Support 3-character shorthand CSS colors (#[258](https://github.com/SC5/sc5-styleguide/pull/258))
* Support color values also in the middle of the variable string (#[256](https://github.com/SC5/sc5-styleguide/pull/256))

### Fixes
* Fix color picker and footer styles (#[263](https://github.com/SC5/sc5-styleguide/pull/263))
* Fix navigation ng-class using multiple conditional classes (#[262](https://github.com/SC5/sc5-styleguide/pull/262))
* Fix #255: Do not pollute previews with inheritable styles (#[260](https://github.com/SC5/sc5-styleguide/pull/260))
* Fix: Npm run demo should work without dev dependencies (#[259](https://github.com/SC5/sc5-styleguide/pull/259))


## 0.2.8 (2014-11-24)

### Features
* Show related variables in the designer tool (#[214](https://github.com/SC5/sc5-styleguide/pull/214))
* Add css.src option; can be used to control which files are bundled (#[237](https://github.com/SC5/sc5-styleguide/pull/237))

### Fixes
* Fix: Styles are no longer added twice in the demo project. Fixes Firefox icon font problem (#[195](https://github.com/SC5/sc5-styleguide/pull/195))
* Fix #191: Sort styleguide sections by reference number (#[197](https://github.com/SC5/sc5-styleguide/pull/197))

### Improvements
* Add gulp task "dev", a shorthand for watch with parameters (#[192](https://github.com/SC5/sc5-styleguide/pull/192))
* Use new version of Gonzales (#[194](https://github.com/SC5/sc5-styleguide/pull/194))
* Don't bail out in case of parsing errors; emit compile error event to UI (#[201](https://github.com/SC5/sc5-styleguide/pull/201)
* Improve designer tool not to overflow over content (#[220](https://github.com/SC5/sc5-styleguide/pull/220))
)
* Log error if two KSS sections have the same reference number (#[223](https://github.com/SC5/sc5-styleguide/pull/223))
* Show designer tool always. Disable variable saving when socket.io does not exists (#[244](https://github.com/SC5/sc5-styleguide/pull/244))
* Test that error callback is called on sass/less preprocessing errors (#[248](https://github.com/SC5/sc5-styleguide/pull/248))


## 0.2.7 (2014-11-18)

### Features
* Parse section related variables to styleguide.json (#[188](https://github.com/SC5/sc5-styleguide/pull/188))
* Use Github readme as a demo project overview page (#[202](https://github.com/SC5/sc5-styleguide/pull/202))
* Don't bail out in case of parsing errors; emit compile error event to UI (#[201](https://github.com/SC5/sc5-styleguide/pull/201))

### Fixes
* Fix #191: Sort styleguide sections by reference number (#[197](https://github.com/SC5/sc5-styleguide/pull/197))
* Fix: Styles are no longer added twice in the demo project. Fixes Firefox icon font problem (#[195](https://github.com/SC5/sc5-styleguide/pull/195))
* Ometa splitter is not in use any more (#[198](https://github.com/SC5/sc5-styleguide/pull/198))

### Improvements
* Use new version of Gonzales (#[194](https://github.com/SC5/sc5-styleguide/pull/194))
* Move development instructions to own file, add TOC to readme (#[203](https://github.com/SC5/sc5-styleguide/pull/203))
* Refactor: use promises in styleguide.js, use named functions instead of comments, general readability improvements (#[193](https://github.com/SC5/sc5-styleguide/pull/193))
* Add gulp task "dev", a shorthand for watch with parameters (#[192](https://github.com/SC5/sc5-styleguide/pull/192))
* Add no-fail sass gulp task. Gulp build will fail and exit on sass errors, watches should not. (#[196](https://github.com/SC5/sc5-styleguide/pull/196))


## 0.2.6 (2014-11-14)

### Features
* Add header error state styles to styleguide (#[182](https://github.com/SC5/sc5-styleguide/pull/182))
* Integrate KSS splitter. Show related CSS styles in UI (#[181](https://github.com/SC5/sc5-styleguide/pull/181))
* Gonzales based KSS splitter + more complex tests (#[180](https://github.com/SC5/sc5-styleguide/pull/180))
* Notify the UI of sass compile errors (#[179](https://github.com/SC5/sc5-styleguide/pull/179))
* Fix: Support styleVariables parameter also when running styleguide executable (#[174](https://github.com/SC5/sc5-styleguide/pull/174))
* Possibility to define separate src for less and sass compiling (#[167](https://github.com/SC5/sc5-styleguide/pull/167))
* Show an error icon when socket is disconnected (#[168](https://github.com/SC5/sc5-styleguide/pull/168))
* Finetune socket disconnected icon styles (#[175](https://github.com/SC5/sc5-styleguide/pull/175))
* Store information if designer tool variable is changed. Smarter change merging (#[161](https://github.com/SC5/sc5-styleguide/pull/161))
* Do not list variables alphabetically in Designer Tool (#[157](https://github.com/SC5/sc5-styleguide/pull/157))

### Fixes
* Fix: Regexp splitter does not detect blocks correctly in some cases (#[177](https://github.com/SC5/sc5-styleguide/pull/177))
* Fix: Add missing width to disconnect icon styles (#[178](https://github.com/SC5/sc5-styleguide/pull/178))
* Hide socket connection icon and Designer Tool if socket is not used (#[173](https://github.com/SC5/sc5-styleguide/pull/173))
* Do not stop watch when SASS compile error occurs (#[165](https://github.com/SC5/sc5-styleguide/pull/165))
* Fix: Add input focus color back (#[164](https://github.com/SC5/sc5-styleguide/pull/164))
* Fixing default cursor value (#[176](https://github.com/SC5/sc5-styleguide/pull/176))
* Fix sass and less src parameter handling (#[170](https://github.com/SC5/sc5-styleguide/pull/170))
* Fix: Sync deleted and added variables in designer tool (#[158](https://github.com/SC5/sc5-styleguide/pull/158))

### Improvements
* Add test for SASS and LESS processing (#[183](https://github.com/SC5/sc5-styleguide/pull/183))
* Separate wrapper markup generator to its own module (#[163](https://github.com/SC5/sc5-styleguide/pull/163))
* Add coveralls configuration and install node-coveralls (#[160](https://github.com/SC5/sc5-styleguide/pull/160))
* Add Istanbul code coverage instrumentation and lcov report generation (#[159](https://github.com/SC5/sc5-styleguide/pull/159))
* Form renderer in a separate testable method (#[156](https://github.com/SC5/sc5-styleguide/pull/156))


## 0.2.5 (2014-11-04)
* Implement possibility to reset local variable changes (#[152](https://github.com/SC5/sc5-styleguide/pull/152))
* Functional page title on fullscreen mode. Implement and improve tests (#[151](https://github.com/SC5/sc5-styleguide/pull/151))
* Commented Parser (#[147](https://github.com/SC5/sc5-styleguide/pull/147))
* Page title rendered according to section (#[148](https://github.com/SC5/sc5-styleguide/pull/148))
* Sync designer tool variables when there are server side changes (#[144](https://github.com/SC5/sc5-styleguide/pull/144))
* Styleguide service listens to socket events (#[143](https://github.com/SC5/sc5-styleguide/pull/143))
* Refactor localstorage handling. Persist designer tool visibility (#[142](https://github.com/SC5/sc5-styleguide/pull/142))
* Emit progress information from gulp task to client. Implement progress bar (#[140](https://github.com/SC5/sc5-styleguide/pull/140))
* Get socket returns promise and sassVariables --> styleVariables (#[135](https://github.com/SC5/sc5-styleguide/pull/135))
* Prevent watch server crashing when there is style syntax error (#[139](https://github.com/SC5/sc5-styleguide/pull/139))
* Improve designer tool UI. Add examples to styleguide (#[136](https://github.com/SC5/sc5-styleguide/pull/136))
* Make sure that elements does not overlap modifier label (#[133](https://github.com/SC5/sc5-styleguide/pull/133))
* Fullscreen controller handles markup parsing instead of directive (#[132](https://github.com/SC5/sc5-styleguide/pull/132))
* Inherited wrappers (#[134](https://github.com/SC5/sc5-styleguide/pull/134))

### Internal code changes
* getPreprocessStream moved into separate module (#[154](https://github.com/SC5/sc5-styleguide/pull/154))
* getMarkdownStream moved into separate module (#[153](https://github.com/SC5/sc5-styleguide/pull/153))
* Declare angular dependencies for components in inline array (#[150](https://github.com/SC5/sc5-styleguide/pull/150))
* Move maximum code to lib/modules (#[149](https://github.com/SC5/sc5-styleguide/pull/149))
* Separate module for parsing KSS (detached from styleguide.js) (#[145](https://github.com/SC5/sc5-styleguide/pull/145))
* Use real parser to update changed variables to source SASS/LESS file (#[137](https://github.com/SC5/sc5-styleguide/pull/137))
* Update GCC in travis.yml. Fix build (#[138](https://github.com/SC5/sc5-styleguide/pull/138))


## 0.2.3 (2014-10-21)
* Move variable parsing logic to external lib. Implement initial tests (#[98](https://github.com/SC5/sc5-styleguide/pull/98))
* Variable saving moved to Variable service (#[97](https://github.com/SC5/sc5-styleguide/pull/97))
* Remove decodeHTML filter as native solution is available (#[94](https://github.com/SC5/sc5-styleguide/pull/94))
* Features/modular css 4 app (#[93](https://github.com/SC5/sc5-styleguide/pull/93))
* Find sass variables with config parameter instead of magic file. Fix socket.io target paths (#[91](https://github.com/SC5/sc5-styleguide/pull/91))
* Fix fullscreen to work also with first level items (#[89](https://github.com/SC5/sc5-styleguide/pull/89))
* Fixed double inclusion of Angular dependencies (#[90](https://github.com/SC5/sc5-styleguide/pull/90))
* Add commonClass option that is added to every preview block (#[87](https://github.com/SC5/sc5-styleguide/pull/87))
* Possibility to display a single element as full page (#[88](https://github.com/SC5/sc5-styleguide/pull/88))
* Fixed section.markup: false (#[86](https://github.com/SC5/sc5-styleguide/pull/86))
* Fix designer mode (#[84](https://github.com/SC5/sc5-styleguide/pull/84))
* Fix dynamic SASS variables (#[80](https://github.com/SC5/sc5-styleguide/pull/80))
* Do not reveal output path to public configuration (#[74](https://github.com/SC5/sc5-styleguide/pull/74))
* Upgrade to angular 1.3.0 (#[82](https://github.com/SC5/sc5-styleguide/pull/82))
* Add david dependency badge (#[83](https://github.com/SC5/sc5-styleguide/pull/83))
* Tests for MainCtrl (#[79](https://github.com/SC5/sc5-styleguide/pull/79))
* Socket.io is optional (#[78](https://github.com/SC5/sc5-styleguide/pull/78))
* Describe in docs that a server should resolve paths into appRoot (#[77](https://github.com/SC5/sc5-styleguide/pull/77))
* Fix: Overview.md is not rendered (#[76](https://github.com/SC5/sc5-styleguide/pull/76))
* Update jscs to 1.7.1. Fix tests (#[75](https://github.com/SC5/sc5-styleguide/pull/75))
* Remove unused stream-assert-gulp (#[72](https://github.com/SC5/sc5-styleguide/pull/72))
* Update jscs to 1.7.0. Fix coding conventions (#[73](https://github.com/SC5/sc5-styleguide/pull/73))


## 0.2.1 (2014-10-14)
* Added appRoot configuration parameter that allows to run application from sub-folder.


## 0.2.0 (2014-10-14)
* Breaking change: The styleguide is now fully generated in memory. The results should be written to disk using the output stream instead of outputPath parameter
* Possibility to define custom title
* Improved documentation and tests
* Less production dependencies
* Easy to run demo project


## 0.1.0 (2014-10-07)
* First NPM release