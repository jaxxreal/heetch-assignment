## Your task

Create a single page web application with a multi level navigation. This navigation will form the foundation of the web app. The contents of the navigation will be populated dynamically from hitting a `permissions` web service. More details are described below.

### Timeline

The task usually takes around 8 hours in total to be completed. Obviously you'll do it in chunks. We'd however ideally receive your solution within a week. It's also ok if you need a little more time. Just let us know.

### Stack

- **React** is our most common framework of choice, thus it would be a preferred tool to use for this implementation.
- Any other tools/components are absolutely of your choice.

### Product requirements

1. Implement a multi level navigation (this means that each element is either link to a route or expands another, deeper level of the navigation)
2. The content of the navigation should be populated from the `permissions` endpoint

- Top level menu items are being built based on `keys` of JSON object returned from `permissions`
- Sub items are held in `children` property of the object

3. Items in the navigation should be ordered by `order` attribute in item object
4. Name of the  item is taken from the object key, e.g.:

```
...
products: {
    order: 1,
    actions: {
...
```

creates `Products` menu item.

5. Implement possibility of listing all cities per country and all products, taking into consideration the permissions
6. Implement possibility of adding, editing and saving the country and product
7. Each of the navigation items and route permissions are determined by each blocks `actions` object. If the `action` value is missing consider it `false`
8. Your application should implement 3 routes:

- `/`

  - The root page of the application and will be the starting point of the app

- `/products`

  - Display a list of products.
  - Ability to update an existing product from the list.
  - Ability to add a new product

- `/cities`
  - Display a list of Cities.
  - Ability to update an existing city from the list.
  - Ability to add a new city