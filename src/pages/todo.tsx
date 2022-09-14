import Head from 'next/head'
import type { NextPage } from 'next'
import { TodoContainer } from '../features/todo/todo_container'

const TodoPage: NextPage = () => {
  return (
    <>
      <Head>
        <title>ToDo Page</title>
      </Head>
      <TodoContainer />
    </>
  )
}

export default TodoPage
