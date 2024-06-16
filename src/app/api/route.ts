import { sendEmail } from "@/config/nodemailer"


export async function POST(request: Request) {

    try {
        const body = await request.json()
        console.log(body)
        if (!body.email) {
            return Response.json({ "message": "Email is no present" }, { status: 400 })
        }
        const mailerResponse = await sendEmail(
            body.email,
            "Welcome to Our Newsletter!",
            "<h1>Welcome to Our Newsletter!</h1>",
            "<p>Welcome to our NewsLetter family! We're thrilled to have you on board.</p><br/><p>By joining us, you'll receive exclusive updates, the latest news, and special offers directly in your inbox. Our goal is to keep you informed and engaged with content that matters most to you.</p> <p>Please take on count this is a success Test of the Newsletter Project</p> <p>Best Regards!</p>"
        )

        console.log(mailerResponse)
        return Response.json({ "success": true })
    } catch (error) {
        console.log(error)
        return Response.json({ "message": "Error sending email" }, { status: 500 })

    }
}