import {
  postsReducer,
  loadPosts,
  savePosts,
  dismissAllPosts,
  dismissPost,
  markAsRead,
  seePostDetails,
} from "./postsReducer";

const aSinglePost = {
  kind: "t3",
  data: {
    domain: "i.imgur.com",
    banned_by: null,
    media_embed: {},
    subreddit: "funny",
    selftext_html: null,
    selftext: "",
    likes: null,
    user_reports: [],
    secure_media: null,
    link_flair_text: null,
    id: "2hqlxp",
    gilded: 0,
    secure_media_embed: {},
    clicked: false,
    report_reasons: null,
    author: "washedupwornout",
    media: null,
    score: 4841,
    approved_by: null,
    over_18: false,
    hidden: false,
    thumbnail:
      "http://b.thumbs.redditmedia.com/9N1f7UGKM5fPZydrsgbb4_SUyyLW7A27um1VOygY3LM.jpg",
    subreddit_id: "t5_2qh33",
    edited: false,
    link_flair_css_class: null,
    author_flair_css_class: null,
    downs: 0,
    mod_reports: [],
    saved: false,
    is_self: false,
    name: "t3_2hqlxp",
    permalink:
      "/r/funny/comments/2hqlxp/man_trying_to_return_a_dogs_toy_gets_tricked_into/",
    stickied: false,
    created: 1411975314,
    url: "http://i.imgur.com/4CHXnj2.gif",
    author_flair_text: null,
    title: "Man trying to return a dog's toy gets tricked into playing fetch",
    created_utc: 1411946514,
    ups: 4841,
    num_comments: 958,
    visited: false,
    num_reports: null,
    distinguished: null,
  },
};

const anotherPost = {
  kind: "t3",
  data: {
    domain: "alphagalileo.org",
    banned_by: null,
    media_embed: {},
    subreddit: "science",
    selftext_html: null,
    selftext: "",
    likes: null,
    user_reports: [],
    secure_media: null,
    link_flair_text: "Social Sciences",
    id: "2hozly",
    gilded: 0,
    secure_media_embed: {},
    clicked: false,
    report_reasons: null,
    author: "mubukugrappa",
    media: null,
    score: 4498,
    approved_by: null,
    over_18: false,
    hidden: false,
    thumbnail: "",
    subreddit_id: "t5_mouw",
    edited: false,
    link_flair_css_class: "soc",
    author_flair_css_class: null,
    downs: 0,
    mod_reports: [],
    saved: false,
    is_self: false,
    name: "t3_2hozly",
    permalink:
      "/r/science/comments/2hozly/the_secret_to_raising_well_behaved_teens_maximise/",
    stickied: false,
    created: 1411937584,
    url:
      "http://www.alphagalileo.org/ViewItem.aspx?ItemId=145707&amp;CultureCode=en",
    author_flair_text: null,
    title:
      "The secret to raising well behaved teens? Maximise their sleep: While paediatricians warn sleep deprivation can stack the deck against teenagers, a new study reveals youth’s irritability and laziness aren’t down to attitude problems but lack of sleep",
    created_utc: 1411908784,
    ups: 4498,
    num_comments: 3740,
    visited: false,
    num_reports: null,
    distinguished: null,
  },
};

describe("Posts Reducer", () => {
  it("Should return initial state", () => {
    expect(postsReducer(undefined, {})).toEqual({
      posts: [],
      post: {},
      isLoading: false,
      isErrored: false,
    });
  });

  it("Should set the loading as true", () => {
    expect(postsReducer(undefined, loadPosts)).toEqual({
      posts: [],
      post: {},
      isLoading: true,
      isErrored: false,
    });
  });

  it("Should save the post into the store", () => {
    expect(postsReducer(undefined, savePosts([aSinglePost]))).toEqual({
      posts: [aSinglePost],
      post: {},
      isLoading: false,
      isErrored: false,
    });
  });

  it("Should remove posts from store on dismiss all", () => {
    const reducer = postsReducer(undefined, savePosts([aSinglePost]));

    expect(reducer).toEqual({
      posts: [aSinglePost],
      post: {},
      isLoading: false,
      isErrored: false,
    });

    expect(postsReducer(reducer, dismissAllPosts)).toEqual({
      posts: [],
      post: {},
      isLoading: false,
      isErrored: false,
    });
  });

  it("Should remove only one post on dismiss single post", () => {
    const reducer = postsReducer(
      undefined,
      savePosts([aSinglePost, anotherPost])
    );

    expect(reducer).toEqual({
      posts: [aSinglePost, anotherPost],
      post: {},
      isLoading: false,
      isErrored: false,
    });

    expect(postsReducer(reducer, dismissPost(anotherPost.data.id))).toEqual({
      posts: [aSinglePost],
      post: {},
      isLoading: false,
      isErrored: false,
    });
  });

  it("Should mark post as read", () => {
    const reducer = postsReducer(
      undefined,
      savePosts([aSinglePost, anotherPost])
    );

    expect(reducer).toEqual({
      posts: [aSinglePost, anotherPost],
      post: {},
      isLoading: false,
      isErrored: false,
    });

    let readPost = {
      ...aSinglePost,
      ...{ data: { ...aSinglePost.data, ...{ clicked: true } } },
    };

    expect(postsReducer(reducer, markAsRead(aSinglePost.data.id))).toEqual({
      posts: [readPost, anotherPost],
      post: {},
      isLoading: false,
      isErrored: false,
    });
  });

  it("Should store post on read", () => {
    const reducer = postsReducer(
      undefined,
      savePosts([aSinglePost, anotherPost])
    );

    expect(reducer).toEqual({
      posts: [aSinglePost, anotherPost],
      post: {},
      isLoading: false,
      isErrored: false,
    });

    expect(postsReducer(reducer, seePostDetails(aSinglePost))).toEqual({
      posts: [aSinglePost, anotherPost],
      post: aSinglePost,
      isLoading: false,
      isErrored: false,
    });
  });
});
