import { useState } from "react";
import trpc from "~/pages/api/trpc/[trpc]";

export function CreateTweet(){
  const [text, setText] =  useState('')

  const mutation = trpc.

function handleSubmit(e){

  e.preventDefault()
}

  return (
    <form onSubmit={handleSubmit} >
<textarea onChange={(e) => setText(e.target.value)}>


<div>
  <button type="submit" >  tweet</button>
</div>

</textarea>


    </form>
  )


}