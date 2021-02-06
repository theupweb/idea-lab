import { supabase } from './initSupabase';

export const signInWithGithub = async() => {
    try {

        const { user } = await supabase.auth.signIn({
            provider: 'github'
        });

    } catch (error) {
        console.log(error);
    }
};

export const signInWithGoogle = async() => {
    try {

        const { user } = await supabase.auth.signIn({
            provider: 'google'
        });

    } catch (error) {
        console.log(error);
    }
};

export const signOut = async() => {
    try {

        await supabase.auth.signOut();

    } catch (error) {
        console.log(error);
    }
}