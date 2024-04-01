import Image from "next/image"

export const QRComponent = () => {
    return (
        <div className="bg-light-gray w-screen h-screen flex items-center justify-center">
            <div className="bg-white rounded-xl p-4 flex flex-col w-11/12 items-center gap-5 text-center max-w-[320px]
                drop-shadow-lg">
                <Image className="rounded-xl" src='/image-qr-code.png' alt='qr-image' width={320} height={320} priority />
                <h1 className="text-dark-blue font-bold text-2xl">
                    Improve your frontend skills by building projects
                    </h1>
                <p className="text-grayish-blue mb-5">
                    Scan the QR code to visit Frontend Mentor and take your coding skills to the next level
                </p>
            </div>
        </div>
    )
}
