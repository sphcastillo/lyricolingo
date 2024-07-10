"use client"

import { useRouter } from 'next/navigation';
import Link from "next/link";

function CreateChatButton() {
    const router  = useRouter();

    const createNewTranslation = async() => {
        // all  the logic here...

        router.push('/translateMusic');
    }
    return (
        <Link href="/" onClick={createNewTranslation}>
            <span className='text-white text-sm '>Find a Song</span>
        </Link>
    )
}

export default CreateChatButton;