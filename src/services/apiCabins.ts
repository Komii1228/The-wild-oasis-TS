import type { Cabin } from '../types/cabin';
import supabase from './supabase';

export async function getCabins(): Promise<Cabin[]> {
    const { data, error } = await supabase.from('cabins').select('*');

    if (error) {
        console.error(error);
        throw new Error('Cabins could not be loaded');
    }

    return data;
}

export async function deleteCabin(id: string): Promise<void> {
    const { error } = await supabase.from('cabins').delete().eq('id', id);
}
