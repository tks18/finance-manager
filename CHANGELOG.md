# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

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
