export {};

interface Note {
  id: string;
  title: string;
}

interface Post {
  id: string;
  title: string;
  content: string;
}

const note: Note = {
  id: "123",
  title: "the note",
};

const post: Post = {
  id: "123",
  title: "the post",
  content: "blah blah blah",
};
