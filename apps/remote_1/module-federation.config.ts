import { ModuleFederationConfig, sharePackages } from '@nx/module-federation';

const config: ModuleFederationConfig = {
  name: 'remote_1',
  exposes: {
    './Route': 'apps/remote_1/src/app/app.routes.ts'
  },
  shared: (name: string, sharedConfig) => {
    return {
      ...sharedConfig,
      singleton: true,
      strictVersion: false,
      requiredVersion: 'auto',
      eager: true
    };
  }
};

/**
 * Nx requires a default export of the config to allow correct resolution of the module federation graph.
 **/
export default config;
