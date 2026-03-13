What is the difference between res.send() and res.sendFile()? When would you use one over the other?

    The difference between res.send() and res.sendFile(), is that send can send a variety of file types like json and plain tex, but sendFile works only for static files such as HTML documents and and images.


Why is the path module necessary when serving files? What could go wrong if you just used a relative path like 'public/index.html'?

    Can you just link to index.html? No? I'm kidding. Paths simplify the process of connecting file/folder paths, so you don't have to worry about syntax across platforms. 


How would you add a third page (e.g., a menu page) to this server? What steps would you take?

    import path from "path";

    const _dirname = import.meta.dirname;

    console.log(_dirname);

    app.use(express.static(path.join(_dirname, "public")));

    app.get("/menu", (req, res) => {
      res.sendFile(path.join(_dirname, "public/menu.html"));
    });
     

references (I'll format this later):

https://lakhan10.medium.com/express-responses-what-is-diffrence-in-res-send-and-res-sendfile-methods-cceb68c9912d

https://medium.com/@finnkumar6/understanding-the-path-module-in-node-js-a-simple-guide-37d50ffe5c4e