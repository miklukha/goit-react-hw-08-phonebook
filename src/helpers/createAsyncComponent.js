import { lazy } from 'react';

export const createAsyncComponent = componentName => {
  return lazy(() =>
    import(`../pages/${componentName}`).then(module => ({
      ...module,
      default: module[componentName],
    }))
  );
};
