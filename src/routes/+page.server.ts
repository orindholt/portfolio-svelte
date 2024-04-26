import { GITHUB_ACCESS_TOKEN } from "$env/static/private";

export async function load() {
	const activityData = await fetch("https://api.github.com/graphql", {
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

	return {
		activityData: activityData.data.user.contributionsCollection.contributionCalendar
	};
}
