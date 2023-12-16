import pages from "gh-pages";

pages.publish(import.meta.resolve("../dist"), (err) => console.error(err));
