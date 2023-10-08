export interface IPost {
	avatarImage: string,
	name: string,
	data: string,
	description?: string,
	image?: string,
	likes: number,
	comments: number,
	share: number,
	views: number
}