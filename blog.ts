type Blog = {
    title: string;
    date: string;
    description: string;
    image: string; //(ex. “./images/me.png”)
    imageAlt: string;
    slug: string; //a slug is a URL name used to redirect to a specific page
};

const blogs: Blog[] = [
    {
        title: "Blog #1",
        date: "10/27/2024",
        description: "First blog ever!",
        image: "./images/minionselfie.png",
        imageAlt: "Minion taking selfie.",
        slug: "https://youtu.be/dQw4w9WgXcQ?si=FzgDhj32G1P34rF4"
    },
    {
        title: "Blog #2",
        date: "10/28/2024",
        description: "Second blog ever!",
        image: "./images/minionselfie.png",
        imageAlt: "Minion taking selfie.",
        slug: "https://youtu.be/dQw4w9WgXcQ?si=FzgDhj32G1P34rF4"
    },
];


const blogContainer = document.getElementById("blog-container");

blogs.forEach(blog => {
	const blogDiv = document.createElement("div");
    blogDiv.className = "blog-post";

    const blogTitle = document.createElement("h1");
    blogTitle.textContent = blog.title;
    blogDiv.appendChild(blogTitle);

    const blogImage = document.createElement("img");
    blogImage.src = blog.image;
    blogImage.alt = "Image for ${blog.title}";
    blogDiv.appendChild(blogImage);

    const blogDescription = document.createElement("p");
    blogDescription.textContent = blog.description; 
    blogDiv.appendChild(blogDescription);

    blogContainer&&blogContainer.appendChild(blogDiv); //if it is not null, run
});