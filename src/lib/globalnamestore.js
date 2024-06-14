
import { writable } from 'svelte/store';
import { getRandomName, getRandomColor } from '$lib/randomName';

export let random_name = writable(localStorage.random_name || getRandomName());
export let random_color = writable(localStorage.random_color || getRandomColor());

random_name.subscribe((value) => localStorage.random_name = value)
random_color.subscribe((value) => localStorage.random_color = value)





