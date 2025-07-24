// app/api/admin/login/route.js
import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export async function POST(request) {
  try {
    const { email, password_hash } = await request.json()

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password_hash,
    })

    if (error || !data.session) {
      return new Response(
        JSON.stringify({ message: 'Identifiants invalides', success: false }),
        { status: 401, headers: { 'Content-Type': 'application/json' } }
      )
    }

    return new Response(
      JSON.stringify({
        message: 'Connexion réussie',
        success: true,
        token: data.session.access_token,
        user: data.user,
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    )
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Erreur serveur', error: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
