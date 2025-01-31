'use strict';

customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">nestjs-masterclass documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                                <li class="link">
                                    <a href="properties.html" data-type="chapter-link">
                                        <span class="icon ion-ios-apps"></span>Properties
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-bs-toggle="collapse" ${ isNormalMode ?
                                'data-bs-target="#modules-links"' : 'data-bs-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link" >AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AppModule-1bca6aad17fb843a8d60f9f91a14cb5053f92e13137e0d8e77ef1002c357cb1514f6faf00645e57c1a0c26760d75ac91a246236dd97f07ea8af296fe747177e3"' : 'data-bs-target="#xs-controllers-links-module-AppModule-1bca6aad17fb843a8d60f9f91a14cb5053f92e13137e0d8e77ef1002c357cb1514f6faf00645e57c1a0c26760d75ac91a246236dd97f07ea8af296fe747177e3"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AppModule-1bca6aad17fb843a8d60f9f91a14cb5053f92e13137e0d8e77ef1002c357cb1514f6faf00645e57c1a0c26760d75ac91a246236dd97f07ea8af296fe747177e3"' :
                                            'id="xs-controllers-links-module-AppModule-1bca6aad17fb843a8d60f9f91a14cb5053f92e13137e0d8e77ef1002c357cb1514f6faf00645e57c1a0c26760d75ac91a246236dd97f07ea8af296fe747177e3"' }>
                                            <li class="link">
                                                <a href="controllers/AppController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AppModule-1bca6aad17fb843a8d60f9f91a14cb5053f92e13137e0d8e77ef1002c357cb1514f6faf00645e57c1a0c26760d75ac91a246236dd97f07ea8af296fe747177e3"' : 'data-bs-target="#xs-injectables-links-module-AppModule-1bca6aad17fb843a8d60f9f91a14cb5053f92e13137e0d8e77ef1002c357cb1514f6faf00645e57c1a0c26760d75ac91a246236dd97f07ea8af296fe747177e3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AppModule-1bca6aad17fb843a8d60f9f91a14cb5053f92e13137e0d8e77ef1002c357cb1514f6faf00645e57c1a0c26760d75ac91a246236dd97f07ea8af296fe747177e3"' :
                                        'id="xs-injectables-links-module-AppModule-1bca6aad17fb843a8d60f9f91a14cb5053f92e13137e0d8e77ef1002c357cb1514f6faf00645e57c1a0c26760d75ac91a246236dd97f07ea8af296fe747177e3"' }>
                                        <li class="link">
                                            <a href="injectables/AppService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AppService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/AuthModule.html" data-type="entity-link" >AuthModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-AuthModule-6635e35f1e06f4530ead8f58ef62cb899a6ebcb50677b8d2f1441717555e45e58d83254a06087d5a1c253c8877a26a0ac418b6f8d978140188e2e0985d632b89"' : 'data-bs-target="#xs-controllers-links-module-AuthModule-6635e35f1e06f4530ead8f58ef62cb899a6ebcb50677b8d2f1441717555e45e58d83254a06087d5a1c253c8877a26a0ac418b6f8d978140188e2e0985d632b89"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-AuthModule-6635e35f1e06f4530ead8f58ef62cb899a6ebcb50677b8d2f1441717555e45e58d83254a06087d5a1c253c8877a26a0ac418b6f8d978140188e2e0985d632b89"' :
                                            'id="xs-controllers-links-module-AuthModule-6635e35f1e06f4530ead8f58ef62cb899a6ebcb50677b8d2f1441717555e45e58d83254a06087d5a1c253c8877a26a0ac418b6f8d978140188e2e0985d632b89"' }>
                                            <li class="link">
                                                <a href="controllers/AuthController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-AuthModule-6635e35f1e06f4530ead8f58ef62cb899a6ebcb50677b8d2f1441717555e45e58d83254a06087d5a1c253c8877a26a0ac418b6f8d978140188e2e0985d632b89"' : 'data-bs-target="#xs-injectables-links-module-AuthModule-6635e35f1e06f4530ead8f58ef62cb899a6ebcb50677b8d2f1441717555e45e58d83254a06087d5a1c253c8877a26a0ac418b6f8d978140188e2e0985d632b89"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-AuthModule-6635e35f1e06f4530ead8f58ef62cb899a6ebcb50677b8d2f1441717555e45e58d83254a06087d5a1c253c8877a26a0ac418b6f8d978140188e2e0985d632b89"' :
                                        'id="xs-injectables-links-module-AuthModule-6635e35f1e06f4530ead8f58ef62cb899a6ebcb50677b8d2f1441717555e45e58d83254a06087d5a1c253c8877a26a0ac418b6f8d978140188e2e0985d632b89"' }>
                                        <li class="link">
                                            <a href="injectables/AuthService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >AuthService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PostModule.html" data-type="entity-link" >PostModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-PostModule-225f770ba2ddb2d4ca4ccd8ae6104a650a27a6bf50c0b93545c2fa9523f4ff0bf06ce31a2cbe0a305d6f796b7d16af21ac85c8755baa68288ecea559e724ffa9"' : 'data-bs-target="#xs-controllers-links-module-PostModule-225f770ba2ddb2d4ca4ccd8ae6104a650a27a6bf50c0b93545c2fa9523f4ff0bf06ce31a2cbe0a305d6f796b7d16af21ac85c8755baa68288ecea559e724ffa9"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-PostModule-225f770ba2ddb2d4ca4ccd8ae6104a650a27a6bf50c0b93545c2fa9523f4ff0bf06ce31a2cbe0a305d6f796b7d16af21ac85c8755baa68288ecea559e724ffa9"' :
                                            'id="xs-controllers-links-module-PostModule-225f770ba2ddb2d4ca4ccd8ae6104a650a27a6bf50c0b93545c2fa9523f4ff0bf06ce31a2cbe0a305d6f796b7d16af21ac85c8755baa68288ecea559e724ffa9"' }>
                                            <li class="link">
                                                <a href="controllers/PostController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-PostModule-225f770ba2ddb2d4ca4ccd8ae6104a650a27a6bf50c0b93545c2fa9523f4ff0bf06ce31a2cbe0a305d6f796b7d16af21ac85c8755baa68288ecea559e724ffa9"' : 'data-bs-target="#xs-injectables-links-module-PostModule-225f770ba2ddb2d4ca4ccd8ae6104a650a27a6bf50c0b93545c2fa9523f4ff0bf06ce31a2cbe0a305d6f796b7d16af21ac85c8755baa68288ecea559e724ffa9"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-PostModule-225f770ba2ddb2d4ca4ccd8ae6104a650a27a6bf50c0b93545c2fa9523f4ff0bf06ce31a2cbe0a305d6f796b7d16af21ac85c8755baa68288ecea559e724ffa9"' :
                                        'id="xs-injectables-links-module-PostModule-225f770ba2ddb2d4ca4ccd8ae6104a650a27a6bf50c0b93545c2fa9523f4ff0bf06ce31a2cbe0a305d6f796b7d16af21ac85c8755baa68288ecea559e724ffa9"' }>
                                        <li class="link">
                                            <a href="injectables/PostService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >PostService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/UserModule.html" data-type="entity-link" >UserModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                            'data-bs-target="#controllers-links-module-UserModule-1aa4c6cd700e44dbad1ddffffccf551ef2cffba7e403d2fbee6702f4a2099ddd1914114998d5833d0c58605a3388e582584a7c519f457a2cd35ffe5618aee983"' : 'data-bs-target="#xs-controllers-links-module-UserModule-1aa4c6cd700e44dbad1ddffffccf551ef2cffba7e403d2fbee6702f4a2099ddd1914114998d5833d0c58605a3388e582584a7c519f457a2cd35ffe5618aee983"' }>
                                            <span class="icon ion-md-swap"></span>
                                            <span>Controllers</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="controllers-links-module-UserModule-1aa4c6cd700e44dbad1ddffffccf551ef2cffba7e403d2fbee6702f4a2099ddd1914114998d5833d0c58605a3388e582584a7c519f457a2cd35ffe5618aee983"' :
                                            'id="xs-controllers-links-module-UserModule-1aa4c6cd700e44dbad1ddffffccf551ef2cffba7e403d2fbee6702f4a2099ddd1914114998d5833d0c58605a3388e582584a7c519f457a2cd35ffe5618aee983"' }>
                                            <li class="link">
                                                <a href="controllers/UserController.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserController</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ?
                                        'data-bs-target="#injectables-links-module-UserModule-1aa4c6cd700e44dbad1ddffffccf551ef2cffba7e403d2fbee6702f4a2099ddd1914114998d5833d0c58605a3388e582584a7c519f457a2cd35ffe5618aee983"' : 'data-bs-target="#xs-injectables-links-module-UserModule-1aa4c6cd700e44dbad1ddffffccf551ef2cffba7e403d2fbee6702f4a2099ddd1914114998d5833d0c58605a3388e582584a7c519f457a2cd35ffe5618aee983"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-UserModule-1aa4c6cd700e44dbad1ddffffccf551ef2cffba7e403d2fbee6702f4a2099ddd1914114998d5833d0c58605a3388e582584a7c519f457a2cd35ffe5618aee983"' :
                                        'id="xs-injectables-links-module-UserModule-1aa4c6cd700e44dbad1ddffffccf551ef2cffba7e403d2fbee6702f4a2099ddd1914114998d5833d0c58605a3388e582584a7c519f457a2cd35ffe5618aee983"' }>
                                        <li class="link">
                                            <a href="injectables/UserService.html" data-type="entity-link" data-context="sub-entity" data-context-id="modules" >UserService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#controllers-links"' :
                                'data-bs-target="#xs-controllers-links"' }>
                                <span class="icon ion-md-swap"></span>
                                <span>Controllers</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="controllers-links"' : 'id="xs-controllers-links"' }>
                                <li class="link">
                                    <a href="controllers/AppController.html" data-type="entity-link" >AppController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/AuthController.html" data-type="entity-link" >AuthController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/PostController.html" data-type="entity-link" >PostController</a>
                                </li>
                                <li class="link">
                                    <a href="controllers/UserController.html" data-type="entity-link" >UserController</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#classes-links"' :
                            'data-bs-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/CreatePostDTO.html" data-type="entity-link" >CreatePostDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreatePostMetaOptionsDTO.html" data-type="entity-link" >CreatePostMetaOptionsDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/CreateUserDTO.html" data-type="entity-link" >CreateUserDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/GetUserParamsDTO.html" data-type="entity-link" >GetUserParamsDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchPostDTO.html" data-type="entity-link" >PatchPostDTO</a>
                            </li>
                            <li class="link">
                                <a href="classes/PatchUserDTO.html" data-type="entity-link" >PatchUserDTO</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#injectables-links"' :
                                'data-bs-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/AppService.html" data-type="entity-link" >AppService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/AuthService.html" data-type="entity-link" >AuthService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/PostService.html" data-type="entity-link" >PostService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/UserService.html" data-type="entity-link" >UserService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-bs-toggle="collapse" ${ isNormalMode ? 'data-bs-target="#miscellaneous-links"'
                            : 'data-bs-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/enumerations.html" data-type="entity-link">Enums</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank" rel="noopener noreferrer">
                            <img data-src="images/compodoc-vectorise.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});