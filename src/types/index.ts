export type TMethod = string

export type TParams = Record<string, any>

export type TRequestObject = {
	method: TMethod
	params?: TParams
}

export type TRequestArray = [method: TMethod, params?: TParams]

export type BatchRequestType = Record<string, TRequestObject | TRequestArray>

export type EventTargetType = Element | Document | Window

export interface IAuth {
	access_token: string
	expires_in: number
	refresh_token: string
	domain: string
	member_id: string
}
export type IAppOptions = Record<string, any>
export interface IUser {
	id: string
	name: string
	photo: string
	position: string
	sub: boolean
	sup: boolean
	url: string
}

export interface IAccess {
	id: string
	name: string
	provider: string
}

export interface IAccessPayload {
	(callback: (res: IAccess[]) => void): void
	(disablesValues: string[], callback: (res: IAccess[]) => void): IAccess[]
}

export type EntityType = 'deal' | 'lead' | 'company' | 'contact' | 'quote'

export interface ISelectCRM {
	entityType?: EntityType[]
	multiple?: boolean
	value?: string[] | Record<string, number[]>
}

export type ISelectCRMResponse = {
	[key in EntityType]: Record<string, string>
}

export interface ISelectCRMPayload {
	(callback: (res: ISelectCRMResponse) => void): void
	(config: ISelectCRM, callback: (res: ISelectCRMResponse) => void): void
}

export interface IHandlerList {
	[key: string]: (data: any) => any
}

export interface IPlacementInfo {
	placement: string
	options: any
}

// export declare function eventHandler(e?: Event): void
export type TEventHandler = (e?: Event) => void

export interface BX24 {
	init: (callback?: Function) => void
	install: (callback?: Function | string) => void
	installFinish: () => void
	getAuth: () => IAuth
	refreshAuth: (callback?: Function) => IAuth
	callMethod: (method: string, params?: any, callback?: Function) => void
	callBatch: (calls: BatchRequestType, callback?: Function, bHaltOnError?: boolean) => void
	callBind: (event: string, handler: string, auth_type?: number, callback?: Function) => void
	callUnbind: (event: string, handler: string, auth_type?: number, callback?: Function) => void
	userOption: {
		set: (name: string, value: any) => void
		get: (name: string) => any
	}
	appOption: {
		set: (name: string, value: any, callback?: (res: IAppOptions) => void) => void
		get: (name: string) => any
	}
	selectUser: (callback: (res: IUser) => void) => void
	selectUsers: (callback: (res: IUser[]) => void) => void
	selectAccess: IAccessPayload
	selectCRM: ISelectCRMPayload
	placement: {
		bindEvent: (event: any, callback: Function) => void
		call: (command: any, params: any, callback: Function) => void
		getInterface: (callback: Function) => void
		info: () => IPlacementInfo
	}
	isAdmin: () => boolean
	getLang: () => string
	resizeWindow: (width: number, height: number, callback?: Function) => void
	fitWindow: (callback?: Function) => void
	reloadWindow: () => void
	setTitle: (title: string, callback?: Function) => void
	ready: (handler: Function) => void
	isReady: () => boolean
	proxy: (func: Function, thisObject: any) => any
	closeApplication: () => void
	getDomain: () => string
	openApplication: (params?: any, closeCallback?: Function) => void
	openPath: (path: string, callback?: Function) => void
	proxyContext: () => any
	scrollParentWindow: (scroll: number, callback?: Function) => void
	bind: (element: EventTargetType, event: string, handler: TEventHandler) => void
	unbind: (element: EventTargetType, event: string, handler: TEventHandler) => void
	getScrollSize: () => { scrollWidth: number; scrollHeight: number }
	loadScript: (script: string | string[], callback?: Function) => void
	im: {
		callTo: (userId: string | number, video?: boolean) => void
		phoneTo: (phone: string) => void
		openMessenger: (dialogId?: string) => void
		openHistory: (dialogId: string) => void
	}
}

export interface IBitrixBase {
	BX24: BX24
	init: (callback?: Function) => Promise<void>
	install: (callback?: Function) => Promise<void>
	installFinish: () => void
	getAuth: () => IAuth
	refreshAuth: () => Promise<IAuth>
	callMethod: (method: string, params: any, callback?: Function) => void
	callBatch: (calls: BatchRequestType, bHaltOnError?: boolean) => Promise<any>
	callBind: (event: string, handler: string, auth_type?: number, callback?: Function) => Function
	callUnbind: (event: string, handler: string, auth_type?: number, callback?: Function) => void
	userOption: {
		set: (name: string, value: any) => void
		get: (name: string) => any
	}
	appOption: {
		set: (name: string, value: any, returnParams: boolean) => Promise<IAppOptions> | void
		get: (name: string) => any
	}
	selectUser: () => Promise<IUser>
	selectUsers: () => Promise<IUser[]>
	selectAccess: (disablesValues?: string[]) => Promise<IAccess[]>
	selectCRM: (config?: ISelectCRM) => Promise<ISelectCRMResponse>
	placement: {
		bindEvent: (event: any) => Promise<unknown>
		call: (command: any, params: any) => Promise<unknown>
		getInterface: () => Promise<unknown>
		info: () => IPlacementInfo
	}
	isAdmin: () => boolean
	getLang: () => string
	resizeWindow: (width: number, height: number) => Promise<void>
	fitWindow: () => Promise<void>
	reloadWindow: () => void
	setTitle: (title: string) => Promise<void>
	ready: () => Promise<void>
	isReady: () => boolean
	proxy: (func: Function, thisObject: any) => any
	closeApplication: () => void
	getDomain: (isOrigin?: boolean) => string
	openApplication: (params?: any) => Promise<void>
	openPath: (path: string) => Promise<void>
	proxyContext: () => any
	scrollParentWindow: (scroll: number) => Promise<void>
	bind: (element: EventTargetType, event: string, handler: TEventHandler) => Function
	unbind: (element: EventTargetType, event: string, handler: TEventHandler) => void
	getScrollSize: () => { scrollWidth: number; scrollHeight: number }
	im: {
		callTo: (userId: string | number, video?: boolean) => void
		phoneTo: (number: string) => void
		openMessenger: (dialogId?: string) => void
		openHistory: (dialogId: string) => void
	}
}

export interface IBitrixBatch {
	batch(request: BatchRequestType): Promise<any>
}

export interface IBitrixWrapper extends IBitrixBase {
	// isMobile: (opts?: IsMobileOptions) => boolean
	createBatch: (
			handlerList?: IHandlerList | undefined,
			BatchClass?: IBitrixBatch | undefined
	) => IBitrixBatch
}

// export function initBX24(): Promise<BX24>

declare global {
	interface Window {
		BX24: BX24
	}
}