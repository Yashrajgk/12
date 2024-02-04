import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import {
        Box, 
        Toolbar, 
        Button, 
        AppBar, 
        Typography,
        Tabs,
        Tab,
      } from '@mui/material'
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { authActions } from '../redux/store';
const Header = () => {
  // global state
  const isLogin = useSelector(state => state.isLogin)
  const dispatch = useDispatch()
  const navigate = useNavigate()
  //state
  const [value,setvalue] = useState()

  //logout
  const handleLogout = () => {
    try {
      dispatch(authActions.logout)
      alert('Logout Successfully')
      navigate('/login')
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div>
      <>
      <AppBar position='sticky'>
        <Toolbar>
            <Typography variant='='h4> My Blog App</Typography>
            {isLogin && (
              <Box display={"flex"} marginLeft={"auto"} marginRight={"auto"}>
                <Tabs
                  textColor='inherit'
                  value={value}
                  onChange={(e, val) => setvalue(val)}
                >
                  <Tab label="Blogs" LinkComponent={Link} to="/blogs" />
                  <Tab label="My Blogs" LinkComponent={Link} to="/my-blogs" />
                </Tabs>
              </Box>
            )}
            <Box display={"flex"} marginLeft={"auto"}>                
                {!isLogin && (<>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  sx={{ margin: 1, color: "white" }}
                  LinkComponent={Link} to="/register"
                >Register
                </Button>
                </>
                )}
                {isLogin && (
                <Button onClick={handleLogout} sx={{ margin: 1, color: "white" }}>Logout</Button>
                )}
            </Box>
        </Toolbar>
      </AppBar>
      </>
    </div>
  )
}

export default Header;
