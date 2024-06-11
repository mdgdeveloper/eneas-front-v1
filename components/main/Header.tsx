import { Button } from "@/components/ui/button"
import LoginSvg from "@/icons/login.svg"
import Link from "next/link"

type Props = {}

const Header = (props: Props) => {
    return (
        <div
            className="h-14 bg-slate-200"
        >
            <div className="h-14 flex items-center justify-end px-5">
                <Link href="/login">
                    <Button variant="outline">
                        <LoginSvg className="mr-2 h-6 w-6" />Login</Button>
                </Link>
            </div>

        </div >
    )
}

export default Header