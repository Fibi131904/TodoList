import React, { useEffect } from 'react'
import './App.css'
import { TodolistsList } from '../features/TodolistsList/TodolistsList'
import { useDispatch, useSelector } from 'react-redux'
import { AppRootStateType } from './store'
import { initializeAppTC, RequestStatusType } from './app-reducer'
import {
    AppBar,
    Button,
    CircularProgress,
    Container,
    IconButton,
    LinearProgress,
    Toolbar,
    Typography
} from '@material-ui/core'
import { Menu } from '@material-ui/icons'
import { ErrorSnackbar } from '../components/ErrorSnackbar/ErrorSnackbar'
import { BrowserRouter, Route } from 'react-router-dom'
import { Login } from '../features/TodolistsList/Login/Login'
import { logoutTC } from '../features/TodolistsList/Login/auth-reducer'


type PropsType = {
    demo?: boolean
}

function App({ demo = false }: PropsType) {
    const dispatch = useDispatch()
    const status = useSelector<AppRootStateType, RequestStatusType>((state) => state.app.status)
    const isInitialized = useSelector<AppRootStateType, boolean>((state) => state.app.isInitialized)
    const isLoggedIn = useSelector<AppRootStateType, boolean>((state) => state.auth.isLoggedIn)

    useEffect(() => {
        dispatch(initializeAppTC())
    }, [])

    if (!isInitialized) {
        return <div
            style={{ position: 'fixed', top: '30%', textAlign: 'center', width: '100%' }}>
            <CircularProgress />
        </div>
    }
    const logoutHandler = () => {
        dispatch(logoutTC())
    }


    return (
        <BrowserRouter>
            <div className="App">
                <ErrorSnackbar />
                <AppBar position="static">
                    <Toolbar>
                        <IconButton edge="start" color="inherit" aria-label="menu">
                            <Menu />
                        </IconButton>
                        <Typography variant="h6">
                            News
                        </Typography>
                        {isLoggedIn && <Button color="inherit" onClick={logoutHandler}>Logout</Button>}
                    </Toolbar>
                    {status === 'loading' && <LinearProgress />}
                </AppBar>

                <Container fixed>

                    <Route path='/' render={() => <TodolistsList />} />
                    <Route path='login' render={() => <Login />} />
                    <Route path='404' render={() => <h1 style={{ textAlign: 'center' }}>PAGE NO FOUND 404</h1>} />

                </Container>
            </div>
        </BrowserRouter>
    )
}

export default App
