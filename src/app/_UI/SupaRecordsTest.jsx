'use client'
import {useSession, useUser} from "@clerk/nextjs";
import {createClient} from "@supabase/supabase-js";
import {useEffect, useState} from "react";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";

export const SupaRecordsTest = () => {
  const { user } = useUser()
  const { session } = useSession()
  const [name, setName] = useState('')
  const [tasks, setTasks] = useState([])
  const [loading, setLoading] = useState(true)

  // Create a custom Supabase client that injects the Clerk session token into the request headers
  function createClerkSupabaseClient() {
    return createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL,
      process.env.NEXT_PUBLIC_SUPABASE_KEY,
      {
        async accessToken() {
          return session?.getToken() ?? null
        },
      },
    )
  }
  // Create a `client` object for accessing Supabase data using the Clerk token
  const client = createClerkSupabaseClient()

  async function createTask(e) {
    e.preventDefault()
    // Insert task into the "tasks" database
    const response = await client.from('property').insert({
      title: `${user.primaryEmailAddress.emailAddress} - ${name}`,
    })
    console.log('d256 response:', response)
    window.location.reload()
  }

  useEffect(() => {
    if (!user) return

    async function loadTasks() {
      setLoading(true)
      const { data, error } = await client.from('property').select()

      if (!error) setTasks(data)
      setLoading(false)
    console.log('d256 r:', { data, error })
    }

    loadTasks()
  }, [user])

  return (
    <div className="w-1/3 p-2 m-6 rounded-md">
      <h2 className="text-2xl">User</h2>
      <form onSubmit={createTask} className="flex gap-2">
        <Input
          autoFocus
          type="text"
          name="name"
          placeholder="Enter new task"
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <Button type="submit">Add</Button>
      </form>
      {loading && <p>Loading...</p>}
      {!loading && tasks.length > 0 && tasks.map((task) => <p key={task.id}>{task.title}</p>)}
      {!loading && tasks.length === 0 && <p>No items</p>}

    </div>
  );
};
