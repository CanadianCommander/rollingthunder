
class EventService
{
	eventListeners: Map<string, Function[]> = new Map<string, Function[]>();

	listen(event:string, callback:EventListener)
	{
		if (this.eventListeners.has(event))
		{
			this.eventListeners.get(event)?.push(callback);
		}
		else
		{
			this.eventListeners.set(event, [callback]);
		}
	}

	emit(event:string, data?:any)
	{
		let callbacks = this.eventListeners.get(event);
		if (callbacks)
		{
			for (let callback of callbacks)
			{
				callback(data);
			}
		}
	}
}

export const eventService = new EventService();
