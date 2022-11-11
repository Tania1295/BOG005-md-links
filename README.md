# Markdown Link Librarie

![Markdown title](../BOG005-md-links/img/mdlinks.JPG)

## Index

- [1. Project Summary](#1-project-summary)
- [2. Installation](#2-installation)
- [3. Usage](#3-usage)
- [4. Flowchart](#4-flowchart)

---

## 1. Project Summary

[Markdown](https://es.wikipedia.org/wiki/Markdown) is a markup language lightweight very popular among developers. It is used on many platforms handle plain text (GitHub, forums, blogs, ...) and it is very common
find multiple files in that format in any kind of repository (starting with the traditional `README.md`).

These `Markdown` iles usually contain _links_ that
many times they are broken or no longer valid and that greatly damages the value of
the information you want to share.

We develop a tool using [Node.js](https://nodejs.org/), that read and parse files
in `Markdown` format, to verify with a http request the status of the links, and generate some statistics.

## 2. Installation

On the command line you must write:

```
npm install tinfantebonilla-md-links
```

## 3. Usage

### 3.1 API

**Import** the library with `require()`

```js
const { mdLinks } = require("tinfantebonilla-md-links");
```

This is the function you will use:

##### `mdLinks(path, options)`

- `path`: _absolute_ or _relative_ route to the _file_ or _directory_.
- `options`: An object with only this property:
  - `validate`: Boolean that determines if links need to be validated.

It _returns_ a `Promise` that is _resolved_ with an `Array` of objects, where every `Object` represents a link and contains these properties:

With `validate:false` :

- `href`: URL that was found.
- `text`: Text inside the link (`<a>`).
- `file`: Files's route where the link was found.

With `validate:true` :

- `href`: URL that was found.
- `text`: Text inside the link (`<a>`).
- `file`: Files's route where the link was found.
- `status`: Response HTTP Code.
- `ok`: Message `fail` or `ok` (if it was successful).

Examples (results as comments):

```js
const { mdLinks } = require("jleon-md-links");
mdLinks("./some/example.md", { validate: false })
  .then(
    (links) => console.log(links)
    // => [{ href, text, file }, ...]
  )
  .catch(console.error);
mdLinks("./some/example.md", { validate: true })
  .then(
    (links) => console.log(links)
    // => [{ href, text, file, status, ok }, ...]
  )
  .catch(console.error);
mdLinks("./some/dir", { validate: false })
  .then(
    (links) => console.log(links)
    // => [{ href, text, file }, ...]
  )
  .catch(console.error);
mdLinks("./some/dir", { validate: true })
  .then(
    (links) => console.log(links)
    // => [{ href, text, file, status, ok }, ...]
  )
  .catch(console.error);
```

### 3.2 CLI

This is the way you can use the executable file by the command line:

`md-links <path-to-file> [options]`

An example:

```sh
$ md-links ./some/example.md
./some/example.md http://something.com/2/3/ Link to something
./some/example.md https://otra-cosa.net/any-doc.html any doc
./some/example.md http://google.com/ Google
```

##### Options

##### `--validate`

An example:

```sh
$ md-links ./some/example.md --validate
./some/example.md http://something.com/2/3/ Ok 200 Link to something
./some/example.md https://otra-cosa.net/any-doc.html Fail 404 any doc
./some/example.md http://google.com/ ok 301 Google
```

##### `--stats`

An example:

```sh
$ md-links ./some/example.md --stats
Total: 3
Unique: 3
```

Also you can use both `--stats` and `--validate` (it doesn´t matter the order).

Examples:

```sh
$ md-links ./some/example.md --stats --validate
Total: 3
Unique: 3
Broken: 1
```

```sh
$ md-links ./some/example.md --validate --stats
Total: 3
Unique: 3
Broken: 1
```

## 4. Flowchart

![CLI Flowchart](../BOG005-md-links/img/Diagrama%20de%20Flujo%20API%20CLI.png)
![API Flowchart](../BOG005-md-links/img/Diagrama%20de%20Flujo%20CLI.png)
