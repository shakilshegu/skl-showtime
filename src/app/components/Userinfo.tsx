import { RouterOutputs } from "@/trpc/clients/type";

export const UserInfo = ({ hello }: { hello: RouterOutputs['hello'] }) => {
    return <div>
        <div>{hello.content}</div>
        <div>{hello.title}</div>
    </div>
}