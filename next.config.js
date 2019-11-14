const glob = require('glob')

module.exports = ({
  webpack: function(config) {
    config.module.rules.push({
      test: /\.md$/,
      use: "raw-loader"
    });
    return config;
  },
   exportPathMap: async function() {
    const routes = {
      '/': { page : '/'},
      "/info": { page: "/info"}
    }
    //get all .md files in the posts dir
    const blogs = glob.sync('src/posts/**/*.md')

    //remove path and extension to leave filename only
    const blogSlugs = blogs.map(file => file.split('/')[2].replace(/ /g, '-').slice(0, - 3).trim())
    
    //add each blog to the routes obj
    blogSlugs.forEach(blog => {
      routes[`/blog/${blog}`] = { page: '/blog/[slug]', query: { slug: blog } };
    });
  
    return routes
  }
});