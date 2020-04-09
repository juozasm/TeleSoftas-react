# 1 STRUCTURING APP AND CODE GEN

## STRUCTURING APP

[ATOMIC DESIGN GIT EXAMPLE](https://github.com/danilowoz/react-atomic-design)
[REACT STRUCTURE FAQ](https://reactjs.org/docs/faq-structure.html)
[Domain driven design](https://css-tricks.com/domain-driven-design-with-react/])
[Modules](https://dev.to/jack/organizing-your-react-app-into-modules-d6n)

- Structure domain - feature level
- Structure by file type
- Hybrid structure?
- index.js only to combine modules or export, for LATER searching files clearly
- Let's not forget react is not opinionated library

## Separate of Concerns

[React SoC](https://blog.g2i.co/react-separation-of-concerns-78ec0545bf36)
[Separation of Concerns Re-Revisited](https://markus.oberlehner.net/blog/separation-of-concerns-re-revisited/)

[Golden rule](https://www.freecodecamp.org/news/how-the-golden-rule-of-react-components-can-help-you-write-better-code-127046b478eb/)

- What is tight coupling?
- Separating Concerns User Interface and Domain logic
- Leakage of domain logic
- Solved by lifting state, to a container

[Separating responsibilities in your code (using React Hooks as example)
](https://medium.com/@sairysss/react-separating-responsibilities-using-hooks-b9c90dbb3ab9)

- Presentational components
- Business logic
- Implementation logic
