# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

## [2.0.0](https://github.com/tks18/finance-manager/compare/v1.5.0...v2.0.0) (2023-08-15)


### Build System 🏗

* **packages:** update most of the packages to latest version ([9f739e2](https://github.com/tks18/finance-manager/commit/9f739e2df14b68693aaafd6ba7e1dea6eb7c1527))


### Code Refactoring 🖌

* update types and refactor ([5f7a7a9](https://github.com/tks18/finance-manager/commit/5f7a7a9540d8e5c7c007b97c84f643a8fc7b00cf))


### Bug Fixes 🛠

* **components/build-api-form:** update for the breaking changes ([96398be](https://github.com/tks18/finance-manager/commit/96398be5d46cf2f009bc14d6da238fcd9eb33e89))
* **components/build-input-form:** code changes for the breaking changes in mui date-picker ([4a5fd46](https://github.com/tks18/finance-manager/commit/4a5fd46b80e6cdca3b032717151b118c64db0774))
* **components/date-picker:** rewrite the date-picker component for the breaking changes ([37524aa](https://github.com/tks18/finance-manager/commit/37524aa6a318b69cc16c09707118dd5a6a15ee95))
* **components/localization-provider:** refactor for the breaking changes ([3ba7958](https://github.com/tks18/finance-manager/commit/3ba79587bf45a94304fbe60ca07a14db23b5d45b))
* **plugins/backend/api:** update all the configs for backend accordingly for breaking changes ([744ae1d](https://github.com/tks18/finance-manager/commit/744ae1da601f61be60f7e7c5bb2c7b03d315acba))
* **plugins/backend/requester:** fix the response type for getcolumns promise ([139ea83](https://github.com/tks18/finance-manager/commit/139ea831123f1c3032e88e620dddec89de2bdff1))
* **routes/settings:** fix for breaking changes in date-picker ([5e4b1af](https://github.com/tks18/finance-manager/commit/5e4b1afef78cd112674ee4fd40244263088ee6a5))


### Features 🔥

* **components/nav-bar:** update income source master in the nav list ([6e3d574](https://github.com/tks18/finance-manager/commit/6e3d574270a2453302e4f6d818d3a18b534f09bd))
* **plugins/backend/api:** update all the api configs for income source master ([69ab221](https://github.com/tks18/finance-manager/commit/69ab22147795e5dd147a6b9478abcdfbb081a7ab))
* **plugins/backend/api:** write config for income source master ([0fe1050](https://github.com/tks18/finance-manager/commit/0fe10506513bc256a2bd064cfeeccb1b9277de6e))
* **plugins/backend:** rewrite the backend hook for filtering the paths ([38e567d](https://github.com/tks18/finance-manager/commit/38e567d6cdff1cfdb5c1953692c551b7cb21a86e))
* **plugins/data-grid-helper:** write helper functions for contructing mui data grid object ([d4f35af](https://github.com/tks18/finance-manager/commit/d4f35af3b806948f80b5bb2eaaefb62f35cad294))
* **router:** make changes for allowing sub routes under auth/data route ([b3ca398](https://github.com/tks18/finance-manager/commit/b3ca398b097bdb489f41e365de5a4eb28c0b0687))
* **routes/auth/data:** move the db data form to a seperate sub route ([4e72f4a](https://github.com/tks18/finance-manager/commit/4e72f4aac3b8630154264b629d4ae66839b8648d))
* **routes/auth/data:** write root, home and outletcontext for auth/data route ([6fd941b](https://github.com/tks18/finance-manager/commit/6fd941b08a736f2d742989a8c9089186543b44a1))
* **routes/data/view:** write component for viewing data in a data-grid ([ba3ca66](https://github.com/tks18/finance-manager/commit/ba3ca66e9bb6035e764612fadb3d41b63df01fca))
* **routes/home:** write seperate views for logged in and not logged in user ([c3c4a85](https://github.com/tks18/finance-manager/commit/c3c4a856e221fa69e6bca5e7e54b2c1af59704c5))

## [1.5.0](https://github.com/tks18/finance-manager/compare/v1.4.1...v1.5.0) (2022-12-31)


### Features 🔥

* **components/render-fields:** write the logic for excluding reset for fields ([e515c3f](https://github.com/tks18/finance-manager/commit/e515c3fde18d3de688959b239a7ce1857cd65ae4))
* **plugins/backend:** add an option for excluding reset for some fields ([d7434f4](https://github.com/tks18/finance-manager/commit/d7434f492a5a35b10e850b69aeba638b8633fa82))
* **plugins/backend:** add config for exclude reset fields for all the required models ([57f3c51](https://github.com/tks18/finance-manager/commit/57f3c510b8ae53462d3fdaa37b4241ceced5fd8c))

### [1.4.1](https://github.com/tks18/finance-manager/compare/v1.4.0...v1.4.1) (2022-12-31)


### Bug Fixes 🛠

* **plugins/backend:** fix typo on income field config ([55ee720](https://github.com/tks18/finance-manager/commit/55ee720316db57298b9aa2969b1e68a39e8a8c40))

## [1.4.0](https://github.com/tks18/finance-manager/compare/v1.3.0...v1.4.0) (2022-12-30)


### Features 🔥

* **components:** write logic for calculated amount fields and to perform math operations ([3fcd68a](https://github.com/tks18/finance-manager/commit/3fcd68aac36f6efc1b42d3c3cf84560ae8293340))
* **plugins/backend/api:** allow input config for calculated amount fields ([49cc0f7](https://github.com/tks18/finance-manager/commit/49cc0f71358484986aa9923153b852c7f8b28b45))


### Code Refactoring 🖌

* **components/render-input-fields:** rename the folder to a proper name: build api input form ([54e81b6](https://github.com/tks18/finance-manager/commit/54e81b63f3bc110acc036660cec5ec0ae981161b))
* **plugins/backend:** refactor the databasehandler to a new name: apihandler ([8a26ddc](https://github.com/tks18/finance-manager/commit/8a26ddc8ba7f1f52acb4b97ed3c715894e8e217e))
* **routes|router:** rename the components used to refactor names ([382f09a](https://github.com/tks18/finance-manager/commit/382f09a9326bfc0c682a16daac5b4f9f38c883ea))

## [1.3.0](https://github.com/tks18/finance-manager/compare/v1.2.1...v1.3.0) (2022-12-28)


### Bug Fixes 🛠

* **components/render-fields:** fix uncontrolled input field error for all fields and refactor it ([6df1840](https://github.com/tks18/finance-manager/commit/6df18406c193661c34ed700bd62d739f5225c51a))
* **plugins/backend:** fix the field config for credit and debit card ([a308a3a](https://github.com/tks18/finance-manager/commit/a308a3a3f556ddb32c562eac98a9bcd8174e1836))


### Features 🔥

* **plugins/backend:** write the api config for new investment-agent master and update related files ([39a7258](https://github.com/tks18/finance-manager/commit/39a7258e99596b252e544384870bec255cd251d9))

### [1.2.1](https://github.com/tks18/finance-manager/compare/v1.2.0...v1.2.1) (2022-12-28)


### Bug Fixes 🛠

* **components/render-fields:** autocomplete: send the default api options to sort by _id ([8a2933f](https://github.com/tks18/finance-manager/commit/8a2933f7e26ea52089732fce7ca60e2e4e03b500))

## [1.2.0](https://github.com/tks18/finance-manager/compare/v1.1.0...v1.2.0) (2022-12-25)


### Bug Fixes 🛠

* **components:** fix field-renderer component not rendering options for local autocomplete ([c632b2a](https://github.com/tks18/finance-manager/commit/c632b2adff613b63d253f9ba23499eb435054690))


### Others 🔧

* **package:** change proxy url for dev purposes ([9c53c37](https://github.com/tks18/finance-manager/commit/9c53c37ba38d5c3b47985fa0850dac8405017494))


### Code Refactoring 🖌

* **components/field-renderer:** replace fields-renderer with a appropriate name ([d256b27](https://github.com/tks18/finance-manager/commit/d256b27ddf74b96b5576c9c2cdbe97641c4868a2))
* **components:** fix route paths as per changes in router ([24461da](https://github.com/tks18/finance-manager/commit/24461dab462bdf07de8e5dff3a26fad691ec4578))
* **components:** fix the route path as per the changes in router ([680a9fb](https://github.com/tks18/finance-manager/commit/680a9fb4972d1f1a10433e3c6ff1f1ef7bd662d2))
* **plugins/backend/hooks:** refactor for changes in route paths ([4f10f1a](https://github.com/tks18/finance-manager/commit/4f10f1a0ca50f2bded3419b9efd460b0a2b069a4))
* **plugins/store/user:** add a param for redirect route on usersignout ([3905d20](https://github.com/tks18/finance-manager/commit/3905d202f26372e7af64adbf5ecfabd4a1433475))
* **router:** bring all the protected routes under auth route and replace auth with access route ([8ac4f86](https://github.com/tks18/finance-manager/commit/8ac4f86b211b21357d32169640dbb71895ed1e5f))
* **routes/access:** replace the previous auth route with access route ([cdd0210](https://github.com/tks18/finance-manager/commit/cdd0210bf6ac30243b412b7987bf25263e743c5d))
* **routes/auth:** protect the auth route by verifying the user ([fe32fb3](https://github.com/tks18/finance-manager/commit/fe32fb355380597fb793727dcf4ffbd2b1186708))
* **routes/root:** move the base layout to a seperate component ([98293fb](https://github.com/tks18/finance-manager/commit/98293fbb6eddd2b334ad1c053d1f2e9c6f317188))
* **routes/root:** use the base layout from the components ([b395601](https://github.com/tks18/finance-manager/commit/b395601a2bca4510ab19c44a4a2cf8589f13ae70))
* **routes/settings:** move all the settings route to protected Auth Folder ([fdd6975](https://github.com/tks18/finance-manager/commit/fdd69757c4d4b34327a1caedd5c6029089836567))
* **routes/templates:** move all the data template route to Protected Auth Folder ([d2db990](https://github.com/tks18/finance-manager/commit/d2db99093cfcf13e89eb5c6498332b30f8448117))


### Features 🔥

* **components/render-fields:** add a handler for handling api field type ([ffb29ba](https://github.com/tks18/finance-manager/commit/ffb29ba6a3bd601ec70391e7278d38291d4f8ac8))
* **components/render-fields:** add a helper function to clean data before sending to api ([df43a30](https://github.com/tks18/finance-manager/commit/df43a308efc08aba0f74976e90b85f49fc176839))
* **components/render-fields:** componentize all the fields seperately for proper handling ([bcaf0a6](https://github.com/tks18/finance-manager/commit/bcaf0a6ceafbaf368b726a482d74a0a1e27d39b4))
* **components/render-fields:** write the render-input-fields component with all the sub components ([52f6996](https://github.com/tks18/finance-manager/commit/52f69968df7a66edf5422fa2b3c090f4b232d910))


### Styling 🎨

* **components:** add exports for new components ([936167d](https://github.com/tks18/finance-manager/commit/936167de99cecbddfc07ce114c3a2456c9492b01))
* **routes:** add all the exports ([d4815c2](https://github.com/tks18/finance-manager/commit/d4815c2d75098b47b49d967641c8840770b2b54c))

## [1.1.0](https://github.com/tks18/finance-manager/compare/v1.0.1...v1.1.0) (2022-12-13)


### Features 🔥

* **components/navbar:** add options for setting up the app ([535172f](https://github.com/tks18/finance-manager/commit/535172f5052f86a60b074e678d36bbfe8e1aa85d))
* **plugins/backend:** add new api for updating investment market data ([21a0f96](https://github.com/tks18/finance-manager/commit/21a0f96d36b0f6e2907efc8438593eaec7d710a7))
* **routes:** add new router views for settings page ([2d7a2f0](https://github.com/tks18/finance-manager/commit/2d7a2f0ca18e3497ea343e4a5c7f134b0a004fa0))


### Code Refactoring 🖌

* **routes:** change the file name for consistency ([5ebd766](https://github.com/tks18/finance-manager/commit/5ebd7660dd3c783f0306aff23ca9cb228df00a47))

### [1.0.1](https://github.com/tks18/finance-manager/compare/v1.0.0...v1.0.1) (2022-12-07)


### Bug Fixes 🛠

* **components:** fix switch field's default value causing problems ([b6b793c](https://github.com/tks18/finance-manager/commit/b6b793c7b927ecfeb080953b37ca20b3de323177))
* **index.html:** add content-security policy meta tag ([96b2e28](https://github.com/tks18/finance-manager/commit/96b2e28ef330bdd436e5479c26de8b8e7cd8858f))
* **plugins/backend:** fix the autocomplete field for equality check ([168d4ef](https://github.com/tks18/finance-manager/commit/168d4ef2cd4b13c69c2e6d69d0eeeba3c9653aa8))

## [1.0.0](https://github.com/tks18/finance-manager/compare/v0.1.7...v1.0.0) (2022-12-06)


### Build System 🏗

* **package:** remove data-grid plugins, add react-date pickers and other related plugins ([37a100d](https://github.com/tks18/finance-manager/commit/37a100d8633f06333a8ce65966c65c7611299fc3))


### Bug Fixes 🛠

* **routes/templates:** remove all master and transaction folders and replace with single temp file ([39d597e](https://github.com/tks18/finance-manager/commit/39d597ebfa058aa18ade155f922bd7a7f410208a))
* **store/user:** fix the user signout workflow ([e45f408](https://github.com/tks18/finance-manager/commit/e45f408c5db794fe0f5df09e981c1fca8fedc60e))


### Features 🔥

* **app:** wrap the app inside the localization handler ([b0af2f4](https://github.com/tks18/finance-manager/commit/b0af2f4e9bb0ad9947f77f57eb8395528f5c1180))
* **components/data-grid:** remove data-grid ([7902f8f](https://github.com/tks18/finance-manager/commit/7902f8f4312b9077b5a4a387cb928e4a29b48ed7))
* **components/fields-renderer:** custom component to render all the fields given in the db config ([5d6a8f1](https://github.com/tks18/finance-manager/commit/5d6a8f1ea4632b9e9d116747b8aecda062d1b018))
* **components:** remove some options from nav-drawer ([88c0aa0](https://github.com/tks18/finance-manager/commit/88c0aa07abea15437c50c383046ced19684f99d7))
* **components:** write a component for localization handler for mui date picker ([00229e9](https://github.com/tks18/finance-manager/commit/00229e90e29a8747299e25ea1dd94813a535171e))
* **helpers:** remove all helpers as it is not required ([2b10948](https://github.com/tks18/finance-manager/commit/2b10948156f7c3736de30076bb426de5ebefc3d2))
* **plugins/backend:** map all the databasehandler classes in a single file ([5a7bd55](https://github.com/tks18/finance-manager/commit/5a7bd55cb8e3d602ec1197eaa64835bf3d05ecf4))
* **plugins/backend:** retype the dbconfig interface to include fields ([9ebfd06](https://github.com/tks18/finance-manager/commit/9ebfd06b0cca6a06558dfaaa64402a33be5e03de))
* **plugins/backend:** update the dbhandler class to include getdateid method for all by default ([d40e98b](https://github.com/tks18/finance-manager/commit/d40e98b2da242c4ee7e780d1ea1e4b251ba6ee9d))
* **plugins/backend:** write all the config for all the master databases ([c5b188a](https://github.com/tks18/finance-manager/commit/c5b188a60a001e658746a845b5fbc4bd57a2d582))
* **plugins/backend:** write all the config for all the transactional database ([35f5eeb](https://github.com/tks18/finance-manager/commit/35f5eebc89855c61326a4ea20a254b5b213a793f))
* **plugins/backend:** write the getdateid method for calendar db ([5256f6b](https://github.com/tks18/finance-manager/commit/5256f6be45750b6afdd352fe6c172884c23e2307))
* **plugins/database:** write the types for inputfield config ([96eee43](https://github.com/tks18/finance-manager/commit/96eee43b5eb5efaa0e64f82c348ba8eae5d4df96))
* **routes/templates/data:** write a loader component for data loading ([27409ab](https://github.com/tks18/finance-manager/commit/27409ab1935d8d1c052452541955e8e70110fcb1))
* **routes/templates/data:** write the root data component and the custom outlet hook ([38dffa5](https://github.com/tks18/finance-manager/commit/38dffa58075d8d1d5233404eeaad8f1b529f3746))
* **routes/templates:** use the fields renderer to render the db fields ([447ab3f](https://github.com/tks18/finance-manager/commit/447ab3fc220036a230621636dcc409a1870fa6f7))
* **store/user:** remove logger middleware ([4964215](https://github.com/tks18/finance-manager/commit/496421507e5066411d6afc4eb45d20bc2f6b1337))


### Code Refactoring 🖌

* **plugins/backend:** move all the config to its own seperate file ([d3af3ee](https://github.com/tks18/finance-manager/commit/d3af3eec5858a630cd9ccc7343dc69b1c9ebd0b1))
* **router:** refactor the router according to template files ([542e216](https://github.com/tks18/finance-manager/commit/542e2168f6e19a80a46da11b922fe4d4fbd72bac))


### Styling 🎨

* add imports and exports ([5d7123d](https://github.com/tks18/finance-manager/commit/5d7123d354b038cee56e52ed73afc4f611881123))
* **components/login:** remove async keyword from handlelogin handler ([830025f](https://github.com/tks18/finance-manager/commit/830025fa9f0aea069b7b0aa1fe0ed841bf5a3fac))
* **components/register:** remove async keyword from handlelogin handler ([1fde136](https://github.com/tks18/finance-manager/commit/1fde1368576399fc05588526977ec72dc7719351))

### [0.1.7](https://github.com/tks18/finance-manager/compare/v0.1.6...v0.1.7) (2022-10-26)


### Features 🔥

* **components:** update navbar to use the account menu instead of theme button ([d99577d](https://github.com/tks18/finance-manager/commit/d99577d5f06155d352fe45c7bb9a897cd25ad24d))
* **components:** write a account-menu component for handling user actions ([3c3e0d7](https://github.com/tks18/finance-manager/commit/3c3e0d703d9332c7a6f92a55830c0a3fa168f08b))
* **plugins/store/user:** improve user login, register workflows with session reducer ([408d012](https://github.com/tks18/finance-manager/commit/408d012e6b9ad39e21e7bea9326af1cf7a7a9ef8))
* **plugins/store/user:** write custom user hooks for verification of user ([8dc7dfa](https://github.com/tks18/finance-manager/commit/8dc7dfacfb337c73de3c09b55dc41ae16734ead5))
* **plugins/store:** add logger middleware for debugging ([6380484](https://github.com/tks18/finance-manager/commit/63804848d149dcb0b83f123df697e57a91fc149c))
* **plugins/store:** introduce a new reducer - session for managing user sessions ([5199a53](https://github.com/tks18/finance-manager/commit/5199a53f5fc99f2515477311a89c525cb5d57d23))
* **plugins/store:** write selectors for session reducer ([988837d](https://github.com/tks18/finance-manager/commit/988837d7be6fa3232c2cb5cb4ede7d0bcbc43d3c))
* **routes/master:** use the userverify hook to guard the route and pass in the token to context ([1feb0dc](https://github.com/tks18/finance-manager/commit/1feb0dcd8893cadf9adeb7ee240aa93fcc0060d6))


### Code Refactoring 🖌

* **components:** export all the components ([b7341e1](https://github.com/tks18/finance-manager/commit/b7341e1ecc6baaea412fa6157e595a4737100947))
* **plugins/store:** export session reducer and add it to root reducer ([36b6275](https://github.com/tks18/finance-manager/commit/36b6275c59d37fa52648f98564e097bb369e2451))
* **plugins/store:** export user hooks ([1f720f2](https://github.com/tks18/finance-manager/commit/1f720f285d4aae0fdc73942b10ca76847373b69c))
* **routes/auth:** remove all the sub-routes and move it to components folder ([2df8239](https://github.com/tks18/finance-manager/commit/2df8239330deef3890a4868c3f749959309d6ec2))
* **routes/auth:** update import line of login and register component ([1588422](https://github.com/tks18/finance-manager/commit/15884228fb6db1886b2f367c66d020631da9cb33))
* **routes/master:** update the context type for master outlet ([ff4eebb](https://github.com/tks18/finance-manager/commit/ff4eebb0658ad9a4170754a161ce117f8e3a5823))
* **routes/master:** update the home component to use the token from context ([502cb4c](https://github.com/tks18/finance-manager/commit/502cb4cde713aa8462e8284158dab210955144cf))

### [0.1.6](https://github.com/tks18/finance-manager/compare/v0.1.5...v0.1.6) (2022-10-26)


### Bug Fixes 🛠

* **components/nav-list:** fix navigation path ([16d3e14](https://github.com/tks18/finance-manager/commit/16d3e144ba1178758513bc70ccc997c5b3d7edba))
* **plugins/backend:** fix user register api path ([c8dc6b1](https://github.com/tks18/finance-manager/commit/c8dc6b1d826fc8fab688a5696cbdca013b22c90e))


### Code Refactoring 🖌

* **plugins/store:** export the user workflow file ([8f91561](https://github.com/tks18/finance-manager/commit/8f915618ea1682d10a13964cf60e60c4f0385101))
* **routes/master:** fix import line ([d4204e0](https://github.com/tks18/finance-manager/commit/d4204e00d996bd810d535aa05527d0a7c32e318c))


### Build System 🏗

* **package:** add @mui/lab for more mui components ([8292033](https://github.com/tks18/finance-manager/commit/8292033d2a6bb9addc8d2bbbf5eec078a29b8488))


### Features 🔥

* **plugins/store/user:** create a selector for new prop ([b4a8f88](https://github.com/tks18/finance-manager/commit/b4a8f889a2982f4f82822b11f06c40fd18d58760))
* **plugins/user/store:** add a helper prop for handling user ([68f34df](https://github.com/tks18/finance-manager/commit/68f34df7c6f5a38689596617347e0173f65b3fea))
* **plugins/user/workflow:** create user workflow dispatch handler for handling login and register ([2116ad1](https://github.com/tks18/finance-manager/commit/2116ad1f19f85eef8d1c35a6b3b1dbd92ac47b24))
* **router:** add the auth component to routes ([9dc166e](https://github.com/tks18/finance-manager/commit/9dc166eb1064447fc5e5fd818e25d0a3c94898fc))
* **routes/auth:** write a login component ([80fa9f2](https://github.com/tks18/finance-manager/commit/80fa9f28d0918f5ba50e633f8be764b8bc13d201))
* **routes/auth:** write a register component ([7b7dca4](https://github.com/tks18/finance-manager/commit/7b7dca400ffc1c7f66fe9d14607dd41bc5fb7fcc))
* **routes/auth:** write the main auth route component ([9713b42](https://github.com/tks18/finance-manager/commit/9713b4257adf7c283d782b3122ac80a46aa58f62))
* **routes/root:** give theme for toast container ([25f9249](https://github.com/tks18/finance-manager/commit/25f9249c1b556f0b58c6675f9221c179cebf715b))

### [0.1.5](https://github.com/tks18/finance-manager/compare/v0.1.4...v0.1.5) (2022-10-25)


### Bug Fixes 🛠

* **helpers/data-grid:** fix column and row sort function ([c95aadb](https://github.com/tks18/finance-manager/commit/c95aadb970fdd9bcbf18b480ad69e9fa0eb5ee59))


### Features 🔥

* **components:** completely process data in the data grid component ([accad6a](https://github.com/tks18/finance-manager/commit/accad6a343d58d4d410337ad889b7d786c5e547b))
* **components:** render different navigation list when user is logged out ([3789bfa](https://github.com/tks18/finance-manager/commit/3789bfa2a8fad73678668b3040a8772eb86c8539))
* **components:** write a loader component ([ea276a6](https://github.com/tks18/finance-manager/commit/ea276a612f48677d292f197cb1189814b8731e0d))
* **routes/master:** use the custom loader component ([9e518e2](https://github.com/tks18/finance-manager/commit/9e518e2dd59484bdc956a4d33e6dfe3da5758044))


### Code Refactoring 🖌

* **plugins/backend:** revert back to original url ([ee81549](https://github.com/tks18/finance-manager/commit/ee815496fe183611b800f64cb40de8474b29201a))
* **routes/master:** refactor the home to reflect all the other changes ([74ef6e7](https://github.com/tks18/finance-manager/commit/74ef6e7abdac44f07a39b6ca8a6471f1098120bd))

### [0.1.4](https://github.com/tks18/finance-manager/compare/v0.1.3...v0.1.4) (2022-10-23)


### Build System 🏗

* **config:** add helper folder to alias list ([7de26fa](https://github.com/tks18/finance-manager/commit/7de26faf1b87dbda6815c76bbd82cefec9e823a1))
* **package:** add react-data-grid component ([81d12dc](https://github.com/tks18/finance-manager/commit/81d12dcd7bc387d9f0d6bb08309eb97de8e4d7b4))


### Code Refactoring 🖌

* **app:** refactor all the providers before the router to provide context to router ([8d8761d](https://github.com/tks18/finance-manager/commit/8d8761d2c4590727de19d2224e2c79fd2a4c3e35))
* **exports:** export the data-grid component ([6a673de](https://github.com/tks18/finance-manager/commit/6a673def05672c36a76bb661c2c275c6d0bd7a01))
* **routes/master:** remove error and main file and refactor it to a folder ([7117416](https://github.com/tks18/finance-manager/commit/7117416dc2868b46b0dd6a2cd857f142e61baa25))


### Features 🔥

* **components:** create a data-grid component for rendering table data from api ([271992d](https://github.com/tks18/finance-manager/commit/271992d924f0a136f0a0c56f246483eb0c62d1b7))
* **helpers:** create a data-grid helper function to prepare data for grid ([f9959aa](https://github.com/tks18/finance-manager/commit/f9959aad3d779a393d9348bcdf08cc3f1946a918))
* **plugins/backend:** add more config options to db routes ([ef35404](https://github.com/tks18/finance-manager/commit/ef35404b76ea562049c05cff28b8b9d55a433b48))
* **plugins/store:** remove logger middleware ([55d9f1e](https://github.com/tks18/finance-manager/commit/55d9f1ee7579e913bfaf5008039e84e2d514af0c))
* **router:** map all the db routes using config instead of wildcard matching ([700ece2](https://github.com/tks18/finance-manager/commit/700ece2fb228cd8f911057692e5734b55260680c))
* **routes/master:** create a basic skeleton loader ([67d184d](https://github.com/tks18/finance-manager/commit/67d184d9374cbc1176f681cde4f75dcae250000a))
* **routes/master:** create a custom typed hook for outletcontext ([ec5797a](https://github.com/tks18/finance-manager/commit/ec5797ac75c9b87476e7c0e78f271dc60cc92506))
* **routes/master:** create a root file for master template and pass context ([9c5e3b7](https://github.com/tks18/finance-manager/commit/9c5e3b7f4f67eb5efc4a9dd6be98ff29adea1226))
* **routes/master:** create the main page for master template route & display grid ([8bb5c19](https://github.com/tks18/finance-manager/commit/8bb5c190c926ae710511163bbbf9be186a7ba992))
* **routes/master:** export everything from sub-folder and remove previous component ([05c6998](https://github.com/tks18/finance-manager/commit/05c6998d9a26406bc6313383a810ce5a4fc884d4))

### [0.1.3](https://github.com/tks18/finance-manager/compare/v0.1.2...v0.1.3) (2022-10-21)


### Build System 🏗

* **packages:** replace react-location with react-router, add react-toastify for notifications ([37b0aed](https://github.com/tks18/finance-manager/commit/37b0aed40e67bb3a7e6a287ee6cfa695419162e6))


### Bug Fixes 🛠

* **components:** rewrite the linkbutton component to use react-router ([eac759f](https://github.com/tks18/finance-manager/commit/eac759f81c4f68a489e8f00c9aa32bc3dee5c887))
* **components:** use the react-router's hooks instead of react-location ([9596522](https://github.com/tks18/finance-manager/commit/95965221e6f9505a513fc660ca201813689c845c))
* **plugins/backend/routes:** fix the api route string for each data route ([97e6be1](https://github.com/tks18/finance-manager/commit/97e6be109b542e105c5d22fc21751fdb153f595f))
* **plugins/backend/setup:** use proper type in the requester function ([cb59226](https://github.com/tks18/finance-manager/commit/cb59226b01e14fae06c835cd3567f01d403ff588))
* **plugins/backend/user:** use proper types in the requester function ([bb46f46](https://github.com/tks18/finance-manager/commit/bb46f46697289d5a74d9a7ebbd74a945b42e7b46))
* **plugins/store:** properly describe error in thunk creator ([5005539](https://github.com/tks18/finance-manager/commit/50055395e3648d7a8387ef6c991723deef7ad25d))


### Code Refactoring 🖌

* **app:** properly setup app for react-router and move all contents to root routes file ([04873f1](https://github.com/tks18/finance-manager/commit/04873f1e889ec3c17467c64843e2feba21589ac0))
* **plugins/backend/helpers:** move requester to its own folder and maintain types inside that ([34d61f4](https://github.com/tks18/finance-manager/commit/34d61f4b843a1f16960ddcac9844b3627c9e7d56))
* **plugins/backend/setup:** remove redundant types ([7952a91](https://github.com/tks18/finance-manager/commit/7952a916638f16985e2c51e62d82d2c0f31b9f86))
* **plugins/backend/types:** export all the types from the sub folders ([21aea42](https://github.com/tks18/finance-manager/commit/21aea42667af977bf5dd10055bab17259d599fae))
* **plugins/backend/user:** remove all the redundant types ([8d81fdf](https://github.com/tks18/finance-manager/commit/8d81fdfdd5fd8fdb46d2d35f25bd17613de93df9))
* **plugins/backend:** properly export all the helper functions ([4b396d1](https://github.com/tks18/finance-manager/commit/4b396d17deba91cf70f93db0b7e65023db2a1454))
* **plugins/backend:** write all the exports for function as well as types ([4accfce](https://github.com/tks18/finance-manager/commit/4accfce1153e5c6b4fa8385e9be392373d1c5e78))
* **routes/home:** move the home to a seperate folder ([c3d422c](https://github.com/tks18/finance-manager/commit/c3d422c7a9ee280acf23a382568d8c9b8590fc50))
* **routes/root:** move all the contents of app to root routes file ([4e2b2b3](https://github.com/tks18/finance-manager/commit/4e2b2b3a217765b07de3ac4455727db4ea3131f4))
* **routes:** properly export all the files ([b116a58](https://github.com/tks18/finance-manager/commit/b116a58f847f3f57ddb5d7887ee7a6ab7628ba09))
* **routes:** remove about and home from routes folder ([8245b92](https://github.com/tks18/finance-manager/commit/8245b9251119187a079db3ed92497e47a0f13e12))


### Features 🔥

* **components:** add new items to navigation list ([f9ff743](https://github.com/tks18/finance-manager/commit/f9ff7432d9c72f95dc7eaae90e7e7bd6bb56ffd1))
* **components:** write a new router provider component for react-router ([ae18bb9](https://github.com/tks18/finance-manager/commit/ae18bb98dd57978162158ae2de121d2bb7ce0241))
* **main:** import react-toastify's css file ([ad8b7d8](https://github.com/tks18/finance-manager/commit/ad8b7d8910aa025cce40362d8cb50c1d605dcd25))
* **plugins/backend/data:** write a common type for api config array ([866fc6b](https://github.com/tks18/finance-manager/commit/866fc6b74682dac7701db67bb0fff901c63937ca))
* **plugins/backend/data:** write all the model creation, document types for all the master tables ([dcb5b88](https://github.com/tks18/finance-manager/commit/dcb5b88923154f0b4712f60e14f5c602313fca41))
* **plugins/backend/data:** write all the model creation, document types for transaction tables ([0445d8b](https://github.com/tks18/finance-manager/commit/0445d8b36078a3fae0caa1fe941db3557437a0ba))
* **plugins/backend/data:** write the config for all the data api paths ([76917cf](https://github.com/tks18/finance-manager/commit/76917cfa1291f4463b3116870763eb26ac9c3fad))
* **plugins/backend/helpers:** write all the types for database handler function ([83a4693](https://github.com/tks18/finance-manager/commit/83a4693bc85704892d509fe05559783f195f0ca4))
* **plugins/backend:** write a custom hook to automatically get the api config for the route ([874f8e8](https://github.com/tks18/finance-manager/commit/874f8e82768023587bfc3fa4b7062211cc4f5ec8))
* **plugins/backend:** write the database handler class for managing db routes ([4be28f0](https://github.com/tks18/finance-manager/commit/4be28f09da232adde77984c202633fe0774f4828))
* **plugins/store:** add usertoken selector to user selectors ([5d15ff1](https://github.com/tks18/finance-manager/commit/5d15ff1de692b9c214157f7d306edada2f6cfd3c))
* **router:** properly setup router for react-router ([9a21953](https://github.com/tks18/finance-manager/commit/9a2195385d4488558da4c3a9cf86466b23e52c08))
* **routes:** add a template for handling master data ([93a6145](https://github.com/tks18/finance-manager/commit/93a61456cd6083173757b5e23edef75839ad141f))
* **routes:** write a template for handle transactional data ([3d041d0](https://github.com/tks18/finance-manager/commit/3d041d0614675a54c17ec936c8cc7fdd9a060915))

### [0.1.2](https://github.com/tks18/finance-manager/compare/v0.1.1...v0.1.2) (2022-10-18)


### Build System 🏗

* **package:** add babel package and config ([f8fc0d8](https://github.com/tks18/finance-manager/commit/f8fc0d8449b6820716f2508e224aee61e1d01575))


### Others 🔧

* **.gitignore:** add build folder to gitignore file ([073e623](https://github.com/tks18/finance-manager/commit/073e623c893aac2e78f8c22b771f9c8d6da76ab2))


### Features 🔥

* **plugins/backend/setup:** add input, output and response types for setup api ([5e25395](https://github.com/tks18/finance-manager/commit/5e2539567cfd502c73b1047078a5abf7a5e1a97e))
* **plugins/backend/setup:** add setup api methods - build-calendar ([18ac625](https://github.com/tks18/finance-manager/commit/18ac625f9a098e505e9e02235f2d9286915ebf25))
* **plugins/backend/user:** add all the input, output and response types for user api ([9265242](https://github.com/tks18/finance-manager/commit/92652421fff18f3d0a294c42e9c97a1a36cb66cf))
* **plugins/backend/user:** add user api method functions - add, get, login, verify ([0734f6b](https://github.com/tks18/finance-manager/commit/0734f6b77cd1b638e08ad43792e7113912ee9f91))
* **plugins/backend:** write a api endpoint config for backend endpoints ([14392f3](https://github.com/tks18/finance-manager/commit/14392f3c5dae869083907bef2cb59ef1e56fafe0))
* **plugins/backend:** write a backend requester function to use in all api calls ([7df719b](https://github.com/tks18/finance-manager/commit/7df719bb448ee7264ccebac390a6314aaf27523f))
* **plugins/store/user:** add async thunks for user api ([c109e36](https://github.com/tks18/finance-manager/commit/c109e361c4b34a737a3a38ad26bc0de87f5049c7))
* **plugins/store/user:** add selectors for user state ([952405b](https://github.com/tks18/finance-manager/commit/952405bdfacf8b1681907f9045b2c2a2c1a60f96))
* **plugins/store/user:** write the reducer function for user state ([9b34d42](https://github.com/tks18/finance-manager/commit/9b34d42b59b909cf84bfd851dbc67c1171d29694))
* **plugins/store:** remove the persist config from the global store file ([5fc8307](https://github.com/tks18/finance-manager/commit/5fc83079aa07494825bf20324f72a4cd068e5dab))
* **plugins/store:** use a nested persist reducer for settings reducer ([0ef07ba](https://github.com/tks18/finance-manager/commit/0ef07bac6b0a0cd291cfac88f3fead9f2a9382d8))
* **plugins/store:** use a nested persist reducer for theme reducer ([0ebfbad](https://github.com/tks18/finance-manager/commit/0ebfbad5b67117e4d84bcf4e4a48eb67397ca2b0))
* **plugins/store:** write a custom asyncthunk creator to be used async functions ([41ae74d](https://github.com/tks18/finance-manager/commit/41ae74d47e13be26e66e5580d63047f16f13f458))
* **plugins/store:** write the persist config inside rootreducer file ([de707c5](https://github.com/tks18/finance-manager/commit/de707c5ceb13fde514056d3e61d4d784f7296a6a))
* **plugins:** write a custom axios interceptor plugin ([2143bc7](https://github.com/tks18/finance-manager/commit/2143bc7df64a8e60101f7a268cb8f053c2086086))
* **routes:** use dynamic import for components for code-splitting ([12ad11b](https://github.com/tks18/finance-manager/commit/12ad11b5c52ddf72cfeb6c348f350e5a084c6ee8))

### [0.1.1](https://github.com/tks18/finance-manager/compare/v0.1.1-0...v0.1.1) (2022-10-13)


### Build System 🏗

* **alias:** add more paths to alias in config ([3635309](https://github.com/tks18/finance-manager/commit/363530911b81a98944bd84fe9ef3b019e78a527c))
* **package:** add axios, redux packages and also add backend proxy url ([7dc9a27](https://github.com/tks18/finance-manager/commit/7dc9a2702d5df2d74fdf9a6fbc64bd46d0257250))


### Features 🔥

* **app:** use all the providers from the components and render the app ([5da403d](https://github.com/tks18/finance-manager/commit/5da403d461fefad00c141228e2759ac0673fe0b1))
* **components:** create a linkbutton component ([f7df539](https://github.com/tks18/finance-manager/commit/f7df5392c483c6cdeb13da0866f550c4a614d401))
* **components:** write a nav-drawer component ([6c448aa](https://github.com/tks18/finance-manager/commit/6c448aa8d5f74e3205aaf9678f0640a8f21da7b3))
* **components:** write a router provider component ([a0e6194](https://github.com/tks18/finance-manager/commit/a0e6194dfc2a4d46896c16588cde79d7bbfdfda5))
* **components:** write a store provider component ([76f564e](https://github.com/tks18/finance-manager/commit/76f564eb61fef5c608fe8b18bd54b8a7a76c4bf7))
* **components:** write a theme-provider component with the themestore config ([adc912c](https://github.com/tks18/finance-manager/commit/adc912c6731313dbc31cf4d368d218295048e576))
* **component:** write a nav-bar component ([9861114](https://github.com/tks18/finance-manager/commit/986111434fad6c50a1b029e42e74499a108923cf))
* **redux:** add settings reducers and selectors ([df7772a](https://github.com/tks18/finance-manager/commit/df7772a4e179bc602cab6204722cf9204ced9d66))
* **redux:** add theme reducers and selectors ([e67726a](https://github.com/tks18/finance-manager/commit/e67726ae9db8b09247ca371c05a9e3ab640ceab6))
* **redux:** configure custom typed hooks for the redux store ([402db10](https://github.com/tks18/finance-manager/commit/402db10712102b8b992a8359bc861c28c3b3bd5e))
* **redux:** configure the main redux store ([87b3457](https://github.com/tks18/finance-manager/commit/87b34572eda17a441756f455b4675f909bfb4022))
* **redux:** configure the root reducer ([3aff0e2](https://github.com/tks18/finance-manager/commit/3aff0e25bd2432d9377f5744c1a879a0a6eaba56))

### 0.1.1-0 (2022-10-10)


### CI 🛠

* add commitlint, versionrc files for changelog management ([f9751e7](https://github.com/tks18/finance-manager/commit/f9751e77ea44ab6288406811c36111f0b476222a))
* **git:** update .gitignore file ([10d0357](https://github.com/tks18/finance-manager/commit/10d03574383e7b4720a76bbd09ec8deb88e33a0b))
* **husky:** add husky for git hooks ([e6bc835](https://github.com/tks18/finance-manager/commit/e6bc83586a41fa58b469bde9a900141e2be9ad68))


### Others 🔧

* add license, modify description in package.json, update readme ([95e03b6](https://github.com/tks18/finance-manager/commit/95e03b6b6a954c4cd1c0ce7cf18a444ce48d73f6))
* **release:** 0.1.1-0 ([dcdc017](https://github.com/tks18/finance-manager/commit/dcdc0177ac847e837110b38213b656211c26d656))
* reupload all the files along with typescript confs ([ee48841](https://github.com/tks18/finance-manager/commit/ee48841fdafd69b5d797cef8b1b29206a5c909e7))


### Build System 🏗

* **package:** add cracojs for extending react scripts ([5c43e87](https://github.com/tks18/finance-manager/commit/5c43e87dac8b96bf574525c86ef87209b81c1374))
* **package:** add yarn v2 plugins for the project ([f08524b](https://github.com/tks18/finance-manager/commit/f08524bf0cb6a645b624d7960c8ef6dab1e6f7a5))
* **yarn:** add yarn config file ([42caecc](https://github.com/tks18/finance-manager/commit/42caecc7b0d53cb37da133b5ff9a90049f11bbed))
* **yarn:** upgrade yarn to v2, added sass to build ([c5ccb08](https://github.com/tks18/finance-manager/commit/c5ccb087d7cabb06a4bd9b0cad6c3d65fef72633))


### Code Refactoring 🖌

* **app:** refactor all folders, removed unnecessary files, added sass to project ([3981881](https://github.com/tks18/finance-manager/commit/3981881f205148cb443d301119a5453d4d56598f))
* cleanup public folder and index html file ([2f66584](https://github.com/tks18/finance-manager/commit/2f66584d17bc72905d423a46875c413b5d523281))


### Features 🔥

* add alias paths to craco config and tsconfig ([0b20d9c](https://github.com/tks18/finance-manager/commit/0b20d9c7edac187a489280502bad325aa0239ab4))
* **app:** implement new theme inside the app ([1deebc6](https://github.com/tks18/finance-manager/commit/1deebc6bcf5eebf01d3359d66559009d87393449))
* render the new app component ([399966b](https://github.com/tks18/finance-manager/commit/399966bc921e36fe6f8cfead7ad0d4b701207763))
* **routes:** implement sample routes for the app ([82e1ab3](https://github.com/tks18/finance-manager/commit/82e1ab3660197bd8639fc0d84672c7adc404e6b8))
* **theme:** add a mui theme config for the app ([0372379](https://github.com/tks18/finance-manager/commit/0372379b02a4d2b541fe85390c0920d513f9ba9d))
