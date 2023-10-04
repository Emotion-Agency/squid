import Richtext from 'storyblok-js-client'

export interface iMeta {
  title: string
  description?: string
  image?: {
    _uid: string
    filename: string
  }
}

export interface iLink {
  linktype: string
  url: string
  cached_url: string
}

interface iButton {
  link: iLink
  text_button: string
  action?: string
}

export interface iStory {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  content: any
  slug: string
  created_at: string
  first_published_at: string
  published_at: string
  name: string
  _uid?: string
  uuid: string
  id: number
  title?: string
  meta?: iMeta[]
}

export interface iImage {
  _uid: string
  filename: string
  name?: string
  alt?: string
}

interface iBlogVideo {
  _uid: string
  video_id: string
}

export interface iPostBlock {
  _uid: string
  text_formatting: Richtext
  button: iButton[]
  youtube_video: iBlogVideo[]
}

export interface iPost {
  _uid: string
  name: string
  category: string
  date: string
  client: string
  description: string
  image: string
  slug: string
}

export interface iStyledText {
  text: Richtext
}
