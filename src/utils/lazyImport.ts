import { lazy } from 'react';

export const lazyImport = (readyImport: any, element: string | null = null) => {
  return element
    ? lazy(() =>
        readyImport.then((module: any) => ({
          ...module,
          default: module[element],
        }))
      )
    : lazy(() => readyImport);
};
