# Welcome (Please contribute to this document if you think of something)
If you want to make contributions to the D-Guild webpage please read this document first. To keep the code base clean and easy to read we have some basic rules that needs to be followed.

# Code style
Code shall be linted by ESLint according to the accompanied `.eslintrc`.

Every component should be documented in such a way that is conveys its intention, child component ownership and api usage (i.e. conveying its statefullness).

# Unit tests
All written code should have unit tests. And all tests must pass before a commit is reviewed.

# Branches
Currently we have 2 main branches, `master` and `dev`.
`dev` is the development branch, all pull requests shall be aimed at `dev`.
`master` is our release branch and is unreachable to everyone except the admin team.
`master` is the current state of the website, and as soon as we've made major improvements on the `dev` branch we will merge them with `master`.

If you have any questions, suggestions or complaints, reach out to one of the admins.

# Commits
If your commit closes an issue, be sure to utilize commit naming conventions such as: `resolves user/repository#{number of issue}`

Example: `Fixed improper render of Profile component, resolves Dsek-LTH/Website#1337`

# Guidelines
**Thou shalt write thine tests.**

**Thou shalt lint thy code.**

**Thou shalt document thy code.**

**Thou shalt motivate thine refactors.**
