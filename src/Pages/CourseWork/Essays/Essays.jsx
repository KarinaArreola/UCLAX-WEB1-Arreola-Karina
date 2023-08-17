import styled from "styled-components";

/* Component ------------*/
import Essay from "./Essay.jsx";

const Essays = () => {
    return (
        <EssaysStyled className="Essays">
            <h2>Essays</h2>
            <Essay question="Q1: Explain the difference between HTML, CSS and JavaScript.">
                1. HTML: It stands for Hyper Text Markup Language. It’s one of
                the most basic building blocks of the web. it’s a standardized
                tagging text files readable by all browsers. It drives the
                structure, hierarchy and content of a websites. It mostly
                contains text, but it can also contain images. CSS: It stand for
                Cascading Style System. It describes the properties of HTML
                objects and how they will be rendered by a browser. CSS can be
                found within an HTML or JavaScript file or it can be it’s own
                file and be reference within other files of a website.
                JavaScript: It is one of the core technologies of the World Wide
                Web and as of now ~98% of websites and pages use some form of JS
                on the client side of the webpage’s behavior.JavaScript defines
                the behavior of elements within a page.
            </Essay>
            <Essay question="Q2: What is the difference between Git and Github?">
                2. Git is a distributed version control system that allows
                developers to track changes in their codebase. It was created by
                Linus Torvalds, the creator of Linux, and is widely used across
                the software development community. Git provides a way for
                multiple developers to collaborate on a project, keep track of
                changes, and merge their work together seamlessly. It offers
                features such as branching, merging, and version history. GitHub
                is a web-based platform that provides hosting for Git
                repositories. It offers additional features and services built
                around Git. GitHub allows developers to store their Git
                repositories remotely and provides a web interface for managing
                those repositories. It offers collaboration features, such as
                issue tracking, pull requests, and code reviews. GitHub also
                provides a platform for open-source projects, allowing
                developers to contribute to public repositories and manage their
                projects more effectively. In summary, Git is the underlying
                version control system that enables tracking changes in code,
                while GitHub is a platform built on top of Git that provides
                hosting, collaboration, and additional tools for managing Git
                repositories. Git can be used independently without GitHub, but
                GitHub relies on Git for its core functionality. Other platforms
                that use Git are: Sourcetree (by Atlassian) and GitLab.
            </Essay>
            <Essay question="Q3: What is the difference between JQuery and React?">
                3. jQuery and React are both JavaScript libraries, but they
                serve different purposes and have distinct characteristics:
                Purpose: jQuery: jQuery is primarily a library focused on
                simplifying and streamlining DOM manipulation and handling
                browser events. It was created to address inconsistencies in how
                different browsers interact with the DOM and provides a concise
                and consistent API for these tasks. React: React, on the other
                hand, is a comprehensive JavaScript library for building user
                interfaces. It enables developers to create reusable UI
                components and efficiently update and manage the UI as the
                application state changes. DOM Manipulation: jQuery: jQuery
                provides a wide range of functions to manipulate the DOM, select
                elements, and perform actions like showing/hiding elements,
                changing attributes, handling events, and more. React: React
                introduces a Virtual DOM, an abstraction of the actual DOM. It
                optimizes the process of updating the actual DOM by calculating
                the minimal changes needed and then updating only those parts of
                the actual DOM. React components describe how the UI should look
                at any given time, and React takes care of updating the real DOM
                accordingly. Component-Based Architecture: jQuery: While you can
                structure your code in a modular way using jQuery, it doesn't
                inherently enforce a component-based architecture. React: React
                is built around the concept of reusable components. Components
                encapsulate their own logic and UI, making it easier to manage
                and develop complex applications. State Management: jQuery:
                jQuery doesn't provide a standardized way to manage application
                state. Developers often have to use global variables or custom
                patterns for this purpose. React: React applications are
                designed to manage state efficiently. React provides mechanisms
                to manage component-level state and also integrates well with
                state management libraries like Redux or the built-in Context
                API for managing global state. Performance: jQuery: Direct DOM
                manipulation in jQuery can be less performant when dealing with
                complex UI updates, as every change directly affects the actual
                DOM. React: React's Virtual DOM and efficient reconciliation
                process make it highly performant, especially in applications
                with frequent updates or changes. Learning Curve: jQuery: jQuery
                is relatively straightforward and easy to learn, especially for
                those familiar with basic JavaScript and HTML. React: React
                introduces concepts like JSX (a syntax extension for JavaScript
                that allows you to write HTML-like code within JavaScript) and a
                component-based architecture, which might have a steeper
                learning curve, especially for beginners. In summary, jQuery is
                primarily a DOM manipulation library that simplifies common
                browser tasks, while React is a comprehensive library for
                building dynamic user interfaces with a focus on component
                reusability and efficient updates. The choice between them
                depends on the complexity and nature of the project you're
                working on.
            </Essay>
            <Essay question="Q4: What is the difference between a Front-End and Back-End Developer?">
                4. Front-End Developer: User Interface (UI): Front-end
                developers are responsible for creating the user interface that
                users interact with directly. This includes designing and
                implementing the layout, visual elements, and overall look and
                feel of the application. Technologies: Front-end developers work
                with technologies such as HTML (Hypertext Markup Language), CSS
                (Cascading Style Sheets), and JavaScript to build responsive and
                interactive user interfaces. They might also use front-end
                frameworks like React, Angular, or Vue.js to simplify UI
                development. Responsibilities: Implementing designs provided by
                UI/UX designers. Writing clean and semantic HTML for structuring
                content. Styling and positioning elements using CSS to achieve
                desired visual effects. Enhancing user experience through
                interactive features and animations using JavaScript. Ensuring
                responsive design for various screen sizes and devices. Focus:
                Front-end developers primarily focus on the visual and
                interactive aspects of the application that users directly
                interact with in their browsers. Back-End Developer: Server-Side
                Logic: Back-end developers are responsible for the server-side
                logic of a web application. This includes handling data
                processing, server-side scripting, and interactions with
                databases and other external systems. Technologies: Back-end
                developers work with various programming languages (such as
                Python, Ruby, Java, Node.js, etc.) to build the server-side
                components. They use frameworks like Express.js, Django, or Ruby
                on Rails to streamline server-side development.
                Responsibilities: Implementing business logic and algorithms to
                process and manage data. Interacting with databases to store and
                retrieve information. Developing APIs (Application Programming
                Interfaces) for communication between front-end and back-end.
                Ensuring security measures, such as user authentication and data
                protection. Optimizing server performance and scalability.
                Focus: Back-end developers primarily focus on the
                behind-the-scenes aspects of the application, handling data
                storage, processing, and communication with external services.
                Full-Stack Developer: In addition to front-end and back-end
                developers, there's also a role known as a full-stack developer.
                A full-stack developer has expertise in both front-end and
                back-end development, allowing them to work on all aspects of a
                web application, from designing user interfaces to building
                server-side logic and databases. They bridge the gap between
                both sides of development and are capable of handling end-to-end
                development tasks. In summary, front-end developers deal with
                the user interface and user experience, while back-end
                developers handle the server-side logic and data management.
                Together, they collaborate to create a functional and appealing
                web application.
            </Essay>
            <Essay question="Q5: What is the difference between Absolute, Root and Document Relative linking?">
                5. Absolute Linking: An absolute link provides the full URL to
                the resource, including the protocol (http or https), domain,
                and path. Example: "https//example.com/images/pic.jpg" Absolute
                links are independent of the current location of the HTML file.
                They work regardless of where the HTML file is hosted.
                Root-Relative Linking: A root-relative link starts with a
                forward slash (/) and is relative to the root directory of the
                website. Example: "/styles/main.css" Root-relative links are
                also independent of the current location of the HTML file. They
                ensure that the resource is loaded from the root of the website,
                regardless of the page's location. Document-Relative Linking: A
                document-relative link specifies the path to a resource relative
                to the location of the current HTML file. Example:
                "../about.html" Document-relative links are dependent on the
                current file's location. The ../ in the example above signifies
                moving up one directory level relative to the current file's
                location.
            </Essay>
            <Essay question="Q6: What is the difference between jpg, gif, png and svg images?">
                6. JPEG (JPG): JPEG stands for Joint Photographic Experts Group.
                It's a widely used image format for photographs and images with
                complex color gradients. Supports lossy compression, which
                reduces file size by discarding some image data. This can result
                in a reduction in image quality. Suitable for photographs and
                images where a small loss in quality is acceptable. Doesn't
                support transparency. GIF: GIF stands for Graphics Interchange
                Format. Supports lossless compression, maintaining image quality
                while reducing file size. Limited to a maximum of 256 colors,
                making it ideal for simple graphics, animations, and images with
                areas of solid color. Supports animation by stacking multiple
                frames in a single file. Supports transparency (alpha channel),
                allowing parts of the image to be transparent. PNG: PNG stands
                for Portable Network Graphics. Supports lossless compression and
                preserves image quality while achieving reasonable file sizes.
                Ideal for images with transparency, detailed graphics, and
                images with text or line art. Offers both indexed color and
                truecolor options. Supports alpha transparency, allowing images
                with varying levels of transparency. SVG: SVG stands for
                Scalable Vector Graphics. Unlike raster formats (JPEG, GIF,
                PNG), SVG is a vector format, meaning it's based on mathematical
                descriptions of shapes rather than pixels. Scalable without loss
                of quality; can be resized without any degradation. Ideal for
                logos, icons, and graphics that need to be displayed at various
                sizes and resolutions. Supports interactivity and animation
                using XML-based tags. In summary, the choice of image format
                depends on the type of image, its intended use, and the desired
                balance between file size and quality. JPEG is suitable for
                photos, GIF for simple animations, PNG for images with
                transparency, and SVG for scalable vector graphics.
            </Essay>
        </EssaysStyled>
    );
};

export default Essays;

const EssaysStyled = styled.div``;
