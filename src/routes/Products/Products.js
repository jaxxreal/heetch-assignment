import React from 'react';

import { api } from '../../services/api';
import { PermissionContext } from '../../providers/PermissionProvider';
import { mapObjectToArray } from '../../utils';
import { Product } from './Product/Product';
import { AddNewProduct } from './Product/AddNewProduct';
import { createProduct, changeProduct } from '../../resources/products';

export const Products = () => {
    const { permissions } = React.useContext(PermissionContext);
    const [isLoading, setLoading] = React.useState(false);
    const [products, setProducts] = React.useState([]);

    const getProducts = React.useCallback(async() => {
        setLoading(true);
        const { getItems } = permissions.products.actions;

        const response = await api(getItems.type, getItems.URL);

        setProducts(mapObjectToArray(response.products));
        setLoading(false);
    }, [permissions.products.actions]);

    React.useEffect(() => {
        getProducts();
    }, [getProducts]);

    function handleProductChange(changes) {
        const { id, ...payload } = changes;
        changeProduct(id, payload);
    }

    async function handleProductSubmit(newProduct) {
        const { success } = await createProduct(newProduct);

        if (success) {
            getProducts();
        }

        return success;
    }

    return (
        <div>
            <h1>Products</h1>
            { isLoading ? (
                <span>Loading products...</span>
            ) : (
                <div>
                    { products.map(p => (
                        <Product
                            key={p.id}
                            id={p.id}
                            name={p.name}
                            description={p.description}
                            onChange={handleProductChange}
                        />
                    )) }

                    <AddNewProduct
                        onProductSubmit={handleProductSubmit}
                    />
                </div>
            ) }
        </div>
    )
};