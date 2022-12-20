import { RouteProps } from '../../domain/layout';
import React, { lazy } from 'react';
import AuthenticationLayout from '../Layout/Authentication';
import MainLayout from '../Layout/MainLayout';
import { Navigate, Outlet } from 'react-router-dom';
import Login from 'Pages/Authentication/Login';

const Dashboard = lazy(() => import('Pages/Dashboard'));
const Devices = lazy(() => import('Pages/DevicesManager/Devices'));
const Cards = lazy(() => import('Pages/CardsManager/Cards'));
const CardForm = lazy(() => import('Pages/CardsManager/CardForm'));
const CardSetup = lazy(() => import('Pages/CardsManager/CardSetup'));
const Syncher = lazy(() => import('Pages/Syncher'));
const BlockedCards = lazy(() => import('Pages/CardsManager/BlockedCards'));
const ActivityLog = lazy(() => import('Pages/ActivityLog'));
const AdminProfile = lazy(() => import('Pages/AdminProfile'));

export const ROUTES: RouteProps[] = [
    {
        path: '/',
        element: <AuthenticationLayout />,
        children: [
            { path: '/', element: <Login /> },
            { path: '*', element: <Navigate to="/" /> },
        ],
    },
    {
        path: '/',
        element: <MainLayout />,
        children: [
            { path: '/', element: <Dashboard /> },
            { path: 'dashboard', element: <Navigate to="/" /> },
            {
                path: '/devices',
                element: (
                    <>
                        <Devices />
                        <Outlet />
                    </>
                ),

                children: [
                    { path: 'devices', element: <Devices /> },
                    { path: '*', element: <Devices /> },
                ],
            },
            {
                path: 'cards',
                element: <Outlet />,
                children: [
                    { path: '', element: <Cards /> },
                    { path: 'card-setup', element: <CardSetup /> },
                    { path: 'blocked-cards', element: <BlockedCards /> },
                    { path: 'card-form', element: <CardForm /> },
                ],
            },
            { path: 'syncher', element: <Syncher /> },
            { path: 'activity-log', element: <ActivityLog /> },
            { path: 'admin', element: <AdminProfile /> },
        ],
    },
];
