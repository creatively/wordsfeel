export function getColorFromXY(x: number, y: number): string {

        const YELLOW = 'f9da4d'
        const ORANGE = 'ffb365'
        const RED = 'eb4c59'
        const PINK = 'fdc2cb'
        const PURPLE = 'c55ceb'
        const BLUE = '056ff0'
        const LIGHT_BLUE = '54d1d2'
        const GREEN = '46eb7d'
        const WHITE = 'fffffff'

        if (x<430 && y<430) return ORANGE
        if (x<430 && y<570) return RED
        if (x<430) return PINK
        if (x<570 && y<430) return YELLOW
        if (x>430 && x<570 && y> 430 && y<570) return WHITE
        if (x<570) return PURPLE
        if (x>569 && y <430) return GREEN
        if (x>569 && y <570) return LIGHT_BLUE
        if (x>569 && y >569) return BLUE
        return WHITE
}