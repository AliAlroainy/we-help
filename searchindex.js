// search index for WYSIWYG Web Builder
var database_length = 0;

function SearchPage(url, title, keywords, description)
{
   this.url = url;
   this.title = title;
   this.keywords = keywords;
   this.description = description;
   return this;
}

function SearchDatabase()
{
   database_length = 0;
   this[database_length++] = new SearchPage("main.html", "Untitled Page", "USER NAME   Wehelp   ", "");
   this[database_length++] = new SearchPage("home.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("prfile.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("login.html", "Untitled Page", " ", "");
   this[database_length++] = new SearchPage("logup.html", "Untitled Page", " ", "");
   return this;
}
