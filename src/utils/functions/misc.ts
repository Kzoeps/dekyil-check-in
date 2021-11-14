import humanId from 'human-id'

export const generateId = (): string => {
	return humanId({
		capitalize: false,
		separator: '-'
	})
}
