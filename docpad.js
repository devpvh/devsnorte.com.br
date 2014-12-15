module.exports = {

	// These are variables will be accessible via our templates

	templateData: {
		authors: require("./authors.js"),

		site: {
			title: "",
			description: "Um lugar para discutir sobre as melhores práticas de desenvolvimento",
			url: "http://devsnorte.com.br",
			image: "http://devsnorte.com.br/images/logo.png"
		},

		github: {
			user: "pvhjs",
			repo: "devsnorte.com.br"
		},

		/* Helpers
		===================================================================== */
		getAuthor: function(author) {
			if(author)
				return this.authors[author];

			return this.authors["Comunidade"];
		},

		getAuthorImage: function(author) {
			if(this.authors[author].gravatar)
				return "https://2.gravatar.com/avatar/" + this.authors[authors].gravatar;

			return this.authors[author].image;
		},

		getAuthorTwitter: function(author) {
			return "https://twitter.com/" + this.authors[author].twitter;
		},

		getGitgubUrl: function() {
			return "https://github.com/" + this.github.user + "/" + this.github.repo;
		},

		getGithubEditUrl: function(path) {
			return this.getGithubUrl() + "/edit/master/src/documents/" + path;
		},

		getTitle: function() {
			if(this.document.title)
				return "" + this.document.title + "&mdash;" + this.site.title;

			return "" + this.site.title;
		},

		getDescription: function() {
			if(this.document.description)
				return this.document.description;

			return this.site.description;
		},

		getImage: function() {
			if(this.document.image)
				return "" + this.site.url + "/images/stories/" + this.document.image;

			return this.site.image;
		},

		/* Development Environment
		===================================================================== */
		environments: {
			development: {
				templateData: {
					site: {
						url: "http://localhost:9778"
					}
				}
			}
		},

		/* Collections
		===================================================================== */
		collections: {

		},

		/* Plugins Configurations
		===================================================================== */
		plugins: {

		}
	}
}
