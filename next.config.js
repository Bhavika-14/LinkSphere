/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        SENDER_ID:process.env.SENDER_ID,
        PROJECT_ID:process.env.PROJECT_ID

    }
}

module.exports = nextConfig
