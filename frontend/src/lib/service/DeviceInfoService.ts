import { eventService } from "@/lib/service/EventService";

class DeviceInfoService
{
	private _screenWidth: number = 0;
	private _screenHeight: number = 0;

	constructor()
	{
		window.addEventListener("resize", this.onResize);
		this.onResize();
	}

	onResize()
	{
		this._screenWidth = window.innerWidth;
		this._screenHeight = window.innerHeight;
		eventService.emit(DEVICE_INFO_EVENTS.WINDOW_RESIZE, {width: window.innerWidth, height: window.innerHeight});
	}

	get screenWidth()
	{
		return this._screenWidth;
	}

	get screenHeight()
	{
		return this._screenHeight;
	}
}

export enum DEVICE_INFO_EVENTS {
	WINDOW_RESIZE = "window-resize"
}

//export singleton
export const deviceInfoService = new DeviceInfoService();
