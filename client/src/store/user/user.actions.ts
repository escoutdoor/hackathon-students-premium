import { createAsyncThunk } from '@reduxjs/toolkit'
import { AuthService } from '@/services/auth/auth.service'
import { ICreateUserInfo, ILoginInfo } from '@/shared/interfaces/user.interface'
import { removeFromStorage } from '@/services/auth/auth.helper'
import { errorCatch } from '@/api/api.helper'

// export const register = createAsyncThunk<AuthService, ICreateUserInfo>(
// 	'auth/register',
// 	async (data, thunkApi) => {
// 		try {
// 			const response = await AuthService.register(data)

// 			return response
// 		} catch (error) {
// 			return thunkApi.rejectWithValue(error)
// 		}
// 	}
// )

// export const login = createAsyncThunk<AuthService, ILoginInfo>(
// 	'auth/login',
// 	async (data, thunkApi) => {
// 		try {
// 			const response = await AuthService.login(data)

// 			return response
// 		} catch (error) {
// 			return thunkApi.rejectWithValue(error)
// 		}
// 	}
// )

// export const logout = createAsyncThunk('auth/logout', () => {
// 	removeFromStorage()
// })

// export const checkAuth = createAsyncThunk<IAuthResponse>(
// 	'auth/check-auth',
// 	async (_, thunkApi) => {
// 		try {
// 			const response = await AuthService.getNewTokens()

// 			return response
// 		} catch (error) {
// 			if (errorCatch(error) === 'jwt expired') {
// 				thunkApi.dispatch(logout())
// 			}

// 			return thunkApi.rejectWithValue(error)
// 		}
// 	}
// )
