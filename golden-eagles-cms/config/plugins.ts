type EnvFn = {
  (key: string, defaultValue?: unknown): any;
};

export default ({ env }: { env: EnvFn }) => ({
  "users-permissions": {
    config: {
      jwtSecret: env("JWT_SECRET"),
    },
  },
});
