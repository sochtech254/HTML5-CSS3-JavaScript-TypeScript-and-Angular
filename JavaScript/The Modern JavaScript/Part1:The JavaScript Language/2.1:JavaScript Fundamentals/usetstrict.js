"use strict";

// "use strict" can be put at the beginning of a function. Doing that enables strict mode in that function only. But
// usually people use it for the whole script.

// Should we use strict?
// The question may sound obvious, but it’s not so.
// One could recommend to start scripts with "use strict"… But you know what’s cool?
// Modern JavaScript supports “classes” and “modules” – advanced language structures (we’ll surely get to them), that
// enable use strict automatically. So we don’t need to add the "use strict" directive, if we use them.
// So, for now "use strict"; is a welcome guest at the top of your scripts. Later, when your code is all in classes and
// modules, you may omit it.
let ferdinand = function Person(name)
{
    this.name = name;
}

