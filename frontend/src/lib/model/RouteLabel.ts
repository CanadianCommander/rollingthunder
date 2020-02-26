export default class RouteLabel
{
	public label: string = "";
	public route: any = null;

	public constructor(label: string, route:any)
	{
		this.label = label;
		this.route = route;
	}
}
