import { defineConfig } from 'dumi';
import path from 'path';

export default defineConfig({
  themeConfig: {
    name: 'hhhd',
  },
  resolve: {
    atomDirs: [
      { type: 'component', dir: 'packages/components' },
      { type: 'utils', dir: 'packages/hhh-utils' },
      { type: 'views', dir: 'packages/hhh-views' }
    ],
  },
  // monorepoRedirect: {
  //   srcDir: ['packages', 'packages/hhh-views'],
  // }
  alias: {
    'hhh-views': path.join(__dirname, 'packages/hhh-views/src')
  }
});
