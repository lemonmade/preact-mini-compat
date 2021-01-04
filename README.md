# Preact compat demo

This repo shows the effects of a tree-shakeable version of `preact/compat`. `webpack.config.js` has comments showing the relevant configuration/ possible deoptimizations. Install dependencies and run `yarn/npm run build` to see the bundle analysis.

Running this on my machine, I got the following results for the built bundle:

- 5.69kb gzipped when using the tree-shakeable compat
- 6.89kb gzipped when using the existing `preact/compat`
