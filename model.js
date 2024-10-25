export default class Pokemon {
    constructor(id, name, img, type, height, weight, candy, candy_count, egg, spawn_chance, avg_spawns, spawn_time, multipliers, weaknesses, prev_evolution = null, next_evolution = null) {
        this.id = id
        this.name = name
        this.img = img
        this.type = type
        this.height = height
        this.weight = weight
        this.candy = candy
        this.candy_count = candy_count
        this.egg = egg
        this.spawn_chance = spawn_chance
        this.avg_spawns = avg_spawns
        this.spawn_time = spawn_time
        this.multipliers = multipliers
        this.weaknesses = weaknesses
        this.prev_evolution = prev_evolution
        this.next_evolution = next_evolution
    }
}
