workspace "CatchUp News Application" {
  model {
    user = person "User" "An individual browsing and exploring news sources and articles from various news sources"
    catchup = softwareSystem "CatchUp" "A web-based platform for aggregating and displaying news articles and sources from external APIs" {
      webApp = container "CatchUp Web App" "Serves static assets to the user's browser to initialize the news application" {
        technology "Nginx"
      }
      spa = container "CatchUp Single Page Application" "Handles dynamic rendering of news sources and articles, providing an interactive user experience in the browser" "SPA" {
        technology "Angular 19.2.10, Angular Material 19.2.10, TypeScript, RxJS 7.8.1"
        appComponent = component "AppComponent" "Orchestrates the application's layout and coordinates rendering of UI components" {
          technology "Angular, TypeScript"
        }
        articleList = component "ArticleListComponent" "Presents a collection of news articles from a source in a list format" {
          technology "Angular, TypeScript"
        }
        articleItem = component "ArticleItemComponent" "Displays individual article details in a card format with title, image, and source information" {
          technology "Angular, TypeScript"
        }
        sourceList = component "SourceListComponent" "Presents a selectable list of news sources" {
          technology "Angular, TypeScript"
        }
        sourceItem = component "SourceItemComponent" "Displays an individual source avatar and name" {
          technology "Angular, TypeScript"
        }
        footerContent = component "FooterContentComponent" "Renders attribution details for external APIs used in the application" {
          technology "Angular, TypeScript"
        }
        languageSwitcher = component "LanguageSwitcherComponent" "Allows users to select their preferred language for the application" {
          technology "Angular, TypeScript"
        }
        sideNavigationBar = component "SideNavigationBarComponent" "Provides a navigation menu for users to switch between different news sources" {
          technology "Angular, TypeScript"
        }
        newsApiService = component "NewsApiService" "Retrieves news sources and articles from an external news provider API" {
          technology "Angular, TypeScript"
        }
        logoApiService = component "LogoApiService" "Fetches logo images for news sources from an external logo provider API" {
          technology "Angular, TypeScript"
        }
        articleAssembler = component "ArticleAssembler" "Transforms raw article data into a structured format for display" {
          technology "TypeScript"
        }
        sourceAssembler = component "SourceAssembler" "Converts raw source data into a structured format with associated logos" {
          technology "TypeScript"
        }
      }
    }

    newsApi = softwareSystem "NewsAPI.org" "Provides news articles and source metadata from global publishers" "External"
    clearbit = softwareSystem "Clearbit Logo API" "Supplies logo images for news sources based on their domain names" "External"

    user -> webApp "Requests static content" "HTTPS"
    webApp -> spa "Delivers Angular app (HTML, CSS, JS)" "HTTPS"
    user -> spa "Interacts with app" "Browser"
    appComponent -> sideNavigationBar "Renders sources and articles"
    sideNavigationBar -> languageSwitcher "Renders language options"
    sideNavigationBar -> sourceList "Renders sources"
    sideNavigationBar -> articleList "Renders articles"
    sideNavigationBar -> footerContent "Displays attributions"
    sideNavigationBar -> newsApiService "Fetches sources and articles by source id" "HTTPS"
    sourceList -> sourceItem "Renders sources"
    articleList -> articleItem "Renders articles"
    newsApiService -> newsApi "Fetches sources and articles" "HTTPS"
    newsApiService -> articleAssembler "Converts articles"
    newsApiService -> sourceAssembler "Converts sources"
    articleAssembler -> logoApiService "Gets logo URLs"
    sourceAssembler -> logoApiService "Gets logo URLs"
    logoApiService -> clearbit "Fetches logos" "HTTPS"
  }

  views {
    systemContext catchup "SystemContext" {
      include *
      autoLayout
    }
    container catchup "Containers" {
      include *
      autoLayout
    }

    component spa "Components" {
      include *
      autoLayout
    }

    styles {
      element "Person" {
        shape Person
      }
      element "SPA" {
        shape WebBrowser
        background gray
        color white
      }
    }
  }
}
