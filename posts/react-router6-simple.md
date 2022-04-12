---
title: 'Basic React Router 6 & Vite'
metaTitle: 'Basic React Router 6 & Vite'
metaDesc: 'How to make simple multipage application using react(vite) and react router'
socialImage: images/post1-img.webp
date: '11-04-2022'
tags:
  - React
  - React Router
  - Vite
---

# Small and quick guide
Based on the blog [Techomoro](https://www.techomoro.com/how-to-create-a-multi-page-website-with-react-in-5-minutes/?unapproved=21780&moderation-hash=7b965ee1540f7d9d4219e2a9911b4d26#comment-21780) go there for a more in-depth explanation.

I just wanted to make a simple site whit multiple pages, but then I went to the docs and... they were different, it seems like a transition was made, anyway copied the code, nothing worked and no error logs whatsoever... 

## Instructions
1. **Instal Vite**

- `npm init vite`
- `cd` into the project
- `npm i` to install packages

2. **install react router**

`npm install react-router-dom@6`

3. **Create some dummy files**

Mine was `components/About.js`
and `components/Home.js`

4. **Update your index.js/main.jsx**

```js
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

ReactDOM.render(
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  </Router>,
  document.getElementById("root")
);
```

5. **Update About & Home components**

*About*
```js
import { NavLink } from "react-router-dom";

export default function About() {
  return (
    <>
      <main>
        <h2>Who are we?</h2>
        <p>That feels like an existential question, don't you think?</p>
      </main>
      <nav>
        <NavLink to="/">Home</NavLink>
      </nav>
    </>
  );
}
```

*Home*
```js
import { NavLink } from "react-router-dom";

export default function Home() {
  return (
    <>
      <main>
        <h2>Welcome to the homepage!</h2>
        <p>You can do this, I believe in you.</p>
      </main>
      <nav>
        <NavLink to="/about">About</NavLink>
      </nav>
    </>
  );
}
```



