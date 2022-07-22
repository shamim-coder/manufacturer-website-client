import React from "react";
import SectionTop from "../../Components/SectionTop/SectionTop";
import "./Blogs.css";

const Blogs = () => {
    return (
        <section className="blogs py-10">
            <SectionTop title={"Blogs"} />
            <div className="container max-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
                <article>
                    <h2>What are the different ways to manage a state is a React application?</h2>
                    <p>3 Ways To Handle State Better in React</p>
                    <h4>Custom Hooks</h4>
                    <p>When using React hooks, you can sometimes end up with incredibly complex stateful logic within a single component that uses multiple types of hooks to achieve a single purpose.</p>

                    <h4>Global State Management</h4>
                    <p>In most cases, you don't need a government library. Only in larger applications that deal with complex states should you implement an external library to manage them.</p>

                    <h4>Use useReducer for Complex State</h4>
                    <p>
                        Sometimes the <code>useState</code> hook won't cut it, especially when you're dealing with complex stateful behavior that can involve large objects. The <code>useReducer</code> hook is a powerful React hook for solving complex
                        state management that doesn't require third-party dependencies.
                    </p>
                </article>

                <article>
                    <h2>What is a unit test? Why should write unit tests?</h2>
                    <h4>What is Unit Testing?</h4>
                    <p>
                        Unit testing is a type of software testing in which individual units or software components are tested. Its purpose is to verify that each unit of code works as expected. A unit can be anything you want - a line of code, a
                        method, or a class.
                    </p>
                    <p>In general, smaller tests are better because they provide a more detailed view of your code's performance. Also, when you test very small units, your tests can run fast, like a thousand tests per second fast.</p>

                    <h4>Why Do We Need Unit Testing?</h4>

                    <p>
                        Unit tests save time and money. We usually tend to test the happy path more than the unhappy path. If you release such an application without thorough testing, you will constantly have to fix the problems that your potential
                        users have pointed out. The time to resolve these issues could have been used to create new features or optimize the existing system. Keep in mind that fixing bugs without running tests can also introduce new bugs into the
                        system.
                    </p>
                </article>

                <article>
                    <h2>What are the different ways to manage a state is a React application?</h2>
                    <p>In JavaScript, objects inherit properties from other objects — prototypes. This is the idea of prototypic inheritance.</p>
                    <p>JavaScript looks for inherited properties in the prototype of the object, but also in the prototype of the prototype, and so on in the prototype chain.</p>
                    <p>While prototype inheritance seems clunky at first, once you understand it you can enjoy its simplicity and possibilities. Objects inherit properties from objects - what could be simpler?</p>
                </article>

                <article>
                    <h2>
                        Why you do not set the state directly in React. For example, if you have const <code>[products, setProducts] = useState([])</code>. Why you do not set <code>products = [...]</code> instead, you use the <code>setProducts</code>
                    </h2>
                    <p>
                        Because simply re-assigning a variable has no way of triggering any sort of action in the framework, so it wouldn't trigger a re-render. You certainly could re-assign a (non-const) variable in any given render. But all it
                        would do is change the value of that variable for that single execution of that function.
                    </p>
                </article>
                <article>
                    <h2>How will you improve the performance of a React Application?</h2>
                    <p>
                        Using binding functions in constructors: By adding an arrow function to a class, we add it as an object and not as a prototype property of the class. And if we use the component multiple times, there will be different
                        instances of these functions in each component object. The most reliable way to use functions is to bind them to a constructor.
                    </p>
                    <p>
                        Avoid inline style attributes: The browser often invests a lot of time in rendering when styles are implied to be inline. Scripting and rendering takes time because the browser has to schedule all React style rules according
                        to CSS properties. Creating a separate style.js file and importing it into the component is a faster method.
                    </p>
                </article>
            </div>
        </section>
    );
};

export default Blogs;
