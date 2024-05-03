import { GITHUB_ACCESS_TOKEN } from "$env/static/private";
import type { ServerLoadEvent } from "@sveltejs/kit";

interface Calender {
	totalContributions: number;
	weeks: {
		contributionDays: {
			contributionCount: number;
			date: string;
		}[];
	}[];
}

export async function load({ request }: ServerLoadEvent) {
	let activityData = null;

	try {
		activityData = await fetch("https://api.github.com/graphql", {
			method: "POST",
			cache: "force-cache",
			headers: {
				Authorization: `Bearer ${GITHUB_ACCESS_TOKEN}`,
				"Content-Type": "application/json"
			},
			body: JSON.stringify({
				query: `
				query($userName:String!) { 
					user(login: $userName){
						contributionsCollection {
							contributionCalendar {
								totalContributions
								weeks {
									contributionDays {
										contributionCount
										date
									}
								}
							}
						}
					}
				}
			`,
				variables: {
					userName: "orindholt"
				}
			})
		}).then((res) => res.json());
	} catch (err) {
		console.error(err);
	}

	const calender: Calender =
		activityData?.data?.user?.contributionsCollection?.contributionCalendar;

	return {
		activityData: calender,
		language: request.headers.get("accept-language")
	};
}
