// supabaseClient.js
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ielfhshmdkiunmhblfie.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImllbGZoc2htZGtpdW5taGJsZmllIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDUxMzcwODcsImV4cCI6MjA2MDcxMzA4N30.-7N6sZyH72VoEtz-ELUz0B180aB7dEsJynDPicE_mdo'

export  const supabase = createClient(supabaseUrl, supabaseKey)
