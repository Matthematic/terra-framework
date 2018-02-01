# Terra Application Menu

The ApplicationMenu is a HOC that combines config and menu subcomponents, which are then placed within the menu layout.

## Getting Started

- Install with [npmjs](https://www.npmjs.com):
  - `npm install terra-application-menu`
  - `yarn add terra-application-menu`

## Usage

```jsx
import React from 'react';
import ApplicationMenu from 'terra-application-menu';

<ApplicationMenu
  app={app}
  content={<ApplicationList links={links} />}
  layoutConfig={{
    size: PropTypes.string,
    toggleMenu: PropTypes.bool,
    menuIsOpen: PropTypes.bool,
    togglePin: PropTypes.bool,
    menuIsPinned: PropTypes.bool,
  }}
  nameConfig={{
    accessory={<ApplicationIcon />},
    title: "Application Name",
  }}
  routingStackDelegate={routingDelegate}
  utilityConfig={{
    userName: "Some User",
    userPhoto={<Image src="/image/path" />}
    userDetails="Details about user"
    onUtilityChange={(event, key) => { do.stuff(key); }}
  }}
/>
```

## Component Features
* [Cross-Browser Support](https://github.com/cerner/terra-core/wiki/Component-Features#cross-browser-support)
* [Responsive Support](https://github.com/cerner/terra-core/wiki/Component-Features#responsive-support)
* [Mobile Support](https://github.com/cerner/terra-core/wiki/Component-Features#mobile-support)