import {
	type BatchRequestType,
	type EventTargetType,
	type IAccessPayload,
	type IAuth,
	type BX24,
	type IPlacementInfo,
	type ISelectCRMPayload,
	type IUser,
} from "../types"

export class MockBX24 implements BX24 {
	init(callback?: Function): void {
		if(callback) {
			callback()
		} else {
			console.log("Init")
		}
	}
	// @ts-ignore
	install(callback?: Function | string): void {
		console.log('Install')
	}

	installFinish(): void {
		console.log('InstallFinish')
	}

	getAuth(): IAuth {
		console.log('GetAuth')
		return {
			access_token: '',
			expires_in: 0,
			refresh_token: '',
			domain: '',
			member_id: '',
		}
	}
	// @ts-ignore
	refreshAuth(callback?: Function): IAuth {
		console.log('Refresh Auth')
		return {
			access_token: '',
			expires_in: 0,
			refresh_token: '',
			domain: '',
			member_id: '',
		}
	}
	// @ts-ignore
	callMethod(method: string, params: any, callback?: Function): void {
		console.log('Call Method')
	}
	// @ts-ignore
	callBatch(calls: BatchRequestType, callback?: Function, bHaltOnError?: boolean): void {
		console.log('CallBatch')
	}
	// @ts-ignore
	callBind(event: string, handler: string, auth_type?: number, callback?: Function): void {
		console.log('CallBind')
	}
	// @ts-ignore
	callUnbind(event: string, handler: string, auth_type?: number, callback?: Function): void {
		console.log('CallBind')
	}
	userOption = {
		// @ts-ignore
		set: (name: string, value: any): void => {
			console.log(`User Option: set`)
		},
		// @ts-ignore
		get: (name: string): any => {
			console.log(`User Option: get`)
		},
	}
	appOption = {
		// @ts-ignore
		set: (name: string, value: any, callback?: Function): void => {
			console.log(`App Option: set`)
		},
		// @ts-ignore
		get: (name: string): any => {
			console.log(`App Option: get`)
		},
	}
	// @ts-ignore
	selectUser(callback: (res: IUser) => void): void {
		console.log('SelectUser')
	}
	// @ts-ignore
	selectUsers(callback: (res: IUser[]) => void): void {
		console.log('SelectUser')
	}
	selectAccess = {} as IAccessPayload
	selectCRM = {} as ISelectCRMPayload

	placement = {
		// @ts-ignore
		bindEvent: (event: any, callback: Function): void => {
			console.log(`placement: bindEvent`)
		},
		// @ts-ignore
		call: (command: any, params: any, callback: Function): void => {
			console.log('placement: call')
		},
		getInterface: (callback: Function): void => {
			callback({ interface: 'placement: getInterface' })
		},
		info: (): IPlacementInfo => {
			console.log('placement: info')
			return {
				placement: '',
				options: '',
			}
		},
	}
	isAdmin(): boolean {
		console.log('isAdmin')
		return true
	}

	getLang(): string {
		console.log('getLang')
		return ''
	}
	// @ts-ignore
	resizeWindow(width: number, height: number, callback?: Function): void {
		console.log('resizeWindow')
	}
	// @ts-ignore
	fitWindow(callback?: Function): void {
		console.log('fitWindow')
	}

	reloadWindow(): void {
		console.log('reloadWindow')
	}
	// @ts-ignore
	setTitle(title: string, callback?: Function): void {
		console.log('setTitle')
	}
	// @ts-ignore
	ready(handler: Function): void {
		console.log('ready')
	}

	isReady(): boolean {
		console.log('isReady')
		return true
	}
	// @ts-ignore
	proxy(func: Function, thisObject: any): any {
		console.log('proxy')
	}

	closeApplication(): void {
		console.log('closeApplication')
	}

	getDomain(): string {
		console.log('getDomain')
		return ''
	}
	// @ts-ignore
	openApplication(params?: any, closeCallback?: Function): void {
		console.log('openApplication')
	}
	// @ts-ignore
	openPath(path: string, callback?: Function): void {
		console.log('openPath')
	}
	proxyContext(): any {
		console.log('proxyContext')
	}
	// @ts-ignore
	scrollParentWindow(scroll: number, callback?: Function): void {
		console.log('scrollParentWindow')
	}
	// @ts-ignore
	bind(element: EventTargetType, event: string, handler: any): void {
		console.log('bind')
	}
	// @ts-ignore
	unbind(element: EventTargetType, event: string, handler: any): void {
		console.log('unbind')
	}

	getScrollSize() {
		console.log('getScrollSize')
		return { scrollWidth: 0, scrollHeight: 0 }
	}
	// @ts-ignore
	loadScript(script: string | string[], callback?: Function): void {
		console.log('loadScript')
	}
	im = {
		// @ts-ignore
		callTo: (userId: string | number, video?: boolean): void => {
			console.log('im: callTo')
		},
		// @ts-ignore
		phoneTo: (phone: string): void => {
			console.log('im: phoneTo')
		},
		// @ts-ignore
		openMessenger: (dialogId?: string): void => {
			console.log('im: openMessenger')
		},
		// @ts-ignore
		openHistory: (dialogId: string): void => {
			console.log('im: openHistory')
		},
	}
}
