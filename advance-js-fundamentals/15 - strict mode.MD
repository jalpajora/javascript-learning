## use strict

<pre>
'use strict'

// code here
</pre>

#### automatically included to your code

- babel compiler
- import and export

#### some examples of strict mode

1. non-rewritable object property (e.g Object.freeze, Object.defineProperty)
2. keywords as variable names
3. duplicate parameter names
4. eliminating access to the window access using this keyword
Example:
<pre>
function myNameIs() {
  return this;
}

myNameIs() // window

// --- IF IN STRICT MODE ----

'use strict'

function myNameIs() {
return this;
}

myNameIs() // undefined

</pre>
