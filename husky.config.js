module.exports = {
  hooks: {
    'commit-msg': 'commitlint -E HUSKY_GIT_PARAMS',
    "prepare-commit-msg": "exec < /dev/tty && git cz --hook || true",
    'pre-commit': 'lint-staged',
    'pre-push': 'npm run test:prod',
  },
};
