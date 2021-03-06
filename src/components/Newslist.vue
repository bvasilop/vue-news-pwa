<template>
  <div class="newslist">
    <div class="flex-container">
      <ul class="media-list">
        <transition-group name="fade" tag="div" mode="out-in">
          <li class="media" v-for="article of articles" :key="article.url">
            <div class="media-center">
              <a v-bind:href="article.url" target="_blank">
                <img class="media-object" v-bind:src="article.urlToImage" />
              </a>
            </div>
            <div class="media-body">
              <h4 class="media-heading">
                <a v-bind:href="article.url" target="_blank">
                  {{ article.title }}
                </a>
              </h4>
              <h5>
                <i>by {{ article.author }}</i>
              </h5>
              <p class="article-description">{{ article.description }}</p>
              <button class="save" v-on:click="saveArticle(article)">
                <i class="far fa-bookmark"></i> Save Article to Favorites
              </button>
              <message-container v-bind:messages="messages"></message-container>
            </div>
          </li>
        </transition-group>
      </ul>
      <ul v-if="errors && errors.length">
        <li v-for="error of errors">{{ error.message }}</li>
      </ul>
      <load-spinner v-if="showLoading"></load-spinner>
    </div>
    <favorite-articles
      v-bind:favoriteArticles="favoriteArticles"
    ></favorite-articles>
  </div>
</template>

<script>
import CubeSpinner from "@/components/CubeSpinner";
import MessageContainer from "@/components/MessageContainer";
import FavoriteArticles from "@/components/FavoriteArticles";

export default {
  name: "Newslist",
  components: {
    "load-spinner": CubeSpinner,
    "message-container": MessageContainer,
    "favorite-articles": FavoriteArticles,
  },
  props: ["source"],
  data() {
    return {
      articles: [],
      errors: [],
      showLoading: false,
      messages: [],
      favoriteArticles: [],
    };
  },
  created() {
    this.updateSource(this.source);
  },

  watch: {
    source(val) {
      this.updateSource(val);
    },
  },
  created() {
    if (this.$ls.get("favoriteArticles")) {
      this.favoriteArticles = this.$ls.get("favoriteArticles");
    }
  },
  methods: {
    updateSource(source) {
      this.axios
        .get(
          "https://cors-anywhere.herokuapp.com/https://newsapi.org/v2/top-headlines?sources=" +
            source +
            "&apiKey=30fdd9c8493742eebe75a786fc36f1bd"
        )
        .then((response) => {
          console.log(response.data);
          this.articles = response.data.articles;
        })
        .catch((e) => {
          this.errors.push(e);
        });
    },

    saveArticle: function (article) {
      this.favoriteArticles.push(article);
      this.$ls.set("favoriteArticles", this.favoriteArticles);
    },

    getArticles: function () {
      this.results = null;
      this.showLoading = true;
      let cacheLabel = "favoriteArticles_" + this.$ls.article;
      let cacheExpiry = 15 * 60 * 1000;
      if (this.$ls.get(cacheLabel)) {
        console.log("Cache Query Available");
        this.results = this.$ls.get(cacheLabel);
        this.showLoading = false;
      } else {
        console.log("No Cache Available");
        this.localStorage
          .getItem("source", {
            params: {
              q: this.article,
            },
          })
          .then((response) => {
            this.$ls.set(cacheLabel, response.data, cacheExpiry);
            console.log("New Query Cached");
            this.results = response.data;
            this.showLoading = false;
          })
          .catch((error) => {
            this.messages.push({
              type: "error",
              text: error.message,
            });
            this.showLoading = false;
          });
      }
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.flex-container {
  height: auto;
}
a {
  color: #299cff;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
}
a:hover {
  text-decoration: underline;
  color: #ffadad;
}
a:focus {
  text-decoration: none;
}
#app > div > div.newslist > ul > li:nth-child(2) > a {
  font-size: 0.5rem;
}
.media {
  border-top: 0.5px solid lightgoldenrodyellow;
}
li.media {
  font-family: "Avenir", "Lato", "Montserrat";
  background-color: #131313;
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #052440,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #052440,
    #000000
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  background: linear-gradient(to top, #445a6f, #052440);
  border-radius: 0.5rem;
  width: auto;
  height: auto;
  /*max-width:100%*/
  /*height: 30.75rem;*/
}
.newslist {
  -webkit-transition: all 1s ease-in-out;
  -moz-transition: all 1s ease-in-out;
  -ms-transition: all 1s ease-in-out;
  -o-transition: all 1s ease-in-out;
  color: azure;
  font-size: 2.25rem;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 1.25s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

ul.favorite-articles {
  font-size: 1.5rem;
  text-shadow: 1px 0.75px 0 #052440;
  color: lightgoldenrodyellow;
  border: 1px solid #082642;
  border-radius: 0.5rem;
  list-style-type: none;
  padding-top: 0px;
  width: 100%;
  float: none;
  background: #83939e; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #052440,
    #f0f2f0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #052440,
    #f0f2f0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

ul.favorite-articles li h2 a {
  text-shadow: 1px 0.75px 0 lightgoldenrodyellow;
  margin-top: 10px;
  margin-bottom: 10px;
}
ul.favorite-articles a {
  text-decoration: underline;
}
button {
  display: block; /* change this from inline-block */
  /*min-width:48px;
  min-height:48px*/
  width: auto; /* setting the width */
  margin: 0 auto; /* this will center  it */
  font-weight: 500;
  font-family: "Avenir", "Montserrat", "Lato", arial, sans-serif;
  font-size: 0.75em;
  color: lightgoldenrodyellow;
  border: none;
  text-align: center;
  border-radius: 0.5em;
  padding: 0.5rem;
  background: #000000; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #052440,
    #000000
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to top,
    #052440,
    #4a5f72
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  border: 1px solid lightgoldenrodyellow;
  -webkit-transition: all 0.2s ease-in-out;
  -moz-transition: all 0.2s ease-in-out;
  -ms-transition: all 0.2s ease-in-out;
  -o-transition: all 0.2s ease-in-out;
}
button:hover {
  border: 1px solid #072137;
  background: #1576cc; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to bottom,
    #1576cc,
    #f0f2f0
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(
    to bottom,
    #1576cc,
    #f0f2f0
  ); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  color: #072137;
}
button:focus {
  text-decoration: none;
}

/********* Samsung Galaxy S5 ************/
@media (max-width: 319px) and (min-width: 150px) {
  li.media {
    padding: 0.5rem 2.25rem 0rem 2.5rem;
    height: auto;
  }
  .media-object {
    display: none;
  }
  h4 {
    text-align: center;
    line-height: 1em;
    font-size: 2.6rem;
  }
  p {
    line-height: 1.1em;
    font-size: 2.6rem;
  }
  button {
    width: auto;
    font-weight: 300;
    padding: 0.25rem;
  }
  .article-description {
    overflow: hidden;
    display: -webkit-box; /* added ellipses for more than 5 lines*/
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
    font-size: 2rem;
  }
}
@media (max-width: 359px) and (min-width: 320px) {
  li.media {
    height: auto;
    width: 100%;
    padding: 2.25rem 0rem 0rem 0rem;
    margin-top: 0.35rem;
    margin-left: auto;
    margin-right: auto;
  }
  .media-body {
    display: block;
    width: auto;
    vertical-align: middle;
    text-align: center;
    margin-bottom: 1rem;
  }
  .media-center {
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    padding: 0;
  }
  .media-object {
    border-radius: 2rem;
    position: relative;
    text-align: center;
    height: auto;
    padding: 0rem;
    width: 100%;
    display: block;
    margin: 0 auto;
  }
  h4 {
    margin: 1rem 1rem 0rem 1rem;
    line-height: 2.35rem;
    font-size: 2.2rem;
  }
  h5 {
    text-align: left;
    margin: 1rem 0 1rem 2rem;
    font-size: 1.75rem;
    line-height: 1.5rem;
    color: #ff9c9c;
  }
  .article-description {
    text-align: left;
    line-height: 2.2rem;
    font-size: 1.85rem;
    padding-left: 1rem;
    overflow: hidden;
    display: -webkit-box; /* added ellipses for more than 5 lines*/
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
  button {
    width: auto;
    font-weight: 300;
    padding: 0.25rem;
    font-size: 2rem;
  }
  ul.favorite-articles {
    margin: 0;
    line-height: 1rem;
  }
}
@media (max-width: 568px) and (min-width: 360px) {
  li.media {
    height: auto;
    padding: 0.25rem 0rem 0rem 0rem;
  }
  .media-body {
    display: block;
    width: auto;
  }
  .media-center {
    margin: 1rem 1rem;
    padding: 0;
  }
  .media-object {
    border-radius: 2rem;
    position: relative;
    text-align: center;
    height: auto;
    padding: 0;
    width: 100%;
    display: block;
    margin: 0 auto;
  }
  h4 {
    padding: 1rem 1rem 0 1rem;
    line-height: 2.2rem;
    font-size: 2.1rem;
    text-align: center;
  }
  h5 {
    padding: 0 0 0 1rem;
    font-size: 1.65rem;
    line-height: 1.5rem;
    color: #ff9c9c;
  }
  .article-description {
    line-height: 2rem;
    font-size: 1.75rem;
    padding-left: 1rem;
    overflow: hidden;
    display: -webkit-box; /* added ellipses for more than 5 lines*/
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  }
  button {
    width: auto;
    font-weight: 300;
    padding: 0.3rem;
    font-size: 2rem;
    margin-bottom: 1rem;
  }
}
@media (max-width: 733px) and (min-width: 569px) {
  li.media {
    height: auto;
    width: 100%;
    padding: 2.25rem 0rem 0rem 0rem;
    margin-top: 0.35rem;
  }
  .media-body {
    display: block;
    width: auto;
    vertical-align: middle;
    text-align: center;
    margin-bottom: 1rem;
  }
  .media-center {
    margin: 1rem 10rem 1rem 10rem;
    padding: 0;
  }
  .media-object {
    border-radius: 2rem;
    position: relative;
    text-align: center;
    height: auto;
    padding: 0rem;
    width: 100%;
    display: block;
    margin: 0 auto;
  }
  h4 {
    margin: 1rem 8rem 0rem 8rem;
    line-height: 2rem;
    font-size: 2.5rem;
  }
  h5 {
    text-align: left;
    padding: 0 10rem 1rem 10rem;
    font-size: 1.75rem;
    line-height: 1.5rem;
    color: #ff9c9c;
  }
  .article-description {
    text-align: left;
    line-height: 2rem;
    font-size: 2rem;
    padding: 0 10rem 1rem 10rem;
    overflow: hidden;
    display: -webkit-box; /* added ellipses for more than 5 lines*/
    -webkit-line-clamp: 8;
    -webkit-box-orient: vertical;
  }
  button {
    width: auto;
    font-weight: 300;
    padding: 0.25rem;
    font-size: 2rem;
  }
}
@media (max-width: 1024px) and (min-width: 734px) {
  li.media {
    height: auto;
    width: 100%;
    margin-top: 0.35rem;
  }
  .media-body {
    display: block;
    width: auto;
    vertical-align: middle;
    text-align: center;
    margin-bottom: 1rem;
  }
  .media-center {
    margin: 2rem 13rem 1rem 13rem;
    padding: 0;
  }
  .media-object {
    border-radius: 2rem;
    position: relative;
    text-align: center;
    height: auto;
    padding: 0;
    width: 100%;
    display: block;
    margin: 0 auto;
  }
  h4 {
    padding: 1rem 14rem 0 14rem;
    line-height: 2rem;
    font-size: 2.5rem;
  }
  h5 {
    text-align: left;
    padding: 0 12rem 1rem 12rem;
    font-size: 1.75rem;
    line-height: 1.5rem;
    color: #ff9c9c;
  }
  .article-description {
    text-align: left;
    line-height: 2rem;
    font-size: 2rem;
    padding: 0 12rem 1rem 12rem;
    overflow: hidden;
  }
  button {
    width: auto;
    font-weight: 300;
    padding: 0.25rem;
    font-size: 2rem;
  }
}
@media (max-width: 3000px) and (min-width: 1025px) {
  li.media {
    height: auto;
    width: auto;
    padding: 2.25rem 0rem 0rem 0rem;
    margin-top: 0.35rem;
  }
  .media-body {
    display: block;
    width: auto;
    vertical-align: middle;
    text-align: center;
    margin-bottom: 1rem;
  }
  .media-center {
    margin: 3rem 15rem;
    padding: 0;
  }
  .media-object {
    border-radius: 15px;
    position: relative;
    text-align: center;
    width: 100%;
    display: block;
    margin: 0 auto;
  }
  h4 {
    padding: 1rem 20rem 0 20rem;
    line-height: 2.6rem;
    font-size: 2.7rem;
    text-align: center;
    font-weight: 500;
    font-family: Arial, Helvetica, sans-serif;
  }
  h5 {
    padding: 0rem 25rem 0rem 25rem;
    font-size: 2rem;
    color: #ff9c9c;
  }
  .article-description {
    text-align: left;
    line-height: 2.5rem;
    font-size: 2.3rem;
    padding: 0rem 15rem 1rem 15rem;
  }
  button {
    width: auto;
    font-weight: 300;
    padding: 0.5rem;
    font-size: 2rem;
    font-family: Arial, Helvetica, sans-serif;
  }
  .media-object:hover {
    opacity: 0.6;
    transition: opacity 0.4s ease-out;
    -moz-transition: opacity 0.4s ease-out;
    -webkit-transition: opacity 0.4s ease-out;
    -o-transition: opacity 0.4s ease-out;
  }
}
</style>
