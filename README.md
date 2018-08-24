# WebGME-Bindings

THIS IS STILL WORK IN PROGRESS. THESE INSTRUCTIONS DEPEND ON NON-RELEASED VERSIONS OF WEBGME-ENGINE, WEBGME AND WEBGME-CLI!

This module provides bindings to the Core, Project and certain extent
PluginBase APIs of WebGME. This allows developers to implement the
plugin logic without using JavaScript. The implementation is a simple client-server
approach using [ZeroMQ](http://zeromq.org/).

- Currently only Python is supported ([info on how to add another language](./srcripts/README.md))
- A non-native plugin still needs a "wrapping" plugin in javascript that starts the ZeroMQ-server
and invokes the non-native plugin. For python the boiler-plate code (including a debug entry) can be
generated from `webgme-cli` with the command:
```
webgme new plugin MyPythonPlugin --language python
```


### Getting started
Before getting started make sure that you have [all the webgme dependencies and set
up and a webgme-app repo initialized and working](https://webgme.readthedocs.io/en/latest/getting_started/dependencies.html).
Make sure your webgme version is >= 2.30.0 (and the webgme-engine version >= 2.21.0 in the global webgme-cli module).

- Add `webgme-bindings` as a dependency.
```
npm install webgme-bindings --save
```

If everything worked out so far, at this point all the nodejs side dependencies are satisfied.

One last thing before proceeding. Since the non-native plugins must run on the server, server-side execution of plugins must be enabled.
In your `./config/config.default.js` add the following line (right before the `module.exports = config;` statement:
```javascript
config.plugin.allowServerExecution = true;
```

#### Setting up Python
The python api is confirmed to work both with both `2.7` and `3.x`. The only third part dependency is
[pyzmq](https://github.com/zeromq/pyzmq) which should work [down to 2.5](https://pyzmq.readthedocs.io/en/latest/pyversions.html).

Note that in the Python API strings are documented as `str` even though in python `2.7` they technically are `unicode`.
(PyZMQ has an explanation of the differences for the interested one [over here](https://pyzmq.readthedocs.io/en/latest/unicode.html).)

1. Install python and make sure it's added to PATH (typing `python` in a shell/cmd should start the python REPL).
2. Install [pip](https://pypi.org/project/pip/) (with the later versions of python 3 it comes packaged with some installers).

##### Installing from https://pypi.org/

```pip install webgme_bindings```

##### Installing from source
1. ```git clone https://github.com/webgme/bindings.git```
2. `cd bindings/python/webgme_bindings`
3. `pip install -e .`



### Why ZeroMQ?
It is:
- cross-platform and runs on windows and unix-like systems.
- providing [bindings](http://zeromq.org/bindings:_start) in a wide range of languages.
- lightweight and designed with performance in mind.
- used [elsewhere](http://www.zerorpc.io/) to bridge APIs over language barriers.
- a living and maintained technology with a [large community](https://github.com/zeromq) (at least in August 2018).
- open source and has a non-invasive [license](http://zeromq.org/area:licensing).


### Performance
