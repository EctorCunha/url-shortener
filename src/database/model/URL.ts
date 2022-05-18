import { prop } from '@typegoose/typegoose'

export class URL {
    [x: string]: any
	@prop({ required: true })
	hash: string

	@prop({ required: true })
	originURL: string

	@prop({ required: true })
	shortURL: string
}

export const URLModel = new URL().getModelForClass(URL)