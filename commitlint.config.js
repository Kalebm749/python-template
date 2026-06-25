module.exports = {
  extends: ["@commitlint/config-conventional"],
  rules: {
    // Types that trigger changelog entries
    "type-enum": [
      2,
      "always",
      [
        "feat",     // new feature -> minor bump
        "fix",      // bug fix -> patch bump
        "docs",     // documentation only
        "style",    // formatting, no logic change
        "refactor", // neither fix nor feature
        "perf",     // performance improvement -> patch bump
        "test",     // adding/updating tests
        "build",    // build system or deps
        "ci",       // CI/CD changes
        "chore",    // maintenance
        "revert",   // reverts a previous commit
      ],
    ],
    "subject-case": [2, "always", "lower-case"],
    "subject-empty": [2, "never"],
    "subject-full-stop": [2, "never", "."],
    "header-max-length": [2, "always", 100],
  },
};
