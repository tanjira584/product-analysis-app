import React from "react";
import Breadcumb from "../Breadcumb/Breadcumb";

const PageBlog = () => {
    return (
        <section>
            <Breadcumb page="Blogs"></Breadcumb>
            <div className="container py-5">
                <div className="row">
                    <div className="col-md-6">
                        <div className="blog p-4">
                            <div className="question">
                                <h4>What is Context API?</h4>
                            </div>
                            <div className="answer">
                                <p>
                                    The React Context API is a way for a React
                                    app to effectively produce global variables
                                    that can be passed around. This is the
                                    alternative to "prop drilling" or moving
                                    props from grandparent to child to parent,
                                    and so on. Context is also touted as an
                                    easier, lighter approach to state management
                                    using Redux.
                                </p>
                                <p>
                                    Context API is a (kind of) new feature added
                                    in version 16.3 of React that allows one to
                                    share state across the entire app (or part
                                    of it) lightly and with ease.
                                </p>
                                <p>
                                    React.createContext() is all you need. It
                                    returns a consumer and a provider. Provider
                                    is a component that as it's names suggests
                                    provides the state to its children. It will
                                    hold the "store" and be the parent of all
                                    the components that might need that store.
                                    Consumer as it so happens is a component
                                    that consumes and uses the state.{" "}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="blog p-4">
                            <div className="question">
                                <h4>What is Semantic Tag?</h4>
                            </div>
                            <div className="answer">
                                <p>
                                    Semantic HTML tags provide information about
                                    the contents of those tags that goes beyond
                                    just how they look on a page. Text that is
                                    enclosed in the tag is immediately
                                    recognized by the browser as some type of
                                    coding language.
                                </p>
                                <p>
                                    Using semantic tags gives you many more
                                    hooks for styling your content, too. Perhaps
                                    today you prefer to have your code samples
                                    display in the default browser style, but
                                    tomorrow, you might want to call them out
                                    with a gray background color; later still,
                                    you might want to define the precise
                                    mono-spaced font family or font stack to use
                                    for your samples. You can do all of these
                                    things easily by using semantic markup and
                                    smartly applied CSS.
                                </p>
                                <p>
                                    These are some of the roughly 100 semantic
                                    elements available: &lt;article&gt;
                                    &lt;header&gt; &lt;footer&gt; &lt;main&gt;
                                    &lt;aside&gt; &lt;section&gt; &lt;time&gt;
                                    &lt;figure&gt; &lt;figcaption&gt;
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
export default PageBlog;
