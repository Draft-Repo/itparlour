export default {
  items: [
    {
      name: "Home",
      url: "/",
      icon: "icon-home"
    },
    {
      title: true,
      name: "Resources"
    },
    {
      name: "Pages",
      url: "/pages",
      icon: "fa fa-sticky-note",
      children: [
        {
          name: "Create Page",
          url: "/page/create.exe",
          icon: "fa fa-plus-square"
        },
        {
          name: "All Pages",
          url: "/pages.msi",
          icon: "fa fa-sticky-note"
        }
      ]
    },
    {
      name: "Posts",
      url: "/posts/",
      icon: "fa fa-thumb-tack",
      children: [
        {
          name: "New Post",
          url: "/post/create",
          icon: "fa fa-pencil-square-o"
        },
        {
          name: "All Posts",
          url: "/posts/",
          icon: "fa fa-check-square-o"
        }
      ]
    },
    {
      name: "Uploads",
      url: "/uploads/",
      icon: "fa fa-upload"
    },
    {
      name: "Comments",
      url: "/comments/",
      icon: "fa fa-comments"
    },
    

    {
      name: "Taxonomy",
      url: "/taxonomy/",
      icon: "fa fa-cubes",
      children: [
        {
          name: "Categories",
          url: "/categories/",
          icon: "fa fa-object-group"
        },
        {
          name: "Tags",
          url: "/tags/",
          icon: "fa fa-tags"
        }
      ]
    },

    {
      title: true,
      name: "Others"
    },
    {
      name: "Users",
      url: "/users/",
      icon: "fa fa-users"
    },
    {
      name: "Settings",
      url: "/settings/",
      icon: "icon-settings"
    }
  ]
};
