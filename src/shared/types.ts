export type EventStore = 'sport';

export type EventResult = 'success' | 'error';

export interface PaginatedListState<T> {
  items: Array<T>,
  count: number,
  refresh(): void,
  loading: boolean,
  error: Error | null,
  last: boolean
}

export type ListHooksState<T> = {
  count: number,
  items: Array<T>,
  loading: boolean,
  error: Error | null
};

export type QueryResult <T> = [Error | null, boolean?, T?];

export type MutationResult <T> = [Error | null, T?];

export type RequestError = {
  error?: any,
  error_description?: string,
  errors: {
    [key: string]: {
      msg: string
    }
  }
}

export interface PaginatedResponse<T> {
  count: number,
  items: Array<T>
};

export interface ModalState {
  isOpen: boolean,
  title: string,
  maxWidth: Size,
  props: object,
  component?: React.ComponentType
}

export interface ObjectRef<T> {
  id: T | null
}

export type CalendarEvent = {
  id?: number,
  title: string,
  start: string,
  end: string
}

export interface Assist {
  pointId: number,
  personId: number,
  person?: Person,
  point?: Point,
}

export interface Point extends Event {
  id: number,
  minute: number,
  gameId: number,
  personId: number,
  teamId: number,
  status: 'VALID' | 'CANCELED',
  person?: Person,
  assists?: Array<Assist>,
}

export interface PersonPlaysGame extends Event {
  type?: 'in' | 'out',
  gameId: number,
  personId: number,
  teamId: number,
  inMinute: number,
  outMinute: number,
  person?: Person
};

export interface Participation {
  gameId: number,
  teamId: number,
  inMinute: number | null,
  outMinute: number | null,
  points: Array<Point>
}

export interface PersonHasTeam {
  personId: number,
  teamId: number,
  number: number,
  createdAt: Date,
  leavedAt: Date | null,
}

export interface Person {
  id: number,
  name: string,
  lastname: string,
  gender: string,
  photo: string,
  user?: User | null,
  teams?: Array<Team>,
  createdAt: Date,
  deletedAt: Date
  userId: number | null,
  participation: Participation
}

export interface Role {
  id: number,
  name: string
}

export interface User {
  id: number,
  username: string,
  email: string,
  streamKey?: string,
  roleId: number,
  personId: number,
  person: Person,
  role: Role,
  createdAt: string,
}

export interface Sport {
  id: number,
  name: string,
  color: string,
  team?: Team,
  createdAt?: string
}

export interface Team {
  id: number,
  name: string,
  sportId: number,
  sport?: Sport,
  personHasTeam?: PersonHasTeam
  points?: Array<Point>,
  createdAt: string
}

export interface Competition {
  id: number,
  name: string,
  startDate: string,
  matchTime: number,
  quantityOfTeams: number,
  quantityOfPlayers: number,
  status: string,
  sportId: number,
  sport?: Sport
}

export interface Game {
  id: number,
  date: string,
  isLive: boolean,
  isFinished: boolean,
  streamKey: string,
  competitionId: number,
  localId: number,
  visitorId: number,
  competition?: Competition,
  local?: Team,
  visitor?: Team,
  points?: Array<Point>,
  createdAt: string,
  deletedAt: string | null,
}

export interface Event {
  type?: 'in' | 'out' | 'point'
}

export type Size = 'xs' | 'sm' | 'md' | 'lg';