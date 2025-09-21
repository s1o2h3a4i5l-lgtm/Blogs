// script.js
class BlogPlatform {
    constructor() {
        this.blogs = [];
        this.users = [];
        this.currentUser = null;
        this.editingBlogId = null;
        
        this.initializeData();
        this.bindEvents();
        this.showPage('home');
        this.renderBlogs();
    }

    initializeData() {
        // Load data from memory or initialize with sample data
        this.blogs = [
            {
                id: 1,
                title: "Getting Started with Web Development",
                author: "Alice Johnson",
                content: `Web development is an exciting field that's constantly evolving. Whether you're just starting out or looking to expand your skills, there's always something new to learn.

In this comprehensive guide, we'll explore the fundamentals of web development, including HTML, CSS, and JavaScript. We'll also discuss modern frameworks and tools that can help you build amazing websites and applications.

HTML forms the structure of your web pages, CSS makes them look beautiful, and JavaScript adds interactivity. Together, these three technologies form the foundation of modern web development.

Some key concepts to master:
- Semantic HTML markup
- Responsive CSS design
- DOM manipulation with JavaScript
- Version control with Git
- Modern development workflows

Remember, the best way to learn web development is by building projects. Start small, be consistent, and don't be afraid to make mistakes. Every developer was once a beginner!`,
                category: "Technology",
                date: "2024-09-15",
                views: 245
            },
            {
                id: 2,
                title: "10 Tips for Better Work-Life Balance",
                author: "David Smith",
                content: `In today's fast-paced world, maintaining a healthy work-life balance can be challenging. However, it's essential for our mental health, relationships, and overall well-being.

Here are 10 practical tips to help you achieve better balance:

1. Set clear boundaries between work and personal time
2. Learn to say no to non-essential commitments
3. Prioritize self-care activities
4. Use technology mindfully
5. Create a dedicated workspace at home
6. Schedule regular breaks throughout your day
7. Practice mindfulness and meditation
8. Maintain social connections
9. Get enough sleep and exercise
10. Review and adjust your goals regularly

Remember, work-life balance looks different for everyone. What matters most is finding what works for you and being flexible enough to adjust as your circumstances change.

The key is to be intentional about how you spend your time and energy. Small changes can make a big difference in your overall quality of life.`,
                category: "Lifestyle",
                date: "2024-09-10",
                views: 189
            },
            {
                id: 3,
                title: "Hidden Gems: Off-the-Beaten-Path Destinations",
                author: "Emma Rodriguez",
                content: `Tired of crowded tourist destinations? Looking for unique travel experiences that few people know about? Here are some incredible hidden gems around the world that should be on every adventurous traveler's list.

**Socotra Island, Yemen**
Often called the "Galapagos of the Indian Ocean," this UNESCO World Heritage site is home to plants and animals found nowhere else on Earth. The Dragon's Blood Tree is just one of the many unique species you'll encounter.

**Faroe Islands**
Located between Iceland and Norway, these 18 islands offer dramatic landscapes, grass-roof houses, and some of the most pristine nature in Europe. Perfect for hiking and photography enthusiasts.

**Raja Ampat, Indonesia**
Known as the "Four Kings," this remote archipelago boasts the richest marine biodiversity on the planet. It's a paradise for divers and snorkelers.

**Salar de Uyuni, Bolivia**
During the rainy season, this salt flat becomes the world's largest mirror, creating surreal reflections of the sky. It's one of the most photographed places on Earth, yet still relatively unknown to mainstream tourism.

**Lofoten Islands, Norway**
Experience the midnight sun in summer or the Northern Lights in winter. These islands offer spectacular scenery with their dramatic peaks rising directly from the sea.

Each of these destinations offers something truly special for the intrepid traveler willing to venture off the beaten path.`,
                category: "Travel",
                date: "2024-09-08",
                views: 312
            },
            {
                id: 4,
                title: "The Science Behind Coffee: From Bean to Cup",
                author: "Dr. Michael Chen",
                content: `Coffee is more than just a morning ritual – it's a complex beverage with fascinating science behind every cup. Let's explore the journey from bean to brew and understand what makes great coffee.

**The Coffee Plant**
Coffee comes from the seeds (beans) of Coffea plants, primarily Coffea arabica and Coffea robusta. These plants grow in tropical regions around the world, often at high altitudes where cooler temperatures slow the maturation process, resulting in more complex flavors.

**Processing Methods**
After harvesting, coffee cherries undergo processing:
- Washed process: Removes fruit before drying
- Natural process: Dries with fruit intact
- Honey process: Removes skin but leaves some fruit

Each method significantly impacts the final flavor profile.

**The Maillard Reaction**
During roasting, the Maillard reaction occurs between amino acids and sugars, creating hundreds of flavor compounds. This is the same reaction that browns bread and sears meat.

**Extraction Science**
Brewing coffee is essentially controlled extraction. Water dissolves soluble compounds from ground coffee, and the goal is to extract the right balance of acids, sugars, and oils while avoiding over-extraction of bitter compounds.

Factors affecting extraction:
- Grind size
- Water temperature
- Contact time
- Water quality
- Coffee-to-water ratio

Understanding these principles can help you brew better coffee at home!`,
                category: "Science",
                date: "2024-09-05",
                views: 156
            },
            {
                id: 5,
                title: "My Journey Learning to Code at 35",
                author: "Sarah Williams",
                content: `Two years ago, at 35, I made a decision that would completely change my life: I decided to learn programming. As a marketing manager with no technical background, this seemed like an impossible dream. Today, I'm working as a full-stack developer at a startup I love.

**The Beginning**
It started with curiosity. I was tired of always having to rely on developers for simple website changes. I thought, "How hard can it be?" (Spoiler alert: harder than I expected, but not impossible!)

**Choosing My Path**
After research, I decided to focus on web development. I started with freeCodeCamp and YouTube tutorials, learning HTML, CSS, and JavaScript. The key was consistency – I coded for at least an hour every day, no matter what.

**The Struggles**
There were many moments of frustration. Debugging became my nemesis. I'd spend hours on problems that seemed simple. Impostor syndrome hit hard – I constantly felt like I wasn't smart enough or that I was too old to start.

**The Breakthrough**
After six months of basics, I built my first real project – a recipe app. Seeing something I created actually work was incredible. That's when I knew I could do this.

**Landing My First Job**
It took 18 months of learning, building projects, and networking before I landed my first developer role. The interview process was nerve-wracking, but all the practice paid off.

**Advice for Career Changers**
- Start with the fundamentals and be patient
- Build projects that interest you
- Join coding communities online
- Don't compare your progress to others
- Embrace the learning process

Age is just a number when it comes to learning. If you're thinking about making the switch, start today!`,
                category: "Personal",
                date: "2024-09-01",
                views: 423
            }
        ];

        this.users = [
            {
                id: 1,
                name: "Alice Johnson",
                email: "alice@example.com",
                password: "password123"
            }
        ];
    }

    bindEvents() {
        // Navigation events
        document.getElementById('homeBtn').addEventListener('click', () => this.showPage('home'));
        document.getElementById('createBtn').addEventListener('click', () => this.showPage('create'));
        document.getElementById('accountBtn').addEventListener('click', () => this.showPage('account'));

        // Search functionality
        document.getElementById('searchBtn').addEventListener('click', () => this.searchBlogs());
        document.getElementById('searchInput').addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.searchBlogs();
        });

        // Blog form events
        document.getElementById('blogForm').addEventListener('submit', (e) => this.handleBlogSubmit(e));
        document.getElementById('cancelBtn').addEventListener('click', () => this.cancelEdit());

        // Account form events
        document.getElementById('loginFormElement').addEventListener('submit', (e) => this.handleLogin(e));
        document.getElementById('registerFormElement').addEventListener('submit', (e) => this.handleRegister(e));
        document.getElementById('showRegister').addEventListener('click', () => this.showRegisterForm());
        document.getElementById('showLogin').addEventListener('click', () => this.showLoginForm());
        document.getElementById('logoutBtn').addEventListener('click', () => this.logout());

        // Modal events
        document.querySelector('.close').addEventListener('click', () => this.closeModal());
        document.getElementById('blogModal').addEventListener('click', (e) => {
            if (e.target === document.getElementById('blogModal')) {
                this.closeModal();
            }
        });
    }

    showPage(page) {
        // Hide all pages
        document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
        document.querySelectorAll('.nav-btn').forEach(btn => btn.classList.remove('active'));

        // Show selected page
        document.getElementById(page + 'Page').classList.add('active');
        document.getElementById(page + 'Btn').classList.add('active');

        // Update account page based on login status
        if (page === 'account') {
            this.updateAccountPage();
        }

        // Clear create form when switching pages
        if (page !== 'create') {
            this.clearForm();
        }
    }

    renderBlogs(blogsToRender = this.blogs) {
        const blogGrid = document.getElementById('blogGrid');
        blogGrid.innerHTML = '';

        if (blogsToRender.length === 0) {
            blogGrid.innerHTML = '<p style="text-align: center; color: white; grid-column: 1/-1;">No blogs found.</p>';
            return;
        }

        blogsToRender.forEach(blog => {
            const blogCard = document.createElement('div');
            blogCard.className = 'blog-card';
            
            const excerpt = blog.content.substring(0, 150) + '...';
            
            blogCard.innerHTML = `
                <div class="blog-header">
                    <h3 class="blog-title">${blog.title}</h3>
                    <div class="blog-meta">
                        <span>By ${blog.author}</span>
                        <span>${blog.date}</span>
                    </div>
                </div>
                <div class="blog-content">
                    <p class="blog-excerpt">${excerpt}</p>
                    <span class="blog-category">${blog.category}</span>
                </div>
                <div class="blog-actions">
                    ${this.currentUser && this.currentUser.name === blog.author ? 
                        `<button class="action-btn edit-btn" onclick="blogApp.editBlog(${blog.id})">✏️</button>
                         <button class="action-btn delete-btn" onclick="blogApp.deleteBlog(${blog.id})">🗑️</button>` 
                        : ''}
                </div>
            `;
            
            blogCard.addEventListener('click', (e) => {
                if (!e.target.classList.contains('action-btn')) {
                    this.openBlogModal(blog);
                }
            });
            
            blogGrid.appendChild(blogCard);
        });
    }

    searchBlogs() {
        const searchTerm = document.getElementById('searchInput').value.toLowerCase();
        if (!searchTerm) {
            this.renderBlogs();
            return;
        }

        const filteredBlogs = this.blogs.filter(blog => 
            blog.title.toLowerCase().includes(searchTerm) ||
            blog.content.toLowerCase().includes(searchTerm) ||
            blog.author.toLowerCase().includes(searchTerm) ||
            blog.category.toLowerCase().includes(searchTerm)
        );

        this.renderBlogs(filteredBlogs);
    }

    openBlogModal(blog) {
        const modal = document.getElementById('blogModal');
        const modalContent = document.getElementById('modalContent');
        
        modalContent.innerHTML = `
            <div class="modal-header">
                <h2 class="modal-title">${blog.title}</h2>
                <div class="modal-meta">
                    By ${blog.author} | ${blog.date} | ${blog.category} | ${blog.views} views
                </div>
            </div>
            <div class="modal-content-text">${blog.content}</div>
        `;
        
        // Increment views
        blog.views++;
        
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    closeModal() {
        document.getElementById('blogModal').style.display = 'none';
        document.body.style.overflow = 'auto';
    }

    handleBlogSubmit(e) {
        e.preventDefault();
        
        if (!this.currentUser) {
            alert('Please log in to create or edit posts');
            return;
        }

        const title = document.getElementById('postTitle').value;
        const author = this.currentUser.name;
        const category = document.getElementById('postCategory').value;
        const content = document.getElementById('postContent').value;

        if (this.editingBlogId) {
            // Update existing blog
            const blogIndex = this.blogs.findIndex(b => b.id === this.editingBlogId);
            if (blogIndex !== -1) {
                this.blogs[blogIndex] = {
                    ...this.blogs[blogIndex],
                    title,
                    author,
                    category,
                    content
                };
            }
            this.editingBlogId = null;
            document.getElementById('formTitle').textContent = 'Create New Post';
            document.getElementById('submitBtn').textContent = 'Publish Post';
        } else {
            // Create new blog
            const newBlog = {
                id: Date.now(),
                title,
                author,
                category,
                content,
                date: new Date().toISOString().split('T')[0],
                views: 0
            };
            this.blogs.unshift(newBlog);
        }

        this.clearForm();
        this.showPage('home');
        this.renderBlogs();
    }

    editBlog(id) {
        const blog = this.blogs.find(b => b.id === id);
        if (!blog) return;

        if (!this.currentUser || this.currentUser.name !== blog.author) {
            alert('You can only edit your own posts');
            return;
        }

        this.editingBlogId = id;
        document.getElementById('postTitle').value = blog.title;
        document.getElementById('postAuthor').value = blog.author;
        document.getElementById('postCategory').value = blog.category;
        document.getElementById('postContent').value = blog.content;
        
        document.getElementById('formTitle').textContent = 'Edit Post';
        document.getElementById('submitBtn').textContent = 'Update Post';
        
        this.showPage('create');
    }

    deleteBlog(id) {
        const blog = this.blogs.find(b => b.id === id);
        if (!blog) return;

        if (!this.currentUser || this.currentUser.name !== blog.author) {
            alert('You can only delete your own posts');
            return;
        }

        if (confirm('Are you sure you want to delete this post?')) {
            this.blogs = this.blogs.filter(b => b.id !== id);
            this.renderBlogs();
            this.updateAccountPage();
        }
    }

    cancelEdit() {
        this.editingBlogId = null;
        this.clearForm();
        document.getElementById('formTitle').textContent = 'Create New Post';
        document.getElementById('submitBtn').textContent = 'Publish Post';
        this.showPage('home');
    }

    clearForm() {
        document.getElementById('blogForm').reset();
        this.editingBlogId = null;
    }

    handleLogin(e) {
        e.preventDefault();
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        const user = this.users.find(u => u.email === email && u.password === password);
        
        if (user) {
            this.currentUser = user;
            this.updateAccountPage();
            document.getElementById('loginFormElement').reset();
        } else {
            alert('Invalid email or password');
        }
    }

    handleRegister(e) {
        e.preventDefault();
        const name = document.getElementById('registerName').value;
        const email = document.getElementById('registerEmail').value;
        const password = document.getElementById('registerPassword').value;

        // Check if user already exists
        if (this.users.find(u => u.email === email)) {
            alert('User with this email already exists');
            return;
        }

        const newUser = {
            id: Date.now(),
            name,
            email,
            password
        };

        this.users.push(newUser);
        this.currentUser = newUser;
        this.updateAccountPage();
        document.getElementById('registerFormElement').reset();
    }

    showLoginForm() {
        document.getElementById('loginForm').style.display = 'block';
        document.getElementById('registerForm').style.display = 'none';
    }

    showRegisterForm() {
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('registerForm').style.display = 'block';
    }

    logout() {
        this.currentUser = null;
        this.updateAccountPage();
        this.renderBlogs(); // Re-render to remove edit/delete buttons
    }

    updateAccountPage() {
        const loginForm = document.getElementById('loginForm');
        const registerForm = document.getElementById('registerForm');
        const dashboard = document.getElementById('userDashboard');

        if (this.currentUser) {
            loginForm.style.display = 'none';
            registerForm.style.display = 'none';
            dashboard.style.display = 'block';
            
            document.getElementById('userName').textContent = this.currentUser.name;
            
            const userPosts = this.blogs.filter(blog => blog.author === this.currentUser.name);
            document.getElementById('userPostCount').textContent = userPosts.length;
            
            const totalViews = userPosts.reduce((sum, blog) => sum + blog.views, 0);
            document.getElementById('totalViews').textContent = totalViews;
            
            this.renderUserPosts(userPosts);
        } else {
            loginForm.style.display = 'block';
            registerForm.style.display = 'none';
            dashboard.style.display = 'none';
        }
    }

    renderUserPosts(posts) {
        const userPostsList = document.getElementById('userPostsList');
        userPostsList.innerHTML = '';

        if (posts.length === 0) {
            userPostsList.innerHTML = '<p>You haven\'t written any posts yet.</p>';
            return;
        }

        posts.forEach(post => {
            const postItem = document.createElement('div');
            postItem.className = 'user-post-item';
            postItem.innerHTML = `
                <div>
                    <h4>${post.title}</h4>
                    <p>${post.date} | ${post.views} views</p>
                </div>
                <div>
                    <button class="action-btn edit-btn" onclick="blogApp.editBlog(${post.id})" style="margin-right: 10px;">Edit</button>
                    <button class="action-btn delete-btn" onclick="blogApp.deleteBlog(${post.id})">Delete</button>
                </div>
            `;
            userPostsList.appendChild(postItem);
        });
    }
}

// Initialize the blog platform when the page loads
document.addEventListener('DOMContentLoaded', () => {
    window.blogApp = new BlogPlatform();
});