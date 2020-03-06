## Main points

The app based on create-react-app generator. I used it because I have limited time for implementation and need to start working on a business logic ASAP rather than configuring tools.

There are no tests. This is due to time limitation and because fulfilling all requirements point is prior than ensuring the app stability. I'm not saying that we should test the code, but the assignment w/ given time boundaries, is not the case for testing.

Aside from React, I used react-router and debounce packages. react-router is a pretty usual solution when it comes to a routing in a react-app - lot of documentation, use cases and big community. Also, it's easier to grow the app using react-router - since v4 a multi level navigation is an easy thing. debounce is for debouncing user input while editing products/cities.

There is no state manager. Since there is not that much data flowing through the app, react context is a perfect fit for our needs. And in the same time, it's easy to replace it w/ mobx, Redux or yet another state manager.

For API requests I use a few-lines wrapper around fetch API. Also, you may notice that some data, such my Github account is hardcoded. Why? We don't do any complicated stuff here, eg no page loaders, no logging, no auth. Since then we do not need axios or something similar for AJAX requests. Also, that solution is a future proof. With this additional layer, we can easily replace fetch with custom API service or another AJAX client.

Styling. For reusable components, I used CSS-modules because it provides isolated styles and still allows use a full-power of CSS. For more general styling such as the app scaffold I used regular CSS. It might be refactored to use CSS-modules too, but I didn't do that b/c of time limitation.

## Architecture.

I used the next code organization:

- providers. Place where data or functionality providers live. Any functionality or data that should be available across the app.
- resources. A collection of functions for getting data from a backend.
- routes. The place where the most app's code live. I use domain driven design. In that way, under Continents folder you can see all descendants of a Continents route. Eg Continents → Countries → Cities. The same pattern works for a Product route. Any of this route could be moved into its own directory if its logic grows big enough.
- services. Any logic that can be factored out and needs to be reusable. We have api service here, that used in resources. A next candidate for this folder? For example, we decide to bring browser notifications and want to encapsulate its logic in a single place.
- ui. Place for UI primitives or shared UI elements. For example: I started working on continents route first, when I switched to products, I noticed that I can reuse a submit form and input design from cities UI. So, I moved these common elements into UI folder.
- index.js. The app starting point. Here we render the app on html page. Also, the place where we initialize routing and apply providers. For sure, if any of these steps getting bigger or become more complicated we can split initializations steps across few files.
- App.js. The app scaffolding. Here we render the app header that should be visible across all pages and routes content.

## What can be done better?

Better loaders. A better spinner when we load permissions, and a spinner when a user adds a city/product. Also, there is should be some indicator when a user edits city/product data. Maybe a toast notification?

General UX. Guess, it would be better if we render continents/countries/cities as columns. And open up editor rightmost.

Code generation. Any project have to follow some code organization patters. It's easier when a project has a generator for a component/route/service etc.

Logging. Would be great to know why and when the app got crashed, right?

Tests. I'd start from very basic scenarios. Make sure that data displays to a user, they can navigate the app, they can submit a form, they can see errors if a form filled up incorrectly and so on.

Refactoring. There is some duplication between add new city and add new product forms.