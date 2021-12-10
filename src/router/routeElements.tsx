import React from 'react';
import { Route } from 'react-router-dom';
import { publicRoutes } from './routes';


/**
 * Render list of public Routes.
 * @returns JSX.Element[]
 */
export const renderPublicRoutes = () => publicRoutes.map(({ path, ...rest }, i) => {
    return (
        <Route key={path + String(i)} path={`${path}`} element={<rest.loadComponent />} />
    )
})