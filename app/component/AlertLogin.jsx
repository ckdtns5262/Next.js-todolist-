import Link from "next/link"


export default function AlertLogin() {

    return (
    <div className="alert-box">
        <div className="text-red-700 mt-12 text-center alert-center space-y-4">
            <h4 className="text-xl font-bold">로그인 후 이용가능 합니다</h4>
                <button className="p-2 border border-gray-300 bg-blue-500 rounded-3xl text-white">
                <Link href='/register'>
                    회원가입
                </Link>
                    </button>
            </div>
    
        
    
    </div>)
}